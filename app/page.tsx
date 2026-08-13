"use client"

import { Hero, AboutSection, ProcessStepsSection, ExperienceSection, ImpactStatsSection, SkillsSection, CertificationsSection, ContactSection, FooterSection } from "@/components/sections/index"
import { FeaturedProjectsSection } from "@/components/sections/featured-projects"
import { DiscoveryDojoHeroCard } from "@/components/discovery-dojo/hero-card"
import { SplashCursor } from "@/components/ui/splash-cursor"

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0c0c0e] text-white">
      <SplashCursor />
      <Hero />
      <AboutSection />
      <ProcessStepsSection />
      <DiscoveryDojoHeroCard />
      <FeaturedProjectsSection />
      <ExperienceSection />
      <ImpactStatsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
