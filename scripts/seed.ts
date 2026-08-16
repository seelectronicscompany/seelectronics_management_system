import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error("DATABASE_URL is not set in .env");
  process.exit(1);
}

const sql = neon(DATABASE_URL);
const db = drizzle(sql, { schema });

async function main() {
  console.log("🌱 Starting Database Safe Seed...");

  try {
    console.log("⏳ Checking for existing agreements...");
    
    const tosContent = "আমি এই মর্মে ঘোষণা করিতেছি যে, আমি SE ELECTRONICS কোম্পানির সকল নির্দেশনা মানিয়া চলিব এবং আমার উপরোক্ত তথ্যবলি নির্ভুল ও সত্য। আমি জ্ঞানতঃ কোনো তথ্য গোপন করি নাই ৷ যদি আমি ভবিষ্যতে আমার বিরুদ্ধে ভুল তথ্য দাখিল কিংবা প্রধান সম্পর্কিত কোনো ধরনের অভিযোগ পাওয়া যায়, তাহলে এস ই বিডি কতৃকপক্ষ আমার বিরুদ্ধে যথাযথ ব্যবস্হা গ্রহন করিতে পারিবে এবং এতে আমার কোনো অপত্তি থাকবেনা। আমি কোনো অপত্তি করিলে সর্বস্হর আদালতে তাহ্য অগ্যাহ্য বলিয়া গণ্য হইবে। আমার বর্তমান ঠিকানা পরিবর্তন হলে পরিবর্তীত নতুন ঠিকানা পরবর্তী ০৩ দিনের মধ্যে লিখিতভাবে এস ই বিডির প্রশাসনিক বিভাগে জানাতে বাধ্য থাকবো৷";

    const existing = await db.query.agreements.findFirst({
      where: eq(schema.agreements.type, "application_declaration")
    });

    if (existing) {
      console.log("⏳ Updating existing Application Declaration...");
      await db.update(schema.agreements).set({
        content: tosContent,
        isActive: true,
      }).where(eq(schema.agreements.id, existing.id));
    } else {
      console.log("⏳ Inserting new Application Declaration...");
      await db.insert(schema.agreements).values({
        type: "application_declaration",
        title: "Service Application Declaration",
        content: tosContent,
        version: "1.0",
        isActive: true,
      });
    }

    console.log("✅ Terms of Service agreement seeded safely!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}

main();
