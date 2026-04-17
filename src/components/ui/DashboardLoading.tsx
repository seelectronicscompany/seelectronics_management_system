"use client";

import Image from "next/image";

export default function DashboardLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="flex flex-col items-center gap-6">
        <p className="text-md font-semibold uppercase text-gray-700 animate-pulse">SE Electronics</p>

        <Image src="/logo.jpg" alt="Logo" width={100} height={100} />
        {/* Animated Bars */}
        <div className="flex gap-2">
          <div className="h-4 w-1 bg-brand-700 rounded animate-bounce"></div>
          <div className="h-4 w-1 bg-brand-400 rounded animate-bounce [animation-delay:0.2s]"></div>
          <div className="h-4 w-1 bg-brand-300 rounded animate-bounce [animation-delay:0.4s]"></div>
        </div>

        {/* Text */}
        <p className="text-md font-semibold text-gray-700 animate-pulse">
          Loading...
        </p>

        {/* Progress Line */}
        <div className="w-40 h-1 bg-brand-100 rounded overflow-hidden">
          <div className="h-full bg-brand-500 animate-[loading_1.5s_infinite]"></div>
        </div>

      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}