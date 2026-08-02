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
      <div className="flex flex-col gap-5 text-gray-800 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Warranty Marquee */}
        <Banner />

        {/* Warranty Notice Marquee */}
        {isWarrantyExpired && (
          <div className="bg-red-50/80 backdrop-blur-sm border border-red-200/60 rounded-xl overflow-hidden shadow-sm">
            <Marquee speed={40} pauseOnHover={true} gradient={false}>
              {stats?.dueAmount && stats.dueAmount > 0 ? (
                <div className="flex items-center gap-2 text-red-600 font-bold text-xs sm:text-sm px-6 py-2.5">
                  <AlertTriangle size={16} className="shrink-0" />
                  প্রিয় গ্রাহক আপনার পন্যের বকেয়া টাকা পরিশোধ না করায় আপনার পন্যটির ওয়ারেন্টি বাতিল করা হয়েছে । পুনারায় ওয়ারেন্টি বহাল রাখতে আমাদের সাথে যোগাযোগ করুন ।
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600 font-bold text-xs sm:text-sm px-6 py-2.5">
                  <ShieldCheck size={16} className="shrink-0" />
                  প্রিয় গ্রাহক আপনার পন্যের কোম্পানির দেওয়া ওয়ারেন্টি শেষ হয়ে গেছে ।
                </div>
              )}
            </Marquee>
          </div>
        )}

        {/* Customer Info Card */}
        <div
          className={clsx(
            "relative backdrop-blur-md rounded-2xl p-5 sm:p-6 border overflow-hidden transition-all duration-300 shadow-sm",
            isWarrantyExpired
              ? "bg-red-50/70 border-red-200"
              : "bg-white/80 border-gray-100/80"
          )}
        >
          {/* Ambient Background Glow */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-brand/20 to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10 w-full">
            <div className="flex items-center gap-3.5 min-w-0 w-full sm:w-auto">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand/10 to-brand/5 flex items-center justify-center shrink-0 border border-brand/10">
                <User className="text-brand" size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={clsx(
                      "inline-flex items-center text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border shadow-sm",
                      isWarrantyExpired
                        ? "bg-red-100/80 text-red-700 border-red-200"
                        : "bg-emerald-100/80 text-emerald-700 border-emerald-200"
                    )}
                  >
                    ● {isWarrantyExpired ? "Expired" : "Active"}
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-black text-gray-900 truncate leading-tight tracking-tight">
                  {customer.name}
                </h2>

                <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest flex items-center gap-1.5 mt-0.5">
                  ID:
                  <span className="text-gray-950 font-bold tracking-normal font-mono text-xs">
                    {customer.customerId}
                  </span>
                </p>
              </div>
            </div>

            {/* Right Status */}
            <div className="flex items-center sm:items-end justify-between sm:justify-center gap-2 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider sm:hidden">Notifications</span>
              <CustomerNotificationBell variant="card" />
            </div>
          </div>

          <div className="my-4 h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent" />

          {/* Info Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {/* Phone */}
            <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl border border-gray-100 hover:bg-gray-50/50 transition-all duration-200 min-w-0 bg-white/50">
              <div className="p-2 rounded-lg bg-brand/5 shrink-0">
                <PhoneCall size={15} className="text-brand" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[9px] uppercase text-gray-400 font-extrabold tracking-widest">
                  Phone
                </span>
                <span className="text-gray-800 text-xs sm:text-sm font-bold truncate">
                  {customer.phone}
                </span>
              </div>
            </div>

            {/* Due Amount */}
            {!!stats?.dueAmount && stats.dueAmount > 0 && (
              <div className="bg-rose-50/60 border border-rose-100/80 px-3.5 py-2.5 rounded-xl flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-lg bg-rose-100/80 flex items-center justify-center shrink-0">
                  <Banknote className="text-rose-600 animate-pulse" size={15} />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] uppercase text-rose-400 font-extrabold tracking-widest block">
                    Due Amount
                  </span>
                  <span className="text-sm sm:text-base font-black text-rose-600 truncate">
                    ৳{stats.dueAmount.toLocaleString()}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* VIP Status */}
          {customer.vipStatus === "approved" && (
            <div className="mt-4 flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-yellow-500/10 via-amber-500/5 to-transparent border border-yellow-500/20 shadow-sm">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-lg bg-gradient-to-tr from-yellow-500 to-amber-500 text-white shrink-0 shadow-sm">
                  <Crown size={15} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest">
                    VIP Member
                  </p>
                  <p className="text-xs sm:text-sm font-black text-gray-900 truncate">
                    Premium Access Enabled
                  </p>
                </div>
              </div>
              <span className="text-[9px] font-black text-yellow-800 bg-yellow-100 px-2 py-0.5 rounded-full tracking-widest shrink-0 ml-2">
                ELITE
              </span>
            </div>
          )}
        </div>

        {/* Stats Blocks */}
        <div className="grid grid-cols-2 gap-4">
          {/* Services Card */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-gray-100/80 flex items-center gap-3.5 min-w-0 hover:shadow-md transition-shadow">
            <div className="size-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100/50">
              <CheckCircle className="text-emerald-500" size={18} />
            </div>
            <div>
              <p className="text-lg font-black text-gray-900 leading-none mb-1">
                {stats?.totalServices || 0}
              </p>
              <p className="text-[9px] uppercase font-black text-gray-400 tracking-wider">
                Services
              </p>
            </div>
          </div>

          {/* Subscriptions Card */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-gray-100/80 flex items-center gap-3.5 min-w-0 hover:shadow-md transition-shadow">
            <div className="size-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100/50">
              <Clock className="text-indigo-500" size={18} />
            </div>
            <div>
              <p className="text-lg font-black text-gray-900 leading-none mb-1">
                {stats?.activeSubscriptions || 0}
              </p>
              <p className="text-[9px] uppercase font-black text-gray-400 tracking-wider">
                Subscriptions
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions Panel */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-gray-100/80">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Quick Actions
            </h3>
            <div className="h-px flex-1 bg-gray-100 ml-4"></div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-5 gap-x-3">
            {Actions.map((action, i) => (
              <Link
                key={i}
                href={action.href}
                className="flex flex-col items-center gap-1.5 transition-all duration-200 active:scale-95 group"
              >
                <div className="size-12 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-brand/5 border border-gray-100/60 shadow-sm group-hover:shadow transition-all shrink-0">
                  <action.icon
                    className={`${action.color} group-hover:scale-110 transition-transform duration-200`}
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
        <form action={customerLogout} className="mt-2">
          <button className="w-full py-3.5 rounded-xl bg-gray-200/80 text-gray-500 hover:bg-rose-50 hover:text-rose-600 transition-all font-black uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 border border-transparent hover:border-rose-100">
            <LogOut size={16} />
            Logout Account
          </button>
        </form>
        <p className="text-center text-gray-400 text-xs font-extrabold uppercase tracking-widest mt-1">
          SE Electronics Corporate Office
        </p>
      </div>
    </CustomerLayout>
  );
}
