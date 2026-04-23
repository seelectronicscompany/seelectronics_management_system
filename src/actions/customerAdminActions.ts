"use server";

import { db } from "@/db/drizzle";
import { customers, invoices, products, referralBonuses } from "@/db/schema";
import { verifySession } from "@/lib";
import { SearchParams } from "@/types";
import { and, eq, ilike, or, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

/**
 * Fetches metadata (pagination info) for customers listing in admin dashboard
 */
export const getCustomersMetadata = async ({
  query,
  page = "1",
  limit = "20",
}: SearchParams) => {
  const q = `%${query}%`;
  const filters = query
    ? or(
        ilike(customers.customerId, q),
        ilike(customers.name, q),
        ilike(customers.phone, q),
        ilike(customers.address, q),
        ilike(customers.invoiceNumber, q),
      )
    : undefined;

  const result = await db
    .select({ count: sql<number>`count(*)` })
    .from(customers)
    .where(filters);
  const totalRecords = Number(result[0].count);
  const totalPages = limit ? Math.ceil(totalRecords / Number(limit)) : 1;

  return {
    currentPage: Number(page),
    totalRecords: totalRecords,
    totalPages: totalPages,
    currentLimit: Number(limit),
  };
};

/**
 * Fetches customers list for admin dashboard with search and pagination
 */
export const getCustomers = async ({
  query,
  page = "1",
  limit = "20",
}: SearchParams) => {
  try {
    const session = await verifySession(false, "admin");
    if (!session) return { success: false, message: "Unauthorized" };

    const q = `%${query}%`;
    const offset = page && limit ? (Number(page) - 1) * Number(limit) : 0;

    const customersData = await db.query.customers.findMany({
      where: query
        ? or(
            ilike(customers.customerId, q),
            ilike(customers.name, q),
            ilike(customers.phone, q),
            ilike(customers.address, q),
            ilike(customers.invoiceNumber, q),
          )
        : undefined,
      limit: limit ? Number(limit) : undefined,
      offset: offset,
      orderBy: (customers, { desc }) => [desc(customers.createdAt)],
      with: {
        invoice: true,
      },
    });

    return { success: true, data: customersData };
  } catch (error) {
    console.error("Error fetching customers:", error);
    return { success: false, message: "Could not fetch customers" };
  }
};

/**
 * Fetches a single customer's full profile for admin view
 */
export const getCustomerById = async (customerId: string) => {
  try {
    const session = await verifySession(false);
    if (!session) return { success: false, message: "Unauthorized" };

    const customerData = await db.query.customers.findFirst({
      where: eq(customers.customerId, customerId),
      with: {
        invoice: {
          with: {
            products: true,
          },
        },
        services: true,
        feedbacks: true,
        referredByRecord: {
          with: {
            referrer: true,
          },
        },
      },
    });

    if (!customerData) return { success: false, message: "Customer not found" };

    return { success: true, data: customerData };
  } catch (error) {
    console.error("Error fetching customer by id:", error);
    return { success: false, message: "Something went wrong" };
  }
};

/**
 * Creates a new customer record with associated invoice and products
 */
export const createCustomer = async (data: any, sendLink = false) => {
  try {
    const session = await verifySession(false, "admin");
    if (!session) return { success: false, message: "Unauthorized" };

    const { generateRandomId, generateInvoiceNumber } = await import("@/utils");

    const customerId = generateRandomId();
    const invoiceNumber = generateInvoiceNumber();

    // Track referral info to notify after transaction
    let referrerInfo: { customerId: string; phone: string; bonusEarned: number } | null = null;

    // Start a transaction
    // 1. Create customer
    await db.insert(customers).values({
      customerId,
      invoiceNumber,
      name: data.name,
      phone: data.phone,
      address: data.address,
      referredByVipCard: data.referralVipCard || null,
    });

    // 2. Create invoice
    const [invoiceRecord] = await db
      .insert(invoices)
      .values({
        invoiceNumber,
        customerId,
        customerName: data.name,
        customerPhone: data.phone,
        customerAddress: data.address,
        date: new Date(data.invoice.date),
        paymentType: data.invoice.paymentType,
        subtotal: Number(data.invoice.subtotal) || 0,
        total: Number(data.invoice.total) || 0,
        dueAmount: Number(data.invoice.dueAmount) || 0,
      })
      .returning();

    // 3. Create products
    if (data.products && data.products.length > 0) {
      await db.insert(products).values(
        data.products.map((p: any) => ({
          invoiceId: invoiceRecord.id,
          type: p.type,
          model: p.model,
          quantity: Number(p.quantity) || 1,
          unitPrice: Number(p.unitPrice) || 0,
          warrantyStartDate: new Date(p.warrantyStartDate),
          warrantyDurationMonths: Number(p.warrantyDurationMonths),
        })),
      );
    }

    if (sendLink) {
      const { sendInvoiceDownloadLink } = await import("./invoiceActions");
      await sendInvoiceDownloadLink(
        { name: data.name, phoneNumber: data.phone },
        {
          invoiceNumber,
          date: data.invoice.date,
          totalPrice: data.invoice.total,
          invoiceType: "customer-invoice",
        },
      );
    }

    // 4. Handle referral if VIP card number provided
    if (data.referralVipCard) {
      const referrer = await db.query.customers.findFirst({
        where: and(
          eq(customers.vipCardNumber, data.referralVipCard),
          eq(customers.vipStatus, "approved"),
        ),
      });

      if (referrer) {
        const purchaseTotal = data.invoice.total;
        const discountGiven = Number(purchaseTotal) * 0.05;
        const bonusEarned = Number(purchaseTotal) * 0.02;

        // Log the referral bonus
        await db.insert(referralBonuses).values({
          referrerCustomerId: referrer.customerId,
          referrerVipCard: data.referralVipCard,
          referredCustomerId: customerId,
          referredCustomerName: data.name,
          purchaseAmount: purchaseTotal,
          discountGiven,
          bonusEarned,
        });

        // Credit the referrer's balance
        await db
          .update(customers)
          .set({
            referralBalance: sql`COALESCE(${customers.referralBalance}, 0) + ${bonusEarned}`,
          })
          .where(eq(customers.customerId, referrer.customerId));

        // Apply 5% discount to the invoice total
        const discountedTotal = Number(purchaseTotal) - discountGiven;
        await db
          .update(invoices)
          .set({ total: discountedTotal })
          .where(eq(invoices.invoiceNumber, invoiceNumber));

        referrerInfo = {
          customerId: referrer.customerId,
          phone: referrer.phone,
          bonusEarned,
        };
      }
    }

    revalidatePath("/customers");
    revalidatePath("/customer/referral");
    revalidatePath("/referral-payments");
    const result = { success: true, message: "Customer created successfully", referrerInfo };

    // Notify referrer after transaction succeeds
    if (result.success && result.referrerInfo) {
      const info = result.referrerInfo;
      try {
        const { notifyCustomer } = await import("./notificationActions");
        await notifyCustomer({
          customerId: info.customerId,
          phoneNumber: info.phone,
          type: "referral_bonus",
          message: `আপনার রেফারেলে ${data.name} ক্রয় করেছেন। আপনি ৳${Math.floor(info.bonusEarned).toLocaleString()} রেফারেল বোনাস পেয়েছেন!`,
          link: "/customer/referral",
        });
      } catch (e) {
        console.error("Failed to notify referrer:", e);
      }
    }

    // Send welcome SMS to the newly created customer
    if (result.success) {
      try {
        const { sendSMS } = await import("@/lib/sms");
        const loginLink = "https://seelectronicspro.vercel.app/customer/login";
        const smsMessage =
          `স্বাগতম! আপনার SE Electronics অ্যাকাউন্ট তৈরি হয়েছে।\n` +
          `Customer ID: ${customerId}\n` +
          `Invoice ID: ${invoiceNumber}\n` +
          `লগইন করুন: ${loginLink}`;
        await sendSMS(data.phone, smsMessage);
      } catch (e) {
        console.error("Failed to send welcome SMS to new customer:", e);
      }
    }

    return result;
  } catch (error) {
    console.error("Error creating customer:", error);
    return { success: false, message: "Failed to create customer record" };
  }
};

/**
 * Updates an existing customer record and its associated invoice/products
 */
export const updateCustomer = async (
  customerId: string,
  data: any,
  sendLink = false,
) => {
  try {
    const session = await verifySession(false, "admin");
    if (!session) return { success: false, message: "Unauthorized" };

    const customer = await db.query.customers.findFirst({
      where: eq(customers.customerId, customerId),
      with: { invoice: true },
    });

    if (!customer) return { success: false, message: "Customer not found" };

    // 1. Update customer
    await db
      .update(customers)
      .set({
        name: data.name,
        phone: data.phone,
        address: data.address,
      })
      .where(eq(customers.customerId, customerId));

    // 2. Update invoice
    await db
      .update(invoices)
      .set({
        customerName: data.name,
        customerPhone: data.phone,
        customerAddress: data.address,
        date: new Date(data.invoice.date),
        paymentType: data.invoice.paymentType,
        subtotal: Number(data.invoice.subtotal) || 0,
        total: Number(data.invoice.total) || 0,
        dueAmount: Number(data.invoice.dueAmount) || 0,
      })
      .where(eq(invoices.customerId, customerId));

    // 3. Update products (delete and recreate for simplicity)
    if (customer.invoice) {
      await db
        .delete(products)
        .where(eq(products.invoiceId, customer.invoice.id));

      if (data.products && data.products.length > 0) {
        await db.insert(products).values(
          data.products.map((p: any) => ({
            invoiceId: customer.invoice!.id,
            type: p.type,
            model: p.model,
            quantity: Number(p.quantity) || 1,
            unitPrice: Number(p.unitPrice) || 0,
            warrantyStartDate: new Date(p.warrantyStartDate),
            warrantyDurationMonths: Number(p.warrantyDurationMonths),
          })),
        );
      }
    }

    if (sendLink) {
      const { sendInvoiceDownloadLink } = await import("./invoiceActions");
      await sendInvoiceDownloadLink(
        { name: data.name, phoneNumber: data.phone },
        {
          invoiceNumber: customer.invoiceNumber,
          date: data.invoice.date,
          totalPrice: data.invoice.total,
          invoiceType: "customer-invoice",
        },
      );
    }

    revalidatePath("/customers");
    revalidatePath(`/staff/customers/${customerId}`);
    return { success: true, message: "Customer updated successfully" };
  } catch (error) {
    console.error("Error updating customer:", error);
    return { success: false, message: "Failed to update customer record" };
  }
};

/**
 * Deletes a customer and all associated data
 */
export const deleteCustomer = async (id: string) => {
  try {
    const session = await verifySession(false, "admin");
    if (!session) return { success: false, message: "Unauthorized" };

    await db.delete(customers).where(eq(customers.id, id));

    revalidatePath("/customers");
    return { success: true, message: "Customer deleted successfully" };
  } catch (error) {
    console.error("Error deleting customer:", error);
    return { success: false, message: "Failed to delete customer" };
  }
};
