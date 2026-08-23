"use client";

import {
  getStaffNotifications,
  markStaffNotificationAsRead,
} from "@/actions/staffActions";
import { getStaffNotices, markNoticeAsRead } from "@/actions/noticeActions";
import { Spinner } from "@/components/ui";
import { formatDate } from "@/utils";
import {
  CombinedNotificationType,
  StaffNotificationType,
  NoticeRecipientType,
} from "@/types";
import { useState, useEffect } from "react";
import {
  Bell,
  ChevronRight,
  Info,
  Zap,
  Inbox,
  Wallet,
  MessageSquare,
} from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

import { Modal } from "@/components/ui";
import { ExternalLink } from "lucide-react";

export default function StaffNotificationList() {
  const [notifications, setNotifications] = useState<
    CombinedNotificationType[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] =
    useState<CombinedNotificationType | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    const [actionNotifRes, noticeNotifRes] = await Promise.all([
      getStaffNotifications(),
      getStaffNotices(),
    ]);

    let combined: CombinedNotificationType[] = [];

    if (actionNotifRes.success && actionNotifRes.data) {
      combined = [
        ...combined,
        ...(actionNotifRes.data as StaffNotificationType[]).map((n) => ({
          ...n,
          itemType: "action" as const,
        })),
      ];
    }

    if (noticeNotifRes.success && noticeNotifRes.data) {
      combined = [
        ...combined,
        ...(noticeNotifRes.data as NoticeRecipientType[]).map((n) => ({
          ...n,
          itemType: "notice" as const,
        })),
      ];
    }

    combined.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

    setNotifications(combined);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleMarkAsRead = async (id: string, type: "action" | "notice") => {
    if (type === "action") {
      await markStaffNotificationAsRead(id);
    } else {
      await markNoticeAsRead(id);
    }

    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)),
    );
  };

  if (isLoading)
    return (
      <div className="space-y-3 py-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-20 bg-gray-100 animate-pulse rounded-xl border border-gray-50"
          />
        ))}
      </div>
    );

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="space-y-4">
      {/* Feed */}
      <div className="grid gap-3">
        {notifications.map((item) => {
          let title = "";
          let message = "";
          let link = "#";

          if (item.itemType === "action") {
            title =
              item.type === "balance_added" ? "Balance Added" : "Notification";
            message = item.message;
            link = item.link || "/staff/notifications";
          } else {
            title = item.notice?.title || "Notice";
            message = item.notice?.content || "";
            link = "/staff/notifications";
          }

          return (
            <div
              key={item.id}
              onClick={async () => {
                if (!item.isRead) {
                  await handleMarkAsRead(item.id, item.itemType);
                }
                setSelectedItem({ ...item, isRead: true });
              }}
              className={clsx(
                "group flex items-start sm:items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden relative",
                item.isRead
                  ? "bg-white/60 border-gray-100/80 text-gray-500 opacity-90 hover:opacity-100 hover:bg-white hover:border-gray-200 hover:shadow-sm"
                  : "bg-gradient-to-br from-brand/[0.02] to-brand/[0.05] border-brand/20 shadow-[0_4px_16px_rgba(10,26,58,0.04)] hover:shadow-[0_6px_20px_rgba(10,26,58,0.06)] hover:border-brand/40",
              )}
            >
              {/* Icon */}
              <div
                className={clsx(
                  "shrink-0 size-9 sm:size-11 rounded-xl flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-105",
                  item.itemType === "action"
                    ? item.type === "balance_added"
                      ? "bg-emerald-500"
                      : "bg-brand"
                    : item.notice?.priority === "urgent"
                      ? "bg-rose-500"
                      : item.notice?.priority === "high"
                        ? "bg-amber-500"
                        : "bg-blue-500",
                )}
              >
                {item.itemType === "action" ? (
                  item.type === "balance_added" ? (
                    <Wallet className="size-4.5 sm:size-5" />
                  ) : (
                    <Bell className="size-4.5 sm:size-5" />
                  )
                ) : item.notice?.priority === "urgent" ? (
                  <Zap className="size-4.5 sm:size-5" />
                ) : (
                  <Bell className="size-4.5 sm:size-5" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3
                    className={clsx(
                      "text-base sm:text-lg font-bold truncate leading-tight tracking-tight",
                      item.isRead ? "text-gray-700" : "text-gray-900",
                    )}
                  >
                    {title}
                  </h3>
                  {!item.isRead && (
                    <span className="shrink-0 size-2 rounded-full bg-blue-600 animate-pulse" />
                  )}
                </div>

                <p className="text-sm sm:text-base text-gray-500 line-clamp-4 leading-snug break-all">
                  {message}
                </p>

                <span className="text-xs sm:text-sm text-gray-400 font-extrabold block mt-1 uppercase tracking-wider">
                  {formatDate(item.createdAt, true)}
                </span>
              </div>

              {/* Right Side */}
              <div className="shrink-0 flex items-center self-center gap-1.5 pl-2">
                {!item.isRead && (
                  <span className="hidden sm:inline-block text-[11px] sm:text-xs font-black uppercase px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 tracking-wider">
                    NEW
                  </span>
                )}

                <ChevronRight
                  size={18}
                  className="text-gray-300 group-hover:text-brand group-hover:translate-x-0.5 transition-all"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty */}
      {notifications.length === 0 && (
        <div className="h-72 flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-150 text-center p-6">
          <div className="size-12 rounded-full bg-gray-50 flex items-center justify-center mb-3">
            <Inbox size={24} className="text-gray-300" />
          </div>
          <h3 className="text-sm sm:text-base font-black text-gray-900">
            All Caught Up!
          </h3>
          <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider mt-1">
            No notifications
          </p>
        </div>
      )}

      {/* Detail Modal */}
      {selectedItem && (
        <Modal
          isVisible={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          title={
            selectedItem.itemType === "notice"
              ? "Notice Details"
              : "Notification Details"
          }
          width="500"
        >
          <div className="space-y-5 py-1">
            <div className="flex items-center gap-3">
              <div
                className={clsx(
                  "shrink-0 size-10 sm:size-12 rounded-xl flex items-center justify-center text-white shadow-sm",
                  selectedItem.itemType === "action"
                    ? selectedItem.type === "balance_added"
                      ? "bg-emerald-500"
                      : "bg-brand"
                    : selectedItem.notice?.priority === "urgent"
                      ? "bg-rose-500"
                      : selectedItem.notice?.priority === "high"
                        ? "bg-amber-500"
                        : "bg-blue-500",
                )}
              >
                {selectedItem.itemType === "action" ? (
                  selectedItem.type === "balance_added" ? (
                    <Wallet className="size-5 sm:size-6" />
                  ) : (
                    <Bell className="size-5 sm:size-6" />
                  )
                ) : selectedItem.notice?.priority === "urgent" ? (
                  <Zap className="size-5 sm:size-6" />
                ) : (
                  <Bell className="size-5 sm:size-6" />
                )}
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 leading-snug">
                  {selectedItem.itemType === "action"
                    ? selectedItem.type === "balance_added"
                      ? "Balance Added"
                      : "Notification"
                    : selectedItem.notice?.title || "Notice"}
                </h3>
                {selectedItem.itemType === "notice" && (
                  <span
                    className={clsx(
                      "text-[11px] sm:text-xs font-black uppercase px-2 py-0.5 rounded-full tracking-wider mt-1 inline-block",
                      selectedItem.notice?.priority === "urgent"
                        ? "bg-rose-100 text-rose-700"
                        : selectedItem.notice?.priority === "high"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-blue-100 text-blue-700",
                    )}
                  >
                    {selectedItem.notice?.priority || "normal"} Priority
                  </span>
                )}
              </div>
            </div>

            <div className="bg-gray-50/80 rounded-2xl p-4 sm:p-5 border border-gray-100/80">
              <p className="text-base  text-gray-700 whitespace-pre-wrap leading-relaxed">
                {selectedItem.itemType === "action"
                  ? selectedItem.message
                  : selectedItem.notice?.content}
              </p>
            </div>

            <div className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest border-t border-gray-100 pt-4">
              Received: {formatDate(selectedItem.createdAt, true)}
            </div>

            <div className="flex justify-end gap-2 pt-1">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 text-sm sm:text-base font-bold text-gray-500 hover:bg-gray-100 rounded-xl transition-all"
              >
                Close
              </button>
              {selectedItem.itemType === "action" && selectedItem.link && (
                <Link
                  href={selectedItem.link}
                  className="px-4 py-2 text-sm sm:text-base font-bold bg-brand text-white rounded-xl hover:bg-brand/90 flex items-center gap-1.5 transition-all shadow-sm"
                >
                  Learn More <ExternalLink size={14} />
                </Link>
              )}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
