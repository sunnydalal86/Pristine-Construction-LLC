/**
 * Canonical origin for metadata, sitemap, and Open Graph absolute URLs.
 * Netlify sets `URL` at build time. Override with `NEXT_PUBLIC_SITE_URL` if needed.
 */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.URL ??
    "https://www.pristineconstructionllc.com";
  return raw.replace(/\/$/, "");
}
