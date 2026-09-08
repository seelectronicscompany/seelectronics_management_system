"use client";

import { requestPayment } from "@/actions/paymentRequestActions";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";

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
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[70]">
            <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-sm text-center shadow-xl animate-in zoom-in duration-200 relative">
              <button
                type="button"
                onClick={() => {
                  setShowSuccess(false);
                  onClose();
                }}
                className="absolute top-4 right-4 text-blue-300 hover:text-blue-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="w-20 h-20 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-5">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-[22px] font-extrabold text-blue-900 mb-3">
                অনুরোধ সফল হয়েছে!
              </h2>
              <p className="text-[13px] font-medium text-blue-600/90 mb-8 leading-relaxed px-2">
                আপনার ক্যাশ আউট অনুরোধটি সফলভাবে জমা হয়েছে। দ্রুত আমাদের টিম
                পেমেন্টটি প্রসেস করবে।
              </p>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowSuccess(false);
                    onClose();
                    router.push("/staff/payment/payment-history");
                  }}
                  className="flex-1 py-3 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-all active:scale-[0.98] shadow-md shadow-blue-600/20"
                >
                  ইতিহাস দেখুন
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowSuccess(false);
                    onClose();
                  }}
                  className="flex-1 py-3 rounded-xl font-bold text-sm border-2 border-blue-100 text-blue-500 bg-white hover:bg-blue-50 transition-all active:scale-[0.98]"
                >
                  বন্ধ করুন
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
