"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BlurText } from "@/components/ui/blur-text"
import { FaLinkedin, FaFileDownload, FaGithub, FaArrowDown, FaCheckCircle, FaRocket, FaArrowRight } from "react-icons/fa"

const stats = [
  { value: "8.5+", label: "Years Operations & Product", accent: "#e58e39" },
  { value: "98%", label: "Resolution & CSAT Rate", accent: "#81c784" },
  { value: "40%", label: "Faster Ticket Turnaround", accent: "#b39ddb" },
  { value: "150+", label: "Cross-Team Issues / Qtr", accent: "#f4a261" },
]

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-20 overflow-hidden studio-grid-bg">
      {/* Background Radial Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-[#e58e39]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#b39ddb]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 w-full">
        {/* Availability Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="status-pill">
            <span className="h-2 w-2 rounded-full bg-[#81c784] animate-pulse" />
            <span>AVAILABLE FOR PRODUCT MANAGEMENT & OPERATIONS ROLES</span>
          </div>
        </motion.div>

        {/* Hero Main Split Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-8 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#e58e39]"
            >
              PRODUCT SUPPORT ANALYST & PRODUCT STRATEGIST
            </motion.p>

            {/* Headline with Inline Capsule Image Pill (Never overlaps text) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-4xl"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-white leading-[1.05] tracking-tight">
                FROM CUSTOMER ESCALATIONS TO{" "}
                <span className="text-[#e58e39]">PRODUCT STRATEGY.</span>
              </h1>
            </motion.div>

            {/* Value Proposition Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed font-medium"
            >
              8.5+ years bridging customer operations, technical escalations, and growth-focused product strategy. Founder & Creator of <span className="text-[#f4a261] font-bold">Discovery Dojo</span>.
            </motion.p>

            {/* Target Role Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-2.5 pt-2"
            >
              <span className="font-mono-tag text-xs uppercase tracking-wider text-neutral-400">
                OPEN TO ROLES:
              </span>
              {["Associate Product Manager", "Product Manager", "Product Owner", "Product Analyst"].map((role) => (
                <span
                  key={role}
                  className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tag text-neutral-200"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Double-Bezel Nested CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a href="#case-studies" className="btn-studio btn-studio-primary group">
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
                className="btn-studio group"
              >
                <FaFileDownload size={13} className="text-[#e58e39]" />
                <span>Download Resume</span>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaArrowDown size={10} className="text-[#e58e39]" />
                </div>
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://www.linkedin.com/in/mmahaboobsuhail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full bg-white/5 border border-white/10 hover:border-[#b39ddb] hover:text-[#b39ddb] transition-all text-white"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href="https://github.com/Suhail460"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full bg-white/5 border border-white/10 hover:border-[#81c784] hover:text-[#81c784] transition-all text-white"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Double-Bezel Hardware Profile Card (Clean side column, no text overlap) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-full max-w-sm rounded-[2.5rem] bg-white/5 border border-white/10 p-2 shadow-2xl"
            >
              <div className="rounded-[calc(2.5rem-0.5rem)] bg-[#121215] p-4 border border-white/5">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
                  <Image
                    src="/images/temp-profile.jpg"
                    alt="M Mahaboob Suhail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-85" />
                  
                  {/* Embedded Profile Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#09090b]/85 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-mono-tag text-[11px] text-[#e58e39] font-bold uppercase tracking-wider">
                          M. MAHABOOB SUHAIL
                        </p>
                        <p className="text-[11px] text-neutral-300 mt-0.5">
                          Product Support Analyst & Discovery Strategist
                        </p>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-[#81c784]/20 text-[#81c784] font-mono-tag text-[9px] font-bold uppercase">
                        AlohaPM
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Resolution Metrics Dock */}
                <div className="mt-3 p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#81c784]/20 text-[#81c784]">
                      <FaCheckCircle size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono-tag text-neutral-400 uppercase">RESOLUTION</p>
                      <p className="text-lg font-bold text-white">98% Rate</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-mono-tag text-neutral-400 uppercase">EXPERIENCE</p>
                    <p className="text-base font-bold text-[#e58e39]">8.5+ Years</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom 4-Column Metric Telemetry Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/10"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-1.5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="p-5 rounded-[calc(1rem-0.25rem)] bg-[#121215] h-full flex flex-col justify-between text-left">
                <p className="font-mono-tag text-[10px] uppercase tracking-wider text-neutral-500 mb-1">
                  PROFILES & METRICS
                </p>
                <p
                  className="text-3xl md:text-4xl font-black group-hover:scale-105 transition-transform"
                  style={{ color: stat.accent }}
                >
                  {stat.value}
                </p>
                <p className="text-xs font-semibold text-neutral-300 mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-12 flex flex-col items-center gap-1 text-neutral-500 text-xs font-mono-tag uppercase animate-bounce">
        <span>Scroll</span>
        <FaArrowDown size={10} className="text-[#e58e39]" />
      </div>
    </section>
  )
}
