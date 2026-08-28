"use server";

import { db } from "@/db/drizzle";
import { verifySession, sendSMS } from "@/lib";
import { getBroadcastId } from "@/lib/voice";

const BATTERY_REMINDER_SMS_TEXT = "প্রিয় গ্রাহক, এস ই ইলেকট্রনিক্সের পক্ষ থেকে শুভেচ্ছা। আপনার আইপিএসের দীর্ঘস্থায়ী নিশ্চিত করতে নিয়মিত ব্যাটারির পানি চেক করুন এবং আইপিএস-এর সঠিক যত্ন নিন। ধন্যবাদান্তে—এস ই পাওয়ার আইপিএস।";

export const sendBulkBatteryReminder = async (type: "sms" | "voice") => {
  try {
    const session = await verifySession(false, "admin");
    if (!session) return { success: false, message: "Unauthorized" };

    // Fetch all unique customer phone numbers
    // Assuming customers table has a 'phone' column
    const customersData = await db.query.customers.findMany({
      columns: {
        phone: true,
      },
    });

    // Extract non-empty, unique phone numbers
    const phoneNumbers = Array.from(
      new Set(
        customersData
          .map((c) => c.phone)
          .filter((p) => p && p.trim().length >= 11)
      )
    ) as string[];

    if (phoneNumbers.length === 0) {
      return { success: false, message: "No valid customer phone numbers found" };
    }

    if (type === "sms") {
      // Fire and forget so we don't block the request for too long
      // Send them sequentially or in small batches
      setTimeout(async () => {
        for (const phone of phoneNumbers) {
          try {
            await sendSMS(phone, BATTERY_REMINDER_SMS_TEXT);
            // wait a little bit to avoid rate limits
            await new Promise((r) => setTimeout(r, 100));
          } catch (e) {
            console.error(`Failed to send bulk SMS to ${phone}`, e);
          }
        }
      }, 0);
      return {
        success: true,
        message: `Bulk SMS job started for ${phoneNumbers.length} customers.`,
      };
    } else if (type === "voice") {
      setTimeout(async () => {
        try {
            const { sendVoiceBroadcast } = await import("@/lib/voice");
            const broadcast_id = getBroadcastId("battery_health_check");
            
            if (!broadcast_id) {
              console.error("Missing broadcast ID for battery_health_check");
              return;
            }

            // MRAM might have a limit on numbers per request. 
            // Send in batches of 100
            const BATCH_SIZE = 100;
            for (let i = 0; i < phoneNumbers.length; i += BATCH_SIZE) {
               const batch = phoneNumbers.slice(i, i + BATCH_SIZE);
               const cleanNumbers = batch.map((phone) => {
                  let p = phone.replace(/\D/g, "");
                  if (p.length === 10 && p.startsWith("1")) {
                    p = `880${p}`;
                  } else if (p.length === 11 && p.startsWith("01")) {
                    p = `88${p}`;
                  }
                  return p;
               }).filter((p) => /^8801[0-9]{9}$/.test(p));

               if (cleanNumbers.length === 0) continue;

               await sendVoiceBroadcast({
                 title: `Bulk Battery Reminder Batch ${i / BATCH_SIZE + 1}`,
                 broadcast_id,
                 numbers: cleanNumbers
               });

               // Small delay between batches
               await new Promise((r) => setTimeout(r, 1000));
            }
        } catch (e) {
            console.error("Bulk voice broadcast failed", e);
        }
      }, 0);

      return {
        success: true,
        message: `Bulk voice broadcast job started for ${phoneNumbers.length} customers.`,
      };
    }

    return { success: false, message: "Invalid type" };
  } catch (error) {
    console.error("Bulk broadcast error:", error);
    return { success: false, message: "Internal Server Error" };
  }
};
