"use client";

import { Crown } from "lucide-react";
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────
interface VipFlipCardProps {
  customer: {
    name: string;
    customerId: string;
    vipExpiryDate?: Date | string | null;
    [key: string]: any;
  };
  vipCardNumber: string;
  vipBgSrc: string;
  baseUrl?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────

/** Format a 16-digit card number into spaced groups of 4. */
function formatCardNumber(num: string): string {
  return (
    num.match(/.{1,4}/g)?.join("\u2003") ?? "####\u2003####\u2003####\u2003####"
  );
}

/** Format expiry date to MM/YY. */
function formatExpiry(date?: Date | string | null): string {
  if (!date) return "MM/YY";
  const d = new Date(date);
  return new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    year: "2-digit",
  }).format(d);
}

// ─── Component ────────────────────────────────────────────────────────

/**
 * VipFlipCard
 *
 * A credit-card-style flip component. Tap/click toggles between front
 * (card number, holder, expiry) and back (QR, customer ID, barcode).
 *
 * ## Flip animation
 * 1. The outer wrapper sets `perspective: 1200px` to establish a 3-D
 *    rendering context.
 * 2. The inner "card body" uses `transform-style: preserve-3d` so both
 *    child faces live in the same 3-D space.
 * 3. On click, the card body transitions `transform: rotateY(0 → 180deg)`.
 * 4. Each face has `backface-visibility: hidden`; the back face starts at
 *    `rotateY(180deg)` so it's pre-flipped — only becoming visible when
 *    the parent rotates it into view.
 * 5. `transition-duration: 700ms` with an ease-in-out curve gives a smooth,
 *    satisfying flip.
 */
export function VipFlipCard({
  customer,
  vipCardNumber,
  vipBgSrc,
  baseUrl = "",
}: VipFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center w-full px-2"
      style={{ perspective: "1200px" }}
    >
      {/* ── Card body (flips on click) ─────────────────────────────── */}
      <div
        className="relative w-full max-w-[420px] cursor-pointer"
        style={{
          aspectRatio: "1.586 / 1", // standard credit-card ratio
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 700ms ease-in-out",
        }}
        onClick={() => setIsFlipped((f) => !f)}
      >
        {/* ════════════════════════════════════════════════════════════
            FRONT FACE
           ════════════════════════════════════════════════════════════ */}
        <div
          className="absolute inset-0 rounded-xl shadow-2xl shadow-blue-900/50 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            backgroundImage: "url('/vip-card.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Slight gradient overlay to lift text off the busy background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#001540]/30 via-transparent to-[#001540]/20 pointer-events-none" />

          <div className="relative z-10 h-full w-full flex flex-col justify-between p-[6%] text-white select-none">
            {/* ── Top row: Brand + VIP badge ───────────────────────── */}
            <div className="flex justify-between items-start">
              <span className="font-black text-[clamp(11px,3.5vw,18px)] tracking-tight leading-none drop-shadow-md">
                SE ELECTRONICS
              </span>

              <div className="flex items-center gap-1.5 sm:gap-2.5">
                <div className="flex flex-col items-end -space-y-px">
                  <span className="font-black text-[clamp(9px,2.8vw,16px)] tracking-tight leading-none drop-shadow-md">
                    VIP CARD
                  </span>
                  <span className="text-blue-100/80 font-bold text-[clamp(4px,1.3vw,7px)] uppercase tracking-[0.18em] drop-shadow-sm">
                    Membership
                  </span>
                </div>
                <div className="h-4 sm:h-7 w-px bg-white/25" />
                <Crown className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-white drop-shadow-md" />
              </div>
            </div>

            {/* ── Card number ──────────────────────────────────────── */}
            <p className="font-mono font-bold text-[clamp(13px,4.2vw,24px)] tracking-[0.12em] sm:tracking-[0.18em] text-white drop-shadow-xl mt-auto mb-auto leading-none">
              {formatCardNumber(vipCardNumber)}
            </p>

            {/* ── Expiry ───────────────────────────────────────────── */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 -mt-1">
              <span className="font-black text-[clamp(5px,1.5vw,9px)] uppercase text-white/80 leading-none">
                Expires in
              </span>
              <span className="font-bold text-[clamp(6px,1.7vw,10px)] tracking-widest text-white drop-shadow-md">
                {formatExpiry(customer.vipExpiryDate)}
              </span>
            </div>

            {/* ── Bottom row: Holder + logo placeholder ────────────── */}
            <div className="flex justify-between items-end">
              <div className="max-w-[65%]">
                <p className="text-[clamp(7px,1.8vw,11px)] uppercase tracking-[0.08em] font-bold text-blue-100/60 leading-none mb-0.5 sm:mb-1">
                  Card Holder
                </p>
                <p className="font-bold text-[clamp(9px,2.5vw,16px)] uppercase tracking-wider text-white drop-shadow-lg truncate leading-tight">
                  {customer.name}
                </p>
              </div>
              {/* The SE IPS BD logo is baked into the background image at bottom-right */}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════
            BACK FACE
           ════════════════════════════════════════════════════════════ */}
        <div
          className="absolute inset-0 rounded-xl shadow-2xl shadow-blue-900/50 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundImage: `url(${vipBgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />

          <div className="relative z-10 h-full w-full flex flex-col select-none">
            {/* ── Spacer to clear the BG's built-in white strip ─────── */}
            <div className="h-[9.5%] sm:h-[10%]" />

            {/* ── Title strip ──────────────────────────────────────── */}
            <div className=" w-full py-1 sm:py-1 px-2 flex justify-center items-center shadow-sm">
              <span className="font-black text-[#0A1128] text-base tracking-tight uppercase text-center leading-tight">
                SE Electronics VIP Membership Card
              </span>
            </div>

            {/* ── Middle: QR + Customer ID / Barcode ───────────────── */}
            <div className="flex-1 flex items-stretch  px-[5%] py-6 gap-[4%]">
              {/* QR Code */}
              <div className="flex flex-col items-center flex-shrink-0 w-[26%] max-w-[90px]">
                <p className="text-white text-[clamp(4px,1.2vw,8px)] font-semibold text-center leading-[1.15] mb-0.5 sm:mb-1">
                  scan customer
                  <br />
                  profile login
                </p>
                <div className="bg-white p-[3px] sm:p-1 rounded-sm w-full aspect-square shadow-lg border sm:border-2 border-blue-500/70">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${baseUrl}/customer/profile`}
                    alt="QR Code — scan to login"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Customer ID + Barcode */}
              <div className="flex flex-col flex-1 min-w-0 justify-center gap-1 sm:gap-1.5 text-white">
                <p className="font-bold text-[clamp(7px,2vw,14px)] tracking-wide uppercase drop-shadow-md truncate leading-none">
                  Customer ID - {customer.customerId}
                </p>

                {/* CSS barcode — repeating-linear-gradient of varied-width bars */}
                <div
                  className="w-full h-5 sm:h-9 rounded-[1px]"
                  style={{
                    backgroundImage: `repeating-linear-gradient(to right,
                      #000 0px, #000 1.5px, transparent 1.5px, transparent 3px,
                      #000 3px, #000 4px, transparent 4px, transparent 6px,
                      #000 6px, #000 9px, transparent 9px, transparent 10px,
                      #000 10px, #000 12px, transparent 12px, transparent 15px,
                      #000 15px, #000 16px, transparent 16px, transparent 17px,
                      #000 17px, #000 20px, transparent 20px, transparent 21px,
                      #000 21px, #000 23px, transparent 23px, transparent 24px
                    )`,
                    backgroundSize: "24px 100%",
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Hint label ────────────────────────────────────────────── */}
      <p className="mt-4 text-xs text-gray-400 font-medium tracking-wider select-none animate-pulse">
        Tap to flip card
      </p>
    </div>
  );
}
