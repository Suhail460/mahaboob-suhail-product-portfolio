import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "M Mahaboob Suhail | Product Operations & Product Analyst Portfolio",

  description:
    "Portfolio of M Mahaboob Suhail showcasing product strategy, product operations, SaaS experience, growth case studies, and product management projects.",

  keywords: [
    "Product Analyst",
    "Product Operations",
    "Associate Product Manager",
    "Product Management Portfolio",
    "Product Strategy",
    "SaaS",
    "Growth & Retention",
    "Product Case Studies",
    "Healthcare SaaS",
    "Workflow Optimization",
    "UAT Testing",
    "Product Support Analyst"
  ],

  authors: [{ name: "M Mahaboob Suhail" }],

  creator: "M Mahaboob Suhail",

  openGraph: {
    title: "M Mahaboob Suhail | Product Portfolio",

    description:
      "Product Operations and Product Analyst portfolio featuring PM case studies, SaaS experience, and product strategy projects.",

    url: "https://mahaboob-suhail-product-portfolio.vercel.app/",

    siteName: "M Mahaboob Suhail Portfolio",

    locale: "en_US",

    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
