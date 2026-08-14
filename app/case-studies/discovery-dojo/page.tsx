import type { Metadata } from "next"
import { CaseStudyHero } from "@/components/discovery-dojo/case-study-hero"
import { CaseStudyExecutiveSummary } from "@/components/discovery-dojo/case-study-executive-summary"
import { CaseStudyProblem } from "@/components/discovery-dojo/case-study-problem"
import { CaseStudyResearch } from "@/components/discovery-dojo/case-study-research"
import { CaseStudySolution } from "@/components/discovery-dojo/case-study-solution"
import { CaseStudyUserJourney } from "@/components/discovery-dojo/case-study-user-journey"
import { CaseStudyIA } from "@/components/discovery-dojo/case-study-ia"
import { CaseStudyProductDecisions } from "@/components/discovery-dojo/case-study-product-decisions"
import { CaseStudyFeatures } from "@/components/discovery-dojo/case-study-features"
import { CaseStudyArchitecture } from "@/components/discovery-dojo/case-study-architecture"
import { CaseStudyChallenges, CaseStudyMetrics, CaseStudyLessons, CaseStudyRoadmap, CaseStudyCTA } from "@/components/discovery-dojo/case-study-challenges-metrics-lessons"
import { Gallery } from "@/components/discovery-dojo/gallery"
import { ReadingProgress } from "@/components/ui/reading-progress"
import { FooterSection } from "@/components/sections/footer"

export const metadata: Metadata = {
  title: "Discovery Dojo — Product Discovery Learning Platform | Case Study",
  description:
    "A production-grade, gamified learning platform built with React and Firebase. 15 curriculum levels, AI interview simulator, 14 badges, 64% bundle reduction, and zero ESLint warnings. A product case study by M Mahaboob Suhail.",
  openGraph: {
    title: "Discovery Dojo — Product Discovery Learning Platform | Case Study",
    description:
      "A production-grade, gamified product discovery learning platform. Built with React, Firebase, and deliberate practice.",
    url: "https://mahaboob-suhail-product-portfolio.vercel.app/case-studies/discovery-dojo",
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
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discovery Dojo — Product Discovery Learning Platform | Case Study",
    description:
      "A production-grade, gamified product discovery learning platform. Built with React, Firebase, and deliberate practice.",
    images: ["/images/discovery-dojo/dashboard.png"],
  },
}

export default function DiscoveryDojoCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0c0c0e] text-white overflow-x-clip arayana-grid-bg">
      <ReadingProgress />

      <div className="pt-20">
        <CaseStudyHero />
        <CaseStudyExecutiveSummary />
        <CaseStudyProblem />
        <CaseStudyResearch />
        <CaseStudySolution />
        <CaseStudyUserJourney />
        <CaseStudyIA />
        <CaseStudyProductDecisions />
        <CaseStudyFeatures />
        <CaseStudyArchitecture />
        <Gallery />
        <CaseStudyChallenges />
        <CaseStudyMetrics />
        <CaseStudyLessons />
        <CaseStudyRoadmap />
        <CaseStudyCTA />

        <FooterSection />
      </div>
    </main>
  )
}
