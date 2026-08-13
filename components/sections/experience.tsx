"use client"

import { motion } from "framer-motion"
import { experiences } from "@/lib/data"
import { FaBuilding, FaCalendarAlt, FaCheckCircle } from "react-icons/fa"

const yearAccents = [
  { year: "2025 - PRES", bg: "#FF905F", badgeText: "#0c0c0e" },
  { year: "2024 - 2025", bg: "#AB9BFF", badgeText: "#0c0c0e" },
  { year: "2022 - 2024", bg: "#B7FF93", badgeText: "#0c0c0e" },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 relative border-t border-white/10 arayana-grid-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-3 w-3 rounded-full bg-[#AB9BFF]" />
              <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#AB9BFF]">
                CAREER TRACK & EVOLUTION
              </p>
            </div>
            <h2 className="heading-section text-white max-w-2xl">
              PRODUCT EXPERIENCE & LEADERSHIP
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm md:text-base leading-relaxed">
            From managing high-volume customer escalations to defining product specifications, billing workflows, and feature validation.
          </p>
        </div>

        {/* Ariyana Year Track Timeline Cards */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => {
            const accent = yearAccents[idx % yearAccents.length]
            return (
              <motion.div
                key={exp.title + exp.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="year-card relative overflow-hidden bg-[#141418] border border-white/10 hover:border-white/25 rounded-2xl p-6 md:p-10 group"
              >
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  {/* Left Year & Badge Column */}
                  <div className="md:col-span-4 space-y-4">
                    <span
                      className="inline-block px-4 py-1.5 rounded-full text-xs font-mono-tag font-bold uppercase"
                      style={{ backgroundColor: accent.bg, color: accent.badgeText }}
                    >
                      {accent.year}
                    </span>

                    <h3 className="text-2xl md:text-3xl font-extrabold uppercase text-white group-hover:text-[#FF905F] transition-colors">
                      {exp.title}
                    </h3>

                    <div className="flex flex-col gap-1 text-sm font-mono-tag text-neutral-400">
                      <span className="flex items-center gap-2 text-white font-semibold">
                        <FaBuilding className="text-[#FF905F]" size={14} />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-2 text-xs text-neutral-500">
                        <FaCalendarAlt size={12} />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Right Impact Details Column */}
                  <div className="md:col-span-8 space-y-3 pt-2 md:pt-0 md:border-l border-white/10 md:pl-8">
                    <p className="font-mono-tag text-xs text-neutral-500 uppercase tracking-widest mb-2">
                      Key Contributions & Impact Wins:
                    </p>
                    {exp.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3">
                        <FaCheckCircle className="text-[#B7FF93] shrink-0 mt-1" size={14} />
                        <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}

          {/* Earlier Customer Operations Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#18181f] border border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="px-3.5 py-1 rounded-full bg-white/10 text-neutral-300 text-xs font-mono-tag font-bold uppercase">
                  EARLIER FOUNDATIONAL EXPERIENCE
                </span>
                <h4 className="text-xl font-bold uppercase text-white mt-3">
                  Customer Operations & Technical Support Foundations
                </h4>
                <p className="text-sm text-neutral-400 mt-2 max-w-2xl leading-relaxed">
                  Proven track record in customer experience, workflow efficiency, ticket backlog reduction, and cross-functional problem solving.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Groupon Shared Services", "Telligent Support LLP", "[24]7.ai"].map((co) => (
                  <span
                    key={co}
                    className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono-tag text-neutral-300"
                  >
                    {co}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
