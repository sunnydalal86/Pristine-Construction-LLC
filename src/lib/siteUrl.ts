/**
 * Canonical origin for metadata, sitemap, and Open Graph absolute URLs.
 * Netlify sets `URL` at build time. Override with `NEXT_PUBLIC_SITE_URL` if needed.
 *
 * In development, match `npm run dev` (--hostname 127.0.0.1, port 3000) so metadata
 * resolves correctly while previewing locally.
 */
export function getSiteUrl(): string {
  if (process.env.NODE_ENV === "development") {
    const port = process.env.PORT || "3000";
    return `http://127.0.0.1:${port}`;
  }

  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.URL ??
    "https://www.pristineconstructionllc.com";
  return raw.replace(/\/$/, "");
}
