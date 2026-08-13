"use client"

import { motion } from "framer-motion"
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

export function SkillsSection() {
  return (
    <section id="skills" className="py-28 md:py-36 relative border-t border-white/10 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-3 w-3 rounded-full bg-[#81c784]" />
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

        {/* Double-Bezel Categorized Competency Grid */}
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
