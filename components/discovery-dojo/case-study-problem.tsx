"use client"

import { motion } from "framer-motion"
import { FaChartLine, FaBrain, FaGraduationCap, FaLightbulb } from "react-icons/fa"

const stats = [
  { stat: "95%", label: "of PM training is passive — courses, books, and videos", icon: FaBrain, color: "#FF905F" },
  { stat: "7%", label: "of learners apply what they learn from passive content", icon: FaGraduationCap, color: "#AB9BFF" },
  { stat: "#1", label: "skill gap cited by PM hiring managers is interviewing", icon: FaLightbulb, color: "#B7FF93" },
  { stat: "32%", label: "YoY growth in PM job market demands demonstrable skills", icon: FaChartLine, color: "#FFD37A" },
]

export function CaseStudyProblem() {
  return (
    <section className="py-20 md:py-28 relative border-t border-white/10 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-3 w-3 rounded-full bg-[#FF767A]" />
          <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#FF767A]">
            THE CORE PROBLEM
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-section text-white max-w-4xl"
        >
          PRODUCT DISCOVERY IS THE #1 SKILL GAP IN PM HIRING
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-8 space-y-6 text-lg text-neutral-300 leading-relaxed max-w-3xl"
        >
          <p>
            Product discovery — deciding what to build before figuring out how to build it — is consistently cited as the most critical skill in product management. It is also the most poorly taught.
          </p>
          <p>
            Virtually every PM learning resource is passive. Books, blog posts, and courses teach theory. Learners read about customer interviews, assumption mapping, and experiment design, but they never practice these skills in a safe, structured environment.
          </p>
          <p>
            The result is a market gap: aspiring and junior PMs enter their roles with theoretical knowledge but no muscle memory. Discovery Dojo bridges this gap through scored, deliberate practice.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-[#141418] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="p-3 rounded-xl border border-white/10"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <item.icon size={18} />
                  </div>
                  <span className="font-mono-tag text-xs text-neutral-500 uppercase">
                    DATA POINT 0{i + 1}
                  </span>
                </div>

                <p className="text-3xl md:text-4xl font-black font-mono-tag text-white group-hover:text-[#FF905F] transition-colors">
                  {item.stat}
                </p>

                <p className="mt-3 text-sm text-neutral-300 leading-relaxed font-medium">
                  {item.label}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 font-mono-tag text-[10px] uppercase text-neutral-500">
                Industry Benchmark
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
