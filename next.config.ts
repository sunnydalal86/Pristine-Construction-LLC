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
  // Dev-only: Next.js 16 blocks cross-origin /_next/* unless the page origin is allowlisted.
  // Phones load via your LAN IP (not the hard-coded machine IP below); wildcard patterns cover RFC1918.
  // Add hostnames via NEXT_DEV_EXTRA_ORIGINS (comma-separated), e.g. my-phone.local,tunnel-domain.loca.lt
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "null",
    "192.168.*.*",
    "10.*.*.*",
    "172.*.*.*",
    // Bonjour hostnames from macOS/iOS (http://Your-Mac.local:3000)
    "*.local",
    ...extraFromEnv,
  ],
};

export default nextConfig;
