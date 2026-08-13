"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { discoveryDojoData } from "@/lib/data"
import { FaArrowRight, FaRocket, FaStar, FaBolt, FaLayerGroup, FaQuestionCircle, FaMoon } from "react-icons/fa"

const previewTabs = [
  { id: "dashboard", label: "Dashboard", image: "/images/discovery-dojo/dashboard.png", icon: FaLayerGroup },
  { id: "darkmode", label: "Dark UI", image: "/images/discovery-dojo/darkmode.png", icon: FaMoon },
  { id: "quiz", label: "Quiz Engine", image: "/images/discovery-dojo/quiz.png", icon: FaQuestionCircle },
]

export function DiscoveryDojoHeroCard() {
  const [activeTab, setActiveTab] = useState(previewTabs[0])

  return (
    <section className="py-16 relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Double-Bezel Shell Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] bg-white/5 border border-white/10 p-2 shadow-2xl"
        >
          <div className="rounded-[calc(2.5rem-0.5rem)] bg-[#121215] text-white p-8 md:p-12 border border-white/5 relative overflow-hidden">
            {/* Ambient Radial Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e58e39]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Left Content Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-[#e58e39]/15 text-[#e58e39] text-xs font-mono-tag font-bold uppercase tracking-wider border border-[#e58e39]/30">
                    FLAGSHIP PRODUCT CASE STUDY
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white/5 text-neutral-300 text-xs font-mono-tag font-bold uppercase border border-white/10">
                    REACT 18 + FIREBASE
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-none text-white">
                  {discoveryDojoData.title} — <span className="text-[#e58e39]">DISCOVERY PLATFORM</span>
                </h2>

                <p className="text-base md:text-lg text-neutral-300 leading-relaxed font-medium">
                  {discoveryDojoData.description}
                </p>

                {/* Key Telemetry Stats */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="font-mono-tag text-[10px] font-bold text-neutral-400 uppercase">CURRICULUM</p>
                    <p className="text-xl md:text-2xl font-black text-white">15 Levels</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="font-mono-tag text-[10px] font-bold text-neutral-400 uppercase">BUNDLE REDUCTION</p>
                    <p className="text-xl md:text-2xl font-black text-[#81c784]">64%</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="font-mono-tag text-[10px] font-bold text-neutral-400 uppercase">BADGES</p>
                    <p className="text-xl md:text-2xl font-black text-[#b39ddb]">14 Earned</p>
                  </div>
                </div>

                {/* Dual Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="/case-studies/discovery-dojo"
                    className="btn-studio btn-studio-primary group"
                  >
                    <span>Read Full Case Study</span>
                    <div className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <FaArrowRight size={10} />
                    </div>
                  </Link>

                  <a
                    href={discoveryDojoData.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-studio group"
                  >
                    <FaRocket size={12} className="text-[#e58e39]" />
                    <span>Try Live Platform</span>
                  </a>
                </div>
              </div>

              {/* Right Interactive Artwork Column with Tab Switcher */}
              <div className="lg:col-span-6 space-y-4">
                {/* Tab Switcher Controls */}
                <div className="flex items-center gap-2 p-1.5 rounded-xl bg-black/40 border border-white/10 w-fit font-mono-tag text-xs">
                  {previewTabs.map((tab) => {
                    const Icon = tab.icon
                    const isActive = activeTab.id === tab.id
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#e58e39] text-[#09090b] font-bold shadow-md"
                            : "text-neutral-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <Icon size={12} />
                        <span>{tab.label}</span>
                      </button>
                    )
                  })}
                </div>

                {/* Interactive Artwork Display */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-neutral-900 group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={activeTab.image}
                        alt={`Discovery Dojo ${activeTab.label}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    </motion.div>
                  </AnimatePresence>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono-tag text-xs z-10">
                    <span className="flex items-center gap-2 bg-black/70 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                      <FaStar className="text-[#f4a261]" /> {activeTab.label} Preview
                    </span>
                    <span className="flex items-center gap-1.5 text-[#81c784] bg-black/70 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                      <FaBolt /> Live App
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
