"use client";

import { useState } from "react";
import {
  sendBatteryReminderToAll,
} from "@/actions";
import {
  sendBulkVoiceCallToAll,
} from "@/actions/voiceReminderActions";
import { toast } from "react-toastify";

export default function BatteryRemindersClient({
  customers,
}: {
  customers: any[];
}) {
  const [loadingAll, setLoadingAll] = useState(false);
  const [loadingVoiceAll, setLoadingVoiceAll] = useState(false);

  const handleSendToAll = async () => {
    if (
      !confirm(
        "WARNING: This will send a battery reminder SMS to EVERY customer in the database. Are you absolutely sure?",
      )
    )
      return;

    setLoadingAll(true);
    const res = await sendBatteryReminderToAll();
    setLoadingAll(false);

    if (res?.success) {
      toast.success(res.message);
    } else {
      toast.error(res?.message || "Something went wrong");
    }
  };
  
  const handleBatteryVoice = async () => {
    if (!confirm("WARNING: This will send a BATTERY check voice call to EVERY customer in the database. Are you absolutely sure?")) return;
    setLoadingVoiceAll(true);
    const res = await sendBulkVoiceCallToAll("battery_health_check");
    setLoadingVoiceAll(false);
    if (res?.success) { toast.success(res.message); } else { toast.error(res?.message || "Something went wrong"); }
  };

  const handleMaintenanceVoice = async () => {
    if (!confirm("WARNING: This will send an OVERALL MAINTENANCE voice call to EVERY customer in the database. Are you absolutely sure?")) return;
    setLoadingVoiceAll(true);
    const res = await sendBulkVoiceCallToAll("overall_maintenance");
    setLoadingVoiceAll(false);
    if (res?.success) { toast.success(res.message); } else { toast.error(res?.message || "Something went wrong"); }
  };

  return (
    <div className="flex-1 overflow-hidden flex flex-col gap-4">
      <div className="flex justify-between items-center pb-4 border-b">
        <h2 className="text-xl font-bold">Maintenance Reminders (Bulk SMS & Voice)</h2>
        <div className="flex gap-4">
          <button
            onClick={handleSendToAll}
            disabled={loadingAll || loadingVoiceAll}
            className="px-4 py-2 bg-red-600 text-white rounded-md disabled:bg-gray-400 font-medium"
          >
            {loadingAll ? "Sending SMS..." : "Send SMS to ALL Customers"}
          </button>
          <button
            onClick={handleBatteryVoice}
            disabled={loadingAll || loadingVoiceAll}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md disabled:bg-gray-400 font-medium"
          >
            {loadingVoiceAll ? "Sending Voice..." : "Battery Voice (ALL)"}
          </button>
          <button
            onClick={handleMaintenanceVoice}
            disabled={loadingAll || loadingVoiceAll}
            className="px-4 py-2 bg-orange-600 text-white rounded-md disabled:bg-gray-400 font-medium"
          >
            {loadingVoiceAll ? "Sending Voice..." : "Maintenance Voice (ALL)"}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto overflow-y-auto flex-1 bg-white rounded-md border border-gray-100 shadow-sm custom-scrollbar">
        <table className="w-full text-sm text-left">
          <thead className="sticky top-0 z-20 bg-gray-50 shadow-sm">
            <tr>
              <th className="py-4 px-4 font-bold text-gray-700 whitespace-nowrap">
                Customer ID
              </th>
              <th className="py-4 px-4 font-bold text-gray-700 whitespace-nowrap">
                Name
              </th>
              <th className="py-4 px-4 font-bold text-gray-700 whitespace-nowrap">
                Phone
              </th>
              <th className="py-4 px-4 font-bold text-gray-700 whitespace-nowrap">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.customerId}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-4 px-4">{customer.customerId}</td>
                <td className="py-4 px-4">{customer.name}</td>
                <td className="py-4 px-4">{customer.phone}</td>
                <td className="py-4 px-4">{customer.address}</td>
              </tr>
            ))}
            {customers.length === 0 && (
              <tr>
                <td colSpan={4} className="py-8 text-center text-gray-500">
                  No customers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
