"use client";

// Import Next.js server actions, third-party icons, and React hooks
import { requestPayment } from "@/actions/paymentRequestActions";
import { useActionState, useState } from "react";
import { toast } from "react-toastify";

// Component props definition: requires the unique identifier of the staff member
interface StaffPaymentRequestFormProps {
  staffId: string;
}

export function StaffPaymentRequestForm({
  staffId,
}: StaffPaymentRequestFormProps) {
  // useActionState handles server action form submission with pending & response state
  const [state, formAction, isPending] = useActionState(
    async (_prev: any, formData: FormData) => {
      // Execute server action to create a payment request
      const res = await requestPayment(_prev, formData);

      if (res?.success) {
        // If request is successful, show the success modal overlay
        setShowSuccess(true);
      } else if (res?.success === false) {
        // If request fails, trigger an error toast notification with the server message
        toast.error(res.message);
      }
      return res ?? _prev;
    },
    undefined,
  );

  // Local state to control the visibility of the popup success modal
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <form action={formAction} className="space-y-8 w-full px-3">
      {/* Hidden field to submit the staff ID along with the form payload */}
      <input type="hidden" name="staffId" value={staffId} />

      {/* Enter Transaction Details Card (Teal colored container box) */}
      <div className="rounded-md p-5 bg-[#f3fbfb] border border-[#00a8a8] space-y-4 ">
        <h3 className="text-sm font-bold text-gray-800">
          Enter Transaction Details
        </h3>

        {/* Input box for Amount */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1.5 px-1">
            Amount (৳)
          </label>
          <div className="relative">
            {/* Taka Currency symbol placed on the left side of the input field */}
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium text-sm">
              ৳
            </span>
            <input
              type="number"
              name="amount"
              min="1"
              required
              className="w-full pl-9 pr-4 py-4 bg-white border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
            />
          </div>
        </div>

        {/* Input box for Optional Note */}
        <div
          style={{
            marginBottom: "2rem",
          }}
        >
          <input
            type="text"
            name="description"
            placeholder="Note (Optional)"
            className="w-full px-5 py-4 bg-white border border-gray-300 rounded-md text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
          />
        </div>
      </div>

      {/* Request Payment Submit Button */}
      <button
        type="submit"
        disabled={isPending}
        className=" mt-8 w-full bg-[#7aa4f6] hover:bg-[#5b84e6] text-white font-bold py-4 rounded-md text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
      >
        <span>{isPending ? "Sending..." : "Request Payment"}</span>
        {!isPending && (
          // Arrow icon appended at the right side of the text, hidden during loading state
          <svg
            className="w-5 h-5 text-white shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        )}
      </button>

      {/* Success Modal Overlay - rendered conditionally on successful request */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[70]">
          <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-sm text-center shadow-xl animate-in zoom-in duration-200 relative">
            <button
              type="button"
              onClick={() => setShowSuccess(false)}
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
                  window.location.href = "/staff/payment/payment-history";
                }}
                className="flex-1 py-3 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-all active:scale-[0.98] shadow-md shadow-blue-600/20"
              >
                ইতিহাস দেখুন
              </button>
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="flex-1 py-3 rounded-xl font-bold text-sm border-2 border-blue-100 text-blue-500 bg-white hover:bg-blue-50 transition-all active:scale-[0.98]"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
