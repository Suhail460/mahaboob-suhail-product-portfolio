import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider"
import { LenisProvider } from "@/components/providers/lenis-provider"
import { Preloader } from "@/components/ui/preloader"
import { Navbar } from "@/components/layout/navbar"
import { SplashCursor } from "@/components/ui/splash-cursor"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://mahaboob-suhail-product-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "M Mahaboob Suhail | Product Support Analyst & Product Strategist",
  description:
    "Portfolio of M Mahaboob Suhail showcasing product strategy, product operations, SaaS experience, growth case studies, and product management projects including Discovery Dojo.",
  keywords: [
    "Product Support Analyst",
    "Product Analyst",
    "Associate Product Manager",
    "Product Manager",
    "Product Owner",
    "Product Operations",
    "Product Strategy",
    "SaaS",
    "Growth & Retention",
    "Product Case Studies",
    "Healthcare SaaS",
    "Workflow Optimization",
    "Discovery Dojo",
  ],
  authors: [{ name: "M Mahaboob Suhail" }],
  creator: "M Mahaboob Suhail",
  openGraph: {
    title: "M Mahaboob Suhail | Product Support Analyst & Product Strategy Portfolio",
    description:
      "Product Support Analyst & Product Strategy portfolio featuring PM case studies, SaaS experience, and product strategy projects including Discovery Dojo.",
    url: siteUrl,
    siteName: "M Mahaboob Suhail Portfolio",
    images: [
      {
        url: "/images/discovery-dojo/dashboard.png",
        width: 1200,
        height: 630,
        alt: "Discovery Dojo Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M Mahaboob Suhail | Product Support Analyst Portfolio",
    description:
      "Product Support Analyst & Product Strategy portfolio featuring PM case studies, SaaS experience, and product strategy projects.",
    images: ["/images/discovery-dojo/dashboard.png"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "M Mahaboob Suhail",
    url: siteUrl,
    jobTitle: "Product Support Analyst",
    knowsAbout: [
      "Product Management",
      "Product Operations",
      "Product Strategy",
      "Growth & Retention",
      "User Research",
      "SaaS Platforms",
    ],
    sameAs: ["https://www.linkedin.com/in/mmahaboobsuhail"],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  document.documentElement.classList.add('dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-GDS3P2MY0B`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GDS3P2MY0B');
        `}
      </Script>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <body className="min-h-full flex flex-col bg-[#0c0c0e] text-white">
        <LenisProvider>
          <Preloader />
          <ThemeProvider>
            <SplashCursor />
            <Navbar />
            {children}
          </ThemeProvider>
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}
