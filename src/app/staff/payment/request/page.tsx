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
      <MobilePageHeader
        title="Request Payout"
        backHref="/staff/payment"
        Icon={ShoppingBag}
      />

      <div className="p-4 sm:p-6 space-y-8">
        {/* Compact Balance Display */}
        <div className="relative group overflow-hidden rounded p-[2px] bg-gradient-to-br from-[#016866] via-[#019597] to-[#259B5F] shadow-xl">

  {/* inner card */}
  <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl px-6 h-[20vh] flex items-center justify-between gap-6">

    {/* glow effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-yellow-200/20 via-transparent to-orange-200/20 blur-xl"></div>

    {/* LEFT CONTENT */}
  <div className="relative z-10 flex flex-col gap-3 w-full">

  {/* TOP ROW */}
  <div className="flex items-center justify-between w-full">
    {/* Name (Left) */}
    <div className="flex items-center gap-1">
      <User size={14} className="text-white/80" />
      <span className="text-md font-bold text-white">
        {staffData?.name || "Staff Name"}
      </span>
    </div>

    {/* Phone (Right) */}
    <div className="flex items-center gap-1">
      <Phone size={12} className="text-white/60" />
      <span className="text-[13px] text-white/70">
        {staffData?.phone || "01XXXXXXXXX"}
      </span>
    </div>
  </div>

  {/* BOTTOM CONTENT */}
  <div className="flex items-center gap-4">
    {/* Icon */}
    <div className="size-12 rounded-full bg-white/20 flex items-center justify-center shadow-inner">
      <span className="text-xl font-black text-yellow-100">৳</span>
    </div>

    {/* Balance */}
    <div className="flex flex-col">
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-100/70">
        Available Balance
      </span>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
        {(stats?.availableBalance || 0).toLocaleString()}
      </h1>
    </div>
  </div>

</div>

    {/* RIGHT TEXT */}
    <div className="relative z-10 hidden sm:flex items-center">
      
      <p className="text-[10px] font-bold text-white/60 uppercase tracking-[0.25em] border-l border-white/20 pl-6 py-1">
        Ready for Withdrawal
      </p>
    </div>

    {/* floating shapes */}
    <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-yellow-300/30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute -left-10 -top-10 w-36 h-36 bg-orange-300/20 rounded-full blur-3xl"></div>

  </div>
</div>

        {/* Page Title & Form Section (Desktop Only) */}
        <div className="hidden md:block space-y-6">
          <div className="flex items-center gap-3 px-2">
            <div className="p-2.5 bg-brand/5 rounded-md text-brand">
              <ShoppingBag size={24} />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              Request Payout
            </h2>
          </div>
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
                আপনি একটি পেমেন্ট অনুরোধ করার আগে আপনার পেমেন্ট পদ্ধতি (বিকাশ, নগদ, বা ব্যাংক) কনফিগার করতে হবে।
              </p>
              <Link
                href="/staff/payment/settings"
                className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-white bg-amber-600 px-4 py-2 rounded-md hover:bg-amber-700 transition-colors shadow-sm"
              >
                Go to Settings
              </Link>
            </div>
          </div>
        )}

        {canRequest && (
          <div className="bg-gradient-to-br from-blue-100 via-white to-blue-200 rounded-md p-6 shadow-sm border border-gray-100 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-md bg-gray-50/50 border border-gray-100">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Wallet className="w-4 h-4 text-brand" />
                  <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Payout Destination
                  </h2>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-gray-900 uppercase">
                    {method}
                  </span>
                  <span className="text-sm font-bold text-brand font-mono">
                    {hasWallet && maskNumber(staffData!.walletNumber!)}
                    {hasBank &&
                      staffData?.bankInfo &&
                      maskNumber(staffData.bankInfo.accountNumber)}
                  </span>
                </div>
                {hasBank && staffData?.bankInfo && (
                  <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase">
                    {staffData.bankInfo.bankName}
                  </p>
                )}
              </div>
              <Link
                href="/staff/payment/settings"
                className="px-4 py-2 bg-white border border-gray-100 rounded-md text-[10px] font-bold text-gray-500 hover:bg-gray-50 transition-colors text-center"
              >
                CHANGE METHOD
              </Link>
            </div>

            <div className="space-y-4 pt-2">
              <div className="px-1">
                <p className="text-sm font-bold text-gray-800">
                  Enter Withdrawal Amount
                </p>
                <p className="text-[10px] font-medium text-gray-400 mt-1 leading-relaxed">
                  Submit the amount you wish to withdraw. The administrator will
                  be notified via SMS and your request will be processed.
                </p>
              </div>
              <StaffPaymentRequestForm staffId={userId} />
            </div>
          </div>
        )}
      </div>
    </StaffLayout>
  );
}
