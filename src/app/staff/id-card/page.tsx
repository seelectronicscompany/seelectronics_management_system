import { verifyStaffSession } from "@/actions";
import { getStaffById } from "@/actions/staffActions";
import IdCardTemplate from "@/components/features/staff/IdCardTemplate";
import { ArrowLeft, Download, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { qrcode, barcode } from "@/lib/id-gen";

export default async function IdCardPage() {
  const session = await verifyStaffSession();
  
  if (!session.isAuth || !session.userId) {
    notFound();
  }

  const userId = session.userId as string;
  const response = await getStaffById(userId);

  if (!response.success || !response.data) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-800 text-center">
        <div className="max-w-md w-full p-8 bg-white border border-gray-200 rounded-3xl space-y-6 shadow-sm">
          <div className="size-16 bg-red-50 border border-red-200 text-red-500 rounded-2xl flex items-center justify-center mx-auto">
            <TriangleAlert className="size-8" />
          </div>
          <h1 className="text-xl font-bold text-slate-900">
            {response.message || "Invalid Staff Data"}
          </h1>
          <p className="text-slate-500 text-sm">
            Could not load staff data. Please contact the administrator.
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

  const staff = response.data;

  const convertToBase64 = async (filePath: string): Promise<string> => {
    try {
      const fileBuffer = await fs.promises.readFile(filePath);
      const extensionName = path.extname(filePath).toLowerCase();
      let mimeType = "image/jpeg";
      if (extensionName === ".png") mimeType = "image/png";
      else if (extensionName === ".svg") mimeType = "image/svg+xml";
      else if (extensionName === ".ttf") mimeType = "font/ttf";
      return `data:${mimeType};base64,${fileBuffer.toString("base64")}`;
    } catch (e) {
      console.error(e);
      return "";
    }
  };

  const frontTemplatePath = path.join(
    process.cwd(),
    "src",
    "assets",
    "images",
    staff.role === "technician" ? "technician-card.jpg" : "electrician-card.jpg"
  );
  
  const backTemplatePath = path.join(
    process.cwd(),
    "src",
    "assets",
    "images",
    "id-card-back.jpg"
  );

  const frontBase64 = await convertToBase64(frontTemplatePath);
  const backBase64 = await convertToBase64(backTemplatePath);

  const qrCodeData = await qrcode(staff.staffId);
  const barcodeData = await barcode(staff.staffId);

  const data = {
    ...staff,
    currentPoliceStation: staff.currentPoliceStation || "",
    currentPostOffice: staff.currentPostOffice || "",
    photoUrl: staff.photoUrl || "",
    frontBgImage: frontBase64,
    backBgImage: backBase64,
    issueDate: new Date(),
    qrcode: qrCodeData,
    barcode: barcodeData,
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col animate-in fade-in duration-300">
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
              ID Card Preview
            </h1>
            <p className="text-xs text-slate-500">
              {staff.name} ({staff.staffId})
            </p>
          </div>
        </div>

        <Link
          href={`/pdf/download?type=id-card&id=${staff.staffId}`}
          target="_blank"
          className="flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 hover:from-fuchsia-400 hover:to-fuchsia-500 text-white px-5 py-2.5 rounded-xl font-black transition-all shadow-lg shadow-fuchsia-500/10 active:scale-[0.98] text-sm"
        >
          <Download className="size-4" /> Download PDF
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 overflow-auto">
        <div className="w-full max-w-[900px] flex items-center justify-center p-4">
          <div className="origin-center scale-[0.4] sm:scale-[0.6] md:scale-[0.8] lg:scale-100 transition-all duration-300">
            <IdCardTemplate data={data as any} />
          </div>
        </div>
      </main>
    </div>
  );
}
