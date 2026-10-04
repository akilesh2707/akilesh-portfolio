import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
export default function sitemap(): MetadataRoute.Sitemap {
  const site =
    process.env.SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : undefined);
  if (!site) return [];
  return [
    { url: site, changeFrequency: 'monthly', priority: 1 },
    ...projects.map((p) => ({
      url: `${site}/projects/${p.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
