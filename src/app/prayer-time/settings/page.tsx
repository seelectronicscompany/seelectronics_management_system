"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PrayerTimeSettingsPage() {
  const router = useRouter();

  const [showFeature, setShowFeature] = useState(true);
  const [ramadanMode, setRamadanMode] = useState(true);
  const [district, setDistrict] = useState("লোড হচ্ছে...");
  const [madhab, setMadhab] = useState("hanafi");
  const [method, setMethod] = useState("karachi");

  useEffect(() => {
    if (typeof navigator !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          try {
            const res = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=bn`,
            );
            const data = await res.json();
            setDistrict(data.city || data.locality || "আপনার অবস্থান");
          } catch (e) {
            setDistrict("বর্তমান অবস্থান");
          }
        },
        (error) => {
          setDistrict("ঢাকা");
        },
      );
    } else {
      setDistrict("ঢাকা");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* ── Top Bar ── */}
      <div className="bg-brand text-white px-4 py-4 flex items-center sticky top-0 z-50">
        <button onClick={() => router.back()} className="mr-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-medium mx-auto -ml-2 text-center w-full">
          সেটিংস
        </h1>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {/* ── Show Feature Toggle ── */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 flex justify-between items-center shadow-sm">
          <span className="text-gray-800 font-medium">
            নামাজ ও রোজা ফিচারটি দেখুন
          </span>
          <button
            onClick={() => setShowFeature(!showFeature)}
            className={`w-[46px] h-[26px] rounded-full flex items-center transition-colors px-[3px] ${showFeature ? "bg-brand" : "bg-gray-300"}`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform ${showFeature ? "translate-x-5" : "translate-x-0"}`}
            />
          </button>
        </div>

        {/* ── District Selection ── */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-4 py-2 border-b border-gray-100 bg-gray-50/50">
            <span className="text-gray-600 text-[13px] font-medium">জেলা</span>
          </div>
          <div className="p-4 flex justify-between items-center">
            <span className="text-gray-800 text-[20px] font-semibold">
              {district}
            </span>
            <MapPin size={24} className="text-brand" />
          </div>
        </div>

        {/* ── Ramadan Mode Toggle ── */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 flex justify-between items-center shadow-sm">
          <div>
            <span className="text-gray-800 font-medium block">রমজান মোড</span>
            <span className="text-gray-500 text-[13px] mt-1 block">
              এর মাধ্যমে রমজানে সময়সূচি দেখা যাবে
            </span>
          </div>
          <button
            onClick={() => setRamadanMode(!ramadanMode)}
            className={`w-[46px] h-[26px] rounded-full flex items-center transition-colors px-[3px] ${ramadanMode ? "bg-brand" : "bg-gray-300"}`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform ${ramadanMode ? "translate-x-5" : "translate-x-0"}`}
            />
          </button>
        </div>

        {/* ── Madhab Selection ── */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
            <span className="text-gray-700 text-[14px] font-medium">
              মাজহাব বেছে নিন
            </span>
          </div>
          <div className="flex flex-col">
            <label className="flex items-center gap-3 p-4 border-b border-gray-100 cursor-pointer">
              <div
                className={`w-5 h-5 rounded-full border-[2px] flex items-center justify-center ${madhab === "hanafi" ? "border-brand" : "border-gray-400"}`}
              >
                {madhab === "hanafi" && (
                  <div className="w-2.5 h-2.5 bg-brand rounded-full" />
                )}
              </div>
              <span className="text-gray-800">হানাফি</span>
              <input
                type="radio"
                className="hidden"
                checked={madhab === "hanafi"}
                onChange={() => setMadhab("hanafi")}
              />
            </label>
            <label className="flex items-center gap-3 p-4 cursor-pointer">
              <div
                className={`w-5 h-5 rounded-full border-[2px] flex items-center justify-center ${madhab === "other" ? "border-brand" : "border-gray-400"}`}
              >
                {madhab === "other" && (
                  <div className="w-2.5 h-2.5 bg-brand rounded-full" />
                )}
              </div>
              <span className="text-gray-800">শাফিঈ, মালেকি, হাম্বলি</span>
              <input
                type="radio"
                className="hidden"
                checked={madhab === "other"}
                onChange={() => setMadhab("other")}
              />
            </label>
          </div>
        </div>

        {/* ── Calculation Method ── */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
            <span className="text-gray-700 text-[14px] font-medium">
              নামাজের সময় নির্বাচন পদ্ধতি বেছে নিন
            </span>
          </div>
          <div className="flex flex-col">
            <label className="flex items-center gap-3 p-4 border-b border-gray-100 cursor-pointer">
              <div
                className={`w-5 h-5 rounded-full border-[2px] flex items-center justify-center ${method === "karachi" ? "border-brand" : "border-gray-400"}`}
              >
                {method === "karachi" && (
                  <div className="w-2.5 h-2.5 bg-brand rounded-full" />
                )}
              </div>
              <span className="text-gray-800">
                ইসলামিক বিজ্ঞান বিশ্ববিদ্যালয়, করাচি
              </span>
              <input
                type="radio"
                className="hidden"
                checked={method === "karachi"}
                onChange={() => setMethod("karachi")}
              />
            </label>
            <label className="flex items-center gap-3 p-4 border-b border-gray-100 cursor-pointer">
              <div
                className={`w-5 h-5 rounded-full border-[2px] flex items-center justify-center ${method === "mwl" ? "border-brand" : "border-gray-400"}`}
              >
                {method === "mwl" && (
                  <div className="w-2.5 h-2.5 bg-brand rounded-full" />
                )}
              </div>
              <span className="text-gray-800">মুসলিম বিশ্ব লিগ</span>
              <input
                type="radio"
                className="hidden"
                checked={method === "mwl"}
                onChange={() => setMethod("mwl")}
              />
            </label>
            <label className="flex items-center gap-3 p-4 cursor-pointer">
              <div
                className={`w-5 h-5 rounded-full border-[2px] flex items-center justify-center ${method === "isna" ? "border-brand" : "border-gray-400"}`}
              >
                {method === "isna" && (
                  <div className="w-2.5 h-2.5 bg-brand rounded-full" />
                )}
              </div>
              <span className="text-gray-800">
                ইসলামিক সোসাইটি অফ নর্থ আমেরিকা
              </span>
              <input
                type="radio"
                className="hidden"
                checked={method === "isna"}
                onChange={() => setMethod("isna")}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
