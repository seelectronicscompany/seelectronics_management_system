import { verifyStaffSession } from "@/actions";
import {
  getStaffById,
  getStaffProfileStats,
  staffLogout,
} from "@/actions/staffActions";
import { MobilePageHeader, StaffLayout } from "@/components/layout";
import { getObjectUrl } from "@/lib/s3";
import {
  LogOut,
  User,
  Phone,
  MapPin,
  Briefcase,
  CreditCard,
  ShieldCheck,
  Users,
  Wrench,
  Hammer,
  Home,
} from "lucide-react";
import Image from "next/image";

export default async function StaffDetailsPage() {
  const session = await verifyStaffSession();
  if (!session.isAuth) return null;

  const userId = session.userId as string;
  const [profileRes, statsRes] = await Promise.all([
    getStaffById(userId),
    getStaffProfileStats(userId),
  ]);

  const staffData = profileRes.success ? profileRes.data : null;
  const stats = statsRes.success ? statsRes.data : null;
  if (!staffData) {
    return (
      <div className="p-6 text-center">
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md font-bold">
          Staff profile not found. Contact administrator.
        </div>
      </div>
    );
  }

  // Pre-fetch S3 URLs if not available
  const nidFrontUrl = staffData.nidFrontPhotoKey
    ? staffData.nidFrontPhotoUrl ||
      (await getObjectUrl(staffData.nidFrontPhotoKey))
    : null;
  const nidBackUrl = staffData.nidBackPhotoKey
    ? staffData.nidBackPhotoUrl ||
      (await getObjectUrl(staffData.nidBackPhotoKey))
    : null;

  return (
    <StaffLayout balance={stats?.availableBalance || 0}>
      {/* <MobilePageHeader
        title="Staff Profile"
        backHref="/staff/profile"
        Icon={User}
      /> */}

      <div className="min-h-screen bg-gray-100 ">
        {/* HEADER (Desktop Only) */}
        <div className="hidden md:block bg-brand text-white px-3 sm:px-3 py-5 sm:py-3 mt-5 rounded-t-md shadow-sm mx-2">
          <div className="max-w-6xl mx-auto flex  justify-between items-center gap-2  ">
            {/* Title */}
            <h1 className="text-lg sm:text-xl font-bold tracking-wide">
              Staff Profile
            </h1>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-3 mt-2 pb-5 space-y-2 ">
          {/* PROFILE CARD */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4 relative pb-6 flex flex-col items-center">
            {/* Rounded Curved Background Banner */}
            <div className="w-full h-28 sm:h-32 bg-[#eef2f6] rounded-b-[40%] absolute top-0 left-0 z-0"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 mt-8 sm:mt-12 flex flex-col items-center text-center px-4 w-full">
              {/* Avatar with Gold Metallic Ring */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px] bg-gradient-to-tr from-[#c5a059] via-[#fdf0cd] to-[#d4af37] shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-white">
                  <Image
                    src={staffData.photoUrl}
                    alt={staffData.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Name & ID */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] mt-4">
                {staffData.name}
              </h2>

              <p className="text-base sm:text-lg font-medium text-gray-700 mt-1">
                Staff ID: {staffData.staffId}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                <span className="bg-[#7f8c8d] text-white text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-lg uppercase tracking-wider">
                  {staffData.role}
                </span>

                {staffData.isVerified && (
                  <span className="bg-[#27ae60] text-white text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-lg uppercase tracking-wider">
                    Verified
                  </span>
                )}

                {staffData.isActiveStaff && (
                  <span className="bg-[#2980b9] text-white text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-lg uppercase tracking-wider">
                    Active
                  </span>
                )}
              </div>

              {/* Download ID Button */}
              <a
                target="_blank"
                href={`/pdf/download?type=id-card&id=${staffData.staffId}`}
                className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-white text-[#0a192f] rounded-lg hover:bg-gray-50 transition-all border border-gray-300 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-sm"
              >
                <svg
                  className="size-5 text-[#0a192f]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M6 14v-1a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
                  <circle cx="8" cy="8" r="1.5" />
                  <line x1="14" x2="18" y1="9" y2="9" />
                  <line x1="14" x2="18" y1="13" y2="13" />
                </svg>
                Download ID
              </a>
            </div>
          </div>

          {/* PERFORMANCE STATS */}
          <div className="grid grid-cols-3 gap-3">
            {/* Total Services */}
            <div className="bg-[#f4fbf5] border border-[#2fb344] p-3 sm:p-4 rounded-xl flex flex-col justify-between shadow-sm">
              <div className="flex justify-between items-center mb-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#2fb344]">
                  {staffData.totalServices}
                </span>
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-[#2fb344]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.7 4.7C.6 7.1 1 10.1 3 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.4-.4.4-1.1 0-1.4zM9.2 11.3L2.5 18c-.4.4-.4 1 0 1.4l2.1 2.1c.4.4 1 .4 1.4 0l6.7-6.7-3.5-3.5z" />
                </svg>
              </div>
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-gray-900 uppercase">
                Total Services
              </span>
            </div>

            {/* Successful */}
            <div className="bg-[#f8f5fd] border border-[#8e44ad] p-3 sm:p-4 rounded-xl flex flex-col justify-between shadow-sm">
              <div className="flex justify-between items-center mb-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#8e44ad]">
                  {staffData.successfulServices}
                </span>
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-[#8e44ad]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2 21h4V9H2v12zM20 8h-7l1.12-5.37a1.015 1.015 0 0 0-.25-.83c-.19-.2-.47-.3-.77-.3L12.3 2 6.6 7.7C6.22 8.07 6 8.58 6 9v10c0 1.1.9 2 2 2h9c.75 0 1.41-.41 1.75-1.03l3.12-7.29c.08-.2.13-.42.13-.68V10c0-1.1-.9-2-2-2z" />
                </svg>
              </div>
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-gray-900 uppercase">
                Successful
              </span>
            </div>

            {/* Canceled */}
            <div className="bg-[#fdf3f3] border border-[#dc3545] p-3 sm:p-4 rounded-xl flex flex-col justify-between shadow-sm">
              <div className="flex justify-between items-center mb-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#dc3545]">
                  {staffData.canceledServices}
                </span>
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-[#dc3545]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
              </div>
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-gray-900 uppercase">
                Canceled
              </span>
            </div>

            {/* Pending */}
            <div className="bg-[#f0f7ff] border border-[#007bff] p-3 sm:p-4 rounded-xl flex flex-col justify-between shadow-sm">
              <div className="flex justify-between items-center mb-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#007bff]">
                  {staffData.pendingServices}
                </span>
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-[#007bff]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 12" />
                </svg>
              </div>
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-gray-900 uppercase">
                Pending
              </span>
            </div>

            {/* Service Center Services */}
            <div className="bg-[#f0fcfc] border border-[#00a8a8] p-3 sm:p-4 rounded-xl flex flex-col justify-between shadow-sm">
              <div className="flex justify-between items-center mb-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#00a8a8]">
                  {staffData.serviceCenterServices || 0}
                </span>
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-[#00a8a8]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="text-[10px]  font-bold tracking-wider text-gray-900 uppercase">
                Center Services
              </span>
            </div>

            {/* Rating */}
            <div className="bg-[#fffaf0] border border-[#fd7e14] p-3 sm:p-4 rounded-xl flex flex-col justify-between shadow-sm">
              <div className="flex justify-between items-center mb-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#fd7e14]">
                  {staffData.rating}
                </span>
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-[#fd7e14]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-gray-900 uppercase">
                Rating
              </span>
            </div>
          </div>

          {/* INFO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* CONTACT */}
            <div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm space-y-4">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">
                Contact details
              </h3>
              <div className="space-y-4">
                {/* Name */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 shrink-0 shadow-sm border border-slate-200/50">
                    <User size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-slate-500">
                      Name:
                    </span>
                    <span className="text-sm font-extrabold text-[#0a192f] mt-0.5">
                      {staffData.name}
                    </span>
                  </div>
                </div>

                {/* Father Name */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 shrink-0 shadow-sm border border-slate-200/50">
                    <Users size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-slate-500">
                      Father's Name:
                    </span>
                    <span className="text-sm font-extrabold text-[#0a192f] mt-0.5">
                      {staffData.fatherName}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 shrink-0 shadow-sm border border-slate-200/50">
                    <Phone size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-slate-500">
                      Phone:
                    </span>
                    <span className="text-sm font-extrabold text-[#0a192f] mt-0.5">
                      {staffData.phone}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* EXPERIENCE */}
            <div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm space-y-4">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">
                Experience
              </h3>
              <div className="space-y-4">
                {/* Repair */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 shrink-0 shadow-sm border border-slate-200/50">
                    <Wrench size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-slate-500">
                      Repair:
                    </span>
                    <span className="text-sm font-extrabold text-[#0a192f] mt-0.5">
                      {staffData.hasRepairExperience
                        ? `${staffData.repairExperienceYears} Years`
                        : "No"}
                    </span>
                  </div>
                </div>

                {/* Installation */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 shrink-0 shadow-sm border border-slate-200/50">
                    <Hammer size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-slate-500">
                      Installation:
                    </span>
                    <span className="text-sm font-extrabold text-[#0a192f] mt-0.5">
                      {staffData.hasInstallationExperience
                        ? `${staffData.installationExperienceYears} Years`
                        : "No"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ADDRESSES */}
            <div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 shrink-0 shadow-sm border border-slate-200/50 mt-1">
                <MapPin size={18} />
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">
                  Current Address
                </h3>
                <p className="text-xs text-slate-600 font-extrabold leading-relaxed">
                  {staffData.currentStreetAddress}, {staffData.currentDistrict}
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 shrink-0 shadow-sm border border-slate-200/50 mt-1">
                <Home size={18} />
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">
                  Permanent Address
                </h3>
                <p className="text-xs text-slate-600 font-extrabold leading-relaxed">
                  {staffData.permanentStreetAddress},{" "}
                  {staffData.permanentDistrict}
                </p>
              </div>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm flex items-center justify-between">
            <div className="space-y-1.5">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">
                Payment Method Preference
              </h3>
              <p className="text-sm font-extrabold text-slate-700 uppercase tracking-wider">
                {staffData.paymentPreference}
              </p>
              {["bkash", "nagad", "rocket"].includes(
                staffData.paymentPreference,
              ) &&
                staffData.walletNumber && (
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    {staffData.walletNumber}
                  </p>
                )}
              {staffData.paymentPreference === "bank" && staffData.bankInfo && (
                <div className="text-xs font-semibold text-slate-500 mt-1 space-y-0.5">
                  <p className="font-bold">{staffData.bankInfo.bankName}</p>
                  <p className="font-mono">
                    {staffData.bankInfo.accountNumber}
                  </p>
                </div>
              )}
            </div>

            {/* Icon */}
            <div className="shrink-0 ml-4">
              {staffData.paymentPreference === "bkash" && (
                <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center border border-slate-100">
                  <svg
                    className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    height="800"
                    width="1200"
                    viewBox="-18.0015 -28.3525 156.013 170.115"
                  >
                    <g fill="none">
                      <path
                        fill="#D12053"
                        d="M96.58 62.45l-53.03-8.31 7.03 31.6z"
                      />
                      <path
                        fill="#E2136E"
                        d="M96.58 62.45L56.62 6.93 43.56 54.15z"
                      />
                      <path fill="#D12053" d="M42.32 53.51L.45 0l54.83 6.55z" />
                      <path fill="#9E1638" d="M23.25 31.15L0 9.24h6.12z" />
                      <path
                        fill="#D12053"
                        d="M107.89 35.46l-9.84 26.69L82.1 40.09z"
                      />
                      <path
                        fill="#E2136E"
                        d="M56.77 84.14l38.61-15.51L97 63.7z"
                      />
                      <path
                        fill="#9E1638"
                        d="M25.89 113.41l16.54-58.02 8.39 37.75z"
                      />
                      <path
                        fill="#E2136E"
                        d="M109.43 35.67l-4.06 11.02 14.64-.24z"
                      />
                    </g>
                  </svg>
                </div>
              )}
              {staffData.paymentPreference === "nagad" && (
                <div className="w-12 h-12 rounded-lg bg-[#F15A22] flex items-center justify-center shadow-sm text-white font-extrabold text-xl select-none">
                  ন
                </div>
              )}
              {staffData.paymentPreference === "rocket" && (
                <div className="w-12 h-12 rounded-lg bg-[#8C3494] flex items-center justify-center shadow-sm text-white font-extrabold text-lg select-none">
                  🚀
                </div>
              )}
              {staffData.paymentPreference === "bank" && (
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
              )}
              {staffData.paymentPreference === "cash" && (
                <div className="w-12 h-12 rounded-lg bg-emerald-600 flex items-center justify-center shadow-sm text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="6" width="20" height="12" rx="2" />
                    <circle cx="12" cy="12" r="3" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12h.01M18 12h.01"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* NID DOCUMENTS */}
          <div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm space-y-4">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">
              NID Documents front & back
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg overflow-hidden border border-slate-100 shadow-sm bg-slate-50">
                <Image
                  src={staffData.nidFrontPhotoUrl}
                  alt="NID Front"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="rounded-lg overflow-hidden border border-slate-100 shadow-sm bg-slate-50">
                <Image
                  src={staffData.nidBackPhotoUrl}
                  alt="NID Back"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Logout */}
          <div className="mt-4">
            <form action={staffLogout}>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 active:scale-95 transition-all text-white text-sm font-bold shadow-sm"
              >
                <LogOut size={18} />
                Logout
              </button>
            </form>
          </div>
        </div>
      </div>
    </StaffLayout>
  );
}
