"use client";

import { useState, useTransition } from "react";
import { toast } from "react-toastify";
import { requestReferralPayment } from "@/actions";
import { ChevronLeft, CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { useReferral } from "../_components/ReferralProvider";
import { useRouter } from "next/navigation";

export default function CashOutPage() {
  const { data, refetch } = useReferral();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("bkash");
  const [walletNumber, setWalletNumber] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [lastTxId, setLastTxId] = useState("");

  const handleRequest = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!amount || Number(amount) <= 0) return toast.error("সঠিক পরিমাণ দিন");
    if (!walletNumber) return toast.error("ওয়ালেট নম্বর দিন");

    startTransition(async () => {
      const res = await requestReferralPayment({
        amount: Number(amount),
        paymentMethod,
        walletNumber,
      });

      if (res.success) {
        setLastTxId(res.requestId || "TXN" + Date.now().toString().slice(-6));
        setShowSuccessModal(true);
        setAmount("");
        setWalletNumber("");
        await refetch();
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <>
      <div className="space-y-4 animate-in slide-in-from-bottom duration-300">
        <div className="flex items-center gap-3 mb-2 px-1">
          <Link
            href="/customer/referral"
            className="text-gray-500 p-1 hover:bg-gray-100 rounded-full transition inline-block"
          >
            <ChevronLeft className="size-6" />
          </Link>
          <h3 className="font-bold text-gray-900 text-lg">Cash Out Request</h3>
        </div>

        {/* Enter Transaction Details Card (Teal colored container box) */}
        <div className="rounded-lg p-5 bg-[#f0fcfc] border border-[#00a8a8] space-y-5 shadow-sm">
          <h3 className="text-sm font-bold text-gray-800">
            Enter Transaction Details
          </h3>

          {/* Select Payment Method */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 px-1">
              Payment Method
            </label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-4 py-4 bg-white border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all appearance-none"
            >
              <option value="bkash">bKash</option>
              <option value="nagad">Nagad</option>
              <option value="rocket">Rocket</option>
            </select>
          </div>

          {/* Wallet Number */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 px-1">
              Wallet Number
            </label>
            <input
              type="text"
              value={walletNumber}
              onChange={(e) => setWalletNumber(e.target.value)}
              placeholder="e.g. 017XXXXXXXX"
              className="w-full px-4 py-4 bg-white border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
            />
          </div>

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
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
                placeholder="0.00"
                className="w-full pl-9 pr-4 py-4 bg-white border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
              />
            </div>
            <p className="text-[11px] text-gray-500 mt-2 px-1 font-medium">
              Available Balance: <span className="font-bold text-[#00a8a8]">৳ {data?.balance?.toLocaleString("en-IN") || "0"}</span>
            </p>
          </div>
        </div>

        {/* Request Payment Submit Button */}
        <button
          onClick={() => handleRequest()}
          disabled={isPending || !amount || Number(amount) > data.balance}
          className=" mt-8 w-full bg-[#7aa4f6] hover:bg-[#5b84e6] text-white font-bold py-5 rounded-lg text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
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
      </div>

      {/* Success Modal Overlay - rendered conditionally on successful request */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60]">
          <div className="bg-[#f0fcfc] border-2 border-[#00a8a8] rounded-lg p-8 w-full max-w-sm text-center shadow-2xl animate-in zoom-in duration-200 m-4">
            {/* Green Success Checkmark Icon */}
            <div className="w-20 h-20 mx-auto rounded-full bg-white border border-[#00a8a8] flex items-center justify-center mb-5 shadow-sm">
              <CircleCheckBig size={40} className="text-[#00a8a8]" />
            </div>

            {/* Success title */}
            <h2 className="text-xl font-extrabold text-[#00a8a8] mb-2">
              Request Sent!
            </h2>

            {/* Success explanation */}
            <p className="text-sm text-gray-600 mb-6 font-medium leading-relaxed">
              Your cash out request has been successfully sent.
              They will process it shortly.
            </p>

            <div className="bg-white border border-gray-200 p-3 rounded-md flex items-center justify-between gap-3 mb-6">
              <span className="text-[11px] font-bold text-gray-400 uppercase">
                Request ID
              </span>
              <span className="text-gray-700 font-bold text-sm">
                {lastTxId}
              </span>
            </div>

            {/* Modal actions */}
            <div className="flex gap-3">
              {/* Close Button - dismisses the success modal but stays on the same page */}
              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  router.push("/customer/referral");
                }}
                className="flex-1 py-3 rounded-lg font-bold text-sm 
                     border border-slate-200 text-gray-500 bg-white
                     hover:bg-slate-50 transition-all active:scale-[0.98]"
              >
                Close
              </button>

              {/* View History Button - closes modal and redirects to services/history list */}
              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  router.push("/customer/referral/history");
                }}
                className="flex-1 py-3 rounded-lg font-bold text-sm 
                     bg-[#7aa4f6] text-white hover:bg-[#5b84e6]
                     transition-all active:scale-[0.98]"
              >
                View History
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
