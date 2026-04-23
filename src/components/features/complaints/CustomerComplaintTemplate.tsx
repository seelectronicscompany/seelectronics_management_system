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
    elecLogo?: string;
    elecSign?: string;
  };
};

export default function CustomerComplaintTemplate({
  data,
}: CustomerComplaintTemplateProps) {
  const dateStr = new Date(data.createdAt).toLocaleDateString("bn-BD");

  return (
    <div
      className="relative w-[210mm] mx-auto bg-white p-[20mm] text-[#111] overflow-hidden box-border"
      style={{
        fontFamily: "'SolaimanLipi', sans-serif",
        lineHeight: "1.6",
        fontSize: "15px",
      }}
    >
      <div>
        <p>বরাবর,</p>
        <p className="font-bold">এস ই ইলেকট্রনিক্স মহাপরিচালক , চেয়ারম্যান,</p>
        <p>বাদাম বাগিচা সিলেট সদর ৩১০০।</p>
      </div>

      <div className="font-bold">
        <p>বিষয়: {data.subject || "অভিযোগ"}</p>
      </div>

      <div>
        <p>মহোদয়,</p>
      </div>

      <div className="text-justify">
        <p>
          আমি অভিযোগকারী <span className="font-bold">{data.customer.name}</span>
          , কাস্টমার আইডিঃ{" "}
          <span className="font-bold">{data.customer.customerId}</span> আপনার
          প্রতিষ্ঠানের একজন ওয়ারেন্টি ভুক্ত গ্রাহক অত্যন্ত দুঃখের সাথে জানাচ্ছি
          যে, গত {dateStr} ইং তারিখে আমার প্রডাক্ট সমস্যা দেখা দিলে আমি আপনাদের
          কাষ্টমার কেয়ারে বিষয়টি জানালে আমার সার্ভিস অনুরোধটি গ্রহন করে আমার
          বাসায় সার্ভিস প্রদানের সময় আপনাদের কোম্পানীর একজন টেকনিশিয়ান আমার সাথে
          অত্যন্ত আপত্তিকর ও অপেশাদার আচরণ করেছেন।
        </p>
      </div>

      <div>
        <p className="font-bold underline mb-2">ঘটনার বিস্তারিত বিবরণঃ</p>
        <div className="space-y-1">
          {/* <p>
            টেকনিশিয়ানের নাম:{" "}
            <span className="font-bold">{data.staff.name}</span>, টেকনিশিয়ানের
            আইডি:{" "}
            <span className="font-bold font-mono">{data.staff.staffId}</span>,
            সার্ভিস আইডিঃ{" "}
            <span className="font-bold font-mono">
              {data.serviceId || "N/A"}
            </span>
            , ঘটনার সময়:{" "}
            <span className="font-bold font-mono">{dateStr} ইং</span>
          </p> */}
          {/* <p className="font-bold">অভিযোগের সংক্ষিপ্ত বিবরণ:</p> */}
          <p>{data.description}</p>
        </div>
      </div>

      <div className=" text-justify leading-relaxed">
        <p>
          একজন গ্রাহক হিসেবে আমি এই ধরনের আচরণ আপনাদের মতো একটি স্বনামধন্য
          প্রতিষ্ঠানের কাছ থেকে প্রত্যাশা করি নাই। এই ঘটনাটি আমার জন্য অত্যন্ত
          বিব্রতকর ছিল।
        </p>
        <p>
          এমতবস্থায় টেকনিশিয়ান {data.staff.name}, সার্ভিস আইডিঃ{" "}
          {data.serviceId || "N/A"} এর জন্য আপনাদের স্বনামধন্য কোম্পানী এস ই
          ইলেকট্রনিক্স এর সম্মান ক্ষুনু হয়েছে। ও আমি তাহার এই আচরণের জন্য এস ই
          ইলেকট্রনিক্স এর মহাপরিচালক / চেয়ারম্যান, এর কাছে এই বিষয়ে সঠিক যাচাই
          বাছাই করে বিচারের জন্য জোর আবেদন করছি।
        </p>
      </div>

      <div className="text-justify">
        <p>
          অতএব, বিষয়টি গুরুত্বের সাথে বিবেচনা করে উক্ত টেকনিশিয়ানের বিরুদ্ধে
          প্রয়োজনীয় ব্যবস্থা গ্রহণ করার জন্য বিনীত অনুরোধ জানাচ্ছি। আশা করি,
          ভবিষ্যতে আপনাদের সেবার মান বজায় রাখতে আপনারা যথাযথ পদক্ষেপ নেবেন।
        </p>
      </div>

      <div className="flex justify-between items-end">
        <div className="text-center w-64">
          {data.elecLogo && (
            <img
              src={data.elecLogo}
              alt="Logo"
              className="w-[40mm] mb-2  filter grayscale"
            />
          )}
          <div className="h-16 flex items-center justify-center">
            {data.elecSign && (
              <img
                src={data.elecSign}
                alt="Signature"
                className="w-full h-full object-contain"
              />
            )}
          </div>
          <p className="text-[10px] mt-2">অনলাইনে যাচাইকৃত</p>
          <p className="font-bold border-t border-black pt-1">প্রশাসনিক শাখা</p>
          <p className="text-sm font-bold">এস ই ইলেকট্রনিক্স</p>
        </div>
        <div>
          <p className="font-bold">বিনীত নিবেদন</p>
          <div className="mt-12 border-t border-black w-64 pt-2">
            <p className="font-bold">{data.customer.name}</p>
            <p className="font-mono">{data.customer.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
