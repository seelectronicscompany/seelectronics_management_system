"use client";

import { requestPayment } from "@/actions/paymentRequestActions";
import {  CircleCheckBig } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface PaymentRequestModalProps {
  staffId: string;
  serviceId: string;
  onClose: () => void;
}

export default function PaymentRequestModal({
  staffId,
  serviceId,
  onClose,
}: PaymentRequestModalProps) {
  const [state, action, isPending] = useActionState(requestPayment, undefined);
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("bkash");
  const [description, setDescription] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

 useEffect(() => {
  if (state?.success) {
   
    setShowSuccess(true); 
  } else if (state?.success === false) {
    toast.error(state.message);
  }
}, [state]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-md p-6 w-full max-w-md shadow-xl animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Request Payment</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form action={action} className="space-y-4">
          <input type="hidden" name="staffId" value={staffId} />
          <input type="hidden" name="serviceId" value={serviceId} />

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Service ID
            </label>
            <input
              type="text"
              value={serviceId}
              disabled
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Amount (৳)
            </label>
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. 500"
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Payment Method
            </label>
            <select
              name="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="bkash">bKash</option>
              <option value="nagad">Nagad</option>
              <option value="rocket">Rocket</option>
              <option value="bank">Bank Transfer</option>
              <option value="cash">Cash</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Description (Optional)
            </label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Any details about the task..."
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none h-24 resize-none"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-200 rounded-md text-gray-600 font-bold hover:bg-gray-50 active:scale-95 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 active:scale-95 transition-all disabled:bg-blue-300"
            >
              {isPending ? "Sending..." : "Submit Request"}
            </button>
          </div>
        </form>
        {showSuccess && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[60]">
    <div className="bg-white rounded-2xl p-6 w-full max-w-sm text-center shadow-2xl animate-in zoom-in duration-200">

      {/* icon */}
      <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
       <CircleCheckBig  className="text-green-500"/>
      </div>

      {/* title */}
      <h2 className="text-lg font-bold text-gray-800 mb-1">
        Payment Request Success!
      </h2>

      {/* description */}
      <p className="text-sm text-gray-500 mb-4">
        Your payment request has been successfully sent to SE ELECTRONICS. They will process it shortly.
      </p>

      {/* fake id (optional) */}
      <div className="border border-dashed rounded-md py-2 mb-4 text-sm font-mono text-gray-600">
        Payment ID: #{Math.random().toString(36).slice(2, 10).toUpperCase()}
      </div>

      {/* buttons */}
      <div className="flex gap-3 ">
  <button
  onClick={() => {
    setShowSuccess(false);
    onClose();
  }}
  className="flex-1 py-2.5 rounded-lg font-semibold text-sm 
             bg-gradient-to-r from-green-500 to-emerald-500 
             text-white shadow-md 
             hover:from-green-600 hover:to-emerald-600 
             active:scale-95 
             transition-all duration-200"
>
  Close
</button>
<button
  onClick={() => {
    setShowSuccess(false);
    onClose();
    router.push("/staff/services"); //  redirect
  }}
  className="flex-1 py-2.5 rounded-lg font-semibold text-sm 
             bg-gradient-to-r from-green-500 to-emerald-500 
             text-white shadow-md 
             hover:from-green-600 hover:to-emerald-600 
             active:scale-95 
             transition-all duration-200"
>
  View History
</button>
      </div>
    </div>
  </div>
)}
      </div>
    </div>
  );
}
