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

export const metadata: Metadata = {
  title: "Pristine Construction LLC | Premium Remodeling in San Jose, CA",
  description:
    "Pristine Construction delivers premium bathroom remodels, kitchen renovations, and custom ADUs in the Bay Area. Built with precision. Designed to last.",
  openGraph: {
    title: "Pristine Construction LLC | Premium Remodeling in San Jose, CA",
    description:
      "Premium bathroom remodels, kitchen renovations, and custom ADUs in the Bay Area.",
    url: "https://www.pristineconstructionllc.com",
    siteName: "Pristine Construction",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pristine Construction LLC",
    description:
      "Premium bathroom remodels, kitchen renovations, and custom ADUs in the Bay Area.",
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
