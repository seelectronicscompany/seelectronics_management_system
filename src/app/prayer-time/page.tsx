"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MapPin,
  ChevronDown,
  Settings,
  Sun,
  Sunset,
  Moon,
  BellOff,
  Compass,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PrayerTimings {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Sunrise: string;
}

type PrayerName = "Fajr" | "Dhuhr" | "Asr" | "Maghrib" | "Isha";

const prayerBangla: Record<PrayerName, string> = {
  Fajr: "ফজর",
  Dhuhr: "যোহর",
  Asr: "আসর",
  Maghrib: "মাগরিব",
  Isha: "এশা",
};

// ─── Utility functions ────────────────────────────────────────────────────────

const formatTime = (t: string) => {
  if (!t) return "";
  const [h, m] = t.split(":");
  let hour = Number(h);
  const isPM = hour >= 12;
  hour = hour % 12 || 12;
  return `${hour}:${m} ${isPM ? "PM" : "AM"}`;
};

const getEnglishDateFormatted = (d: Date): string => {
  const months = [
    "জানুয়ারি",
    "ফেব্রুয়ারি",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর",
  ];
  const isToday = new Date().toDateString() === d.toDateString();
  return `${isToday ? "আজ, " : ""}${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
};

async function fetchHijriDate(d: Date): Promise<string> {
  try {
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    const res = await fetch(
      `https://api.aladhan.com/v1/gToH/${dd}-${mm}-${yyyy}`,
    );
    const data = await res.json();
    if (data.code === 200) {
      const h = data.data.hijri;
      return `${h.month.ar} ${h.day}, ${h.year} হিজরি`;
    }
  } catch (_) {}
  return "";
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PrayerTimePage() {
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [timings, setTimings] = useState<PrayerTimings | null>(null);
  const [location, setLocation] = useState("লোড হচ্ছে...");
  const [coords, setCoords] = useState({ lat: 23.6238, lng: 90.5 });
  const [hijriDate, setHijriDate] = useState("");

  const [currentPrayer, setCurrentPrayer] = useState<string>("Fajr");
  const [nextPrayerName, setNextPrayerName] = useState<string>("Fajr");
  const [timeLeft, setTimeLeft] = useState("");
  const [sahriTimeLeft, setSahriTimeLeft] = useState("");

  const [reminderAll, setReminderAll] = useState(false);

  // Get user location
  useEffect(() => {
    if (typeof navigator !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setCoords({ lat, lng });
          try {
            const res = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=bn`,
            );
            const data = await res.json();
            const locName = data.city || data.locality || "আপনার অবস্থান";
            setLocation(`${locName}, ${data.countryName || "বাংলাদেশ"}`);
          } catch (e) {
            setLocation("বর্তমান অবস্থান");
          }
        },
        (error) => {
          console.log(
            "Geolocation error or denied, falling back to default.",
            error,
          );
          setLocation("ঢাকা, বাংলাদেশ");
        },
      );
    }
  }, []);

  // Fetch data on date change
  useEffect(() => {
    const fetchAll = async () => {
      const dd = String(selectedDate.getDate()).padStart(2, "0");
      const mm = String(selectedDate.getMonth() + 1).padStart(2, "0");
      const yyyy = selectedDate.getFullYear();

      const res = await fetch(
        `https://api.aladhan.com/v1/timings/${dd}-${mm}-${yyyy}?latitude=${coords.lat}&longitude=${coords.lng}&method=1&timezonestring=Asia/Dhaka`,
      );
      const data = await res.json();
      if (data.code === 200) {
        setTimings(data.data.timings);
      }

      const hDate = await fetchHijriDate(selectedDate);
      setHijriDate(hDate);
    };
    fetchAll();
  }, [selectedDate, coords]);

  // Countdowns
  useEffect(() => {
    if (!timings) return;

    // We calculate countdowns based on today's timings (even if viewing a future date, we usually countdown to today's prayers, but for simplicity, let's use the fetched timings for the countdowns on this page as well).
    const interval = setInterval(() => {
      const now = new Date();
      const order: (PrayerName | "Sunrise")[] = [
        "Fajr",
        "Sunrise",
        "Dhuhr",
        "Asr",
        "Maghrib",
        "Isha",
      ];
      const prayerTimes = order.map((name) => {
        const [h, m] = timings[name].split(":");
        const d = new Date(selectedDate); // use selected date base
        d.setHours(Number(h), Number(m), 0, 0);
        return { name, time: d };
      });

      let current: string = "Isha";
      let next: { name: string; time: Date } | null = null;

      for (let i = 0; i < prayerTimes.length; i++) {
        if (now < prayerTimes[i].time) {
          current = i === 0 ? "Isha" : prayerTimes[i - 1].name;
          next = prayerTimes[i];
          break;
        }
      }

      if (!next) {
        current = "Isha";
        next = {
          ...prayerTimes[0],
          time: new Date(prayerTimes[0].time.getTime() + 86400000),
        };
      }

      setCurrentPrayer(current);
      setNextPrayerName(next.name);

      // Next Prayer Countdown
      let diff = next.time.getTime() - now.getTime();
      if (diff < 0) diff = 0;
      let h = Math.floor(diff / (1000 * 60 * 60));
      let m = Math.floor((diff / (1000 * 60)) % 60);
      let s = Math.floor((diff / 1000) % 60);
      setTimeLeft(
        `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`,
      );

      // Sahri Countdown (Fajr time is end of Sahri)
      const fajrTimeObj = prayerTimes.find((pt) => pt.name === "Fajr")!;
      let fajrTarget = fajrTimeObj.time;
      if (now > fajrTarget) {
        // If Fajr passed today, Sahri is tomorrow
        fajrTarget = new Date(fajrTarget.getTime() + 86400000);
      }
      let sDiff = fajrTarget.getTime() - now.getTime();
      let sh = Math.floor(sDiff / (1000 * 60 * 60));
      let sm = Math.floor((sDiff / (1000 * 60)) % 60);
      let ss = Math.floor((sDiff / 1000) % 60);
      setSahriTimeLeft(
        `${String(sh).padStart(2, "0")}:${String(sm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`,
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [timings, selectedDate]);

  const changeDate = (days: number) => {
    const d = new Date(selectedDate);
    d.setDate(d.getDate() + days);
    setSelectedDate(d);
  };

  const getEndTime = (prayer: PrayerName) => {
    if (!timings) return "";
    switch (prayer) {
      case "Fajr":
        return formatTime(timings.Sunrise);
      case "Dhuhr":
        return formatTime(timings.Asr);
      case "Asr":
        return formatTime(timings.Maghrib);
      case "Maghrib":
        return formatTime(timings.Isha);
      case "Isha":
        return formatTime(timings.Fajr); // simplistic
    }
  };

  const prayers: PrayerName[] = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

  const prayerIcons: Record<PrayerName, React.ReactNode> = {
    Fajr: <Moon size={22} className="text-brand" fill="currentColor" />,
    Dhuhr: <Sun size={22} className="text-brand" />,
    Asr: <Sunset size={22} className="text-brand" />,
    Maghrib: <Sunset size={22} className="text-brand" fill="currentColor" />,
    Isha: <Moon size={22} className="text-brand" />,
  };

  if (!timings) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-gray-500">লোড হচ্ছে...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* ── Top Bar ── */}
      <div className="bg-brand text-white px-4 py-4 flex items-center sticky top-0 z-50">
        <button onClick={() => router.back()} className="mr-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-medium mx-auto -ml-2 text-center w-full">
          বিস্তারিত
        </h1>
      </div>

      <div className="bg-white">
        {/* ── Date Navigator ── */}
        <div className="px-4 py-4 flex justify-between items-center border-b border-gray-100">
          <div>
            <p className="text-gray-900 font-bold text-[16px]">
              {getEnglishDateFormatted(selectedDate)}
            </p>
            <p className="text-gray-500 text-[13px] mt-1">{hijriDate}</p>
          </div>
          <div className="flex gap-4 text-gray-500">
            <button onClick={() => changeDate(-1)}>
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => changeDate(1)}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* ── Location & Settings ── */}
        <div className="px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-1 text-gray-800 font-medium">
            <MapPin size={18} className="text-brand" />
            <span>{location}</span>
            <ChevronDown size={18} className="text-gray-400" />
          </div>
          <Link
            href="/prayer-time/settings"
            className="flex items-center gap-1 text-brand font-medium"
          >
            <Settings size={18} />
            <span>সেটিংস</span>
          </Link>
        </div>

        {/* ── Fasting Info ── */}
        <div className="px-4 flex gap-3 mb-4">
          <div className="flex-1 border border-gray-100 rounded-lg p-3 text-center">
            <span className="text-gray-600 text-[13px]">পরবর্তী সাহরি </span>
            <span className="text-gray-800 font-semibold text-[13px]">
              {formatTime(timings.Fajr)}
            </span>
          </div>
          <div className="flex-1 border border-gray-100 rounded-lg p-3 text-center">
            <span className="text-gray-600 text-[13px]">আজ ইফতার </span>
            <span className="text-gray-800 font-semibold text-[13px]">
              {formatTime(timings.Maghrib)}
            </span>
          </div>
        </div>

        {/* ── Countdowns ── */}
        <div className="px-4 flex gap-3 mb-4">
          <div className="flex-1 bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center text-center border border-gray-100">
            <p className="text-gray-800 font-medium text-[14px] mb-2">
              সাহরির শেষ সময়
            </p>
            <div className="bg-red-50 text-red-500 px-3 py-1 rounded-full text-[13px] font-semibold">
              {sahriTimeLeft} মিনিট
            </div>
          </div>
          <div className="flex-1 bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center text-center border border-gray-100">
            <p className="text-gray-800 font-medium text-[14px] mb-1">
              পরবর্তী :{" "}
              {nextPrayerName === "Sunrise"
                ? "সূর্যোদয়"
                : prayerBangla[nextPrayerName as PrayerName] || nextPrayerName}
            </p>
            <p className="text-gray-500 text-[12px] mb-2">ওয়াক্ত শুরু</p>
            <div className="bg-white text-gray-800 px-3 py-1 rounded-full text-[13px] font-medium border border-gray-100 shadow-sm">
              {nextPrayerName === "Sunrise"
                ? formatTime(timings.Sunrise)
                : formatTime(timings[nextPrayerName as PrayerName])}{" "}
              মিনিটে
            </div>
          </div>
        </div>

        {/* ── Sun Times ── */}
        <div className="px-4 pb-4 flex justify-center gap-6 border-b border-gray-100">
          <div className="flex items-center gap-2 text-[13px] text-gray-700 font-medium">
            <Sun size={18} className="text-yellow-500" />
            <span>সূর্যোদয় {formatTime(timings.Sunrise)}</span>
          </div>
          <div className="flex items-center gap-2 text-[13px] text-gray-700 font-medium">
            <Sunset size={18} className="text-green-500" />
            <span>সূর্যাস্ত {formatTime(timings.Maghrib)}</span>
          </div>
        </div>

        {/* ── Qibla Link ── */}
        <div className="px-4 py-4 flex justify-between items-center border-b border-gray-100 cursor-pointer hover:bg-gray-50">
          <div className="flex items-center gap-3 text-gray-800 font-medium">
            <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center">
              <Compass size={18} className="text-brand" />
            </div>
            <span>কিবলা খুঁজুন</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
      </div>

      {/* ── Prayer Schedule ── */}
      <div className="mt-4 bg-white pt-4 pb-2">
        <h2 className="px-4 text-gray-800 font-medium mb-4">নামাজের সময়সূচি</h2>

        <div className="px-4 mb-4">
          <div className="flex justify-between items-center bg-gray-50 border border-gray-100 rounded-xl p-3 px-4">
            <span className="text-gray-700 font-medium text-[14px]">
              সকল নামাজের রিমাইন্ডার
            </span>
            <button
              onClick={() => setReminderAll(!reminderAll)}
              className={`w-11 h-6 rounded-full flex items-center transition-colors px-1 ${reminderAll ? "bg-brand" : "bg-gray-300"}`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform ${reminderAll ? "translate-x-5" : "translate-x-0"}`}
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          {prayers.map((p) => {
            return (
              <div
                key={p}
                className="flex justify-between items-center px-4 py-4 border-b border-gray-50 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  {prayerIcons[p]}
                  <div>
                    <p className="text-gray-900 font-medium">
                      {prayerBangla[p]}
                    </p>
                    <p className="text-gray-500 text-[12px] mt-0.5">
                      {formatTime(timings[p])} - {getEndTime(p)}
                    </p>
                  </div>
                </div>
                <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-brand transition-colors">
                  <BellOff size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
