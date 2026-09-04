"use client";

import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { toast, Id } from "react-toastify";
import { sendCustomerVoiceAndSms } from "@/actions/voiceReminderActions";

export const VOICE_SMS_ACTIONS = {
  3316: {
    label: "কিস্তির টাকা তারিখ পার হবার আগে জরিমানা এড়াতে",
  },
  3315: {
    label: "কিস্তির টাকা বিকাশ/নগদে পরিশোধ করতে",
  },
  1527: {
    label: "আইপিএসের বকেয়া টাকা পরিশোধ করতে",
  },
  1526: {
    label: "আইপিএস ও ব্যাটারি প্যাকেজের টাকা পরিশোধ করতে",
  },
  3519: {
    label: "দীর্ঘদিন বকেয়া টাকা পরিশোধ না করায় ওয়ারেন্টি বাতিল",
  },
  3520: {
    label: "ওয়ারেন্টি বাতিল ঝামেলা এড়াতে বকেয়া টাকা পরিশোধ করুন",
  },
};

export type VoiceSmsActionId = keyof typeof VOICE_SMS_ACTIONS;
export const voiceSmsActionOptions = Object.entries(VOICE_SMS_ACTIONS).map(([id, data]) => ({
  id: Number(id) as VoiceSmsActionId,
  label: data.label,
}));

interface Props {
  customerId: string;
  customerName: string;
  onClose: () => void;
}

export default function VoiceSmsModal({ customerId, customerName, onClose }: Props) {
  const toastId = useRef<Id | null>(null);
  const [loadingAction, setLoadingAction] = useState<VoiceSmsActionId | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAction = async (actionId: VoiceSmsActionId) => {
    if (confirm(`Send voice call and SMS to ${customerName}?`)) {
      setLoadingAction(actionId);
      toastId.current = toast("Sending Voice Call & SMS...", { autoClose: false });
      
      const res = await sendCustomerVoiceAndSms(customerId, actionId);
      
      toast.update(toastId.current, {
        type: res.success ? "success" : "error",
        render: res.message,
        autoClose: 2000,
      });
      setLoadingAction(null);
      if (res.success) {
        onClose();
      }
    }
  };

  const modalContent = (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="mb-2 text-xl font-bold text-gray-800 pr-8">Voice & SMS Reminders</h2>
        <p className="mb-6 text-sm text-gray-500 leading-relaxed">
          Select a reminder to send to <strong className="text-gray-700">{customerName}</strong>. This triggers both a voice call and an SMS simultaneously.
        </p>

        <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          {voiceSmsActionOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAction(option.id)}
              disabled={loadingAction !== null}
              className="flex items-center gap-3 rounded-xl border border-gray-200 p-3 text-left transition-all hover:bg-blue-50 hover:border-blue-300 hover:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <div className="flex-shrink-0 bg-blue-100 p-2.5 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-700 leading-snug flex-1">
                {option.label}
              </span>
              {loadingAction === option.id && (
                <div className="ml-auto flex-shrink-0 w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return mounted ? createPortal(modalContent, document.body) : null;
}
