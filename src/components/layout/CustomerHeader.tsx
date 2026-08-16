"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CustomerNotificationBell from "../features/customers/CustomerNotificationBell";

export function CustomerHeader() {
  const pathname = usePathname();

  const routeConfig: Record<string, { title: string }> = {
    "/customer/profile": { title: "Dashboard" },
    "/customer/services": { title: "Service History" },
    "/customer/complain": { title: "Complaints" },
    "/customer/vip-card": { title: "VIP Premium Card" },
    "/customer/notifications": { title: "Notifications" },
    "/customer/feedback": { title: "Feedback" },
    "/customer/plans": { title: "Subscriptions" },
    "/customer/referral": { title: "Referrals" },
    "/customer/support": { title: "Customer Support" },
  };

  const current = routeConfig[pathname] || { title: "" };
  const { title } = current;

  return (
    <header className="sticky top-0 z-50 bg-[#0A1A3A] text-white overflow-hidden w-full">
      <div className="max-w-4xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between gap-3">
        {/* LEFT BRAND LOGO */}
        <Link
          href="/customer/profile"
          className="flex items-center shrink-0 gap-2 hover:bg-white/10 p-1.5 rounded-md transition-colors"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-md flex items-center justify-center border border-white/20 overflow-hidden shrink-0">
            <span className="text-sm sm:text-base font-bold">SE</span>
          </div>
        </Link>

        {/* TITLE */}
        <h1 className="font-bold text-xs sm:text-sm md:text-base truncate flex-1 min-w-0">
          {title || "Welcome to SE Electronics"}
        </h1>

        {/* NOTIFICATIONS */}
        <div className="flex items-center gap-2 shrink-0">
          <CustomerNotificationBell variant="header" />
        </div>
      </div>
    </header>
  );
}
