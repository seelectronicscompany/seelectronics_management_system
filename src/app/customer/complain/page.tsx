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
    <div className="min-h-screen bg-gray-50 py-8 px-2">
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Header Title */}
        <h1 className="text-2xl sm:text-3xl font-black text-brand border-b-2 border-brand/20 pb-4 mb-6">
          অভিযোগ ড্যাশবোর্ড
        </h1>

        {/* Top Action Buttons (Dashboard Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/customer/complain/new"
            className="flex items-center justify-center gap-2 bg-emerald-100/50 hover:bg-emerald-100 text-emerald-700 font-bold py-5 px-6 rounded-md border border-emerald-200 transition-all shadow-sm"
          >
            <PlusCircle size={24} className="text-emerald-600" />
            <span className="text-lg">নতুন অভিযোগ</span>
          </Link>
          <Link
            href="/customer/complain/history"
            className="flex items-center justify-center gap-2 bg-blue-100/50 hover:bg-blue-100 text-blue-700 font-bold py-5 px-6 rounded-md border border-blue-200 transition-all shadow-sm"
          >
            <FileText size={24} className="text-blue-600" />
            <span className="text-lg">অভিযোগ তালিকা</span>
          </Link>
          <Link
            href="/customer/profile"
            className="flex items-center justify-center gap-2 bg-rose-100/50 hover:bg-rose-100 text-rose-700 font-bold py-5 px-6 rounded-md border border-rose-200 transition-all shadow-sm"
          >
            <Home size={24} className="text-rose-600" />
            <span className="text-lg">ড্যাশবোর্ড</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
          {/* Last Complaint Box */}
          <div className="bg-white rounded-md shadow-sm border border-gray-100 p-6 flex flex-col">
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-6">
          সর্বশেষ অভিযোগ
            </h2>

            {lastComplaint ? (
              <div className="flex-1 flex flex-col space-y-6">
                {/* Vertical Status Tracker */}
                <div className="space-y-6 pt-2">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center border-b border-gray-50 pb-4 mb-6">
                    অগ্রগতির ধাপ
                  </h4>

                  <div className="flex flex-col gap-6 max-w-[240px] mx-auto">
                    {/* Step 1 */}
                    <div className="flex items-center gap-4 group">
                      <div className="size-8 rounded-full border-2 border-emerald-500 bg-emerald-50 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                        <CheckCircle size={16} className="text-emerald-500" />
                      </div>
                      <div className="flex-1 bg-emerald-50/50 border border-emerald-100 rounded-md px-3 py-2">
                        <p className="font-bold text-emerald-800 text-[11px] uppercase tracking-tight">
                        অপেক্ষমাণ
                        </p>
                        <p className="text-[9px] text-emerald-600 font-bold">
                          {formatDate(lastComplaint.createdAt)}
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-center gap-4 group">
                      <div
                        className={`size-8 rounded-full border-2 flex items-center justify-center shrink-0 ${lastComplaint.status !== "under_trial" ? "border-emerald-500 bg-emerald-50 shadow-[0_0_10px_rgba(16,185,129,0.15)]" : "border-gray-200 bg-white"}`}
                      >
                        <CheckCircle
                          size={16}
                          className={
                            lastComplaint.status !== "under_trial"
                              ? "text-emerald-500"
                              : "text-gray-200"
                          }
                        />
                      </div>
                      <div
                        className={`flex-1 border rounded-md px-3 py-2 ${lastComplaint.status !== "under_trial" ? "bg-emerald-50/50 border-emerald-100" : "bg-gray-50 border-gray-100 opacity-60"}`}
                      >
                        <p
                          className={`font-bold text-[11px] uppercase tracking-tight ${lastComplaint.status !== "under_trial" ? "text-emerald-800" : "text-gray-400"}`}
                        >
                          প্রক্রিয়াধীন
                        </p>
                        <p
                          className={`text-[9px] font-bold ${lastComplaint.status !== "under_trial" ? "text-emerald-600" : "text-gray-300"}`}
                        >
                          {lastComplaint.status !== "under_trial"
                           ? "পর্যালোচনায়"
                            : "অপেক্ষায়"}
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-center gap-4 group">
                      <div
                        className={`size-8 rounded-full border-2 flex items-center justify-center shrink-0 ${lastComplaint.status === "hearing" || lastComplaint.status === "completed" ? "border-emerald-500 bg-emerald-50 shadow-[0_0_10px_rgba(16,185,129,0.15)]" : "border-gray-200 bg-white"}`}
                      >
                        <CheckCircle
                          size={16}
                          className={
                            lastComplaint.status === "hearing" ||
                            lastComplaint.status === "completed"
                              ? "text-emerald-500"
                              : "text-gray-200"
                          }
                        />
                      </div>
                      <div
                        className={`flex-1 border rounded-md px-3 py-2 ${lastComplaint.status === "hearing" || lastComplaint.status === "completed" ? "bg-emerald-50/50 border-emerald-100" : "bg-gray-50 border-gray-100 opacity-60"}`}
                      >
                        <p
                          className={`font-bold text-[11px] uppercase tracking-tight ${lastComplaint.status === "hearing" || lastComplaint.status === "completed" ? "text-emerald-800" : "text-gray-400"}`}
                        >
                            শুনানি
                        </p>
                        <p
                          className={`text-[9px] font-bold ${lastComplaint.status === "hearing" || lastComplaint.status === "completed" ? "text-emerald-600" : "text-gray-300"}`}
                        >
                          {lastComplaint.status === "hearing" ||
                          lastComplaint.status === "completed"
                             ? "কর্মকর্তা তলব"
                            : "পরিকল্পিত"}
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex items-center gap-4 group">
                      <div
                        className={`size-8 rounded-full border-2 flex items-center justify-center shrink-0 ${lastComplaint.status === "completed" ? "border-emerald-500 bg-emerald-50 shadow-[0_0_10px_rgba(16,185,129,0.15)]" : "border-gray-200 bg-white"}`}
                      >
                        <CheckCircle
                          size={16}
                          className={
                            lastComplaint.status === "completed"
                              ? "text-emerald-500"
                              : "text-gray-200"
                          }
                        />
                      </div>
                      <div
                        className={`flex-1 border rounded-md px-3 py-2 ${lastComplaint.status === "completed" ? "bg-emerald-600 text-white" : "bg-gray-50 border-gray-100 opacity-60"}`}
                      >
                        <p
                          className={`font-bold text-[11px] uppercase tracking-tight ${lastComplaint.status === "completed" ? "text-white" : "text-gray-400"}`}
                        >
                           নিষ্পত্তি
                        </p>
                        <p
                          className={`text-[9px] font-bold ${lastComplaint.status === "completed" ? "text-white/80" : "text-gray-300"}`}
                        >
                          {lastComplaint.status === "completed"
                              ? "সম্পন্ন"
                            : "চূড়ান্ত ধাপ"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 flex-1 bg-gray-50 p-4 rounded-md border border-gray-100">
                  <div className="text-sm">
                    <span className="font-bold text-gray-800">
                       ট্র্যাকিং নম্বর:{" "}
                    </span>
                    <span className="text-gray-600 font-mono">
                      {lastComplaint.complaintId}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-gray-800">
                      অভিযুক্ত কর্মী:{" "}
                    </span>
                    <span className="text-gray-600">
                      {lastComplaint.staff?.name || "প্রযোজ্য নয়"}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-gray-800">বিষয়: </span>
                    <span className="text-gray-600">
                      {lastComplaint.subject}
                    </span>
                  </div>
                  {lastComplaint.serviceId && (
                    <div className="text-sm">
                      <span className="font-bold text-gray-800">
                        সেবা আইডি:{" "}
                      </span>
                      <span className="text-gray-600 font-mono">
                        {lastComplaint.serviceId}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white bg-amber-500 px-1.5 py-2 rounded-md shadow-sm">
                     আবেদনের অবস্থা
                    </span>
                    
                    <span
                      className={`text-xs font-semibold px-1.5 py-2 rounded-md border bg-white shadow-sm capitalize ${lastComplaint.status === "completed" ? "text-emerald-600 border-emerald-200" : "text-amber-600 border-amber-200"}`}
                    >
                      {lastComplaint.status.replace("_", " ")}
                    </span>
                  </div>
                  <Link
                    href={`/customer/complain/doc/${lastComplaint.complaintId}`}
                    className="bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold py-2 px-1.5 rounded-md transition-all text-sm shadow-sm hover:shadow-md"
                  >
                    বিস্তারিত দেখুন
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-400 font-medium pb-8">
               কোনো সাম্প্রতিক অভিযোগ পাওয়া যায়নি।
              </div>
            )}
          </div>

          {/* Hearing Notice / Recent Summary Table */}
          <div className="bg-white rounded-md shadow-sm border border-gray-100 p-6 flex flex-col">
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-6">
              সাম্প্রতিক অভিযোগ নোটিশ
            </h2>

            {complaints.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-y border-gray-200">
                      <th className="py-3 px-2 text-sm font-black text-gray-600 uppercase tracking-wide">
                       অভিযুক্ত কর্মী
                      </th>
                      <th className="py-3 px-2 text-sm font-black text-gray-600 uppercase tracking-wide">
                        তারিখ
                      </th>
                      <th className="py-3 px-2 text-sm font-black text-gray-600 uppercase tracking-wide">
                        অবস্থা
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {complaints.slice(0, 4).map((c: any) => (
                      <tr
                        key={c.complaintId}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-3 px-2 text-sm font-bold text-gray-800">
                          {c.staff?.name}
                        </td>
                        <td className="py-3 px-2 text-sm text-gray-600">
                          {formatDate(c.createdAt)}
                        </td>
                        <td className="py-3 px-2">
                          <span
                            className={`text-xs font-bold px-1 py-2 rounded-sm uppercase ${c.status === "completed" ? "bg-emerald-100 text-emerald-700" : c.status === "hearing" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}`}
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
              <div className="flex-1 flex items-center justify-center text-gray-400 font-medium">
                কোনো নোটিশ পাওয়া যায়নি।
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
