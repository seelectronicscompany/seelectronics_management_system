import { verifyStaffSession } from "@/actions";
import { getStaffPaymentHistory } from "@/actions/paymentRequestActions";
import { getStaffById, getStaffProfileStats } from "@/actions/staffActions";
import { StaffPaymentRequestForm } from "@/components/features/staff/StaffPaymentRequestForm";
import { MobilePageHeader } from "@/components/layout";
import { StaffLayout } from "@/components/layout/StaffLayout";
import { AlertCircle, Phone, ShoppingBag, User, Wallet } from "lucide-react";
import Link from "next/link";

function maskNumber(value: string) {
  if (!value || value.length < 4) return "****";
  return value.slice(-4).padStart(value.length, "*");
}

export default async function StaffPaymentRequestPage() {
  const session = await verifyStaffSession();
  if (!session.isAuth) return null;

  const userId = session.userId as string;
  const [paymentsRes, profileRes, statsRes] = await Promise.all([
    getStaffPaymentHistory(userId),
    getStaffById(userId),
    getStaffProfileStats(userId),
  ]);

  const paymentsList = paymentsRes.success ? (paymentsRes.data ?? []) : [];
  const staffData = profileRes.success ? profileRes.data : null;
  const stats = statsRes.success ? statsRes.data : null;

  const method = staffData?.paymentPreference ?? "";
  const hasWallet =
    ["bkash", "nagad", "rocket"].includes(method) && staffData?.walletNumber;
  const hasBank = method === "bank" && staffData?.bankInfo;
  const canRequest = method === "cash" || hasWallet || hasBank;

  return (
    <StaffLayout balance={stats?.availableBalance || 0}>
      <div className="">
        {/* Profile, Balance & Payout Destination Display */}
        <div className="relative bg-white rounded-lg px-3  border border-gray-100 flex flex-col items-center overflow-hidden">
          {/* Isometric Pattern in the background */}
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none select-none">
            <svg
              width="220"
              height="220"
              viewBox="0 0 60 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              className="text-gray-900"
            >
              <path d="M30 0 L60 15 L60 45 L30 60 L0 45 L0 15 Z" />
              <path d="M30 0 L30 60" />
              <path d="M0 15 L30 30 L60 15" />
              <path d="M0 45 L30 30 L60 45" />
              <path d="M30 30 L60 45 M30 30 L0 45 M30 30 L30 0" />
            </svg>
          </div>

          {/* Avatar with Stylized Double Grey Ring */}
          <div className="relative mt-4">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[3px] bg-gradient-to-b from-gray-400 via-gray-200 to-gray-400  flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden border border-gray-600 bg-white">
                {staffData?.photoUrl ? (
                  <img
                    src={staffData.photoUrl}
                    alt={staffData.name || "Staff Avatar"}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <User className="w-12 h-12 text-gray-400" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Name & Phone */}
          <h2 className="text-xl font-bold text-gray-800 mt-3 tracking-tight">
            {staffData?.name}
          </h2>
          <p className="text-sm font-semibold text-gray-500 mt-0.5 tracking-wide">
            {staffData?.phone}
          </p>

          {/* AVAILABLE BALANCE Card */}
          <div className="w-full  bg-white rounded-2xl  border border-gray-100 p-5 mt-6 flex flex-col items-center z-10">
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
              AVAILABLE BALANCE
            </span>
            <div className="text-gray-900 font-extrabold text-4xl mt-1.5 flex items-center gap-1">
              <span className="font-medium text-3xl">৳</span>
              <span>
                {(stats?.availableBalance || 0).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>

          {/* Payout Destination Card (Grey Overlay Box) */}
          {canRequest && (
            <div className="w-full   rounded-2xl p-5 mt-5 bg-[#f0fcfc] border border-[#00a8a8] flex flex-col z-10">
              <span className="text-sm font-bold text-gray-800 mb-3 block">
                Payout Destination
              </span>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Styled Payment Logo */}
                  {method === "bkash" && (
                    <div className="w-10 h-10 rounded-xl bg-white  flex items-center justify-center shrink-0 border border-gray-100">
                      <svg
                        className="w-8 h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        height="800"
                        width="1200"
                        viewBox="-18.0015 -28.3525 156.013 170.115"
                      >
                        <g fill="none">
                          <path
                            fill="#D12053"
                            d="M96.58 62.45l-53.03-8.31 7.03 31.6z"
                          />
                          <path
                            fill="#E2136E"
                            d="M96.58 62.45L56.62 6.93 43.56 54.15z"
                          />
                          <path
                            fill="#D12053"
                            d="M42.32 53.51L.45 0l54.83 6.55z"
                          />
                          <path fill="#9E1638" d="M23.25 31.15L0 9.24h6.12z" />
                          <path
                            fill="#D12053"
                            d="M107.89 35.46l-9.84 26.69L82.1 40.09z"
                          />
                          <path
                            fill="#E2136E"
                            d="M56.77 84.14l38.61-15.51L97 63.7z"
                          />
                          <path
                            fill="#9E1638"
                            d="M25.89 113.41l16.54-58.02 8.39 37.75z"
                          />
                          <path
                            fill="#E2136E"
                            d="M109.43 35.67l-4.06 11.02 14.64-.24z"
                          />
                        </g>
                      </svg>
                    </div>
                  )}
                  {method === "nagad" && (
                    <div className="w-10 h-10 rounded-xl bg-white  flex items-center justify-center shrink-0 border border-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        xmlSpace="preserve"
                        viewBox="-13.305 -31.2 115.31 187.2"
                      >
                        <path
                          fill="#ec1c24"
                          d="M29.9 79.2H.9c-.5 0-.9.4-.9.9v2.2c0 .5.4.9.9.9h21.5v11.9c-.6-.9-1.3-1.7-2.1-2.5-2.5-2.6-5.3-3.9-8.1-3.9-2.2 0-4.2 1.1-5.7 3.2-1.2 1.7-2 3.7-2 5.5 0 1.9.3 4.3 1.7 6.5 1.8 2.7 4.6 3.5 7.1 3.5 3.3 0 6.1-2.3 6.1-5.2 0-1.7-.9-3.2-2.5-4.1l-1.6-.9v2.4c-.1.6-1.3 1.7-2.6 1.7-1.1 0-2.2-.5-2.8-1.1-.5-.5-.6-1.3-.6-1.9 0-.8.3-1.6.9-2.4.7-.8 1.4-1.2 2.5-1.2 2.9-.1 5.3 1.3 7.3 4.2 1.6 2.4 2.4 4.7 2.4 7.2l.1 6 4.3 2.6c.1.1.3.1.5.1.5 0 .9-.4.9-.9V83.3h1.7c.5 0 .9-.4.9-.9v-2.2c0-.6-.4-1-.9-1"
                        />
                        <path
                          fill="#ec1c24"
                          d="M87.7 79.2H51c-.5 0-.9.4-.9.9v4.1c-3.5-3.7-6.7-5.6-9.6-5.6-2.7-.1-5.1.6-6.9 2.1-1.9 1.5-3 3.3-3 5.4 0 6.4 7.2 6.4 9 5.4.3-.2.7-.4 1.2-.4 1.5 0 2 1.1 2 2.1 0 1.5-2.1 2.8-4.7 2.8-1.4 0-2.3-.4-2.9-1.2l-1.1-1.7-.8 1.9c-.2.5-.4 1-.4 1.7 0 1.5.8 2.9 2.1 4.1 1.3 1.1 2.9 1.7 4.6 1.7 2.7 0 5-1 6.5-3 1.2-1.6 1.8-3.5 1.8-5.6 0-1.2-.4-2.4-1.4-3.8-1.2-1.7-2.6-2.5-4.2-2.5-.6 0-1.3.2-2 .4-.3.1-.8.2-.9.2-.2 0-.7-.1-1-.5-.2-.2-.6-.7-.6-1.4.1-1.6 1.5-3.2 4-3.2h.1c1.7 0 3.4.8 5.1 2.4 1.3 1.2 2.3 2.5 3.1 3.9v22.8l4.3 2.5c.1.1.3.1.5.1.5 0 .9-.4.9-.9V83.3h6.5v19.8l5.2 2.1c.1 0 .2.1.3.1.5 0 .9-.4.9-.8v-.2c.9-5.8 3.4-9.9 7.7-12.3v1.1c0 .8.1 3 .1 4.2 0 .7.1 1.2.1 1.6 0 2.2.3 5.8 1.1 8.3 1.4 4.9 3.8 6 5.6 6.1h.1c1 0 1.8-.3 2.4-.8.3-.3.7-.9.7-1.9 0-.9-.1-1.6-.4-2.1l-.4-.7-.8.2c-.9.2-1.2.2-1.3.2h-.2c-.2 0-.3 0-.4-.1-.3-.1-.8-.6-1.2-2.2-.3-1.2-.4-2.7-.4-3.6 0-6.4 1.3-11.2 3.4-12.3l.1-.1c.3-.2.5-.5.5-.8 0-.2 0-.3-.1-.4v-.3c-1-2-3.1-3.4-6-4.2l-.2-.1h-.2c-2.3.4-5 2-8.4 4.8-.9.7-1.7 1.5-2.5 2.2v-7.9h19.7c.5 0 .9-.4.9-.9v-2.2c0-.5-.4-.9-.9-.9"
                        />
                        <path
                          fill="#231f20"
                          d="M2.9 120.3v1.8l1.5-.6.5.4v.5c0 .6-.2 1.1-.5 1.5-.3.4-.8.6-1.4.6-.6 0-1.2-.3-1.7-.8-.4-.4-.7-1-1-1.7l.4-.3c.5 1.5 1.3 2.2 2.3 2.2.4 0 .7-.1.9-.4.3-.3.4-.6.4-1 0-.2 0-.3-.1-.5l-1.4.6-.5-.4v-1.9H0v-.4h5.3v.5H2.9z"
                        />
                        <path
                          fill="#231f20"
                          transform="translate(-5.7 -1.1)"
                          d="M11.5 125.6v-4.2h-.7v-.4h1.9v.4H12v4.2z"
                        />
                        <path
                          fill="#231f20"
                          d="M9.9 120.3v.3c.4 0 .8.1 1.2.4.4.3.6.6.6 1 0 .3-.1.6-.4.8-.2.2-.5.3-.9.3h-.1v-.5h.3c.4 0 .6-.2.6-.6 0-.5-.4-.7-1.3-.8v3.3h-.5c-.2-.5-.5-.9-.9-1.2-.4-.4-.9-.6-1.3-.6l-.2-.6c.3-.2 1.1-.7 2.4-1.4v-.3H6.9v-.5h5.3v.5H9.9zm-.6.9c-.2.1-.5.2-.8.5l-.7.6c.3.1.5.4.8.6.1.1.4.4.7.8z"
                        />
                        <path
                          fill="#231f20"
                          d="M19.2 119.1c-.9-.6-1.7-.9-2.3-.9-.6 0-1 .1-1.3.4-.4.3-.5.7-.5 1.3h.6v.5h-.6v4.1h-.5v-4.1H14v-.5h.6c0-.7.2-1.2.7-1.6.4-.4 1-.5 1.7-.5.4 0 .9.1 1.3.3.3.1.7.4 1.2.7z"
                        />
                        <path
                          fill="#231f20"
                          d="M19.6 120.3v4.1h-.5c-.3-.4-.7-.8-1.4-1.2-.7-.4-1.3-.6-1.8-.6l-.2-.6c.3-.2.8-.5 1.6-.8.2-.1.8-.3 1.8-.7v-.2h-3.8v-.4h4.8v.5h-.5zm-.5.9c-.5.2-1.4.5-2.5 1.1 1 .3 1.8.8 2.5 1.4z"
                        />
                        <path
                          fill="#231f20"
                          d="M20 119.9h5.2v.5H20zm2.9 4.5c-.6 0-1.1-.3-1.6-.8-.4-.5-.7-1-.9-1.6l.3-.3c.2.6.5 1.1.8 1.5.4.5.9.8 1.4.8.4 0 .7-.1 1-.4.2-.3.3-.6.3-1-.4.3-.7.4-1.1.4-.3 0-.6-.1-.9-.3-.3-.2-.4-.5-.4-.9 0-.3.1-.6.3-.8.2-.2.5-.3.8-.3.2 0 .5.1.6.2.2.1.2.3.2.5s-.1.4-.3.5l-.4-.3c.1-.1.2-.2.2-.3 0-.2-.1-.3-.3-.3-.2 0-.3.1-.4.2-.1.1-.2.3-.2.4 0 .2.1.4.2.5.2.1.3.2.6.2.4 0 .8-.2 1.1-.5l.5.5c0 .6-.2 1.1-.5 1.5-.3.4-.7.6-1.3.6"
                        />
                        <path
                          fill="#231f20"
                          transform="translate(-5.7 -1.1)"
                          d="M31.4 125.6v-4.2h-.7v-.4h1.8v.4h-.6v4.2z"
                        />
                        <path
                          fill="#231f20"
                          d="M28.9 124.8c-.6 0-1-.1-1.2-.3-.4-.5-.7-1.1-.7-1.7 0-.4.1-.8.4-1.3.2-.3.5-.6.9-1.1h-1.6v-.5h2.6v.5c-.4.2-.8.5-1.2.9-.4.5-.5.9-.5 1.4 0 1.1.5 1.7 1.4 1.7.1 0 .3-.1.4-.2v.5c-.2 0-.3.1-.5.1"
                        />
                        <path
                          fill="#231f20"
                          d="M32.4 120.3v4.1h-.5v-2.7c0-.1-.1-.2-.2-.5-.3-.5-.8-.8-1.3-.8-.2 0-.4.1-.6.3l-.3.3c.2-.1.4-.1.6-.1.3 0 .5.1.7.2.2.1.3.3.3.6s-.1.6-.4.9c-.2.3-.5.5-.8.6l-.3-.4c.2-.1.4-.2.6-.4.2-.2.4-.4.4-.6 0-.1-.1-.2-.4-.3-.2-.1-.4-.1-.6-.1h-.2l-.3-.5.6-.6c.2-.2.5-.3.8-.3.6 0 1.1.3 1.5.9v-1h1.1v.5h-.7z"
                        />
                        <path
                          fill="#231f20"
                          d="M37 120.3v4.1h-.5c-.3-.4-.7-.8-1.4-1.2-.7-.4-1.3-.6-1.8-.6l-.2-.6c.8-.5 1.9-1 3.3-1.5v-.2h-3.6v-.4h4.7v.5H37zm-.6.9c-.9.3-1.7.7-2.4 1.1.9.3 1.7.8 2.4 1.4zm-1.4 3.4c-.2-.2-.4-.3-.8-.5l.2-.4c.3.1.6.3.9.6z"
                        />
                        <path
                          fill="#231f20"
                          d="M44.6 119.1c-.9-.6-1.7-.9-2.3-.9-.6 0-1 .1-1.3.4-.4.3-.5.7-.5 1.3h.6v.5h-.6v4.1H40v-4.1h-.7v-.5h.6c0-.7.2-1.2.7-1.6.4-.4 1-.5 1.7-.5.4 0 .9.1 1.3.3.3.1.7.4 1.2.7z"
                        />
                        <path
                          fill="#231f20"
                          d="M43.7 120.3v1.8l1.5-.6.5.4v.5c0 .6-.2 1.1-.5 1.5-.3.4-.8.6-1.4.6-.6 0-1.2-.3-1.7-.8-.4-.4-.7-1-1-1.7l.4-.3c.5 1.5 1.3 2.2 2.3 2.2.4 0 .7-.1.9-.4.3-.3.4-.6.4-1 0-.2 0-.3-.1-.5l-1.4.6-.5-.4v-1.9h-2.4v-.4H46v.5h-2.3z"
                        />
                        <path
                          fill="#231f20"
                          d="M51.1 119.1c-.9-.6-1.7-.9-2.3-.9-.6 0-1 .1-1.3.4-.4.3-.5.7-.5 1.3h.6v.5H47v4.1h-.5v-4.1h-.6v-.5h.6c0-.7.2-1.2.7-1.6.4-.4 1-.5 1.7-.5.4 0 .9.1 1.3.3.3.1.7.4 1.2.7z"
                        />
                        <path
                          fill="#231f20"
                          d="M50.8 120.3c.2.5.6.8 1.2.8h.2l.4.5c-.3.6-.5 1.1-.5 1.4 0 .7.1 1.2.3 1.4l-.4.2c-.3-.4-.4-.8-.4-1.3 0-.3 0-.6.1-.8 0-.1.1-.4.2-.9-.4 0-.8-.2-1.1-.4-.4-.3-.6-.6-.7-.9-.6.4-.9.9-.9 1.3 0 .3.1.5.4.5.1 0 .3 0 .4-.1.1-.1.3-.2.3-.3h.5c.1.2.2.5.2.9 0 1-.5 1.6-1.6 1.6-.2 0-.4-.1-.6-.2-.1 0-.3-.2-.6-.3-.2-.3-.4-.7-.7-1.3l.3-.3c.1.4.4.8.8 1.3l.4.2c.1.1.3.1.4.1.3 0 .6-.1.8-.2.2-.2.3-.4.3-.7 0-.2 0-.3-.1-.4-.3.3-.5.4-.8.4-.3 0-.5-.1-.6-.3-.2-.2-.2-.4-.2-.7 0-.4.2-.8.6-1.3h-2.1v-.6H53v.5h-2.2z"
                        />
                        <path
                          fill="#231f20"
                          d="M53.8 120.3v3.6h.3c.4 0 .9-.1 1.4-.4.5-.3.8-.6.8-1.1 0-.5-.2-.7-.7-.7-.1 0-.4.1-.7.3l-.2-.5c.3-.2.7-.3 1.1-.3.3 0 .6.1.8.4.2.2.2.5.2.8 0 .5-.2.9-.7 1.2-.4.3-.8.5-1.3.6-.3.1-.9.1-1.6.1v-4.1h-.4v-.3H56v-.1c0-.3-.1-.6-.4-.8-.2-.2-.5-.3-.8-.3-.4 0-.9.2-1.6.5l-.2-.4c.6-.4 1.2-.6 1.8-.6.5 0 .9.2 1.2.5.3.3.5.7.5 1.1h.8v.5z"
                        />
                        <path
                          fill="#231f20"
                          transform="translate(-5.7 -1.1)"
                          d="M63.5 125.6v-4.2h-.7v-.4h1.8v.4H64v4.2z"
                        />
                        <path
                          fill="#231f20"
                          d="M63.7 120.3v4.1h-.5v-.8c0-1-.2-1.5-.7-1.5-.2 0-.3.1-.5.3-.1.2-.2.3-.2.5h-.6c0-.2-.1-.4-.2-.6-.1-.2-.3-.3-.5-.3s-.4.1-.5.3c-.1.2-.2.4-.2.6 0 .5.3.8.9.8h.2l-.2.5h-.2c-.4 0-.7-.1-1-.4-.2-.3-.4-.6-.4-1s.1-.7.4-1c.2-.3.6-.4 1-.4s.7.2 1 .7c.3-.5.6-.7 1-.7.3 0 .5.2.7.7v-1.9h-4.4v-.3h5.5v.5h-.6z"
                        />
                        <path
                          fill="#231f20"
                          d="M66.9 122.6c0 .3.1.6.2.9.2.3.4.5.7.5.1 0 .3 0 .4-.1l.2.5c-.2.1-.4.1-.5.1-.9 0-1.3-.7-1.3-2.1 0-.8.5-1.6 1.5-2.5h.8v.5c-.5.1-.9.3-1.3.8-.5.4-.7.9-.7 1.4"
                        />
                        <path
                          fill="#231f20"
                          d="M73.3 120.3v4.1h-.5v-.8c0-1-.2-1.5-.7-1.5-.2 0-.3.1-.5.3-.1.2-.2.3-.2.5h-.6c0-.2-.1-.4-.2-.6-.1-.2-.3-.3-.5-.3s-.4.1-.5.3c-.1.2-.2.4-.2.6 0 .5.3.8.9.8h.2l-.2.5h-.2c-.4 0-.7-.1-1-.4-.2-.3-.4-.6-.4-1s.1-.7.4-1c.2-.3.6-.4 1-.4s.7.2 1 .7c.3-.5.6-.7 1-.7.3 0 .5.2.7.7v-1.9h-4.4v-.3h5.5v.5h-.6z"
                        />
                        <path
                          fill="#231f20"
                          d="M77.9 120.3v4.1h-.5v-.3c0-.4-.2-.8-.7-1.3-.5-.4-.9-.7-1.3-.7-.2 0-.4.1-.5.2-.1.1-.2.3-.2.5s.1.4.2.5c.1.1.3.2.5.2.1 0 .2 0 .4-.1l.2.5c-.2.1-.4.1-.7.1-.3 0-.6-.1-.8-.4-.2-.2-.3-.5-.3-.8 0-.3.1-.6.3-.9.2-.2.5-.4.9-.4.8 0 1.5.5 2.1 1.4v-2.7h-3.7v-.3h4.7v.5h-.6z"
                        />
                        <path
                          fill="#231f20"
                          d="M80.4 124.8c-.6 0-1-.1-1.2-.3-.4-.5-.7-1.1-.7-1.7 0-.4.1-.8.4-1.3.2-.3.5-.6.9-1.1h-1.6v-.5h2.6v.5c-.4.2-.8.5-1.2.9-.4.5-.5.9-.5 1.4 0 1.1.5 1.7 1.4 1.7.1 0 .3-.1.4-.2v.5c-.2 0-.3.1-.5.1"
                        />
                        <path
                          fill="#231f20"
                          d="M81 120.3v1.8c.8-.5 1.5-.9 2.1-1.1l.5.7c-.3.7-.4 1.2-.4 1.5 0 .3.1.7.2 1.2l-.4.2c-.2-.5-.3-.9-.3-1.1 0-.6.1-1.1.2-1.7-.6.2-1.3.7-2.1 1.4l-.4-.4v-2.4H80v-.5h4v.5h-3z"
                        />
                        <path
                          fill="#231f20"
                          d="M88.1 120.3v4.1h-.5v-.3c0-.4-.2-.8-.7-1.3-.5-.4-.9-.7-1.3-.7-.2 0-.4.1-.5.2-.1.1-.2.3-.2.5s.1.4.2.5c.1.1.3.2.5.2.1 0 .2 0 .4-.1l.2.5c-.2.1-.4.1-.7.1-.3 0-.6-.1-.8-.4-.2-.2-.3-.5-.3-.8 0-.3.1-.6.3-.9.2-.2.5-.4.9-.4.8 0 1.5.5 2.1 1.4v-2.7H84v-.3h4.7v.5h-.6z"
                        />
                        <path fill="none" d="M0 0h88.6v124.7H0z" />
                        <g transform="translate(-5.7 -1.1)">
                          <path
                            fill="#ea2227"
                            d="M80.4 39.7c0 .9 0 1.9-.1 2.8-.3 4-1.3 7.7-2.9 11.2-.6 1.4-1.4 2.7-2.2 4-6 9.5-16.5 15.7-28.5 15.7-5.1 0-10-1.2-14.4-3.2C20.9 64.8 13 53.1 13 39.7 13 26.4 20.6 15 31.7 9.5c-.9 1.1-1.7 2.4-2.4 3.6-.1.1-.1.2-.2.3-.4.4-.9.7-1.3 1.1L26.3 16l-.3.3c-.1.1-.2.2-.3.4-.2.2-.4.4-.5.6-.3.4-.7.8-1 1.3-1.4 1.8-2.6 3.9-3.5 6l-.3.6c-.1.3-.2.5-.3.8 0 .1-.1.3-.1.4-.1.4-.3.8-.4 1.2-.1.3-.2.5-.2.8 0 .1-.1.3-.1.4-.1.3-.1.5-.2.8-.2.8-.4 1.7-.5 2.6 0 .2-.1.4-.1.7 0 .2 0 .3-.1.5 0 .3 0 .5-.1.8v2.2c0 9.2 4.2 17.4 10.8 22.8 5.1 4.2 11.6 6.7 18.6 6.7 6.4 0 12.4-2.1 17.2-5.6 3.5-2.6 6.5-5.9 8.6-9.7.3-.5.5-1 .8-1.5 1.7-3.5 2.7-7.5 2.8-11.6v-1c0-1 0-1.9-.1-2.8.1 0 .1.1.1.1.5.4.9.8 1.3 1.2.4-.7.8-1.4 1.3-2 .3 1.3.5 2.6.6 3.9.1.8.1 1.8.1 2.8"
                          />
                          <path
                            fill="#f69220"
                            d="M77.1 36.3v1c0 6-2.5 11-2.8 11.6-.2.5-.5 1-.8 1.5-2.1 3.8-5.1 7.2-8.6 9.7-4.8 3.5-10.8 5.6-17.2 5.6-7.1 0-13.6-2.5-18.6-6.7-6.6-5.4-10.8-13.6-10.8-22.8V34c0-.3 0-.5.1-.8 0-.2 0-.3.1-.5 0-.2.1-.4.1-.7.1-.9.3-1.7.5-2.6.1-.3.1-.5.2-.8 0-.1.1-.3.1-.4.1-.3.1-.5.2-.8.1-.4.3-.8.4-1.2 0-.1.1-.3.1-.4.1-.3.2-.5.3-.8l.3-.6c.9-2.1 2.1-4.2 3.5-6 .3-.4.7-.8 1-1.3.2-.2.3-.4.5-.6.1-.1.2-.2.3-.4l.3-.3 1.5-1.5c.4-.4.9-.8 1.3-1.1-.1.1-.1.2-.2.3-.1.1-.1.2-.2.4-1.7 3.5-2.8 7.5-3.2 11.9-.1 1.2-.2 2.4-.2 3.6 0 15.4 9 27.9 20.2 27.9h1.1c1.6 0 3.2-.2 4.7-.6 7.6-2.1 13.1-9 13.1-17.2V39c-.1-4.9-2.2-9.2-5.5-12.4 2.3.1 4.5.4 6.7.9 4.1 1.1 7.9 3 11.1 5.6.1 0 .1.1.2.1.1 1.2.2 2.1.2 3.1"
                          />
                          <path
                            fill="#f69220"
                            d="M77.2 36.3v1c0 6.3-2.8 11.7-2.8 11.7-.2.5-.5 1-.8 1.5-2.1 3.8-5.1 7.2-8.7 9.8-5.1 3.6-11 5.6-17.3 5.6-6.8 0-13.5-2.4-18.7-6.7-6.9-5.6-10.8-14-10.8-22.9 0-8.9 4-17.3 10.9-22.9l.3-.2c-.1.1-.1.2-.2.3-.1.1-.1.2-.2.3-6.7 5.6-10.6 13.8-10.6 22.5 0 8.8 3.9 17.1 10.7 22.7 5.2 4.3 11.8 6.6 18.6 6.6 6.2 0 12.1-1.9 17.1-5.5 3.5-2.5 6.5-5.9 8.6-9.7.3-.5.5-1 .8-1.5 0-.1 2.8-5.4 2.8-11.6v-1c0-.9 0-1.9-.1-2.8v-.1c.1 0 .1.1.2.1l.1.1c.1.9.1 1.8.1 2.7"
                          />
                          <path
                            fill="#ea2227"
                            d="M69.2 18s-24-4.5-35.3 16.4c0 0 2-14.5 19.2-21L49.7 7s6.9-6.2 19-4.6z"
                          />
                          <path
                            fill="#f69220"
                            d="M39.4 29.1s9.6-12.5 31.5-9.3l-.3-7.3s9.2-.3 16.6 6.1l-9.1 13.8s-6.3-7.3-19.3-7.5c-5.3-.1-11.8.6-19.4 4.2"
                          />
                          <path
                            fill="#f69220"
                            d="M29.9 40.5s-11-23.9 14.5-39.3l6.1 11.2s-4.1 1.4-8.5 5.2c-4.8 4.1-10 11.1-12.1 22.9"
                          />
                          <g>
                            <path
                              fill="#ec1c24"
                              d="M44.4 34s-2.1.5-2-.6c0-.4.2-.5.4-.4 0-.2-.4-.7.5-1 .3-.4.6-.8.7-1 .1-.3.3-.6 1.1-.5.8.2 1.7 1 1.8 1.2.5 0 1 .1.8.2-.2.1-.3.3-.2.3 0 0 .3.2-.5.2 0 .2.2.2.3.3.1.1 0 .2 0 .2s.1.4-.3.3c-.4-.2-.4-.3-.6-.3-.1 0-.4.1-.4.2s.5.4-.1.5c-.1.1.2.2 0 .3-.2.1-1.1.8-1.5.9-.4 0-.5-.1-.5-.3 0-.2.2-.3.5-.3.1-.1.1-.2 0-.2"
                            />
                            <path
                              fill="#ec1c24"
                              d="M44.2 36.2c-.2 0-.8-.4-.5-.6.3-.2 1.7-1.1 2-1.2.3-.1.7.3.3.6-.3.3-1.8 1.2-1.8 1.2"
                            />
                            <path
                              fill="#ec1c24"
                              d="M46.4 35.2c0-.2.2-1.1.2-1.3 0-.2.7-.2.5.5-.1.8-.7 1-.7.8"
                            />
                            <path
                              fill="#ec1c24"
                              d="M47.3 33.6s3.8-.2 4.1 0c.3.2 1.6 2.2 1.3 4-.3 1.8-.9 2.3-3.3 2.5 0-.6-.1-2.1-.4-2.5-.2-.4-1.1-1.3-1.5-1.3 0 .4-.1 1.7-.1 1.7s-1.2.1-1.4-.2v-1.9s1.1-1 1.2-1.2c.2.1.2.7 1.6.6.1-.2-1.5 0-1.5-1.7"
                            />
                            <path
                              fill="#ec1c24"
                              d="M45.9 35.3s-1.2 1-1.5 1.2c-.1.3-.3 1.4 1.3 1.4.1-.7.2-2.6.2-2.6"
                            />
                            <path
                              fill="#ec1c24"
                              d="M43 36.8c-.4 0-.7-.1-.6-.4 0-.3.6-.6.9-.5.3.1.9.2.9 1.5.2.3 1 .8 1.9.9.9.1 1.5-.1 1.5.2v1.8s-1.1 0-3.9-2c-.2-.3-.4-.5-.4-1 0-.2-.2-.5-.3-.5"
                            />
                            <path
                              fill="#ec1c24"
                              d="M42.1 37c-.5 0-1.8 1.1-.8 1.6.3-.2.5-.5.5-.5s-.2.6.3.8c.5.2.3-.3.6-.3.2.3.2.4.5.4s.3-.8 0-1.2c-.3-.5-.6-.7-1.1-.8"
                            />
                            <path
                              fill="#ec1c24"
                              d="M47.8 37.2v3.5s1.2-.4 1.3-.7c0-.6-.2-2.8-1.3-2.8"
                            />
                            <path
                              fill="#ec1c24"
                              d="M45 39.5s1.4.9 2.2 1.3c-.1.2-.7.9-.9.9-.2-.1-1.2-1.5-1.3-2.2"
                            />
                            <path fill="#ec1c24" d="M38.3 40.8h1.8v.7h-1.7z" />
                            <path
                              fill="#ec1c24"
                              d="M58.8 40.5h-7.9l1.3 1h6.6z"
                            />
                            <path
                              fill="#ec1c24"
                              d="M49.4 40.4c.1-.1 1 .6.8.7-.3.1-2.7 1.2-2.9 1.1-.2-.1-.2-.7.1-.8.2-.1 1.6-.5 2-1"
                            />
                            <path
                              fill="#ec1c24"
                              d="M46.7 42.1c-.3-.2-1.9 1.4-1.2 1.5.7.1 2.4.4 2.8.6.4-.2.8-.5.7-.7.3 0 .7.4 1.1.3.4-.2 2.3-1.6 2.4-1.8-.4-.3-1.2-.8-1.6-.8-.3 0-2.9 1.5-4.2.9"
                            />
                            <path
                              fill="#ec1c24"
                              d="M45.9 44c.2 0 2.2.8 2.7.7.5-.1.6-.6.9-.6.3 0 .4.3.9 0s1.3-1 1.5-1.2c0 .3 0 1.2-1.8 2s-6.1 2-6.2 2.6c.2.1.7-.1 1.1-.3.2.2.6.7.5 1.7-.1.9-.8 2.5-.8 2.9v2.6c0 .2.4 1.3-.2 1.2-.5-.1-.9-.1-1.1-.1-.2 0-.6.4-1 .3-.4-.1-1-.2-1-.4s.4-.2.8-.3c.4-.1.6-.5 1.3-.8 0-.5-.2-3.9-.2-4.6 0-.7-.2-2.2.1-2.8.1-.6 1.7-2.9 2.5-2.9"
                            />
                            <path
                              fill="#ec1c24"
                              d="M48.5 46.1c0 .2 1.2 3.3 1.8 3.4.5.1 5.6-1 6.6-.7.3.4.9 1.1.9 1.6 0 0 .1 1 0 1.1.2 0 .6-.1.7-.4.1-.3 0-1.6.1-1.9 0-.2.6-1.5-.2-1.4-.8 0-3.2 0-4-.2-.8-.2-2.5-.5-2.9-.3-.4.2-.9.9-.9 1.1-.2 0-.2-.1-.1-.7.2-.5.8-2.1.7-2.9-.6 0-2.7 1.3-2.7 1.3"
                            />
                            <path
                              fill="#ec1c24"
                              d="M45.6 41.2c.1.1.1.4.3.5l-4.1-.3s-.5-.3-.3-.4z"
                            />
                            <path
                              fill="#ec1c24"
                              d="M41.1 40.8h4.1s-.3-.5-.4-.8c-.7 0-3.8.1-3.8.1s-.4 0-.4.8c-.1.2.3.5.5-.1"
                            />
                            <path
                              fill="#ec1c24"
                              d="M37.2 41.5h.8s.3-.1 0-.4c-.3-.3-.8-.5-.4-1.1-.4-.1-1-.2-.9 1.1h-.4s-.1-.7-1.1-.7c-.9 0-3.3 1-3.3 1s2.6.7 3.3.7c.7 0 1.1-.6 1.1-.6h.3s.1.5.3.7v.8s-.4.1-.3.6c.1.4.4.4.4.4.1 0 .2-.1.5-.1.2-.2.1-.7-.3-.9v-.6s.3-.2.3-.4-.3-.2-.3-.5"
                            />
                            <path
                              fill="#ec1c24"
                              d="M42.1 45.5c.3-.2.4-.6.4-.6v-2.4c0-.6-1-1-1.1-1h-.1c-.1.1-.4.3-.6.3-.3 0-.4 0-.7-.3-.8 0-1.2 1-1.3 1 0 .2-.1 1.9 0 2.2.1.3.3.5.4.6-.2.6-1 3.8.1 4.2v.5H42v-.6c1-.4.3-3.1.1-3.9m-3.1-3c.1-.1.4-.9 1-.9.3.3.5.3.8.3.3 0 .5-.2.7-.3.3.1.9.4.9.8v2.4c0 .1-.1.3-.3.4h-.5v-1h-1.9v1h-.4c-.1-.1-.3-.3-.3-.5-.1-.2-.1-1.4 0-2.2m1.9 6.6h-.5c-.1 0-.2-.1-.2-.2s.1-.2.2-.2h.5c.1 0 .2.1.2.2s-.1.2-.2.2m1 .2l-1.3-1.5-1.2 1.5c-.8-.3-.3-2.8 0-3.9H42c.2 1.1.7 3.5-.1 3.9"
                            />
                            <path
                              fill="#ec1c24"
                              d="M41.5 46.5c.3-.4-.1-.7-.1-.7h-1.6c-.5 0-.3.7-.3.7l1 .9s.7-.4 1-.9"
                            />
                            <path
                              fill="#ec1c24"
                              d="M40.9 47.5l1 1.2s-.1-1.4-.1-1.8c-.3 0-.9.6-.9.6"
                            />
                            <path
                              fill="#ec1c24"
                              d="M39.4 46.9c0 .5-.1 1.8-.1 1.8l1-1.2s-.6-.6-.9-.6"
                            />
                            <path
                              fill="#ec1c24"
                              d="M41.3 43.9h.2v-.2c0-.1-.1-.2-.2h-1.5c-.1 0-.2.1-.2.2v.2h.2z"
                            />
                            <path
                              fill="#ec1c24"
                              d="M39.1 50.2h-.2v.2c0 .1.1.2.2.2H42c.1 0 .2-.1.2-.2v-.2H42z"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  )}
                  {method === "rocket" && (
                    <div className="w-10 h-10 rounded-xl bg-white  flex items-center justify-center shrink-0 border border-gray-100">
                      <svg
                        className="w-8 h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        height="800"
                        width="1200"
                        viewBox="-18.0015 -28.3525 156.013 170.115"
                      >
                        <g fill="none">
                          <path
                            fill="#D12053"
                            d="M96.58 62.45l-53.03-8.31 7.03 31.6z"
                          />
                          <path
                            fill="#E2136E"
                            d="M96.58 62.45L56.62 6.93 43.56 54.15z"
                          />
                          <path
                            fill="#D12053"
                            d="M42.32 53.51L.45 0l54.83 6.55z"
                          />
                          <path fill="#9E1638" d="M23.25 31.15L0 9.24h6.12z" />
                          <path
                            fill="#D12053"
                            d="M107.89 35.46l-9.84 26.69L82.1 40.09z"
                          />
                          <path
                            fill="#E2136E"
                            d="M56.77 84.14l38.61-15.51L97 63.7z"
                          />
                          <path
                            fill="#9E1638"
                            d="M25.89 113.41l16.54-58.02 8.39 37.75z"
                          />
                          <path
                            fill="#E2136E"
                            d="M109.43 35.67l-4.06 11.02 14.64-.24z"
                          />
                        </g>
                      </svg>
                    </div>
                  )}
                  {method === "bank" && (
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0  text-white">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                  )}
                  {method === "cash" && (
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0  text-white">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <rect x="2" y="6" width="20" height="12" rx="2" />
                        <circle cx="12" cy="12" r="3" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12h.01M18 12h.01"
                        />
                      </svg>
                    </div>
                  )}

                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-800">
                      {method === "bkash" && "Transfer to bKash"}
                      {method === "nagad" && "Transfer to Nagad"}
                      {method === "rocket" && "Transfer to Rocket"}
                      {method === "bank" && "Bank Account Transfer"}
                      {method === "cash" && "Hand Cash Withdrawal"}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 tracking-wider">
                      {hasWallet && maskNumber(staffData!.walletNumber!)}
                      {hasBank &&
                        staffData?.bankInfo &&
                        maskNumber(staffData.bankInfo.accountNumber)}
                      {method === "cash" && "Collect at Office"}
                    </span>
                  </div>
                </div>

                <div className="text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex justify-end mt-3">
                <Link
                  href="/staff/payment/settings"
                  className="text-xs font-bold text-[#0c2461] hover:text-blue-900 underline transition-colors"
                >
                  Change Method
                </Link>
              </div>
            </div>
          )}
        </div>

        {!canRequest && (
          <div className="bg-amber-50 border border-amber-200 rounded-md p-5 flex gap-4">
            <div className="shrink-0 p-2 bg-amber-100 rounded-full h-fit">
              <AlertCircle size={20} className="text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-amber-800 font-bold leading-tight">
                উত্তোলনের তথ্য অনুপস্থিত
              </p>
              <p className="text-sm text-amber-700/80 mt-1 font-medium leading-relaxed">
                আপনি একটি পেমেন্ট অনুরোধ করার আগে আপনার পেমেন্ট পদ্ধতি (বিকাশ,
                নগদ, বা ব্যাংক) কনফিগার করতে হবে।
              </p>
              <Link
                href="/staff/payment/settings"
                className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-white bg-amber-600 px-4 py-2 rounded-md hover:bg-amber-700 transition-colors "
              >
                Go to Settings
              </Link>
            </div>
          </div>
        )}

        {canRequest && (
          <div className="flex flex-col items-center w-full">
            <StaffPaymentRequestForm staffId={userId} />
          </div>
        )}
      </div>
    </StaffLayout>
  );
}
