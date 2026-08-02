import { verifyStaffSession } from "@/actions";
import { getStaffPaymentHistory } from "@/actions/paymentRequestActions";
import { getStaffProfileStats } from "@/actions/staffActions";
import { StaffLayout } from "@/components/layout/StaffLayout";
import { PaymentDataType } from "@/types";
import clsx from "clsx";
import { ArrowLeft, ChevronRight, CreditCard, Wallet, Settings } from "lucide-react";
import Link from "next/link";
import { MobilePageHeader } from "@/components/layout";

export default async function StaffPaymentHubPage() {
  const session = await verifyStaffSession();
  if (!session.isAuth) return null;

  const userId = session.userId as string;
  const [statsRes, paymentsRes] = await Promise.all([
    getStaffProfileStats(userId),
    getStaffPaymentHistory(userId),
  ]);

  const stats = statsRes.success ? statsRes.data : null;
  const paymentsList = (
    paymentsRes.success ? (paymentsRes.data ?? []) : []
  ) as PaymentDataType[];

  return (
    <StaffLayout balance={stats?.availableBalance || 0}>
      <div className="min-h-screen bg-gray-50 pb-28">
        <div className="p-4 space-y-4">
          {/* Action Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-brand/5 rounded-xl text-brand">
                <Wallet size={22} className="stroke-[2.5]" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold text-slate-800 uppercase tracking-wide">
                  Payments & Hub
                </h1>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Manage your balance and payout withdrawals
                </p>
              </div>
            </div>
            
            <Link
              href="/staff/payment/payment-history"
              className="text-center text-xs font-black uppercase tracking-wider text-slate-600 bg-slate-50 border border-slate-100 hover:bg-slate-100 py-2.5 px-4 rounded-xl transition-all duration-200 active:scale-95 shrink-0"
            >
              Payment History
            </Link>
          </div>

          {/* Withdraw Card */}
          <div className="grid grid-cols-1">
            <Link
              href="/staff/payment/request"
              className="w-full bg-gradient-to-br from-[#0A1A3A] to-[#122A5E] p-6 rounded-3xl flex items-center justify-between gap-4 group hover:shadow-lg transition-all active:scale-[0.99] relative overflow-hidden text-white border border-white/5 shadow-md"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-white/10 transition-all duration-700"></div>

              <div className="flex items-center gap-4 relative z-10">
                <div className="size-14 rounded-2xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center group-hover:scale-105 transition-transform border border-white/10 shadow-inner">
                  <CreditCard className="size-7 stroke-[1.8]" />
                </div>
                <div className="min-w-0">
                  <h2 className="font-black text-white text-xl uppercase tracking-wider">
                    Withdraw
                  </h2>
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-0.5">
                    Request Payout Transfer
                  </p>
                </div>
              </div>

              <div className="relative z-10 size-9 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-[#0A1A3A] transition-all">
                <ChevronRight size={20} className="translate-x-0.5" />
              </div>
            </Link>
          </div>

          {/* Payment History Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Recent Payouts
              </h2>
            </div>

            {paymentsList.length === 0 ? (
              <div className="bg-white p-12 rounded-3xl border border-slate-100 text-center text-slate-400 shadow-sm">
                <CreditCard size={36} className="mx-auto mb-3 text-slate-300" />
                <p className="text-sm font-extrabold text-slate-600 uppercase tracking-wider">No Payout Requests</p>
                <p className="text-xs text-slate-400 mt-0.5 font-bold">Your recent transactions will appear here.</p>
              </div>
            ) : (
              <div className="grid gap-3">
                {paymentsList.slice(0, 10).map((payment: PaymentDataType) => (
                  <Link
                    key={payment.paymentId}
                    href={`/staff/payment/${payment.invoiceNumber}`}
                    className="block bg-white rounded-2xl p-4 shadow-sm border border-slate-100/60 hover:border-brand/20 transition-all active:scale-[0.99] group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="w-full">
                        <div className="flex justify-between items-center w-full">
                          <span className="font-extrabold text-slate-800 text-sm">
                            {payment.invoiceNumber.startsWith("BAL-")
                              ? "Withdrawal"
                              : "Invoice: #" + payment.invoiceNumber}
                          </span>

                          <span
                            className={clsx(
                              "px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border",
                              payment.status === "completed" || payment.status === "credited"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                                : payment.status === "rejected"
                                  ? "bg-rose-50 text-rose-700 border-rose-100"
                                  : "bg-blue-50 text-blue-700 border-blue-100",
                            )}
                          >
                            {payment.status === "completed"
                              ? "Paid"
                              : payment.status === "credited"
                                ? "Received"
                                : payment.status} 
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 mt-2">
                          <span className="bg-slate-50 border border-slate-100 text-slate-500 px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wide">
                            SE Electronics
                          </span>
                          {payment.status === "requested" && (
                            <span
                              className={clsx(
                                "px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wide border",
                                payment.paymentMethod === "bkash" && "bg-pink-50 text-pink-600 border-pink-100",
                                payment.paymentMethod === "nagad" && "bg-orange-50 text-orange-600 border-orange-100",
                                payment.paymentMethod === "cash" && "bg-blue-50 text-blue-700 border-blue-100",
                                payment.paymentMethod === "bank" && "bg-emerald-50 text-emerald-600 border-emerald-100"
                              )}
                            >
                              {payment.paymentMethod}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-end pt-2 border-t border-slate-50 mt-3 text-[10px] font-bold text-slate-400">
                      <div>
                        <span>
                          {new Date(
                            payment.date || payment.createdAt!,
                          ).toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-base font-black text-slate-800">
                          ৳{payment.amount?.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </StaffLayout>
  );
}
