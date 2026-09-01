"use client";

import { Printer, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ResumeClientProps {
  staffData: any;
}

export default function ResumeClient({ staffData }: ResumeClientProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-8 print:bg-white print:py-0">
      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Controls - Hidden when printing */}
        <div className="mb-4 sm:mb-6 flex flex-wrap gap-2 items-center justify-between print:hidden">
          <Link
            href="/staff/details"
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 text-xs sm:text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-brand text-white rounded-md shadow-sm hover:bg-brand/90 text-xs sm:text-sm font-medium transition-colors"
          >
            <Printer className="w-4 h-4" />
            Download as Document
          </button>
        </div>

        {/* Resume Content */}
        <div id="staff-resume" className="bg-white shadow-lg rounded-lg overflow-hidden print:shadow-none print:rounded-none">
          {/* Header */}
          <div className="bg-brand text-white p-6 sm:p-12 print:text-black print:bg-transparent">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              {/* Profile Photo - standard img tag to avoid next/image domain restrictions */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white overflow-hidden bg-white shrink-0 print:border-gray-300 shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={staffData.photoUrl || "/placeholder-avatar.png"}
                  alt={staffData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Basic Info */}
              <div className="text-center sm:text-left flex-1 w-full">
                <h1 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-white print:text-black">{staffData.name}</h1>
                <p className="text-sm sm:text-xl text-white/90 print:text-gray-700 font-medium mb-3 sm:mb-4 uppercase tracking-wider">{staffData.role}</p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-y-2 gap-x-6 justify-center sm:justify-start text-xs sm:text-sm text-white/80 print:text-gray-600">
                  <span className="flex items-center justify-center sm:justify-start gap-1">
                    <strong>ID:</strong> {staffData.staffId}
                  </span>
                  <span className="flex items-center justify-center sm:justify-start gap-1">
                    <strong>Phone:</strong> {staffData.phone}
                  </span>
                  <span className="flex items-center justify-center sm:justify-start gap-1">
                    <strong>Status:</strong> {staffData.isActiveStaff ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-12 space-y-8 sm:space-y-10 text-gray-800">
            
            {/* Bio Section */}
            {staffData.bio && (
              <section>
                <h2 className="text-lg sm:text-xl font-bold uppercase tracking-widest text-brand print:text-black mb-3 border-b-2 border-gray-100 pb-2">Biography</h2>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">{staffData.bio}</p>
              </section>
            )}

            {/* Main Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              
              {/* Left Column */}
              <div className="space-y-8">
                <section>
                  <h2 className="text-lg sm:text-xl font-bold uppercase tracking-widest text-brand print:text-black mb-4 border-b-2 border-gray-100 pb-2">Personal Details</h2>
                  <div className="space-y-3 text-sm">
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-500 font-medium">Username</span>
                      <span className="col-span-2 font-medium">{staffData.username || "N/A"}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-500 font-medium">Father's Name</span>
                      <span className="col-span-2 font-medium">{staffData.fatherName || "N/A"}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-500 font-medium">Verified</span>
                      <span className="col-span-2 font-medium">{staffData.isVerified ? "Yes" : "No"}</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-lg sm:text-xl font-bold uppercase tracking-widest text-brand print:text-black mb-4 border-b-2 border-gray-100 pb-2">Experience & Skills</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-50 print:bg-transparent p-4 rounded-md border border-gray-100 print:border-gray-300">
                      <h3 className="font-bold text-gray-900 text-sm">Repair Services</h3>
                      <p className="text-xs text-gray-600 mt-1">
                        {staffData.hasRepairExperience ? `${staffData.repairExperienceYears} Years Experience` : "No Experience"}
                      </p>
                    </div>
                    <div className="bg-gray-50 print:bg-transparent p-4 rounded-md border border-gray-100 print:border-gray-300">
                      <h3 className="font-bold text-gray-900 text-sm">Installation Services</h3>
                      <p className="text-xs text-gray-600 mt-1">
                        {staffData.hasInstallationExperience ? `${staffData.installationExperienceYears} Years Experience` : "No Experience"}
                      </p>
                    </div>
                    
                    {staffData.skills && (
                      <div className="bg-gray-50 print:bg-transparent p-4 rounded-md border border-gray-100 print:border-gray-300">
                        <h3 className="font-bold text-gray-900 text-sm">Skills</h3>
                        <p className="text-xs text-gray-600 mt-1">{staffData.skills}</p>
                      </div>
                    )}
                  </div>
                </section>
                
                <section className="print:break-inside-avoid">
                  <h2 className="text-lg sm:text-xl font-bold uppercase tracking-widest text-brand print:text-black mb-4 border-b-2 border-gray-100 pb-2">System Config</h2>
                  <div className="space-y-3 text-sm">
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-500 font-medium">SMS Notifications</span>
                      <span className="col-span-2 font-medium">{staffData.smsNotificationEnabled ? "Enabled" : "Disabled"}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-500 font-medium">SMS Frequency</span>
                      <span className="col-span-2 font-medium uppercase text-xs">{staffData.smsFrequency || "N/A"}</span>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <section>
                  <h2 className="text-lg sm:text-xl font-bold uppercase tracking-widest text-brand print:text-black mb-4 border-b-2 border-gray-100 pb-2">Addresses</h2>
                  <div className="space-y-6 text-sm">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Current Address</h3>
                      <div className="space-y-1 text-gray-600">
                        <p className="leading-relaxed">{staffData.currentStreetAddress}</p>
                        <p><strong>District:</strong> {staffData.currentDistrict}</p>
                        <p><strong>Police Station:</strong> {staffData.currentPoliceStation || "N/A"}</p>
                        <p><strong>Post Office:</strong> {staffData.currentPostOffice || "N/A"}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Permanent Address</h3>
                      <div className="space-y-1 text-gray-600">
                        <p className="leading-relaxed">{staffData.permanentStreetAddress}</p>
                        <p><strong>District:</strong> {staffData.permanentDistrict}</p>
                        <p><strong>Police Station:</strong> {staffData.permanentPoliceStation || "N/A"}</p>
                        <p><strong>Post Office:</strong> {staffData.permanentPostOffice || "N/A"}</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="print:break-inside-avoid">
                  <h2 className="text-lg sm:text-xl font-bold uppercase tracking-widest text-brand print:text-black mb-4 border-b-2 border-gray-100 pb-2">Payment Preference</h2>
                  <div className="space-y-3 text-sm">
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-500 font-medium">Method</span>
                      <span className="col-span-2 font-bold uppercase">{staffData.paymentPreference}</span>
                    </div>
                    
                    {['bkash', 'nagad', 'rocket'].includes(staffData.paymentPreference) && staffData.walletNumber && (
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-500 font-medium">Wallet No.</span>
                        <span className="col-span-2 font-medium">{staffData.walletNumber}</span>
                      </div>
                    )}
                    
                    {staffData.paymentPreference === 'bank' && staffData.bankInfo && (
                      <>
                        <div className="grid grid-cols-3 gap-2">
                          <span className="text-gray-500 font-medium">Bank Name</span>
                          <span className="col-span-2 font-medium">{staffData.bankInfo.bankName}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <span className="text-gray-500 font-medium">Account No.</span>
                          <span className="col-span-2 font-medium">{staffData.bankInfo.accountNumber}</span>
                        </div>
                      </>
                    )}
                  </div>
                </section>
              </div>

            </div>

            {/* NID Documents */}
            {(staffData.nidFrontUrl || staffData.nidBackUrl) && (
              <section className="print:break-inside-avoid pt-6 border-t-2 border-gray-100 print:border-gray-300">
                <h2 className="text-lg sm:text-xl font-bold uppercase tracking-widest text-brand print:text-black mb-6">NID Documents</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {staffData.nidFrontUrl && (
                    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={staffData.nidFrontUrl}
                        alt="NID Front"
                        className="w-full h-auto object-cover max-h-[300px]"
                      />
                    </div>
                  )}
                  {staffData.nidBackUrl && (
                    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={staffData.nidBackUrl}
                        alt="NID Back"
                        className="w-full h-auto object-cover max-h-[300px]"
                      />
                    </div>
                  )}
                </div>
              </section>
            )}
            
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page {
            margin: 0.5cm;
          }
          body * {
            visibility: hidden;
          }
          #staff-resume, #staff-resume * {
            visibility: visible;
          }
          #staff-resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}} />
    </div>
  );
}
