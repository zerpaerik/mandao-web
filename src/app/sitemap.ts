import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/comercios`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/riders`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/terminos`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/privacidad`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
