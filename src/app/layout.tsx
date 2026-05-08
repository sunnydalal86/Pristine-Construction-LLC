import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.pristineconstructionllc.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pristine Construction LLC | Premium Remodeling in San Jose, CA",
  description:
    "Pristine Construction delivers premium bathroom remodels, kitchen renovations, and custom ADUs in the Bay Area. Built with precision. Designed to last.",
  openGraph: {
    title: "Pristine Construction LLC | Premium Remodeling in San Jose, CA",
    description:
      "Premium bathroom remodels, kitchen renovations, and custom ADUs in the Bay Area.",
    url: siteUrl,
    siteName: "Pristine Construction",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 794,
        height: 183,
        alt: "Pristine Construction — Bay Area design-build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pristine Construction LLC",
    description:
      "Premium bathroom remodels, kitchen renovations, and custom ADUs in the Bay Area.",
    images: ["/images/logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
