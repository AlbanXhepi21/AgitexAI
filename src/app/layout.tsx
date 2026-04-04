import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  GITHUB_ORG_URL,
  LINKEDIN_URL,
  SITE_URL,
  getMetadataBase,
  siteDescription,
  siteName,
} from "@/lib/site";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: SITE_URL,
  description: siteDescription,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tirana",
    addressCountry: "AL",
  },
  sameAs: [LINKEDIN_URL, GITHUB_ORG_URL],
};

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml", sizes: "any" }],
  },
  title: {
    default: `${siteName} | AI Engineering & RAG for US & EU Teams`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "AI development agency",
    "enterprise AI solutions",
    "AI agents development",
    "RAG pipeline development",
    "voice AI development",
    "AI consulting services",
    "agentic AI systems",
    "AI implementation partner",
    "AI engineering",
    "RAG systems",
    "AI agents",
    "MLOps",
    "data pipelines",
    "custom AI development",
    "Albania software agency",
    "US EU AI consulting",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName,
    title: `${siteName} | AI Engineering for Global Ambitions`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | AI Engineering for Global Ambitions`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
      </head>
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
