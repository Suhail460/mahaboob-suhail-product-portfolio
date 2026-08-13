"use client"

import { motion } from "framer-motion"
import { FaSearch, FaRocket, FaBolt, FaUserCheck, FaFire, FaTrophy, FaShareAlt } from "react-icons/fa"

const journeySteps = [
  { stage: "Discovery", action: "Find via search or referral", detail: "User arrives at dashboard in guest mode, Level 1 unlocked, zero friction", icon: FaSearch, color: "#FF905F" },
  { stage: "Activation", action: "Complete first screen", detail: "Interactive lesson with quiz or reflection — immediate value demonstrated", icon: FaRocket, color: "#AB9BFF" },
  { stage: "Engagement", action: "Complete 5+ screens", detail: "XP earned, streak started, tools discovered (Interview Simulator, Generator)", icon: FaBolt, color: "#B7FF93" },
  { stage: "Conversion", action: "Sign up to save progress", detail: "Prompted at strategic moments. mergeGuestProgress() makes it seamless", icon: FaUserCheck, color: "#FF767A" },
  { stage: "Habit", action: "Return daily, build streak", detail: "Full curriculum, badges, skill tree, daily streak motivation", icon: FaFire, color: "#FFD37A" },
  { stage: "Mastery", action: "Complete capstone project", detail: "9-stage project generates feedback report. Practitioner badge awarded", icon: FaTrophy, color: "#64E5FF" },
  { stage: "Advocacy", action: "Share portfolio artifact", detail: "Portfolio artifact & capstone report shareable, recommend to PM teams", icon: FaShareAlt, color: "#FF905F" },
]

export function CaseStudyUserJourney() {
  return (
    <section className="py-20 md:py-28 relative border-t border-white/10 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-3 w-3 rounded-full bg-[#64E5FF]" />
          <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#64E5FF]">
            USER JOURNEY & RETENTION FUNNEL
          </p>
        </div>

        <h2 className="heading-section text-white max-w-2xl mb-16">
          FROM FIRST VISIT TO PORTFOLIO ARTIFACT
        </h2>

        <div className="space-y-4 max-w-5xl">
          {journeySteps.map((step, i) => (
            <motion.div
              key={step.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-[#141418] border border-white/10 hover:border-white/25 transition-all flex items-start gap-6 group"
            >
              <div
                className="p-3.5 rounded-xl border border-white/10 shrink-0"
                style={{ backgroundColor: `${step.color}15`, color: step.color }}
              >
                <step.icon size={20} />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-tag font-bold uppercase"
                      style={{ backgroundColor: `${step.color}25`, color: step.color }}
                    >
                      STAGE 0{i + 1} // {step.stage}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FF905F] transition-colors">
                      {step.action}
                    </h3>
                  </div>
                </div>

                <p className="mt-2 text-sm text-neutral-300 leading-relaxed font-medium">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
