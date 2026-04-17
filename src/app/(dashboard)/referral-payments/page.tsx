import { getAllReferralPaymentRequests } from "@/actions";
import { Toolbar } from "@/components";
import ReferralPaymentList from "@/components/features/referral/ReferralPaymentList";
import { Suspense } from "react";
import { Spinner } from "@/components/ui";
export const dynamic = "force-dynamic";

export default async function ReferralPaymentsPage() {
  const requests = await getAllReferralPaymentRequests();

  return (
    <div className="flex-1 overflow-hidden flex flex-col gap-4">
      <Toolbar 
        title="Referral Payments" 
        actions={null}
        pagination={{
            currentPage: 1,
            totalRecords: requests.data?.length || 0,
            totalPages: 1,
            currentLimit: 50
        }}
      />
      <div className="flex-1 overflow-y-auto px-1 custom-scrollbar">
        <Suspense fallback={<div className="flex justify-center py-20"><Spinner /></div>}>
          <ReferralPaymentList requests={requests.data || []} />
        </Suspense>
      </div>
    </div>
  );
}
