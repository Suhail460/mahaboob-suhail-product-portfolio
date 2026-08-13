"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { FooterSection } from "@/components/sections/footer"
import { caseStudies } from "@/lib/data"
import { FaArrowRight, FaExternalLinkAlt, FaFilePdf, FaExternalLinkSquareAlt, FaRocket } from "react-icons/fa"

const accentColors = ["#AB9BFF", "#FF905F", "#B7FF93", "#FF767A", "#64E5FF", "#FFD37A"]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0e] text-white overflow-x-hidden arayana-grid-bg">
      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-4 mb-16"
          >
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[#FF905F]" />
              <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#FF905F]">
                PRODUCT CASE STUDIES & STRATEGY
              </p>
            </div>
            <h1 className="heading-hero text-white">
              PRODUCT THINKING <span className="text-[#FF905F]">PORTFOLIO.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-medium">
              A comprehensive collection of full-stack product platforms, growth teardowns, operational frameworks, and UX strategy blueprints.
            </p>
          </motion.div>

          {/* 2-Column Side-by-Side Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => {
              const color = accentColors[index % accentColors.length]
              const isExternal = study.link.startsWith("http")
              const isPdf = study.link.endsWith(".pdf")

              return (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative rounded-3xl overflow-hidden p-8 bg-[#141418] border border-white/10 hover:border-white/30 transition-all shadow-2xl flex flex-col justify-between"
                >
                  <div>
                    {/* Category Pill & Type */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <span
                        className="px-3.5 py-1 rounded-full text-xs font-mono-tag font-bold uppercase"
                        style={{ backgroundColor: `${color}20`, color: color }}
                      >
                        {study.category}
                      </span>
                      <span className="font-mono-tag text-xs font-bold uppercase text-neutral-400">
                        [{study.type}]
                      </span>
                    </div>

                    {/* Artwork Image */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black/60 shadow-inner">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Title & Subtitle/Description */}
                    <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-2 group-hover:text-[#FF905F] transition-colors leading-snug">
                      {study.title}
                    </h2>
                    {study.subtitle && (
                      <p className="text-xs font-mono-tag uppercase tracking-wider text-[#FF905F] mb-3 font-semibold">
                        // {study.subtitle}
                      </p>
                    )}
                    <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-medium mb-8">
                      {study.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-6 border-t border-white/5">
                    {isExternal ? (
                      <a
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/15 text-white font-bold uppercase text-xs font-mono-tag tracking-wider transition-all border border-white/10 group-hover:border-white/30"
                      >
                        <FaExternalLinkSquareAlt size={14} style={{ color }} />
                        <span>Open {study.type.includes("Notion") ? "Notion Case Study" : "External Teardown"}</span>
                        <FaExternalLinkAlt size={11} className="text-neutral-400" />
                      </a>
                    ) : isPdf ? (
                      <a
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/15 text-white font-bold uppercase text-xs font-mono-tag tracking-wider transition-all border border-white/10 group-hover:border-white/30"
                      >
                        <FaFilePdf size={14} style={{ color }} />
                        <span>View PDF Teardown</span>
                        <FaExternalLinkAlt size={11} className="text-neutral-400" />
                      </a>
                    ) : (
                      <Link
                        href={study.link}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/15 text-white font-bold uppercase text-xs font-mono-tag tracking-wider transition-all border border-white/10 group-hover:border-white/30"
                      >
                        {study.link.includes("discovery-dojo") ? (
                          <FaRocket size={14} style={{ color }} />
                        ) : (
                          <FaArrowRight size={11} className="group-hover:translate-x-1 transition-transform" style={{ color }} />
                        )}
                        <span>Read Full Case Study</span>
                      </Link>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  )
}
