import { verifyStaffSession } from "@/actions";
import { getMyServices, getStaffProfileStats } from "@/actions/staffActions";
import StaffDashboardActions from "@/components/features/staff/StaffDashboardActions";
import { StaffLayout } from "@/components/layout/StaffLayout";
import clsx from "clsx";
import { Wrench } from "lucide-react";
import Link from "next/link";

export default async function StaffServicesPage() {
  const session = await verifyStaffSession();
  if (!session.isAuth) return null;

  const userId = session.userId as string;
  const [statsRes, servicesRes] = await Promise.all([
    getStaffProfileStats(userId),
    getMyServices(userId),
  ]);

  const stats = statsRes.success ? statsRes.data : null;
  const services = servicesRes.success ? (servicesRes.data ?? []) : [];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: "bg-yellow-100 text-yellow-800",
      in_progress: "bg-blue-100 text-blue-800",
      completed: "bg-green-100 text-green-800",
      canceled: "bg-red-100 text-red-800",
      staff_departed: "bg-purple-100 text-purple-800",
      staff_arrived: "bg-indigo-100 text-indigo-800",
      appointment_retry: "bg-orange-100 text-orange-800",
      service_center: "bg-cyan-100 text-cyan-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  return (
    <StaffLayout balance={stats?.availableBalance || 0}>
      <div className="p-4 space-y-4 pb-28">
        {/* Page Title */}
        <div className="flex items-center gap-3 mb-1 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
          <div className="p-2.5 bg-brand/5 rounded-xl text-brand">
            <Wrench size={22} className="stroke-[2.5]" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-800 uppercase tracking-wide">
              Assigned Services
            </h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Track and update your client service reports
            </p>
          </div>
        </div>

        {services.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 text-center text-slate-400">
            <div className="size-16 rounded-2xl bg-slate-50 flex items-center justify-center mx-auto mb-4 border border-slate-100">
              <Wrench size={28} className="text-slate-300" />
            </div>
            <p className="font-extrabold text-slate-700">No services assigned yet.</p>
            <p className="text-xs mt-1 text-slate-400 font-bold max-w-xs mx-auto">
              When you get assigned a service request, it will show up here.
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {services.map((service: any) => {
              const currentStatus =
                service.statusHistory?.[0]?.status || "pending";

              // For staff view, show "canceled" when status is "appointment_retry"
              const displayStatus =
                currentStatus === "appointment_retry"
                  ? "canceled"
                  : currentStatus;

              return (
                <div
                  key={service.serviceId}
                  className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100/60 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-black font-mono text-slate-400 tracking-wider mb-1">
                        ID: #{service.serviceId.substring(0, 8).toUpperCase()}
                      </p>
                      <h3 className="text-lg font-black text-slate-800 truncate">
                        {service.customerName}
                      </h3>
                      <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">
                        {service.productType} <span className="text-slate-300 mx-1">•</span> {service.productModel}
                      </p>
                    </div>
                    <span
                      className={clsx(
                        "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider whitespace-nowrap shadow-sm border",
                        getStatusColor(displayStatus),
                      )}
                    >
                      {displayStatus.replace("_", " ")}
                    </span>
                  </div>

                  <div className="flex flex-col gap-4 pt-4 border-t border-slate-50">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider">
                          Created On
                        </span>
                        <span className="text-xs text-slate-600 font-bold">
                          {new Date(service.createdAt).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {currentStatus !== "completed" &&
                        currentStatus !== "canceled" &&
                        currentStatus !== "appointment_retry" && (
                          <Link
                            href={`/service-report?serviceId=${service.serviceId}`}
                            className="flex-1 min-w-[120px] text-center text-xs font-black bg-brand hover:bg-brand-600 text-white py-3 px-4 rounded-xl transition-all duration-200 active:scale-95 shadow-sm shadow-brand/10 uppercase tracking-wider"
                          >
                            Send Report
                          </Link>
                        )}
                      {currentStatus === "completed" && (
                        <div className="flex-1 min-w-[140px]">
                          <StaffDashboardActions
                            staffId={userId}
                            serviceId={service.serviceId}
                          />
                        </div>
                      )}
                      <Link
                        href={`/service-track?trackingId=${service.serviceId}`}
                        className="flex-1 min-w-[120px] text-center text-xs font-black text-slate-600 bg-slate-50 border border-slate-100 hover:bg-slate-100 py-3 px-4 rounded-xl transition-all duration-200 active:scale-95 uppercase tracking-wider"
                      >
                        Track Status
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </StaffLayout>
  );
}
