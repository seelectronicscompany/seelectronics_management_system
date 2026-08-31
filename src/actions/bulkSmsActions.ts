"use server";

import { db } from "@/db/drizzle";
import { customers } from "@/db/schema";
import { verifySession } from "@/lib";
import { sendSMS } from "@/lib/sms";
import { inArray, eq, isNotNull, and, not } from "drizzle-orm";

const BATTERY_REMINDER_MSG = "প্রিয় গ্রাহক, এস ই ইলেকট্রনিক্সের পক্ষ থেকে শুভেচ্ছা। আপনার আইপিএসের দীর্ঘস্থায়ী নিশ্চিত করতে নিয়মিত ব্যাটারির পানি চেক করুন এবং আইপিএস-এর সঠিক যত্ন নিন। ধন্যবাদান্তে—এস ই পাওয়ার আইপিএস।";

export async function sendBatteryReminderToSelected(customerIds: string[]) {
  try {
    const session = await verifySession(false, "admin");
    if (!session) return { success: false, message: "Unauthorized" };

    if (!customerIds || customerIds.length === 0) {
      return { success: false, message: "No customers selected." };
    }

    const selectedCustomers = await db.query.customers.findMany({
      where: inArray(customers.customerId, customerIds),
      columns: { phone: true, name: true }
    });

    if (selectedCustomers.length === 0) {
      return { success: false, message: "Selected customers not found." };
    }

    // Process in smaller batches to avoid overwhelming the SMS API or memory
    let successCount = 0;
    const batchSize = 10;
    
    for (let i = 0; i < selectedCustomers.length; i += batchSize) {
      const batch = selectedCustomers.slice(i, i + batchSize);
      await Promise.all(
        batch.map(async (customer) => {
          if (customer.phone) {
            await sendSMS(customer.phone, BATTERY_REMINDER_MSG);
            successCount++;
          }
        })
      );
    }

    return { success: true, count: successCount, message: `Sent ${successCount} SMS successfully.` };
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
      columns: { phone: true }
    });

    if (allCustomers.length === 0) {
      return { success: false, message: "No valid customer phone numbers found." };
    }

    let successCount = 0;
    const batchSize = 10;
    
    for (let i = 0; i < allCustomers.length; i += batchSize) {
      const batch = allCustomers.slice(i, i + batchSize);
      await Promise.all(
        batch.map(async (customer) => {
          if (customer.phone) {
            await sendSMS(customer.phone, BATTERY_REMINDER_MSG);
            successCount++;
          }
        })
      );
    }

    return { success: true, count: successCount, message: `Sent ${successCount} SMS successfully.` };
  } catch (error) {
    console.error("Error sending bulk SMS to all:", error);
    return { success: false, message: "Failed to send SMS to all customers." };
  }
}
