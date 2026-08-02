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
    <header className="sticky top-0 z-50 bg-[#0A1A3A]/90 backdrop-blur-md text-white border-b border-white/10 shadow-md overflow-hidden w-full transition-all duration-300">
      <div className="max-w-4xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between gap-4">
        {/* LEFT BRAND LOGO */}
        <Link
          href="/customer/profile"
          className="flex items-center shrink-0 gap-2 hover:bg-white/10 p-1.5 rounded-xl transition-all duration-200 active:scale-95"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-tr from-brand to-blue-600 rounded-lg flex items-center justify-center border border-white/20 overflow-hidden shrink-0 shadow-inner">
            <span className="text-xs sm:text-sm font-extrabold tracking-wider">SE</span>
          </div>
        </Link>

        {/* TITLE */}
        <h1 className="font-extrabold text-xs sm:text-sm md:text-base tracking-wide truncate flex-1 min-w-0 bg-clip-text bg-gradient-to-r from-white to-gray-300">
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
