"use client";

import { useState } from "react";
import PaymentForm from "./PaymentForm";

export default function AddPaymentButton() {
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  return (
    <>
      {showPaymentForm && (
        <PaymentForm
          mode="create"
          paymentInfo={{
            staffId: "unregistered",
            paymentMethod: "bkash",
            amount: 0,
            date: new Date(),
          }}
          onClose={() => setShowPaymentForm(false)}
        />
      )}
      <button onClick={() => setShowPaymentForm(true)} className="__btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <span className="hidden lg:block">Add payment</span>
      </button>
    </>
  );
}
