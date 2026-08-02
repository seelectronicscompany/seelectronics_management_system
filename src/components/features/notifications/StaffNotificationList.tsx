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
    <div className="space-y-3">
      {/* Feed */}
      <div className="grid gap-2">
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
                "group flex items-center gap-3 p-3 bg-white rounded-xl border transition-all cursor-pointer",
                item.isRead
                  ? "border-gray-100 opacity-80"
                  : "border-brand/30 shadow-sm",
              )}
            >
              {/* Icon */}
              <div
                className={clsx(
                  "shrink-0 size-10 rounded-lg flex items-center justify-center text-white",
                  item.itemType === "action"
                    ? item.type === "balance_added"
                      ? "bg-emerald-500"
                      : "bg-brand"
                    : item.notice?.priority === "urgent"
                      ? "bg-rose-500"
                      : item.notice?.priority === "high"
                        ? "bg-orange-500"
                        : "bg-blue-500",
                )}
              >
                {item.itemType === "action" ? (
                  item.type === "balance_added" ? (
                    <Wallet size={16} />
                  ) : (
                    <Bell size={16} />
                  )
                ) : item.notice?.priority === "urgent" ? (
                  <Zap size={16} />
                ) : (
                  <Bell size={16} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <h3
                    className={clsx(
                      "text-md font-bold truncate",
                      item.isRead ? "text-gray-600" : "text-gray-900",
                    )}
                  >
                    {title}
                  </h3>
                </div>

                <p className="text-md text-gray-500 line-clamp-2 leading-tight">
                  {message}
                </p>

                <span className="text-[12px] text-gray-400 block mt-0.5">
                  {formatDate(item.createdAt, true)}
                </span>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-2">
                {!item.isRead && (
                  <span className="text-[12px] font-bold uppercase px-2 py-0.5 rounded bg-red-100 text-red-600">
                    NEW
                  </span>
                )}

                <ChevronRight
                  size={18}
                  className="text-gray-400 group-hover:text-brand"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty */}
      {notifications.length === 0 && (
        <div className="h-72 flex flex-col items-center justify-center bg-white rounded-xl border border-gray-100 text-center">
          <Inbox size={32} className="text-gray-300 mb-2" />
          <h3 className="text-sm font-bold text-gray-900">All Caught Up!</h3>
          <p className="text-[10px] text-gray-400 uppercase">
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
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className={clsx(
                  "shrink-0 size-10 rounded-lg flex items-center justify-center text-white",
                  selectedItem.itemType === "action"
                    ? selectedItem.type === "balance_added"
                      ? "bg-emerald-500"
                      : "bg-brand"
                    : selectedItem.notice?.priority === "urgent"
                      ? "bg-rose-500"
                      : selectedItem.notice?.priority === "high"
                        ? "bg-orange-500"
                        : "bg-blue-500",
                )}
              >
                {selectedItem.itemType === "action" ? (
                  selectedItem.type === "balance_added" ? (
                    <Wallet size={16} />
                  ) : (
                    <Bell size={16} />
                  )
                ) : selectedItem.notice?.priority === "urgent" ? (
                  <Zap size={16} />
                ) : (
                  <Bell size={16} />
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {selectedItem.itemType === "action"
                  ? selectedItem.type === "balance_added"
                    ? "Balance Added"
                    : "Notification"
                  : selectedItem.notice?.title || "Notice"}
              </h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                {selectedItem.itemType === "action"
                  ? selectedItem.message
                  : selectedItem.notice?.content}
              </p>
            </div>

            <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest border-t border-gray-100 pt-3">
              Received: {formatDate(selectedItem.createdAt, true)}
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-100 rounded-lg transition-all"
              >
                Close
              </button>
              {selectedItem.itemType === "action" && selectedItem.link && (
                <Link
                  href={selectedItem.link}
                  className="px-4 py-2 text-sm font-semibold bg-brand text-white rounded-lg hover:bg-brand-hover flex items-center gap-1.5 transition-all"
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
