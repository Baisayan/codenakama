"use client";

import { RepositoryList } from "./repo-list";
import { getSettingsPageData } from "@/module/settings";

interface SettingsPageClientProps {
  initialData: Awaited<ReturnType<typeof getSettingsPageData>>;
}

export default function SettingsPageClient({
  initialData,
}: SettingsPageClientProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your connected repositories.
        </p>
      </div>

      <RepositoryList initialRepos={initialData.repositories} />
    </div>
  );
}
