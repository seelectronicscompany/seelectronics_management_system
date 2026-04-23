import React from "react";

import { HearingNoticeTemplateData } from "@/app/pdf/download/actions/pdfTypes";

type HearingNoticeTemplateProps = {
  data: HearingNoticeTemplateData;
};

export default function HearingNoticeTemplate({ data }: HearingNoticeTemplateProps) {
  const today = new Date().toLocaleDateString("bn-BD");

  return (
    <div
      className="relative w-[215.9mm] mx-auto bg-white p-[20mm] text-[#111] overflow-hidden box-border"
      style={{ fontFamily: "'SolaimanLipi', sans-serif", lineHeight: "1.6", fontSize: "14px" }}
    >
      <div className="mb-4">
        <h1 className="text-2xl font-black underline underline-offset-4">সাক্ষ্য প্রমাণ শুনানীর নোটিশ</h1>
      </div>

      <div className="mb-4 space-y-1">
        <p><span className="font-bold">স্মারক নং:</span> {data.orderNum || data.complaintId}</p>
        <p><span className="font-bold">বিষয়ঃ</span> শুনানীর নোটিশ জারি (Hearing Notice)</p>
        <p><span className="font-bold">তারিখঃ</span> {data.issueDateBn || today}</p>
      </div>

      <div className="mb-4">
        <p>জনাব / জনাবা,</p>
      </div>

      <div className="mb-4 text-justify">
        <p>
          প্রিয় সম্মানীত গ্রাহক <span className="font-bold">{data.customer.name}</span> আপনার দায়েরকৃত অভিযোগ ট্র্যাকিং নম্বরঃ <span className="font-bold">{data.complaintId}</span> সম্পর্কিত বিষয়ে অর্থাৎ "{data.subject || "অভিযোগ"}" এই বিষয়ের উপর ভিত্তি করে এস ই ইলেকট্রনিক্স সার্ভিস কোয়ালিটি প্রটেকশন বিভাগ একটি আনুষ্ঠানিক শুনানির জন্য আহবান করছি।
        </p>
      </div>

      <div className="mb-4">
        <p className="font-bold underline mb-2">অভিযুক্ত টেকনিশিয়ানের বিবরণঃ</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mt-1 text-sm">
          <p>নামঃ <span className="font-bold">{data.staff.name}</span></p>
          <p>আইডিঃ <span className="font-bold font-mono">{data.staff.staffId}</span></p>
          <p>পদবীঃ <span className="font-bold">{data.staff.role || "TECHNICIAN"}</span></p>
          <p>ফোনঃ <span className="font-bold">{data.staff.phone}</span></p>
        </div>
      </div>

      <div className="mb-4 text-justify">
        <p className="font-bold underline mb-1">শুনানীর বিস্তারিত নোটিশ</p>
        <p>
          শুনানির জন্য উপস্থিত থাকার নোটিশ প্রিয় গ্রাহক <span className="font-bold">{data.customer.name}</span> আপনি গত {data.issueDateBn || today} ইং তারিখে আমাদের এস ই ইলেকট্রনিক্স প্রশাসনিক শাখায় একটি অভিযোগ দায়ের করেছেন টেকনিশিয়ান নামঃ {data.staff.name} টেকনিশিয়ান আইডিঃ {data.staff.staffId} ফোনঃ {data.staff.phone} প্রতিষ্ঠানঃ এস ই ইলেকট্রনিক্স সার্ভিস টিম এর নামে। আমরা আপনার দেওয়া অভিযোগের ভিত্তিতে আমাদের অভিযোক্ত টেকনিশিয়ান ও আপনার অভিযোগের বিবরণ বিস্তারিত ঘটনা আমাদের দায়িত্ব প্রাপ্ত কর্মকর্তা যাচাই করবে।
        </p>
        {/* rayer copy te dite hove */}
        {/* <p className="mt-2 font-bold">
          আমাদের এস ই ইলেকট্রনিক্স এর প্রশাসন শাখার কর্মরত {data.officerName || "মোঃ আতিকুর রহমান"}, {data.adminNote || "আগামী ধার্য্য তারিখে"} আপনাকে আমাদের সিলেট সদর এয়ারপোর্ট রোড বাদাম বাগিচা অফিসে সরাসরি/ভিডিও কলে শুনানী কার্যক্রম করা হবে, এবং এর নিস্পত্তি করার চেষ্টা করা হবে।
        </p> */}
        <p className="mt-2">
          আপনি ধার্য্য তারিখে অবশ্যই উপস্থিত থাকার অনুরোধ করা হচ্ছে। যদি আপনি সরাসরি/ভিডিও কলে উপস্থিত না হন, তবে আপনার অভিযোগের বিরুদ্ধে এক তরফা রায় দেওয়া হবে। পরবর্তীতে আপনি কোন প্রকার অভিযোগ করতে পারবেন না এবং এই অভিযোগটি এখানেই নিষ্পত্তি করা হবে।
        </p>
      </div>

      <div className="mb-4">
        <p className="font-bold italic underline">অতএব,</p>
        <p className="text-justify">
          আপনাকে অনুরোধ করা হচ্ছে যে উক্ত শুনানীতে নির্ধারিত তারিখ/সময়ে উপস্থিত থাকুন। আপনার কাছে থাকা সকল সাক্ষ্য প্রমাণ (স্ক্রিনশর্ট, ভিডিও, কল রেকর্ড, ইত্যাদি) সাথে নিয়ে আসার জন্য অনুরোধ করছি। ধার্য্য তারিখে আপনি উপস্থিত না হলে তাৎক্ষনিক একপক্ষীয় সিদ্ধান্ত নিয়ে অভিযোগটি সামনে এগিয়ে নিতে না পারায় নিস্পত্তি হয়ে যেতে পারে।
        </p>
      </div>

      <div className="mb-4 text-xs text-black font-mono">
        <p>তারিখঃ {data.issueDateBn || today} ইং</p>
        <p>শুনানীর নোটিশ ট্র্যাকিং নাম্বার: {data.complaintId}</p>
        <p>অভিযোগ গ্রহণ নাম্বারঃ {data.receiptNum}</p>
      </div>

      <div className="flex justify-between items-end">
        <div className="text-left w-64">
          {data.elecLogo && (
            <img src={data.elecLogo} alt="Logo" className="w-[40mm] mb-2 opacity-10 filter grayscale" />
          )}
          <p className="font-bold text-black">জরুরি যোগাযোগঃ ০১৩২২২৪৭৭৭৪</p>
        </div>

        <div className="text-center w-64">
          <div className="h-16 flex items-center justify-center mb-2">
            {data.elecSign && (
              <img src={data.elecSign} alt="Signature" className="max-h-full max-w-full object-contain" />
            )}
          </div>
          <p className="text-sm">আদেশ ক্রমে</p>
          <div className="border-b border-black w-full my-1"></div>
          <p className="font-bold">এস ই ইলেকট্রনিক্স</p>
          <p className="text-sm font-bold">সার্ভিস কোয়ালিটি বিভাগ</p>
        </div>
      </div>
    </div>
  );
}
