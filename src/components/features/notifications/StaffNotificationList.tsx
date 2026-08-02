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
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="space-y-4 pb-28">
      {/* Header Info */}
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-brand/5 rounded-xl text-brand">
            <Bell size={22} className="stroke-[2.5]" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-800 uppercase tracking-wide">
              Notifications
            </h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              {unreadCount} Unread Notifications / Notices
            </p>
          </div>
        </div>
      </div>

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
                "group flex items-start gap-4 p-4 bg-white rounded-2xl border transition-all cursor-pointer shadow-sm hover:shadow-md",
                item.isRead
                  ? "border-slate-100/60 opacity-80"
                  : "border-brand/20 shadow-sm",
              )}
            >
              {/* Icon */}
              <div
                className={clsx(
                  "shrink-0 size-10 rounded-xl flex items-center justify-center text-white border shadow-sm",
                  item.itemType === "action"
                    ? item.type === "balance_added"
                      ? "bg-emerald-500 border-emerald-400"
                      : "bg-brand border-brand"
                    : item.notice?.priority === "urgent"
                      ? "bg-rose-500 border-rose-400"
                      : item.notice?.priority === "high"
                        ? "bg-orange-500 border-orange-400"
                        : "bg-blue-500 border-blue-400",
                )}
              >
                {item.itemType === "action" ? (
                  item.type === "balance_added" ? (
                    <Wallet size={18} />
                  ) : (
                    <Bell size={18} />
                  )
                ) : item.notice?.priority === "urgent" ? (
                  <Zap size={18} />
                ) : (
                  <Bell size={18} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3
                    className={clsx(
                      "text-sm font-black truncate uppercase tracking-wider",
                      item.isRead ? "text-slate-600" : "text-slate-900",
                    )}
                  >
                    {title}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mt-1 font-medium">
                  {message}
                </p>

                <span className="text-[10px] text-slate-400 block mt-2 font-bold uppercase tracking-wider">
                  {formatDate(item.createdAt, true)}
                </span>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-2 self-center shrink-0">
                {!item.isRead && (
                  <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100">
                    NEW
                  </span>
                )}

                <ChevronRight
                  size={16}
                  className="text-slate-300 group-hover:text-brand group-hover:translate-x-0.5 transition-all"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty */}
      {notifications.length === 0 && (
        <div className="h-64 flex flex-col items-center justify-center bg-white rounded-3xl border border-slate-100 text-center p-6">
          <div className="size-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 border border-slate-100 text-slate-300">
            <Inbox size={26} />
          </div>
          <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">All Caught Up!</h3>
          <p className="text-xs text-slate-400 mt-1 font-bold">
            No new notices or alerts at this moment.
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
          <div className="space-y-5 p-1 text-slate-700">
            <div className="flex items-center gap-3">
              <div
                className={clsx(
                  "shrink-0 size-10 rounded-xl flex items-center justify-center text-white border shadow-sm",
                  selectedItem.itemType === "action"
                    ? selectedItem.type === "balance_added"
                      ? "bg-emerald-500 border-emerald-400"
                      : "bg-brand border-brand"
                    : selectedItem.notice?.priority === "urgent"
                      ? "bg-rose-500 border-rose-400"
                      : selectedItem.notice?.priority === "high"
                        ? "bg-orange-500 border-orange-400"
                        : "bg-blue-500 border-blue-400",
                )}
              >
                {selectedItem.itemType === "action" ? (
                  selectedItem.type === "balance_added" ? (
                    <Wallet size={18} />
                  ) : (
                    <Bell size={18} />
                  )
                ) : selectedItem.notice?.priority === "urgent" ? (
                  <Zap size={18} />
                ) : (
                  <Bell size={18} />
                )}
              </div>
              <h3 className="text-base font-extrabold text-slate-800 uppercase tracking-wide">
                {selectedItem.itemType === "action"
                  ? selectedItem.type === "balance_added"
                    ? "Balance Added"
                    : "Notification"
                  : selectedItem.notice?.title || "Notice"}
              </h3>
            </div>

            <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100/80">
              <p className="text-xs sm:text-sm text-slate-600 whitespace-pre-wrap leading-relaxed font-medium">
                {selectedItem.itemType === "action"
                  ? selectedItem.message
                  : selectedItem.notice?.content}
              </p>
            </div>

            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider border-t border-slate-100 pt-3">
              Received: {formatDate(selectedItem.createdAt, true)}
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2.5 text-xs font-black uppercase tracking-wider text-slate-500 hover:bg-slate-50 rounded-xl border border-transparent hover:border-slate-100 transition-all"
              >
                Close
              </button>
              {selectedItem.itemType === "action" && selectedItem.link && (
                <Link
                  href={selectedItem.link}
                  className="px-4 py-2.5 text-xs font-black uppercase tracking-wider bg-brand text-white rounded-xl hover:bg-brand-600 flex items-center gap-1.5 transition-all shadow-sm shadow-brand/10"
                >
                  Learn More <ExternalLink size={13} />
                </Link>
              )}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
