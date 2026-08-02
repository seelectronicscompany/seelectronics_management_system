"use client";
import {
  Activity,
  AlertCircle,
  Download,
  MessageSquare,
  PhoneCall,
  ShieldAlert,
  Star,
  User,
  Wallet,
  Wrench,
  Award,
} from "lucide-react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { toast } from "react-toastify";
import PrayerTimes from "../shared/PrayerTimes";

import { StaffLayout } from "@/components/layout";
import Banner from "@/components/ui/Banner";

interface StaffDashboardClientProps {
  staffData: any;
  stats: any;
  experienceYears: number;
  adminPhone: string;
  activeComplaints: any[];
  activeNotices: any[];
  certificateToken?: string | null;
}

export default function StaffDashboardClient({
  staffData,
  stats,
  experienceYears,
  adminPhone,
  activeComplaints,
  activeNotices,
  certificateToken,
}: StaffDashboardClientProps) {
  const unreadNotices = activeNotices.filter((n) => !n.isRead);
  const showMarquee =
    activeComplaints.length > 0 ||
    unreadNotices.length > 0 ||
    (stats?.pendingServices || 0) > 0;

  return (
    <StaffLayout balance={stats?.availableBalance || 0}>
      <div className="flex flex-col gap-5 px-3 md:px-4 text-gray-800 pb-28">
        {/* Banner */}
        <div className="w-full overflow-hidden rounded-2xl shadow-lg border border-gray-100">
          <Banner />
        </div>

        {showMarquee && (
          <div className="bg-amber-50/70 backdrop-blur-sm border border-amber-200/50 rounded-2xl py-2.5 overflow-hidden shadow-sm">
            <Marquee
              speed={50}
              gradient={false}
              pauseOnHover={true}
              className="flex items-center"
            >
              {/* Active Complaints */}
              {activeComplaints.map((c) => (
                <Link
                  key={c.complaintId}
                  href={`/staff/complaints/${c.complaintId}`}
                  className="flex items-center mx-6 group font-extrabold"
                >
                  <div className="flex items-center gap-2">
                    <span className="bg-rose-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm animate-pulse">
                      অভিযোগ
                    </span>
                    <span className="text-rose-700 text-xs tracking-wide group-hover:underline uppercase">
                      সতর্কতা: আপনার বিরুদ্ধে একটি অভিযোগ জমা হয়েছে (আইডি: {c.complaintId})। বিস্তারিত দেখতে ক্লিক করুন।
                    </span>
                  </div>
                </Link>
              ))}

              {/* Unread Notices */}
              {unreadNotices.map((n) => (
                <Link
                  key={n.id}
                  href="/staff/notifications"
                  className="flex items-center mx-6 group font-extrabold"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`${n.notice.priority === "urgent" ? "bg-amber-600 animate-bounce" : "bg-brand"} text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm`}
                    >
                      নোটিশ
                    </span>
                    <span className="text-slate-700 text-xs tracking-wide group-hover:underline">
                      {n.notice.title}: {n.notice.content.substring(0, 55)}...
                    </span>
                  </div>
                </Link>
              ))}

              {/* Assigned Services */}
              {(stats?.pendingServices || 0) > 0 && (
                <Link
                  href="/staff/services"
                  className="flex items-center mx-6 group font-extrabold"
                >
                  <div className="flex items-center gap-2">
                    <span className="bg-emerald-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                      সার্ভিস
                    </span>
                    <span className="text-emerald-700 text-xs tracking-wide group-hover:underline">
                      পেন্ডিং সার্ভিস: {stats.pendingServices}টি। দ্রুত কাজ শুরু করুন।
                    </span>
                  </div>
                </Link>
              )}
            </Marquee>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          <div className="bg-white hover:bg-emerald-50/30 border border-slate-100 hover:border-emerald-100 p-4 rounded-2xl shadow-sm flex items-center text-center justify-center transition-all duration-300">
            <div>
              <p className="text-3xl font-black text-emerald-600 tracking-tight">
                {staffData.completedServices || 0}
              </p>
              <p className="text-[10px] uppercase font-bold text-slate-400 mt-1 tracking-wider">
                Completed
              </p>
            </div>
          </div>

          <div className="bg-white hover:bg-amber-50/30 border border-slate-100 hover:border-amber-100 p-4 rounded-2xl shadow-sm flex items-center text-center justify-center transition-all duration-300">
            <div>
              <p className="text-3xl font-black text-amber-600 tracking-tight">
                {staffData.pendingServices || 0}
              </p>
              <p className="text-[10px] uppercase font-bold text-slate-400 mt-1 tracking-wider">
                Pending
              </p>
            </div>
          </div>

          <div className="bg-white hover:bg-rose-50/30 border border-slate-100 hover:border-rose-100 p-4 rounded-2xl shadow-sm flex items-center text-center justify-center transition-all duration-300">
            <div>
              <p className="text-3xl font-black text-rose-600 tracking-tight">
                {staffData.canceledServices || 0}
              </p>
              <p className="text-[10px] uppercase font-bold text-slate-400 mt-1 tracking-wider">
                Canceled
              </p>
            </div>
          </div>

          <div className="bg-white hover:bg-blue-50/30 border border-slate-100 hover:border-blue-100 p-4 rounded-2xl shadow-sm flex items-center text-center justify-center transition-all duration-300">
            <div>
              <p className="text-3xl font-black text-blue-600 tracking-tight">
                {staffData.serviceCenterServices || 0}
              </p>
              <p className="text-[10px] uppercase font-bold text-slate-400 mt-1 tracking-wider">
                Service Center
              </p>
            </div>
          </div>
        </div>

        {/* Action Grid */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100/50 p-6 md:p-8">
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-8">
            {[
              {
                label: "Services",
                icon: Wrench,
                href: "/staff/services",
                color: "text-emerald-500",
                bg: "bg-emerald-50/80 border-emerald-100/50",
              },
              {
                label: "Profile",
                icon: User,
                href: "/staff/details",
                color: "text-indigo-500",
                bg: "bg-indigo-50/80 border-indigo-100/50",
              },
              {
                label: "Payment",
                icon: Wallet,
                href: "/staff/payment",
                color: "text-rose-500",
                bg: "bg-rose-50/80 border-rose-100/50",
              },
              {
                label: "History",
                icon: Activity,
                href: "/staff/tracking",
                color: "text-blue-500",
                bg: "bg-blue-50/80 border-blue-100/50",
              },
              {
                label: "Feedbacks",
                icon: Star,
                href: "/staff/feedbacks",
                color: "text-orange-500",
                bg: "bg-orange-50/80 border-orange-100/50",
              },
              {
                label: "WhatsApp",
                icon: MessageSquare,
                href: "https://wa.me/8801310673600",
                color: "text-green-500",
                bg: "bg-green-50/80 border-green-100/50",
              },
              {
                label: "Support",
                icon: PhoneCall,
                href: `/staff/support`,
                color: "text-brand",
                bg: "bg-brand/5 border-brand/10",
              },
              {
                label: "Complains",
                icon: ShieldAlert,
                href: "/staff/complaints",
                color: "text-red-500",
                bg: "bg-red-50/80 border-red-100/50",
              },
              {
                label: "Emergency",
                icon: AlertCircle,
                href: "/staff/jorori-seba",
                color: "text-rose-600",
                bg: "bg-rose-50/80 border-rose-100/50",
              },
              {
                label: "Certificate",
                icon: Award,
                href: certificateToken
                  ? `/staff/certificate?token=${certificateToken}`
                  : "#",
                onClick: (e: any) => {
                  if (!certificateToken) {
                    e.preventDefault();
                    toast.error(
                      "আপনার জন্য কোনো সার্টিফিকেট ইস্যু করা হয়নি। অনুগ্রহ করে এডমিনের সাথে যোগাযোগ করুন।",
                    );
                  }
                },
                color: "text-amber-500",
                bg: "bg-amber-50/80 border-amber-100/50",
              },
            ].map((action, i) => (
              <Link
                key={action.label}
                href={action.href}
                onClick={action.onClick}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div
                  className={`${action.bg} ${action.color} border size-14 sm:size-16 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-active:scale-95`}
                  style={{
                    animationDelay: `${i * 40}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <action.icon className="size-6 sm:size-7" />
                </div>

                <span className="text-[10px] sm:text-xs font-bold text-slate-600 tracking-tight text-center">
                  {action.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Prayer Times Widget */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100/50 p-1">
          <PrayerTimes />
        </div>
      </div>
    </StaffLayout>
  );
}
