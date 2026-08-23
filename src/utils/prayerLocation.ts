export interface DistrictInfo {
  name: string;
  lat: number;
  lng: number;
}

export interface SavedPrayerLocation {
  division: string;
  district: string;
  lat: number;
  lng: number;
  locationName: string;
}

export const bdLocations: Record<string, DistrictInfo[]> = {
  ঢাকা: [
    { name: "ঢাকা", lat: 23.8103, lng: 90.4125 },
    { name: "নারায়ণগঞ্জ", lat: 23.6238, lng: 90.5 },
    { name: "গাজীপুর", lat: 23.9999, lng: 90.4203 },
    { name: "মুন্সিগঞ্জ", lat: 23.5422, lng: 90.5305 },
    { name: "মানিকগঞ্জ", lat: 23.8617, lng: 89.9184 },
    { name: "নরসিংদী", lat: 23.9322, lng: 90.7156 },
    { name: "ফরিদপুর", lat: 23.607, lng: 89.8429 },
    { name: "গোপালগঞ্জ", lat: 23.005, lng: 89.8266 },
    { name: "মাদারীপুর", lat: 23.1641, lng: 90.189 },
    { name: "শরীয়তপুর", lat: 23.2423, lng: 90.4348 },
    { name: "রাজবাড়ী", lat: 23.7574, lng: 89.644 },
    { name: "কিশোরগঞ্জ", lat: 24.4449, lng: 90.7766 },
    { name: "টাঙ্গাইল", lat: 24.2513, lng: 89.9167 },
  ],
  চট্টগ্রাম: [
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
  সিলেট: [
    { name: "সিলেট", lat: 24.8949, lng: 91.8687 },
    { name: "মৌলভীবাজার", lat: 24.4829, lng: 91.7774 },
    { name: "হবিগঞ্জ", lat: 24.374, lng: 91.4155 },
    { name: "সুনামগঞ্জ", lat: 25.0658, lng: 91.395 },
  ],
  রাজশাহী: [
    { name: "রাজশাহী", lat: 24.3742, lng: 88.6014 },
    { name: "নওগাঁ", lat: 24.1976, lng: 88.2636 },
    { name: "নাটোর", lat: 24.4206, lng: 89.0 },
    { name: "চাঁপাইনবাবগঞ্জ", lat: 24.5965, lng: 88.2775 },
    { name: "পাবনা", lat: 24.0064, lng: 89.2372 },
    { name: "বগুড়া", lat: 24.8481, lng: 89.372 },
    { name: "জয়পুরহাট", lat: 25.0968, lng: 89.0227 },
    { name: "সিরাজগঞ্জ", lat: 24.4534, lng: 89.7 },
  ],
  খুলনা: [
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
  বরিশাল: [
    { name: "বরিশাল", lat: 22.701, lng: 90.3535 },
    { name: "পটুয়াখালী", lat: 22.3596, lng: 90.3299 },
    { name: "ভোলা", lat: 22.6859, lng: 90.6482 },
    { name: "পিরোজপুর", lat: 22.5791, lng: 89.9759 },
    { name: "বরগুনা", lat: 22.0953, lng: 90.1121 },
    { name: "ঝালকাঠি", lat: 22.6406, lng: 90.1987 },
  ],
  রংপুর: [
    { name: "রংপুর", lat: 25.7439, lng: 89.2752 },
    { name: "দিনাজপুর", lat: 25.6279, lng: 88.6332 },
    { name: "ঠাকুরগাঁও", lat: 26.0337, lng: 88.4616 },
    { name: "পঞ্চগড়", lat: 26.3411, lng: 88.5542 },
    { name: "কুড়িগ্রাম", lat: 25.8072, lng: 89.6295 },
    { name: "গাইবান্ধা", lat: 25.329, lng: 89.5426 },
    { name: "নীলফামারী", lat: 25.931, lng: 88.856 },
    { name: "লালমনিরহাট", lat: 25.9923, lng: 89.2847 },
  ],
  ময়মনসিংহ: [
    { name: "ময়মনসিংহ", lat: 24.7471, lng: 90.4203 },
    { name: "জামালপুর", lat: 24.9375, lng: 89.937 },
    { name: "শেরপুর", lat: 25.0201, lng: 90.0153 },
    { name: "নেত্রকোনা", lat: 24.8709, lng: 90.7279 },
  ],
};

const STORAGE_KEY = "PRAYER_LOCATION_PREFERENCE";

export const DEFAULT_PRAYER_LOCATION: SavedPrayerLocation = {
  division: "ঢাকা",
  district: "ঢাকা",
  lat: 23.8103,
  lng: 90.4125,
  locationName: "ঢাকা, বাংলাদেশ",
};

export function getSavedPrayerLocation(): SavedPrayerLocation {
  if (typeof window === "undefined") {
    return DEFAULT_PRAYER_LOCATION;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (
        parsed &&
        typeof parsed.lat === "number" &&
        typeof parsed.lng === "number"
      ) {
        return parsed as SavedPrayerLocation;
      }
    }
  } catch (e) {
    console.error("Failed to read prayer location from localStorage:", e);
  }
  return DEFAULT_PRAYER_LOCATION;
}

export function savePrayerLocation(
  divisionOrDistrict: string,
  districtName?: string,
): SavedPrayerLocation {
  let selectedDivision = divisionOrDistrict;
  let found: DistrictInfo | undefined;

  // Case 1: Both division and districtName passed
  if (districtName && bdLocations[divisionOrDistrict]) {
    found = bdLocations[divisionOrDistrict].find((d) => d.name === districtName);
  }

  // Case 2: Direct lookup by searching all divisions in bdLocations
  if (!found) {
    const targetName = districtName || divisionOrDistrict;
    for (const [divKey, districts] of Object.entries(bdLocations)) {
      const match = districts.find((d) => d.name === targetName);
      if (match) {
        selectedDivision = divKey;
        found = match;
        break;
      }
    }
  }

  // Fallback if still not found
  if (!found) {
    selectedDivision = "ঢাকা";
    found = bdLocations["ঢাকা"][0];
  }

  const newLocation: SavedPrayerLocation = {
    division: selectedDivision,
    district: found.name,
    lat: found.lat,
    lng: found.lng,
    locationName:
      found.name === selectedDivision
        ? `${found.name}, বাংলাদেশ`
        : `${found.name}, ${selectedDivision}`,
  };

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newLocation));
    } catch (e) {
      console.error("Failed to save prayer location to localStorage:", e);
    }
  }

  return newLocation;
}
