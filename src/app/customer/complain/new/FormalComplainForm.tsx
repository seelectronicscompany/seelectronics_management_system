"use client";

import { submitComplaint } from "@/actions/complaintActions";
import { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Download,
  CheckCircle2,
  CloudUpload,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/utils";

export default function FormalComplainForm({
  customerId,
  staffs,
  customer,
}: {
  customerId: string;
  staffs: any[];
  customer: any;
}) {
  const [state, action, isPending] = useActionState(submitComplaint, undefined);
  const [complaintId, setComplaintId] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [serviceId, setServiceId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (state) {
      if (state.success) {
        toast.success(state.message);
        if (state.data) {
          setComplaintId(state.data as string);
        }
      } else {
        toast.error(state.message);
      }
    }
  }, [state]);

  if (state?.success && complaintId) {
    return (
      <div className="bg-white rounded-md shadow-md border border-gray-200 p-8 sm:p-12 flex flex-col items-center text-center animate-in fade-in zoom-in duration-500 max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-2xl font-black text-gray-900 mb-2">
          অভিযোগ দাখিল হয়েছে!
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          আপনার অভিযোগ ট্র্যাকিং নম্বর{" "}
          <span className="font-mono font-bold text-gray-900 bg-gray-100 px-2 py-0.5 rounded">
            {complaintId}
          </span>
          . দিয়ে আনুষ্ঠানিকভাবে নথিভুক্ত করা হয়েছে। ম্যানেজমেন্ট শীঘ্রই এটি পর্যালোচনা করবে।
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            href={`/customer/complain/doc/${complaintId}`}
            className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-800 font-bold py-3 px-6 rounded-md hover:bg-gray-50 transition-all"
          >
            <ExternalLink size={18} />
             নথি দেখুন
          </Link>
          <Link
            href={`/customer/complain`}
            className="flex items-center justify-center gap-2 bg-brand text-white font-bold py-3 px-6 rounded-md hover:bg-brand/90 transition-all shadow-md"
          >
            ড্যাশবোর্ডে ফিরুন
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  const handleBlur = () => {
    if (!serviceId.trim()) {
      setError("সার্ভিস আইডি দেওয়া আবশ্যক");
    } else {
      setError("");
    }};
  return (
    <form
      action={action}
      className="bg-white shadow-xl rounded-md border border-gray-200 p-3 sm:p-12 flex flex-col w-full font-serif md:font-sans relative"
    >
      <input type="hidden" name="customerId" value={customerId} />

      <div className="text-center border-b-2 border-gray-800 pb-6 mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-gray-900 mb-2">
          সেবার মান সংক্রান্ত আনুষ্ঠানিক অভিযোগ ফর্ম
        </h1>
      </div>

      <div className="mb-8 space-y-1 text-sm text-gray-800">
        <p className="font-bold">বরাবর</p>
        <p className="font-bold">
          প্রশাসন প্রধান / সেবার মান কর্মকর্তা
        </p>
        <p className="font-bold">এসই ইলেকট্রনিক্স প্রধান কার্যালয়</p>
        <p className="mt-4">
          <span className="font-bold">বিষয়:</span> আনুষ্ঠানিক অভিযোগ দাখিল।
        </p>
        <p className="mt-4 text-justify leading-relaxed">
          জনাব,
          <br />
          সবিনয় নিবেদন এই যে, নিম্নে উল্লিখিত বিষয়ে আমি একটি আনুষ্ঠানিক অভিযোগ দাখিল করতে চাই। অনুগ্রহপূর্বক প্রদত্ত তথ্যাদি পর্যালোচনা করার জন্য বিনীত অনুরোধ জানাচ্ছি।
        </p>
      </div>

      {/* Complainee's Information Section */}
      <fieldset className="border border-gray-300 rounded-md p-2 mb-8 bg-gray-50/50">
        <legend className="text-lg font-bold text-gray-800 px-3 uppercase tracking-wider bg-white border border-gray-300 rounded-md py-1">
          গ্রাহকের তথ্য
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              গ্রাহকের নাম
            </label>
            <div className="w-full bg-white border border-gray-200 p-2.5 rounded-md text-gray-900 shadow-sm font-medium">
              {customer?.name || "তথ্য নেই"}
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
             মোবাইল নম্বর
            </label>
            <div className="w-full bg-white border border-gray-200 p-2.5 rounded-md text-gray-900 shadow-sm font-mono">
              {customer?.phone || "তথ্য নেই"}
            </div>
          </div>
          <div className="space-y-1 md:col-span-2">
            <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
           নিবন্ধিত ঠিকানা
            </label>
            <div className="w-full bg-white border border-gray-200 p-2.5 rounded-md text-gray-900 shadow-sm font-medium">
              {customer?.address || "তথ্য নেই"}
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              গ্রাহক আইডি
            </label>
            <div className="w-full bg-white border border-gray-200 p-2.5 rounded-md text-gray-900 shadow-sm font-mono">
              {customerId}
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
               নিবন্ধনের তারিখ
            </label>
            <div className="w-full bg-white border border-gray-200 p-2.5 rounded-md text-gray-900 shadow-sm font-medium">
              {customer?.createdAt ? formatDate(customer.createdAt) : "N/A"}
            </div>
          </div>
        </div>
        <p className="text-sm text-rose-500 mt-4 font-semibold italic">
          * আপনার তথ্য পরিবর্তন করতে চাইলে আপনার প্রোফাইলে যান।
        </p>
      </fieldset>

      {/* Complaint Details Section */}
      <fieldset className="border border-emerald-300 rounded-md p-2 mb-8 bg-emerald-50/30">
        <legend className="text-lg font-bold text-emerald-800 px-3 uppercase tracking-wider bg-white border border-emerald-300 rounded-md py-1">
          অভিযোগের বিবরণ
        </legend>

        <div className="space-y-6 pt-2">
          <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-md">
            <p className="text-sm font-semibold text-emerald-800 mb-3">
              নিচের অপশন থেকে অভিযুক্ত স্টাফ / সদস্য নির্বাচন করুন{" "}
              <span className="text-rose-500">*</span>
            </p>
            <select
              name="staffId"
              required
              className="w-full p-3 bg-white border border-emerald-200 rounded-md outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium text-gray-800 shadow-sm"
            >
              <option value="">-- অভিযুক্ত স্টাফ বেছে নিন --</option>
              {staffs.map((staff) => (
                <option key={staff.staffId} value={staff.staffId}>
                  {staff.name} - {staff.role.toUpperCase()} (ID: {staff.staffId}
                  )
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              
      <label className="text-sm font-bold text-gray-700">
        সার্ভিস আইডি 
          <span className="text-red-500">(আবশ্যক)</span> 
      </label>

      <input
        type="text"
        name="serviceId"
        value={serviceId}
        onChange={(e) => setServiceId(e.target.value)}
        onBlur={handleBlur}
        placeholder="e.g. SRV-1234..."
        className={`w-full p-2.5 bg-white border rounded-md outline-none transition-all text-gray-900 shadow-sm ${
          error
            ? "border-red-500 focus:ring-2 focus:ring-red-400"
            : "border-gray-300 focus:ring-2 focus:ring-emerald-500"
        }`}
        required
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
          </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-700">
                অভিযোগের বিষয় <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                required
                placeholder="মূল সমস্যাটি লিখুন..."
                className="w-full p-2.5 bg-white border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-gray-900 shadow-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-gray-700">
              অভিযোগের বিস্তারিত (বাংলায় লিখুন...)<span className="text-rose-500">*</span>
            </label>
            <textarea
              name="description"
              required
              maxLength={200}
              placeholder="ঘটনার বিস্তারিত বিবরণ, তারিখ এবং কী ঘটেছে তা বাংলায় লিখুন..."
              rows={6}
              className="w-full p-3 bg-white border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-gray-900 resize-y shadow-sm"
            ></textarea>
          </div>

          {/* Upload Evidence */}
          <label className="border border-dashed border-gray-300 rounded-md p-2 flex flex-col items-center justify-center text-center bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer group">
            <input
              type="file"
              name="evidence"
              accept="image/*"
              className="hidden"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
            />
            <CloudUpload
              size={32}
              className={`transition-colors mb-2 ${selectedFile ? "text-emerald-500" : "text-gray-400 group-hover:text-emerald-500"}`}
            />
            <p className="text-sm font-bold text-gray-700">
              {selectedFile ? selectedFile.name : "প্রমাণ আপলোড করুন"}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              {selectedFile
                ? "ফাইল নির্বাচিত হয়েছে"
                : "(স্ক্রিনশট বা ছবি আপলোড করতে এখানে ক্লিক করুন, সর্বোচ্চ: ৫ MB)"}
            </p>
          </label>
        </div>
      </fieldset>

      <p className="text-sm text-gray-700 italic mb-8 border-l-4 border-gray-300 pl-3">
        এ বিষয়ে যথাযথ ব্যবস্থা গ্রহণের জন্য বিনীত অনুরোধ জানাচ্ছি।
      </p>

      <div className="flex flex-col gap-4">
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-brand hover:bg-brand/90 text-white font-bold py-4 rounded-md shadow-md transition-all active:scale-[0.99] disabled:bg-gray-400 disabled:cursor-not-allowed uppercase tracking-wide text-sm"
        >
          {isPending
            ? "আবেদন দাখিল হচ্ছে..." : "আনুষ্ঠানিক আবেদন দাখিল করুন"}
        </button>
        <div className="text-center">
          <button
            type="button"
            className="text-sm font-bold text-gray-500 hover:text-gray-800 transition-colors uppercase tracking-wider underline underline-offset-4"
          >
             আবেদনটি প্রিভিউ করুন
          </button>
        </div>
      </div>
    </form>
  );
}
