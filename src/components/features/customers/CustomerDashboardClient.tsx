import { customerLogout } from "@/actions/customerActions";
import { CustomerLayout } from "@/components/layout";
import Banner from "@/components/ui/Banner";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  Banknote,
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
  Star,
  User,
  Zap,
} from "lucide-react";
import Link from "next/link";
import PrayerTimes from "../shared/PrayerTimes";
import CustomerNotificationBell from "./CustomerNotificationBell";
import Marquee from "react-fast-marquee";
import clsx from "clsx";

interface CustomerDashboardClientProps {
  customer: {
    id: string;
    customerId: string;
    name: string;
    phone: string;
    address: string | null;
    vipStatus?: string | null;
    vipCardNumber?: string | null;
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
  // ✅ Warranty expired logic
  const isWarrantyExpired = stats?.isWarrantyExpired ?? false;

  const Actions = [
    {
      label: "Invoice",
      icon: FileText,
      href: "/customer/invoice",
      color: "text-purple-500",
    },
    {
      label: "Warranty",
      icon: ShieldCheck,
      href: "/check-warranty",
      color: "text-purple-500",
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
    },
    {
      label: "Referral",
      icon: User,
      href: "/customer/referral",
      color: "text-brand",
    },
    {
      label: "Feedback",
      icon: Star,
      href: "/customer/feedback",
      color: "text-pink-500",
    },
    {
      label: "Support",
      icon: PhoneCall,
      href: `/customer/support`,
      color: "text-brand",
    },
    {
      label: "Coverage",
      icon: MapPin,
      href: "/coverage",
      color: "text-cyan-600",
    },
    {
      label: "WhatsApp",
      icon: MessageSquare,
      href: `https://wa.me/8801310673600`,
      color: "text-green-500",
    },
    {
      label: "Complaints",
      icon: FileText,
      href: "/customer/complain",
      color: "text-rose-500",
    },
    {
      label: "Subscription",
      icon: Zap,
      href: "/customer/plans",
      color: "text-indigo-500",
      bg: "bg-indigo-50",
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
  ];

  return (
    <CustomerLayout>
      <div className="flex flex-col gap-3 p-3 sm:p-2 text-gray-800 pb-24">
        {/* Warranty Marquee */}
        <Banner></Banner>
        {/* Warranty Notice Marquee */}
        {isWarrantyExpired && (
          <div className="mt-2 bg-red-50 border border-red-200 rounded-sm overflow-hidden">
            <Marquee speed={45} pauseOnHover={true} gradient={false}>
              {stats?.dueAmount && stats.dueAmount > 0 ? (
                <div className="flex items-center gap-2 text-red-600 font-semibold text-sm px-6 py-2">
                  <AlertTriangle size={18} />
                  প্রিয় গ্রাহক আপনার পন্যের বকেয়া টাকা পরিশোধ না করায় আপনার
                  পন্যটির ওয়ারেন্টি বাতিল করা হয়েছে । পুনারায় ওয়ারেন্টি বহাল
                  রাখতে সেইলার এর সাথে যোগাযোগ করুন ।
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600 font-semibold text-sm px-6 py-2">
                  <ShieldCheck size={18} />
                  প্রিয় গ্রাহক আপনার পন্যের কোম্পানির দেওয়া ওয়ারেন্টি শেষ
                  হয়ে গেছে ।
                </div>
              )}

              {/* repeat for smooth loop */}
              {stats?.dueAmount && stats.dueAmount > 0 ? (
                <div className="flex items-center gap-2 text-red-600 font-semibold text-sm px-6 py-2">
                  <AlertTriangle size={18} />
                  প্রিয় গ্রাহক আপনার পন্যের বকেয়া টাকা পরিশোধ না করায় আপনার
                  পন্যটির ওয়ারেন্টি বাতিল করা হয়েছে । পুনারায় ওয়ারেন্টি বহাল
                  রাখতে সেইলার এর সাথে যোগাযোগ করুন ।
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600 font-semibold text-sm px-6 py-2">
                  <ShieldCheck size={18} />
                  প্রিয় গ্রাহক আপনার পন্যের কোম্পানির দেওয়া ওয়ারেন্টি শেষ
                  হয়ে গেছে ।
                </div>
              )}
            </Marquee>
          </div>
        )}

        {/* Customer Info Card */}
        <div
          className={`relative backdrop-blur-xl rounded-md p-4 sm:p-6 border overflow-hidden transition-all duration-300 ${
            isWarrantyExpired ? "bg-red-50 border-red-300" : "bg-white/90"
          }`}
        >
          {/* Gradient Glow */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-brand/10 to-transparent rounded-full blur-2xl -mr-18 -mt-18" />

          {/* Header */}
          <div className="flex flex-row items-center justify-between gap-4 relative z-10 w-full">
            <div className="flex items-center gap-3 min-w-0 w-full sm:w-auto">
              <div className="p-2 rounded-md bg-brand/5 shrink-0">
                <User className="text-brand" size={16} />
              </div>

              <div className="min-w-0 flex-1">
                <div
                  className={`inline-flex items-center text-[9px] sm:text-xs px-2 py-0.5 rounded-sm font-extrabold uppercase tracking-wider mb-1 shadow-sm border ${
                    isWarrantyExpired
                      ? "bg-red-50 text-red-600 border-red-300"
                      : "bg-emerald-50 text-emerald-600 border-emerald-300"
                  }`}
                >
                  ● {isWarrantyExpired ? "Expired Customer" : "Active Customer"}
                </div>

                <h2 className="text-base sm:text-lg font-extrabold text-gray-900 truncate leading-tight">
                  {customer.name}
                </h2>

                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 mt-0.5">
                  ID:
                  <span className="text-gray-900 tracking-normal font-bold">
                    {customer.customerId}
                  </span>
                </p>
              </div>
            </div>

            {/* Notification & Status Indicators */}
            <div className="flex flex-col items-center sm:items-end justify-between sm:justify-start gap-3 w-3/4 sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100/50">
              <CustomerNotificationBell variant="card" />
              <div
                className={clsx(
                  "px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider",
                  isWarrantyExpired
                    ? "bg-red-50 text-red-600"
                    : "bg-emerald-50 text-emerald-600",
                )}
              >
                {isWarrantyExpired ? "Expired" : "Active"}
              </div>
            </div>
          </div>

          <div className="my-3 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* Info Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold">
            {/* Phone */}
            <div className="flex items-center gap-3 px-3 py-2 rounded-md border border-gray-100 hover:bg-gray-100 transition-all duration-200 min-w-0">
              <div className="p-2 rounded-md bg-brand/5 shrink-0">
                <PhoneCall size={16} className="text-brand" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] uppercase text-gray-400 font-semibold tracking-wider">
                  Phone
                </span>
                <span className="text-gray-700 text-xs sm:text-sm truncate">
                  {customer.phone}
                </span>
              </div>
            </div>

            {/* Due Amount */}
            {!!stats?.dueAmount && stats.dueAmount > 0 && (
              <div className="bg-rose-50 px-3 py-2 rounded-md shadow-sm border border-rose-100 flex items-center gap-3 min-w-0">
                <div className="size-8 rounded-md bg-rose-100 flex items-center justify-center shrink-0">
                  <Banknote
                    className="text-red-600 animate-pulse [animation-duration:1s]"
                    size={16}
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-black text-red-600 truncate">
                    ৳{stats.dueAmount.toLocaleString()}
                  </p>
                  <p className="text-[10px] uppercase font-black text-red-400 tracking-wider">
                    Due
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* VIP */}
          {customer.vipStatus === "approved" && (
            <div className="mt-4 flex items-center justify-between p-3 rounded-md bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-300">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-md bg-yellow-100 shrink-0">
                  <Crown size={16} className="text-yellow-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-yellow-600 uppercase tracking-wider">
                    VIP Member
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold text-gray-800 truncate">
                    Premium Access Enabled
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-black text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded-full tracking-wider shrink-0 ml-2">
                ELITE
              </span>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          {/* Services */}
          <div className="bg-white p-3 rounded-md shadow-sm border flex items-center gap-3 min-w-0">
            <div className="size-9 rounded-md bg-emerald-50 flex items-center justify-center shrink-0">
              <CheckCircle className="text-emerald-500" size={16} />
            </div>
            <div>
              <p className="text-base font-black text-gray-900 leading-tight">
                {stats?.totalServices || 0}
              </p>
              <p className="text-[10px] uppercase font-black text-gray-400">
                Services
              </p>
            </div>
          </div>

          {/* Subscriptions */}
          <div className="bg-white p-3 rounded-md shadow-sm border flex items-center gap-3 min-w-0">
            <div className="size-9 rounded-md bg-indigo-50 flex items-center justify-center shrink-0">
              <Clock className="text-indigo-500" size={16} />
            </div>
            <div>
              <p className="text-base font-black text-gray-900 leading-tight">
                {stats?.activeSubscriptions || 0}
              </p>
              <p className="text-[10px] uppercase font-black text-gray-400">
                Subscription
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Grid */}
        <div className="bg-white rounded-md p-4 sm:p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
              Quick Actions
            </h3>
            <div className="h-px flex-1 bg-gray-50 ml-4"></div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-3">
            {Actions.map((action, i) => (
              <Link
                key={i}
                href={action.href}
                className="flex flex-col items-center gap-2 transition-transform active:scale-95 group"
              >
                <div className="size-11 sm:size-12 rounded-md bg-gray-50 flex items-center justify-center group-hover:bg-brand/5 transition-colors shrink-0">
                  <action.icon
                    className={`${action.color} group-hover:scale-110 transition-transform`}
                    size={20}
                  />
                </div>
                <p className="text-[10px] sm:text-xs font-black text-gray-500 uppercase tracking-tighter text-center line-clamp-1 group-hover:text-gray-900 transition-colors w-full px-0.5">
                  {action.label}
                </p>
              </Link>
            ))}
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
    </CustomerLayout>
  );
}
