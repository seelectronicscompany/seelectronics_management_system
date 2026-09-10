"use server";

import { db } from "@/db/drizzle";
import { customers } from "@/db/schema";
import { verifySession } from "@/lib";
import { sendSMS } from "@/lib/sms";
import { and, eq, inArray, isNotNull, not } from "drizzle-orm";

const BATTERY_REMINDER_MSG =
  "প্রিয় গ্রাহক, এস ই ইলেকট্রনিক্সের পক্ষ থেকে শুভেচ্ছা। আপনার আইপিএস ব্যাটারি দীর্ঘস্থায়ী নিশ্চিত করতে নিয়মিত ব্যাটারির পানি চেক করুন এবং আইপিএস-এর সঠিক যত্ন নিন। ধন্যবাদান্তে এস ই পাওয়ার আইপিএস।";

const USER_MANUAL_MSG =
  "প্রিয় গ্রাহক আপনার আই পি এস ও ব্যাটারি বেশিদিন ব্যবহার করতে ব্যবহার বিধি মেনে চুলুন। এস ই ইলেকট্রনিকস\nhttps://seelectronicsbd.com/usage-guide";

async function sendSmsToCustomers(
  selectedCustomers: { phone: string | null }[],
  message: string,
) {
  let sentCount = 0;
  let failedCount = 0;
  let mockedCount = 0;
  const batchSize = 10;

  for (let i = 0; i < selectedCustomers.length; i += batchSize) {
    const batch = selectedCustomers.slice(i, i + batchSize);
    const results = await Promise.allSettled(
      batch.map(async (customer) => {
        if (!customer.phone) return { skipped: true };
        return sendSMS(customer.phone, message);
      }),
    );

    for (const result of results) {
      if (result.status === "rejected") failedCount++;
      else if (result.value && "skipped" in result.value) continue;
      else if (result.value && "mocked" in result.value) mockedCount++;
      else sentCount++;
    }
  }

  const attemptedCount = sentCount + mockedCount + failedCount;
  return {
    success: failedCount === 0 && attemptedCount > 0,
    sentCount,
    failedCount,
    mockedCount,
    message:
      mockedCount > 0
        ? `SMS simulation completed for ${mockedCount} customers. Configure the SMS provider to send real messages.`
        : `Sent ${sentCount} SMS successfully${failedCount ? `; ${failedCount} failed.` : "."}`,
  };
}

export async function sendBatteryReminderToSelected(customerIds: string[]) {
  try {
    const session = await verifySession(false, "admin");
    if (!session) return { success: false, message: "Unauthorized" };

    if (!customerIds || customerIds.length === 0) {
      return { success: false, message: "No customers selected." };
    }

    const selectedCustomers = await db.query.customers.findMany({
      where: inArray(customers.customerId, customerIds),
      columns: { phone: true, name: true },
    });

    if (selectedCustomers.length === 0) {
      return { success: false, message: "Selected customers not found." };
    }

    return sendSmsToCustomers(selectedCustomers, BATTERY_REMINDER_MSG);
  } catch (error) {
    console.error("Error sending bulk SMS to selected:", error);
    return { success: false, message: "Failed to send SMS." };
  }
}

export async function sendBatteryReminderToAll() {
  try {
    const session = await verifySession(false, "admin");
    if (!session) return { success: false, message: "Unauthorized" };

    // Fetch all customers that have a phone number
    const allCustomers = await db.query.customers.findMany({
      where: and(isNotNull(customers.phone), not(eq(customers.phone, ""))),
      columns: { phone: true },
    });

    if (allCustomers.length === 0) {
      return {
        success: false,
        message: "No valid customer phone numbers found.",
      };
    }

    return sendSmsToCustomers(allCustomers, BATTERY_REMINDER_MSG);
  } catch (error) {
    console.error("Error sending bulk SMS to all:", error);
    return { success: false, message: "Failed to send SMS to all customers." };
  }
}

export async function sendUserManualSmsToAll() {
  try {
    const session = await verifySession(false, "admin");
    if (!session) return { success: false, message: "Unauthorized" };

    const allCustomers = await db.query.customers.findMany({
      where: and(isNotNull(customers.phone), not(eq(customers.phone, ""))),
      columns: { phone: true },
    });

    if (allCustomers.length === 0) {
      return {
        success: false,
        message: "No valid customer phone numbers found.",
      };
    }

    return sendSmsToCustomers(allCustomers, USER_MANUAL_MSG);
  } catch (error) {
    console.error("Error sending bulk user manual SMS to all:", error);
    return {
      success: false,
      message: "Failed to send User Manual SMS to all customers.",
    };
  }
}

export async function sendUserManualSmsToSelected(customerIds: string[]) {
  try {
    const session = await verifySession(false, "admin");
    if (!session) return { success: false, message: "Unauthorized" };
    if (!customerIds.length) return { success: false, message: "No customers selected." };

    const selectedCustomers = await db.query.customers.findMany({
      where: inArray(customers.customerId, customerIds),
      columns: { phone: true },
    });
    if (!selectedCustomers.length) return { success: false, message: "Selected customers not found." };

    return sendSmsToCustomers(selectedCustomers, USER_MANUAL_MSG);
  } catch (error) {
    console.error("Error sending selected user manual SMS:", error);
    return { success: false, message: "Failed to send User Manual SMS." };
  }
}
