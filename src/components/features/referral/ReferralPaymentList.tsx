"use client";

import { updateReferralPaymentStatus } from "@/actions";
import { Modal, Spinner } from "@/components/ui";
import clsx from "clsx";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  MoreVertical,
  Search,
  User,
  Wallet,
  XCircle,
  AlertCircle
} from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";

export default function ReferralPaymentList({
  requests: initialRequests
}: {
  requests: any[]
}) {
  const [requests, setRequests] = useState(initialRequests);
  const [query, setQuery] = useState("");
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [isPending, startTransition] = useTransition();
  const [adminNote, setAdminNote] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [senderNumber, setSenderNumber] = useState("");

  const filteredRequests = requests.filter(req =>
    req.requestId.toLowerCase().includes(query.toLowerCase()) ||
    req.customer?.name.toLowerCase().includes(query.toLowerCase()) ||
    req.vipCardNumber.toLowerCase().includes(query.toLowerCase())
  );

  const handleUpdate = async (status: string) => {
    if (status === 'completed' && !transactionId) {
      return toast.error("Enter transaction ID for completed payments");
    }

    startTransition(async () => {
      const res = await updateReferralPaymentStatus(selectedRequest.id, {
        status: status as any,
        transactionId,
        senderNumber,
        adminNote,
      });

      if (res.success) {
        toast.success(res.message);
        setRequests(prev => prev.map(r => r.id === selectedRequest.id ? {
          ...r,
          status,
          transactionId,
          senderNumber,
          adminNote,
          processedAt: new Date()
        } : r));
        setSelectedRequest(null);
        setTransactionId("");
        setSenderNumber("");
        setAdminNote("");
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
          <input
            type="text"
            placeholder="Search by ID, name or card number..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all"
          />
        </div>
        <div className="flex flex-wrap gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 hide-scrollbar">
          {['all', 'requested', 'processing', 'completed', 'rejected'].map(status => (
            <button
              key={status}
              className="px-4 py-2 rounded-lg text-sm font-semibold capitalize bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-x-auto min-h-[400px]">
        <table className="w-full text-sm text-left min-w-[850px] whitespace-nowrap">
          <thead className="bg-gray-50/50">
            <tr>
              <th className="px-6 py-4 font-bold text-gray-700">Request Details</th>
              <th className="px-6 py-4 font-bold text-gray-700">Customer</th>
              <th className="px-6 py-4 font-bold text-gray-700">Payment Info</th>
              <th className="px-6 py-4 font-bold text-gray-700 text-right">Amount</th>
              <th className="px-6 py-4 font-bold text-gray-700 text-right">Status</th>
              <th className="px-6 py-4 font-bold text-gray-700 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredRequests.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-20 text-center text-gray-400">
                  <div className="flex flex-col items-center gap-2">
                    <AlertCircle className="size-8" />
                    <span>No payment requests found</span>
                  </div>
                </td>
              </tr>
            ) : (
              filteredRequests.map(req => (
                <tr key={req.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-800 tracking-tight">{req.requestId}</p>
                    <p className="text-xs text-gray-400">{new Date(req.createdAt).toLocaleString()}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <User className="size-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{req.customer?.name}</p>
                        <p className="text-xs text-gray-500">{req.vipCardNumber}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-700 capitalize">{req.paymentMethod}</p>
                    <p className="text-xs text-brand font-mono">{req.walletNumber}</p>

                  </td>
                  <td className="px-6 py-4 text-right font-bold text-gray-800">
                    ৳{Number(req.amount).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={clsx(
                      "px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider",
                      req.status === 'completed' && "bg-green-100 text-green-700",
                      req.status === 'requested' && "bg-blue-100 text-blue-700",
                      req.status === 'processing' && "bg-amber-100 text-amber-700",
                      req.status === 'rejected' && "bg-red-100 text-red-700",
                    )}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {req.status === 'requested' || req.status === 'processing' ? (
                      <button
                        onClick={() => setSelectedRequest(req)}
                        className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors"
                      >
                        <MoreVertical className="size-5" />
                      </button>
                    ) : (
                      <span className="text-xs text-gray-400 font-medium">Processed</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Action Modal */}
      {selectedRequest && (
        <Modal
          isVisible
          title={`Process Payment Request - ${selectedRequest.requestId}`}
          onClose={() => setSelectedRequest(null)}
          width="500"
        >
          <div className="space-y-6 pt-2">
            <div className="bg-brand/5 p-4 rounded-xl border border-brand/10 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Requested Amount:</span>
                <span className="font-bold text-gray-800">৳{Number(selectedRequest.amount).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Method:</span>
                <span className="font-bold text-brand capitalize">{selectedRequest.paymentMethod}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Recipient NO:</span>
                <span className="font-bold text-gray-800">{selectedRequest.walletNumber}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Transaction ID <span className="text-red-500 text-lg">*</span></label>
                <input
                  type="text"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  placeholder="e.g. 7K4R2M9L"
                  className="w-full h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Sender Number (Optional)</label>
                <input
                  type="text"
                  value={senderNumber}
                  onChange={(e) => setSenderNumber(e.target.value)}
                  placeholder="e.g. 017XXXXXXXX"
                  className="w-full h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Admin Note (Optional)</label>
                <textarea
                  value={adminNote}
                  onChange={(e) => setAdminNote(e.target.value)}
                  placeholder="Add any notes regarding this payment..."
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-brand/20 h-24 resize-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => handleUpdate('rejected')}
                disabled={isPending}
                className="h-11 rounded-xl font-bold bg-red-50 text-red-600 hover:bg-red-100 transition-all flex items-center justify-center gap-2"
              >
                <XCircle className="size-5" />
                Reject
              </button>
              <button
                onClick={() => handleUpdate('completed')}
                disabled={isPending || !transactionId}
                className="h-11 rounded-xl font-bold bg-brand text-white shadow-lg shadow-brand/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2"
              >
                {isPending ? <Spinner className="invert" /> : (
                  <>
                    <CheckCircle2 className="size-5" />
                    Mark as Paid
                  </>
                )}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
