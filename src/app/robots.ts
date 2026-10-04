import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  const site =
    process.env.SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : undefined);
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/docs/', '/api/'] },
    ...(site ? { sitemap: `${site}/sitemap.xml` } : {}),
  };
}
