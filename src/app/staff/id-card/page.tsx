"use client";

import { StaffLayout } from "@/components/layout";
import { Download, User } from "lucide-react";
import Image from "next/image";

export default function IdCardPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <StaffLayout balance={0}>
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 sm:p-6 pb-24">
        
        <div className="mb-8 text-center space-y-2">
           <h1 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">Staff ID Card</h1>
           <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Preview & Download your official ID</p>
        </div>

        {/* Printable ID Card Area */}
        <div className="bg-white rounded-[2rem] border border-gray-200 shadow-xl overflow-hidden w-full max-w-[350px] print:shadow-none print:border-black print:rounded-none relative mb-10">
          
          {/* Header */}
          <div className="bg-brand text-white p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 flex flex-col items-center gap-3">
              <Image src="/logo.jpg" alt="SE Electronics" width={60} height={60} className="rounded-full bg-white p-1" />
              <div>
                <h2 className="font-black text-lg tracking-tight uppercase">SE Electronics</h2>
                <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest">Staff Identity Card</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 text-center space-y-4">
             {/* Replace this with dynamic user photo if available */}
             <div className="size-24 bg-gray-100 rounded-full mx-auto border-4 border-white shadow-md flex items-center justify-center text-gray-400 overflow-hidden">
                <User size={48} />
             </div>
             
             <div>
                <h3 className="font-black text-xl text-gray-900 uppercase tracking-tight">Staff Name</h3>
                <p className="text-brand font-black text-sm uppercase tracking-widest mt-1">Position / Role</p>
             </div>

             <div className="space-y-2 pt-4 border-t border-gray-100 text-left">
                <div className="flex justify-between items-center bg-gray-50 p-2 rounded-md">
                   <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">ID NO</span>
                   <span className="text-xs font-black text-gray-900">SE-XXX</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-2 rounded-md">
                   <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Phone</span>
                   <span className="text-xs font-black text-gray-900">+880 XXXXXXXXXX</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-2 rounded-md">
                   <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Blood Grp</span>
                   <span className="text-xs font-black text-red-600">X+</span>
                </div>
             </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-900 text-white p-4 text-center">
             <p className="text-[10px] font-medium opacity-80">This card is property of SE Electronics.</p>
          </div>
        </div>

        {/* Action Button */}
        <button 
          onClick={handlePrint}
          className="print:hidden bg-brand text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm flex items-center gap-3 hover:bg-brand-800 transition-all shadow-lg shadow-brand/20 active:scale-95"
        >
          <Download size={20} /> Download ID Card
        </button>

      </div>
    </StaffLayout>
  );
}
