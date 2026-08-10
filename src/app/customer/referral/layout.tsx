"use client";

import { CreditCard, Bell } from "lucide-react";
import { ReferralProvider } from "./_components/ReferralProvider";

export default function ReferralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24 font-['Hind_Siliguri',sans-serif]">
      {/* Header */}
      <div className="bg-white p-4 flex justify-between items-center border-b sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-blue-800 flex items-center justify-center text-white">
            <CreditCard className="size-5" />
          </div>
          <div>
            <h1 className="font-bold text-blue-800 text-base">
              SE Electronics Referral
            </h1>
          </div>
        </div>
        <button className="w-10 h-10 rounded bg-slate-50 flex items-center justify-center text-slate-500 border relative">
          <Bell className="size-5" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded border-2 border-white"></span>
        </button>
      </div>

      <main className="p-4 space-y-6 max-w-[450px] mx-auto">
        <ReferralProvider>{children}</ReferralProvider>
      </main>

      {/* Font for Bengali */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap");
        .font-siliguri {
          font-family: "Hind Siliguri", sans-serif;
        }
      `}</style>
    </div>
  );
}
