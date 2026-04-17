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
      <div className="min-h-screen bg-gray-50">
        {/* <MobilePageHeader 
          title="Payments" 
          backHref="/staff/profile" 
          Icon={Wallet}
        /> */}

        <div className="p-3 sm:p-3 space-y-2">
          {/* Action Header - Only show on desktop or as a separate section */}
          <div className="hidden lg:flex items-center gap-3 mb-2 px-1">
            <div className="p-2.5 bg-brand/5 rounded-md text-brand">
              <Wallet size={24} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Payments & Payouts
            </h1>

          </div>
          <Link
            href="/staff/payment/payment-history"
            className="inline-flex items-center justify-center w-full sm:w-1/3 
             px-5 py-2.5 
             text-sm font-semibold uppercase tracking-wide
             text-white bg-brand 
             rounded-lg shadow-md
             transition-all duration-200
             hover:bg-brand/90 hover:shadow-lg hover:scale-[1.02]
             active:scale-95"
          >
            All Payment History
          </Link>

          <div className="grid grid-cols-1 gap-3 lg:gap-2">
            <Link
              href="/staff/payment/request"
              className="w-full border-2 border-gray-200 p-6 lg:p-10 rounded-md lg:rounded-md  flex items-center justify-between gap-6 group  hover:-translate-y-0.5 transition-all active:scale-[0.99] relative overflow-hidden text-black"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-md -mr-24 -mt-24 blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>

              <div className="flex items-center gap-5 lg:gap-4 relative z-10">
                <div className="size-14 lg:size-20 rounded-md lg:rounded-md bg-white/10 backdrop-blur-md text-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg border border-white/20">
                  <CreditCard className="size-7 lg:size-10" />
                </div>
                <div className="min-w-0">
                  <h2 className="font-black text-black text-xl lg:text-3xl uppercase tracking-tight mb-1">
                    Withdraw
                  </h2>
                  <p className="text-black/70 text-[10px] lg:text-sm font-black uppercase tracking-[0.2em]">
                    Instant Payout Request
                  </p>
                </div>
              </div>

              <div className="relative z-10 size-10 lg:size-10 rounded-md bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-brand transition-all">
                <ChevronRight size={24} className="translate-x-0.5" />
              </div>
            </Link>

          </div>


          {/* Payment History Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <h2 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em]">
                Payout History
              </h2>

            </div>

            {paymentsList.length === 0 ? (
              <div className="bg-white p-12 lg:p-16 rounded-md border border-gray-100 text-center text-gray-500 shadow-sm">
                <CreditCard size={48} className="mx-auto mb-4 text-gray-100" />
                <p className="text-lg font-black text-gray-800">
                  No History Yet
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {paymentsList.map((payment: PaymentDataType) => (
                  
                  <Link
                    key={payment.paymentId}
                    href={`/staff/payment/${payment.invoiceNumber}`}
                    className="block bg-white rounded-md lg:rounded-md p-4 shadow-sm border border-gray-100 hover:border-brand/20 transition-all active:scale-[0.99] group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="w-full">
                        {/* Invoice + Status */}
                        <div className="flex justify-between items-center w-full">
                          <span className="font-black text-gray-700 lg:text-lg">
                            {payment.invoiceNumber.startsWith("BAL-")
                              ? "BAL#" + payment.paymentId.substring(0, 8)
                              : "SFC#" + payment.invoiceNumber}
                          </span>

                          <span
                            className={clsx(
                              "px-3 py-0.5 rounded-md text-[10px] lg:text-xs font-black uppercase tracking-wider",
                              payment.status === "completed"
                                ? "bg-[#dcf8de] text-[#4CAF50]"
                                : payment.status === "rejected"
                                  ? "bg-rose-50 text-rose-700"
                                  : "bg-[#4CAF50]/10 text-[#4CAF50]",
                            )}
                          >
                            {payment.status === "completed"
                              ? "Paid"
                              : payment.status === "credited"
                                ? "Received"
                                : payment.status} 
                          </span>
                        </div>

                        {/* Payment Method */}
                        <div className="flex items-center justify-between  gap- my-1.5">
                          {/* <p className="text-gray-600 font-semibold">
                            Payment Method
                          </p> */}
                          <span className="bg-[#E3F2FD] text-[#546E7A] px-2 py-0.5 rounded-md text-[10px] font-black uppercase">
                            {/* {payment.paymentMethod}   */}
                            SE Electronics
                          </span>
                           {payment.status === "requested" ? (
                                                  <span
                                                    className={clsx(
                                                      "px-2 py-[2px] rounded text-xs font-semibold capitalize",
                                                      payment.paymentMethod === "bkash" &&
                                                      "bg-pink-100 text-pink-600 border border-pink-600",
                                                      payment.paymentMethod === "nagad" &&
                                                      "bg-orange-100 text-orange-600 border border-orange-600",
                                                      payment.paymentMethod === "cash" &&
                                                      "bg-blue-100 text-blue-700 border border-blue-700",
                                                      payment.paymentMethod === "bank" &&
                                                      "bg-emerald-100 text-emerald-600 border border-emerald-600"
                                                    )}
                                                  >
                                                    {payment.paymentMethod}
                                                  </span>
                                                ) : (
                                                 
                                                  ''
                                                )}

                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-end -mt-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm lg:text-sm font-bold text-gray-500">
                          {new Date(
                            payment.date || payment.createdAt!,
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="text-sm lg:text-sm  text-gray-500">
                        {"Payment Id: " + payment.paymentId}
                      </div>
                      <div className="text-lg lg:text-2xl font-black text-gray-900">
                        ৳{payment.amount?.toLocaleString()}
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
