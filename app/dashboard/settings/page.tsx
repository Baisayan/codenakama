import { getSettingsPageData } from "@/module/settings";
import SettingsPageClient from "@/module/settings/settings-page-client";

export default async function Page () {
  const data = await getSettingsPageData();

  return <SettingsPageClient initialData={data} />;
};
