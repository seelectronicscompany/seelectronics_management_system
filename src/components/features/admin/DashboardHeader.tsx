"use client";

import { useSideNavContext } from "@/hooks";
import { Plus } from "lucide-react";
import Link from "next/link";
import NotificationBell from "./NotificationBell";

export default function DashboardHeader() {
  const { openSideNav } = useSideNavContext();

  return (
    <header className="flex items-center justify-between mb-4 sm:mb-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand tracking-tight">
          Admin Overview
        </h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <NotificationBell />
        <Link
          href="/services/add"
          className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-brand text-white rounded-md sm:rounded-md font-bold text-sm sm:text-base hover:bg-brand-800 active:scale-95 transition-all shadow-md shadow-brand-100"
        >
          <Plus size={20} className="sm:w-6 sm:h-6" />
          <span className="hidden sm:inline">Add New Service</span>
          <span className="sm:hidden">Add</span>
        </Link>
      </div>
    </header>
  );
}
