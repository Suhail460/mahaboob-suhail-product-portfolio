"use client"

import { motion } from "framer-motion"
import { discoveryDojoData } from "@/lib/data"
import { FaBullseye, FaUsers, FaStar } from "react-icons/fa"

export function CaseStudyExecutiveSummary() {
  const summary = discoveryDojoData.executiveSummary

  const cards = [
    {
      icon: FaBullseye,
      label: "Business Goal",
      text: "Close the gap between theoretical PM education and practical discovery skills by building a platform where learners practice, not just read.",
      color: "#FF905F",
    },
    {
      icon: FaUsers,
      label: "Target Audience",
      text: summary.audience,
      color: "#AB9BFF",
    },
    {
      icon: FaStar,
      label: "Value Proposition",
      text: summary.valueProposition,
      color: "#B7FF93",
    },
  ]

  return (
    <section className="py-20 md:py-28 relative border-t border-white/10 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-3 w-3 rounded-full bg-[#FF905F]" />
          <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#FF905F]">
            EXECUTIVE SUMMARY
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-section text-white max-w-4xl"
        >
          {summary.goal}
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-[#141418] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="p-3.5 rounded-xl border border-white/10"
                    style={{ backgroundColor: `${card.color}15`, color: card.color }}
                  >
                    <card.icon size={20} />
                  </div>
                  <span className="font-mono-tag text-xs text-neutral-500 uppercase">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold uppercase text-white mb-3 group-hover:text-[#FF905F] transition-colors">
                  {card.label}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {card.text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 font-mono-tag text-[10px] uppercase text-neutral-500">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: card.color }} />
                <span>Verified Spec</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
