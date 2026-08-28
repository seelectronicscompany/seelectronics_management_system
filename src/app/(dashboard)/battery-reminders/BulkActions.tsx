"use client";

import { sendBulkBatteryReminder } from "@/actions";
import { useState } from "react";
import toast from "react-hot-toast";

export default function BulkActions() {
  const [loading, setLoading] = useState<"sms" | "voice" | null>(null);

  const handleBulkSend = async (type: "sms" | "voice") => {
    if (
      !confirm(
        `Are you sure you want to send a bulk ${
          type === "sms" ? "SMS" : "Voice Call"
        } to ALL customers?`,
      )
    ) {
      return;
    }

    setLoading(type);
    try {
      const res = await sendBulkBatteryReminder(type);
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => handleBulkSend("sms")}
        disabled={loading !== null}
        className="px-4 py-2 border rounded-md bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:text-blue-800 disabled:opacity-50"
      >
        {loading === "sms" ? "Starting..." : "Send Bulk SMS"}
      </button>
      <button
        type="button"
        onClick={() => handleBulkSend("voice")}
        disabled={loading !== null}
        className="px-4 py-2 border rounded-md bg-green-50 text-green-700 border-green-200 hover:bg-green-100 hover:text-green-800 disabled:opacity-50"
      >
        {loading === "voice" ? "Starting..." : "Send Bulk Voice Call"}
      </button>
    </div>
  );
}
