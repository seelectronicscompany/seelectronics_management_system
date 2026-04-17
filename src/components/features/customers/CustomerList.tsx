import { getCustomers } from "@/actions";
import { CopyButton } from "@/components/ui";
import { Crown } from "lucide-react";
import { SearchParams } from "@/types";
import { formatDate } from "@/utils";
import clsx from "clsx";
import InvoicePreviewButton from "../../features/invoices/InvoicePreviewButton";
import CustomerActionButtons from "./CustomerActionButtons";

export default async function CustomerList(params: SearchParams) {
  const response = await getCustomers(params);

  if (!response.success) {
    return (
      <tr>
        <td colSpan={8} className="text-center py-4 text-red-500">
          <p>{response.message}</p>
        </td>
      </tr>
    );
  }

  if (response.data!.length === 0) {
    return (
      <tr className="border-b">
        <td colSpan={8} className="text-center py-4 text-gray-600">
          <p>No data</p>
        </td>
      </tr>
    );
  }

  const customers = response.data!;

  return customers.map((customer) => (
    <tr key={customer.id} className="hover:bg-gray-50/50 transition-colors group">
      <td className="py-4 px-4 whitespace-nowrap">
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-900 text-sm sm:text-base">{customer.customerId}</span>
          <CopyButton content={customer.customerId} />
        </div>
      </td>
      <td className="py-4 px-4 whitespace-nowrap">
        <div className="flex items-center gap-2">
          {customer.invoiceNumber ? (
            <div className="flex items-center gap-1.5">
              <InvoicePreviewButton
                invoiceData={customer.invoice}
                className="text-brand font-bold hover:underline cursor-pointer text-sm sm:text-base"
              >
                <span>#{customer.invoiceNumber}</span>
              </InvoicePreviewButton>
              <CopyButton content={customer.invoiceNumber} />
            </div>
          ) : (
            <span className="text-sm sm:text-sm text-gray-400 italic">No Invoice</span>
          )}
        </div>
      </td>
      <td className="py-4 px-4 whitespace-nowrap">
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-900 text-sm sm:text-base">{customer.name}</span>
          {customer.vipStatus === "approved" && (
            <span className="px-2 py-0.5 bg-gradient-to-r from-amber-200 to-yellow-400 text-amber-900 border border-amber-300 shadow-sm text-[10px] font-black rounded-full uppercase tracking-wider flex items-center gap-1">
              <Crown size={12} strokeWidth={3} className="text-amber-800" />
              VIP
            </span>
          )}
        </div>
      </td>
      <td className="py-4 px-4 whitespace-nowrap text-gray-700 font-bold text-sm sm:text-base">
        {customer.phone}
      </td>
      <td className="py-4 px-4 whitespace-nowrap">
        <p title={customer.address} className="truncate max-w-[200px] text-gray-600 text-[16px] font-medium">
          {customer.address}
        </p>
      </td>
      <td
        className={clsx(
          "py-4 px-4 whitespace-nowrap text-right font-black text-sm sm:text-base",
          (customer.invoice?.dueAmount || 0) > 0 ? "text-red-500" : "text-emerald-600",
        )}
      >
        ৳{customer.invoice?.total.toLocaleString() || 0}
      </td>
      <td className="py-4 px-4 whitespace-nowrap text-gray-500 text-sm sm:text-sm font-bold">
        {customer.invoice?.date ? formatDate(customer.invoice.date) : "N/A"}
      </td>
      <td className="py-4 px-4 whitespace-nowrap sticky right-0 bg-white group-hover:bg-gray-50 transition-colors shadow-[-4px_0_10px_-4px_rgba(0,0,0,0.1)]">
        <CustomerActionButtons customerData={customer} />
      </td>
    </tr>
  ));
}
