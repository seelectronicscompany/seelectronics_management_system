"use client";

import { HelpCircle, CheckCircle, DollarSign, AlertCircle } from "lucide-react";

interface FeedbackItemProps {
  item: {
    question: string;
    answer: string;
    amount?: string | number;
    comment?: string;
  };
  idx: number;
}

export function FeedbackItem({ item, idx }: FeedbackItemProps) {
  return (
    <div className="bg-gray-50/50 border border-gray-100 rounded-xl p-4 space-y-2">
      <div className="flex items-start gap-2">
        <HelpCircle size={16} className="text-blue-600 shrink-0 mt-0.5" />
        <p className="text-sm font-semibold text-gray-700">{item.question}</p>
      </div>

      <div className="flex items-start gap-2 ml-6">
        <CheckCircle size={16} className="text-emerald-600 shrink-0 mt-0.5" />
        <p className="text-sm text-gray-600 italic">{item.answer}</p>
      </div>

      {item.amount && (
        <div className="ml-6 text-xs font-bold text-gray-500 flex items-center gap-2">
          <DollarSign size={12} className="text-green-600" />
          Amount: <span className="text-gray-700">${item.amount}</span>
        </div>
      )}

      {item.comment && (
        <div className="ml-6 text-xs font-semibold text-gray-600 bg-yellow-50 border border-yellow-100 p-2 rounded-lg flex items-start gap-2">
          <AlertCircle size={14} className="text-yellow-600 shrink-0 mt-0.5" />
          <span>Note: {item.comment}</span>
        </div>
      )}
    </div>
  );
}