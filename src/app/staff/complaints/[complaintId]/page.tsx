import { verifyStaffSession } from "@/actions";
import { getComplaintById } from "@/actions/complaintActions";
import { getStaffProfileStats } from "@/actions/staffActions";
import { StaffLayout } from "@/components/layout/StaffLayout";
import { formatDate } from "@/utils";
import {
  AlertTriangle,
  ArrowLeft,
  Calendar,
  CheckCircle,
  FileDown,
  MessageSquare,
  ShieldAlert,
  User,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function StaffComplaintDetailsPage({
  params,
}: {
  params: Promise<{ complaintId: string }>;
}) {
  const session = await verifyStaffSession();
  if (!session.isAuth) return null;

  const { complaintId } = await params;
  const [res, statsRes] = await Promise.all([
    getComplaintById(complaintId),
    getStaffProfileStats(session.userId as string),
  ]);

  if (!res.success || !res.data) notFound();

  const complaint = res.data;
  const stats = statsRes.success ? statsRes.data : null;

  // Security check: only the accused staff can see their complaint
  if (complaint.staffId !== session.userId) {
    notFound();
  }

  const isProcessing =
    complaint.status === "processing" ||
    complaint.status === "hearing" ||
    complaint.status === "completed";
  const isHearing =
    complaint.status === "hearing" || complaint.status === "completed";
  const isCompleted = complaint.status === "completed";

  return (
    <StaffLayout balance={stats?.availableBalance || 0}>
      <div className="p-2 sm:p-2 space-y-2">
        {/* Header */}
        <div className="flex items-center gap-2">
          <Link
            href="/staff/profile"
            className="p-3 bg-white rounded-md shadow-sm border border-gray-100 text-gray-400 hover:text-brand transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
          <div className="flex-1">
            <h1 className="text-xl font-black text-gray-900 flex items-center gap-2">
              <ShieldAlert className="text-red-500" size={24} />
              অভিযোগের বিস্তারিত
            </h1>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              ট্র্যাকিং আইডি: {complaint.complaintId}
            </p>
          </div>
        </div>

        {/* Complaint Warning Card */}
        <div className="bg-red-50 border-2 border-red-100 rounded-md p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <AlertTriangle size={80} className="text-red-600" />
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <User className="text-red-500" size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-black text-red-700 mb-1">
                গ্রাহকের দাখিলকৃত অভিযোগ
              </h3>
              <p className="text-sm font-bold text-red-600/80 mb-4">
                {complaint.customer?.name} এই অভিযোগটি দাখিল করেছেন।
              </p>
              <div className="bg-white/60 p-4 rounded-md border border-red-200">
                <p className="text-sm font-black text-red-800 uppercase tracking-widest mb-2">
                  বিষয়: {complaint.subject}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  "{complaint.description}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Tracker - Vertical English UI */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h3 className="text-center font-black text-gray-900 uppercase tracking-[0.2em] text-sm mb-10">
            অভিযোগের ধাপসমূহ
          </h3>

          <div className="max-w-md mx-auto relative px-4">
            {/* Vertical Line Connecting Dots */}
            <div className="absolute left-[39px] top-4 bottom-4 w-0.5 bg-emerald-100 hidden sm:block"></div>

            <div className="space-y-10">
              {/* Step 1: Pending */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 relative group">
                <div
                  className={`z-10 size-10 rounded-full border-2 flex items-center justify-center shrink-0 transition-all bg-white ${isProcessing || complaint.status === "under_trial" ? "border-emerald-500 bg-emerald-50 text-emerald-600" : "border-gray-200"}`}
                >
                  <CheckCircle size={20} />
                </div>

                <div className="flex-1 flex items-center gap-4 w-full">
                  <div className="h-0.5 w-8 bg-emerald-100 hidden sm:block"></div>
                  <div className="flex-1 bg-emerald-50/30 border border-emerald-100 rounded-md p-4 transition-colors">
                    <h4 className="font-bold text-emerald-800 text-[13px] uppercase tracking-widest leading-none">
                      অপেক্ষমাণ
                    </h4>
                    <div className="mt-2 flex items-center gap-2">
                      <Calendar size={12} className="text-emerald-400" />
                      <span className="text-sm font-black text-emerald-700">
                        {formatDate(complaint.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Processing */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 relative group">
                <div
                  className={`z-10 size-10 rounded-full border-2 flex items-center justify-center shrink-0 transition-all bg-white ${isProcessing ? "border-emerald-500 bg-emerald-50 text-emerald-600" : "border-gray-200 text-gray-300"}`}
                >
                  <CheckCircle size={20} />
                </div>

                <div className="flex-1 flex items-center gap-4 w-full">
                  <div
                    className={`h-0.5 w-8 hidden sm:block ${isProcessing ? "bg-emerald-100" : "bg-gray-100"}`}
                  ></div>
                  <div
                    className={`flex-1 border rounded-md p-4 transition-all ${isProcessing ? "bg-emerald-50/30 border-emerald-100" : "bg-gray-50 border-gray-100 opacity-60"}`}
                  >
                    <h4
                      className={`font-bold text-[13px] uppercase tracking-widest leading-none ${isProcessing ? "text-emerald-800" : "text-gray-400"}`}
                    >
                      প্রক্রিয়াধীন
                    </h4>
                    <div className="mt-2 flex items-center gap-2">
                      <Calendar
                        size={12}
                        className={
                          isProcessing ? "text-emerald-400" : "text-gray-200"
                        }
                      />
                      <span
                        className={`text-sm font-black ${isProcessing ? "text-emerald-700" : "text-gray-300"}`}
                      >
                        {isProcessing
                          ? "তদন্তাধীন"
                          : "নির্ধারিত পদক্ষেপের অপেক্ষায়"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Hearing */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 relative group">
                <div
                  className={`z-10 size-10 rounded-full border-2 flex items-center justify-center shrink-0 transition-all bg-white ${isHearing ? "border-emerald-500 bg-emerald-50 text-emerald-600" : "border-gray-200 text-gray-300"}`}
                >
                  <CheckCircle size={20} />
                </div>

                <div className="flex-1 flex items-center gap-4 w-full">
                  <div
                    className={`h-0.5 w-8 hidden sm:block ${isHearing ? "bg-emerald-100" : "bg-gray-100"}`}
                  ></div>
                  <div
                    className={`flex-1 border rounded-md p-4 transition-all ${isHearing ? "bg-emerald-50/30 border-emerald-100" : "bg-gray-50 border-gray-100 opacity-60"}`}
                  >
                    <h4
                      className={`font-bold text-[13px] uppercase tracking-widest leading-none ${isHearing ? "text-emerald-800" : "text-gray-400"}`}
                    >
                      শুনানি
                    </h4>
                    <div className="mt-2 flex items-center gap-2">
                      <Calendar
                        size={12}
                        className={
                          isHearing ? "text-emerald-400" : "text-gray-200"
                        }
                      />
                      <span
                        className={`text-sm font-black ${isHearing ? "text-emerald-700" : "text-gray-300"}`}
                      >
                        {isHearing ? "সমন জারি হয়েছে" : "অপেক্ষমাণ"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Completed */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 relative group">
                <div
                  className={`z-10 size-10 rounded-full border-2 flex items-center justify-center shrink-0 transition-all bg-white ${isCompleted ? "border-emerald-500 bg-emerald-50 text-emerald-600" : "border-gray-200 text-gray-300"}`}
                >
                  <CheckCircle size={20} />
                </div>

                <div className="flex-1 flex items-center gap-4 w-full">
                  <div
                    className={`h-0.5 w-8 hidden sm:block ${isCompleted ? "bg-emerald-100" : "bg-gray-100"}`}
                  ></div>
                  <div
                    className={`flex-1 border rounded-md p-4 transition-all ${isCompleted ? "bg-emerald-600 text-white shadow-xl shadow-emerald-100" : "bg-gray-50 border-gray-100 opacity-60 font-black"}`}
                  >
                    <h4
                      className={`font-bold text-[13px] uppercase tracking-widest leading-none ${isCompleted ? "text-white" : "text-gray-400"}`}
                    >
                      নিষ্পত্তি
                    </h4>
                    <div className="mt-2 flex items-center gap-2">
                      <Calendar
                        size={12}
                        className={
                          isCompleted ? "text-emerald-100" : "text-gray-200"
                        }
                      />
                      <span
                        className={`text-sm font-black ${isCompleted ? "text-white" : "text-gray-300"}`}
                      >
                        {isCompleted ? "সমাধান হয়েছে" : "চূড়ান্তকরণ"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Resolution / Notes */}
        {complaint.adminNote && (
          <div className="bg-amber-50 border-2 border-amber-100 rounded-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare size={18} className="text-amber-600" />
              <h4 className="text-sm font-black text-amber-800 uppercase tracking-widest">
                অ্যাডমিন রেজোলিউশনের বিস্তারিত
              </h4>
            </div>
            <div className="bg-white p-4 rounded-md border border-amber-100">
              <p className="text-sm text-gray-700 leading-relaxed font-bold italic">
                "{complaint.adminNote}"
              </p>
            </div>
            <p className="mt-4 text-[10px] font-bold text-amber-600/60 uppercase text-center tracking-widest">
              Updated on {formatDate(complaint.updatedAt)}
            </p>
          </div>
        )}

        {/* Punishment Document Download - Only for completed complaints */}
        {isCompleted && (
          <div className="bg-blue-50 border-2 border-blue-100 rounded-md p-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-md shadow-sm">
                <FileDown className="text-blue-600" size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-black text-blue-800 uppercase tracking-widest">
                  {complaint.punishmentType === "not_guilty"
                    ? "নিষ্পত্তি ও দায়মুক্তি পত্র"
                    : "শাস্তিমূলক আদেশনামা"}
                </h4>
                <p className="text-xs text-blue-600/80 mt-1">
                  {complaint.punishmentType === "not_guilty"
                    ? "আপনার দায়মুক্তি পত্রটি ডাউনলোড করুন"
                    : "আপনার বিরুদ্ধে গৃহীত শাস্তিমূলক ব্যবস্থার আদেশনামা ডাউনলোড করুন"}
                </p>
              </div>
              <Link
                href={`/pdf/download?type=${complaint.punishmentType === "not_guilty" ? "staff-not-guilty" : "complaint"}&id=${complaint.complaintId}`}
                target="_blank"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <FileDown size={16} />
                ডাউনলোড
              </Link>
            </div>
          </div>
        )}

        <div className="bg-gray-900 rounded-md p-4 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShieldAlert size={60} />
          </div>
          <h4 className="font-black text-lg mb-2">অভ্যন্তরীণ নীতি</h4>
          <p className="text-sm text-gray-400 font-medium leading-relaxed">
            আমাদের স্টাফ গাইডলাইন অনুসারে, যেকোনো অভিযোগ ৪৮ ঘণ্টার মধ্যে
            পর্যালোচনা করা আবশ্যক। অনুগ্রহ করে ম্যানেজমেন্টের সাথে সমন্বয় করুন
            যদি শুনানির তারিখ নির্ধারিত হয়।
          </p>
        </div>
      </div>
    </StaffLayout>
  );
}
