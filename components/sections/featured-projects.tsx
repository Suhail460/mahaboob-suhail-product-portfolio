"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { caseStudies } from "@/lib/data"
import { FaArrowRight, FaExternalLinkAlt, FaFilePdf, FaExternalLinkSquareAlt } from "react-icons/fa"

const accentColors = ["#e58e39", "#f4a261", "#81c784", "#b39ddb", "#4dd0e1", "#f4a261"]

export function FeaturedProjectsSection() {
  // Exclude Discovery Dojo since it has its own dedicated flagship hero card directly above
  const filteredStudies = caseStudies.filter((s) => !s.link.includes("discovery-dojo"))

  return (
    <section id="case-studies" className="py-28 md:py-40 relative border-t border-white/10 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-3 w-3 rounded-full bg-[#e58e39]" />
              <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#e58e39]">
                // PRODUCT STRATEGY & TEARDOWNS
              </p>
            </div>
            <h2 className="heading-section text-white max-w-2xl">
              PRODUCT THINKING IN ACTION.
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm md:text-base leading-relaxed font-medium">
            In-depth strategic analyses, process blueprints, and user research teardowns solving real-world growth & retention challenges.
          </p>
        </div>

        {/* 2-Column Side-by-Side Double-Bezel Ariyana Cards Grid */}
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
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-[2rem] bg-white/5 border border-white/10 p-2 shadow-2xl hover:border-white/20 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Inner Bezel Container */}
                <div className="rounded-[calc(2rem-0.5rem)] bg-[#121215] p-6 md:p-8 h-full flex flex-col justify-between border border-white/5">
                  <div>
                    {/* Category Pill & Type */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <span
                        className="px-3.5 py-1 rounded-full text-xs font-mono-tag font-bold uppercase border"
                        style={{ backgroundColor: `${color}15`, color: color, borderColor: `${color}30` }}
                      >
                        {study.category}
                      </span>
                      <span className="font-mono-tag text-xs font-bold uppercase text-neutral-400">
                        [{study.type}]
                      </span>
                    </div>

                    {/* Artwork Image Container */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black/60 shadow-inner group-hover:border-white/20 transition-colors">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-85" />
                    </div>

                    {/* Title & Subtitle/Description */}
                    <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-2 group-hover:text-[#e58e39] transition-colors leading-snug">
                      {study.title}
                    </h3>
                    {study.subtitle && (
                      <p className="text-xs font-mono-tag uppercase tracking-wider text-[#e58e39] mb-3 font-semibold">
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
                        className="btn-studio group/btn w-full sm:w-auto"
                      >
                        <FaExternalLinkSquareAlt size={13} style={{ color }} />
                        <span>Open {study.type.includes("Notion") ? "Notion Case Study" : "External Teardown"}</span>
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:scale-110 transition-transform ml-auto">
                          <FaExternalLinkAlt size={10} className="text-neutral-300" />
                        </div>
                      </a>
                    ) : isPdf ? (
                      <a
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-studio group/btn w-full sm:w-auto"
                      >
                        <FaFilePdf size={13} style={{ color }} />
                        <span>View PDF Teardown</span>
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:scale-110 transition-transform ml-auto">
                          <FaExternalLinkAlt size={10} className="text-neutral-300" />
                        </div>
                      </a>
                    ) : (
                      <Link
                        href={study.link}
                        className="btn-studio group/btn w-full sm:w-auto"
                      >
                        <span>Explore Case Study</span>
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform ml-auto">
                          <FaArrowRight size={10} style={{ color }} />
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
