"use client"

import { Hero, AboutSection, ProcessStepsSection, ExperienceSection, ImpactStatsSection, SkillsSection, CertificationsSection, ContactSection, FooterSection } from "@/components/sections/index"
import { FeaturedProjectsSection } from "@/components/sections/featured-projects"
import { DiscoveryDojoHeroCard } from "@/components/discovery-dojo/hero-card"

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0c0c0e] text-white">
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
