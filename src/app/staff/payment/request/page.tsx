import { verifyStaffSession } from "@/actions";
import { getStaffPaymentHistory } from "@/actions/paymentRequestActions";
import { getStaffById, getStaffProfileStats } from "@/actions/staffActions";
import { StaffPaymentRequestForm } from "@/components/features/staff/StaffPaymentRequestForm";
import { MobilePageHeader } from "@/components/layout";
import { StaffLayout } from "@/components/layout/StaffLayout";
import { AlertCircle, Phone, ShoppingBag, User, Wallet } from "lucide-react";
import Link from "next/link";

function maskNumber(value: string) {
  if (!value || value.length < 4) return "****";
  return value.slice(-4).padStart(value.length, "*");
}

export default async function StaffPaymentRequestPage() {
  const session = await verifyStaffSession();
  if (!session.isAuth) return null;

  const userId = session.userId as string;
  const [paymentsRes, profileRes, statsRes] = await Promise.all([
    getStaffPaymentHistory(userId),
    getStaffById(userId),
    getStaffProfileStats(userId),
  ]);

  const paymentsList = paymentsRes.success ? (paymentsRes.data ?? []) : [];
  const staffData = profileRes.success ? profileRes.data : null;
  const stats = statsRes.success ? statsRes.data : null;

  const method = staffData?.paymentPreference ?? "";
  const hasWallet =
    ["bkash", "nagad", "rocket"].includes(method) && staffData?.walletNumber;
  const hasBank = method === "bank" && staffData?.bankInfo;
  const canRequest = method === "cash" || hasWallet || hasBank;

  return (
    <StaffLayout balance={stats?.availableBalance || 0}>
      <div className="space-y-8">
        {/* Profile, Balance & Payout Destination Display */}
        <div className="relative bg-white rounded-lg py-6 px-3  border border-gray-100 flex flex-col items-center overflow-hidden">
          {/* Isometric Pattern in the background */}
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none select-none">
            <svg
              width="220"
              height="220"
              viewBox="0 0 60 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              className="text-gray-900"
            >
              <path d="M30 0 L60 15 L60 45 L30 60 L0 45 L0 15 Z" />
              <path d="M30 0 L30 60" />
              <path d="M0 15 L30 30 L60 15" />
              <path d="M0 45 L30 30 L60 45" />
              <path d="M30 30 L60 45 M30 30 L0 45 M30 30 L30 0" />
            </svg>
          </div>

          {/* Avatar with Stylized Double Grey Ring */}
          <div className="relative mt-4">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[3px] bg-gradient-to-b from-gray-400 via-gray-200 to-gray-400  flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden border border-gray-600 bg-white">
                {staffData?.photoUrl ? (
                  <img
                    src={staffData.photoUrl}
                    alt={staffData.name || "Staff Avatar"}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <User className="w-12 h-12 text-gray-400" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Name & Phone */}
          <h2 className="text-xl font-bold text-gray-800 mt-3 tracking-tight">
            {staffData?.name}
          </h2>
          <p className="text-sm font-semibold text-gray-500 mt-0.5 tracking-wide">
            {staffData?.phone}
          </p>

          {/* AVAILABLE BALANCE Card */}
          <div className="w-full  bg-white rounded-2xl  border border-gray-100 p-5 mt-6 flex flex-col items-center z-10">
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
              AVAILABLE BALANCE
            </span>
            <div className="text-gray-900 font-extrabold text-4xl mt-1.5 flex items-center gap-1">
              <span className="font-medium text-3xl">৳</span>
              <span>
                {(stats?.availableBalance || 0).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>

          {/* Payout Destination Card (Grey Overlay Box) */}
          {canRequest && (
            <div className="w-full   rounded-2xl p-5 mt-5 bg-[#f0fcfc] border border-[#00a8a8] flex flex-col z-10">
              <span className="text-sm font-bold text-gray-800 mb-3 block">
                Payout Destination
              </span>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Styled Payment Logo */}
                  {method === "bkash" && (
                    <div className="w-10 h-10 rounded-xl bg-white  flex items-center justify-center shrink-0 border border-gray-100">
                      <svg
                        className="w-8 h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        height="800"
                        width="1200"
                        viewBox="-18.0015 -28.3525 156.013 170.115"
                      >
                        <g fill="none">
                          <path
                            fill="#D12053"
                            d="M96.58 62.45l-53.03-8.31 7.03 31.6z"
                          />
                          <path
                            fill="#E2136E"
                            d="M96.58 62.45L56.62 6.93 43.56 54.15z"
                          />
                          <path
                            fill="#D12053"
                            d="M42.32 53.51L.45 0l54.83 6.55z"
                          />
                          <path fill="#9E1638" d="M23.25 31.15L0 9.24h6.12z" />
                          <path
                            fill="#D12053"
                            d="M107.89 35.46l-9.84 26.69L82.1 40.09z"
                          />
                          <path
                            fill="#E2136E"
                            d="M56.77 84.14l38.61-15.51L97 63.7z"
                          />
                          <path
                            fill="#9E1638"
                            d="M25.89 113.41l16.54-58.02 8.39 37.75z"
                          />
                          <path
                            fill="#E2136E"
                            d="M109.43 35.67l-4.06 11.02 14.64-.24z"
                          />
                        </g>
                      </svg>
                    </div>
                  )}
                  {method === "nagad" && (
                    <div className="w-10 h-10 rounded-xl bg-[#F15A22] flex items-center justify-center shrink-0  text-white font-extrabold text-lg select-none">
                      ন
                    </div>
                  )}
                  {method === "rocket" && (
                    <div className="w-10 h-10 rounded-xl bg-[#8C3494] flex items-center justify-center shrink-0  text-white font-extrabold text-sm select-none">
                      🚀
                    </div>
                  )}
                  {method === "bank" && (
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0  text-white">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                  )}
                  {method === "cash" && (
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0  text-white">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <rect x="2" y="6" width="20" height="12" rx="2" />
                        <circle cx="12" cy="12" r="3" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12h.01M18 12h.01"
                        />
                      </svg>
                    </div>
                  )}

                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-800">
                      {method === "bkash" && "Transfer to bKash"}
                      {method === "nagad" && "Transfer to Nagad"}
                      {method === "rocket" && "Transfer to Rocket"}
                      {method === "bank" && "Bank Account Transfer"}
                      {method === "cash" && "Hand Cash Withdrawal"}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 tracking-wider">
                      {hasWallet && maskNumber(staffData!.walletNumber!)}
                      {hasBank &&
                        staffData?.bankInfo &&
                        maskNumber(staffData.bankInfo.accountNumber)}
                      {method === "cash" && "Collect at Office"}
                    </span>
                  </div>
                </div>

                <div className="text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex justify-end mt-3">
                <Link
                  href="/staff/payment/settings"
                  className="text-xs font-bold text-[#0c2461] hover:text-blue-900 underline transition-colors"
                >
                  Change Method
                </Link>
              </div>
            </div>
          )}
        </div>

        {!canRequest && (
          <div className="bg-amber-50 border border-amber-200 rounded-md p-5 flex gap-4">
            <div className="shrink-0 p-2 bg-amber-100 rounded-full h-fit">
              <AlertCircle size={20} className="text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-amber-800 font-bold leading-tight">
                উত্তোলনের তথ্য অনুপস্থিত
              </p>
              <p className="text-sm text-amber-700/80 mt-1 font-medium leading-relaxed">
                আপনি একটি পেমেন্ট অনুরোধ করার আগে আপনার পেমেন্ট পদ্ধতি (বিকাশ,
                নগদ, বা ব্যাংক) কনফিগার করতে হবে।
              </p>
              <Link
                href="/staff/payment/settings"
                className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-white bg-amber-600 px-4 py-2 rounded-md hover:bg-amber-700 transition-colors "
              >
                Go to Settings
              </Link>
            </div>
          </div>
        )}

        {canRequest && (
          <div className="flex flex-col items-center w-full">
            <StaffPaymentRequestForm staffId={userId} />
          </div>
        )}
      </div>
    </StaffLayout>
  );
}
