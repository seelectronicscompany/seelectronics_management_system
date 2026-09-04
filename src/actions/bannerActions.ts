"use server";

import { db } from "@/db/drizzle";
import { banners } from "@/db/schema";
import { deleteObject, getObjectUrl, putObject } from "@/lib/s3";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function uploadBanner(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file || file.size === 0) {
      return { error: "No file uploaded" };
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    
    const key = `banners/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
    
    await putObject({
      Key: key,
      Body: buffer,
      ContentType: file.type,
    });

    await db.insert(banners).values({
      imageKey: key,
      isActiveCustomer: false,
      isActiveStaff: false,
    });

    revalidatePath("/banners");
    return { success: true };
  } catch (error: any) {
    console.error("Error uploading banner:", error);
    return { error: "Failed to upload banner" };
  }
}

export async function getBanners() {
  try {
    const result = await db.select().from(banners).orderBy(banners.createdAt);
    
    const bannersWithUrls = await Promise.all(
      result.map(async (banner: any) => {
        const url = await getObjectUrl(banner.imageKey);
        return {
          ...banner,
          url,
        };
      })
    );
    
    return { banners: bannersWithUrls };
  } catch (error: any) {
    console.error("Error fetching banners:", error);
    return { error: "Failed to fetch banners" };
  }
}

export async function getActiveBanners(type: "customer" | "staff") {
  try {
    const result = await db.select().from(banners).where(
      eq(type === "customer" ? banners.isActiveCustomer : banners.isActiveStaff, true)
    );
    
    const bannersWithUrls = await Promise.all(
      result.map(async (banner: any) => {
        const url = await getObjectUrl(banner.imageKey);
        return {
          ...banner,
          url,
        };
      })
    );
    
    return { banners: bannersWithUrls };
  } catch (error: any) {
    console.error("Error fetching active banners:", error);
    return { error: "Failed to fetch active banners" };
  }
}

export async function toggleBannerStatus(id: string, type: "customer" | "staff", currentStatus: boolean) {
  try {
    await db
      .update(banners)
      .set(
        type === "customer" 
          ? { isActiveCustomer: !currentStatus } 
          : { isActiveStaff: !currentStatus }
      )
      .where(eq(banners.id, id));

    revalidatePath("/banners");
    revalidatePath("/customer");
    revalidatePath("/staff");
    revalidatePath("/");
    
    return { success: true };
  } catch (error: any) {
    console.error("Error toggling banner status:", error);
    return { error: "Failed to toggle banner status" };
  }
}

export async function deleteBanner(id: string, imageKey: string) {
  try {
    await deleteObject({ Key: imageKey });
    await db.delete(banners).where(eq(banners.id, id));

    revalidatePath("/banners");
    revalidatePath("/customer");
    revalidatePath("/staff");
    revalidatePath("/");
    
    return { success: true };
  } catch (error: any) {
    console.error("Error deleting banner:", error);
    return { error: "Failed to delete banner" };
  }
}
