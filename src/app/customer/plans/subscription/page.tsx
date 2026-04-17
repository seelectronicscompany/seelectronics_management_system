import { getCustomerSubscriptions } from "@/actions/subscriptionActions";
import { verifyCustomerSession } from "@/actions/customerActions";
import { CustomerLayout } from "@/components/layout";
import {
    Zap,
    Calendar,
    Clock,
    ArrowRight,
    Package,
    ShieldCheck,
    CheckCircle2,
    Smartphone
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ActiveSubscriptionListPage() {
    const session = await verifyCustomerSession();

    if (!session.isAuth || !session.customer) {
        redirect("/customer/login");
    }

    const { data: allSubscriptions = [] } = await getCustomerSubscriptions(
        session.customer.customerId,
        session.customer.phone
    );

    const activeSubscriptions = allSubscriptions.filter(sub => sub.isActive && sub.status === 'active');

    return (
        <CustomerLayout>
            <div className="min-h-screen bg-[#fafafa] p-4 sm:p-6 pb-24 selection:bg-blue-200">
                <div className="max-w-4xl mx-auto mb-8">
                    <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-3">
                        <Zap className="text-brand w-8 h-8" />
                        Active Subscriptions
                    </h1>
                    <p className="text-slate-500 font-medium text-sm mt-1">
                        Your currently active maintenance plans and their coverage.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {activeSubscriptions.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {activeSubscriptions.map((sub) => (
                                <Link
                                    key={sub.subscriptionId}
                                    href={`/customer/plans/subscription/${sub.subscriptionId}`}
                                    className="group relative bg-white border border-slate-200 rounded-md p-6 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-brand/10 transition-colors"></div>

                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-2 bg-brand/5 rounded-md">
                                                <ShieldCheck className="text-brand w-6 h-6" />
                                            </div>
                                            <div className="bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded border border-emerald-100 flex items-center gap-1">
                                                <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></div>
                                                Active
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-black text-slate-900 mb-1 capitalize">
                                            {sub.subscriptionType.replace(/_/g, ' ')}
                                        </h3>
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                                            ID: {sub.subscriptionId}
                                        </p>

                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 text-sm text-slate-600 font-medium font-mono">
                                                <Smartphone className="size-4 text-slate-400" />
                                                {sub.phone}
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                                                <Calendar size={16} className="text-slate-400" />
                                                Started: {new Date(sub.createdAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                                                <Clock size={16} className="text-slate-400" />
                                                {sub.servicesCompleted} of {sub.subscriptionDuration} Services Used
                                            </div>
                                        </div>

                                        <div className="mt-6 flex items-center justify-between">
                                            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                                <div
                                                    className="bg-brand h-full rounded-full transition-all duration-500"
                                                    style={{ width: `${(sub.servicesCompleted / sub.subscriptionDuration) * 100}%` }}
                                                ></div>
                                            </div>
                                            <ArrowRight size={18} className="text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all ml-4" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white border border-dashed border-slate-300 rounded-md p-12 text-center">
                            <Package className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">No Active Subscriptions</p>
                            <p className="text-slate-400 text-xs mt-1">You don't have any active maintenance plans at the moment.</p>
                            <Link
                                href="/customer/maintenance-plans"
                                className="mt-8 inline-flex items-center gap-2 bg-brand text-white px-8 py-3 rounded-md font-black text-sm uppercase tracking-widest hover:bg-brand/90 transition-all shadow-lg shadow-brand/20"
                            >
                                Browse Plans
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </CustomerLayout>
    );
}
