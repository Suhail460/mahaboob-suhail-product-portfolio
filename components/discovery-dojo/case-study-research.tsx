"use client"

import { motion } from "framer-motion"
import { FaUserGraduate, FaClipboardList, FaExclamationTriangle } from "react-icons/fa"

export function CaseStudyResearch() {
  return (
    <section className="py-20 md:py-28 relative border-t border-white/10 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-3 w-3 rounded-full bg-[#AB9BFF]" />
          <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#AB9BFF]">
            USER RESEARCH & INSIGHTS
          </p>
        </div>

        <h2 className="heading-section text-white max-w-4xl mb-16">
          BUILT ON REAL OBSERVATIONS, NOT ASSUMPTIONS
        </h2>

        <div className="space-y-16">
          {/* Target Users */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-[#AB9BFF]/15 text-[#AB9BFF]">
                <FaUserGraduate size={20} />
              </div>
              <h3 className="text-2xl font-extrabold uppercase text-white">
                Target User Personas
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { persona: "Aspiring PM", need: "Build a portfolio of discovery skills and practical artifacts", color: "#FF905F" },
                { persona: "Junior PM (0–2 years)", need: "Structured practice with real-time feedback loops", color: "#AB9BFF" },
                { persona: "Experienced PM (3–8 years)", need: "Deliberate practice in targeted interview & research areas", color: "#B7FF93" },
                { persona: "PM Interview Candidate", need: "Realistic interview simulation with automated AI scoring", color: "#FFD37A" },
              ].map((u, i) => (
                <motion.div
                  key={u.persona}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-2xl bg-[#141418] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono-tag text-xs text-neutral-500 uppercase">
                      PERSONA 0{i + 1}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1 group-hover:text-[#FF905F] transition-colors">
                      {u.persona}
                    </h4>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed font-medium">
                      {u.need}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Jobs to Be Done */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-[#B7FF93]/15 text-[#B7FF93]">
                <FaClipboardList size={20} />
              </div>
              <h3 className="text-2xl font-extrabold uppercase text-white">
                Jobs to Be Done (JTBD)
              </h3>
            </div>

            <div className="space-y-4">
              {[
                { job: "Help me practice customer interviews before my real one", context: "Preparing for a customer interview tomorrow", success: "Felt more confident; identified bad questioning habits" },
                { job: "Show me what I do not know about discovery", context: "Started a new PM role, unsure where my gaps are", success: "Clear map of weak areas and recommended next steps" },
                { job: "Give me something to show in my portfolio", context: "Applying for PM roles, need proof of skills", success: "Completed capstone project with feedback report" },
              ].map((jtbd, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-2xl bg-[#141418] border border-white/10 hover:border-white/25 transition-all"
                >
                  <p className="text-lg font-bold text-[#FF905F]">
                    &ldquo;{jtbd.job}&rdquo;
                  </p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-neutral-300 font-medium">
                    <div>
                      <span className="font-mono-tag text-xs text-neutral-500 uppercase block mb-1">// CONTEXT</span>
                      <span>{jtbd.context}</span>
                    </div>
                    <div>
                      <span className="font-mono-tag text-xs text-[#B7FF93] uppercase block mb-1">// DESIRED OUTCOME</span>
                      <span>{jtbd.success}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
