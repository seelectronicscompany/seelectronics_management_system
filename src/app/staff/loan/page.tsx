import { StaffLayout } from "@/components/layout";
import { Banknote } from "lucide-react";

export default function LoanPage() {
  return (
    <StaffLayout balance={0}>
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
        <div className="size-24 rounded-full bg-teal-50 flex items-center justify-center mb-6 border border-teal-100 text-teal-600">
          <Banknote size={48} />
        </div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight uppercase mb-4">
          Feature Coming Soon
        </h1>
        <p className="text-gray-500 font-medium max-w-md mx-auto leading-relaxed">
          The loan request and management feature is currently under development. 
          You will soon be able to apply for loans directly from your dashboard.
        </p>
      </div>
    </StaffLayout>
  );
}
