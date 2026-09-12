"use server";

import { db } from "@/db/drizzle";
import { customers, smsLogs } from "@/db/schema";
import { verifySession } from "@/lib";
import { sendSMS } from "@/lib/sms";
import { and, eq, inArray, isNotNull, not, sql } from "drizzle-orm";

const BATTERY_REMINDER_MSG =
  "প্রিয় গ্রাহক, আপনার আইপিএস ব্যাটারির পানি চেক করুন এবং আইপিএস-এর সঠিক যত্ন নিন। ধন্যবাদান্তে SE POWER IPS \n CC:09649355555-01322247772";

const USER_MANUAL_MSG =
  "প্রিয় গ্রাহক আপনার আই পি এস ও ব্যাটারি দীর্ঘস্থায়িত্ব করতে নিচের ব্যবহার বিধি মেনে চুলুন। \nhttps://seelectronicsbd.com/usage-guide";

const SMS_REPEAT_WINDOW_MS = 24 * 60 * 60 * 1000;

function normalizePhone(phone: string | null | undefined) {
  if (!phone) return null;

  const digits = phone.toString().trim().replace(/[^\d+]/g, "");
  if (!digits) return null;

  const normalized = digits.startsWith("+") ? digits : digits;
  const noPlus = normalized.replace(/^\+/, "");

  if (!noPlus) return null;

  if (noPlus.startsWith("88")) return `+${noPlus}`;
  if (noPlus.startsWith("0")) return `+88${noPlus}`;

  return `+${noPlus}`;
}

function dedupeCustomerPhones(
  selectedCustomers: { phone: string | null }[],
): { phone: string }[] {
  const seen = new Set<string>();
  const unique: { phone: string }[] = [];

  for (const customer of selectedCustomers) {
    const normalizedPhone = normalizePhone(customer.phone);
    if (!normalizedPhone || seen.has(normalizedPhone)) continue;

    seen.add(normalizedPhone);
    unique.push({ phone: normalizedPhone });
  }

  return unique;
}

async function wasMessageSentRecently(phone: string, message: string) {
  const cutoff = new Date(Date.now() - SMS_REPEAT_WINDOW_MS);

  try {
    const [recentLog] = await db
      .select({ id: smsLogs.id })
      .from(smsLogs)
      .where(
        and(
          eq(smsLogs.phoneNumber, phone),
          eq(smsLogs.message, message),
          sql`${smsLogs.createdAt} > ${cutoff}`,
        ),
      )
      .limit(1);

    return Boolean(recentLog);
  } catch (error) {
    console.error("Failed to check recent SMS log:", error);
    return false;
  }
}

async function sendSmsToCustomers(
  selectedCustomers: { phone: string | null }[],
  message: string,
) {
  let sentCount = 0;
  let failedCount = 0;
  let mockedCount = 0;
  let duplicateCount = 0;
  const batchSize = 10;

  const uniqueCustomers = dedupeCustomerPhones(selectedCustomers);

  if (uniqueCustomers.length === 0) {
    return {
      success: false,
      sentCount: 0,
      failedCount: 0,
      mockedCount: 0,
      duplicateCount: 0,
      message: "No valid phone numbers available to send SMS.",
    };
  }

  const eligibleCustomers: { phone: string }[] = [];

  for (const customer of uniqueCustomers) {
    try {
      const alreadySent = await wasMessageSentRecently(customer.phone, message);
      if (alreadySent) {
        duplicateCount++;
        continue;
      }
      eligibleCustomers.push(customer);
    } catch (error) {
      console.error("Error checking duplicate SMS guard:", error);
      failedCount++;
    }
  }

  if (eligibleCustomers.length === 0) {
    return {
      success: false,
      sentCount: 0,
      failedCount,
      mockedCount: 0,
      duplicateCount,
      message:
        duplicateCount > 0
          ? `No new SMS was sent because ${duplicateCount} customer(s) already received this message within the last 24 hours.`
          : "No eligible customers were available for this SMS campaign.",
    };
  }

  for (let i = 0; i < eligibleCustomers.length; i += batchSize) {
    const batch = eligibleCustomers.slice(i, i + batchSize);
    const results = await Promise.allSettled(
      batch.map(async (customer) => {
        return sendSMS(customer.phone, message);
      }),
    );

    for (const result of results) {
      if (result.status === "rejected") {
        failedCount++;
      } else if (result.value && "mocked" in result.value) {
        mockedCount++;
      } else {
        sentCount++;
      }
    }
  }

  const attemptedCount = sentCount + mockedCount + failedCount;
  const totalNewSends = sentCount + mockedCount;

  return {
    success: totalNewSends > 0 && failedCount === 0,
    sentCount,
    failedCount,
    mockedCount,
    duplicateCount,
    message:
      totalNewSends === 0
        ? "No SMS was sent."
        : mockedCount > 0
          ? `SMS simulation completed for ${mockedCount} customers. Configure the SMS provider to send real messages.${duplicateCount ? ` Skipped ${duplicateCount} duplicate customer(s).` : ""}`
          : `Sent ${sentCount} SMS successfully${failedCount ? `; ${failedCount} failed.` : "."}${duplicateCount ? ` Skipped ${duplicateCount} duplicate customer(s).` : ""}`,
  };
}

export async function sendBatteryReminderToSelected(customerIds: string[]) {
  try {
    const session = await verifySession(false, "admin");
    if (!session) return { success: false, message: "Unauthorized" };

    const uniqueCustomerIds = [...new Set((customerIds || []).filter(Boolean))];
    if (uniqueCustomerIds.length === 0) {
      return { success: false, message: "No customers selected." };
    }

    const selectedCustomers = await db.query.customers.findMany({
      where: inArray(customers.customerId, uniqueCustomerIds),
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

    const uniqueCustomerIds = [...new Set((customerIds || []).filter(Boolean))];
    if (uniqueCustomerIds.length === 0) {
      return { success: false, message: "No customers selected." };
    }

    const selectedCustomers = await db.query.customers.findMany({
      where: inArray(customers.customerId, uniqueCustomerIds),
      columns: { phone: true },
    });

    if (!selectedCustomers.length) {
      return { success: false, message: "Selected customers not found." };
    }

    return sendSmsToCustomers(selectedCustomers, USER_MANUAL_MSG);
  } catch (error) {
    console.error("Error sending selected user manual SMS:", error);
    return { success: false, message: "Failed to send User Manual SMS." };
  }
}
