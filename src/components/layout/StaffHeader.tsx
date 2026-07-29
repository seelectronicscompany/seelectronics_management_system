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

  const routeConfig: Record<
    string,
    { title: string; showBalance?: boolean }
  > = {
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
    <header className="sticky top-0 z-50 bg-[#0A1A3A] text-white shadow-lg overflow-hidden w-full">
      <div className="max-w-4xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between gap-3">
        
        {/* LEFT PROFILE ACCORDION */}
        <Link
          href="/staff/profile"
          className="flex items-center shrink-0 gap-2 hover:bg-white/10 p-1.5 rounded-md transition-colors"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-md flex items-center justify-center border border-white/20 overflow-hidden shrink-0">
            <span className="text-sm sm:text-base font-bold">SE</span>
          </div>
        </Link>

        {/* TITLE */}
        <h1 className="font-bold text-xs sm:text-sm md:text-base truncate flex-1 min-w-0">
          {title}
        </h1>

        {/* BALANCE BAR AND NOTIFICATIONS */}
        <div className="flex items-center gap-2 shrink-0 max-w-full min-w-0">
          {showBalance && (
            <div className="min-w-0 max-w-[140px] xs:max-w-none">
              <StaffBalanceBar amount={balance} />
            </div>
          )}
          <StaffNotificationBell />
        </div>
      </div>
    </header>
  );
}