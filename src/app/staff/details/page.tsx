import { verifyStaffSession } from "@/actions";
import {
  getStaffById,
  getStaffProfileStats,
  staffLogout,
} from "@/actions/staffActions";
import { MobilePageHeader, StaffLayout } from "@/components/layout";
import { getObjectUrl } from "@/lib/s3";
import { LogOut, User } from "lucide-react";
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
  //   bankInfo
  // :
  // null
  // bio
  // :
  // null
  // canceledServices
  // :
  // 2
  // createdAt
  // :
  // Thu Mar 12 2026 12:53:07 GMT-0700 (Pacific Daylight Time) {}
  // createdFrom
  // :
  // "dashboard"
  // currentDistrict
  // :
  // "Dhaka"
  // currentPoliceStation
  // :
  // null
  // currentPostOffice
  // :
  // null
  // currentStreetAddress
  // :
  // "778 Zulauf Manors"
  // docs
  // :
  // null
  // fatherName
  // :
  // "Wilbur Marks"
  // hasInstallationExperience
  // :
  // false
  // hasRepairExperience
  // :
  // false
  // id
  // :
  // "3b7a79d6-8d7a-4bf1-bb5b-c740b9cee891"
  // installationExperienceYears
  // :
  // 0
  // ipAddress
  // :
  // null
  // isActiveStaff
  // :
  // true
  // isVerified
  // :
  // true
  // name
  // :
  // "Mrs. Blanche DuBuque"
  // nidBackPhotoKey
  // :
  // "demo/nid_back.jpg"
  // nidBackPhotoUrl
  // :
  // "https://service-manager.45739e2ef39226b7c581576fc26bd700.r2.cloudflarestorage.com/demo/nid_back.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=14d657e13ee022a16c895beca8ac3d24%2F20260314%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260314T173120Z&X-Amz-Expires=86400&X-Amz-Signature=f922893a809d27b3beb9651fb843148ab8fa116225d32fab57923a65c61f7a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  // nidFrontPhotoKey
  // :
  // "demo/nid_front.jpg"
  // nidFrontPhotoUrl
  // :
  // "https://service-manager.45739e2ef39226b7c581576fc26bd700.r2.cloudflarestorage.com/demo/nid_front.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=14d657e13ee022a16c895beca8ac3d24%2F20260314%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260314T173120Z&X-Amz-Expires=86400&X-Amz-Signature=df08042eebbf84fa7ff90f2511f3276c6b16fd4a4b35631c3e73a1a038036674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  // password
  // :
  // "$2b$10$N7CHl3OD7RvpzFVg283vnucmEjsTmC/2/QS.F28Mb4uDH3pC5hUAi"
  // paymentPreference
  // :
  // "cash"
  // permanentDistrict
  // :
  // "Dhaka"
  // permanentPoliceStation
  // :
  // null
  // permanentPostOffice
  // :
  // null
  // permanentStreetAddress
  // :
  // "692 Edward Creek"
  // phone
  // :
  // "+8801317806120"
  // photoKey
  // :
  // "demo/photo.jpg"
  // photoUrl
  // :
  // "https://service-manager.45739e2ef39226b7c581576fc26bd700.r2.cloudflarestorage.com/demo/photo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=14d657e13ee022a16c895beca8ac3d24%2F20260314%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260314T173120Z&X-Amz-Expires=86400&X-Amz-Signature=e239640cace62a6b28119f400fe1fd3677d8a6b65c618ba75534b9e5d496b1d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  // profileCompleted
  // :
  // true
  // rating
  // :
  // 0
  // repairExperienceYears
  // :
  // 0
  // role
  // :
  // "technician"
  // skills
  // :
  // null
  // staffId
  // :
  // "STF79225"
  // successfulServices
  // :
  // 0
  // totalServices
  // :
  // 4
  // updatedAt
  // :
  // Sat Mar 14 2026 05:39:49 GMT-0700 (Pacific Daylight Time) {}
  // userAgent
  // :
  // null
  // username
  // :
  // "01310673602"
  // walletNumber
  // :
  // null
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
      <div className="min-h-screen bg-slate-50/50 pb-28">
        <div className="p-4 space-y-4">
          
          {/* Page Title */}
          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <div className="p-2.5 bg-brand/5 rounded-xl text-brand">
              <User size={22} className="stroke-[2.5]" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-slate-800 uppercase tracking-wide">
                Staff Profile
              </h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                View your credentials, experience and stats
              </p>
            </div>
          </div>

          {/* PROFILE CARD */}
          <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col items-center gap-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full -mr-8 -mt-8 blur-xl"></div>
            
            <div className="relative size-24 rounded-full overflow-hidden border-4 border-slate-50 shadow-md">
              <Image
                src={staffData.photoUrl}
                alt={staffData.name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="text-center w-full z-10">
              <h2 className="text-xl font-black text-slate-800">
                {staffData.name}
              </h2>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                Staff ID: {staffData.staffId}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-3">
                <span className="bg-brand/5 border border-brand/10 text-brand text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  {staffData.role}
                </span>

                {staffData.isVerified && (
                  <span className="bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    Verified
                  </span>
                )}

                {staffData.isActiveStaff && (
                  <span className="bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    Active
                  </span>
                )}
              </div>

              <div className="mt-5 w-full pt-4 border-t border-slate-50">
                <a
                  target="_blank"
                  href={`/pdf/download?type=id-card&id=${staffData.staffId}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-sky-50 border border-sky-100 hover:bg-sky-100 text-sky-600 rounded-xl transition-all font-black text-xs uppercase tracking-wider active:scale-95 shadow-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  Download ID Card
                </a>
              </div>
            </div>
          </div>

          {/* PERFORMANCE STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { label: "Total Services", value: staffData.totalServices, color: "text-slate-800 bg-white" },
              { label: "Service Center", value: staffData.serviceCenterServices, color: "text-blue-600 bg-white" },
              { label: "Successful", value: staffData.successfulServices, color: "text-emerald-600 bg-white" },
              { label: "Canceled", value: staffData.canceledServices, color: "text-rose-600 bg-white" },
              { label: "Rating", value: staffData.rating, color: "text-amber-500 bg-white" }
            ].map((stat, idx) => (
              <div key={idx} className={`${stat.color} p-4 rounded-2xl border border-slate-100/80 shadow-sm text-center`}>
                <p className="text-2xl font-black tracking-tight">{stat.value}</p>
                <p className="text-[9px] font-black uppercase text-slate-400 mt-1 tracking-wider leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* INFO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* CONTACT */}
            <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-3">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">
                Contact details
              </h3>
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-500">
                  Phone: <span className="text-slate-800 ml-1 font-extrabold">{staffData.phone}</span>
                </p>
                <p className="text-xs font-bold text-slate-500">
                  Father Name: <span className="text-slate-800 ml-1 font-extrabold">{staffData.fatherName}</span>
                </p>
              </div>
            </div>

            {/* EXPERIENCE */}
            <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-3">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">
                Experience
              </h3>
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-500">
                  Repair: <span className="text-slate-800 ml-1 font-extrabold">{staffData.hasRepairExperience ? `${staffData.repairExperienceYears} Years` : "No"}</span>
                </p>
                <p className="text-xs font-bold text-slate-500">
                  Installation: <span className="text-slate-800 ml-1 font-extrabold">{staffData.hasInstallationExperience ? `${staffData.installationExperienceYears} Years` : "No"}</span>
                </p>
              </div>
            </div>

            {/* ADDRESSES */}
            <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-3">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">
                Current Address
              </h3>
              <p className="text-xs text-slate-600 font-extrabold leading-relaxed">
                {staffData.currentStreetAddress}, {staffData.currentDistrict}
              </p>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-3">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">
                Permanent Address
              </h3>
              <p className="text-xs text-slate-600 font-extrabold leading-relaxed">
                {staffData.permanentStreetAddress}, {staffData.permanentDistrict}
              </p>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-2">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">
              Payment Method Preference
            </h3>
            <p className="text-sm font-extrabold text-slate-700 uppercase tracking-wider">
              {staffData.paymentPreference}
            </p>
          </div>

          {/* NID DOCUMENTS */}
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">
              NID Documents front & back
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-slate-50">
                <Image
                  src={staffData.nidFrontPhotoUrl}
                  alt="NID Front"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-slate-50">
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
          <div className="pt-2">
            <form action={staffLogout}>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 active:scale-95 transition-all text-white text-xs font-black uppercase tracking-wider shadow-sm"
              >
                <LogOut size={16} />
                Logout Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </StaffLayout>
  );
}
