import { verifyCustomerSession } from "@/actions/customerActions";
import { getInvoiceByNumber } from "@/actions/invoiceActions";
import { CustomerLayout } from "@/components/layout";
import InvoiceWebView from "@/components/features/invoices/InvoiceWebView";
import { redirect } from "next/navigation";
import { Download, AlertCircle } from "lucide-react";
import Link from "next/link";
import { InvoicesType, Product } from "@/types";

export default async function CustomerInvoicePage() {
  const session = await verifyCustomerSession();
  
  if (!session.isAuth || !session.customer) {
    redirect("/customer/login");
  }

  if (!session.customer.invoiceNumber) {
    return (
      <CustomerLayout>
        <div className="p-8 pb-24 max-w-lg mx-auto text-center mt-10">
          <div className="size-20 mx-auto bg-gray-100 rounded-full flex gap-2 items-center justify-center text-gray-400 mb-4">
            <AlertCircle size={32} />
          </div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight mb-2">No Invoice Found</h1>
          <p className="text-gray-500 font-medium mb-8">
            There is no invoice associated with your current customer profile.
          </p>
          <Link href="/customer/profile" className="px-6 py-3 bg-brand text-white font-black uppercase tracking-widest text-sm rounded-xl">
            Return to Dashboard
          </Link>
        </div>
      </CustomerLayout>
    );
  }

  const res = await getInvoiceByNumber(session.customer.invoiceNumber);

  if (!res.success || !res.data) {
    return (
      <CustomerLayout>
        <div className="p-8 pb-24 max-w-lg mx-auto text-center mt-10">
          <div className="size-20 mx-auto bg-rose-50 rounded-full flex gap-2 items-center justify-center text-rose-400 mb-4">
            <AlertCircle size={32} />
          </div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight mb-2">Invoice Unavailable</h1>
          <p className="text-gray-500 font-medium mb-8">
            We couldn't retrieve your invoice at this time. Please try again later or contact support.
          </p>
          <Link href="/customer/profile" className="px-6 py-3 bg-brand text-white font-black uppercase tracking-widest text-sm rounded-xl">
            Return to Dashboard
          </Link>
        </div>
      </CustomerLayout>
    );
  }

  const invoiceData = res.data as (InvoicesType & { products: Product[] });

  return (
    <CustomerLayout>
      <div className="p-3 sm:p-4 pb-24 max-w-4xl mx-auto space-y-4">
        
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
          <div>
            <h1 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Invoice Details</h1>
            <p className="text-sm font-medium text-gray-500">Preview your official receipt below.</p>
          </div>
          <a
            href={`/pdf/download?type=invoice&id=${session.customer.invoiceNumber}`}
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 bg-brand text-white font-black uppercase tracking-widest text-xs rounded-md hover:bg-brand/90 transition-colors shadow-md shadow-brand/20 w-full sm:w-auto justify-center"
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>
        
        {/* The Formal Web View */}
        <InvoiceWebView data={invoiceData} />
        
      </div>
    </CustomerLayout>
  );
}
