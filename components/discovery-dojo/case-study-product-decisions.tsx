"use client"

import { motion } from "framer-motion"
import { discoveryDojoData } from "@/lib/data"

export function CaseStudyProductDecisions() {
  const decisions = discoveryDojoData.productDecisions

  return (
    <section className="py-20 md:py-28 relative border-t border-white/10 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-3 w-3 rounded-full bg-[#FFD37A]" />
          <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#FFD37A]">
            STRATEGIC TRADE-OFFS & RATIONALE
          </p>
        </div>

        <h2 className="heading-section text-white max-w-2xl mb-16">
          PRODUCT DECISIONS & TRADEOFFS
        </h2>

        <div className="space-y-6 max-w-5xl">
          {decisions.map((d, i) => (
            <motion.div
              key={d.decision}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-8 rounded-2xl bg-[#141418] border border-white/10 hover:border-white/25 transition-all"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-extrabold uppercase text-white group-hover:text-[#FF905F] transition-colors">
                  {d.decision}
                </h3>
                <span className="font-mono-tag text-xs text-neutral-500">
                  DECISION 0{i + 1}
                </span>
              </div>

              <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-medium mb-6">
                {d.rationale}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-mono-tag text-xs text-neutral-400 uppercase font-bold mb-1">
                    // ALTERNATIVES CONSIDERED
                  </p>
                  <p className="text-xs md:text-sm text-neutral-300">
                    {d.alternatives}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-mono-tag text-xs text-[#FF905F] uppercase font-bold mb-1">
                    // TRADEOFF ACCEPTED
                  </p>
                  <p className="text-xs md:text-sm text-neutral-300">
                    {d.tradeoff}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
