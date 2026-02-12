import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgitexAI | AI-Powered Software Development",
  description:
    "From AI-powered MVPs to enterprise integrations. Build smarter, ship faster, scale with AI. Albanian engineering excellence serving US & EU clients.",
  keywords: [
    "AI software development",
    "AI MVP development",
    "data engineering pipelines",
    "MLOps model deployment",
    "FastAPI Python backend",
    "LangChain AI agents",
    "DevOps cloud Kubernetes",
    "Custom software Albania",
  ],
  openGraph: {
    title: "AgitexAI | AI-Powered Software Development",
    description: "From AI-powered MVPs to enterprise integrations. European excellence, global reach.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--off-white)]">{children}</body>
    </html>
  );
}
