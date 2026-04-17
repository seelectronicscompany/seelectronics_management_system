import Link from "next/link";
import { ArrowLeft, MapPinned, Phone, Mail, Clock } from "lucide-react";
import { contactDetails } from "@/constants";

export default function LocationPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-4 px-4 selection:bg-orange-200">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Link href="/customer/profile" className="p-1 bg-white rounded-xl shadow-sm border border-gray-100 hover:bg-gray-50 hover:shadow-md transition-all active:scale-95">
                        <ArrowLeft size={24} className="text-gray-600" />
                    </Link>
                    <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
                        <div className="p-2 bg-orange-100 rounded-md">
                            <MapPinned className="text-orange-600" size={28} />
                        </div>
                        Our Location
                    </h1>
                </div>

                {/* Hero Section */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-8 max-w-4xl w-full">
                    <div className="h-64 sm:h-96 w-full bg-gray-200 relative group overflow-hidden">
                        {/* <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.330887103554!2d91.86873531499539!3d24.914217984025096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750552b45eb3841%3A0xe539f4f46c31d102!2sAmberkhana%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1680196853874!5m2!1sen!2sbd" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                        ></iframe> */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d53690.95025677962!2d91.86248830168407!3d24.935065499469935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z4Kas4Ka-4Kam4Ka-4KauIOCmrOCmvuCml-Cmv-CmmuCmviDgp6gg4Kao4KaCIOCmsOCni-CmoSDgprjgpr_gprLgp4fgpp8!5e1!3m2!1sen!2sau!4v1775048999006!5m2!1sen!2sau" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                        ></iframe>
                        
                        <div className="absolute inset-0 bg-orange-900/10 pointer-events-none group-hover:bg-transparent transition-colors duration-700"></div>
                    </div>
                    
                    <div className="p-8 sm:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-black text-gray-900 mb-6 font-mono tracking-tight uppercase">Headquarters</h2>
                                <p className="text-gray-600 text-xl leading-relaxed font-semibold mb-8">
                                    {contactDetails.headOffice}
                                </p>
                                
                                {/* <a 
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.headOffice)}`} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md font-bold hover:bg-gray-800 transition-colors"
                                >
                                    <MapPinned size={20} />
                                    Get Directions
                                </a> */}
                                <a
  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.headOffice)}`}
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors"
>
  <MapPinned size={20} />
  Get Directions
</a>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-orange-50 rounded-md text-orange-600">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Contact Numbers</h3>
                                        <p className="text-lg font-semibold text-gray-900">{contactDetails.customerCare}</p>
                                        <p className="text-lg font-semibold text-gray-900">{contactDetails.phone}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 rounded-md text-blue-600">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email</h3>
                                        <a href={`mailto:${contactDetails.email}`} className="text-lg font-semibold text-blue-600 hover:underline">
                                            {contactDetails.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-emerald-50 rounded-md text-emerald-600">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Business Hours</h3>
                                        <p className="text-lg font-semibold text-gray-900">Saturday – Thursday</p>
                                        <p className="text-gray-500">9:00 AM – 8:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
