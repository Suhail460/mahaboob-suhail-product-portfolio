"use client"

import { motion } from "framer-motion"
import { skillsRow1, skillsRow2 } from "@/lib/data"
import { FaCheckCircle, FaRobot, FaBrain, FaBolt, FaCode } from "react-icons/fa"

const categories = [
  {
    title: "AI & Product Building",
    color: "#e58e39",
    icon: FaRobot,
    skills: ["AI Product Architecture", "Prompt Engineering", "RAG & Knowledge Building", "AI Interview Simulator", "AI Agent Workflows", "Gamified Learning Systems"],
  },
  {
    title: "Product Strategy & Growth",
    color: "#f4a261",
    icon: FaBrain,
    skills: ["Product Strategy & PRDs", "Growth & Retention JTBD", "User Research Synthesis", "Wireframing & Spec Writing", "Product Analytics", "Stakeholder Alignment"],
  },
  {
    title: "Product Operations",
    color: "#81c784",
    icon: FaBolt,
    skills: ["Escalation Management", "Ticket Backlog Reduction", "Process Automation", "Agile & Scrum Delivery", "Roadmapping", "Cross-Team SLAs"],
  },
  {
    title: "Technical & Tools",
    color: "#b39ddb",
    icon: FaCode,
    skills: ["React & Next.js", "SQL & Data Extraction", "Firebase & Supabase", "Git & Version Control", "Jira & Confluence", "Notion & Figma"],
  },
]

const row1Accents = ["#e58e39", "#81c784", "#f4a261", "#e58e39", "#81c784"]
const row2Accents = ["#b39ddb", "#e58e39", "#81c784", "#b39ddb", "#f4a261"]

export function SkillsSection() {
  // 3x duplicates for infinite seamless loop
  const tickerRow1 = [...skillsRow1, ...skillsRow1, ...skillsRow1]
  const tickerRow2 = [...skillsRow2, ...skillsRow2, ...skillsRow2]

  return (
    <section id="skills" className="py-28 md:py-36 relative border-t border-white/10 bg-[#09090b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 mb-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-3 w-3 rounded-full bg-[#81c784] animate-pulse" />
              <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#81c784]">
                CORE COMPETENCIES & TOOLKIT
              </p>
            </div>
            <h2 className="heading-section text-white max-w-2xl">
              PRODUCT & TECHNICAL TOOLKIT.
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm md:text-base leading-relaxed font-medium">
            Categorized capabilities spanning AI product building, growth teardowns, operational workflows, and technical delivery.
          </p>
        </div>
      </div>

      {/* LUXURY INFINITE RIBBONS CONTAINER */}
      <div className="space-y-6 mb-20">
        {/* RIBBON 1: Left Direction (Luxurious Slow 55s Pace) */}
        <div className="relative w-full overflow-hidden py-4 bg-[#121215]/60 border-y border-white/10 backdrop-blur-md group">
          {/* Subtle Studio Grid Overlay */}
          <div className="absolute inset-0 studio-grid-bg opacity-30 pointer-events-none" />

          {/* Deep Linear Gradient Edge Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-[#09090b] via-[#09090b]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-[#09090b] via-[#09090b]/90 to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 55 }}
            className="flex items-center gap-4 w-max relative z-0"
          >
            {tickerRow1.map((skill, idx) => {
              const accentColor = row1Accents[idx % row1Accents.length]
              return (
                <div
                  key={skill + idx}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:scale-[1.03] transition-all cursor-pointer whitespace-nowrap group/pill shrink-0 shadow-2xl backdrop-blur-xl"
                  style={{
                    boxShadow: `0 4px 20px -5px rgba(0,0,0,0.5)`,
                  }}
                >
                  <span
                    className="h-2 w-2 rounded-full transition-transform group-hover/pill:scale-125"
                    style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }}
                  />
                  <span className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-wider text-neutral-200 group-hover/pill:text-white transition-colors">
                    {skill}
                  </span>
                  <span className="text-[10px] font-mono-tag text-neutral-600 uppercase font-bold">
                    // 0{ (idx % 12) + 1 }
                  </span>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* RIBBON 2: Right Direction (Luxurious Slow 65s Pace) */}
        <div className="relative w-full overflow-hidden py-4 bg-white/5 border-b border-white/10 backdrop-blur-md group">
          {/* Subtle Studio Grid Overlay */}
          <div className="absolute inset-0 studio-grid-bg opacity-20 pointer-events-none" />

          {/* Deep Linear Gradient Edge Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-[#09090b] via-[#09090b]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-[#09090b] via-[#09090b]/90 to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["-33.33%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 65 }}
            className="flex items-center gap-4 w-max relative z-0"
          >
            {tickerRow2.map((skill, idx) => {
              const accentColor = row2Accents[idx % row2Accents.length]
              return (
                <div
                  key={skill + idx}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#121215] border border-white/10 hover:border-white/30 hover:bg-white/10 hover:scale-[1.03] transition-all cursor-pointer whitespace-nowrap group/pill shrink-0 shadow-2xl backdrop-blur-xl"
                  style={{
                    boxShadow: `0 4px 20px -5px rgba(0,0,0,0.5)`,
                  }}
                >
                  <span
                    className="h-2 w-2 rounded-full transition-transform group-hover/pill:scale-125"
                    style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }}
                  />
                  <span className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-wider text-neutral-200 group-hover/pill:text-white transition-colors">
                    {skill}
                  </span>
                  <span className="text-[10px] font-mono-tag text-neutral-600 uppercase font-bold">
                    // PRO
                  </span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Double-Bezel Categorized Competency Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-[2rem] bg-white/5 border border-white/10 p-1.5 hover:border-white/20 transition-all group flex flex-col justify-between"
              >
                <div className="rounded-[calc(2rem-0.375rem)] bg-[#121215] p-6 h-full flex flex-col justify-between border border-white/5">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-white/5 text-[#e58e39] border border-white/10">
                        <Icon size={18} style={{ color: cat.color }} />
                      </div>
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                    </div>

                    <h3 className="text-lg font-extrabold uppercase text-white mb-6 group-hover:text-[#e58e39] transition-colors">
                      {cat.title}
                    </h3>

                    <div className="space-y-3">
                      {cat.skills.map((skill) => (
                        <div key={skill} className="flex items-center gap-2.5 text-xs font-mono-tag text-neutral-300">
                          <FaCheckCircle className="shrink-0" style={{ color: cat.color }} size={12} />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-tag uppercase text-neutral-500">
                    <span>Verified Competency</span>
                    <span style={{ color: cat.color }} className="font-bold">Proven</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
