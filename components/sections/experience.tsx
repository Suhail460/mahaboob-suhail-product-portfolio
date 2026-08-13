"use client"

import { motion } from "framer-motion"
import { experiences } from "@/lib/data"
import { FaBuilding, FaCalendarAlt, FaCheckCircle } from "react-icons/fa"

const yearAccents = [
  { year: "2025 - PRES", bg: "rgba(229, 142, 57, 0.15)", color: "#e58e39", border: "rgba(229, 142, 57, 0.3)" },
  { year: "2022 - 2025", bg: "rgba(179, 157, 219, 0.15)", color: "#b39ddb", border: "rgba(179, 157, 219, 0.3)" },
  { year: "2018 - 2022", bg: "rgba(129, 199, 132, 0.15)", color: "#81c784", border: "rgba(129, 199, 132, 0.3)" },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 relative border-t border-white/10 studio-grid-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-3 w-3 rounded-full bg-[#b39ddb]" />
              <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#b39ddb]">
                CAREER TRACK & EVOLUTION
              </p>
            </div>
            <h2 className="heading-section text-white max-w-2xl">
              PRODUCT EXPERIENCE & LEADERSHIP
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm md:text-base leading-relaxed">
            From managing high-volume customer escalations to defining product specifications, PRD updates, and feature validation.
          </p>
        </div>

        {/* Refined Timeline Cards */}
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
                className="relative overflow-hidden bg-[#121215] border border-white/10 hover:border-white/20 rounded-2xl p-6 md:p-10 group transition-all"
              >
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  {/* Left Year & Badge Column */}
                  <div className="md:col-span-4 space-y-4">
                    <span
                      className="inline-block px-4 py-1.5 rounded-full text-xs font-mono-tag font-bold uppercase border"
                      style={{ backgroundColor: accent.bg, color: accent.color, borderColor: accent.border }}
                    >
                      {accent.year}
                    </span>

                    <h3 className="text-2xl md:text-3xl font-extrabold uppercase text-white group-hover:text-[#e58e39] transition-colors">
                      {exp.title}
                    </h3>

                    <div className="flex flex-col gap-1 text-sm font-mono-tag text-neutral-400">
                      <span className="flex items-center gap-2 text-white font-semibold">
                        <FaBuilding className="text-[#e58e39]" size={14} />
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
                      // KEY CONTRIBUTIONS & IMPACT WINS:
                    </p>
                    {exp.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3">
                        <FaCheckCircle className="text-[#81c784] shrink-0 mt-1" size={14} />
                        <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-medium">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}

          {/* Earlier Foundational Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#18181c] border border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="px-3.5 py-1 rounded-full bg-white/10 text-neutral-300 text-xs font-mono-tag font-bold uppercase">
                  FOUNDATIONAL EXPERIENCE
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
