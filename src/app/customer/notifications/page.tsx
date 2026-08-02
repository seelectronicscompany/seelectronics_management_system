"use client";

import { useEffect, useState } from "react";
import {
  Bell,
  Check,
  ExternalLink,
  Inbox,
  ArrowLeft,
  Zap,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import {
  getCustomerNotifications,
  markCustomerNotificationAsRead,
} from "@/actions/customerActions";
import { getCustomerNotices, markNoticeAsRead } from "@/actions/noticeActions";
import { formatDate } from "@/utils";
import clsx from "clsx";
import { CustomerLayout } from "@/components/layout/CustomerLayout";
import { Modal } from "@/components/ui";

export default function CustomerNotificationsPage() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [notices, setNotices] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    const [notifRes, noticesRes] = await Promise.all([
      getCustomerNotifications(),
      getCustomerNotices(),
    ]);

    if (notifRes.success && notifRes.data) setNotifications(notifRes.data);
    if (noticesRes.success && noticesRes.data) setNotices(noticesRes.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleMarkNotifAsRead = async (id: string) => {
    const res = await markCustomerNotificationAsRead(id);
    if (res.success) {
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)),
      );
    }
  };

  const handleMarkNoticeAsRead = async (id: string) => {
    const res = await markNoticeAsRead(id);
    if (res.success) {
      setNotices((prev) =>
        prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)),
      );
    }
  };

  const allNotifications = [
    ...notifications.map((n) => ({ ...n, itemType: "notification" })),
    ...notices.map((n) => ({ ...n, itemType: "notice" })),
  ].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <CustomerLayout>
      <div className="space-y-4 pb-20">
        <div className="flex items-center justify-between border-b border-gray-200/60 pb-3">
          <h1 className="text-xl sm:text-2xl font-black text-brand tracking-tight">
            Notifications
          </h1>
        </div>

        {isLoading ? (
          <div className="space-y-3.5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-20 bg-gray-200/60 animate-pulse rounded-2xl"
              />
            ))}
          </div>
        ) : allNotifications.length > 0 ? (
          <div className="grid gap-3">
            {allNotifications.map((item: any) => {
              const isNew = !item.isRead;
              const isNotice = item.itemType === "notice";

              let title = "";
              let message = "";

              if (item.itemType === "notification") {
                title = item.type || "Notification";
                message = item.message;
              } else {
                title = item.notice?.title || "Notice";
                message = item.notice?.content || "";
              }

              return (
                <div
                  key={item.id}
                  onClick={async () => {
                    if (isNew) {
                      if (isNotice) {
                        await handleMarkNoticeAsRead(item.id);
                      } else {
                        await handleMarkNotifAsRead(item.id);
                      }
                    }
                    setSelectedItem({ ...item, isRead: true });
                  }}
                  className={clsx(
                    "group flex items-center gap-3.5 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border transition-all duration-200 cursor-pointer hover:shadow-sm",
                    item.isRead
                      ? "border-gray-100/80 opacity-75"
                      : "border-brand/35 shadow-[0_4px_12px_rgba(10,26,58,0.03)]",
                  )}
                >
                  <div
                    className={clsx(
                      "shrink-0 size-11 rounded-xl flex items-center justify-center text-white shadow-sm",
                      item.itemType === "notification"
                        ? "bg-[#0A1A3A]"
                        : item.notice?.priority === "urgent"
                          ? "bg-rose-500"
                          : item.notice?.priority === "high"
                            ? "bg-orange-500"
                            : "bg-blue-500",
                    )}
                  >
                    {item.itemType === "notification" ? (
                      <Bell size={18} />
                    ) : item.notice?.priority === "urgent" ? (
                      <Zap size={18} />
                    ) : (
                      <Bell size={18} />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className={clsx(
                        "text-sm font-black truncate leading-tight tracking-tight mb-0.5",
                        item.isRead ? "text-gray-600" : "text-gray-900",
                      )}
                    >
                      {title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-1 leading-snug">
                      {message}
                    </p>
                    <span className="text-[10px] text-gray-400 font-extrabold block mt-1 uppercase tracking-wider">
                      {formatDate(item.createdAt, true)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {!item.isRead && (
                      <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-red-100 text-red-600 tracking-wider">
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
        ) : (
          <div className="h-72 flex flex-col items-center justify-center bg-white/80 rounded-2xl border border-gray-150 text-center p-6">
            <Inbox size={32} className="text-gray-300 mb-2" />
            <h3 className="text-sm font-black text-gray-900">All Caught Up!</h3>
            <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider mt-0.5">
              No notifications
            </p>
          </div>
        )}
      </div>

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
                  selectedItem.itemType === "notification"
                    ? "bg-[#0A1A3A]"
                    : selectedItem.notice?.priority === "urgent"
                      ? "bg-rose-500"
                      : selectedItem.notice?.priority === "high"
                        ? "bg-orange-500"
                        : "bg-blue-500",
                )}
              >
                {selectedItem.itemType === "notification" ? (
                  <Bell size={16} />
                ) : selectedItem.notice?.priority === "urgent" ? (
                  <Zap size={16} />
                ) : (
                  <Bell size={16} />
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {selectedItem.itemType === "notification"
                  ? selectedItem.type || "Notification"
                  : selectedItem.notice?.title || "Notice"}
              </h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                {selectedItem.itemType === "notification"
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
              {selectedItem.itemType === "notification" &&
                selectedItem.link && (
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
    </CustomerLayout>
  );
}
