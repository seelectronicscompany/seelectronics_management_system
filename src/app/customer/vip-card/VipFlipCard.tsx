"use client";

import { Crown } from "lucide-react";
import { useState } from "react";

interface VipFlipCardProps {
  customer: any;
  vipCardNumber: string;
  vipBgSrc: string;
  baseUrl?: string;
}

export function VipFlipCard({
  customer,
  vipCardNumber,
  vipBgSrc,
  baseUrl = "",
}: VipFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flex justify-center w-full px-2 group"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full max-w-[420px] aspect-[1.586/1] cursor-pointer transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Card */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl overflow-hidden text-white select-none border border-white/10"
          style={{
            backfaceVisibility: "hidden",
            backgroundImage: "url('/vip-card.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

          <div className="relative z-10 h-full w-full p-4 sm:p-6 flex flex-col justify-between">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div
                className="text-white font-black text-sm min-[360px]:text-lg sm:text-2xl tracking-wide drop-shadow-xl"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
              >
                SE ELECTRONICS
              </div>
              <div className="flex items-center gap-1.5 sm:gap-3 border border-white/30 rounded-lg px-1.5 sm:px-3 py-1 sm:py-1.5 bg-transparent backdrop-blur-sm">
                <div className="text-right flex flex-col justify-center">
                  <div className="font-bold text-[10px] sm:text-base leading-tight tracking-wider">
                    VIP CARD
                  </div>
                  <div className="text-[6px] sm:text-[9px] font-semibold tracking-widest text-blue-100 uppercase">
                    MEMBER SHIP
                  </div>
                </div>
                <div className="w-px h-5 sm:h-8 bg-white/20"></div>
                <Crown className="text-white drop-shadow-md w-3 h-3 sm:w-[22px] sm:h-[22px]" />
              </div>
            </div>

            {/* Card Number */}
            <div className="w-full flex justify-start mt-3 sm:mt-6">
              <div className="text-base min-[360px]:text-xl sm:text-[27px] tracking-[0.15em] sm:tracking-[0.2em] font-medium drop-shadow-md">
                {vipCardNumber
                  ? vipCardNumber.match(/.{1,4}/g)?.join(" ")
                  : "2880 7545 6450 2467"}
              </div>
            </div>

            {/* Expiry */}
            <div className="w-full flex justify-end pr-2 sm:pr-8 mt-1">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="flex flex-col text-[6px] sm:text-[8px] font-bold text-right leading-none tracking-widest drop-shadow-md">
                  <span>EXPIRES</span>
                  <span>END</span>
                </div>
                <div className="text-xs sm:text-lg font-medium tracking-wider drop-shadow-md">
                  {customer?.vipExpiryDate
                    ? new Intl.DateTimeFormat("en-US", {
                        month: "2-digit",
                        year: "2-digit",
                      }).format(new Date(customer.vipExpiryDate))
                    : "05/27"}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-end">
              <div className="flex flex-col">
                <span className="text-[7px] sm:text-[10px] md:text-xs text-blue-300 uppercase tracking-widest font-bold mb-0.5">
                  CARD HOLDER
                </span>
                <span className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider drop-shadow-md">
                  {customer.name}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Card */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl overflow-hidden text-white select-none border border-white/10"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundImage: `url(${vipBgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

          <div className="relative z-10 h-full w-full flex flex-col">
            <div className="h-3 sm:h-6 w-full"></div>

            {/* White Strip */}
            <div className="bg-white text-[#0A1128] w-full py-1.5 sm:py-2 px-4 sm:px-6 shadow-sm flex items-center">
              <span className="font-extrabold text-[10px] min-[360px]:text-xs sm:text-[17px] tracking-wide uppercase">
                SE ELECTRONICS VIP MEMBERSHIP CARD
              </span>
            </div>

            <div className="flex-1 px-4 sm:px-6 py-1.5 sm:py-2 flex flex-col justify-between">
              <div>
                <div className="font-semibold text-[9px] sm:text-sm tracking-widest uppercase mb-2 sm:mb-4 drop-shadow-md">
                  CUSTOMER ID - {customer.customerId}
                </div>

                <div className="flex items-end gap-2 sm:gap-4">
                  {/* QR Section */}
                  <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                    <div className="text-white text-[7px] sm:text-[10px] leading-tight font-medium text-center">
                      scan customer
                      <br />
                      profile login
                    </div>
                    <div className="bg-white p-0.5 sm:p-1 rounded-sm w-12 h-12 sm:w-20 sm:h-20 shadow-md">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${baseUrl}/customer/profile`}
                        alt="QR Code"
                        className="w-full h-full opacity-90"
                      />
                    </div>
                  </div>

                  {/* Barcode Section */}
                  <div className="flex-1 h-8 sm:h-14 bg-white rounded-sm flex items-center justify-center p-1 sm:p-2 shadow-md">
                    <div
                      className="w-full h-full opacity-90"
                      style={{
                        backgroundImage: `repeating-linear-gradient(to right, 
                          #000 0, #000 2px, transparent 2px, transparent 4px,
                          #000 4px, #000 5px, transparent 5px, transparent 8px,
                          #000 8px, #000 12px, transparent 12px, transparent 13px,
                          #000 13px, #000 16px, transparent 16px, transparent 20px,
                          #000 20px, #000 21px, transparent 21px, transparent 23px,
                          #000 23px, #000 26px, transparent 26px, transparent 27px,
                          #000 27px, #000 30px, transparent 30px, transparent 32px
                        )`,
                        backgroundSize: "32px 100%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="bg-[#050A1A]/80 backdrop-blur-md w-full py-2 sm:py-4 px-4 sm:px-6 flex justify-between items-center border-t border-white/10">
              <div className="text-[7px] sm:text-[11px] leading-tight font-medium text-white/90">
                <p className="mb-0.5">
                  Customer care: 09649355555, 01322247774
                </p>
                <p>Office: Airport road, Badam Bagicha 2 No Road, Sylhet</p>
              </div>
              <Crown className="text-white opacity-90 ml-1 sm:ml-2 w-3 h-3 sm:w-[22px] sm:h-[22px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-8 text-xs text-gray-500 font-medium tracking-wider flex items-center justify-center opacity-70">
        Tap to flip card
      </div>
    </div>
  );
}
