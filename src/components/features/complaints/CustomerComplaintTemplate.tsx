type CustomerComplaintTemplateProps = {
  data: {
    complaintId: string;
    serviceId: string;
    customer: {
      name: string;
      customerId: string;
      phone: string;
      address: string;
    };
    staff: {
      name: string;
      staffId: string;
    };
    subject: string;
    description: string;
    createdAt: Date;
    logo?: string;
    documentSeal?: string;
    atikurSign?: string;
  };
};

export default function CustomerComplaintTemplate({
  data,
}: CustomerComplaintTemplateProps) {
  const dateStr = new Date(data.createdAt).toLocaleDateString("bn-BD");

  return (
    <div
      className="relative w-[210mm] h-[297mm] mx-auto bg-white p-[16mm] text-[#111] overflow-hidden box-border flex flex-col"
      style={{
        fontFamily: "'SolaimanLipi', sans-serif",
        lineHeight: "1.45",
        fontSize: "14px",
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="space-y-0.5">
          <p>বরাবর,</p>
          <p className="font-bold text-[15px]">এস ই ইলেকট্রনিক্স,</p>
          <p>মহাপরিচালক, চেয়ারম্যান,</p>
          <p>বাদাম বাগিচা সিলেট সদর ৩১০০।</p>
          <p className="mt-3 font-bold underline underline-offset-2">
            বিষয়: {data.subject || "অভিযোগ"}
          </p>
          <p className="mt-1">মহোদয়,</p>
        </div>
        {data.documentSeal && (
          <img
            src={data.documentSeal}
            alt="Seal"
            className="w-[32mm] h-[32mm] object-contain opacity-90"
          />
        )}
      </div>

      {/* Intro */}
      <div className="text-justify mb-3">
        <p>
          আমি অভিযোগকারী <span className="font-bold">{data.customer.name}</span>
          , কাস্টমার আইডিঃ{" "}
          <span className="font-bold">{data.customer.customerId}</span> আপনার
          প্রতিষ্ঠানের একজন ওয়ারেন্টি ভুক্ত গ্রাহক অত্যন্ত দুঃখের সাথে জানাচ্ছি
          যে, গত {dateStr} ইং তারিখে আমার প্রডাক্ট সমস্যা দেখা দিলে আমি আপনাদের
          কাষ্টমার কেয়ারে বিষয়টি জানালে আমার সার্ভিস অনুরোধটি গ্রহন করে আমার
          বাসায় সার্ভিস প্রদানের সময় আপনাদের কোম্পানীর একজন টেকনিশিয়ান আমার সাথে
          অত্যন্ত আপত্তিকর ও অপেশাদার আচরণ করেছে।
        </p>
      </div>

      {/* Incident Details */}
      <div className="mb-3">
        <p className="font-bold underline mb-1.5">ঘটনার বিস্তারিত বিবরণঃ</p>
        <div className="text-justify">
          <p>{data.description}</p>
        </div>
      </div>

      {/* Emotional Impact */}
      <div className="text-justify mb-3 space-y-2">
        <p>
          একজন গ্রাহক হিসেবে আমি এই ধরনের আচরণ আপনাদের মতো একটি স্বনামধন্য
          প্রতিষ্ঠানের কাছ থেকে প্রত্যাশা করি নাই। এই ঘটনাটি আমার জন্য অত্যন্ত
          বিব্রতকর ছিল।
        </p>
        <p>
          এমতবস্থায় টেকনিশিয়ান {data.staff.name}, সার্ভিস আইডিঃ{" "}
          {data.serviceId || "N/A"} এর জন্য আপনাদের স্বনামধন্য কোম্পানী এস ই
          ইলেকট্রনিক্স এর সম্মান ক্ষুন্ন হয়েছে। ও আমি তাহার এই আচরণের জন্য এস ই
          ইলেকট্রনিক্স এর মহাপরিচালক / চেয়ারম্যান, এর কাছে এই বিষয়ে সঠিক যাচাই
          বাছাই করে বিচারের জন্য জোর আবেদন করছি।
        </p>
      </div>

      {/* Request */}
      <div className="text-justify mb-3">
        <p>
          <span className="font-bold">অতএব, </span>বিষয়টি গুরুত্বের সাথে বিবেচনা
          করে উক্ত টেকনিশিয়ানের বিরুদ্ধে প্রয়োজনীয় ব্যবস্থা গ্রহণ করার জন্য
          বিনীত অনুরোধ জানাচ্ছি। আশা করি, ভবিষ্যতে আপনাদের সেবার মান বজায় রাখতে
          আপনারা যথাযথ পদক্ষেপ নেবেন।
        </p>
      </div>

      {/* Bottom Signature Block */}
      <div className="flex justify-between items-end mt-auto pt-2">
        <div>
          {data.atikurSign && (
            <img
              src={data.atikurSign}
              alt="Signature"
              width={160}
              height={80}
            />
          )}
          <p className="text-[10px] text-center mt-1">অনলাইনে যাচাইকৃত</p>
          <p className="font-bold border-t border-black w-50 pt-1">
            প্রশাসনিক শাখা, এস ই ইলেকট্রনিক্স
          </p>
        </div>
        <div>
          <p className="font-bold">বিনীত নিবেদন</p>
          <div className="mt-8 border-t border-black w-40 pt-1">
            <p className="font-bold">{data.customer.name}</p>
            <p className="font-mono">{data.customer.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
