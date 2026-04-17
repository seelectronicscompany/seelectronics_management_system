"use client";

import React from "react";
import { CustomerLayout } from "@/components/layout";
import {
  PhoneCall,
  Headphones,
  UserCog,
  Building2,
  ExternalLink,
  MessageSquare,
  Clock,
  Mail,
} from "lucide-react";

const SUPPORT_CONTACTS = [
  {
    label: "কাস্টমার কেয়ার",
    englishLabel: "Customer Care",
    number: "09649355555",
    icon: Headphones,
    color: "text-brand",
    bgColor: "bg-brand/5",
    borderColor: "border-brand/10",
    description: "২৪/৭ যেকোনো কারিগরি ও সাধারণ সহায়তার জন্য কল করুন।",
  },
  {
    label: "মার্কেটিং ম্যানেজার",
    englishLabel: "Marketing Manager",
    number: "01322247774",
    icon: UserCog,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
    description: "পণ্য রিভিও, প্রমোশন ও মার্কেটিং বিষয়ক আলোচনার জন্য।",
  },
  {
    label: "অফিস মোবাইল",
    englishLabel: "Office Mobile",
    number: "01310673600",
    icon: Building2,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
    description: "অফিসিয়াল অর্ডার স্ট্যাটাস ও অন্যান্য ডকুমেন্টস সংক্রান্ত কাজে।",
  },
];

export default function SupportPage() {
  return (
    <CustomerLayout>
      <div className="flex flex-col gap-6 p-4 sm:p-6 text-gray-800 pb-24 font-sans">
        
        {/* Support Hero Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 rounded-md p-8 sm:p-12 text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-400/20 rounded-full blur-[100px] -mr-40 -mt-40" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -ml-32 -mb-32" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                সরাসরি সাপোর্ট
              </div>
              <h1 className="text-2xl sm:text-2xl font-black tracking-tight leading-tight">
                সহযোগিতার জন্য <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent ">আমাদের টিম</span>
              </h1>
              <p className="text-brand-100/70 text-md font-medium leading-relaxed">
                আপনার যেকোনো সমস্যা বা জিজ্ঞাসায় আমাদের দক্ষ টিম আপনার সেবায় নিয়োজিত। নিচের বাটনগুলোতে ক্লিক করে সরাসরি যোগাযোগ করুন।
              </p>
            </div>
            
            <div className="hidden lg:block relative group">
               <div className="absolute inset-0 bg-brand-400/20 blur-3xl animate-pulse" />
               <div className="relative p-10 bg-white/5 backdrop-blur-2xl rounded-md border border-white/10 transform hover:scale-105 transition-all duration-500">
                  <MessageSquare size={56} className="text-emerald-400" />
               </div>
            </div>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUPPORT_CONTACTS.map((contact, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden bg-white rounded-md border ${contact.borderColor} p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              {/* Icon & Label */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-md ${contact.bgColor} ${contact.color} transition-all group-hover:scale-110 duration-300`}>
                  <contact.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 leading-tight">
                    {contact.label}
                  </h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    {contact.englishLabel}
                  </p>
                </div>
              </div>

              {/* Number & Description */}
              <div className="mb-8">
                <div className="text-3xl font-black text-gray-900 tracking-tighter tabular-nums mb-3 group-hover:text-brand transition-colors">
                  {contact.number}
                </div>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  {contact.description}
                </p>
              </div>

              {/* Call Button */}
              <a
                href={`tel:${contact.number}`}
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-md font-black uppercase tracking-widest text-xs transition-all duration-300 ${contact.bgColor} ${contact.color} hover:shadow-lg active:scale-95 border ${contact.borderColor}`}
              >
                <PhoneCall size={16} strokeWidth={3} />
                এখনই কল করুন
              </a>

              {/* Hover Decorative Element */}
              <div className={`absolute bottom-0 right-0 w-24 h-24 ${contact.bgColor} opacity-0 group-hover:opacity-40 rounded-tl-full transition-all duration-500 -mr-12 -mb-12 blur-2xl`} />
            </div>
          ))}
        </div>

        {/* Secondary Info Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
            {/* Quick Stats/Hours */}
            <div className="bg-gray-50 rounded-md p-6 border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded shadow-sm">
                        <Clock size={24} className="text-brand" />
                    </div>
                    <div>
                        <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest">সেবার সময়</h4>
                        <p className="text-xs text-gray-500 font-medium">শনিবার - বৃহস্পতিবার: সকাল ০৯:০০ - রাত ০৮:০০</p>
                    </div>
                </div>
                <div className="hidden sm:block text-right">
                    <span className="text-[10px] bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full font-black uppercase tracking-tighter">সচল রয়েছে</span>
                </div>
            </div>

            {/* General Inquiry */}
            <div className="bg-white rounded-md p-6 border border-gray-200 border-dashed flex items-center justify-between hover:border-brand transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-gray-50 rounded group-hover:bg-brand/5 transition-colors">
                        <Mail size={24} className="text-gray-400 group-hover:text-brand" />
                    </div>
                    <div>
                        <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest">ইমেইল করুন</h4>
                        <p className="text-xs text-gray-500 font-medium">যেকোনো তথ্যের জন্য: support@seelectronics.com</p>
                    </div>
                </div>
                <ExternalLink size={16} className="text-gray-300 group-hover:text-brand" />
            </div>
        </div>

        {/* Help Note */}
        <div className="mt-8 text-center px-4">
            <p className="text-xs text-gray-400 font-medium leading-relaxed max-w-lg mx-auto">
                আমাদের সাপোর্ট টিম আপনার সেবার জন্য সর্বদাই তৎপর। কল করতে কোনো সমস্যা হলে আপনি ইমেইল অথবা ফেসবুক পেজে মেসেজ দিতে পারেন।
            </p>
        </div>

      </div>
    </CustomerLayout>
  );
}
