"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaFileDownload } from "react-icons/fa";
import Link from "next/link";
import { trackEvent } from "@/lib/gtag"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* BACKGROUND GRADIENTS */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl"></div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-zinc-900 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-5">

          <h1 className="text-lg font-semibold tracking-wide">
            M Mahaboob Suhail
          </h1>

          <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#case-studies" className="hover:text-white transition">
              Case Studies
            </a>

            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center justify-center px-6">

        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              PRODUCT PORTFOLIO
            </p>

            <h1 className="text-4xl leading-tight md:text-7xl font-bold leading-tight tracking-tight md:text-7xl">
              From customer escalations
              <br />
              to product strategy.
            </h1>

            <p className="mt-8 mx-auto max-w-2xl text-lg leading-8 text-zinc-400">
              Aspiring Product Manager with 8.5 years of experience across 
              customer operations, product support, and growth-focused product strategy.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#case-studies"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
              >
                View Case Studies
              </a>

              <a
                href="/resume/suhail_resume.pdf"
                target="_blank"
                download
                className="flex items-center gap-2 rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-semibold transition hover:border-zinc-400"
                onClick={() =>
  trackEvent(
    "resume_download",
    "engagement",
    "Resume Button"
  )
}
              >
                <FaFileDownload />
                Resume
              </a>

              <a
                href="https://www.linkedin.com/in/mmahaboobsuhail"
                target="_blank"
                className="flex items-center gap-2 rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-semibold transition hover:border-zinc-400"
              >
                <FaLinkedin />
                LinkedIn
              </a>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-2xl"></div>

              <Image
  src="/images/temp-profile.jpg"
  alt="M Mahaboob Suhail profile photo"
  width={400}
  height={400}
  className="h-full w-full rounded-full object-contain"
/>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-zinc-900 px-6 py-24"
      >
        <div className="mx-auto max-w-4xl">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            About Me
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Customer-first product thinking.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            My journey started in customer support leadership, where I worked closely
            with escalations, operational inefficiencies, and customer pain points at scale.
            Over time, I became deeply interested in solving those problems at the product level.
          </p>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Today, I focus on product strategy, growth, retention, and user-centric
            problem solving through detailed product case studies and operational insight.
          </p>

        </div>
      </section>

      {/* CASE STUDIES */}
      <section
        id="case-studies"
        className="border-t border-zinc-900 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Featured Case Studies
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Product thinking in action.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2">

  {[
  {
    title: "Ola Ride Retention Strategy",
    category: "Growth & Retention",
    image: "/images/case-studies/ola.jpg",
    description:
      "Growth-focused case study exploring habit formation and long-term ride engagement.",
    link: "/case-studies"
  },

  {
    title: "YouTube Product Strategy",
    category: "Product Strategy",
    image: "/images/case-studies/youtube.jpg",
    description:
      "Deep analysis of engagement, monetization, and recommendation opportunities.",
    link: "/case-studies"
  },

  {
    title: "CRED Product Teardown",
    category: "Fintech Product",
    image: "/images/case-studies/cred.jpg",
    description:
      "Teardown focused on gamification, psychology, and engagement mechanics.",
    link: "/case-studies"
  },

  {
    title: "WhatsApp Status JTBD",
    category: "JTBD Framework",
    image: "/images/case-studies/whatsapp.jpg",
    description:
      "User motivation and behavioral analysis using Jobs-To-Be-Done methodology.",
    link: "/case-studies"
  }
].map((study, index) => (
  <motion.div
    key={index}
    whileHover={{ y: -8 }}
  >

    <Link href={study.link}>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]">

        {/* IMAGE */}
        <div className="relative mb-6 overflow-hidden rounded-2xl">

          <img
            src={study.image}
            alt={study.title}
            className="h-56 w-full object-contain bg-zinc-900 transition duration-500 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        </div>

        <p className="text-sm text-indigo-400">
          {study.category}
        </p>

        <h3 className="mt-4 text-2xl font-semibold">
          {study.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {study.description}
        </p>

        <div className="mt-8">
          <span className="text-sm text-zinc-500">
            View Full Case Study →
          </span>
        </div>

      </div>

    </Link>

  </motion.div>
))}

          </div>
        </div>
      </section>

            {/* RELEVANT EXPERIENCE */}
      <section
        id="experience"
        className="border-t border-zinc-900 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Relevant Experience
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Evolving from customer intelligence to product execution.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            My journey combines customer operations leadership, product collaboration,
            workflow optimization, and hands-on product execution experience across SaaS
            and operational platforms.
          </p>

          <div className="mt-20 border-l border-zinc-800 pl-8 space-y-16">

            {/* PRODUCT ANALYST */}
            <div className="relative">

              <div className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-indigo-500"></div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 hover:border-indigo-500/40 transition">

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                  <div>
                    <h3 className="text-2xl font-semibold">
                      Product Analyst
                    </h3>

                    <p className="mt-2 text-zinc-400">
                      AlohaPM India Private Limited
                    </p>
                  </div>

                  <p className="text-sm text-zinc-500">
                    Oct 2025 – Present
                  </p>

                </div>

                <div className="mt-8 space-y-4 text-zinc-300">

                  <p>
                    • Collaborate daily with stakeholders, developers, and QA teams to drive product enhancements, testing, and delivery execution.
                  </p>

                  <p>
                    • Developed strong domain expertise in ABA practice management systems including billing workflows, AR management, payroll, scheduling, 837P & 835 files, and clearing house integrations.
                  </p>

                  <p>
                    • Participated in feature validation, workflow optimization, product testing, and production readiness activities.
                  </p>

                  <p>
                    • Worked closely on feature rollouts, issue prioritization, operational improvements, and hardcoded enhancement initiatives.
                  </p>

                </div>

              </div>

            </div>

            {/* TEAM LEAD */}
            <div className="relative">

              <div className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-indigo-500"></div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 hover:border-indigo-500/40 transition">

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                  <div>
                    <h3 className="text-2xl font-semibold">
                      Team Lead – Customer Support
                    </h3>

                    <p className="mt-2 text-zinc-400">
                      AlohaPM India Private Limited
                    </p>
                  </div>

                  <p className="text-sm text-zinc-500">
                    Nov 2024 – Sep 2025
                  </p>

                </div>

                <div className="mt-8 space-y-4 text-zinc-300">

                  <p>
                    • Led support operations achieving a 98% resolution rate while reducing resolution time by 40% through workflow optimization.
                  </p>

                  <p>
                    • Collaborated cross-functionally to address 150+ customer-reported issues quarterly, contributing to product and operational improvements.
                  </p>

                  <p>
                    • Reduced repeat complaints by 25% through customer insight-driven process improvements and proactive support strategies.
                  </p>

                  <p>
                    • Improved team productivity by 30% through mentorship, escalation management, and operational guidance.
                  </p>

                </div>

              </div>

            </div>

            {/* SUPPORT SPECIALIST */}
            <div className="relative">

              <div className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-indigo-500"></div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 hover:border-indigo-500/40 transition">

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                  <div>
                    <h3 className="text-2xl font-semibold">
                      Customer Support Specialist II
                    </h3>

                    <p className="mt-2 text-zinc-400">
                      AlohaPM India Private Limited
                    </p>
                  </div>

                  <p className="text-sm text-zinc-500">
                    Oct 2022 – Oct 2024
                  </p>

                </div>

                <div className="mt-8 space-y-4 text-zinc-300">

                  <p>
                    • Managed 700+ monthly customer interactions with a 95% resolution rate while reducing ticket backlog by 60%.
                  </p>

                  <p>
                    • Collaborated with product managers, developers, QA teams, analysts, and CSMs to prioritize bugs and customer feedback insights.
                  </p>

                  <p>
                    • Identified and escalated 200+ software issues contributing to performance and customer experience improvements.
                  </p>

                </div>

              </div>

            </div>

            {/* EARLIER EXPERIENCE */}
            <div className="relative">

              <div className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-zinc-600"></div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

                <h3 className="text-2xl font-semibold">
                  Earlier Customer Operations Experience
                </h3>

                <p className="mt-4 leading-8 text-zinc-400">
                  Prior experience across customer operations and support environments focused on customer experience, process efficiency, operational excellence, and stakeholder communication.
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-500">

                  <span>Groupon Shared Services Pvt Ltd</span>
                  <span>•</span>
                  <span>Telligent Support LLP</span>
                  <span>•</span>
                  <span>[24]7.ai</span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

            {/* IMPACT SNAPSHOT */}
      <section className="border-t border-zinc-900 px-6 py-24">
        
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Impact Snapshot
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Operational depth paired with product-focused execution.
          </h2>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                value: "8.5+",
                label: "Years of Experience"
              },

              {
                value: "98%",
                label: "Resolution Rate Achieved"
              },

              {
                value: "40%",
                label: "Reduction in Resolution Time"
              },

              {
                value: "150+",
                label: "Customer Issues Collaborated On Quarterly"
              }

            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-indigo-500/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.12)]"
              >

                <h3 className="text-5xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {item.label}
                </p>

              </div>
            ))}

          </div>

      </section>

      {/* SKILLS */}
      <section className="border-t border-zinc-900 py-24 overflow-hidden">

        <div className="px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Skills & Capabilities
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Product, operations, and growth-focused expertise.
          </h2>

        </div>

        {/* ROW 1 */}
        <div className="mt-16 flex overflow-hidden">

          <div className="animate-marquee flex gap-4 whitespace-nowrap">

            {[
              "Product Strategy",
              "Growth & Retention",
              "User Research",
              "JTBD Framework",
              "Stakeholder Management",
              "Product Analytics",
              "Agile & Scrum",
              "Roadmapping",
              "Prioritization",
              "Customer Insights",
              "Feature Validation",
              "Cross-functional Collaboration",
              "Product Backlog Management",
              "A/B Testing",
              "User Testing"
            ].map((skill, index) => (
              <div
                key={index}
                className="rounded-full border border-zinc-800 bg-zinc-950 px-6 py-4 text-sm text-zinc-300"
              >
                {skill}
              </div>
            ))}

          </div>

        </div>

        {/* ROW 2 */}
        <div className="mt-6 flex overflow-hidden">

          <div className="animate-marquee-reverse flex gap-4 whitespace-nowrap">

            {[
              "Product Operations",
              "Workflow Optimization",
              "Escalation Management",
              "Operational Intelligence",
              "SaaS Platforms",
              "Feature Testing",
              "QA Collaboration",
              "Customer Experience",
              "Billing Workflows",
              "Problem Solving",
              "Strategic Thinking",
              "Execution Management",
              "Product Sense"
            ].map((skill, index) => (
              <div
                key={index}
                className="rounded-full border border-zinc-800 bg-zinc-950 px-6 py-4 text-sm text-zinc-300"
              >
                {skill}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CERTIFICATIONS */}
      <section className="border-t border-zinc-900 px-6 py-24">
    
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Certifications
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Continuous learning across product, agile, and AI.
          </h2>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {[
              {
                title: "Product Management Training Certificate",
                org: "HelloPM",
                year: "2025",
                link: "https://hellopm.co/certificate/?certificate_id=MVCRF3"
              },

              {
                title: "Technology for Product & Business Folks",
                org: "HelloPM",
                year: "2025",
                link: "https://hellopm.co/certificate/?certificate_id=0CNGOH"
              },

              {
                title: "AI for Product Managers",
                org: "HelloPM",
                year: "2024",
                link: "https://hellopm.co/certificate/?certificate_id=D2CVT9"
              },

              {
                title: "Product Owner Certification",
                org: "Agile Enterprise Coach",
                year: "2024",
                link: "https://drive.google.com/file/d/1jGf-B-lFmkb9iGbCxSLuQTDBwQIo6m8W/view"
              },

              {
                title: "ScrumMasterProfessional Certification",
                org: "Institute of Management, Technology & Finance",
                year: "2024",
                link: "https://edu.gtf.pt/pluginfile.php/1/tool_certificate/issues/1722755426/9212774068MS.pdf"
              },

              {
                title: "AgileScrumMaster (ASM®)",
                org: "Simplilearn",
                year: "2024",
                link: "https://drive.google.com/file/d/1JZJVzB-g7RkbVlshFcbzw2hdNb-6qmQB/view"
              },

              {
                title: "Professional Certificate: Product Management and Development",
                org: "Udemy",
                year: "2024",
                link: "https://www.udemy.com/certificate/UC-3b529307-fbe6-4da7-9793-3046e8f9b20d/"
              },

              {
                title: "HIPAA Awareness for Business Associates",
                org: "Hipaatraining.com",
                year: "2024",
                link: "https://drive.google.com/file/d/1bbyXa5-MihnQuiD99itcjaTwtM1hOXw9/view?usp=sharing"
              }

            ].map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-indigo-500/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.12)]"
              >

                <p className="text-sm text-indigo-400">
                  {cert.org}
                </p>

                <h3 className="mt-4 text-2xl font-semibold leading-tight group-hover:text-indigo-300 transition">
                  {cert.title}
                </h3>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-sm text-zinc-500">
                    {cert.year}
                  </span>

                  <span className="text-sm text-zinc-400">
                    View Certificate →
                  </span>

                </div>

              </a>
            ))}

          </div>

        
      </section>

      {/* CONTACT */}
      <section className="border-t border-zinc-900 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Contact
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Let’s build meaningful products.
          </h2>

          <p className="mx-auto mt-8 mx-auto max-w-2xl text-lg leading-8 text-zinc-400">
            Open to Product Management and Associate Product Manager opportunities.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="mailto:msuhail460@gmail.com"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
            >
              msuhail460@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/mmahaboobsuhail"
              target="_blank"
              className="rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-semibold transition hover:border-zinc-400"
            >
              LinkedIn
            </a>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 px-6 py-12 text-center text-zinc-500">
        <div className="flex flex-col items-center gap-4">

  <p>
    © 2026 M Mahaboob Suhail. Built with Next.js & Tailwind CSS.
  </p>

  <div className="flex gap-6 text-sm">

    <a
      href="/resume/suhail_resume.pdf"
      target="_blank"
      download
      className="hover:text-white transition"
      onClick={() =>
  trackEvent(
    "resume_download",
    "engagement",
    "Resume Button"
  )
}
    >
      Resume
    </a>

    <a
      href="https://www.linkedin.com/in/mmahaboobsuhail"
      target="_blank"
      className="hover:text-white transition"
    >
      LinkedIn
    </a>

  </div>

</div>
      </footer>

    </main>
  );
}