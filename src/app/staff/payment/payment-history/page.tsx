import React from "react";
import { verifyStaffSession } from "@/actions";
import { getStaffPaymentHistory } from "@/actions/paymentRequestActions";
import { StaffLayout } from "@/components/layout/StaffLayout";
import { PaymentDataType } from "@/types";
import clsx from "clsx";
import Link from "next/link";
import { CreditCard } from "lucide-react";

export default async function PaymentHistoryPage() {
  const session = await verifyStaffSession();
  if (!session.isAuth) return null;

  const userId = session.userId as string;
  const paymentsRes = await getStaffPaymentHistory(userId);

  const paymentsList = (
    paymentsRes.success ? paymentsRes.data ?? [] : []
  ) as PaymentDataType[];

  return (
    <StaffLayout balance={0}>
      <div className="min-h-screen bg-gray-50 p-3 space-y-3">

        {/* Title */}
        <h1 className="text-xl font-black text-gray-900 uppercase tracking-wide">
          All Payment History
        </h1>

        {paymentsList.length === 0 ? (
          <div className="bg-white p-12 rounded-md border text-center text-gray-500 shadow-sm">
            <CreditCard size={40} className="mx-auto mb-4 text-gray-200" />
            <p className="text-lg font-black text-gray-800">
              No History Yet
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {paymentsList.map((payment: PaymentDataType) => {
              const isRequest = payment.status === "requested";

             const statusLabel =
  payment.status === "completed"
    ? "PAID"
    : payment.status === "requested"
    ? "REQUESTED"
    : payment.status === "credited"
    ? "RECEIVED"
    : payment.status === "rejected"
    ? "REJECTED"
    : "PROCESSING";

              const statusStyle =
                payment.status === "completed"
                  ? "bg-green-100 text-green-700 border border-green-700"
                  : payment.status === "requested"
                  ? "bg-blue-100 text-blue-700 border border-blue-700"
                  : "bg-yellow-100 text-yellow-700 border border-yellow-700";

              return (
                <Link
                  key={payment.paymentId}
                  href={`/staff/payment/${payment.invoiceNumber}`}
                  className="block bg-white rounded-lg p-4 border border-gray-300 shadow-sm active:scale-[0.98] transition-all"
                >
                  <div className="flex justify-between gap-3">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <h2 className="font-extrabold text-gray-800 text-sm uppercase tracking-wide">
                          {isRequest
                            ? "Cash Out Payment Request"
                            : "Technician Payment Cash In"}
                        </h2>

                        <p className="text-sm text-gray-700 mt-1">
                          {isRequest
                            ? `আপনার পেমেন্ট রিকোয়েস্টের ৳${payment.amount} টাকা ${payment.paymentMethod} নাম্বারে পাঠানো হয়েছে।`
                            : `সার্ভিস ID (${payment.serviceId}) থেকে ৳${payment.amount} টাকা আপনার ব্যালেন্সে যোগ হয়েছে।`}
                        </p>

                        <p className="text-xs text-gray-500 mt-2">
                          Payment ID: {payment.paymentId}
                        </p>

                        <p className="text-xs text-gray-500">
                          Status: {statusLabel}
                        </p>

                        <p className="text-xs text-gray-500">
                          {payment.createdAt
                            ? new Date(payment.createdAt).toLocaleString()
                            : ""}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex flex-col items-end justify-between gap-2">

                      {/* Payment Method (always show) */}
                       {isRequest ? (
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
                        // <span className="px-2 py-[2px] rounded text-xs font-bold bg-green-100 text-green-700 border border-green-600">
                        //   Balance Added
                        // </span>
                        ''
                      )}

                      {/* Amount */}
                      <span className="text-lg font-extrabold text-gray-900">
                        ৳{payment.amount?.toLocaleString()}
                      </span>

                      {/* Status Badge */}
                      <span className={clsx("text-xs font-bold px-2 py-[2px] rounded border", statusStyle)}>
                        {statusLabel}
                      </span>

                      {/* Balance Tag */}
                      {!isRequest && (
                        <span className="text-xs font-bold px-2 py-[2px] rounded bg-green-100 text-green-700 border border-green-600">
                          Balance Added
                        </span>
                      )}
                    </div>

                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </StaffLayout>
  );
}