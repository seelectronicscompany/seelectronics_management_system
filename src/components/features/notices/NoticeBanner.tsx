"use client";

import { NoticeRecipientType } from "@/types";
import { useState, useEffect } from "react";
import { AlertTriangle, Zap, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function NoticeBanner({
  notifications,
}: {
  notifications: NoticeRecipientType[];
}) {
  const [currentNotice, setCurrentNotice] =
    useState<NoticeRecipientType | null>(null);

  useEffect(() => {
    // Find the most recent unread urgent/high priority notice
    const importantUnread = notifications
      .filter(
        (n) =>
          !n.isRead &&
          (n.notice?.priority === "urgent" || n.notice?.priority === "high"),
      )
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )[0];

    setCurrentNotice(importantUnread || null);
  }, [notifications]);

  if (!currentNotice) return null;

  return (
    <div
      className={clsx(
        "w-full px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in slide-in-from-top duration-500",
        currentNotice.notice?.priority === "urgent"
          ? "bg-rose-600 text-white"
          : "bg-orange-500 text-white",
      )}
    >
      <div className="flex items-center gap-3 min-w-0 w-full">
        <div className="size-9 rounded-md bg-white/20 flex items-center justify-center shrink-0">
          {currentNotice.notice?.priority === "urgent" ? (
            <Zap size={18} />
          ) : (
            <AlertTriangle size={18} />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-black uppercase tracking-wider opacity-85 mb-0.5">
            {currentNotice.notice?.priority} Announcement
          </p>
          <h4 className="text-xs sm:text-sm font-bold truncate break-words">
            {currentNotice.notice?.title}
          </h4>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
        <Link
          href="/customer/notifications"
          className="px-3 py-1.5 bg-white text-gray-900 rounded-md text-[11px] font-black uppercase tracking-wider hover:bg-gray-100 transition-all flex items-center gap-1"
        >
          Details
          <ChevronRight size={12} />
        </Link>
        <button
          onClick={() => setCurrentNotice(null)}
          className="p-1.5 hover:bg-white/10 rounded-md transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
