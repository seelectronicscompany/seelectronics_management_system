import { verifyCustomerSession } from "@/actions/customerActions";
import { CustomerLayout } from "@/components/layout";
import { 
    Zap, 
    Plus, 
    ClipboardList,
    ShieldCheck,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function PlansLandingPage() {
    const session = await verifyCustomerSession();

    if (!session.isAuth || !session.customer) {
        redirect("/customer/login");
    }

 const navigationItems = [
    {
        title: "সক্রিয় সাবস্ক্রিপশন",
        description: "আপনার বর্তমানে চালু থাকা মেইনটেন্যান্স প্ল্যানগুলো দেখুন এবং পরিচালনা করুন।",
         label:  "বিস্তারিত দেখুন",
        icon: ShieldCheck,
        href: "/customer/plans/subscription",
        color: "text-emerald-500",
        bg: "bg-emerald-50",
        border: "border-emerald-100"
    },
    {
        title: "প্ল্যান আবেদনসমূহ",
        description: "আপনার মুলতুবি বা পূর্বের মেইনটেন্যান্স প্ল্যান আবেদনগুলো ট্র্যাক করুন।",
         label: "ট্র্যাক করুন",
        icon: ClipboardList,
        href: "/customer/plans/application",
        color: "text-blue-500",
        bg: "bg-blue-50",
        border: "border-blue-100"
    }
];

    return (
        <CustomerLayout>
            <div className="min-h-screen bg-[#fafafa] p-4 sm:p-6 pb-24 selection:bg-blue-200">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto mb-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div>
                         <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-3">
    <Zap className="text-brand w-10 h-10" />
    মেইনটেন্যান্স প্ল্যান
</h1>

<p className="text-slate-500 font-medium text-sm mt-2">
    আপনার সাবস্ক্রিপশন পরিচালনা বা আবেদন ট্র্যাক করতে নিচের অপশন থেকে বেছে নিন।
</p>
                        </div>
                        <Link 
                            href="/customer/maintenance-plans"
                            className="bg-brand text-white px-8 py-4 rounded-md font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand/90 transition-all active:scale-[0.98] shadow-xl shadow-brand/20"
                        >
                            <Plus size={20} />
                            নতুন প্ল্যান কিনুন
                        </Link>
                    </div>
                </div>

                {/* Primary Navigation Buttons */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {navigationItems.map((item, index) => (
                        <Link 
                            key={index}
                            href={item.href}
                            className="group relative bg-white border border-slate-200 rounded-md p-8 hover:border-brand/40 hover:shadow-2xl hover:shadow-brand/5 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-brand/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none group-hover:bg-brand/10 transition-colors"></div>
                            
                            <div className="relative z-10">
                                <div className={`size-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 border ${item.border}`}>
                                    <item.icon className={item.color} size={28} />
                                </div>
                                <h2 className="text-xl font-black text-slate-900 mb-2">
                                    {item.title}
                                </h2>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                                    {item.description}
                                </p>
                              <div className="flex items-center gap-2 text-brand font-black text-sm uppercase tracking-widest group-hover:gap-3 transition-all">
    {item.label}
    <ArrowRight size={16} />
</div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Info Card */}
                <div className="max-w-4xl mx-auto mt-12 bg-slate-900 rounded-md p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-2 text-center md:text-left">
                          <h3 className="text-lg font-black uppercase tracking-wider">
    সাহায্য প্রয়োজন?
</h3>

<p className="text-slate-400 text-sm font-medium max-w-sm">
    আপনার প্ল্যান বা আবেদন সংক্রান্ত কোনো প্রশ্ন থাকলে আমাদের সাপোর্ট টিম সাহায্যের জন্য প্রস্তুত।
</p>

                        </div>
                        <Link 
                            href="/customer/support"
                            className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-3 rounded-md font-black text-xs uppercase tracking-widest transition-all backdrop-blur-sm"
                        >
                             সাপোর্টে যোগাযোগ করুন
                        </Link>
                    </div>
                </div>
            </div>
        </CustomerLayout>
    );
}
