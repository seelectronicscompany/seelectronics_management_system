"use server";

import { db } from "@/db/drizzle";
import { customers } from "@/db/schema";
import { verifySession } from "@/lib";
import { getMramBroadcastIds, sendVoiceCall } from "@/lib/mram";
import { eq, inArray } from "drizzle-orm";

export const sendDueVoiceCall = async (customerId: string) => {
  try {
    const session = await verifySession(false, "admin");
    if (!session) return { success: false, message: "Unauthorized" };

    const customerData = await db.query.customers.findFirst({
      where: eq(customers.customerId, customerId),
    });

    if (!customerData || !customerData.phone) {
      return { success: false, message: "Customer phone number not found" };
    }

    const broadcastIds = getMramBroadcastIds();
    if (!broadcastIds || !broadcastIds.customer_due) {
      return { success: false, message: "Broadcast ID for customer due not configured" };
    }

    const res = await sendVoiceCall(customerData.phone, broadcastIds.customer_due, `Customer Due Reminder (${customerData.name})`);

    if (res.success) {
      return { success: true, message: "Voice call triggered successfully" };
    } else {
      return { success: false, message: res.error || "Failed to trigger voice call" };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Something went wrong" };
  }
};

export const sendBulkVoiceCallToSelected = async (
  customerIds: string[],
  type: "battery_health_check" | "overall_maintenance"
) => {
  try {
    const session = await verifySession(false, "admin");
    if (!session) return { success: false, message: "Unauthorized" };

    if (!customerIds.length) {
      return { success: false, message: "No customers selected" };
    }

    const customersData = await db.query.customers.findMany({
      where: inArray(customers.customerId, customerIds),
      columns: { phone: true },
    });

    const phones = customersData.map((c) => c.phone).filter(Boolean);
    if (!phones.length) {
      return { success: false, message: "No valid phone numbers found" };
    }

    const broadcastIds = getMramBroadcastIds();
    if (!broadcastIds || !broadcastIds[type]) {
      return { success: false, message: `Broadcast ID for ${type} not configured` };
    }

    const titleType = type === "battery_health_check" ? "Battery Health Check" : "Overall Maintenance";
    const res = await sendVoiceCall(phones, broadcastIds[type], `Bulk ${titleType} Reminder`);

    if (res.success) {
      return { success: true, message: `Sent voice call to ${phones.length} customers` };
    } else {
      return { success: false, message: res.error || "Failed to send bulk voice calls" };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Something went wrong" };
  }
};

export const sendBulkVoiceCallToAll = async (
  type: "battery_health_check" | "overall_maintenance"
) => {
  try {
    const session = await verifySession(false, "admin");
    if (!session) return { success: false, message: "Unauthorized" };

    const customersData = await db.query.customers.findMany({
      columns: { phone: true },
    });

    const phones = customersData.map((c) => c.phone).filter(Boolean);
    if (!phones.length) {
      return { success: false, message: "No valid phone numbers found" };
    }

    const broadcastIds = getMramBroadcastIds();
    if (!broadcastIds || !broadcastIds[type]) {
      return { success: false, message: `Broadcast ID for ${type} not configured` };
    }

    // Split into chunks if there are too many (e.g. MRAM might have limit like 1000)
    // The documentation says 1-1000 numbers per request
    const chunks = [];
    for (let i = 0; i < phones.length; i += 1000) {
      chunks.push(phones.slice(i, i + 1000));
    }

    let successCount = 0;
    const titleType = type === "battery_health_check" ? "Battery Health Check" : "Overall Maintenance";
    for (const chunk of chunks) {
      const res = await sendVoiceCall(chunk, broadcastIds[type], `Bulk ${titleType} Reminder`);
      if (res.success) {
        successCount += chunk.length;
      } else {
        console.error("Failed to send to chunk:", res.error);
      }
    }

    return { success: true, message: `Sent voice call to ${successCount} customers` };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Something went wrong" };
  }
};
