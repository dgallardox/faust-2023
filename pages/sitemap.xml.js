import { getSitemapProps } from "@faustwp/core";

export default function Sitemap() { }

// configured for Yoast SEO sitemap.xml
export function getServerSideProps(ctx) {
  return getSitemapProps(ctx, {
    frontendUrl: process.env.FRONTEND_URL,
    sitemapPathsToIgnore: ["/author-sitemap.xml"],
  });
}
