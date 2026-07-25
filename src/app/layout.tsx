import type { Metadata } from "next";
import { Geist, IBM_Plex_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const SITE_URL = "https://paritosh.space";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Paritosh Varshney — Backend & Agentic Systems Engineer",
  description:
    "Backend engineer working on the systems behind AI products — LLM orchestration, durability, and cost tracking. 3+ years building high-throughput distributed systems.",
  keywords: [
    "Paritosh Varshney",
    "backend engineer",
    "agentic systems",
    "LLM orchestration",
    "distributed systems",
    "AI infrastructure",
  ],
  authors: [{ name: "Paritosh Varshney", url: SITE_URL }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Paritosh Varshney — Backend & Agentic Systems Engineer",
    description:
      "I build the backend that keeps AI products running — LLM orchestration, durability, and cost tracking.",
    siteName: "paritosh.space",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@litemonke",
    title: "Paritosh Varshney — Backend & Agentic Systems Engineer",
    description:
      "I build the backend that keeps AI products running — LLM orchestration, durability, and cost tracking.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${plexMono.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
