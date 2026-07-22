import { unstable_cache } from "next/cache";

export type SiteContent = {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: Array<{
    id: string;
    title: string;
    description: string;
  }>;
};

async function fetchFromCMS(): Promise<SiteContent> {
  // À configurer en Phase 4 : Google Sheets, Airtable, Sanity ou Supabase.
  throw new Error("CMS non configuré");
}

async function fetchFallback(): Promise<SiteContent> {
  const fallback = await import("../data/fallback-content.json");
  return fallback.default;
}

export const getSiteContent = unstable_cache(
  async (): Promise<SiteContent> => {
    try {
      return await fetchFromCMS();
    } catch {
      return fetchFallback();
    }
  },
  ["site-content"],
  { revalidate: 300, tags: ["site-content"] },
);
