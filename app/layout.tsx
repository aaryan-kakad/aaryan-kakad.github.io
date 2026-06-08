import type { Metadata } from "next";
import "./globals.css";

const title = "Aaryan Kakad";
const description = "Self-taught builder from Mumbai learning ML from scratch, reading papers physically, and using leverage to build what matters.";
const siteUrl = "https://aaryan-kakad.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Aaryan Kakad",
    images: [
      {
        url: "/media/hero-formal.webp",
        width: 900,
        height: 1200,
        alt: "Aaryan Kakad"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/media/hero-formal.webp"],
    creator: "@aaryan_kakad"
  },
  icons: {
    icon: "/mark.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aaryan Kakad",
    url: siteUrl,
    sameAs: ["https://github.com/AKMessi", "https://x.com/aaryan_kakad", "https://www.linkedin.com/in/aaryankakad/"],
    knowsAbout: ["machine learning", "AI agents", "computer vision", "markets", "research papers", "systems"]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/0xProtoNerdFont-Regular-ASCII.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
