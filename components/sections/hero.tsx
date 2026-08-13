"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BlurText } from "@/components/ui/blur-text"
import { FaLinkedin, FaFileDownload, FaGithub, FaArrowDown, FaCheckCircle, FaRocket, FaArrowRight } from "react-icons/fa"

const stats = [
  { value: "8.5+", label: "Years Operations & Product", accent: "#e58e39" },
  { value: "98%", label: "Resolution & CSAT Rate", accent: "#81c784" },
  { value: "40%", label: "Faster Ticket Turnaround", accent: "#b39ddb" },
  { value: "150+", label: "Cross-Team Issues / Quarter", accent: "#f4a261" },
]

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-20 overflow-hidden studio-grid-bg">
      {/* Background Radial Kinetic Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#e58e39]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#b39ddb]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 w-full text-center">
        {/* Availability Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <div className="status-pill">
            <span className="h-2 w-2 rounded-full bg-[#81c784] animate-pulse" />
            <span>AVAILABLE FOR PRODUCT MANAGEMENT & OPERATIONS ROLES</span>
          </div>
        </motion.div>

        {/* Role Positioning Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#e58e39] mb-4"
        >
          // PRODUCT SUPPORT ANALYST & PRODUCT STRATEGIST
        </motion.p>

        {/* Giant Kinetic Typography Name with Floating Capsule Portrait */}
        <div className="relative my-4 py-2">
          {/* Main Name Blur Text */}
          <div className="flex flex-col items-center justify-center space-y-1">
            <BlurText
              text="M. MAHABOOB"
              delay={40}
              animateBy="letters"
              direction="top"
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white justify-center leading-none"
            />
            <BlurText
              text="SUHAIL"
              delay={45}
              animateBy="letters"
              direction="bottom"
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-[#e58e39] justify-center leading-none"
            />
          </div>

          {/* Floating Capsule Portrait Avatar positioned over headline on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="group relative p-1.5 rounded-[2.5rem] bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md hover:scale-110 transition-transform duration-500 cursor-pointer">
              <div className="relative w-28 h-40 lg:w-36 lg:h-48 rounded-[2rem] overflow-hidden border border-white/20 bg-neutral-900">
                <Image
                  src="/images/temp-profile.jpg"
                  alt="M Mahaboob Suhail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="180px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 inset-x-2 text-center">
                  <span className="px-2 py-0.5 rounded-full bg-[#81c784] text-[#09090b] font-mono-tag text-[9px] font-bold uppercase">
                    AlohaPM
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Narrative Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-medium mt-6"
        >
          Transforming customer escalations, support signals, and operational bottlenecks into data-driven product strategy. Founder & Creator of <span className="text-[#f4a261] font-bold">Discovery Dojo</span>.
        </motion.p>

        {/* Target Roles Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2.5 pt-4"
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

        {/* Double-Bezel Nested CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-8"
        >
          <a href="#case-studies" className="btn-studio btn-studio-primary group">
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

        {/* Bottom 4-Column Metric Telemetry Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/10"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-1.5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="p-5 rounded-[calc(1rem-0.25rem)] bg-[#121215] h-full flex flex-col justify-between text-left">
                <p className="font-mono-tag text-[10px] uppercase tracking-wider text-neutral-500 mb-1">
                  // PROOF METRIC
                </p>
                <p
                  className="text-3xl md:text-4xl font-black group-hover:scale-105 transition-transform"
                  style={{ color: stat.accent }}
                >
                  {stat.value}
                </p>
                <p className="text-xs font-medium text-neutral-300 mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-12 flex flex-col items-center gap-1 text-neutral-500 text-xs font-mono-tag uppercase animate-bounce">
        <span>Scroll</span>
        <FaArrowDown size={10} className="text-[#e58e39]" />
      </div>
    </section>
  )
}
