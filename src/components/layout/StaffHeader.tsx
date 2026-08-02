"use client";

import Link from "next/link";
import { StaffBalanceBar } from "../features/staff/StaffBalanceBar";
import { StaffNotificationBell } from "../features/notices";
import { usePathname } from "next/navigation";

interface StaffHeaderProps {
  balance: number;
}

export function StaffHeader({ balance }: StaffHeaderProps) {
  const pathname = usePathname();

  const routeConfig: Record<string, { title: string; showBalance?: boolean }> =
    {
      "/staff/services": { title: "Services" },
      "/staff/details": { title: "Profile", showBalance: true },
      "/staff/payment": { title: "Payment" },
      "/staff/tracking": { title: "History" },
      "/staff/feedbacks": { title: "Feedbacks" },
      "/staff/complaints": { title: "Complains" },
      "/staff/notifications": { title: "Notifications" },
      "/staff/tasks": { title: "Tasks" },
      "/staff/payment/payment-history": { title: "Payment History" },
      "/staff/payment/request": { title: "Payment Request" },
      "/staff/profile": { title: "", showBalance: true },
    };

  const current = routeConfig[pathname] || {
    showBalance: false,
  };

  const { title, showBalance } = current;

  return (
    <header className="sticky top-0 z-50 bg-[#0A1A3A]/95 backdrop-blur-md text-white border-b border-white/5 shadow-md overflow-hidden w-full">
      <div className="max-w-4xl mx-auto px-4 h-15 flex items-center justify-between gap-3">
        {/* LEFT PROFILE ACCORDION */}
        <Link
          href="/staff/profile"
          className="flex items-center shrink-0 gap-2 hover:bg-white/5 active:scale-95 p-1 rounded-xl transition-all duration-200"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-tr from-brand to-brand-500 rounded-xl flex items-center justify-center border border-white/10 overflow-hidden shrink-0 shadow-inner">
            <span className="text-sm sm:text-base font-black tracking-wider text-white">
              SE
            </span>
          </div>
        </Link>

        {/* TITLE */}
        <h1 className="font-extrabold text-sm sm:text-base uppercase tracking-widest text-slate-100 truncate flex-1 min-w-0">
          {title || "Staff Portal"}
        </h1>

        {/* BALANCE BAR AND NOTIFICATIONS */}
        <div className="flex items-center gap-16 shrink-0 max-w-full min-w-0">
          {showBalance && (
            <div className="min-w-0 max-w-[130px] xs:max-w-none transition-all duration-300">
              <StaffBalanceBar amount={balance} />
            </div>
          )}
          <StaffNotificationBell />
        </div>
      </div>
    </header>
  );
}
