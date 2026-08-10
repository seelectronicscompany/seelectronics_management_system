"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { useReferral } from "../_components/ReferralProvider";

export default function HistoryPage() {
  const { data } = useReferral();

  return (
    <div className="space-y-3 animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center gap-3 mb-2">
        <Link
          href="/customer/referral"
          className="text-blue-400 p-1 hover:bg-blue-100 rounded-full transition inline-block"
        >
          <ChevronLeft className="size-6" />
        </Link>
        <h3 className="font-bold text-blue-900 text-xl">
          পেমেন্ট ইতিহাস
        </h3>
      </div>

      <div className="space-y-3">
        {data.requests.length === 0 ? (
          <div className="bg-blue-50 p-8 rounded-md border border-blue-100 text-center text-blue-400 text-sm">
            কোনো পেমেন্ট ইতিহাস নেই।
          </div>
        ) : (
          data.requests.map((req: any) => (
            <div
              key={req.id}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-[10px] border border-blue-100 shadow-sm relative overflow-hidden"
            >
              <div
                className={clsx(
                  "absolute top-0 right-0 px-3 py-1 text-[12px] font-bold text-white rounded-bl-xl uppercase",
                  req.status === "completed"
                    ? "bg-blue-600"
                    : req.status === "rejected"
                      ? "bg-blue-400"
                      : "bg-blue-500",
                )}
              >
                {req.status}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-blue-400 text-[13px] font-bold uppercase tracking-wider">
                    #{req.requestId}
                  </p>

                  <p className="text-blue-400 text-[13px] font-bold">
                    {new Date(req.createdAt).toLocaleDateString("bn-BD")}
                  </p>
                </div>

                <div className="flex justify-between items-end">
                  <div className="space-y-0.5">
                    <p className="text-blue-900 font-bold text-md capitalize">
                      {req.paymentMethod}
                    </p>
                    <p className="text-blue-600 text-sm font-bold">
                      {req.walletNumber}
                    </p>
                  </div>
                  <p className="text-blue-900 font-bold text-lg">
                    ৳{Number(req.amount).toLocaleString()}
                  </p>
                </div>

                {req.senderNumber && (
                  <div className="flex justify-between items-center">
                    <p className="text-[13px] text-blue-400 font-bold uppercase tracking-wider">
                      প্রেরকের নম্বর
                    </p>
                    <p className="text-blue-800 font-bold text-sm">
                      {req.senderNumber}
                    </p>
                  </div>
                )}

                {req.transactionId && (
                  <div className="flex justify-between items-center">
                    <p className="text-[13px] text-blue-400 font-bold uppercase tracking-wider">
                      ট্রানজেকশন আইডি
                    </p>
                    <p className="text-blue-700 font-bold text-sm">
                      {req.transactionId}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
