"use client"

import { motion } from "framer-motion"
import { FaCheckCircle } from "react-icons/fa"

export function CaseStudyArchitecture() {
  const sections = [
    {
      title: "Authentication Flow",
      items: [
        "Three providers: Google OAuth, GitHub OAuth, Email/Password",
        "Guest mode with localStorage persistence",
        "Seamless progress migration on signup",
        "Session recovery with loading spinner",
      ],
      color: "#FF905F",
    },
    {
      title: "State Management",
      items: [
        "React Context + useReducer (zero bloated external state libs)",
        "Split-context pattern prevents unnecessary re-renders",
        "Memoized values for optimal render performance",
        "Service layer abstracts Firebase & API logic",
      ],
      color: "#AB9BFF",
    },
    {
      title: "Persistence Strategy",
      items: [
        "localStorage: primary, instant reads",
        "Firestore: sync target for authenticated users",
        "800ms debounced writes to Firestore",
        "Guest data device-locked, no unauthenticated Firestore calls",
      ],
      color: "#B7FF93",
    },
    {
      title: "Performance Optimization",
      items: [
        "Route-level code splitting (64% payload reduction)",
        "Mermaid deferred loading (~250 kB deferred bundle)",
        "React Suspense with custom skeleton loaders",
        "0 ESLint warnings, clean production build",
      ],
      color: "#FFD37A",
    },
  ]

  return (
    <section className="py-20 md:py-28 relative border-t border-white/10 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-3 w-3 rounded-full bg-[#B7FF93]" />
          <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#B7FF93]">
            SYSTEM ARCHITECTURE
          </p>
        </div>

        <h2 className="heading-section text-white max-w-2xl mb-16">
          DESIGNED FOR SPEED, SIMPLICITY, AND SCALE
        </h2>

        {/* System Diagram Card */}
        <div className="p-8 rounded-2xl bg-[#141418] border border-white/10 mb-12">
          <h3 className="text-xl font-extrabold uppercase text-white mb-6">
            // DATA FLOW ARCHITECTURE
          </h3>

          <div className="flex flex-wrap items-center gap-3 font-mono-tag text-xs mb-6">
            {["Browser", "React 18 SPA", "Firebase Auth", "Firestore", "localStorage", "GA4 Analytics"].map((node, i) => (
              <div key={node} className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-white font-bold">
                  {node}
                </span>
                {i < 5 && <span className="text-[#FF905F] text-sm">→</span>}
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono-tag text-xs text-neutral-300 leading-relaxed space-y-1">
            <p className="text-[#FF905F] font-bold mb-2">// SYSTEM SUBSYSTEMS</p>
            <p>Browser → React 18 Single Page Application</p>
            <p className="pl-4">├── Firebase Auth (Google, GitHub, Email/Password)</p>
            <p className="pl-4">├── Firestore DB (Cloud sync for authenticated learners)</p>
            <p className="pl-4">├── localStorage (Instant offline-first client storage)</p>
            <p className="pl-4">└── GA4 Telemetry (15+ custom event tracks)</p>
          </div>
        </div>

        {/* Architecture Modules Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-[#141418] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white uppercase group-hover:text-[#FF905F] transition-colors">
                    {section.title}
                  </h3>
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: section.color }} />
                </div>

                <ul className="space-y-3 mt-4">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-neutral-300 font-mono-tag">
                      <FaCheckCircle className="shrink-0 mt-0.5" style={{ color: section.color }} size={12} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 font-mono-tag text-[10px] uppercase text-neutral-500">
                Architecture Spec 0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
