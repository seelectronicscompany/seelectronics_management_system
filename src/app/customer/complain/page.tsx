import { verifyCustomerSession } from "@/actions/customerActions";
import { getComplaintsByCustomer } from "@/actions/complaintActions";
import Link from "next/link";
import {
  PlusCircle,
  FileText,
  Home,
  ExternalLink,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { formatDate } from "@/utils";
import { CustomerLayout } from "@/components/layout/CustomerLayout";

export default async function ComplainDashboardPage() {
  const session = await verifyCustomerSession();
  if (!session.isAuth || !session.customer) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            অভিযোগ দাখিল করতে অনুগ্রহ করে লগইন করুন
          </h2>
          <Link
            href="/customer/login"
            className="bg-brand text-white font-bold py-3 px-6 rounded-md hover:bg-brand/90 transition-colors"
          >
            লগইন করুন
          </Link>
        </div>
      </div>
    );
  }

  const res = await getComplaintsByCustomer(session.customer.customerId);
  const complaints = res.success ? res.data || [] : [];
  const lastComplaint = complaints.length > 0 ? complaints[0] : null;

  return (
    <CustomerLayout>
      <div className="space-y-6 pb-20">
        {/* Header Title */}
        <div className="flex items-center justify-between border-b border-gray-200/60 py-4">
          <h1 className="text-xl sm:text-2xl font-black text-brand tracking-tight">
            অভিযোগ ড্যাশবোর্ড
          </h1>
        </div>

        {/* Top Action Buttons (Dashboard Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <Link
            href="/customer/complain/new"
            className="flex items-center justify-center gap-3 bg-emerald-50 hover:bg-emerald-100/80 text-emerald-700 font-black py-4 px-6 rounded-xl border border-emerald-100 transition-all shadow-sm active:scale-[0.98]"
          >
            <PlusCircle size={20} className="text-emerald-600" />
            <span className="text-sm">নতুন অভিযোগ</span>
          </Link>
          <Link
            href="/customer/complain/history"
            className="flex items-center justify-center gap-3 bg-blue-50 hover:bg-blue-100/80 text-blue-700 font-black py-4 px-6 rounded-xl border border-blue-100 transition-all shadow-sm active:scale-[0.98]"
          >
            <FileText size={20} className="text-blue-600" />
            <span className="text-sm">অভিযোগ তালিকা</span>
          </Link>
          <Link
            href="/customer/profile"
            className="flex items-center justify-center gap-3 bg-rose-50 hover:bg-rose-100/80 text-rose-700 font-black py-4 px-6 rounded-xl border border-rose-100 transition-all shadow-sm active:scale-[0.98]"
          >
            <Home size={20} className="text-rose-600" />
            <span className="text-sm">ড্যাশবোর্ড</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Last Complaint Box */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col">
            <h2 className="text-base font-black text-gray-900 border-b border-gray-100 pb-3.5 mb-4">
              সর্বশেষ অভিযোগ
            </h2>

            {lastComplaint ? (
              <div className="flex-1 flex flex-col space-y-5">
                {/* Vertical Status Tracker */}
                <div className="space-y-4 pt-1">
                  <div className="flex flex-col gap-4 max-w-[280px] mx-auto w-full">
                    {/* Step 1 */}
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full border-2 border-emerald-500 bg-emerald-50 flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.1)]">
                        <CheckCircle size={15} className="text-emerald-500" />
                      </div>
                      <div className="flex-1 bg-emerald-50/40 border border-emerald-100/80 rounded-xl px-3 py-1.5">
                        <p className="font-black text-emerald-800 text-[10px] uppercase tracking-wider">
                          অপেক্ষমাণ
                        </p>
                        <p className="text-[9px] text-emerald-600 font-extrabold">
                          {formatDate(lastComplaint.createdAt)}
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`size-8 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          lastComplaint.status !== "under_trial"
                            ? "border-emerald-500 bg-emerald-50 shadow-[0_0_8px_rgba(16,185,129,0.1)]"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        <CheckCircle
                          size={15}
                          className={
                            lastComplaint.status !== "under_trial"
                              ? "text-emerald-500"
                              : "text-gray-300"
                          }
                        />
                      </div>
                      <div
                        className={`flex-1 border rounded-xl px-3 py-1.5 ${
                          lastComplaint.status !== "under_trial"
                            ? "bg-emerald-50/40 border-emerald-100/80"
                            : "bg-gray-55 border-gray-100 opacity-60"
                        }`}
                      >
                        <p
                          className={`font-black text-[10px] uppercase tracking-wider ${
                            lastComplaint.status !== "under_trial"
                              ? "text-emerald-800"
                              : "text-gray-400"
                          }`}
                        >
                          প্রক্রিয়াধীন
                        </p>
                        <p
                          className={`text-[9px] font-extrabold ${
                            lastComplaint.status !== "under_trial"
                              ? "text-emerald-600"
                              : "text-gray-300"
                          }`}
                        >
                          {lastComplaint.status !== "under_trial"
                            ? "পর্যালোচনায়"
                            : "অপেক্ষায়"}
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`size-8 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          lastComplaint.status === "hearing" ||
                          lastComplaint.status === "completed"
                            ? "border-emerald-500 bg-emerald-50 shadow-[0_0_8px_rgba(16,185,129,0.1)]"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        <CheckCircle
                          size={15}
                          className={
                            lastComplaint.status === "hearing" ||
                            lastComplaint.status === "completed"
                              ? "text-emerald-500"
                              : "text-gray-300"
                          }
                        />
                      </div>
                      <div
                        className={`flex-1 border rounded-xl px-3 py-1.5 ${
                          lastComplaint.status === "hearing" ||
                          lastComplaint.status === "completed"
                            ? "bg-emerald-50/40 border-emerald-100/80"
                            : "bg-gray-55 border-gray-100 opacity-60"
                        }`}
                      >
                        <p
                          className={`font-black text-[10px] uppercase tracking-wider ${
                            lastComplaint.status === "hearing" ||
                            lastComplaint.status === "completed"
                              ? "text-emerald-800"
                              : "text-gray-400"
                          }`}
                        >
                          শুনানি
                        </p>
                        <p
                          className={`text-[9px] font-extrabold ${
                            lastComplaint.status === "hearing" ||
                            lastComplaint.status === "completed"
                              ? "text-emerald-600"
                              : "text-gray-300"
                          }`}
                        >
                          {lastComplaint.status === "hearing" ||
                          lastComplaint.status === "completed"
                            ? "कर्मকর্তা তলব"
                            : "পরিকল্পিত"}
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`size-8 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          lastComplaint.status === "completed"
                            ? "border-emerald-500 bg-emerald-50 shadow-[0_0_8px_rgba(16,185,129,0.1)]"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        <CheckCircle
                          size={15}
                          className={
                            lastComplaint.status === "completed"
                              ? "text-emerald-500"
                              : "text-gray-300"
                          }
                        />
                      </div>
                      <div
                        className={`flex-1 border rounded-xl px-3 py-1.5 ${
                          lastComplaint.status === "completed"
                            ? "bg-emerald-600 text-white border-transparent"
                            : "bg-gray-55 border-gray-100 opacity-60"
                        }`}
                      >
                        <p
                          className={`font-black text-[10px] uppercase tracking-wider ${
                            lastComplaint.status === "completed"
                              ? "text-white"
                              : "text-gray-400"
                          }`}
                        >
                          নিষ্পত্তি
                        </p>
                        <p
                          className={`text-[9px] font-extrabold ${
                            lastComplaint.status === "completed"
                              ? "text-white/80"
                              : "text-gray-300"
                          }`}
                        >
                          {lastComplaint.status === "completed"
                            ? "সম্পন্ন"
                            : "চূড়ান্ত ধাপ"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 flex-1 bg-gray-50/50 p-4 rounded-xl border border-gray-100/80">
                  <div className="text-xs">
                    <span className="font-extrabold text-gray-400 uppercase tracking-wider block mb-0.5">
                      ট্র্যাকিং নম্বর:
                    </span>
                    <span className="text-gray-800 font-bold font-mono">
                      {lastComplaint.complaintId}
                    </span>
                  </div>
                  <div className="text-xs">
                    <span className="font-extrabold text-gray-400 uppercase tracking-wider block mb-0.5">
                      অভিযুক্ত কর্মী:
                    </span>
                    <span className="text-gray-800 font-bold">
                      {lastComplaint.staff?.name || "প্রযোজ্য নয়"}
                    </span>
                  </div>
                  <div className="text-xs">
                    <span className="font-extrabold text-gray-400 uppercase tracking-wider block mb-0.5">
                      বিষয়:
                    </span>
                    <span className="text-gray-800 font-bold">
                      {lastComplaint.subject}
                    </span>
                  </div>
                  {lastComplaint.serviceId && (
                    <div className="text-xs">
                      <span className="font-extrabold text-gray-400 uppercase tracking-wider block mb-0.5">
                        সেবা আইডি:
                      </span>
                      <span className="text-gray-800 font-bold font-mono">
                        {lastComplaint.serviceId}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-amber-800 bg-amber-100 border border-amber-200/50 px-2 py-1 rounded-md uppercase tracking-wider">
                      আবেদনের অবস্থা
                    </span>
                    <span className="text-[10px] font-black text-gray-700 bg-gray-100 border border-gray-200 px-2 py-1 rounded-md  tracking-wider capitalize">
                      {lastComplaint.status.replace("_", " ")}
                    </span>
                  </div>
                  <Link
                    href={`/customer/complain/doc/${lastComplaint.complaintId}`}
                    className="bg-brand hover:bg-brand-hover text-white font-extrabold py-2 px-3.5 rounded-lg transition-all text-xs shadow-sm active:scale-95"
                  >
                    বিস্তারিত দেখুন
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-400 font-medium py-12 text-sm">
                কোনো সাম্প্রতিক অভিযোগ পাওয়া যায়নি।
              </div>
            )}
          </div>

          {/* Hearing Notice / Recent Summary Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col">
            <h2 className="text-base font-black text-gray-900 border-b border-gray-100 pb-3.5 mb-4">
              সাম্প্রতিক অভিযোগ নোটিশ
            </h2>

            {complaints.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="py-2.5 px-2 text-xs font-black text-gray-400 uppercase tracking-wider">
                        অভিযুক্ত কর্মী
                      </th>
                      <th className="py-2.5 px-2 text-xs font-black text-gray-400 uppercase tracking-wider">
                        তারিখ
                      </th>
                      <th className="py-2.5 px-2 text-xs font-black text-gray-400 uppercase tracking-wider">
                        অবস্থা
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {complaints.slice(0, 4).map((c: any) => (
                      <tr
                        key={c.complaintId}
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="py-3 px-2 text-xs font-bold text-gray-800">
                          {c.staff?.name}
                        </td>
                        <td className="py-3 px-2 text-xs text-gray-500">
                          {formatDate(c.createdAt)}
                        </td>
                        <td className="py-3 px-2">
                          <span
                            className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase border ${
                              c.status === "completed"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                                : c.status === "hearing"
                                  ? "bg-amber-50 text-amber-700 border-amber-100"
                                  : "bg-blue-50 text-blue-700 border-blue-100"
                            }`}
                          >
                            {c.status.replace("_", " ")}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-400 font-medium py-12 text-sm">
                কোনো নোটিশ পাওয়া যায়নি।
              </div>
            )}
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
}
