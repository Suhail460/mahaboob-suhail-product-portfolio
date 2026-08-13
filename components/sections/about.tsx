"use client"

import { motion } from "framer-motion"

const milestones = [
  { year: "2018", label: "Customer Operations", detail: "First role handling high-volume customer support & technical issues", color: "#FF905F" },
  { year: "2022", label: "Specialist II", detail: "Managed 700+ monthly technical interactions with high CSAT", color: "#AB9BFF" },
  { year: "2024", label: "Team Lead Support", detail: "Led team to 98% resolution rate & 40% efficiency gains", color: "#B7FF93" },
  { year: "2025+", label: "Product Analyst", detail: "Transitioned to growth-focused product strategy & Discovery Dojo", color: "#FFD37A" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative border-t border-white/10 arayana-grid-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Section Header Caption */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-3 w-3 rounded-full bg-[#FF905F]" />
          <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#FF905F]">
            INSIDE <span className="text-white font-serif italic font-normal">(the)</span> PRODUCT STRATEGIST
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-section text-white leading-tight"
            >
              CUSTOMER-FIRST THINKING FORGED THROUGH{" "}
              <span className="text-[#AB9BFF]">OPERATIONAL EXCELLENCE.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-8 space-y-6 text-lg text-neutral-300 leading-relaxed max-w-3xl"
            >
              <p>
                My journey started in customer support leadership, where I spent years on the frontlines resolving complex escalations, operational bottlenecks, and real user friction at scale.
              </p>
              <p>
                Recognizing that recurring support tickets are signals of product opportunity, I transitioned into product strategy. Today, I combine deep customer empathy with data-driven product discovery to build solutions that drive retention and enterprise growth.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-4 bg-[#141418] border border-white/10 p-8 rounded-2xl space-y-4">
            <p className="font-mono-tag text-xs uppercase tracking-widest text-[#B7FF93] font-bold">
              // CORE FOCUS
            </p>
            <h3 className="text-xl font-bold text-white">Product Discovery & Strategy</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Specializing in PRD creation, user interview synthesis, hypothesis testing, wireframing, and operational metric tracking.
            </p>
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
              {["User Retention", "Escalation Analysis", "SQL", "Agile Leadership"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tag text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Milestone Grid */}
        <div className="mt-20">
          <p className="font-mono-tag text-xs uppercase tracking-widest text-neutral-500 mb-6">
            // CAREER EVOLUTION MILESTONES
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="year-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black font-mono-tag" style={{ color: m.color }}>
                      {m.year}
                    </span>
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: m.color }} />
                  </div>
                  <h4 className="text-lg font-bold text-white">{m.label}</h4>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{m.detail}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 font-mono-tag text-[10px] text-neutral-500 uppercase">
                  Phase 0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
