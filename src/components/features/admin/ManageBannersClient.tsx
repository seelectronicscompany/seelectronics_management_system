"use client";

import { uploadBanner, toggleBannerStatus, deleteBanner } from "@/actions/bannerActions";
import Image from "next/image";
import { useState, useRef } from "react";
import toast from "react-hot-toast";

export default function ManageBannersClient({ initialBanners }: { initialBanners: any[] }) {
  const [banners, setBanners] = useState(initialBanners);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    const res = await uploadBanner(formData);
    
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("Banner uploaded successfully");
      // Optional: you could refetch banners here or just let revalidatePath handle it by refreshing.
      // Easiest is to reload the page to get the updated list from the server component
      window.location.reload();
    }
    
    if (fileInputRef.current) fileInputRef.current.value = "";
    setIsUploading(false);
  };

  const handleToggle = async (id: string, type: "customer" | "staff", currentStatus: boolean) => {
    const res = await toggleBannerStatus(id, type, currentStatus);
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("Status updated");
      setBanners(banners.map(b => 
        b.id === id 
          ? { ...b, [type === "customer" ? "isActiveCustomer" : "isActiveStaff"]: !currentStatus }
          : b
      ));
    }
  };

  const handleDelete = async (id: string, imageKey: string) => {
    if (!confirm("Are you sure you want to delete this banner?")) return;
    
    const res = await deleteBanner(id, imageKey);
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("Banner deleted");
      setBanners(banners.filter(b => b.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-borderColor">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Upload New Banner</h2>
          <p className="text-sm text-gray-500 mt-1">Recommended size: 1920x600 pixels.</p>
        </div>
        <div>
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            ref={fileInputRef} 
            onChange={handleUpload}
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="__btn bg-brand text-white w-full sm:w-auto"
          >
            {isUploading ? "Uploading..." : "Upload Banner"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {banners.map((banner) => (
          <div key={banner.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-borderColor">
            <div className="relative w-full aspect-[16/6]">
              <Image 
                src={banner.url} 
                alt="Banner" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Customer Dashboard</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={banner.isActiveCustomer}
                    onChange={() => handleToggle(banner.id, "customer", banner.isActiveCustomer)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Staff Dashboard</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={banner.isActiveStaff}
                    onChange={() => handleToggle(banner.id, "staff", banner.isActiveStaff)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
                </label>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <button 
                  onClick={() => handleDelete(banner.id, banner.imageKey)}
                  className="w-full text-red-500 text-sm font-medium hover:text-red-700 transition-colors"
                >
                  Delete Banner
                </button>
              </div>
            </div>
          </div>
        ))}

        {banners.length === 0 && (
          <div className="col-span-full py-12 text-center text-gray-500 bg-white rounded-2xl border border-dashed border-gray-300">
            No banners uploaded yet. Upload a banner to get started.
          </div>
        )}
      </div>
    </div>
  );
}
