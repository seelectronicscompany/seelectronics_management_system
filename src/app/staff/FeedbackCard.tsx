"use client";
import { useState } from "react";
import { Star, Phone, MapPin, ChevronDown, CheckCircle, FileText, MessageSquare } from "lucide-react";
import { FeedbackItem } from "./FeedbackItem";

export function FeedbackCard({ feedback }: { feedback: any }) {
  const [open, setOpen] = useState(false);
  const initials = feedback.customerName?.slice(0, 2) || "??";

  return (
    <div
      className="bg-white rounded border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-all"
      onClick={() => setOpen(!open)}
    >
      {/* Compact summary row */}
      <div className="flex items-center gap-2 p-3">
        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center text-sm font-bold shrink-0">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-gray-800 truncate">{feedback.customerName}</p>
          <p className="text-xs text-gray-400 font-medium">{feedback.customerPhone} · {feedback.customerAddress}</p>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <div className="flex">
            {[1,2,3,4,5].map(s => (
              <Star key={s} size={12} className={s <= feedback.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"} />
            ))}
          </div>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${feedback.serviceType === "install" ? "bg-blue-50 text-blue-700" : "bg-green-50 text-green-700"}`}>
            {feedback.serviceType}
          </span>
        </div>
        <ChevronDown size={16} className={`text-gray-400 transition-transform shrink-0 ${open ? "rotate-180" : ""}`} />
      </div>

      {/* Expanded detail */}
      {open && (
        <div className="border-t border-gray-100" onClick={e => e.stopPropagation()}>
          {/* Service info */}
          <div className="p-4 grid grid-cols-2 gap-3 border-b border-gray-50">
            {[
              ["Product type", feedback.productType],
              ["Model", feedback.productModel],
              ["Service type", feedback.serviceType],
              ["Date", new Date(feedback.createdAt).toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' })],
            ].map(([label, val]) => (
              <div key={label}>
                <p className="text-[10px] text-gray-400 uppercase font-bold">{label}</p>
                <p className="text-sm font-bold text-gray-700">{val}</p>
              </div>
            ))}
          </div>

          {/* Feedback items */}
          {feedback.feedbacks?.length > 0 && (
            <div className="p-4 space-y-3 border-b border-gray-50">
              <p className="text-[10px] font-bold text-gray-400 uppercase flex items-center gap-1">
                <MessageSquare size={11} /> Feedback details
              </p>
              {feedback.feedbacks.map((item: any, idx: number) => (
                <FeedbackItem key={idx} item={item} idx={idx} />
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="px-4 py-3 flex items-center justify-between bg-gray-50/50">
            <span className="text-xs font-mono text-gray-400">#{feedback.serviceId}</span>
            <div className="flex items-center gap-1 text-green-600">
              <CheckCircle size={12} />
              <span className="text-[10px] font-bold uppercase">Verified</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}