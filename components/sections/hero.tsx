"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaLinkedin, FaFileDownload, FaGithub, FaArrowDown, FaCheckCircle, FaRocket } from "react-icons/fa"

const stats = [
  { value: "8.5+", label: "Years Experience", accent: "#e58e39" },
  { value: "98%", label: "Escalation Resolution", accent: "#81c784" },
  { value: "40%", label: "Faster Resolution", accent: "#b39ddb" },
  { value: "150+", label: "Cross-Team Issues/Q", accent: "#f4a261" },
]

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden studio-grid-bg">
      {/* Background Radial Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-[#e58e39]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#b39ddb]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 w-full">
        {/* Availability Pill Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="status-pill">
            <span className="h-2 w-2 rounded-full bg-[#81c784] animate-pulse" />
            <span>AVAILABLE FOR PRODUCT ROLES</span>
          </div>
        </motion.div>

        {/* Main Hero Split Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#e58e39]"
            >
              // PRODUCT SUPPORT ANALYST & PRODUCT STRATEGIST
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="heading-hero text-white"
            >
              FROM CUSTOMER ESCALATIONS TO{" "}
              <span className="text-[#e58e39]">PRODUCT STRATEGY.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base md:text-xl text-neutral-300 max-w-2xl leading-relaxed font-medium"
            >
              8.5+ years bridging customer operations, technical escalations, and growth-focused product strategy. Founder & Creator of <span className="text-[#f4a261] font-bold">Discovery Dojo</span>.
            </motion.p>

            {/* Target Role Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-2.5 pt-2"
            >
              <span className="font-mono-tag text-xs uppercase tracking-wider text-neutral-400">
                TARGET ROLES:
              </span>
              {["Associate Product Manager", "Product Manager", "Product Owner", "Product Analyst"].map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tag text-neutral-200"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a href="#case-studies" className="btn-studio btn-studio-primary">
                <FaRocket size={13} />
                <span>Explore Case Studies</span>
              </a>

              <a
                href="/resume/suhail_resume.pdf"
                target="_blank"
                download
                className="btn-studio"
              >
                <FaFileDownload size={13} className="text-[#e58e39]" />
                <span>Download Resume</span>
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

          {/* Right Column: Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-full max-w-md bg-[#121215] border border-white/10 p-4 rounded-3xl shadow-2xl backdrop-blur-xl"
            >
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
                <Image
                  src="/images/temp-profile.jpg"
                  alt="M Mahaboob Suhail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-85" />
                
                {/* Embedded Profile Footer */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#09090b]/85 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono-tag text-xs text-[#e58e39] font-bold uppercase tracking-wider">
                        M. MAHABOOB SUHAIL
                      </p>
                      <p className="text-xs text-neutral-300 mt-0.5">
                        Product Support Analyst & Discovery Strategist
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#81c784]/20 text-[#81c784] font-mono-tag text-[10px] font-bold uppercase">
                      AlohaPM
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Metric Dock inside Profile Card */}
              <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#81c784]/20 text-[#81c784]">
                    <FaCheckCircle size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono-tag text-neutral-400 uppercase">RESOLUTION RATE</p>
                    <p className="text-xl font-bold text-white">98% Achieved</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-mono-tag text-neutral-400 uppercase">EXPERIENCE</p>
                  <p className="text-lg font-bold text-[#e58e39]">8.5+ Years</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom 4-Column Proof Metric Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-8 border-t border-white/10"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-[#121215] border border-white/5 hover:border-white/20 transition-all group"
            >
              <p className="font-mono-tag text-[11px] uppercase tracking-wider text-neutral-500 mb-1">
                // PROOF METRIC
              </p>
              <p
                className="text-3xl md:text-4xl font-extrabold group-hover:scale-105 transition-transform"
                style={{ color: stat.accent }}
              >
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-neutral-300 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-500 text-xs font-mono-tag uppercase animate-bounce">
        <span>Scroll</span>
        <FaArrowDown size={10} className="text-[#e58e39]" />
      </div>
    </section>
  )
}
