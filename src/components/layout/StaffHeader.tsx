"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { StaffNotificationBell } from "../features/notices";
import { StaffBalanceBar } from "../features/staff/StaffBalanceBar";

interface StaffHeaderProps {
  balance: number;
}

const routeConfig: Record<string, { title: string; showBalance?: boolean }> = {
  "/staff/profile": { title: "Dashboard", showBalance: true },
  "/staff/details": { title: "Profile", showBalance: true },
  "/staff/profile/edit": { title: "Edit Profile" },
  "/staff/services": { title: "Services" },
  "/staff/payment": { title: "Payment", showBalance: true },
  "/staff/payment/payment-history": { title: "Payment History" },
  "/staff/payment/request": { title: "Payment Request" },
  "/staff/payment/settings": { title: "Payment Settings" },
  "/staff/payments": { title: "Staff Payments" },
  "/staff/tracking": { title: "History" },
  "/staff/feedbacks": { title: "Feedbacks" },
  "/staff/complaints": { title: "Complaints" },
  "/staff/notifications": { title: "Notifications" },
  "/staff/notices": { title: "Notices" },
  "/staff/tasks": { title: "Tasks" },
  "/staff/customers": { title: "Customer List" },
  "/staff/id-card": { title: "ID Card" },
  "/staff/certificate": { title: "Experience Certificate" },
  "/staff/loan": { title: "Loan Application" },
  "/staff/resume": { title: "Staff Resume" },
  "/staff/jorori-seba": { title: "Emergency Services" },
  "/staff/support": { title: "Staff Support" },
  "/staff/settings": { title: "Settings" },
};

function getHeaderConfig(pathname: string): {
  title: string;
  showBalance: boolean;
} {
  if (routeConfig[pathname]) {
    return {
      title: routeConfig[pathname].title,
      showBalance: routeConfig[pathname].showBalance ?? false,
    };
  }

  // Dynamic route matches
  if (pathname.startsWith("/staff/payment/")) {
    return { title: "Payment Details", showBalance: false };
  }
  if (pathname.startsWith("/staff/customers/")) {
    return { title: "Customer Details", showBalance: false };
  }
  if (pathname.startsWith("/staff/complaints/")) {
    return { title: "Complaint Details", showBalance: false };
  }
  if (pathname.startsWith("/staff/profile/")) {
    return { title: "Profile", showBalance: false };
  }

  // Fallback: format route slug
  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1];
  if (lastSegment) {
    const formatted = lastSegment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
    return { title: formatted, showBalance: false };
  }

  return { title: "Dashboard", showBalance: false };
}

export function StaffHeader({ balance }: StaffHeaderProps) {
  const pathname = usePathname();
  const { title, showBalance } = getHeaderConfig(pathname);

  const isNoTitlePage =
    pathname === "/staff/profile" || pathname === "/staff/details";

  return (
    <header className="sticky top-0 z-50 bg-[#0A1A3A] text-white shadow-lg overflow-hidden w-full">
      <div className="max-w-4xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between gap-3">
        {!isNoTitlePage ? (
          <>
            {/* LEFT BRAND LOGO */}
            <Link
              href="/staff/profile"
              className="flex items-center shrink-0 gap-2 hover:bg-white/10 p-1 rounded-md transition-colors"
              title="Staff Dashboard"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-md flex items-center justify-center border border-white/20 overflow-hidden shrink-0">
                <span className="text-sm sm:text-base font-bold">SE</span>
              </div>
            </Link>

            {/* PAGE TITLE */}
            <h1 className="font-bold text-base sm:text-lg flex-1 min-w-0 truncate">
              {title || "Dashboard"}
            </h1>

            {/* RIGHT ACTIONS: BALANCE & NOTIFICATIONS */}
            <div className="flex items-center gap-2 shrink-0">
              {showBalance && (
                <div className="min-w-0 max-w-[140px] xs:max-w-none">
                  <StaffBalanceBar amount={balance} />
                </div>
              )}
              <StaffNotificationBell />
            </div>
          </>
        ) : (
          <>
            {/* NO TITLE PAGE: BALANCE BAR & NOTIFICATIONS ONLY */}
            {showBalance && (
              <div className="min-w-0 max-w-[140px] xs:max-w-none">
                <StaffBalanceBar amount={balance} />
              </div>
            )}
            <div className="ml-auto">
              <StaffNotificationBell />
            </div>
          </>
        )}
      </div>
    </header>
  );
}
