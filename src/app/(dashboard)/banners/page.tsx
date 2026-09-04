import { getBanners } from "@/actions";
import ManageBannersClient from "@/components/features/admin/ManageBannersClient";

export const metadata = {
  title: "Manage Banners",
};

export default async function ManageBannersPage() {
  const result = await getBanners();

  return (
    <ManageBannersClient initialBanners={result.banners || []} />
  );
}
