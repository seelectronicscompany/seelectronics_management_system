"use client";

import { requestPayment } from "@/actions/paymentRequestActions";
import { CircleCheckBig } from "lucide-react";
import { useActionState, useState } from "react";
import { toast } from "react-toastify";

interface StaffPaymentRequestFormProps {
  staffId: string;
}

export function StaffPaymentRequestForm({
  staffId,
}: StaffPaymentRequestFormProps) {
  const [state, formAction, isPending] = useActionState(
    async (_prev: any, formData: FormData) => {
      const res = await requestPayment(_prev, formData);
      if (res?.success) setShowSuccess(true);
      else if (res?.success === false) toast.error(res.message);
      return res ?? _prev;
    },
    undefined,
  );
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="staffId" value={staffId} />

      <div>
        <label className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-1.5">
          Amount (৳)
        </label>
        <input
          type="number"
          name="amount"
          min="1"
          required
          placeholder="Enter amount"
          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-md text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-1.5">
          Note (optional)
        </label>
        <textarea
          name="description"
          rows={2}
          placeholder="Any additional notes..."
          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-md text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-brand text-white font-bold py-3 rounded-md text-sm uppercase tracking-wider hover:bg-brand-800 disabled:bg-brand/50 transition-all active:scale-[0.98]"
      >
        {isPending ? "Sending..." : "Request payment"}
      </button>
      {showSuccess && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60]">
    <div className="bg-white rounded p-8 w-full max-w-sm text-center shadow-2xl animate-in zoom-in duration-200">

      {/* icon */}
      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center mb-5 shadow-inner">
        <CircleCheckBig size={40} className="text-green-600" />
      </div>

      {/* title */}
      <h2 className="text-xl font-extrabold text-gray-800 mb-2">
        Request Sent!
      </h2>

      {/* description */}
      <p className="text-sm text-gray-500 mb-6">
     Your payment request has been successfully sent to SE ELECTRONICS. They will process it shortly.
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => setShowSuccess(false)}
          className="flex-1 py-2.5 rounded-xl font-semibold text-sm 
                     border border-gray-200 text-gray-600 
                     hover:bg-gray-50 transition-all"
        >
          Close
        </button>

        <button
          onClick={() => {
            setShowSuccess(false);
            window.location.href = "/staff/services";
          }}
          className="flex-1 py-2.5 rounded-xl font-semibold text-sm 
                     bg-gradient-to-r from-green-500 to-emerald-500 
                     text-white shadow-md 
                     hover:from-green-600 hover:to-emerald-600 
                     transition-all"
        >
          View History
        </button>
      </div>
    </div>
  </div>
)}
    </form>
  );
}
