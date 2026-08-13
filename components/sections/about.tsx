"use client"

import { motion } from "framer-motion"
import { FaFileDownload, FaLinkedin, FaGithub, FaRocket, FaArrowRight } from "react-icons/fa"

const targetRoles = ["Associate Product Manager", "Product Manager", "Product Owner"]

const milestones = [
  { year: "2018", label: "Customer Operations", detail: "First role handling high-volume customer support & technical issues", color: "#e58e39" },
  { year: "2022", label: "Support Specialist II", detail: "Managed 700+ monthly technical interactions with high CSAT", color: "#b39ddb" },
  { year: "2024", label: "Team Lead", detail: "Led team to 98% resolution rate & 40% efficiency gains", color: "#81c784" },
  { year: "2025+", label: "Product Strategist", detail: "Transitioned to growth-focused product strategy & Discovery Dojo", color: "#f4a261" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative border-t border-white/10 studio-grid-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-12 space-y-16">
        {/* Header Hero Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] bg-white/5 border border-white/10 p-2 shadow-2xl"
        >
          <div className="rounded-[calc(2.5rem-0.5rem)] bg-[#121215] p-6 sm:p-10 border border-white/5 space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#e58e39]/15 border border-[#e58e39]/30 text-[#e58e39] text-xs font-mono-tag font-bold uppercase">
                  <span className="h-2 w-2 rounded-full bg-[#e58e39] animate-pulse" />
                  <span>PRODUCT STRATEGY & OPERATIONS LEADER</span>
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-white leading-tight tracking-tight">
                  FROM CUSTOMER ESCALATIONS TO <span className="text-[#e58e39]">PRODUCT STRATEGY.</span>
                </h2>

                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-medium">
                  8.5+ years bridging customer operations, technical escalations, data analytics, and growth-focused product strategy.
                </p>

                {/* Target Role Pills (Removed Product Analyst) */}
                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  <span className="font-mono-tag text-xs uppercase tracking-wider text-neutral-400 font-bold">
                    TARGET ROLES:
                  </span>
                  {targetRoles.map((role) => (
                    <span
                      key={role}
                      className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tag text-neutral-200 font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <a href="#case-studies" className="btn-studio btn-studio-primary group justify-center">
                  <FaRocket size={13} />
                  <span>Explore Case Studies</span>
                  <div className="w-7 h-7 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <FaArrowRight size={11} />
                  </div>
                </a>

                <a
                  href="/resume/suhail_resume.pdf"
                  target="_blank"
                  download
                  className="btn-studio group justify-center"
                >
                  <FaFileDownload size={13} className="text-[#e58e39]" />
                  <span>Download Resume</span>
                </a>

                <div className="flex items-center justify-center gap-2 pt-1">
                  <a
                    href="https://www.linkedin.com/in/mmahaboobsuhail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#b39ddb] hover:text-[#b39ddb] transition-all text-white"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={16} />
                  </a>

                  <a
                    href="https://github.com/Suhail460"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#81c784] hover:text-[#81c784] transition-all text-white"
                    aria-label="GitHub"
                  >
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Narrative & Focus Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Story Column */}
          <div className="lg:col-span-8 space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-section text-white leading-tight"
            >
              CUSTOMER-FIRST THINKING FORGED THROUGH{" "}
              <span className="text-[#b39ddb]">OPERATIONAL EXCELLENCE.</span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-base md:text-lg text-neutral-300 leading-relaxed max-w-3xl font-medium"
            >
              <p>
                My journey started in customer support leadership, where I spent years on the frontlines resolving complex escalations, operational bottlenecks, and real user friction at scale.
              </p>
              <p>
                Recognizing that recurring support tickets are signals of product opportunity, I transitioned into product strategy. Today, I combine deep customer empathy with data-driven product discovery to build solutions that drive retention and enterprise growth.
              </p>
            </motion.div>
          </div>

          {/* Right Double-Bezel Focus Card */}
          <div className="lg:col-span-4 rounded-[2rem] bg-white/5 border border-white/10 p-2 shadow-2xl">
            <div className="rounded-[calc(2rem-0.5rem)] bg-[#121215] p-6 space-y-4 border border-white/5">
              <p className="font-mono-tag text-xs uppercase tracking-wider text-[#81c784] font-bold">
                CORE FOCUS
              </p>
              <h4 className="text-xl font-extrabold uppercase text-white">Product Discovery & Strategy</h4>
              <p className="text-sm text-neutral-400 leading-relaxed font-medium">
                Specializing in PRD creation, user interview synthesis, hypothesis testing, wireframing, and operational metric tracking.
              </p>
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {["User Retention", "Escalation Analysis", "SQL & Data", "Agile Leadership"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tag text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Grid */}
        <div>
          <p className="font-mono-tag text-xs uppercase tracking-wider text-neutral-500 mb-6 font-bold">
            CAREER EVOLUTION MILESTONES
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-2xl bg-white/5 border border-white/10 p-1.5 hover:border-white/20 transition-all group"
              >
                <div className="rounded-[calc(1rem-0.25rem)] bg-[#121215] p-6 h-full flex flex-col justify-between border border-white/5">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black font-mono-tag" style={{ color: m.color }}>
                        {m.year}
                      </span>
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: m.color }} />
                    </div>
                    <h5 className="text-lg font-extrabold uppercase text-white group-hover:text-[#e58e39] transition-colors">{m.label}</h5>
                    <p className="mt-2 text-xs md:text-sm text-neutral-400 leading-relaxed font-medium">{m.detail}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 font-mono-tag text-[10px] text-neutral-500 uppercase">
                    Proven Track
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
