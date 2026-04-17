import { getCustomerSubscriptionApplications } from "@/actions/subscriptionActions";
import { verifyCustomerSession } from "@/actions/customerActions";
import { CustomerLayout } from "@/components/layout";
import { 
    Clock, 
    Search, 
    ArrowRight, 
    FileText,
    CheckCircle2,
    XCircle,
    Loader2,
    AlertCircle,
    MapPin,
    Tag
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { formatDate } from "@/utils";

export default async function ApplicationListPage() {
    const session = await verifyCustomerSession();

    if (!session.isAuth || !session.customer) {
        redirect("/customer/login");
    }

    const { data: applications = [] } = await getCustomerSubscriptionApplications(
        session.customer.customerId,
        session.customer.phone
    );

    const getStatusStyles = (status: string) => {
        switch (status) {
            case 'approved':
                return 'bg-emerald-50 text-emerald-600 border-emerald-100';
            case 'rejected':
                return 'bg-rose-50 text-rose-600 border-rose-100';
            case 'processing':
                return 'bg-blue-50 text-blue-600 border-blue-100';
            default:
                return 'bg-amber-50 text-amber-600 border-amber-100';
        }
    };

    return (
        <CustomerLayout>
            <div className="min-h-screen bg-[#fafafa] p-4 sm:p-6 pb-24">
                <div className="max-w-4xl mx-auto mb-8">
                    <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-3">
                        <FileText className="text-brand w-8 h-8" />
                        Application Tracking
                    </h1>
                    <p className="text-slate-500 font-medium text-sm mt-1">
                        Track the status of your maintenance plan applications.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {applications.length > 0 ? (
                        <div className="space-y-4">
                            {applications.map((app) => (
                                <div 
                                    key={app.applicationId}
                                    className="bg-white border border-slate-200 rounded-md p-5 sm:p-6 hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-slate-50 rounded-md group-hover:bg-brand/5 transition-colors">
                                                <Tag className="text-slate-400 group-hover:text-brand" size={20} />
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="text-base font-black text-slate-900 capitalize leading-none">
                                                    {app.subscriptionType.replace(/_/g, ' ')}
                                                </h3>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                    ID: {app.applicationId}
                                                </p>
                                                <div className="flex items-center gap-4 pt-1">
                                                    <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1">
                                                        <Clock size={12} />
                                                        {formatDate(app.createdAt)}
                                                    </span>
                                                    <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1">
                                                        ৳{app.totalFee.toLocaleString()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto mt-2 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-0 border-slate-50">
                                            <div className={`px-3 py-1.5 rounded-sm font-black text-[10px] uppercase tracking-widest border flex items-center gap-2 ${getStatusStyles(app.status)}`}>
                                                {app.status === 'pending' && <Loader2 size={12} className="animate-spin" />}
                                                {app.status === 'approved' && <CheckCircle2 size={12} />}
                                                {app.status === 'rejected' && <XCircle size={12} />}
                                                {app.status === 'processing' && <AlertCircle size={12} />}
                                                {app.status}
                                            </div>
                                            
                                            <Link 
                                                href={`/application-track?trackingId=${app.applicationId}`}
                                                className="inline-flex items-center gap-2 text-brand font-black text-xs uppercase tracking-widest hover:translate-x-1 transition-transform"
                                            >
                                                Track Progress
                                                <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white border border-dashed border-slate-300 rounded-md p-12 text-center">
                            <Search className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">No Applications Found</p>
                            <p className="text-slate-400 text-xs mt-1">You haven't applied for any maintenance plans yet.</p>
                            <Link 
                                href="/customer/maintenance-plans"
                                className="mt-6 inline-flex items-center gap-2 text-brand font-black text-xs uppercase tracking-widest px-6 py-3 border-2 border-brand rounded-md hover:bg-brand hover:text-white transition-all"
                            >
                                Apply Now
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </CustomerLayout>
    );
}
