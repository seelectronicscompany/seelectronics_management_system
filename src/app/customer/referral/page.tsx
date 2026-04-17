"use client";

import { getCustomerReferralData, requestReferralPayment } from "@/actions";
import { Spinner } from "@/components/ui";
import { useEffect, useState, useTransition } from "react";
import { toast } from "react-toastify";
import {
  Wallet,
  ArrowUpRight,
  History,
  Users,
  Bell,
  CheckCircle2,
  AlertCircle,
  Copy,
  PlusCircle,
  Send,
  Banknote,
  FileText,
  ChevronLeft,
  X,
  CreditCard,
  User,
  Phone
} from "lucide-react";
import clsx from "clsx";

export default function CustomerReferralPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("bkash");
  const [walletNumber, setWalletNumber] = useState("");
  const [activeTab, setActiveTab] = useState<"balance" | "history" | "payout">("balance");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [lastTxId, setLastTxId] = useState("");

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

  const handleRequest = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!amount || Number(amount) <= 0) return toast.error("সঠিক পরিমাণ দিন");
    if (!walletNumber) return toast.error("ওয়ালেট নম্বর দিন");

    startTransition(async () => {
      const res = await requestReferralPayment({
        amount: Number(amount),
        paymentMethod,
        walletNumber,
      });

      if (res.success) {
        setLastTxId(res.requestId || "TXN" + Date.now().toString().slice(-6));
        setShowSuccessModal(true);
        setAmount("");
        setWalletNumber("");
        fetchData();
        setActiveTab("balance");
      } else {
        toast.error(res.message);
      }
    });
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <Spinner />
        <p className="text-slate-500 text-sm font-bold mt-4">লোডিং হচ্ছে...</p>
      </div>
    </div>
  );

  if (!data?.vipCardNumber) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 bg-slate-50">
        <div className="bg-white p-8 rounded-[35px] border border-slate-100 shadow-xl max-w-sm w-full">
          <AlertCircle className="size-16 text-amber-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-slate-800 mb-3">VIP মেম্বারশিপ প্রয়োজন</h2>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">
            রেফারেল ফিচারটি শুধুমাত্র আমাদের ভিআইপি কার্ড হোল্ডারদের জন্য।
            পয়েন্ট আর্ন করতে আজই ভিআইপি কার্ডের জন্য আবেদন করুন!
          </p>
          <a href="/customer/vip-card" className="w-full bg-brand text-white py-4 rounded-xl font-bold uppercase shadow-lg shadow-brand/20 hover:scale-[1.02] transition-transform inline-block">
            আবেদন করুন
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24 font-['Hind_Siliguri',sans-serif]">
      {/* Header */}
      <div className="bg-white p-4 flex justify-between items-center border-b sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-blue-800 flex items-center justify-center text-white">
            <CreditCard className="size-5" />
          </div>
          <div>
            <h1 className="font-bold text-blue-800 text-base">SE Electronics Referral</h1>

          </div>
        </div>
        <button className="w-10 h-10 rounded bg-slate-50 flex items-center justify-center text-slate-500 border relative">
          <Bell className="size-5" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded border-2 border-white"></span>
        </button>
      </div>

      <main className="p-4 space-y-6 max-w-[450px] mx-auto">
        {activeTab === "balance" && (
          <>
            {/* Balance Card */}
       <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-md p-6 text-white shadow-xl relative overflow-hidden">
  
  <div className="relative z-10">
    
    {/* Top Section */}
    <div className="flex justify-between items-start">
      <div>
        <p className="text-[13px] opacity-70 font-bold uppercase tracking-widest flex items-center gap-1">
          <Wallet size={12} />
          মোট ব্যালেন্স
        </p>
        <h2 className="text-3xl font-bold mt-1">
          ৳ {data.balance.toLocaleString('en-IN')}
        </h2>
      </div>
    </div>

    {/* Customer Info */}
    <div className="mt-5 space-y-1">
      <div className="flex items-center gap-2">
        <User size={16} className="opacity-80" />
        <h3 className="text-lg font-semibold">
          {data?.name || "Customer Name"}
        </h3>
      </div>

      <div className="flex items-center gap-2">
        <Phone size={14} className="opacity-80" />
        <p className="text-sm opacity-80">
          {data?.phone || "01XXXXXXXXX"}
        </p>
      </div>
    </div>

    {/* Referral Status */}
    <div className="mt-5 flex items-center gap-2 bg-white/10 p-2 rounded border border-white/10">
      <span className="text-[13px] font-medium leading-none">
        আপনার রেফারেল কোড সক্রিয় আছে।
      </span>
    </div>

  </div>

  {/* Decorative Blur Effects */}
  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded -mr-16 -mt-16 blur-2xl"></div>
  <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-300/20 rounded -ml-12 -mb-12 blur-xl"></div>

</div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setActiveTab("payout")}
                className="bg-white rounded-md p-4 flex flex-col items-center gap-2 border border-slate-100 shadow-sm hover:bg-slate-50 active:scale-95 transition-all"
              >
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                  <Banknote className="size-5" />
                </div>
                <span className="text-[13px] font-bold text-slate-600">ক্যাশ আউট</span>
              </button>
              <button
                onClick={() => setActiveTab("history")}
                className="bg-white rounded-md p-4 flex flex-col items-center gap-2 border border-slate-100 shadow-sm hover:bg-slate-50 active:scale-95 transition-all"
              >
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                  <History className="size-5" />
                </div>
                <span className="text-[13px] font-bold text-slate-600">ইতিহাস</span>
              </button>


            </div>

            {/* Referral Earnings List */}
            <div className="space-y-4">
  
  <div className="flex justify-between items-center px-1">
    <h3 className="font-bold text-blue-900 text-lg">রেফারেল আর্নিং</h3>
    <span className="text-[11px] font-bold text-blue-600 uppercase">
      {data.bonuses.length} মোট
    </span>
  </div>

  <div className="space-y-3">
    {data.bonuses.length === 0 ? (
      <div className="bg-blue-50 p-8 rounded-md border border-blue-100 text-center text-blue-400 text-sm">
        এখনও কোনো রেফারেল বোনাস নেই।
      </div>
    ) : (
      data.bonuses.map((bonus: any) => (
        <div
          key={bonus.id}
          className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded border border-blue-100 shadow-sm relative overflow-hidden flex items-center justify-between"
        >
          
          <div className="space-y-1">
            <p className="text-blue-900 font-bold text-md">
              {bonus.referredCustomerName}
            </p>
            <p className="text-blue-400 text-[13px] font-medium uppercase tracking-wider">
              {new Date(bonus.createdAt).toLocaleDateString('bn-BD')}
            </p>
          </div>

          <div className="text-right">
            <p className="text-blue-600 font-bold text-base">
              +৳{Number(bonus.bonusEarned).toLocaleString()}
            </p>
            <p className="text-[12px] text-blue-400 font-bold uppercase">
              বোনাস (২%)
            </p>
          </div>

        </div>
      ))
    )}
  </div>

</div>
          </>
        )}

        {/* Payout Tab */}
      {activeTab === "payout" && (
  <div className="space-y-4 animate-in slide-in-from-bottom duration-300">
    
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-md shadow-md border border-blue-100 space-y-5">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <button
          onClick={() => setActiveTab("balance")}
          className="text-blue-500 p-1 hover:bg-blue-100 rounded-full transition"
        >
          <ChevronLeft className="size-6" />
        </button>
        <h3 className="font-bold text-blue-900 text-lg">ক্যাশ আউট</h3>
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        
        {/* Select */}
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-4 bg-white rounded outline-none border border-blue-100 focus:ring-2 focus:ring-blue-500 text-blue-900 appearance-none"
        >
          <option value="bkash">Bkash</option>
          <option value="nagad">Nagad</option>
          <option value="rocket">Rocket</option>
        </select>

        {/* Wallet */}
        <input
          type="text"
          value={walletNumber}
          onChange={(e) => setWalletNumber(e.target.value)}
          placeholder="ওয়ালেট নাম্বার"
          className="w-full p-4 bg-white rounded outline-none border border-blue-100 focus:ring-2 focus:ring-blue-500 text-blue-900"
        />

        {/* Amount */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="৳ ০.০০"
          className="w-full p-6 bg-white rounded outline-none border border-blue-100 font-bold text-3xl text-center text-blue-900 focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Button */}
      <button
        onClick={() => handleRequest()}
        disabled={isPending || !amount || Number(amount) > data.balance}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded font-bold uppercase shadow-md hover:from-blue-700 hover:to-blue-800 active:scale-[0.98] transition-all disabled:opacity-50"
      >
        {isPending ? "লোডিং..." : "ক্যাশ আউট করুন"}
      </button>

    </div>

  </div>
)}

        {/* History Tab */}
     {activeTab === "history" && (
  <div className="space-y-3 animate-in slide-in-from-bottom duration-300">
    
    <div className="flex items-center gap-3 mb-2">
      <button
        onClick={() => setActiveTab("balance")}
        className="text-blue-400 p-1 hover:bg-blue-100 rounded-full transition"
      >
        <ChevronLeft className="size-6" />
      </button>
      <h3 className="font-bold text-blue-900 text-xl">পেমেন্ট ইতিহাস</h3>
    </div>

    <div className="space-y-3">
      {data.requests.length === 0 ? (
        <div className="bg-blue-50 p-8 rounded-md border border-blue-100 text-center text-blue-400 text-sm">
          কোনো পেমেন্ট ইতিহাস নেই।
        </div>
      ) : (
        data.requests.map((req: any) => (
          <div
            key={req.id}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-[10px] border border-blue-100 shadow-sm relative overflow-hidden"
          >
            
            <div
              className={clsx(
                "absolute top-0 right-0 px-3 py-1 text-[12px] font-bold text-white rounded-bl-xl uppercase",
                req.status === 'completed'
                  ? "bg-blue-600"
                  : req.status === 'rejected'
                  ? "bg-blue-400"
                  : "bg-blue-500"
              )}
            >
              {req.status}
            </div>

            <div className="space-y-2">
              
              <div className="flex justify-between">
                <p className="text-blue-400 text-[13px] font-bold uppercase tracking-wider">
                  #{req.requestId}
                </p>
              
                <p className="text-blue-400 text-[13px] font-bold">
                  {new Date(req.createdAt).toLocaleDateString('bn-BD')}
                </p>
              </div>

              <div className="flex justify-between items-end">
                <div className="space-y-0.5">
                  <p className="text-blue-900 font-bold text-md capitalize">
                    {req.paymentMethod}
                  </p>
                  <p className="text-blue-600 text-sm font-bold">
                    {req.walletNumber}
                  </p>
                </div>
                <p className="text-blue-900 font-bold text-lg">
                  ৳{Number(req.amount).toLocaleString()}
                </p>
              </div>

            {req.senderNumber && (
                <div className="flex justify-between items-center">
                  <p className="text-[13px] text-blue-400 font-bold uppercase tracking-wider">
                    প্রেরকের নম্বর
                  </p>
                  <p className="text-blue-800 font-bold text-sm">
                    {req.senderNumber}
                  </p>
                </div>
              )}

              {req.transactionId && (
                <div className="flex justify-between items-center">
                  <p className="text-[13px] text-blue-400 font-bold uppercase tracking-wider">
                    ট্রানজেকশন আইডি
                  </p>
                  <p className="text-blue-700 font-bold text-sm">
                    {req.transactionId}
                  </p>
                </div>
              )}

            </div>
          </div>
        ))
      )}
    </div>

  </div>
)}
      </main>

      {/* Success Modal */}
     {showSuccessModal && (
  <div className="fixed inset-0 bg-blue-900/60 backdrop-blur-sm z-[200] flex items-center justify-center p-6 transition-all">
    
    <div className="bg-white w-full max-w-md min-h-[420px] rounded-[20px] shadow-2xl p-8 relative animate-in zoom-in duration-300">
      
      <button
        onClick={() => setShowSuccessModal(false)}
        className="absolute top-6 right-6 text-blue-200 hover:text-blue-400"
      >
        <X className="size-6" />
      </button>

      <div className="text-center">
        
        <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-blue-100">
          <CheckCircle2 className="size-10" />
        </div>

        <h2 className="text-2xl font-bold text-blue-900 mb-2">
          অনুরোধ সফল হয়েছে!
        </h2>

        <p className="text-blue-700 text-sm mb-8 leading-relaxed">
          আপনার ক্যাশ আউট অনুরোধটি সফলভাবে জমা হয়েছে। দ্রুত আমাদের টিম পেমেন্টটি প্রসেস করবে।
        </p>

        <div className="bg-blue-50 border-2 border-dashed border-blue-200 p-4 rounded-md flex items-center justify-between gap-3 mb-8">
          <span className="text-[12px] font-bold text-blue-400 uppercase">
            Request ID
          </span>
          <span className="text-blue-900 font-bold text-md">
            {lastTxId}
          </span>
          <button
            onClick={() => {
              navigator.clipboard.writeText(lastTxId);
              toast.success("ID কপি করা হয়েছে");
            }}
            className="text-blue-500 p-1"
          >
            <Copy className="size-4" />
          </button>
        </div>

        <div className="flex gap-3">
          
          <button
            onClick={() => {
              setShowSuccessModal(false);
              setActiveTab("history");
            }}
            className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
          >
            ইতিহাস দেখুন
          </button>

          <button
            onClick={() => setShowSuccessModal(false)}
            className="flex-1 border-2 border-blue-100 text-blue-400 py-4 rounded-xl font-bold text-sm active:scale-95 transition-all"
          >
            বন্ধ করুন
          </button>

        </div>

      </div>
    </div>
  </div>
)}

      {/* Font for Bengali */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');
        .font-siliguri {
          font-family: 'Hind Siliguri', sans-serif;
        }
      `}</style>
    </div>
  );
}
