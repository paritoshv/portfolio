import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
