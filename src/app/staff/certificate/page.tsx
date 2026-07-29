import { getCertificatePreviewData } from "@/actions/staffActions";
import CertificateTemplate from "@/components/features/staff/CertificateTemplate";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  searchParams: Promise<{ token?: string }>;
}

export default async function StaffCertificatePage({
  searchParams,
}: PageProps) {
  const { token } = await searchParams;

  if (!token) {
    notFound();
  }

  const res = await getCertificatePreviewData(token);

  if (!res.success || !res.data) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-800 text-center">
        <div className="max-w-md w-full p-8 bg-white border border-gray-200 rounded-3xl space-y-6 shadow-sm">
          <div className="size-16 bg-red-50 border border-red-200 text-red-500 rounded-2xl flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-slate-900">
            {res.message || "Invalid or Expired Link"}
          </h1>
          <p className="text-slate-500 text-sm">
            The certificate link may have expired or is invalid. Please contact
            the administrator to issue a new certificate.
          </p>
          <Link
            href="/staff/profile"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
          >
            <ArrowLeft className="size-4" /> Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const data = res.data;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col animate-in fade-in duration-300">
      {/* Top Header */}
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/staff/profile"
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200 text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="size-5" />
          </Link>
          <div>
            <h1 className="text-lg font-bold text-slate-900 font-sans">
              Certificate Preview
            </h1>
            <p className="text-xs text-slate-500">
              {data.shopName || "Shop Certificate"}
            </p>
          </div>
        </div>

        <Link
          href={`/pdf/download?token=${token}`}
          className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-5 py-2.5 rounded-xl font-black transition-all shadow-lg shadow-amber-500/10 active:scale-[0.98] text-sm"
        >
          <Download className="size-4" /> Download PDF
        </Link>
      </header>

      {/* Preview Section */}
      <main className="flex-1 flex items-center justify-center p-6 overflow-auto">
        <div className="w-full max-w-[1200px] aspect-[297/210] bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden p-1 relative flex items-center justify-center">
          {/* Certificate Wrapper to fit nicely with zoom/scale */}
          <div className="origin-center scale-[0.3] min-[400px]:scale-[0.38] min-[500px]:scale-[0.48] sm:scale-[0.55] md:scale-[0.72] lg:scale-[0.85] xl:scale-100 transition-all duration-300">
            <CertificateTemplate data={data as any} />
          </div>
        </div>
      </main>
    </div>
  );
}
