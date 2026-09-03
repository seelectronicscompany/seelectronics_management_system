"use client";

import { Printer, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ResumeClientProps {
  staffData: any;
}

export default function ResumeClient({ staffData }: ResumeClientProps) {
  const handlePrint = () => {
    window.print();
  };

  const DottedLine = ({ width = "100px" }: { width?: string }) => (
    <span
      className="inline-block border-b-2 border-dotted border-gray-600 mx-1"
      style={{ width }}
    ></span>
  );

  const Checkbox = ({
    checked = false,
    label,
  }: {
    checked?: boolean;
    label: string;
  }) => (
    <span className="inline-flex items-center gap-1 mx-2">
      <span className="inline-block w-4 h-4 border border-black flex-shrink-0 flex items-center justify-center">
        {checked && (
          <span className="text-black text-xs font-bold leading-none">✓</span>
        )}
      </span>
      <span>{label}</span>
    </span>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-8 print:bg-white print:py-0 font-sans text-black overflow-x-auto">
      <div className="w-[21cm] shrink-0 mx-auto px-4 sm:px-8 bg-white shadow-xl print:shadow-none min-h-[29.7cm]">
        {/* Controls - Hidden when printing */}
        <div className="py-4 flex flex-wrap gap-2 items-center justify-between print:hidden border-b border-gray-200 mb-6">
          <Link
            href="/staff/details"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-6 py-2 bg-brand text-white rounded-md shadow-sm hover:bg-brand/90 text-sm font-medium transition-colors"
          >
            <Printer className="w-4 h-4" />
            Download / Print Form
          </button>
        </div>

        {/* Form Content */}
        <div
          id="staff-resume"
          className="pt-2 relative text-[12px] leading-snug"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="w-32">
              {/* Logo placeholder */}
              <div className="flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.jpg"
                  alt="SE IPS BD Logo"
                  className="w-16 h-16 object-contain mb-1"
                />
                <span className="text-[10px] text-center leading-tight font-bold">
                  Shabuddin Electronics
                </span>
              </div>
            </div>

            <div className="flex-1 text-center">
              <h1 className="text-2xl font-bold mb-1">
                এস ই ইলেকট্রনিক্স এর জনবল নিয়োগ ফর্ম
              </h1>
              <p className="text-sm font-bold mb-1">
                স্থাপিত : ২০০৯ ইং &nbsp;&nbsp;&nbsp;&nbsp; নিয়োগকৃত ব্যক্তির
                তথ্যাবলি
              </p>
              <p className="text-xs">Email : sebofficial@gmail.com</p>
              <p className="text-xs font-medium">
                Phone : 09638086438, 01812544466
              </p>
            </div>

            <div className="w-[120px] h-[140px] border-[3px] border-black flex items-center justify-center relative overflow-hidden bg-gray-50 rounded-full object-cover">
              {staffData.photoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={staffData.photoUrl}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center text-sm font-bold text-gray-800">
                  <p>ছবি</p>
                  <p>যোগ করুন</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between mb-3 font-bold text-sm">
            <div>
              তারিখ : <DottedLine width="150px" />
            </div>
            <div>
              ফর্ম নাম্বার :{" "}
              <span className="border-b-2 border-dotted border-gray-600 px-2 font-mono">
                SE - 3300488
              </span>
            </div>
            <div className="w-[120px]"></div> {/* Spacer for photo alignment */}
          </div>

          {/* Form Fields */}
          <div className="space-y-2 mb-4">
            <div className="flex">
              <span className="w-10">১।</span>
              <span className="w-36">নাম ( বাংলায় )</span>
              <span>: </span>
              <div className="flex-1 border-b-[1.5px] border-dotted border-gray-600 px-2 font-medium"></div>
              <span className="ml-4 w-24">মোবাইল নং : </span>
              <div className="w-48 border-b-[1.5px] border-dotted border-gray-600 px-2 font-bold">
                {staffData.phone}
              </div>
            </div>

            <div className="flex">
              <span className="w-10">২।</span>
              <span className="w-36">ইংরেজী বড় অক্ষরে নাম</span>
              <span>: </span>
              <div className="flex-1 border-b-[1.5px] border-dotted border-gray-600 px-2 font-bold uppercase">
                {staffData.name}
              </div>
              <span className="ml-4 w-24">জাতীয়তা : </span>
              <div className="w-48 border-b-[1.5px] border-dotted border-gray-600 px-2 font-medium">
                বাংলাদেশী
              </div>
            </div>

            <div className="flex">
              <span className="w-10">৩।</span>
              <span className="w-36">পিতার নাম</span>
              <span>: </span>
              <div className="flex-1 border-b-[1.5px] border-dotted border-gray-600 px-2 font-medium">
                {staffData.fatherName}
              </div>
            </div>

            <div className="flex">
              <span className="w-10">৪।</span>
              <span className="w-36">মাতার নাম</span>
              <span>: </span>
              <div className="flex-1 border-b-[1.5px] border-dotted border-gray-600 px-2"></div>
            </div>

            <div className="flex items-center">
              <span className="w-10">৫।</span>
              <span className="w-36">শিক্ষাগত যোগ্যতা</span>
              <span>: </span>
              <div className="w-48 border-b-[1.5px] border-dotted border-gray-600 px-2"></div>
              <span className="ml-4">পাসের সাল : </span>
              <div className="w-24 border-b-[1.5px] border-dotted border-gray-600 px-2"></div>
              <div className="ml-4 flex items-center gap-4">
                <Checkbox label="পুরুষ" />
                <Checkbox label="মহিলা" />
              </div>
            </div>

            <div className="flex items-center">
              <span className="w-10">৬।</span>
              <span className="w-36">জন্ম তারিখ</span>
              <span>: </span>
              <div className="w-40 border-b-[1.5px] border-dotted border-gray-600 px-2 text-center">
                /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/
              </div>
              <span className="ml-2">ইং</span>
              <div className="ml-4 flex items-center gap-2 text-xs">
                <Checkbox label="জাতীয় পরিচয় পত্র" />
                <Checkbox label="জন্ম নিবন্ধন পত্র" />
                <Checkbox label="শিক্ষা সনদ" />
              </div>
            </div>

            <div className="flex items-center">
              <span className="w-10">৭।</span>
              <span className="w-40">চিহ্ন টিকমার্ক দেওয়া নাম্বার</span>
              <span>: </span>
              <div className="flex-1 border-b-[1.5px] border-dotted border-gray-600 px-2"></div>
              <span className="ml-4">রক্তের গ্রুপ : </span>
              <div className="w-32 border-b-[1.5px] border-dotted border-gray-600 px-2"></div>
            </div>

            <div className="flex items-center">
              <span className="w-10">৮।</span>
              <span className="w-36">বৈবাহিক অবস্থা</span>
              <span>: </span>
              <div className="flex items-center gap-4 mr-4">
                <Checkbox label="অবিবাহিত" />
                <Checkbox label="বিবাহিত" />
              </div>
              <span>সন্তান সংখ্যা : </span>
              <div className="w-24 border-b-[1.5px] border-dotted border-gray-600 px-2"></div>
              <span className="ml-4">ধর্ম : </span>
              <div className="flex-1 border-b-[1.5px] border-dotted border-gray-600 px-2"></div>
            </div>

            <div className="flex">
              <span className="w-10">৯।</span>
              <span className="w-36">স্বামী/স্ত্রীর নাম</span>
              <span>: </span>
              <div className="flex-1 border-b-[1.5px] border-dotted border-gray-600 px-2"></div>
            </div>
          </div>

          {/* Address Table */}
          <div className="mb-4">
            <table className="w-full border-collapse border border-black text-[13px] text-center table-fixed">
              <thead>
                <tr>
                  <th className="border border-black py-2 w-1/2 font-bold text-[15px]">
                    বর্তমান ঠিকানা
                  </th>
                  <th className="border border-black py-2 w-1/2 font-bold text-[15px]">
                    স্থায়ী ঠিকানা
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black p-0 align-top">
                    <div className="flex border-b border-black min-h-[36px]">
                      <div className="w-1/3 border-r border-black p-2 text-left font-medium flex items-center">
                        বাড়ির মালিকের নাম
                      </div>
                      <div className="w-2/3 p-2 text-left"></div>
                    </div>
                    <div className="flex border-b border-black min-h-[36px]">
                      <div className="w-1/3 border-r border-black p-2 text-left font-medium flex items-center">
                        বাসা/ রোড নং
                      </div>
                      <div className="w-2/3 p-2 text-left font-medium flex items-center">
                        {staffData.currentStreetAddress}
                      </div>
                    </div>
                    <div className="flex border-b border-black min-h-[36px]">
                      <div className="w-1/3 border-r border-black p-2 text-left font-medium flex items-center">
                        মহল্লা/ পাড়ার নাম
                      </div>
                      <div className="w-2/3 p-2 text-left"></div>
                    </div>
                    <div className="flex border-b border-black min-h-[36px]">
                      <div className="w-1/3 border-r border-black p-2 text-left font-medium flex items-center">
                        থানা
                      </div>
                      <div className="w-2/3 p-2 text-left font-medium flex items-center">
                        {staffData.currentPoliceStation}
                      </div>
                    </div>
                    <div className="flex min-h-[36px]">
                      <div className="w-1/3 border-r border-black p-2 text-left font-medium flex items-center">
                        জেলা
                      </div>
                      <div className="w-2/3 p-2 text-left font-medium flex items-center">
                        {staffData.currentDistrict}
                      </div>
                    </div>
                  </td>
                  <td className="border border-black p-0 align-top">
                    <div className="flex border-b border-black min-h-[36px]">
                      <div className="w-1/3 border-r border-black p-2 text-left font-medium flex items-center">
                        গ্রামের নাম
                      </div>
                      <div className="w-2/3 p-2 text-left"></div>
                    </div>
                    <div className="flex border-b border-black min-h-[36px]">
                      <div className="w-1/3 border-r border-black p-2 text-left font-medium flex items-center">
                        বাড়ীর নাম
                      </div>
                      <div className="w-2/3 p-2 text-left font-medium flex items-center">
                        {staffData.permanentStreetAddress}
                      </div>
                    </div>
                    <div className="flex border-b border-black min-h-[36px]">
                      <div className="w-1/3 border-r border-black p-2 text-left font-medium flex items-center">
                        পোস্টঅফিস
                      </div>
                      <div className="w-2/3 p-2 text-left font-medium flex items-center">
                        {staffData.permanentPostOffice}
                      </div>
                    </div>
                    <div className="flex border-b border-black min-h-[36px]">
                      <div className="w-1/3 border-r border-black p-2 text-left font-medium flex items-center">
                        থানা
                      </div>
                      <div className="w-2/3 p-2 text-left font-medium flex items-center">
                        {staffData.permanentPoliceStation}
                      </div>
                    </div>
                    <div className="flex min-h-[36px]">
                      <div className="w-1/3 border-r border-black p-2 text-left font-medium flex items-center">
                        জেলা
                      </div>
                      <div className="w-2/3 p-2 text-left font-medium flex items-center">
                        {staffData.permanentDistrict}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center mb-3">
            <span className="w-10">১০।</span>
            <span>পূর্ব অভিজ্ঞতা : </span>
            <div className="flex items-center gap-4 mx-4">
              <Checkbox
                label="আছে"
                checked={
                  staffData.hasRepairExperience ||
                  staffData.hasInstallationExperience
                }
              />
              <Checkbox
                label="নাই"
                checked={
                  !staffData.hasRepairExperience &&
                  !staffData.hasInstallationExperience
                }
              />
            </div>
            <span>মাস </span>
            <div className="w-24 border-b-[1.5px] border-dotted border-gray-600 px-2 text-center font-bold">
              {staffData.repairExperienceYears
                ? staffData.repairExperienceYears * 12
                : ""}
            </div>
            <span>/ বছরের : </span>
            <div className="w-24 border-b-[1.5px] border-dotted border-gray-600 px-2 text-center font-bold">
              {staffData.repairExperienceYears || ""}
            </div>
          </div>

          {/* Experience Table */}
          <div className="mb-4">
            <table className="w-full border-collapse border border-black text-[13px] text-center">
              <thead>
                <tr>
                  <th className="border border-black py-2 w-12 font-medium">
                    ক্র :
                  </th>
                  <th className="border border-black py-2 w-1/4 font-medium">
                    কোম্পানীর নাম
                  </th>
                  <th className="border border-black py-2 w-1/5 font-medium">
                    ডিপার্টমেন্ট
                  </th>
                  <th className="border border-black py-2 w-1/5 font-medium">
                    পদবী
                  </th>
                  <th className="border border-black py-2 w-1/6 font-medium">
                    বেতন
                  </th>
                  <th className="border border-black py-2 font-medium">
                    চাকুরি কাল
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-10">
                  <td className="border border-black text-left pl-2">ক)</td>
                  <td className="border border-black"></td>
                  <td className="border border-black"></td>
                  <td className="border border-black"></td>
                  <td className="border border-black"></td>
                  <td className="border border-black"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center">
              <span className="w-10">১১।</span>
              <span>আপনার নামে কোন থানায় বা আদালতে কোন মামলা আছে কি?</span>
              <div className="flex items-center gap-4 ml-6">
                <Checkbox label="হ্যাঁ" />
                <Checkbox label="না" />
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-y-2">
              <span className="w-10">১২।</span>
              <span>দুর্ঘটনা/জরুরি প্রয়োজনে যোগাযোগ : নাম </span>
              <div className="flex-1 border-b-[1.5px] border-dotted border-gray-600 px-2 min-w-[150px]"></div>
              <span className="ml-2">সম্পর্ক </span>
              <div className="flex-1 border-b-[1.5px] border-dotted border-gray-600 px-2 min-w-[100px]"></div>
              <span className="ml-2">ফোন : </span>
              <div className="flex-1 border-b-[1.5px] border-dotted border-gray-600 px-2 min-w-[150px]"></div>
            </div>

            <div className="flex items-center flex-wrap gap-y-2">
              <span className="w-10">১৩।</span>
              <span>এস ই বিডি এর চাকুরী পদবী : </span>
              <div className="flex-1 border-b-[1.5px] border-dotted border-gray-600 px-2 min-w-[150px] font-bold text-center">
                {staffData.role}
              </div>
              <span className="ml-2">কর্মস্থান জেলা : </span>
              <div className="flex-1 border-b-[1.5px] border-dotted border-gray-600 px-2 min-w-[100px]"></div>
              <span className="ml-2">থানা : </span>
              <div className="flex-1 border-b-[1.5px] border-dotted border-gray-600 px-2 min-w-[100px]"></div>
            </div>
          </div>

          {/* Declarations */}
          <div className="text-[12px] leading-[1.6] mb-6 relative pl-6 space-y-1">
            <div className="absolute left-0 top-[2px]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <circle cx="12" cy="12" r="10" strokeDasharray="3 3"></circle>
              </svg>
            </div>
            <p>
              আমি এই মর্মে ঘোষণা করিতেছি যে, আমার জানামতে উপরোক্ত তথ্যাবলি
              নির্ভুল ও সত্য। আমি জ্ঞানত কোন তথ্য গোপন করি নাই।
            </p>

            <div className="absolute left-0 top-[26px]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <circle cx="12" cy="12" r="10" strokeDasharray="3 3"></circle>
              </svg>
            </div>
            <p>
              যদি আমি ভবিষ্যতে আমার বিরুদ্ধে ভুল তথ্য দাখিল কিংবা প্রধান
              সম্পর্কিত কোন ধরনের অভিযোগ পাওয়া যায়, তাহলে এস ই বিডি কর্তৃপক্ষ
              আমার বিরুদ্ধে যথাযথ ব্যবস্থা
              <br />
              গ্রহণ করিতে পারিবে এবং এতে আমার কোন আপত্তি থাকবেনা। আমি কোন আপত্তি
              করিলে সর্বস্তুর আদালতে তাহা অগ্রাহ্য বলিয়া গন্য হইবে।
            </p>

            <div className="absolute left-0 top-[72px]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <circle cx="12" cy="12" r="10" strokeDasharray="3 3"></circle>
              </svg>
            </div>
            <p>
              আমার বর্তমান ঠিকানা পরিবর্তন হলে পরিবর্তীত নতুন ঠিকানা পরবর্তী ০৩
              দিনের মধ্যে লিখিতভাবে এস ই বিডির প্রশাসনিক বিভাগে জানাতে বাধ্য
              থাকব।
            </p>
          </div>

          <div className="mb-6">
            <span>তারিখ: </span>
            <DottedLine width="150px" />
          </div>

          {/* Signatures */}
          <div className="flex justify-between items-end text-xs font-medium text-center mb-2">
            <div className="w-[140px]">
              <div className="border-t border-black pt-2">
                সিলমোহর যুক্ত
                <br />
                এস ই বিডি চেয়ারম্যানের স্বাক্ষর
              </div>
            </div>
            <div className="w-[140px]">
              <div className="border-t border-black pt-2">
                সিলমোহর যুক্ত
                <br />
                অফিস সহকারির স্বাক্ষর
              </div>
            </div>
            <div className="w-[120px]">
              <div className="border-t border-black pt-2">
                প্রার্থীর স্বাক্ষর
              </div>
            </div>
            <div className="w-[100px]">
              <div className="border border-black h-[60px] mb-2"></div>
              <div className="border-t border-black pt-2">টিপসহি</div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-[10px] border border-black p-2 mt-2 leading-tight font-medium">
            * জমা দিতে হবে ১) ক) জাতীয় পরিচয় পত্র/জন্ম নিবন্ধন [ফটোকপি] খ)
            চারিত্রিক সনদ পত্র [ফটোকপি] গ) ০৩ কপি রঙ্গিন পাসপোর্ট ছবি ঘ)
            শিক্ষাগত সনদ [ফটোকপি] ঙ) দক্ষতা সনদ [প্রযোজ্য ক্ষেত্রে] চ) নমিনির ০১
            কপি রঙ্গিন পাসপোর্ট সাইজ ছবি ছ) বর্তমান ঠিকানার এলাকায় কমিশনারের সনদ
            পত্র।
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media print {
          @page {
            size: A4 portrait;
            margin: 5mm;
          }
          body {
            background-color: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          body * {
            visibility: hidden;
          }
          #staff-resume, #staff-resume * {
            visibility: visible;
          }
          #staff-resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `,
        }}
      />
    </div>
  );
}
