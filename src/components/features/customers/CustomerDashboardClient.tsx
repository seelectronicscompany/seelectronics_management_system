"use client";
import { useState } from "react";
import { customerLogout } from "@/actions/customerActions";
import { CustomerLayout } from "@/components/layout";
import Banner from "@/components/ui/Banner";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  Banknote,
  BatteryCharging,
  Boxes,
  CheckCircle,
  Clock,
  Crown,
  FileText,
  Home,
  LocateIcon,
  LogOut,
  MapPin,
  MessageSquare,
  Monitor,
  PhoneCall,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Star,
  User,
  Zap,
} from "lucide-react";
import Link from "next/link";
import PrayerTimes from "../shared/PrayerTimes";
import CustomerNotificationBell from "./CustomerNotificationBell";
import Marquee from "react-fast-marquee";
import clsx from "clsx";
import { custom } from "zod";

interface CustomerDashboardClientProps {
  customer: {
    id: string;
    customerId: string;
    name: string;
    phone: string;
    address: string | null;
    vipStatus?: string | null;
    vipCardNumber?: string | null;
    isWarrantyStopped?: boolean;
    warrantyExpiryDate?: string | null; // ✅ added (required for logic)
  };
  stats: {
    totalServices: number;
    activeSubscriptions: number;
    dueAmount?: number;
    isWarrantyExpired?: boolean;
    warrantyExpiryDate?: Date | null;
  } | null;
  adminPhone: string;
}

export default function CustomerDashboardClient({
  customer,
  stats,
  adminPhone,
}: CustomerDashboardClientProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [showSeIpsModal, setShowSeIpsModal] = useState(false);
  // ✅ Dashboard and Warranty logic
  const isWarrantyExpired = stats?.isWarrantyExpired ?? false;
  const isDashboardDisabled = customer.isWarrantyStopped ?? false;

  const Actions = [
    {
      label: "Invoice",
      icon: FileText,
      href: "/customer/invoice",
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
    {
      label: "Warranty",
      icon: ShieldCheck,
      href: "/check-warranty",
      color: "text-indigo-500",
      bg: "bg-indigo-50",
    },

    {
      label: "My Service",
      icon: Boxes,
      href: "/customer/services",
      color: "text-green-500",
      bg: "bg-green-50",
    },
    {
      label: "VIP Card",
      icon: Crown,
      href: "/customer/vip-card",
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
    {
      label: "Referral",
      icon: User,
      href: "/customer/referral",
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      label: "Feedback",
      icon: Star,
      href: "/customer/feedback",
      color: "text-pink-500",
      bg: "bg-pink-50",
    },
    {
      label: "Support",
      icon: PhoneCall,
      href: `/customer/support`,
      color: "text-brand",
      bg: "bg-brand/5",
    },
    {
      label: "Coverage",
      icon: MapPin,
      href: "/coverage",
      color: "text-cyan-600",
      bg: "bg-cyan-50",
    },
    {
      label: "WhatsApp",
      icon: MessageSquare,
      href: `https://wa.me/8801310673600`,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      label: "Complaints",
      icon: FileText,
      href: "/customer/complain",
      color: "text-rose-500",
      bg: "bg-rose-50",
    },
    {
      label: "Subscription",
      icon: Zap,
      href: "/customer/plans",
      color: "text-violet-500",
      bg: "bg-violet-50",
    },
    {
      label: "Location",
      icon: LocateIcon,
      href: "/location",
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      label: "Emergency Services",
      icon: AlertCircle,
      href: "/customer/jorori-seba",
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      label: "Chat Support",
      icon: MessageSquare,
      href: "/customer/chat-support",
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      label: "Team Members",
      icon: User,
      href: "/team-members",
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      label: "Shop",
      icon: ShoppingCart,
      isSeIpsModal: true,
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
  ];

  return (
    <CustomerLayout>
      {/* Dashboard Welcome Header */}
      <div className="bg-[#0A1A3A] text-white rounded-b-3xl sm:rounded-b-[2.5rem]  w-full py-5 flex items-center justify-center z-10 relative mb-2">
        <h1 className="font-bold text-[13px] sm:text-base md:text-lg tracking-[0.2em] uppercase text-center w-full">
          Welcome to SE Electronics
        </h1>
      </div>

      <div className="flex flex-col gap-4 px-2 text-gray-800 pb-24">
        {/* Warranty Marquee */}
        <div className="mt-1 w-full overflow-hidden shadow-md">
          <Banner />
        </div>
        {/* Warranty Notice Marquee */}
        {(isWarrantyExpired || isDashboardDisabled) && (
          <div className="mt-2 bg-red-50 border border-red-200 rounded-sm overflow-hidden">
            <Marquee speed={45} pauseOnHover={true} gradient={false}>
              {isDashboardDisabled ? (
                <div className="flex items-center gap-2 text-red-600 font-semibold text-sm px-6 py-2">
                  <AlertTriangle size={18} />
                  {`প্রিয়  গ্রাহক ${customer?.name} (${customer.customerId}) আপনার পন্যের বকেয়া টাকা পরিশোধের জন্য বিভিন্ন সময় কল ও এসএমএস, ভয়েস এস এম এস দিয়েও আপনার সারা পাওয়া যায়নি দীর্ঘ সময় টাকা ও পরিশোধ করেননি তাই সেইলার কোম্পানির কাছে কাস্টমার আই ডি তে অভিযোগ জমা করায় আপনার ওয়ারেন্টি বাতিল  করেছে পুনরায় ওয়ারেন্টি বহাল রাখতে সেইলারের সাথে যোগাযোগ করুন অথবা কোম্পানিতে সরাসরি টাকা পরিশোধ করে ওয়ারেন্টি চালু করুন কাস্টমার কেয়ার ০৯৬৪৯৩৫৫৫৫৫ অথবা ০৯৬৩৯৬৭৩৬০০`}
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600 font-semibold text-sm px-6 py-2">
                  <ShieldCheck size={18} />
                  প্রিয় গ্রাহক আপনার পন্যের কোম্পানির দেওয়া ওয়ারেন্টি শেষ
                  হয়ে গেছে ।
                </div>
              )}

              {/* repeat for smooth loop */}
              {isDashboardDisabled ? (
                <div className="flex items-center gap-2 text-red-600 font-semibold text-sm px-6 py-2">
                  <AlertTriangle size={18} />
                  {`প্রিয়  গ্রাহক ${customer?.name} (${customer.customerId}) আপনার পন্যের বকেয়া টাকা পরিশোধের জন্য বিভিন্ন সময় কল ও এসএমএস, ভয়েস এস এম এস দিয়েও আপনার সারা পাওয়া যায়নি দীর্ঘ সময় টাকা ও পরিশোধ করেননি তাই সেইলার কোম্পানির কাছে কাস্টমার আই ডি তে অভিযোগ জমা করায় আপনার ওয়ারেন্টি বাতিল  করেছে পুনরায় ওয়ারেন্টি বহাল রাখতে সেইলারের সাথে যোগাযোগ করুন অথবা কোম্পানিতে সরাসরি টাকা পরিশোধ করে ওয়ারেন্টি চালু করুন কাস্টমার কেয়ার ০৯৬৪৯৩৫৫৫৫৫ অথবা ০৯৬৩৯৬৭৩৬০০`}
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600 font-semibold text-sm px-6 py-2">
                  <ShieldCheck size={18} />
                  প্রিয় গ্রাহক আপনার পন্যের কোম্পানির দেওয়া ওয়ারেন্টি শেষ
                  হয়ে গেছে।
                </div>
              )}
            </Marquee>
          </div>
        )}

        {/* Customer Info Card */}
        <div
          className={`relative rounded-md p-4 sm:p-6 border overflow-hidden transition-all duration-300 shadow-sm flex flex-col  ${
            isWarrantyExpired || isDashboardDisabled
              ? "bg-red-50 border-red-300"
              : "bg-white"
          }`}
        >
          {/* Top Row: Status Badge & Notifications */}
          <div className="flex items-center  justify-between w-full">
            <div
              className={`inline-flex items-center text-[10px] sm:text-xs px-3 py-1.5 rounded font-extrabold uppercase tracking-wider border ${
                isWarrantyExpired
                  ? "bg-red-50 text-red-600 border-red-300"
                  : "bg-green-50 text-green-600 border-green-300"
              }`}
            >
              <span className="mr-2 text-lg leading-none mt-[-2px]">•</span>{" "}
              {isDashboardDisabled
                ? "Warranty Cancled"
                : isWarrantyExpired
                  ? "Warranty Expired"
                  : "Active Customer"}
            </div>

            <div className="flex flex-col items-center gap-1">
              <CustomerNotificationBell variant="card" />
              <span
                className={clsx(
                  "text-[11px] font-semibold",
                  isWarrantyExpired ? "text-red-600" : "text-green-600",
                )}
              >
                {isDashboardDisabled
                  ? "Cancled"
                  : isWarrantyExpired
                    ? "Expired"
                    : "Active"}
              </span>
            </div>
          </div>

          {/* Second Row: User Info */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-md bg-gray-50 border border-gray-200 shrink-0 shadow-sm">
              <User className="text-gray-700" size={20} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg sm:text-xl font-black text-gray-900 leading-tight">
                {customer.name}
              </h2>
              <p className="text-sm font-bold text-gray-500 flex items-center gap-1.5 mt-0.5">
                <span className="uppercase tracking-widest text-gray-400">
                  ID:
                </span>
                <span className="text-gray-800">{customer.customerId}</span>
              </p>
            </div>
          </div>

          {/* Third Row: Phone & Due */}
          {!!(stats?.dueAmount && stats.dueAmount > 0) ? (
            <div className={`grid gap-2 sm:gap-3 mt-2 grid-cols-7`}>
              {/* Phone */}
              <div className="flex col-span-4 items-center gap-2 sm:gap-3 py-3 px-2  border-y border-gray-100 bg-white min-w-0">
                <div className="p-2 sm:p-3 rounded-md bg-white border border-gray-200 shrink-0 shadow-sm">
                  <PhoneCall
                    size={18}
                    className="text-gray-600 sm:w-5 sm:h-5"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">
                    Phone
                  </span>
                  <span className="text-gray-800 text-sm sm:text-sm font-black leading-tight truncate">
                    {customer.phone}
                  </span>
                </div>
              </div>

              {/* Due Amount */}
              <div className="flex items-center gap-2.5 px-3  col-span-3 rounded-sm bg-[#FFEAEA] border border-[#FFD5D5] min-w-0">
                <div className="flex items-center animate-pulse justify-center p-2 rounded-lg shrink-0 bg-[#faa1a1]">
                  <Banknote
                    className="text-[#ff0000]   drop-shadow-[0_0_4px_rgba(211,47,47,0.4)]"
                    size={22}
                  />
                </div>

                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-bold text-[#D32F2F] leading-tight truncate">
                    ৳{stats.dueAmount.toLocaleString()}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#E57373] tracking-wider leading-tight">
                    DUE
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className={`grid gap-2 sm:gap-3 mt-2 grid-cols-1`}>
              {/* Phone */}
              <div className="flex items-center gap-2 sm:gap-3 py-3 px-2  border-y border-gray-100 bg-white min-w-0">
                <div className="p-2 sm:p-3 rounded-md bg-white border border-gray-200 shrink-0 shadow-sm">
                  <PhoneCall
                    size={18}
                    className="text-gray-600 sm:w-5 sm:h-5"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">
                    Phone
                  </span>
                  <span className="text-gray-800 text-xs sm:text-sm font-black leading-tight truncate">
                    {customer.phone}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Fourth Row: VIP */}
          {customer.vipStatus === "approved" && (
            <div className="mt-2 flex items-center justify-between p-4 rounded-md bg-yellow-50 border border-yellow-200 shadow-sm">
              {" "}
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-md bg-white border border-yellow-200 shrink-0 shadow-sm">
                  <Crown size={18} className="text-yellow-600" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-base font-black text-yellow-700 uppercase tracking-widest">
                    VIP Member
                  </span>
                  <span className="text-sm font-bold text-gray-800 ">
                    Premium Access Enabled
                  </span>
                </div>
              </div>
              <span className="text-sm font-black text-yellow-800 bg-yellow-200 px-3 py-1.5 rounded-full tracking-widest shrink-0 ml-2">
                ELITE
              </span>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 px-1">
          {/* Services */}
          <div className="bg-emerald-50 border-emerald-200 p-3 sm:p-4 rounded-md shadow-sm border flex items-center gap-3 sm:gap-4 justify-center sm:justify-start sm:px-6">
            <div className="p-2 sm:p-3 bg-emerald-100/50 rounded-full shrink-0">
              <Boxes className="text-emerald-600 size-6 sm:size-8" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-2xl sm:text-3xl font-black text-emerald-600 leading-none">
                {stats?.totalServices || 0}
              </p>
              <p className="text-[10px] sm:text-xs uppercase font-black text-emerald-600/70 tracking-tighter sm:tracking-widest mt-1">
                Services
              </p>
            </div>
          </div>

          {/* Subscriptions */}
          <div className="bg-indigo-50 border-indigo-200 p-3 sm:p-4 rounded-md shadow-sm border flex items-center gap-3 sm:gap-4 justify-center sm:justify-start sm:px-6">
            <div className="p-2 sm:p-3 bg-indigo-100/50 rounded-full shrink-0">
              <Zap className="text-indigo-600 size-6 sm:size-8" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-2xl sm:text-3xl font-black text-indigo-600 leading-none">
                {stats?.activeSubscriptions || 0}
              </p>
              <p className="text-[10px] sm:text-xs uppercase font-black text-indigo-600/70 tracking-tighter sm:tracking-widest mt-1">
                Subscription
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Grid */}
        <div className="bg-white rounded-md shadow-sm border border-gray-100 p-6 sm:p-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
              Quick Actions
            </h3>
            <div className="h-px flex-1 bg-gray-50 ml-4"></div>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 sm:gap-10">
            {Actions.map((action, i) => {
              if (isDashboardDisabled) {
                return (
                  <button
                    key={i}
                    onClick={() => setShowPopup(true)}
                    className="flex flex-col items-center gap-3 group opacity-50 cursor-not-allowed"
                  >
                    <div
                      className={`${action.bg || "bg-gray-50"} ${action.color} size-14 sm:size-20 rounded-2xl sm:rounded-3xl shadow-sm flex items-center justify-center transition-all group-active:scale-95 animate-in zoom-in-90 duration-300`}
                      style={{
                        animationDelay: `${i * 50}ms`,
                        animationFillMode: "both",
                      }}
                    >
                      <action.icon className="size-6 sm:size-8" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-black text-gray-700 uppercase tracking-tighter sm:tracking-normal text-center">
                      {action.label}
                    </span>
                  </button>
                );
              }

              if (action.isSeIpsModal) {
                return (
                  <button
                    key={i}
                    onClick={() => setShowSeIpsModal(true)}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div
                      className={`${action.bg || "bg-gray-50"} ${action.color} size-14 sm:size-20 rounded-2xl sm:rounded-3xl shadow-sm flex items-center justify-center transition-all group-hover:scale-105 group-active:scale-95 animate-in zoom-in-90 duration-300`}
                      style={{
                        animationDelay: `${i * 50}ms`,
                        animationFillMode: "both",
                      }}
                    >
                      <action.icon className="size-6 sm:size-8" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-black text-gray-700 uppercase tracking-tighter sm:tracking-normal text-center">
                      {action.label}
                    </span>
                  </button>
                );
              }

              return (
                <Link
                  key={i}
                  href={action.href || "#"}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div
                    className={`${action.bg || "bg-gray-50"} ${action.color} size-14 sm:size-20 rounded-2xl sm:rounded-3xl shadow-sm flex items-center justify-center transition-all group-hover:scale-105 group-active:scale-95 animate-in zoom-in-90 duration-300`}
                    style={{
                      animationDelay: `${i * 50}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    <action.icon className="size-6 sm:size-8" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-black text-gray-700 uppercase tracking-tighter sm:tracking-normal text-center">
                    {action.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Prayer Times Widget */}
        <PrayerTimes />

        {/* Logout Button */}
        <form action={customerLogout} className="mt-4">
          <button className="w-full py-4 rounded-md bg-gray-200 text-gray-500 font-black uppercase tracking-widest hover:bg-rose-50 hover:text-rose-500 transition-all text-sm flex items-center justify-center gap-3">
            <LogOut size={16} />
            Logout Account
          </button>
        </form>
        <p className="text-center text-gray-400 text-sm">
          SE Electronics Corporate Office
        </p>
      </div>

      {/* Warranty Canceled Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="text-red-600 size-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              ওয়ারেন্টি বাতিল
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 font-semibold">
              {`প্রিয়  গ্রাহক ${customer?.name} (${customer.customerId}) আপনার পন্যের বকেয়া টাকা পরিশোধের জন্য বিভিন্ন সময় কল ও এসএমএস, ভয়েস এস এম এস দিয়েও আপনার সারা পাওয়া যায়নি দীর্ঘ সময় টাকা ও পরিশোধ করেননি তাই সেইলার কোম্পানির কাছে কাস্টমার আই ডি তে অভিযোগ জমা করায় আপনার ওয়ারেন্টি বাতিল  করেছে পুনরায় ওয়ারেন্টি বহাল রাখতে সেইলারের সাথে যোগাযোগ করুন অথবা কোম্পানিতে সরাসরি টাকা পরিশোধ করে ওয়ারেন্টি চালু করুন কাস্টমার কেয়ার ০৯৬৪৯৩৫৫৫৫৫ অথবা ০৯৬৩৯৬৭৩৬০০`}
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-colors"
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      )}

      {/* SE IPS Modal */}
      {showSeIpsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 text-center animate-in zoom-in-95 duration-200 relative">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Select Service
            </h3>
            <p className="text-gray-500 text-sm mb-6 font-medium">
              Choose where you would like to go
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://seipsbd.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                SE IPS
              </a>
              <a
                href="https://semartbd.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                SE MART
              </a>
            </div>

            <button
              onClick={() => setShowSeIpsModal(false)}
              className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl transition-colors text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </CustomerLayout>
  );
}
