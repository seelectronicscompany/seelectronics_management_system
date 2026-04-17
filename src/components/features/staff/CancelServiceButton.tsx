"use client";

import { staffCancelService } from "@/actions/serviceActions";
import { Spinner } from "@/components/ui";
import { useState } from "react";
import { toast } from "react-toastify";

export default function CancelServiceButton({ serviceId }: { serviceId: string }) {
  const [isCanceling, setIsCanceling] = useState(false);

  const handleCancel = async () => {
    if (!window.confirm("Are you sure you want to cancel this service?")) return;
    setIsCanceling(true);
    const res = await staffCancelService(serviceId);
    toast(res.message, { type: res.success ? "success" : "error" });
    setIsCanceling(false);
  };

  return (
    <button
      disabled={isCanceling}
      onClick={handleCancel}
      className="text-sm font-bold text-red-600 bg-red-50 px-4 py-2 rounded-md hover:bg-red-100 transition-all active:scale-95 border border-red-200 flex items-center gap-2"
    >
      {isCanceling ? <Spinner /> : "Cancel Service"}
    </button>
  );
}
