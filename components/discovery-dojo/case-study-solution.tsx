"use client"

import { motion } from "framer-motion"
import { FaRocket, FaSyncAlt, FaLayerGroup, FaBolt, FaChartBar } from "react-icons/fa"

const principles = [
  { title: "Practice over theory", desc: "Every level includes a hands-on component — interview, quiz, exercise, or reflection. You don't just read about discovery; you do it.", icon: FaRocket, color: "#FF905F" },
  { title: "Immediate feedback", desc: "The interview simulator scores question quality in real-time across three dimensions. Quizzes provide instant results with explanations.", icon: FaSyncAlt, color: "#AB9BFF" },
  { title: "Structured progression", desc: "15 levels scaffold from fundamentals to advanced, with clear unlock criteria. You can't skip ahead — mastery is earned.", icon: FaLayerGroup, color: "#B7FF93" },
  { title: "Zero friction access", desc: "Guest mode provides immediate value without signup. The full app works out of the box with seamless Firestore sync.", icon: FaBolt, color: "#FFD37A" },
  { title: "Measurable growth", desc: "XP, badges, streaks, mastery percentage, and weak/strong topic tracking quantify progress. You see yourself getting better.", icon: FaChartBar, color: "#64E5FF" },
]

export function CaseStudySolution() {
  return (
    <section className="py-20 md:py-28 relative border-t border-white/10 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-3 w-3 rounded-full bg-[#B7FF93]" />
          <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#B7FF93]">
            THE SOLUTION ARCHITECTURE
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-section text-white max-w-4xl"
        >
          DELIBERATE PRACTICE FOR PRODUCT DISCOVERY
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg text-neutral-300 max-w-3xl leading-relaxed font-medium"
        >
          Discovery Dojo transforms passive learning into active, scored, and rewarded practice. It is not another static course — it is an interactive practice simulator.
        </motion.p>

        <div className="mt-16 space-y-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 md:p-8 rounded-2xl bg-[#141418] border border-white/10 hover:border-white/25 transition-all flex items-start gap-6 group"
            >
              <div
                className="p-3.5 rounded-xl border border-white/10 shrink-0 font-mono-tag text-sm font-bold"
                style={{ backgroundColor: `${p.color}15`, color: p.color }}
              >
                0{i + 1}
              </div>

              <div>
                <h3 className="text-xl font-extrabold uppercase text-white group-hover:text-[#FF905F] transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-neutral-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
