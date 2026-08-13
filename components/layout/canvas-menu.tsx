"use client"

import { motion, AnimatePresence } from "framer-motion"
import { FaTimes, FaLinkedin, FaGithub, FaFileDownload, FaEnvelope } from "react-icons/fa"

interface CanvasMenuProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Experience", href: "#experience" },
  { label: "PM Framework", href: "#framework" },
  { label: "Skills & Certs", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function CanvasMenu({ isOpen, onClose }: CanvasMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0c0c0e]/95 backdrop-blur-2xl p-6 md:p-12 text-white border-b border-white/10"
        >
          {/* Header Bar inside Canvas */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#FF905F]">
                // SUHAIL PORTFOLIO
              </span>
              <span className="hidden sm:inline-block text-xs uppercase px-2.5 py-0.5 rounded-full bg-[#AB9BFF]/20 text-[#AB9BFF] font-mono-tag">
                Product Support Analyst
              </span>
            </div>

            <button
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-all bg-white/5 text-sm uppercase font-mono-tag cursor-pointer"
            >
              <span>Close</span>
              <FaTimes size={14} className="text-[#FF905F]" />
            </button>
          </div>

          {/* Navigation Links Grid */}
          <div className="my-auto py-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-3">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight py-2 border-b border-white/5 hover:border-[#FF905F] transition-all"
                    >
                      <span className="group-hover:translate-x-4 transition-transform duration-300 group-hover:text-[#FF905F]">
                        {item.label}
                      </span>
                      <span className="font-mono-tag text-xs text-neutral-500 group-hover:text-[#FF905F]">
                        0{idx + 1}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Direct Info & Social Sidebar inside Canvas */}
              <div className="flex flex-col justify-center space-y-8 md:pl-12 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0">
                <div>
                  <p className="font-mono-tag text-xs uppercase tracking-widest text-neutral-400 mb-2">
                    Get in touch
                  </p>
                  <a
                    href="mailto:msuhail460@gmail.com"
                    className="text-xl md:text-2xl font-bold hover:text-[#FF905F] transition-colors flex items-center gap-3"
                  >
                    <FaEnvelope size={18} className="text-[#FF905F]" />
                    msuhail460@gmail.com
                  </a>
                </div>

                <div>
                  <p className="font-mono-tag text-xs uppercase tracking-widest text-neutral-400 mb-3">
                    Social & Resume
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.linkedin.com/in/mmahaboobsuhail"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#AB9BFF] hover:text-[#AB9BFF] text-sm font-medium transition-all"
                    >
                      <FaLinkedin size={16} />
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/Suhail460"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#B7FF93] hover:text-[#B7FF93] text-sm font-medium transition-all"
                    >
                      <FaGithub size={16} />
                      GitHub
                    </a>
                    <a
                      href="/resume/suhail_resume.pdf"
                      target="_blank"
                      download
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FF905F] text-[#0c0c0e] font-bold text-sm hover:opacity-90 transition-all"
                    >
                      <FaFileDownload size={14} />
                      Download Resume
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-2 w-2 rounded-full bg-[#B7FF93] animate-pulse" />
                    <span className="text-xs font-mono-tag text-[#B7FF93] font-bold uppercase">
                      Current Status
                    </span>
                  </div>
                  <p className="text-sm font-medium text-neutral-300">
                    Open to Associate Product Manager, Product Manager, Product Owner & Product Analyst Roles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="flex justify-between items-center text-xs font-mono-tag text-neutral-500 pt-4 border-t border-white/10">
            <span>© 2026 M. Mahaboob Suhail</span>
            <span>Product Support Analyst & Product Strategist</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
