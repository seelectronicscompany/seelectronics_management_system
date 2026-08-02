"use client";

import { CustomerHeader } from "./CustomerHeader";
import { CustomerBottomNav } from "./CustomerBottomNav";
import { usePathname } from "next/navigation";
import { NoticeBanner } from "../features/notices";
import { useEffect, useState } from "react";
import { getCustomerNotices } from "@/actions";
import { NoticeRecipientType } from "@/types";

interface CustomerLayoutProps {
  children: React.ReactNode;
}

export function CustomerLayout({ children }: CustomerLayoutProps) {
  const pathname = usePathname();
  const [notifications, setNotifications] = useState<NoticeRecipientType[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await getCustomerNotices();
      if (res.success) setNotifications(res.data as any);
    };
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-50 via-gray-50 to-blue-50/30 flex flex-col overflow-x-hidden selection:bg-brand/10 selection:text-brand">
      <CustomerHeader />

      <NoticeBanner notifications={notifications} />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-4 pb-28 sm:pb-24 lg:py-6 overflow-x-hidden">
        <div
          key={pathname}
          className="animate-in fade-in slide-in-from-bottom-3 duration-500 w-full"
        >
          {children}
        </div>
      </main>

      <CustomerBottomNav />
    </div>
  );
}
