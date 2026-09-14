import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/providers/theme-provider"
import { LenisProvider } from "@/components/providers/lenis-provider"
import { Preloader } from "@/components/ui/preloader"
import { Navbar } from "@/components/layout/navbar"
import { TargetCursor } from "@/components/ui/target-cursor"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const siteUrl = "https://mahaboob-suhail-product-portfolio.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mahaboob Suhail | Product Portfolio & Product Strategist",
    template: "%s | Mahaboob Suhail Product Portfolio",
  },
  description:
    "Official product portfolio of M Mahaboob Suhail. Showcasing product strategy, product operations, SaaS experience, healthcare SaaS teardowns, retention case studies, and flagship projects including Discovery Dojo.",
  keywords: [
    "Mahaboob Suhail",
    "Mahaboob Suhail Portfolio",
    "Mahaboob Suhail Product Portfolio",
    "Mahaboob Suhail Product Portfolio Vercel",
    "Suhail Product Portfolio",
    "M Mahaboob Suhail Portfolio",
    "Mahaboob Suhail Product Support Analyst",
    "Mahaboob Suhail PM Portfolio",
    "Product Support Analyst",
    "Product Analyst",
    "Associate Product Manager",
    "Product Manager",
    "Product Owner",
    "Product Operations",
    "Product Strategy",
    "Discovery Dojo",
    "SaaS Portfolio",
    "Healthcare SaaS",
  ],
  authors: [{ name: "M Mahaboob Suhail", url: "https://www.linkedin.com/in/mmahaboobsuhail" }],
  creator: "M Mahaboob Suhail",
  publisher: "M Mahaboob Suhail",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Mahaboob Suhail | Product Portfolio & Product Strategist",
    description:
      "Official Product Management & Product Strategy portfolio of M Mahaboob Suhail featuring SaaS case studies, escalation reduction, and flagship product Discovery Dojo.",
    url: siteUrl,
    siteName: "Mahaboob Suhail Product Portfolio",
    images: [
      {
        url: "/images/discovery-dojo/dashboard.png",
        width: 1200,
        height: 630,
        alt: "Mahaboob Suhail Product Portfolio - Discovery Dojo Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahaboob Suhail | Product Portfolio",
    description:
      "Official product strategy & PM portfolio of M Mahaboob Suhail featuring SaaS case studies and Discovery Dojo.",
    images: ["/images/discovery-dojo/dashboard.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "M Mahaboob Suhail",
    alternateName: ["Mahaboob Suhail", "Suhail", "M M Suhail"],
    url: siteUrl,
    image: `${siteUrl}/images/discovery-dojo/dashboard.png`,
    jobTitle: "Product Support Analyst & Product Strategist",
    worksFor: {
      "@type": "Organization",
      name: "Product Strategy & SaaS Operations",
    },
    knowsAbout: [
      "Product Management",
      "Product Strategy",
      "Product Operations",
      "Customer Escalations & Retention",
      "User Research Synthesis",
      "SaaS Platforms",
      "Discovery Dojo",
    ],
    sameAs: [
      "https://www.linkedin.com/in/mmahaboobsuhail",
      "https://github.com/Suhail460",
      siteUrl,
    ],
  }

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mahaboob Suhail Product Portfolio",
    alternateName: ["Mahaboob Suhail Portfolio", "Suhail Product Portfolio"],
    url: siteUrl,
    publisher: {
      "@type": "Person",
      name: "M Mahaboob Suhail",
    },
  }

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
        id="json-ld-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
      />
      <Script
        id="json-ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
      <body className="min-h-full flex flex-col bg-[#0c0c0e] text-white">
        <LenisProvider>
          <Preloader />
          <ThemeProvider>
            <TargetCursor spinDuration={2} hideDefaultCursor={true} parallaxOn={true} cursorColor="#e58e39" cursorColorOnTarget="#fcd34d" />
            <Navbar />
            {children}
          </ThemeProvider>
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
