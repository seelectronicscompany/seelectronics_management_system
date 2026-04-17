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
    <header className="sticky top-0 z-50 bg-[#0A1A3A] text-white shadow-lg overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
        
        {showBalance && <StaffBalanceBar amount={balance} />}

      

        {/*  TITLE (MobilePageHeader logic) */}
        <h1 className="font-bold text-sm sm:text-base p-1 flex-1">
          {title}
        </h1>
 {/* LEFT */}
        <Link
          href="/staff/profile"
          className="flex items-center gap-2 hover:bg-white/40 p-1.5 rounded-md transition-colors"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-md flex items-center justify-center border border-white/20 overflow-hidden">
            <span className="text-base font-bold">SE</span>
          </div>

         
        </Link>
        {/* RIGHT */}
        <div className="flex items-center">
          <StaffNotificationBell />
        </div>
      </div>
    </header>
  );
}