import type { Metadata } from "next";
import Script from "next/script";
import { Roboto } from 'next/font/google';
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

// JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "YouTube New Order",
  "headline": "Customize Your YouTube Layout",
  "alternativeHeadline": "Swap comments, resize columns, and improve your viewing experience",
  "image": "/logo.png",
  "applicationCategory": "BrowserExtension",
  "applicationSubCategory": "UtilityApplication",
  "operatingSystem": "Chrome, Edge, Brave, Opera, Chromium",
  "featureList": "Layout Swap, Resizable Columns, Collapsible Sections, PiP Comments, Grid View, Volume Boost",
  "softwareRequirements": "Google Chrome 88+ or compatible Chromium browser",
  "author": {
    "@type": "Organization",
    "name": "YouTube New Order",
    "url": "https://youtubeneworder.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
  },
  "description": "YouTube New Order is a Chrome extension that reorders YouTube's video page layout by moving comments to the right sidebar and related videos to the bottom."
};

export const metadata: Metadata = {
  title: {
    default: "YouTube New Order - Customize Your YouTube Layout",
    template: "%s | YouTube New Order"
  },
  description: "Swap YouTube comments and related videos, resize columns, and enhance your viewing experience with this powerful Chrome extension.",
  keywords: ["YouTube", "layout", "extension", "comments", "sidebar", "customize", "chrome extension", "dark mode"],
  themeColor: '#0f0f0f',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'YouTube New Order',
  },
  formatDetection: {
    telephone: false
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#0f0f0f" />
      </head>
      <body className="bg-[#0f0f0f] text-[#f1f1f1] antialiased selection:bg-[#3ea6ff]/30 selection:text-white">
        {children}
        <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" />
      </body>
    </html>
  );
}

