import { verifyStaffSession } from "@/actions";
import { getStaffById } from "@/actions/staffActions";
import { getObjectUrl } from "@/lib/s3";
import { verifySession } from "@/lib";
import { redirect } from "next/navigation";
import ResumeClient from "./ResumeClient";

export default async function ResumePage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  let userId = "";

  if (id) {
    const adminSession = await verifySession(false, "admin");
    if (!adminSession?.isAuth) {
      redirect("/login");
    }
    userId = id;
  } else {
    const session = await verifyStaffSession();
    if (!session.isAuth) {
      redirect("/staff/login");
    }
    userId = session.userId as string;
  }

  const profileRes = await getStaffById(userId);
  const staffData = profileRes.success ? profileRes.data : null;

  if (!staffData) {
    return (
      <div className="p-6 text-center">
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md font-bold">
          Staff profile not found. Contact administrator.
        </div>
      </div>
    );
  }

  const nidFrontUrl = staffData.nidFrontPhotoKey
    ? staffData.nidFrontPhotoUrl ||
      (await getObjectUrl(staffData.nidFrontPhotoKey))
    : null;
  const nidBackUrl = staffData.nidBackPhotoKey
    ? staffData.nidBackPhotoUrl ||
      (await getObjectUrl(staffData.nidBackPhotoKey))
    : null;

  return <ResumeClient staffData={{ ...staffData, nidFrontUrl, nidBackUrl }} />;
}
