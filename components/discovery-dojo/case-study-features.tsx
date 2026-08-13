"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { discoveryDojoData } from "@/lib/data"

const iconMap: Record<string, string> = {
  Lock: "🔐",
  LayoutGrid: "📊",
  BookOpen: "📖",
  Zap: "⚡",
  Award: "🏆",
  Bot: "🤖",
  MessageCircle: "💬",
  ClipboardCheck: "📋",
  Smartphone: "📱",
  Moon: "🌙",
}

export function CaseStudyFeatures() {
  const features = discoveryDojoData.features

  return (
    <section className="py-20 md:py-28 relative border-t border-white/10 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-3 w-3 rounded-full bg-[#AB9BFF]" />
              <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#AB9BFF]">
                PRODUCT FEATURE SHOWCASE
              </p>
            </div>
            <h2 className="heading-section text-white max-w-2xl">
              EVERY FEATURE SOLVES USER FRICTION
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm md:text-base leading-relaxed">
            10 production-grade feature modules engineered to make deliberate product discovery practice engaging, measurable, and fun.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-[#141418] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2.5 rounded-xl bg-white/5 border border-white/10">
                      {iconMap[feature.icon] || "✦"}
                    </span>
                    <h3 className="text-lg font-extrabold uppercase text-white group-hover:text-[#FF905F] transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <span className="font-mono-tag text-xs text-neutral-500">
                    0{i + 1}
                  </span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>

              {feature.screenshot && (
                <div className="mt-6 rounded-xl overflow-hidden border border-white/10 aspect-video relative bg-black/60 shadow-inner">
                  <Image
                    src={feature.screenshot}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
