import { checkAndNotifyExpiredSubscriptions } from "@/actions/subscriptionActions";
import { NextResponse } from "next/server";

/**
 * API Route to trigger subscription expiration checks.
 * This should be called by a daily cron job.
 * GET /api/notifications/expiry
 */
export async function GET(request: Request) {
  try {
    // Optional: Add simple secret verification
    // const { searchParams } = new URL(request.url);
    // const secret = searchParams.get('secret');
    // if (secret !== process.env.CRON_SECRET) {
    //   return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    // }

    const result = await checkAndNotifyExpiredSubscriptions();
    
    return NextResponse.json(result);
  } catch (error) {
    console.error("Cron Job Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
