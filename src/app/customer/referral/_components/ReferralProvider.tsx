"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getCustomerReferralData } from "@/actions";
import { toast } from "react-toastify";
import { Spinner } from "@/components/ui";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

type ReferralContextType = {
  data: any;
  refetch: () => Promise<void>;
};

const ReferralContext = createContext<ReferralContextType | undefined>(undefined);

export function ReferralProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await getCustomerReferralData();
    if (res.success) {
      setData(res.data);
    } else {
      toast.error(res.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <Spinner />
          <p className="text-slate-500 text-sm font-bold mt-4">
            লোডিং হচ্ছে...
          </p>
        </div>
      </div>
    );

  if (!data?.vipCardNumber) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 bg-slate-50">
        <div className="bg-white p-8 rounded-[35px] border border-slate-100 shadow-xl max-w-sm w-full">
          <AlertCircle className="size-16 text-amber-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            VIP মেম্বারশিপ প্রয়োজন
          </h2>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">
            রেফারেল ফিচারটি শুধুমাত্র আমাদের ভিআইপি কার্ড হোল্ডারদের জন্য।
            পয়েন্ট আর্ন করতে আজই ভিআইপি কার্ডের জন্য আবেদন করুন!
          </p>
          <Link
            href="/customer/vip-card"
            className="w-full bg-brand text-white py-4 rounded-xl font-bold uppercase shadow-lg shadow-brand/20 hover:scale-[1.02] transition-transform inline-block"
          >
            আবেদন করুন
          </Link>
        </div>
      </div>
    );
  }

  return (
    <ReferralContext.Provider value={{ data, refetch: fetchData }}>
      {children}
    </ReferralContext.Provider>
  );
}

export function useReferral() {
  const context = useContext(ReferralContext);
  if (context === undefined) {
    throw new Error("useReferral must be used within a ReferralProvider");
  }
  return context;
}
