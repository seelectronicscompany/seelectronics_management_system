"use client";

import { Wallet, User, Phone, Banknote, History } from "lucide-react";
import Link from "next/link";
import { useReferral } from "./_components/ReferralProvider";

export default function CustomerReferralPage() {
  const { data } = useReferral();

  return (
    <>
      {/* Balance Card */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-md p-6 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[13px] opacity-70 font-bold uppercase tracking-widest flex items-center gap-1">
                <Wallet size={12} />
                মোট ব্যালেন্স
              </p>
              <h2 className="text-3xl font-bold mt-1">
                ৳ {data.balance.toLocaleString("en-IN")}
              </h2>
            </div>
          </div>

          {/* Customer Info */}
          <div className="mt-5 space-y-1">
            <div className="flex items-center gap-2">
              <User size={16} className="opacity-80" />
              <h3 className="text-lg font-semibold">
                {data?.name || "Customer Name"}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={14} className="opacity-80" />
              <p className="text-sm opacity-80">
                {data?.phone || "01XXXXXXXXX"}
              </p>
            </div>
          </div>

          {/* Referral Status */}
          <div className="mt-5 flex items-center gap-2 bg-white/10 p-2 rounded border border-white/10">
            <span className="text-[13px] font-medium leading-none">
              আপনার রেফারেল কোড সক্রিয় আছে।
            </span>
          </div>
        </div>

        {/* Decorative Blur Effects */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded -mr-16 -mt-16 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-300/20 rounded -ml-12 -mb-12 blur-xl"></div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Link
          href="/customer/referral/cash-out"
          className="bg-white rounded-md p-4 flex flex-col items-center gap-2 border border-slate-100 shadow-sm hover:bg-slate-50 active:scale-95 transition-all"
        >
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
            <Banknote className="size-5" />
          </div>
          <span className="text-[13px] font-bold text-slate-600">
            ক্যাশ আউট
          </span>
        </Link>
        <Link
          href="/customer/referral/history"
          className="bg-white rounded-md p-4 flex flex-col items-center gap-2 border border-slate-100 shadow-sm hover:bg-slate-50 active:scale-95 transition-all"
        >
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
            <History className="size-5" />
          </div>
          <span className="text-[13px] font-bold text-slate-600">
            ইতিহাস
          </span>
        </Link>
      </div>

      {/* Referral Earnings List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <h3 className="font-bold text-blue-900 text-lg">
            রেফারেল আর্নিং
          </h3>
          <span className="text-[11px] font-bold text-blue-600 uppercase">
            {data.bonuses.length} মোট
          </span>
        </div>

        <div className="space-y-3">
          {data.bonuses.length === 0 ? (
            <div className="bg-blue-50 p-8 rounded-md border border-blue-100 text-center text-blue-400 text-sm">
              এখনও কোনো রেফারেল বোনাস নেই।
            </div>
          ) : (
            data.bonuses.map((bonus: any) => (
              <div
                key={bonus.id}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded border border-blue-100 shadow-sm relative overflow-hidden flex items-center justify-between"
              >
                <div className="space-y-1">
                  <p className="text-blue-900 font-bold text-md">
                    {bonus.referredCustomerName}
                  </p>
                  <p className="text-blue-700 font-semibold text-[13px] uppercase tracking-wider">
                    পণ্যের মূল্য: ৳{Number(bonus.purchaseAmount || 0).toLocaleString()}
                  </p>
                  <p className="text-blue-500 font-medium text-[11px] uppercase tracking-wider">
                    {new Date(bonus.createdAt).toLocaleDateString(
                      "bn-BD",
                    )}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-blue-600 font-bold text-base">
                    +৳{Number(bonus.bonusEarned).toLocaleString()}
                  </p>
                  <p className="text-[12px] text-blue-400 font-bold uppercase">
                    বোনাস (২%)
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
