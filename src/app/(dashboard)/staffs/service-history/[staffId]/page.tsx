import { getServicesMetadata, getStaffById } from "@/actions";
import { DelayedLoading, Toolbar } from "@/components";
import ServiceHistoryList from "@/components/features/services/ServiceHistoryList";
import { SearchParams } from "@/types";
import { notFound } from "next/navigation";
import { Suspense } from "react";
export default async function StaffServiceHistoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ staffId: string }>;
  searchParams?: Promise<SearchParams>;
}) {
  const { staffId } = await params;
  const sp = await searchParams;

  const staffRes = await getStaffById(staffId);
  if (!staffRes.success || !staffRes.data) {
    notFound();
  }

  const staff = staffRes.data;
  const pagination = await getServicesMetadata({ ...sp, staffId });

  return (
    <div className="flex-1 overflow-hidden flex flex-col gap-4">
      <Toolbar
        title={`Service History: ${staff.name}`}
        pagination={pagination}
      />
      <div className="overflow-x-auto overflow-y-auto flex-1 bg-white rounded-md border border-gray-100 shadow-sm custom-scrollbar">
        <table className="w-full text-sm text-left">
          <thead className="sticky top-0 z-20">
            <tr className="bg-gray-50">
              <th className="py-4 px-4 text-sm font-bold text-gray-700 whitespace-nowrap">
                Service ID
              </th>
              <th className="py-4 px-4 text-sm font-bold text-gray-700 whitespace-nowrap">
                Customer Name
              </th>
              <th className="py-4 px-4 text-sm font-bold text-gray-700 whitespace-nowrap">
                Phone Number
              </th>
              <th className="py-4 px-4 text-sm font-bold text-gray-700 whitespace-nowrap">
                Address
              </th>
              <th className="py-4 px-4 text-sm font-bold text-gray-700 whitespace-nowrap">
                Product
              </th>
              <th className="py-4 px-4 text-sm font-bold text-gray-700 whitespace-nowrap">
                Date
              </th>
              <th className="py-4 px-4 text-sm font-bold text-gray-700 whitespace-nowrap">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <Suspense
              key={sp?.query}
              fallback={
                <tr className="border-b">
                  <td
                    colSpan={8}
                    className="text-center py-12 text-gray-400 font-medium"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <DelayedLoading />
                      <span>Loading service history...</span>
                    </div>
                  </td>
                </tr>
              }
            >
              <ServiceHistoryList {...{ ...sp, staffId, hideStaff: true }} />
            </Suspense>
          </tbody>
        </table>
      </div>
    </div>
  );
}
