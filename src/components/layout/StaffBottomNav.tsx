"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Wrench, Wallet, User, ListTodo, Settings } from "lucide-react";
import clsx from "clsx";

export function StaffBottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Home",
      icon: Home,
      href: "/staff/profile",
    },
    {
      label: "Tasks",
      icon: ListTodo,
      href: "/staff/tasks",
    },
    {
      label: "Services",
      icon: Wrench,
      href: "/staff/services",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/staff/settings",
    },
  ];

  return (
    <nav className="sm:hidden fixed bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-2 py-1 flex items-center justify-around z-50 shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-gray-100 rounded-2xl">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.label}
            href={item.href}
            className={clsx(
              "flex flex-col items-center gap-0.5 py-1.5 px-3 min-w-16 transition-all duration-300 relative",
              isActive ? "text-brand scale-105" : "text-gray-400 active:scale-95",
            )}
          >
            <div
              className={clsx(
                "p-2 rounded-xl transition-all duration-300",
                isActive ? "bg-brand/10 text-brand shadow-sm shadow-brand/5" : "hover:bg-gray-50",
              )}
            >
              <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span
              className={clsx(
                "text-[9px] uppercase tracking-wider font-extrabold transition-all duration-300",
                isActive ? "opacity-100 font-black text-brand" : "opacity-50",
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
