import { getCustomers, getCustomersMetadata } from "@/actions";
import { Toolbar } from "@/components";
import { SearchParams } from "@/types";
import BatteryRemindersClient from "./BatteryRemindersClient";

export default async function BatteryRemindersPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const params = await searchParams;

  // We can fetch a larger limit for this page to make bulk selection easier
  const customParams = { ...params, limit: params?.limit || "50" };

  const paginationPromise = getCustomersMetadata(customParams);
  const customersPromise = getCustomers(customParams);

  const [pagination, customersRes] = await Promise.all([
    paginationPromise,
    customersPromise,
  ]);

  return (
    <div className="flex-1 overflow-hidden flex flex-col gap-4">
      <Toolbar title="Maintenance Reminders" pagination={pagination!} />
      <BatteryRemindersClient customers={customersRes.data || []} />
    </div>
  );
}
