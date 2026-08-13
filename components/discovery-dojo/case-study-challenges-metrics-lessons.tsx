"use client"

import { motion } from "framer-motion"
import { discoveryDojoData } from "@/lib/data"
import { FaCheckCircle, FaRocket, FaEnvelope } from "react-icons/fa"

export function CaseStudyChallenges() {
  const challenges = discoveryDojoData.challenges

  return (
    <section className="py-20 md:py-28 relative border-t border-white/10 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-3 w-3 rounded-full bg-[#FF767A]" />
          <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#FF767A]">
            TECHNICAL & PRODUCT CHALLENGES
          </p>
        </div>

        <h2 className="heading-section text-white max-w-2xl mb-16">
          HARD PROBLEMS, PRAGMATIC SOLUTIONS
        </h2>

        <div className="space-y-6 max-w-5xl">
          {challenges.map((c, i) => (
            <motion.div
              key={c.problem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-8 rounded-2xl bg-[#141418] border border-white/10 hover:border-white/25 transition-all"
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#AB9BFF]/20 text-[#AB9BFF] font-mono-tag text-xs font-bold uppercase">
                  {c.category}
                </span>
                <span className="font-mono-tag text-xs text-neutral-500">
                  CHALLENGE 0{i + 1}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-2">
                <div>
                  <h4 className="font-mono-tag text-xs font-bold uppercase tracking-wider text-[#FF767A] mb-2">
                    // THE FRICTION / ISSUE
                  </h4>
                  <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-medium">
                    {c.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono-tag text-xs font-bold uppercase tracking-wider text-[#B7FF93] mb-2">
                    // PRAGMATIC PM SOLUTION
                  </h4>
                  <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-medium">
                    {c.solution}
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

export function CaseStudyMetrics() {
  const metrics = discoveryDojoData.metrics

  return (
    <section className="py-20 md:py-28 relative border-t border-white/10 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-3 w-3 rounded-full bg-[#B7FF93]" />
          <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#B7FF93]">
            IMPACT & METRICS
          </p>
        </div>

        <h2 className="heading-section text-white max-w-2xl mb-16">
          MEASURED BY IMPACT, NOT VANITY
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-[#141418] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group"
            >
              <div>
                <p className="font-mono-tag text-xs text-neutral-500 uppercase mb-2">
                  // METRIC 0{i + 1}
                </p>
                <p className="text-3xl md:text-4xl font-black text-[#FF905F] font-mono-tag group-hover:scale-105 transition-transform">
                  {m.value}
                </p>
                <h3 className="text-lg font-extrabold uppercase text-white mt-2">
                  {m.label}
                </h3>
                <p className="mt-3 text-xs md:text-sm text-neutral-300 leading-relaxed">
                  {m.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 font-mono-tag text-[10px] uppercase text-neutral-500">
                Verified Outcome
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CaseStudyLessons() {
  const lessons = discoveryDojoData.lessons

  return (
    <section className="py-20 md:py-28 relative border-t border-white/10 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-3 w-3 rounded-full bg-[#FFD37A]" />
          <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#FFD37A]">
            RETROSPECTIVE & LESSONS
          </p>
        </div>

        <h2 className="heading-section text-white max-w-2xl mb-16">
          WHAT BUILDING DOJO TAUGHT ME ABOUT PRODUCT
        </h2>

        <div className="space-y-4 max-w-4xl">
          {lessons.map((l, i) => (
            <motion.div
              key={l.lesson}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 md:p-8 rounded-2xl bg-[#141418] border border-white/10 hover:border-white/25 transition-all flex items-start gap-6 group"
            >
              <div className="p-3 rounded-xl bg-[#FFD37A]/15 text-[#FFD37A] font-mono-tag text-sm font-bold shrink-0">
                0{i + 1}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-extrabold uppercase text-white group-hover:text-[#FF905F] transition-colors">
                  {l.lesson}
                </h3>
                <p className="mt-2 text-sm md:text-base text-neutral-300 leading-relaxed font-medium">
                  {l.insight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CaseStudyRoadmap() {
  const roadmap = discoveryDojoData.roadmap

  return (
    <section className="py-20 md:py-28 relative border-t border-white/10 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-3 w-3 rounded-full bg-[#64E5FF]" />
          <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#64E5FF]">
            PRODUCT ROADMAP
          </p>
        </div>

        <h2 className="heading-section text-white max-w-2xl mb-16">
          WHAT COMES NEXT FOR DISCOVERY DOJO
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {roadmap.map((phase, i) => (
            <motion.div
              key={phase.timeframe}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-[#141418] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <span className="px-3 py-1 rounded-full bg-[#64E5FF]/15 text-[#64E5FF] font-mono-tag text-xs font-bold uppercase mb-4 inline-block">
                  {phase.timeframe}
                </span>

                <ul className="mt-4 space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-300 font-mono-tag">
                      <FaCheckCircle className="text-[#64E5FF] shrink-0 mt-0.5" size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 font-mono-tag text-[10px] uppercase text-neutral-500">
                Phase 0{i + 1} Execution Plan
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CaseStudyCTA() {
  const dd = discoveryDojoData

  return (
    <section className="py-24 md:py-32 relative border-t border-white/10 bg-[#0c0c0e] text-center">
      <div className="max-w-4xl mx-auto px-4 md:px-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase text-white mb-6">
          WANT TO SEE IT <span className="text-[#FF905F]">IN ACTION?</span>
        </h2>

        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
          Try Discovery Dojo live, explore the codebase, or reach out to discuss the product architecture in depth.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={dd.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-ariyana button-ariyana-primary"
          >
            <div className="flex items-center gap-2">
              <FaRocket size={14} />
              <div className="text-roll">
                <span>Visit Live Demo</span>
                <span>Visit Live Demo</span>
              </div>
            </div>
          </a>

          <a
            href="mailto:msuhail460@gmail.com"
            className="button-ariyana"
          >
            <div className="flex items-center gap-2">
              <FaEnvelope size={14} className="text-[#FF905F]" />
              <div className="text-roll">
                <span>Contact Suhail</span>
                <span>Contact Suhail</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
