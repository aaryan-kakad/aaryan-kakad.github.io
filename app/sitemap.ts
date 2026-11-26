import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aaryan-kakad.github.io",
      lastModified: new Date("2026-11-27"),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
