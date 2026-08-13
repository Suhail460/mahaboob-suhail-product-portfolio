"use client"

import { motion } from "framer-motion"
import { FaHome, FaTools, FaChartLine, FaCog, FaRobot, FaCheckCircle } from "react-icons/fa"

const iaSections = [
  {
    name: "Dashboard",
    items: ["Learning Path (15 levels)", "Quick Actions (resume, daily challenge)", "Stats (XP, streak, mastery)", "Recent Activity"],
    icon: FaHome,
    color: "#FF905F",
  },
  {
    name: "Learning Tools",
    items: ["Lesson Viewer (screen curriculum)", "Interview Simulator (persona + scorecard)", "Exercise Generator (randomized briefs)", "Discovery Challenges (rapid drills)", "Capstone Project (9-stage guided project)"],
    icon: FaTools,
    color: "#AB9BFF",
  },
  {
    name: "Progress & Achievement",
    items: ["Badges & Skill Tree (14 badges)", "Weak/Strong Topics (performance tracking)", "Daily Activity History"],
    icon: FaChartLine,
    color: "#B7FF93",
  },
  {
    name: "Account & Settings",
    items: ["Profile & Auth Providers", "Theme Tokens (light/dark toggle)", "Export/Import JSON state", "Guest-to-Authenticated migration"],
    icon: FaCog,
    color: "#FFD37A",
  },
  {
    name: "AI Coach",
    items: ["Persistent Socratic mentor", "Contextual hints per screen", "Global floating access"],
    icon: FaRobot,
    color: "#64E5FF",
  },
]

export function CaseStudyIA() {
  return (
    <section className="py-20 md:py-28 relative border-t border-white/10 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-3 w-3 rounded-full bg-[#FF905F]" />
          <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#FF905F]">
            INFORMATION ARCHITECTURE
          </p>
        </div>

        <h2 className="heading-section text-white max-w-2xl mb-16">
          FIVE CORE MODULES, ONE CLEAR HIERARCHY
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {iaSections.map((section, i) => (
            <motion.div
              key={section.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-[#141418] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-3 rounded-xl border border-white/10"
                      style={{ backgroundColor: `${section.color}15`, color: section.color }}
                    >
                      <section.icon size={18} />
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase group-hover:text-[#FF905F] transition-colors">
                      {section.name}
                    </h3>
                  </div>
                  <span className="font-mono-tag text-xs text-neutral-500">
                    0{i + 1}
                  </span>
                </div>

                <ul className="space-y-2.5 mt-6">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-neutral-300 font-mono-tag">
                      <FaCheckCircle className="shrink-0 mt-0.5" style={{ color: section.color }} size={12} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 font-mono-tag text-[10px] uppercase text-neutral-500">
                IA Module Spec
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
