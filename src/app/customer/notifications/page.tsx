"use client";

import { useEffect, useState } from "react";
import {
  Bell,
  Check,
  ExternalLink,
  Inbox,
  ArrowLeft,
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

export default function CustomerNotificationsPage() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [notices, setNotices] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
      <div className="p-4 sm:p-2 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-2">
          <Link
            href="/customer/profile"
            className="p-2 rounded-md bg-white border border-gray-100 shadow-sm hover:bg-gray-50 text-gray-400 hover:text-brand transition-all"
          >
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">
              Notifications
            </h1>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              Stay updated with your service requests
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-gray-100 animate-pulse rounded-3xl" />
            ))}
          </div>
        ) : allNotifications.length > 0 ? (
          <div className="space-y-4">
            {allNotifications.map((n: any) => {
              const isNew = !n.isRead;
              const isNotice = n.itemType === "notice";

              return (
                <div
                  key={n.id}
                  className={clsx(
                    "group bg-white rounded-2xl p-5 border transition-all duration-300 hover:shadow-md",
                    isNew
                      ? "border-red-200 bg-red-50/30"
                      : "border-gray-100 opacity-80"
                  )}
                >
                  <div className="flex flex-col gap-2">

                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        {isNotice ? "Announcement" : n.type} •{" "}
                        {formatDate(n.createdAt)}
                      </span>

                      {isNew && (
                        <span className="text-[10px] font-bold bg-red-500 text-white px-2 py-0.5 ">
                          NEW
                        </span>
                      )}
                    </div>

                    {/* Title + Bell */}
              <div className="flex items-center gap-3">
  <Bell
    size={22}
    className={clsx(
      "shrink-0",
      isNotice ? "text-amber-500" : "text-red-500"
    )}
  />

  <h3 className="text-[15px] font-bold text-gray-900 leading-snug">
    {isNotice ? n.notice?.title : n.message}
  </h3>
</div>

                    {/* Content */}
                    {isNotice && (
                      <p className="text-sm text-gray-500 mt-1">
                        {n.notice?.content}
                      </p>
                    )}

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 mt-2">
                      {n.link && (
                        <Link
                          href={n.link}
                          className="text-sm font-semibold text-red-500 hover:underline flex items-center gap-1"
                        >
                          Details <ExternalLink size={13} />
                        </Link>
                      )}

                      {isNew && (
                        <button
                          onClick={() =>
                            isNotice
                              ? handleMarkNoticeAsRead(n.id)
                              : handleMarkNotifAsRead(n.id)
                          }
                          className="text-sm font-semibold text-green-600 hover:underline flex items-center gap-1"
                        >
                          Mark Read <Check size={13} />
                        </button>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-[3rem] p-16 text-center border border-dashed border-gray-200">
            <div className="size-24 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-6">
              <Inbox size={40} className="text-gray-200" />
            </div>
            <h2 className="text-xl font-black text-gray-900 mb-2">
              No notifications yet
            </h2>
            <p className="text-gray-500 font-medium italic">
              We'll alert you here when something happens!
            </p>
          </div>
        )}
      </div>
    </CustomerLayout>
  );
}