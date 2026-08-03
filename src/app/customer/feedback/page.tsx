import { verifyCustomerSession } from "@/actions/customerActions";
import { getServiceHistoryById } from "@/actions/serviceActions";
import { StatusBadge } from "@/components";
import Link from "next/link";
import { MobilePageHeader } from "@/components/layout";
import { CheckCircle2, Star } from "lucide-react";

export default async function CustomerFeedbackPage() {
  const session = await verifyCustomerSession();

  if (!session.isAuth) {
    return null;
  }

  const customer = session.customer!;
  const servicesRes = await getServiceHistoryById(customer.customerId);
  const allServices = servicesRes.success ? servicesRes.data! : [];

  // Only completed services are eligible for feedback
  // filter
  const completedServices = allServices.filter((service: any) => {
    const status =
      service.statusHistory?.[0]?.status || service.status || "pending";
    return status === "completed";
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col selection:bg-blue-200">
      <div className="flex-1  mx-auto py-3 px-3 w-full">
        <MobilePageHeader
          title="ফিডব্যাক দিন"
          backHref="/customer/profile"
          Icon={Star}
        />
        {completedServices.length > 0 ? (
          <div className="relative overflow-hidden rounded-lg border border-brand/10 px-6 py-6 mb-6 group">
            <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4">
              <div className="space-y-1">
                <h3 className="font-bold text-gray-900 text-lg">
                  প্রিয় গ্রাহক {customer.name},
                </h3>
                <p className="text-gray-600 text-xl leading-relaxed font-medium">
                  আপনার মূল্যবান ফিডব্যাক আমাদের জন্য অত্যন্ত গুরুত্বপূর্ণ।
                  আপনার মতামতের ভিত্তিতে{" "}
                  <strong className="text-brand">SE ELECTRONICS</strong> আরও
                  উন্নত ও চমৎকার সেবা প্রদান করতে অবিরাম কাজ করে যাচ্ছে। আমাদের
                  লক্ষ্য আপনার সন্তুষ্টি।
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {completedServices.length === 0 ? (
          <div className="bg-white border border-dashed border-gray-200 rounded-md p-10 text-center">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              এখনো কোনো সম্পন্ন সার্ভিস নেই
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              সার্ভিস সম্পন্ন হলে এখান থেকে আপনি&apos; ফিডব্যাক দিতে পারবেন।
            </p>
            <Link
              href="/customer/tracking"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              সার্ভিস ট্র্যাকিং দেখুন
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {completedServices.map((service: any) => (
              <div
                key={service.serviceId}
                className="bg-white rounded-md border border-gray-100 shadow-sm px-4 py-4 sm:px-5 sm:py-4 flex items-start justify-between gap-3"
              >
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                    <span className="font-mono">#{service.serviceId}</span>
                    <span>•</span>
                    <span className="uppercase font-semibold">
                      {service.type}
                    </span>
                  </div>
                  <div className="font-semibold text-gray-900 truncate">
                    {service.productModel}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {new Date(service.createdAt).toLocaleString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </div>
                  <div className="mt-2">
                    <StatusBadge
                      status={service.statusHistory?.[0]?.status || "completed"}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {service.feedback?.serviceId ? (
                    <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-100 px-4 py-2 rounded-2xl text-sm font-bold shadow-sm">
                      <CheckCircle2 className="size-4 text-emerald-600" />
                      ফিডব্যাক দেওয়া হয়েছে
                    </div>
                  ) : (
                    <Link
                      href={`/service-feedback?serviceId=${service.serviceId}`}
                      className="inline-flex items-center justify-center bg-emerald-600 text-white px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-emerald-700 transition-colors"
                    >
                      ফিডব্যাক দিন
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
