import { verifyStaffSession } from "@/actions";
import { getStaffProfileStats } from "@/actions/staffActions";
import { StaffLayout, MobilePageHeader } from "@/components/layout";
import { Bell } from "lucide-react";
import StaffNotificationList from "@/components/features/notifications/StaffNotificationList";

export default async function StaffNotificationsPage() {
  const session = await verifyStaffSession();
  if (!session.isAuth) return null;

  const userId = session.userId as string;
  const statsRes = await getStaffProfileStats(userId);
  const stats = statsRes.success ? statsRes.data : null;

  return (
    <StaffLayout balance={stats?.availableBalance || 0}>
      <MobilePageHeader 
        title="Notifications" 
        backHref="/staff/profile" 
        Icon={Bell}
      />
      
      <div className="max-w-2xl mx-auto p-4 sm:p-6 space-y-4 pb-24">
        <StaffNotificationList />
      </div>
    </StaffLayout>
  );
}
