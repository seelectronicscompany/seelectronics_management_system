"use client";

import { getProducts } from "@/actions/productActions";
import InvoiceDueBgImage from "@/assets/images/customer-invoice-due.jpg";
import InvoicePaidBgImage from "@/assets/images/customer-invoice-paid.jpg";
import PaymentReceiptBgImage from "@/assets/images/payment-receipt.jpg";
import InvoiceWebView from "./InvoiceWebView";
import PaymentWebView from "../payments/PaymentWebView";
import { Modal, Spinner } from "@/components/ui";
import { InvoicesType, PaymentDataType, Product } from "@/types";
import { useState } from "react";

export default function InvoicePreviewButton({
  invoiceData,
  paymentData,
  children,
  ...rest
}: {
  invoiceData?: InvoicesType;
  paymentData?: PaymentDataType;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [showInvoiceViewModal, setShowInvoiceViewModal] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const res = await getProducts(invoiceData!.id);
    if (res.success) {
      setProducts(res.data!);
    } else {
      alert(res.message);
    }
  };

  const invoicePreviewHandler = async () => {
    setShowInvoiceViewModal(true);
    if (invoiceData) {
      fetchProducts();
    }
  };

  return (
    <>
      {showInvoiceViewModal && (
        <Modal
          width="900"
          title="Invoice View"
          isVisible
          onClose={() => setShowInvoiceViewModal(false)}
        >
          {invoiceData && products.length === 0 ? (
            <div className="__center h-32">
              <Spinner />
            </div>
          ) : (
            invoiceData && (
              <InvoiceWebView
                data={{
                  ...invoiceData,
                  products,
                }}
              />
            )
          )}
          {paymentData && (
            <PaymentWebView
              data={{
                ...paymentData,
                staff: paymentData.staff ? { name: paymentData.staff.name } : { name: 'N/A' }
              }}
            />
          )}
        </Modal>
      )}
      <button onClick={invoicePreviewHandler} {...rest}>
        {children}
      </button>
    </>
  );
}
