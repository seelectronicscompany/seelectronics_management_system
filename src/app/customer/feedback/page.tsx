import { verifyCustomerSession } from "@/actions/customerActions";
import { getServiceHistoryById } from "@/actions/serviceActions";
import { StatusBadge } from "@/components";
import Link from "next/link";
import { MobilePageHeader, CustomerLayout } from "@/components/layout";
import {
  Star,
  Calendar,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";

export default async function CustomerFeedbackPage() {
  const session = await verifyCustomerSession();

  if (!session.isAuth) {
    return null;
  }

  const customer = session.customer!;
  const servicesRes = await getServiceHistoryById(customer.customerId);
  const allServices = servicesRes.success ? servicesRes.data! : [];

  // Only completed services are eligible for feedback
  const completedServices = allServices.filter((service: any) => {
    const status =
      service.statusHistory?.[0]?.status || service.status || "pending";
    return status === "completed";
  });

  return (
    <CustomerLayout>
      <div className="w-full pb-24 px-3 sm:px-4">
        {/* Mobile-only header component */}
        <MobilePageHeader
          title="ফিডব্যাক দিন"
          backHref="/customer/profile"
          Icon={Star}
        />

        {/* Desktop-only premium header styling */}
        <div className="hidden md:flex items-center justify-between gap-3 mb-6 border-b border-gray-100 pb-4">
          <div>
            <h1 className="text-2xl font-black text-brand tracking-tight flex items-center gap-2">
              <Star className="text-amber-500 fill-amber-500 size-6" />
              ফিডব্যাক দিন
            </h1>
            <p className="text-xl text-gray-500 font-medium">
              সম্পন্ন হওয়া সার্ভিস নির্বাচন করে আপনার মূল্যবান মতামত দিন।
            </p>
          </div>

          <Link
            href="/customer/profile"
            className="text-xl font-bold text-brand hover:underline underline-offset-4 flex items-center gap-1 group transition-all"
          >
            ড্যাশবোর্ডে ফিরে যান
            <ChevronRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Premium welcome/intro banner */}
        {completedServices.length > 0 && (
          <div className="relative overflow-hidden bg-gradient-to-br from-brand/5 via-brand/[0.02] to-amber-500/[0.03] rounded-3xl border border-brand/10 shadow-[0_4px_24px_rgba(10,26,58,0.03)] px-6 py-6 mb-6 group">
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/15 transition-all duration-700"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand/10 rounded-full blur-2xl group-hover:bg-brand/15 transition-all duration-700"></div>

            <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4">
              <div className="shrink-0 size-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-600 border border-amber-500/20">
                <Sparkles className="size-6 animate-pulse" />
              </div>
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
        )}

        {/* Services List / Empty State */}
        {completedServices.length === 0 ? (
          <div className="bg-white/80 backdrop-blur-sm border border-dashed border-gray-200 rounded-3xl p-12 text-center shadow-sm">
            <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-gray-400">
              <AlertCircle className="size-8" />
            </div>
            <h2 className="text-lg font-bold text-gray-800 mb-1">
              এখনো কোনো সম্পন্ন সার্ভিস নেই
            </h2>
            <p className="text-xl text-gray-500 max-w-sm mx-auto mb-6">
              আপনার কোনো সার্ভিস সম্পন্ন হলে এখান থেকে আপনি খুব সহজেই ফিডব্যাক
              বা রেটিং দিতে পারবেন।
            </p>
            <Link
              href="/customer/tracking"
              className="inline-flex items-center justify-center bg-brand text-white px-6 py-3 rounded-2xl text-xl font-bold shadow-lg shadow-brand/10 hover:shadow-xl hover:shadow-brand/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              সার্ভিস ট্র্যাকিং দেখুন
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {completedServices.map((service: any) => {
              const isFeedbackGiven = !!service.feedback?.serviceId;

              return (
                <div
                  key={service.serviceId}
                  className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-5 hover:shadow-[0_8px_30px_rgba(10,26,58,0.06)] hover:border-brand/20 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-3">
                    {/* Top row metadata */}
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-mono bg-gray-50 text-gray-500 px-2.5 py-1 rounded-lg border border-gray-100 font-bold">
                        #{service.serviceId}
                      </span>
                      <span className="bg-brand/5 text-brand px-2.5 py-1 rounded-lg font-bold uppercase tracking-wider">
                        {service.type}
                      </span>
                      <StatusBadge
                        status={
                          service.statusHistory?.[0]?.status || "completed"
                        }
                      />
                    </div>

                    {/* Product name & Date */}
                    <div>
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                        {service.productModel}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1 flex items-center gap-1.5 font-medium">
                        <Calendar className="size-3.5" />
                        {new Date(service.createdAt).toLocaleString("bn-BD", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Actions column */}
                  <div className="shrink-0 flex items-center sm:justify-end">
                    {isFeedbackGiven ? (
                      <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-100 px-4 py-2 rounded-2xl text-sm font-bold shadow-sm">
                        <CheckCircle2 className="size-4 text-emerald-600" />
                        ফিডব্যাক দেওয়া হয়েছে
                      </div>
                    ) : (
                      <Link
                        href={`/service-feedback?serviceId=${service.serviceId}`}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1 bg-brand text-white px-5 py-2.5 rounded-2xl text-xl font-bold shadow-md shadow-brand/10 hover:shadow-lg hover:shadow-brand/20 hover:bg-brand/90 transition-all hover:-translate-y-0.5 active:translate-y-0"
                      >
                        ফিডব্যাক দিন
                        <ChevronRight className="size-4" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </CustomerLayout>
  );
}
