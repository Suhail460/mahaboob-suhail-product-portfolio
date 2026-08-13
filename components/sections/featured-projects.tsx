"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { caseStudies } from "@/lib/data"
import { FaArrowRight, FaExternalLinkAlt, FaFilePdf, FaExternalLinkSquareAlt } from "react-icons/fa"

const accentColors = ["#FF905F", "#FF767A", "#B7FF93", "#64E5FF", "#AB9BFF", "#FFD37A"]

export function FeaturedProjectsSection() {
  // Exclude Discovery Dojo since it has its own dedicated flagship hero card directly above
  const filteredStudies = caseStudies.filter((s) => !s.link.includes("discovery-dojo"))

  return (
    <section id="case-studies" className="py-24 md:py-32 relative border-t border-white/10 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-3 w-3 rounded-full bg-[#FF905F]" />
              <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#FF905F]">
                PRODUCT STRATEGY & TEARDOWNS
              </p>
            </div>
            <h2 className="heading-section text-white max-w-2xl">
              PRODUCT THINKING IN ACTION
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm md:text-base leading-relaxed">
            In-depth strategic analyses, process blueprints, and user research teardowns solving real-world growth & retention challenges.
          </p>
        </div>

        {/* 2-Column Side-by-Side Ariyana Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredStudies.map((study, idx) => {
            const color = accentColors[idx % accentColors.length]
            const isExternal = study.link.startsWith("http")
            const isPdf = study.link.endsWith(".pdf")

            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
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
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-2 group-hover:text-[#FF905F] transition-colors leading-snug">
                    {study.title}
                  </h3>
                  {study.subtitle && (
                    <p className="text-xs font-mono-tag uppercase tracking-wider text-[#FF905F] mb-3 font-semibold">
                      // {study.subtitle}
                    </p>
                  )}
                  <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-medium mb-8">
                    {study.description}
                  </p>
                </div>

                {/* Action CTA Link */}
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
                      <span>Explore Case Study</span>
                      <FaArrowRight size={11} className="group-hover:translate-x-1 transition-transform" style={{ color }} />
                    </Link>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
