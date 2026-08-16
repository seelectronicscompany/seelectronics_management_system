import { MessageSquare, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ChatSupportComingSoonPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 max-w-md w-full">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <MessageSquare className="size-8 text-blue-500" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Chat Support
        </h1>
        
        <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-6 uppercase tracking-wider">
          Coming Soon
        </div>

        <p className="text-gray-500 mb-8">
          We are working hard to bring you real-time chat support. This feature will be available soon!
        </p>

        <Link
          href="/customer"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto"
        >
          <ArrowLeft className="size-4" />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
