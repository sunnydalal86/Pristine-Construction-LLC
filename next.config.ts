import type { NextConfig } from "next";

// Extra hosts from env (comma-separated), e.g. your LAN IP or a preview domain:
// NEXT_DEV_EXTRA_ORIGINS=192.168.1.42,my-preview.local
const extraFromEnv = (process.env.NEXT_DEV_EXTRA_ORIGINS ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Dev-only: Next.js 16 blocks cross-origin /_next/* fetches. IDE previews and
  // some browsers need these; add more via NEXT_DEV_EXTRA_ORIGINS if blocked.
  allowedDevOrigins: [
    "192.168.1.18",
    "127.0.0.1",
    "localhost",
    "null",
    ...extraFromEnv,
  ],
};

export default nextConfig;
