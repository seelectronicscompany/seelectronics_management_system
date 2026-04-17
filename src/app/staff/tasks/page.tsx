import { verifyStaffSession } from "@/actions";
import { getStaffProfileStats } from "@/actions/staffActions";
import { StaffLayout } from "@/components/layout/StaffLayout";
import StaffTaskList from "@/components/features/tasks/StaffTaskList";

export default async function StaffTasksPage() {
  const session = await verifyStaffSession();
  if (!session.isAuth) return null;

  const userId = session.userId as string;
  const statsRes = await getStaffProfileStats(userId);
  const stats = statsRes.success ? statsRes.data : null;

  return (
    <StaffLayout balance={stats?.availableBalance || 0}>
      <div className="p-3 sm:p-2 lg:p-2">
        <StaffTaskList />
      </div>
    </StaffLayout>
  );
}
