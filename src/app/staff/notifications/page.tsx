import { verifyStaffSession } from "@/actions";
import { getStaffProfileStats } from "@/actions/staffActions";
import { StaffLayout } from "@/components/layout";
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
      <div className="max-w-2xl mx-auto px-2 py-4 sm:p-6 space-y-4 pb-24">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-brand tracking-tight">
              Notifications
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-wider mt-0.5">
              Stay updated with your latest status
            </p>
          </div>
        </div>
        
        <StaffNotificationList />
      </div>
    </StaffLayout>
  );
}
