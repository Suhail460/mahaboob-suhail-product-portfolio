"use client"

import { motion } from "framer-motion"
import { skillsRow1, skillsRow2 } from "@/lib/data"
import { FaCheckCircle, FaRobot, FaBrain, FaBolt } from "react-icons/fa"

const categories = [
  {
    title: "AI Product Management & Building",
    color: "#FF905F",
    icon: FaRobot,
    skills: ["🤖 AI Product Builder", "⚡ LLM Prompt Engineering", "🧠 AI Feature Integration", "🔄 Agentic Workflow Design", "🎙️ AI Interview Simulator", "🤖 AI Agent Orchestration"],
  },
  {
    title: "Product Strategy & Growth",
    color: "#AB9BFF",
    icon: FaBrain,
    skills: ["🎯 Product Strategy", "📈 Growth & Retention", "🔍 User Research", "💡 JTBD Framework", "🤝 Stakeholder Management", "📊 Product Analytics"],
  },
  {
    title: "Product Operations & Execution",
    color: "#B7FF93",
    icon: FaBolt,
    skills: ["⚙️ Product Operations", "🚀 Workflow Optimization", "🚨 Escalation Management", "🏃 Agile & Scrum", "🗺️ Roadmapping", "⚖️ Prioritization"],
  },
  {
    title: "Domain & Technical Skills",
    color: "#FFD37A",
    skills: ["📚 RAG & Knowledge Bases", "🛡️ AI Ethics & Guardrails", "💼 SaaS Platforms", "🧪 Feature Testing", "👥 QA Collaboration", "💖 Customer Experience"],
  },
]

const colors = ["#FF905F", "#AB9BFF", "#B7FF93", "#FF767A", "#FFD37A", "#64E5FF"]

export function SkillsSection() {
  // Duplicate arrays to create continuous 100% infinite loops
  const tickerRow1 = [...skillsRow1, ...skillsRow1]
  const tickerRow2 = [...skillsRow2, ...skillsRow2]

  return (
    <section id="skills" className="py-24 md:py-32 relative border-t border-white/10 bg-[#0c0c0e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 mb-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-3 w-3 rounded-full bg-[#B7FF93] animate-pulse" />
              <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#B7FF93]">
                AI & PRODUCT COMPETENCY TICKER
              </p>
            </div>
            <h2 className="heading-section text-white max-w-2xl">
              SKILLS & AI PRODUCT TOOLKIT
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm md:text-base leading-relaxed">
            Continuously scrolling ticker showcasing AI product building, prompt engineering, growth strategy, and operational execution.
          </p>
        </div>
      </div>

      {/* INFINITE SCROLLING TICKER BAR ROW 1 (Left Direction via Framer Motion) */}
      <div className="relative w-full overflow-hidden py-3 bg-[#141418] border-y border-white/10 mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0c0c0e] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0c0c0e] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
          className="flex items-center gap-4 w-max"
        >
          {tickerRow1.map((skill, idx) => {
            const color = colors[idx % colors.length]
            return (
              <div
                key={skill + idx}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/40 hover:scale-105 transition-all cursor-pointer whitespace-nowrap group shrink-0"
              >
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
                <span className="font-mono-tag text-xs md:text-sm font-bold uppercase text-white group-hover:text-[#FF905F] transition-colors">
                  {skill}
                </span>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* INFINITE SCROLLING TICKER BAR ROW 2 (Right Direction via Framer Motion) */}
      <div className="relative w-full overflow-hidden py-3 bg-[#18181f] border-b border-white/10 mb-16">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0c0c0e] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0c0c0e] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
          className="flex items-center gap-4 w-max"
        >
          {tickerRow2.map((skill, idx) => {
            const color = colors[(idx + 3) % colors.length]
            return (
              <div
                key={skill + idx}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/40 hover:scale-105 transition-all cursor-pointer whitespace-nowrap group shrink-0"
              >
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
                <span className="font-mono-tag text-xs md:text-sm font-bold uppercase text-white group-hover:text-[#AB9BFF] transition-colors">
                  {skill}
                </span>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* CATEGORIZED COMPETENCY CARDS GRID */}
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-[#141418] border border-white/10 flex flex-col justify-between hover:border-white/25 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-tag text-xs uppercase tracking-wider text-neutral-500">
                    // AREA 0{i + 1}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                </div>

                <h3 className="text-lg font-extrabold uppercase text-white mb-6 group-hover:text-[#FF905F] transition-colors">
                  {cat.title}
                </h3>

                <div className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-xs font-mono-tag text-neutral-300">
                      <FaCheckCircle className="shrink-0" style={{ color: cat.color }} size={12} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-tag uppercase text-neutral-500">
                <span>Verified Toolkit</span>
                <span style={{ color: cat.color }}>Pro Level</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
