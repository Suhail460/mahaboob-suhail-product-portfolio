"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { discoveryDojoData } from "@/lib/data"
import { FaRocket, FaGithub } from "react-icons/fa"

export function CaseStudyHero() {
  const dd = discoveryDojoData

  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-[#0c0c0e] arayana-grid-bg">
      {/* Glow Spheres */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#AB9BFF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        {/* Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="px-3.5 py-1 rounded-full bg-[#AB9BFF]/20 text-[#AB9BFF] font-mono-tag text-xs font-bold uppercase border border-[#AB9BFF]/30">
            PRODUCT CASE STUDY // FLAGSHIP SAAS
          </span>
        </motion.div>

        {/* Hero Title & Subtitle */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase text-white tracking-tight leading-[1.05]"
        >
          {dd.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-neutral-300 max-w-3xl leading-relaxed font-medium"
        >
          {dd.tagline}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 mt-8"
        >
          <a
            href={dd.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-ariyana button-ariyana-primary"
          >
            <div className="flex items-center gap-2">
              <FaRocket size={14} />
              <div className="text-roll">
                <span>Visit Live Demo</span>
                <span>Visit Live Demo</span>
              </div>
            </div>
          </a>

          <a
            href={dd.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-ariyana"
          >
            <div className="flex items-center gap-2">
              <FaGithub size={16} className="text-[#AB9BFF]" />
              <div className="text-roll">
                <span>View Source Code</span>
                <span>View Source Code</span>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Hero Display Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 rounded-3xl overflow-hidden border border-white/10 bg-[#141418] p-3 shadow-2xl relative"
        >
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black/80">
            <Image
              src="/images/discovery-dojo/dashboard.png"
              alt="Discovery Dojo Dashboard"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Key Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {dd.metrics.slice(0, 4).map((metric, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#141418] border border-white/10 flex flex-col justify-between"
            >
              <p className="font-mono-tag text-xs text-neutral-500 uppercase">// KEY IMPACT</p>
              <p className="text-2xl sm:text-3xl font-black text-[#AB9BFF] font-mono-tag mt-1">
                {metric.value}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-neutral-300 mt-1">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
