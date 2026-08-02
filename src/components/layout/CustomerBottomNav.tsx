"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Activity, Crown, FileText, Bell, Users } from "lucide-react";
import clsx from "clsx";

export function CustomerBottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Home",
      icon: Home,
      href: "/customer/profile",
    },
    {
      label: "History",
      icon: Activity,
      href: "/customer/services",
    },
    {
      label: "Complaint",
      icon: FileText,
      href: "/customer/complain",
    },
    {
      label: "VIP Card",
      icon: Crown,
      href: "/customer/vip-card",
    },

    {
      label: "Alerts",
      icon: Bell,
      href: "/customer/notifications",
    },
  ];

  return (
    <nav className="sm:hidden fixed bottom-4 left-4 right-4 bg-white/90 backdrop-blur-lg px-2 py-1.5 flex items-center justify-around z-50 shadow-[0_12px_40px_rgba(10,26,58,0.15)] rounded-2xl border border-gray-100/80">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(item.href + "/");
        return (
          <Link
            key={item.label}
            href={item.href}
            className={clsx(
              "flex flex-col items-center gap-0.5 py-1 px-2 min-w-[56px] transition-all duration-300 relative",
              isActive ? "text-brand" : "text-gray-400 hover:text-brand/80",
            )}
          >
            {isActive && (
              <span className="absolute -top-1 w-5 h-1 bg-brand rounded-full animate-pulse" />
            )}
            <div
              className={clsx(
                "p-1.5 rounded-xl transition-all duration-300",
                isActive ? "bg-brand/10 text-brand" : "text-gray-400",
              )}
            >
               <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} className="transition-transform duration-300 hover:scale-115" />
            </div>
            <span
              className={clsx(
                "text-[8px] uppercase tracking-wider font-extrabold text-center transition-all duration-300",
                isActive ? "opacity-100 font-extrabold text-brand" : "opacity-60 font-medium",
              )}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
