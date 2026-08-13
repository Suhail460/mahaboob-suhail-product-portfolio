"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown, FaCompass, FaLightbulb, FaCogs, FaChartLine } from "react-icons/fa"

const steps = [
  {
    icon: FaCompass,
    title: "EMPATHIZE & COLLECT",
    subtitle: "Mining customer escalations & support signals",
    description: "Analyzing high-frequency support tickets, churn logs, and escalation trends to isolate core product friction and unarticulated user needs.",
    deliverables: ["Support Ticket Data Mining", "User Friction Audits", "Customer Escalation Mapping"],
    goal: "Isolate Root Friction & Churn Signals",
    color: "#e58e39"
  },
  {
    icon: FaLightbulb,
    title: "HYPOTHESIZE & DEFINE",
    subtitle: "Formulating product strategy & PRDs",
    description: "Transforming raw customer signals into structured PRDs, user stories, low-fidelity wireframes, and testable product discovery hypotheses.",
    deliverables: ["PRD Specification Docs", "Hypothesis Matrix", "Interactive Wireframes"],
    goal: "Actionable PRDs & Validated User Stories",
    color: "#f4a261"
  },
  {
    icon: FaCogs,
    title: "BUILD & EXECUTE",
    subtitle: "Cross-functional Agile alignment",
    description: "Partnering closely with software engineers, UI/UX designers, and QA to execute sprint backlogs and deliver polished features on schedule.",
    deliverables: ["Sprint Backlog Grooming", "Design System Audits", "Cross-Functional Alignment"],
    goal: "Predictable On-Time Agile Sprint Delivery",
    color: "#81c784"
  },
  {
    icon: FaChartLine,
    title: "MEASURE & SCALE",
    subtitle: "Tracking outcome metrics & optimization",
    description: "Monitoring key product telemetry post-release—tracking resolution speeds, retention impact, adoption rates, and operational efficiency gains.",
    deliverables: ["Telemetry Dashboard", "Post-Launch Retrospectives", "Operational Cost Savings"],
    goal: "Quantifiable Retention & Operational Cost ROI",
    color: "#b39ddb"
  }
]

export function ProcessStepsSection() {
  const [activeStep, setActiveStep] = useState<number | null>(0)

  const toggleStep = (idx: number) => {
    setActiveStep(activeStep === idx ? null : idx)
  }

  return (
    <section id="framework" className="py-28 md:py-36 relative border-t border-white/10 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-3 w-3 rounded-full bg-[#81c784]" />
              <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#81c784]">
                METHODOLOGY & FRAMEWORK
              </p>
            </div>
            <h2 className="heading-section text-white max-w-2xl">
              PRODUCT OPERATING SYSTEM.
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm md:text-base leading-relaxed font-medium">
            A battle-tested 4-stage framework for converting customer pain points into high-impact product releases.
          </p>
        </div>

        {/* Double-Bezel Expandable Accordion Steps */}
        <div className="space-y-4">
          {steps.map((step, idx) => {
            const isOpen = activeStep === idx
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`rounded-[2rem] border transition-all overflow-hidden p-1.5 ${
                  isOpen ? "bg-white/10 border-white/20 shadow-2xl" : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
              >
                <div className="rounded-[calc(2rem-0.375rem)] bg-[#121215] overflow-hidden">
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => toggleStep(idx)}
                    className="w-full p-6 md:p-8 flex items-center justify-between text-left cursor-pointer group"
                  >
                    <div className="flex items-center gap-6 md:gap-8">
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform shrink-0" style={{ color: step.color }}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-extrabold uppercase text-white group-hover:text-[#e58e39] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-xs md:text-sm text-neutral-400 mt-1 font-mono-tag">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`p-3 rounded-full bg-white/5 border border-white/10 text-white transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#e58e39] text-[#09090b]" : ""
                      }`}
                    >
                      <FaChevronDown size={14} />
                    </div>
                  </button>

                  {/* Expanded Accordion Body */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 md:px-8 pb-8 pt-2 border-t border-white/5"
                      >
                        <div className="grid md:grid-cols-12 gap-8 items-center pt-4">
                          <div className="md:col-span-8 space-y-4">
                            <p className="text-base md:text-lg text-neutral-300 leading-relaxed font-medium">
                              {step.description}
                            </p>
                            
                            <div className="pt-4">
                              <p className="font-mono-tag text-xs text-neutral-500 uppercase mb-3 font-bold">
                                KEY ARTIFACTS & DELIVERABLES:
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {step.deliverables.map((item) => (
                                  <span
                                    key={item}
                                    className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono-tag text-neutral-200"
                                  >
                                    ✓ {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="md:col-span-4 p-6 rounded-2xl bg-black/40 border border-white/10 text-center">
                            <p className="font-mono-tag text-xs uppercase text-neutral-400 mb-2 font-bold">
                              OPERATIONAL GOAL
                            </p>
                            <p className="text-base md:text-lg font-bold" style={{ color: step.color }}>
                              {step.goal}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
