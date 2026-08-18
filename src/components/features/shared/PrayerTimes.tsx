"use client";

import React, { useEffect, useState } from "react";
import { MapPin, Moon, Sun, Sunset, Sunrise, Clock, ChevronDown, Coffee } from "lucide-react";
import Link from "next/link";

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

const prayerIcons: Record<PrayerName, React.ReactNode> = {
  Fajr: <Moon size={17} />,
  Dhuhr: <Sun size={17} />,
  Asr: <Sunset size={17} />,
  Maghrib: <Sunset size={17} />,
  Isha: <Moon size={17} />,
};

const prayerIconBg: Record<PrayerName, string> = {
  Fajr: "#1a3c5e",
  Dhuhr: "#e67e00",
  Asr: "#c05a00",
  Maghrib: "#7b3f00",
  Isha: "#2c1a5e",
};

const bdLocations: Record<string, { name: string; lat: number; lng: number }[]> = {
  "ঢাকা": [
    { name: "ঢাকা", lat: 23.8103, lng: 90.4125 },
    { name: "নারায়ণগঞ্জ", lat: 23.6238, lng: 90.5000 },
    { name: "গাজীপুর", lat: 23.9999, lng: 90.4203 },
    { name: "মুন্সিগঞ্জ", lat: 23.5422, lng: 90.5305 },
    { name: "মানিকগঞ্জ", lat: 23.8617, lng: 89.9184 },
    { name: "নরসিংদী", lat: 23.9322, lng: 90.7156 },
    { name: "ফরিদপুর", lat: 23.6070, lng: 89.8429 },
    { name: "গোপালগঞ্জ", lat: 23.0050, lng: 89.8266 },
    { name: "মাদারীপুর", lat: 23.1641, lng: 90.1890 },
    { name: "শরীয়তপুর", lat: 23.2423, lng: 90.4348 },
    { name: "রাজবাড়ী", lat: 23.7574, lng: 89.6440 },
    { name: "কিশোরগঞ্জ", lat: 24.4449, lng: 90.7766 },
    { name: "টাঙ্গাইল", lat: 24.2513, lng: 89.9167 },
  ],
  "চট্টগ্রাম": [
    { name: "চট্টগ্রাম", lat: 22.3569, lng: 91.7832 },
    { name: "কক্সবাজার", lat: 21.4272, lng: 92.0058 },
    { name: "রাঙ্গামাটি", lat: 22.7324, lng: 92.2985 },
    { name: "বান্দরবান", lat: 22.1953, lng: 92.2184 },
    { name: "খাগড়াছড়ি", lat: 23.1193, lng: 91.9847 },
    { name: "কুমিল্লা", lat: 23.4607, lng: 91.1809 },
    { name: "ফেনী", lat: 23.0236, lng: 91.3841 },
    { name: "লক্ষ্মীপুর", lat: 22.9447, lng: 90.8282 },
    { name: "নোয়াখালী", lat: 22.8696, lng: 91.0995 },
    { name: "চাঁদপুর", lat: 23.2333, lng: 90.6713 },
    { name: "ব্রাহ্মণবাড়িয়া", lat: 23.9571, lng: 91.1111 },
  ],
  "সিলেট": [
    { name: "সিলেট", lat: 24.8949, lng: 91.8687 },
    { name: "মৌলভীবাজার", lat: 24.4829, lng: 91.7774 },
    { name: "হবিগঞ্জ", lat: 24.3740, lng: 91.4155 },
    { name: "সুনামগঞ্জ", lat: 25.0658, lng: 91.3950 },
  ],
  "রাজশাহী": [
    { name: "রাজশাহী", lat: 24.3742, lng: 88.6014 },
    { name: "নওগাঁ", lat: 24.1976, lng: 88.2636 },
    { name: "নাটোর", lat: 24.4206, lng: 89.0000 },
    { name: "চাঁপাইনবাবগঞ্জ", lat: 24.5965, lng: 88.2775 },
    { name: "পাবনা", lat: 24.0064, lng: 89.2372 },
    { name: "বগুড়া", lat: 24.8481, lng: 89.3720 },
    { name: "জয়পুরহাট", lat: 25.0968, lng: 89.0227 },
    { name: "সিরাজগঞ্জ", lat: 24.4534, lng: 89.7000 },
  ],
  "খুলনা": [
    { name: "খুলনা", lat: 22.8456, lng: 89.5403 },
    { name: "যশোর", lat: 23.1667, lng: 89.2167 },
    { name: "সাতক্ষীরা", lat: 22.7185, lng: 89.0705 },
    { name: "বাগেরহাট", lat: 22.6516, lng: 89.7851 },
    { name: "ঝিনাইদহ", lat: 23.5448, lng: 89.1539 },
    { name: "মাগুরা", lat: 23.4855, lng: 89.4198 },
    { name: "নড়াইল", lat: 23.1727, lng: 89.5127 },
    { name: "কুষ্টিয়া", lat: 23.9013, lng: 89.1208 },
    { name: "চুয়াডাঙ্গা", lat: 23.6402, lng: 88.8418 },
    { name: "মেহেরপুর", lat: 23.7622, lng: 88.6318 },
  ],
  "বরিশাল": [
    { name: "বরিশাল", lat: 22.7010, lng: 90.3535 },
    { name: "পটুয়াখালী", lat: 22.3596, lng: 90.3299 },
    { name: "ভোলা", lat: 22.6859, lng: 90.6482 },
    { name: "পিরোজপুর", lat: 22.5791, lng: 89.9759 },
    { name: "বরগুনা", lat: 22.0953, lng: 90.1121 },
    { name: "ঝালকাঠি", lat: 22.6406, lng: 90.1987 },
  ],
  "রংপুর": [
    { name: "রংপুর", lat: 25.7439, lng: 89.2752 },
    { name: "দিনাজপুর", lat: 25.6279, lng: 88.6332 },
    { name: "ঠাকুরগাঁও", lat: 26.0337, lng: 88.4616 },
    { name: "পঞ্চগড়", lat: 26.3411, lng: 88.5542 },
    { name: "কুড়িগ্রাম", lat: 25.8072, lng: 89.6295 },
    { name: "গাইবান্ধা", lat: 25.3290, lng: 89.5426 },
    { name: "নীলফামারী", lat: 25.9310, lng: 88.8560 },
    { name: "লালমনিরহাট", lat: 25.9923, lng: 89.2847 },
  ],
  "ময়মনসিংহ": [
    { name: "ময়মনসিংহ", lat: 24.7471, lng: 90.4203 },
    { name: "জামালপুর", lat: 24.9375, lng: 89.9370 },
    { name: "শেরপুর", lat: 25.0201, lng: 90.0153 },
    { name: "নেত্রকোনা", lat: 24.8709, lng: 90.7279 },
  ],
};

// ─── Bangla (Bengali) Calendar ────────────────────────────────────────────────
function getBanglaDate(): string {
  const bnMonths = [
    "বৈশাখ", "জ্যৈষ্ঠ", "আষাঢ়", "শ্রাবণ", "ভাদ্র", "আশ্বিন",
    "কার্তিক", "অগ্রহায়ণ", "পৌষ", "মাঘ", "ফাল্গুন", "চৈত্র",
  ];

  const d = new Date();
  const gDay = d.getDate();
  const gMonth = d.getMonth() + 1; // 1-based
  const gYear = d.getFullYear();

  // Each Bangla month starts on these Gregorian day-of-month (approx)
  // [Gregorian month, start day of Bangla month]
  const monthMap: [number, number, number][] = [
    // [gregMonth, gregStartDay, bnMonthIndex]
    [4, 14, 0],  // বৈশাখ starts ~Apr 14
    [5, 15, 1],  // জ্যৈষ্ঠ
    [6, 15, 2],  // আষাঢ়
    [7, 16, 3],  // শ্রাবণ
    [8, 17, 4],  // ভাদ্র
    [9, 16, 5],  // আশ্বিন
    [10, 16, 6], // কার্তিক
    [11, 15, 7], // অগ্রহায়ণ
    [12, 15, 8], // পৌষ
    [1, 14, 9],  // মাঘ
    [2, 14, 10], // ফাল্গুন
    [3, 14, 11], // চৈত্র
  ];

  let bnMonthIdx = -1;
  let bnDay = 0;
  let bnYear = 0;

  for (let i = 0; i < monthMap.length; i++) {
    const [gm, gsd, bmi] = monthMap[i];
    const nextI = (i + 1) % monthMap.length;
    const [ngm, ngsd] = monthMap[nextI];

    const matchThisMonth = (gMonth === gm && gDay >= gsd);
    const matchNextMonth = (gMonth === ngm && gDay < ngsd);

    if (matchThisMonth || matchNextMonth) {
      bnMonthIdx = bmi;
      // Calculate day: if matchNextMonth, we need to know the days in gm
      if (matchThisMonth) {
        bnDay = gDay - gsd + 1;
      } else {
        // Approximate last month's length as 30 or 31
        // (Simplified for this component, better to use 30/31 check)
        const daysInLastMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][gm];
        bnDay = (daysInLastMonth - gsd + 1) + gDay;
      }
      bnYear = gYear - (gMonth < 4 || (gMonth === 4 && gDay < 14) ? 594 : 593);
      break;
    }
  }

  // fallback: if no match found, approximate
  if (bnMonthIdx === -1) {
    bnMonthIdx = 0;
    bnDay = 1;
    bnYear = gYear - 594;
  }

  return `${bnDay} ${bnMonths[bnMonthIdx]}, ${bnYear} বঙ্গাব্দ`;
}

// ─── English Date ─────────────────────────────────────────────────────────────
function getEnglishDate(): string {
  const d = new Date();
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}`;
}

// ─── Hijri Date via API ───────────────────────────────────────────────────────
async function fetchHijriDate(): Promise<string> {
  try {
    const d = new Date();
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    const res = await fetch(`https://api.aladhan.com/v1/gToH/${dd}-${mm}-${yyyy}`);
    const data = await res.json();
    if (data.code === 200) {
      const h = data.data.hijri;
      return `${h.day} ${h.month.ar}, ${h.year} هجري`;
    }
  } catch (_) {}
  return "";
}

// ─── Main Component ───────────────────────────────────────────────────────────
const PrayerTimes = () => {
  const [timings, setTimings] = useState<PrayerTimings | null>(null);
  const [location, setLocation] = useState("লোড হচ্ছে...");
  const [currentPrayer, setCurrentPrayer] = useState<string>("Fajr");
  const [timeLeft, setTimeLeft] = useState("");
  const [coords, setCoords] = useState({ lat: 23.6238, lng: 90.5000 });
  const [division, setDivision] = useState("ঢাকা");
  const [district, setDistrict] = useState("নারায়ণগঞ্জ");

  // Date states
  const [englishDate, setEnglishDate] = useState("");
  const [banglaDate, setBanglaDate] = useState("");
  const [hijriDate, setHijriDate] = useState("");

  // Init dates once
  useEffect(() => {
    setEnglishDate(getEnglishDate());
    setBanglaDate(getBanglaDate());
    fetchHijriDate().then((h) => setHijriDate(h));

    // Get user location
    if (typeof navigator !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setCoords({ lat, lng });
          try {
            const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=bn`);
            const data = await res.json();
            const locName = data.city || data.locality || "আপনার অবস্থান";
            setLocation(`${locName}, ${data.countryName || "বাংলাদেশ"}`);
          } catch (e) {
            setLocation("বর্তমান অবস্থান");
          }
        },
        (error) => {
          console.log("Geolocation error or denied, falling back to default.", error);
        }
      );
    }
  }, []);

  // Fetch prayer timings
  const fetchData = async (lat: number, lng: number) => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const res = await fetch(
      `https://api.aladhan.com/v1/timings/${dd}-${mm}-${yyyy}?latitude=${lat}&longitude=${lng}&method=1&timezonestring=Asia/Dhaka`
    );
    const data = await res.json();
    if (data.code === 200) setTimings(data.data.timings);
  };

  useEffect(() => {
    fetchData(coords.lat, coords.lng);
  }, [coords]);

  // Location change
  useEffect(() => {
    const selected = bdLocations[division]?.find((d) => d.name === district);
    if (selected) {
      setCoords({ lat: selected.lat, lng: selected.lng });
      setLocation(`${selected.name}, বাংলাদেশ`);
    }
  }, [division, district]);

  // Countdown & current prayer
  useEffect(() => {
    if (!timings) return;
    const interval = setInterval(() => {
      const now = new Date();
      const order: (PrayerName | "Sunrise")[] = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];
      const prayerTimes = order.map((name) => {
        const [h, m] = timings[name].split(":");
        const d = new Date();
        d.setHours(Number(h), Number(m), 0);
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
        next = { ...prayerTimes[0], time: new Date(prayerTimes[0].time.getTime() + 86400000) };
      }

      setCurrentPrayer(current);

      const diff = next.time.getTime() - now.getTime();
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTimeLeft(
        `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [timings]);

  const formatTime = (t: string) => {
    const [h, m] = t.split(":");
    let hour = Number(h);
    const isPM = hour >= 12;
    hour = hour % 12 || 12;
    return `${hour}:${m} ${isPM ? "PM" : "AM"}`;
  };

  const prayers: PrayerName[] = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

  const getEndTime = (prayer: PrayerName) => {
    if (!timings) return "";
    switch (prayer) {
      case "Fajr": return formatTime(timings.Sunrise);
      case "Dhuhr": return formatTime(timings.Asr);
      case "Asr": return formatTime(timings.Maghrib);
      case "Maghrib": return formatTime(timings.Isha);
      case "Isha": return formatTime(timings.Fajr);
    }
  };

  const [showLocationSelect, setShowLocationSelect] = useState(false);

  if (!timings) {
    return (
      <div className="max-w-sm mx-auto rounded-xl border overflow-hidden bg-white">
        <div className="p-4 text-gray-500 text-sm text-center">লোড হচ্ছে...</div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto rounded-xl border border-gray-200 overflow-hidden bg-white">
      {/* ── Header ── */}
      <div className="flex justify-between items-center px-4 pt-4 pb-3 border-b border-gray-100">
        <p className="text-gray-800 text-[15px] font-medium">নামাজ ও রোজা</p>
        <Link href="/prayer-time" className="text-brand text-[14px] font-medium hover:underline">
          বিস্তারিত
        </Link>
      </div>

      <div className="p-4">
        {/* ── Location & Date ── */}
        <div className="mb-4">
          <div 
            className="flex items-center gap-1 text-brand font-medium text-[16px] cursor-pointer mb-1 w-max"
            onClick={() => setShowLocationSelect(!showLocationSelect)}
          >
            <MapPin size={18} />
            <span>{location}</span>
            <ChevronDown size={18} />
          </div>
          <div className="text-[13px] text-gray-600">
            {banglaDate} • {hijriDate}
          </div>
        </div>

        {/* ── Division / District selects (Toggleable) ── */}
        {showLocationSelect && (
          <div className="flex gap-2 mb-4">
            <select
              value={division}
              onChange={(e) => {
                setDivision(e.target.value);
                setDistrict(bdLocations[e.target.value][0].name);
              }}
              className="flex-1 text-xs border rounded-lg px-2 py-[6px] bg-white text-gray-800 outline-none"
            >
              {Object.keys(bdLocations).map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="flex-1 text-xs border rounded-lg px-2 py-[6px] bg-white text-gray-800 outline-none"
            >
              {bdLocations[division].map((d) => (
                <option key={d.name}>{d.name}</option>
              ))}
            </select>
          </div>
        )}

        {/* ── Suhoor / Iftar Info ── */}
        <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-4">
          <div>
            <span className="text-gray-500 text-[14px]">পরবর্তী সাহরি </span>
            <span className="text-gray-800 font-medium text-[14px]">{formatTime(timings.Fajr)}</span>
          </div>
          <div>
            <span className="text-gray-500 text-[14px]">আজকের ইফতার </span>
            <span className="text-gray-800 font-medium text-[14px]">{formatTime(timings.Maghrib)}</span>
          </div>
        </div>

        {/* ── 2 Column Layout ── */}
        <div className="flex gap-3">
          {/* Left Column (Countdown) */}
          <div className="w-[40%] bg-[#f5f5f5] rounded-xl p-3 flex flex-col items-center justify-center text-center">
            <div className="text-brand mb-3 flex items-center justify-center relative">
               <Sun size={36} />
               <Moon size={18} className="absolute" />
            </div>
            <p className="text-gray-800 text-[16px] font-medium mb-1">এখন : {prayerBangla[currentPrayer as PrayerName]}</p>
            <p className="text-gray-600 text-[13px] mb-2 font-medium">ওয়াক্ত বাকি</p>
            <div className="bg-white text-brand px-2 py-[6px] rounded-full text-[14px] font-semibold w-full whitespace-nowrap overflow-hidden text-ellipsis border border-gray-100">
              {timeLeft} মিনিট
            </div>
          </div>

          {/* Right Column (Prayers) */}
          <div className="w-[60%] flex flex-col gap-[6px]">
            {prayers.map((p) => {
              const isActive = currentPrayer === p;
              return (
                <div key={p} className={`flex justify-between items-center rounded-lg px-3 py-[6px] ${isActive ? "border border-brand bg-brand-50" : "border border-gray-100"}`}>
                  <span className={`text-[14px] font-medium ${isActive ? "text-brand" : "text-gray-800"}`}>{prayerBangla[p]}</span>
                  <span className={`text-[12px] ${isActive ? "text-brand font-medium" : "text-gray-600"}`}>{formatTime(timings[p])} - {getEndTime(p)}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Footer: Sunrise / Sunset ── */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2 text-[13px] text-gray-700 font-medium">
            <Sun size={18} className="text-yellow-500" />
            <span>সূর্যোদয় {formatTime(timings.Sunrise)}</span>
          </div>
          <div className="flex items-center gap-2 text-[13px] text-gray-700 font-medium">
            <Sunset size={18} className="text-green-500" />
            <span>সূর্যাস্ত {formatTime(timings.Maghrib)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerTimes;