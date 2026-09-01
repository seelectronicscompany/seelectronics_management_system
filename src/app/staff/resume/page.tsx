import { verifyStaffSession } from "@/actions";
import { getStaffById } from "@/actions/staffActions";
import { getObjectUrl } from "@/lib/s3";
import { redirect } from "next/navigation";
import ResumeClient from "./ResumeClient";

export default async function ResumePage() {
  const session = await verifyStaffSession();
  if (!session.isAuth) {
    redirect("/staff/login");
  }

  const userId = session.userId as string;
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
