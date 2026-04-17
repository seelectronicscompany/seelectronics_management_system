import { BankInfo, PaymentDataType } from "@/types";
import { formatDate } from "@/utils";
import clsx from "clsx";
import { User, Briefcase, Building2, CreditCard, Hash, Calendar, FileText, Smartphone } from "lucide-react";

interface PaymentWebViewProps {
  data: Omit<PaymentDataType, 'staff'> & { staff?: { name: string } };
}

export default function PaymentWebView({ data }: PaymentWebViewProps) {
  const isCompleted = data.status === "completed";

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-3 sm:p-10 space-y-8 border-2 sm:border-4 border-double border-gray-100 rounded-2xl sm:rounded-3xl">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b-2 border-dashed border-gray-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tighter uppercase mb-1">Payment Receipt</h1>
          <p className="text-[13px] font-bold text-brand tracking-[0.2em] uppercase opacity-80">Official Transaction Document</p>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-[13px] font-black text-gray-600 uppercase tracking-widest mb-1">Receipt Number</p>
          <p className="text-base sm:text-lg font-black text-gray-900">#{data.invoiceNumber}</p>
        </div>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {/* Sender Information Table */}
        <section>
          <div className="flex items-center gap-2 mb-3">
             <Building2 size={16} className="text-brand" />
             <h3 className="text-[14px] sm:text-[14px] font-black text-gray-900 uppercase tracking-widest">Sender Information</h3>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-xs">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="w-[40%] sm:w-1/3 bg-gray-50/80 p-3 sm:p-4 font-black text-gray-600 uppercase text-[13px] sm:text-[13px] tracking-widest border-r border-gray-200">Company</td>
                  <td className="p-3 sm:p-4 font-bold text-gray-900 uppercase">SE Electronics</td>
                </tr>
                <tr>
                  <td className="w-[40%] sm:w-1/3 bg-gray-50/80 p-3 sm:p-4 font-black text-gray-600 uppercase text-[13px] sm:text-[13px] tracking-widest border-r border-gray-200">Method</td>
                  <td className="p-3 sm:p-4 font-bold text-gray-900 uppercase tracking-widest">{data.paymentMethod}</td>
                </tr>
                {data.paymentMethod === 'bank' && data.senderBankInfo ? (
                  <>
                    <tr>
                      <td className="w-[40%] sm:w-1/3 bg-gray-50/80 p-3 sm:p-4 font-black text-gray-600 uppercase text-[13px] sm:text-[13px] tracking-widest border-r border-gray-200">Bank</td>
                      <td className="p-3 sm:p-4 space-y-1">
                        <p className="font-bold text-gray-900 leading-none">{data.senderBankInfo.bankName}</p>
                        <p className="text-[13px] text-gray-500 font-medium">{data.senderBankInfo.accountNumber}</p>
                      </td>
                    </tr>
                  </>
                ) : (
                   <tr>
                    <td className="w-[40%] sm:w-1/3 bg-gray-50/80 p-3 sm:p-4 font-black text-gray-600 uppercase text-[13px] sm:text-[13px] tracking-widest border-r border-gray-200">Wallet / Trx</td>
                    <td className="p-3 sm:p-4 space-y-1">
                      <p className="font-bold text-gray-900">{data.senderWalletNumber || "N/A"}</p>
                      <p className="text-[13px] font-mono text-gray-400 break-all">{data.transactionId || "No Trx ID"}</p>
                    </td>
                  </tr>
                )}
                {data.serviceId && (
                  <tr>
                    <td className="w-[40%] sm:w-1/3 bg-gray-50/80 p-3 sm:p-4 font-black text-gray-600 uppercase text-[13px] sm:text-[13px] tracking-widest border-r border-gray-200">Service ID</td>
                    <td className="p-3 sm:p-4 font-bold text-brand uppercase tracking-tighter">#{data.serviceId}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Receipt Information Table */}
        <section>
          <div className="flex items-center gap-2 mb-3">
             <User size={16} className="text-brand" />
             <h3 className="text-[14px] sm:text-[14px] font-black text-gray-900 uppercase tracking-widest">Recipient Information</h3>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-xs">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="w-[40%] sm:w-1/3 bg-gray-50/80 p-3 sm:p-4 font-black text-gray-600 uppercase text-[13px] sm:text-[13px] tracking-widest border-r border-gray-200">Staff</td>
                  <td className="p-3 sm:p-4 font-bold text-gray-900 uppercase">{data.staff?.name || 'N/A'}</td>
                </tr>
                <tr>
                  <td className="w-[40%] sm:w-1/3 bg-gray-50/80 p-3 sm:p-4 font-black text-gray-600 uppercase text-[13px] sm:text-[13px] tracking-widest border-r border-gray-200">Staff ID</td>
                  <td className="p-3 sm:p-4 font-black text-gray-400 tracking-tighter opacity-80">{data.staffId}</td>
                </tr>
                {data.paymentMethod === 'bank' && data.receiverBankInfo ? (
                  <tr>
                    <td className="w-[40%] sm:w-1/3 bg-gray-50/80 p-3 sm:p-4 font-black text-gray-500 uppercase text-[13px] sm:text-[13px] tracking-widest border-r border-gray-200">Bank</td>
                    <td className="p-3 sm:p-4 space-y-1">
                      <p className="font-bold text-gray-900 leading-none">{data.receiverBankInfo.bankName}</p>
                      <p className="text-[13px] text-gray-500 font-medium">{data.receiverBankInfo.accountNumber}</p>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td className="w-[40%] sm:w-1/3 bg-gray-50/80 p-3 sm:p-4 font-black text-gray-500 uppercase text-[13px] sm:text-[13px] tracking-widest border-r border-gray-200">Wallet</td>
                    <td className="p-3 sm:p-4 font-bold text-gray-900">{data.receiverWalletNumber || "N/A"}</td>
                  </tr>
                )}
                <tr>
                  <td className="w-[40%] sm:w-1/3 bg-gray-50/80 p-3 sm:p-4 font-black text-gray-500 uppercase text-[13px] sm:text-[13px] tracking-widest border-r border-gray-200">Details</td>
                  <td className="p-3 sm:p-4 text-[12px] text-gray-600 italic leading-snug">
                    {data.description || "No description."}
                  </td>
                </tr>
                <tr className="bg-emerald-50/30">
                  <td className="w-[40%] sm:w-1/3 bg-emerald-50/50 p-3 sm:p-4 font-black text-emerald-700 uppercase text-[13px] sm:text-[13px] tracking-widest border-r border-emerald-100">Amount</td>
                  <td className="p-3 sm:p-4">
                    <span className="text-xl sm:text-2xl font-black text-emerald-600 tracking-tighter">৳{data.amount.toLocaleString()} <small className="text-[12px] sm:text-[13px] uppercase ml-1 opacity-60">TK</small></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Footer Summary */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 border-t border-gray-100 italic text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-gray-300" />
          <span className="text-gray-600 text-[12px] sm:text-[13px]">Date: {formatDate(data.date)}</span>
        </div>
        <div className="flex items-center gap-2">
           <Hash size={16} className="text-gray-600" />
           <span className="truncate text-gray-600 text-[12px] sm:text-[13px]">ID: {data.paymentId}</span>
        </div>
      </div>
    </div>
  );
}
