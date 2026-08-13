"use client"

import { motion } from "framer-motion"
import { impactStats } from "@/lib/data"
import { FaRocket, FaPercent, FaClock, FaUsers } from "react-icons/fa"

const icons = [FaRocket, FaPercent, FaClock, FaUsers]

export function ImpactStatsSection() {
  return (
    <section className="py-24 md:py-32 relative border-t border-white/10 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#FF905F] mb-4"
        >
          IMPACT SNAPSHOT
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-section text-white max-w-3xl"
        >
          Operational depth paired with product-focused execution.
        </motion.h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, i) => {
            const Icon = icons[i] || FaRocket
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl p-6 overflow-hidden bg-[#141418] border border-white/10 hover:border-white/25 transition-all"
              >
                <Icon className="mb-4 text-[#FF905F]" size={20} />
                <p className="text-4xl font-extrabold font-mono-tag tracking-tight text-white group-hover:text-[#FF905F] transition-colors">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-300">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
