"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { discoveryDojoData } from "@/lib/data"
import { FaArrowRight, FaRocket, FaStar, FaBolt, FaCheckCircle } from "react-icons/fa"

export function DiscoveryDojoHeroCard() {
  return (
    <section className="py-12 relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-[#121215] text-white p-8 md:p-12 shadow-2xl border border-white/10 hover:border-white/20 transition-all"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e58e39]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-[#e58e39]/15 text-[#e58e39] text-xs font-mono-tag font-bold uppercase tracking-wider border border-[#e58e39]/30">
                  FLAGSHIP PRODUCT CASE STUDY
                </span>
                <span className="px-3.5 py-1 rounded-full bg-white/5 text-neutral-300 text-xs font-mono-tag font-bold uppercase border border-white/10">
                  REACT 18 + FIREBASE
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-none text-white">
                {discoveryDojoData.title} — <span className="text-[#e58e39]">PRODUCT DISCOVERY PLATFORM</span>
              </h2>

              <p className="text-base md:text-lg text-neutral-300 leading-relaxed font-medium">
                {discoveryDojoData.description}
              </p>

              {/* Key Telemetry Stats */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-mono-tag text-[11px] font-bold text-neutral-400 uppercase">CURRICULUM</p>
                  <p className="text-2xl font-black text-white">15 Levels</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-mono-tag text-[11px] font-bold text-neutral-400 uppercase">BUNDLE REDUCTION</p>
                  <p className="text-2xl font-black text-[#81c784]">64%</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-mono-tag text-[11px] font-bold text-neutral-400 uppercase">BADGES</p>
                  <p className="text-2xl font-black text-[#b39ddb]">14 Earned</p>
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/case-studies/discovery-dojo"
                  className="btn-studio btn-studio-primary"
                >
                  <span>Read Full Case Study</span>
                  <FaArrowRight size={12} />
                </Link>

                <a
                  href={discoveryDojoData.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-studio"
                >
                  <FaRocket size={12} className="text-[#e58e39]" />
                  <span>Try Live Platform</span>
                </a>
              </div>
            </div>

            {/* Right Preview Artwork Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-neutral-900 group">
                <Image
                  src="/images/discovery-dojo/dashboard.png"
                  alt="Discovery Dojo Dashboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono-tag text-xs">
                  <span className="flex items-center gap-2 bg-black/70 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                    <FaStar className="text-[#f4a261]" /> Gamified Learning UI
                  </span>
                  <span className="flex items-center gap-1.5 text-[#81c784] bg-black/70 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                    <FaBolt /> Live SaaS App
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
