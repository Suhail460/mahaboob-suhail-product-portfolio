"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { discoveryDojoData } from "@/lib/data"
import { FaArrowRight, FaRocket, FaStar, FaBolt } from "react-icons/fa"

export function DiscoveryDojoHeroCard() {
  return (
    <section className="py-12 relative bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-[#AB9BFF] text-[#0c0c0e] p-8 md:p-14 shadow-2xl border border-white/20"
        >
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-[#0c0c0e] text-[#AB9BFF] text-xs font-mono-tag font-bold uppercase tracking-wider">
                  FLAGSHIP PRODUCT CASE STUDY
                </span>
                <span className="px-3.5 py-1 rounded-full bg-white/30 text-[#0c0c0e] text-xs font-mono-tag font-bold uppercase">
                  REACT 18 + FIREBASE
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none text-[#0c0c0e]">
                {discoveryDojoData.title} — PRODUCT DISCOVERY PLATFORM
              </h2>

              <p className="text-base md:text-lg text-[#0c0c0e]/85 leading-relaxed font-medium">
                {discoveryDojoData.description}
              </p>

              {/* Key Telemetry Stats */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white/20 border border-black/10">
                  <p className="font-mono-tag text-xs font-bold text-[#0c0c0e]/70 uppercase">CURRICULUM</p>
                  <p className="text-2xl font-black text-[#0c0c0e]">15 Levels</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/20 border border-black/10">
                  <p className="font-mono-tag text-xs font-bold text-[#0c0c0e]/70 uppercase">BUNDLE REDUCTION</p>
                  <p className="text-2xl font-black text-[#0c0c0e]">64%</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/20 border border-black/10">
                  <p className="font-mono-tag text-xs font-bold text-[#0c0c0e]/70 uppercase">BADGES</p>
                  <p className="text-2xl font-black text-[#0c0c0e]">14 Earned</p>
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/case-studies/discovery-dojo"
                  className="px-8 py-4 rounded-full bg-[#0c0c0e] text-white hover:bg-black font-bold uppercase text-xs font-mono-tag tracking-wider transition-all flex items-center gap-2 group shadow-xl"
                >
                  <span>Read Full Case Study</span>
                  <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform text-[#AB9BFF]" />
                </Link>

                <a
                  href={discoveryDojoData.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-full border border-black/30 hover:bg-black/10 text-[#0c0c0e] font-bold uppercase text-xs font-mono-tag tracking-wider transition-all flex items-center gap-2"
                >
                  <FaRocket size={12} />
                  <span>Try Live Platform</span>
                </a>
              </div>
            </div>

            {/* Right Preview Artwork Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0c0c0e]/20 bg-neutral-900 group">
                <Image
                  src="/images/discovery-dojo/dashboard.png"
                  alt="Discovery Dojo Dashboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono-tag text-xs">
                  <span className="flex items-center gap-2 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                    <FaStar className="text-[#FFD37A]" /> Gamified Learning UI
                  </span>
                  <span className="flex items-center gap-1 text-[#B7FF93]">
                    <FaBolt /> Live App
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
