import { getComplaintById } from "@/actions/complaintActions";
import { verifyCustomerSession } from "@/actions/customerActions";
import { MobilePageHeader } from "@/components/layout";
import { formatDate } from "@/utils";
import { ArrowLeft, CheckCircle, Download, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ComplaintDocPage({
  params,
}: {
  params: Promise<{ complaintId: string }>;
}) {
  const session = await verifyCustomerSession();
  if (!session.isAuth || !session.customer) return null;

  const { complaintId } = await params;
  const res = await getComplaintById(complaintId);
  if (!res.success || !res.data) notFound();

  const complaint = res.data;
  if (complaint.customerId !== session.customer.customerId) notFound();
  const eleclogo = "/elecLogo.png";
  const elecSign = "/elecSign.png";

  const isProcessing =
    complaint.status === "processing" ||
    complaint.status === "hearing" ||
    complaint.status === "completed";
  const isHearing =
    complaint.status === "hearing" || complaint.status === "completed";
  const isCompleted = complaint.status === "completed";

  return (
    <div
      className="min-h-screen bg-gray-50 flex flex-col"
      style={{
        fontFamily: "'SolaimanLipi', serif",
        // lineHeight: "1.9",
        // fontSize: "15px",
      }}
    >
      <MobilePageHeader
        title="নথি দেখুন"
        backHref="/customer/complain"
        Icon={ShieldAlert}
      />

      <div className="py-3 px-3 sm:px-4 flex justify-center flex-1">
        <div className="w-full max-w-5xl">
          {/* TOP NAV BAR */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 bg-white p-2 rounded-md border border-gray-200 shadow-sm">
            <Link
              href="/customer/complain"
              className="flex items-center gap-2 text-brand hover:text-brand/80 font-bold transition-colors"
            >
              <ArrowLeft size={20} />
              ড্যাশবোর্ডে ফিরুন
            </Link>
            <div className="text-center">
              <h1 className="text-lg font-black text-gray-900  border-brand/20 inline-block pb-1">
                অভিযোগ পত্র (Complaint Document)
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link
                href={`/pdf/download?type=complaint_customer&id=${complaint.complaintId}`}
                className="inline-flex items-center justify-center gap-2 bg-sky-600 text-white px-4 py-2 rounded-md font-bold text-sm shadow-md transition-all hover:bg-sky-700"
                target="_blank"
              >
                <Download size={16} />
                অভিযোগ নথি
              </Link>
              {isHearing && (
                <Link
                  href={`/pdf/download?type=hearing-notice&id=${complaint.complaintId}`}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-md font-bold text-sm shadow-md transition-all hover:bg-emerald-700"
                  target="_blank"
                >
                  <Download size={16} />
                  শুনানি নোটিশ
                </Link>
              )}
              {isCompleted && (
                <Link
                  href={`/pdf/download?type=completion-notice&id=${complaint.complaintId}`}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-md font-bold text-sm shadow-md transition-all hover:bg-emerald-700"
                  target="_blank"
                >
                  <Download size={16} />
                  নিষ্পত্তি পত্র
                </Link>
              )}
            </div>
          </div>

          {/* STATUS TRACKER */}
          <div className="bg-white rounded-[1rem] shadow-sm border border-gray-100 mb-10 p-3 sm:p-12">
            <h3 className="text-center font-black text-gray-900 uppercase tracking-[0.2em] text-lg mb-12">
              আবেদনের বর্তমান অবস্থা
            </h3>

            <div className="max-w-md mx-auto relative px-2">
              <div className="absolute left-[39px] top-4 bottom-4 w-0.5 bg-emerald-100 hidden sm:block"></div>

              <div className="space-y-12">
                {/* ধাপ ১: দাখিল */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 relative group">
                  <div
                    className={`z-10 size-10 rounded-full border-2 flex items-center justify-center shrink-0 transition-all bg-white ${isProcessing || complaint.status === "under_trial" ? "border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]" : "border-gray-200"}`}
                  >
                    <CheckCircle
                      size={20}
                      className={
                        isProcessing || complaint.status === "under_trial"
                          ? "text-emerald-500"
                          : "text-gray-200"
                      }
                    />
                  </div>
                  <div className="flex-1 flex items-center gap-4 w-full">
                    <div className="h-0.5 w-12 bg-emerald-100 hidden sm:block"></div>
                    <div className="flex-1 bg-emerald-50/50 border border-emerald-200 rounded-md p-5 group-hover:bg-emerald-50 transition-colors">
                      <h4 className="font-bold text-emerald-800 text-sm uppercase tracking-widest mb-1">
                        দাখিল
                      </h4>
                      <p className="text-[10px] font-bold text-emerald-600/60 uppercase mb-1">
                        আবেদনের তারিখ
                      </p>
                      <p className="text-sm font-black text-emerald-700">
                        {formatDate(complaint.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ধাপ ২: প্রক্রিয়াধীন */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 relative group">
                  <div
                    className={`z-10 size-10 rounded-full border-2 flex items-center justify-center shrink-0 transition-all bg-white ${isProcessing ? "border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]" : "border-gray-200"}`}
                  >
                    <CheckCircle
                      size={20}
                      className={
                        isProcessing ? "text-emerald-500" : "text-gray-200"
                      }
                    />
                  </div>
                  <div className="flex-1 flex items-center gap-4 w-full">
                    <div
                      className={`h-0.5 w-12 hidden sm:block ${isProcessing ? "bg-emerald-100" : "bg-gray-100"}`}
                    ></div>
                    <div
                      className={`flex-1 border rounded-md p-5 transition-all ${isProcessing ? "bg-emerald-50/50 border-emerald-200 group-hover:bg-emerald-50" : "bg-gray-50 border-gray-100 opacity-60"}`}
                    >
                      <h4
                        className={`font-bold text-sm uppercase tracking-widest mb-1 ${isProcessing ? "text-emerald-800" : "text-gray-400"}`}
                      >
                        প্রক্রিয়াধীন
                      </h4>
                      <p
                        className={`text-[10px] font-bold uppercase mb-1 ${isProcessing ? "text-emerald-600/60" : "text-gray-400"}`}
                      >
                        গ্রহণের তারিখ
                      </p>
                      <p
                        className={`text-sm font-black ${isProcessing ? "text-emerald-700" : "text-gray-300"}`}
                      >
                        {isProcessing
                          ? formatDate(complaint.updatedAt)
                          : "অপেক্ষমান..."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ধাপ ৩: শুনানি */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 relative group">
                  <div
                    className={`z-10 size-10 rounded-full border-2 flex items-center justify-center shrink-0 transition-all bg-white ${isHearing ? "border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]" : "border-gray-200"}`}
                  >
                    <CheckCircle
                      size={20}
                      className={
                        isHearing ? "text-emerald-500" : "text-gray-200"
                      }
                    />
                  </div>
                  <div className="flex-1 flex items-center gap-4 w-full">
                    <div
                      className={`h-0.5 w-12 hidden sm:block ${isHearing ? "bg-emerald-100" : "bg-gray-100"}`}
                    ></div>
                    <div
                      className={`flex-1 border rounded-md p-5 transition-all ${isHearing ? "bg-emerald-50/50 border-emerald-200 group-hover:bg-emerald-50" : "bg-gray-50 border-gray-100 opacity-60"}`}
                    >
                      <h4
                        className={`font-bold text-sm uppercase tracking-widest mb-1 ${isHearing ? "text-emerald-800" : "text-gray-400"}`}
                      >
                        শুনানি
                      </h4>
                      <p
                        className={`text-[10px] font-bold uppercase mb-1 ${isHearing ? "text-emerald-600/60" : "text-gray-400"}`}
                      >
                        শুনানির তারিখ
                      </p>
                      <p
                        className={`text-sm font-black ${isHearing ? "text-emerald-700" : "text-gray-300"}`}
                      >
                        {isHearing
                          ? formatDate(complaint.updatedAt)
                          : "পরিকল্পিত"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ধাপ ৪: নিষ্পত্তি */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 relative group">
                  <div
                    className={`z-10 size-10 rounded-full border-2 flex items-center justify-center shrink-0 transition-all bg-white ${isCompleted ? "border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]" : "border-gray-200"}`}
                  >
                    <CheckCircle
                      size={20}
                      className={
                        isCompleted ? "text-emerald-500" : "text-gray-200"
                      }
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-center w-full">
                    <div
                      className={`h-0.5 w-12 mb-4 self-start hidden sm:block ${isCompleted ? "bg-emerald-100" : "bg-gray-100"}`}
                    ></div>
                    <div
                      className={`w-full border rounded-md p-6 transition-all text-center ${isCompleted ? "bg-emerald-600  text-white shadow-xl shadow-emerald-200" : "bg-gray-50 border-gray-100 opacity-60"}`}
                    >
                      <h4
                        className={`font-black uppercase tracking-[0.2em] mb-1 ${isCompleted ? "text-white" : "text-gray-400"}`}
                      >
                        নিষ্পত্তি
                      </h4>
                      <p
                        className={`text-[10px] font-bold uppercase mb-2 ${isCompleted ? "text-white/70" : "text-gray-400"}`}
                      >
                        চূড়ান্ত পর্যালোচনার তারিখ
                      </p>
                      <p
                        className={`text-sm font-black ${isCompleted ? "text-white" : "text-gray-300"}`}
                      >
                        {isCompleted
                          ? formatDate(complaint.updatedAt)
                          : "প্রক্রিয়াধীন..."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* {(isHearing || isCompleted) && complaint.adminNote && (
              <div className="mt-12 p-6 bg-amber-50 rounded-3xl border border-amber-100 flex flex-col items-center text-center">
                <p className="text-[10px] font-black text-amber-600 uppercase tracking-[0.2em] mb-3">
                  {isCompleted ? "নির্বাহী নিষ্পত্তি সারসংক্ষেপ" : "কর্মকর্তার শুনানি নোটিশ"}
                </p>
                <p className="text-sm font-bold text-amber-900 leading-relaxed max-w-2xl italic">
                  &ldquo;{complaint.adminNote}&rdquo;
                </p>
              </div>
            )} */}
            {(isHearing || isCompleted) && (
              <div className="mt-8 p-3 bg-emerald-50 rounded border  border-emerald-200 hover:border-emerald-30 shadow-sm">
                <h2 className="text-lg font-bold text-gray-800 mb-2 text-center">
                  দায়িত্বপ্রাপ্ত কর্মকর্তা
                </h2>

                <p className="text-sm text-gray-600 text-center mb-6">
                  আপনার অভিযোগটি পর্যালোচনা ও নিষ্পত্তির জন্য নিম্নলিখিত কর্মকর্তার
                  কাছে প্রেরণ করা হয়েছে।
                </p>

                <div className="max-w-md mx-auto">
                  <div className="p-4 border-emerald-200 border bg-white rounded shadow-sm text-center">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">
                      তদন্তকারী কর্মকর্তা (Investigation Officer)
                    </p>
                    <p className="text-xl font-black text-emerald-900 mb-1">
                      {complaint.hearingOfficerName || "মোঃ সাহাব উদ্দিন মাহমুদ"}
                    </p>
                    <p className="font-bold text-emerald-600 mb-3">
                      {complaint.hearingOfficerPhone || "০১৩১০৬৭৩৬০০"}
                    </p>

                    <div className="pt-3 border-t border-gray-100 flex flex-col items-center">
                      <p className="text-sm font-bold text-gray-700">
                        {complaint.hearingOfficerDesignation || "দায়িত্বরত কর্মকর্তা, প্রশাসনিক শাখা"}
                      </p>
                      <p className="text-xs text-gray-500">সিলেট বিভাগীয় কার্যালয়, এস ই ইলেকট্রনিক্স</p>
                    </div>
                  </div>
                </div>

                {isCompleted && complaint.punishmentType && (
                  <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded text-center animate-in fade-in slide-in-from-bottom-2">
                    <p className="text-[10px] font-black text-red-400 uppercase tracking-widest mb-1">
                      গৃহীত শাস্তিমূলক ব্যবস্থা (Disciplinary Action)
                    </p>
                    <p className="text-lg font-black text-red-700 uppercase">
                      {complaint.punishmentType}
                    </p>
                    {complaint.punishmentStartDate && (
                      <p className="text-xs font-bold text-red-500 mt-1">
                        সময়কালঃ {complaint.punishmentStartDate} {complaint.punishmentEndDate ? `- ${complaint.punishmentEndDate}` : ''}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
            <div className="bg-white border rounded p-3 mt-3 mb-3">
              <h3 className="font-bold text-center  text-gray-800 mb-3 border-b pb-1">
                অভিযোগের বিবরণ
              </h3>

              <p className="text-center">
                <span className="font-semibold">ট্র্যাকিং আইডি:</span>{" "}
                {complaint.complaintId}
              </p>
              <p className="text-center">
                <span className="font-semibold">নাম:</span>{" "}
                {complaint.customer?.name}
              </p>
              <p className="text-center">
                <span className="font-semibold">মোবাইল:</span>{" "}
                {complaint.customer?.phone}
              </p>
            </div>
            <div className="bg-white border rounded p-3 mb-3 text-center">
              <h3 className="font-bold text-gray-800 mb-2 border-b pb-1">
                অভিযোগের বর্তমান অবস্থা
              </h3>

              <p
                className={`font-bold ${isCompleted
                  ? "text-green-600"
                  : isHearing
                    ? "text-amber-600"
                    : isProcessing
                      ? "text-blue-600"
                      : complaint.status === "under_trial"
                        ? "text-emerald-300"
                        : "text-gray-500"
                  }`}
              >
                অভিযোগটি{" "}
                {isCompleted
                  ? "নিষ্পত্তি"
                  : isHearing
                    ? "শুনানি"
                    : isProcessing
                      ? "প্রক্রিয়াধীন"
                      : complaint.status === "under_trial"
                        ? "দাখিল"
                        : "অপেক্ষমান"}{" "}
                করা হয়েছে।
              </p>

              <p className="text-sm text-gray-500 mt-2">
                তারিখ: {formatDate(complaint.updatedAt)}
              </p>
            </div>

            {(isHearing || isCompleted) && complaint.adminNote && (
              <>
                {/* 🔶 Admin Note Card */}
                <div className="mt-3 p-3 bg-amber-50 rounded border border-amber-100 flex flex-col items-center text-center">
                  <p className="text-[10px] font-black text-amber-600 uppercase tracking-[0.2em] mb-3">
                    {isCompleted
                      ? "নির্বাহী নিষ্পত্তি সারসংক্ষেপ"
                      : "কর্মকর্তার শুনানি নোটিশ"}
                  </p>

                  <p className="text-sm font-bold text-amber-900 leading-relaxed max-w-2xl italic">
                    &ldquo;{complaint.adminNote}&rdquo;
                  </p>
                </div>
              </>
            )}
          </div>

          {/* OFFICIAL DOCUMENT */}
          <div className="bg-white rounded-sm pt-12 pb-20 px-10 sm:px-16 md:px-24 mb-10 text-black font-serif shadow-sm border border-gray-300 print:shadow-none print:border-none min-h-[1056px] relative mx-auto w-full max-w-[800px] text-sm md:text-base leading-relaxed">
            <div className="mb-4">
              <p>
                <span className="font-bold">বরাবর,</span>
              </p>
              <p className="font-bold">এস ই ইলেকট্রনিক্স</p>
              <p>মহাপরিচালক / চেয়ারম্যান,</p>
              <p>বাদাম বাগিচা সিলেট সদর ৩১০০।</p>
            </div>

            <div className="mb-4">
              <p>
                <span className="font-bold">বিষয়ঃ-অভিযোগ ।</span>
              </p>
            </div>
            <div className="mb-4">
              <p>
                <span className="font-bold">মহোদয়,</span>
              </p>
            </div>

            {/* <div className="mb-6 space-y-1">
              <p className="font-bold underline underline-offset-4 mb-2">অভিযোগকারীর কাস্টমার বিবরণঃ</p>
              <p><span className="font-semibold">নামঃ</span> {complaint.customer?.name}</p>
              <p><span className="font-semibold">পিতাঃ</span> প্রদত্ত নয়</p>
              <p><span className="font-semibold">ঠিকানাঃ</span> {complaint.customer?.address}</p>
              <p><span className="font-semibold">মোবাইল নম্বরঃ</span> <span className="font-mono">{complaint.customer?.phone}</span></p>
            </div> */}

            {/* <div className="mb-8 space-y-1">
              <p className="font-bold underline underline-offset-4 mb-2">টেকনিশিয়ান অভিযুক্তের বিবরণঃ</p>
              <p><span className="font-semibold">টেকনিশিয়ান নামঃ</span> {complaint.staff?.name}</p>
              <p><span className="font-semibold">ঠিকানাঃ</span> {complaint.staff?.currentStreetAddress}, {complaint.staff?.currentDistrict}</p>
              <p><span className="font-semibold">টেকনিশিয়ান আইডি নংঃ-</span> <span className="font-mono font-bold">{"{"}{complaint.staffId}{"}"}</span></p>
              <p><span className="font-semibold">ফোন নম্বরঃ</span> <span className="font-mono">{complaint.staff?.phone}</span></p>
            </div> */}

            <div className="mb-4">
              <p className=" ">
                আমি অভিযোগকারী {complaint.customer?.name} কাস্টমার আইডিঃ{" "}
                {complaint.customer?.customerId} আপনার প্রতিষ্ঠানের একজন
                ওয়ারেন্টি ভুক্ত গ্রাহক অত্যন্ত দুঃখের সাথে জানাচ্ছি যে, গত
                ০৩/০৩/২০২৬ ইং তারিখে আমার প্রডাক্ট সমস্যা দেখা দিলে আমি আপনাদের
                কাষ্টমার কেয়ারে বিষয়টি জানালে আমার সার্ভিস অনুরোধটি গ্রহন করে
                আমার বাসায় সার্ভিস প্রদানের সময় আপনাদের কোম্পানীর একজন
                টেকনিশিয়ান আমার সাথে অত্যন্ত আপত্তিকর ও অপেশাদার আচরণ করেছেন।
              </p>
            </div>
            {/* <div className="mb-8">
              <p className="font-bold mb-2">ঘটনার বিস্তারিত বিবরণঃ</p>
              <p className="text-justify leading-loose tracking-wide whitespace-pre-wrap">
                আমি অভিযোগকারী {"{"} {complaint.customer?.name} {"}"}  কাস্টমার আইডিঃ {complaint.customer?.customerId} আপনার একজন কাস্টমার।{" "}
             
                <br /><br />
                {complaint.description}
                <br /><br />
                এমতবস্থায় টেকনিশিয়ান নামঃ {complaint.staff?.name} এর জন্য আপনাদের স্বনামধন্য কোম্পানী এস ই ইলেকট্রনিক্স এর সম্মান ক্ষুন্ন হয়েছে। ও আমি তাহার এই আচরণের জন্য এস ই ইলেকট্রনিক্স এর মহাপরিচালক / চেয়ারম্যান, এর কাছে এই বিষয়ে সঠিক যাচাই বাছাই করে বিচারের জন্য জোর আবেদন করছি।
              </p>
            </div> */}
            <div className="mb-4">
              <p className="font-bold mb-2">ঘটনার বিস্তারিত বিবরণঃ</p>
              <p className="text-justify  tracking-wide whitespace-pre-wrap">
                {/* আমি অভিযোগকারী {"{"} {complaint.customer?.name} {"}"}  কাস্টমার আইডিঃ {complaint.customer?.customerId} আপনার একজন কাস্টমার।{" "} */}
                টেকনিশিয়ান নামঃ {complaint.staff?.name}, টেকনিশিয়ানের আইডি:{" "}
                {complaint.staffId} ,সার্ভিস আইডিঃ {complaint.serviceId}{" "}
                ,সার্ভিসের
                <br />
                <br />
                ধরন: {complaint.description}
                <br />
                <br />
                এমতবস্থায় টেকনিশিয়ান {complaint.staff?.name}, সার্ভিস আইডিঃ{" "}
                {complaint.serviceId} এর জন্য আপনাদের স্বনামধন্য কোম্পানী এস ই
                ইলেকট্রনিক্স এর সম্মান ক্ষুনু হয়েছে। ও আমি তাহার এই আচরণের জন্য
                এস ই ইলেকট্রনিক্স এর মহাপরিচালক / চেয়ারম্যান, এর কাছে এই বিষয়ে
                সঠিক যাচাই বাছাই করে বিচারের জন্য জোর আবেদন করছি।
              </p>
            </div>

            <div className="mb-4">
              <p className="font-bold mb-2">অতএব</p>
              <p className="text-justify ">
                অতএব, বিষয়টি গুরুত্বের সাথে বিবেচনা করে উক্ত টেকনিশিয়ানের
                বিরুদ্ধে প্রয়োজনীয় ব্যবস্থা গ্রহণ করার জন্য বিনীত অনুরোধ
                জানাচ্ছি। আশা করি, ভবিষ্যতে আপনাদের সেবার মান বজায় রাখতে আপনারা
                যথাযথ পদক্ষেপ নেবেন।
              </p>
            </div>


            {/* স্বাক্ষর */}
            <div className="flex justify-end ">
              <div className="grid grid-cols-2 gap-4 text-sm mt-4">
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-full border border-brand/20 flex flex-col items-center justify-center -ml-2 mb-4">
                  <img src={eleclogo} alt="" />
                </div>
                <p>
                  <span className="font-semibold">তারিখঃ</span>{" "}
                  <span className="font-mono">
                    {new Date(complaint.createdAt).toLocaleDateString("bn-BD")}
                  </span>
                </p>
                <p>
                  <span className="font-semibold">
                    অভিযোগ ট্র্যাকিং নাম্বার:
                  </span>{" "}
                  <span className="font-mono">{complaint.complaintId}</span>
                </p>
                <p>
                  <span className="font-semibold">অভিযোগ গ্রহন নাম্বার:</span>{" "}
                  <span className="font-mono">
                    SE{" "}
                    {complaint.complaintId.replace(/\D/g, "").slice(0, 5) ||
                      "14285"}
                  </span>
                </p>
              </div>
              <div></div>
              <div className="flex flex-col   ">
                <div className="flex  mt-4 text-sm">
                  <img src={elecSign}
                  className="w-full h-full object-contain" alt="" />
                </div>
              </div>
            </div>
              <div className="text-center">
                <p className="font-bold mb-2">বিনীত নিবেদন</p>
                <div className="border-b border-gray-400 w-32 mx-auto mb-2 opacity-50"></div>
                <p>{complaint.customer?.name}</p>
                <p>
                  মোবাইল{" "}
                  <span className="font-mono">{complaint.customer?.phone}</span>
                </p>
              </div>
            </div>

            {/* ট্র্যাকিং ও সিল */}
            {/* <div className="grid grid-cols-2 gap-4 text-sm mt-4">
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-full border border-brand/20 flex flex-col items-center justify-center -ml-2 mb-4">
                  <img src={eleclogo} alt="" />
                </div>
                <p>
                  <span className="font-semibold">তারিখঃ</span>{" "}
                  <span className="font-mono">
                    {new Date(complaint.createdAt).toLocaleDateString("bn-BD")}
                  </span>
                </p>
                <p>
                  <span className="font-semibold">
                    অভিযোগ ট্র্যাকিং নাম্বার:
                  </span>{" "}
                  <span className="font-mono">{complaint.complaintId}</span>
                </p>
                <p>
                  <span className="font-semibold">অভিযোগ গ্রহন নাম্বার:</span>{" "}
                  <span className="font-mono">
                    SE{" "}
                    {complaint.complaintId.replace(/\D/g, "").slice(0, 5) ||
                      "14285"}
                  </span>
                </p>
              </div>
              <div></div>
              <div className="flex flex-col   ">
                <div className="flex  mt-4 text-sm">
                  <img src={elecSign} alt="" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
