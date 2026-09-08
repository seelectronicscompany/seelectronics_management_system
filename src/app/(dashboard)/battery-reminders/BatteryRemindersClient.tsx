"use client";

import { sendBatteryReminderToAll, sendUserManualSmsToAll } from "@/actions";
import { sendBulkVoiceCallToAll } from "@/actions/voiceReminderActions";
import { useState } from "react";
import { toast } from "react-toastify";

export default function BatteryRemindersClient({
  customers,
}: {
  customers: any[];
}) {
  const [loadingAll, setLoadingAll] = useState(false);
  const [loadingVoiceAll, setLoadingVoiceAll] = useState(false);
  const [loadingUserManual, setLoadingUserManual] = useState(false);

  const handleUserManualSms = async () => {
    if (
      !confirm(
        "WARNING: This will send a User Manual SMS to EVERY customer in the database. Are you absolutely sure?",
      )
    )
      return;

    setLoadingUserManual(true);
    const res = await sendUserManualSmsToAll();
    setLoadingUserManual(false);

    if (res?.success) {
      toast.success(res.message);
    } else {
      toast.error(res?.message || "Something went wrong");
    }
  };

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
    if (
      !confirm(
        "WARNING: This will send a BATTERY check voice call to EVERY customer in the database. Are you absolutely sure?",
      )
    )
      return;
    setLoadingVoiceAll(true);
    const res = await sendBulkVoiceCallToAll("battery_health_check");
    setLoadingVoiceAll(false);
    if (res?.success) {
      toast.success(res.message);
    } else {
      toast.error(res?.message || "Something went wrong");
    }
  };

  const handleMaintenanceVoice = async () => {
    if (
      !confirm(
        "WARNING: This will send an OVERALL MAINTENANCE voice call to EVERY customer in the database. Are you absolutely sure?",
      )
    )
      return;
    setLoadingVoiceAll(true);
    const res = await sendBulkVoiceCallToAll("overall_maintenance");
    setLoadingVoiceAll(false);
    if (res?.success) {
      toast.success(res.message);
    } else {
      toast.error(res?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex-1 overflow-hidden flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-4 border-b gap-4">
        <h2 className="text-xl font-bold">
          Maintenance Reminders (Bulk SMS & Voice)
        </h2>
        <div className="flex flex-wrap gap-2 sm:gap-4 w-full lg:w-auto">
          <button
            onClick={handleSendToAll}
            disabled={loadingAll || loadingVoiceAll || loadingUserManual}
            className="flex-1 sm:flex-none px-4 py-2 bg-red-600 text-white rounded-md disabled:bg-gray-400 font-medium whitespace-nowrap text-sm sm:text-base"
          >
            {loadingAll ? "Sending SMS..." : "Send SMS to ALL Customers"}
          </button>
          <button
            onClick={handleUserManualSms}
            disabled={loadingAll || loadingVoiceAll || loadingUserManual}
            className="flex-1 sm:flex-none px-4 py-2 bg-green-600 text-white rounded-md disabled:bg-gray-400 font-medium whitespace-nowrap text-sm sm:text-base"
          >
            {loadingUserManual ? "Sending SMS..." : "User Manual SMS (ALL)"}
          </button>
          <button
            onClick={handleBatteryVoice}
            disabled={loadingAll || loadingVoiceAll || loadingUserManual}
            className="flex-1 sm:flex-none px-4 py-2 bg-indigo-600 text-white rounded-md disabled:bg-gray-400 font-medium whitespace-nowrap text-sm sm:text-base"
          >
            {loadingVoiceAll ? "Sending Voice..." : "Battery Voice (ALL)"}
          </button>
          <button
            onClick={handleMaintenanceVoice}
            disabled={loadingAll || loadingVoiceAll || loadingUserManual}
            className="flex-1 sm:flex-none px-4 py-2 bg-orange-600 text-white rounded-md disabled:bg-gray-400 font-medium whitespace-nowrap text-sm sm:text-base"
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
