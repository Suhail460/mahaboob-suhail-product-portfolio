"use client"

import { motion } from "framer-motion"
import { impactStats } from "@/lib/data"
import { FaRocket, FaPercent, FaClock, FaUsers } from "react-icons/fa"

const icons = [FaRocket, FaPercent, FaClock, FaUsers]
const colors = ["#e58e39", "#81c784", "#b39ddb", "#f4a261"]

export function ImpactStatsSection() {
  return (
    <section className="py-24 md:py-32 relative border-t border-white/10 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#e58e39] mb-4"
        >
          // IMPACT SNAPSHOT
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-section text-white max-w-3xl"
        >
          OPERATIONAL DEPTH PAIRED WITH PRODUCT EXECUTION.
        </motion.h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, i) => {
            const Icon = icons[i] || FaRocket
            const color = colors[i % colors.length]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl p-6 overflow-hidden bg-[#121215] border border-white/10 hover:border-white/20 transition-all"
              >
                <Icon className="mb-4" style={{ color }} size={20} />
                <p
                  className="text-4xl font-extrabold font-mono-tag tracking-tight text-white group-hover:scale-105 transition-transform"
                  style={{ color }}
                >
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
