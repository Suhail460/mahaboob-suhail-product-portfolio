"use client"

import { motion } from "framer-motion"
import { FaLinkedin, FaEnvelope, FaGithub, FaFileDownload } from "react-icons/fa"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-36 relative border-t border-white/10 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#FF905F]/15 border border-[#FF905F]/30 text-[#FF905F] text-xs font-mono-tag font-bold uppercase">
            <span className="h-2 w-2 rounded-full bg-[#FF905F] animate-pulse" />
            <span>LET&apos;S CONNECT & COLLABORATE</span>
          </div>

          <h2 className="heading-hero text-white">
            LET&apos;S BUILD <span className="text-[#FF905F]">EXCEPTIONAL</span> PRODUCTS TOGETHER.
          </h2>

          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Open to Associate Product Manager, Product Manager, Product Owner & Product Analyst opportunities.
          </p>

          {/* Large Interactive Email Card */}
          <div className="pt-8">
            <a
              href="mailto:msuhail460@gmail.com"
              className="group inline-flex items-center gap-4 px-8 py-6 rounded-3xl bg-[#141418] border border-white/10 hover:border-[#FF905F] transition-all shadow-2xl"
            >
              <div className="p-4 rounded-2xl bg-[#FF905F] text-[#0c0c0e] group-hover:scale-110 transition-transform">
                <FaEnvelope size={24} />
              </div>
              <div className="text-left">
                <p className="font-mono-tag text-xs text-neutral-400 uppercase">DIRECT EMAIL ADDRESS</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white group-hover:text-[#FF905F] transition-colors">
                  msuhail460@gmail.com
                </p>
              </div>
            </a>
          </div>

          {/* Social Action Pills */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a
              href="https://www.linkedin.com/in/mmahaboobsuhail"
              target="_blank"
              rel="noopener noreferrer"
              className="button-ariyana"
            >
              <div className="flex items-center gap-2">
                <FaLinkedin size={16} className="text-[#AB9BFF]" />
                <div className="text-roll">
                  <span>Connect on LinkedIn</span>
                  <span>Connect on LinkedIn</span>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/Suhail460"
              target="_blank"
              rel="noopener noreferrer"
              className="button-ariyana"
            >
              <div className="flex items-center gap-2">
                <FaGithub size={16} className="text-[#B7FF93]" />
                <div className="text-roll">
                  <span>View GitHub Profile</span>
                  <span>View GitHub Profile</span>
                </div>
              </div>
            </a>

            <a
              href="/resume/suhail_resume.pdf"
              target="_blank"
              download
              className="button-ariyana button-ariyana-primary"
            >
              <div className="flex items-center gap-2">
                <FaFileDownload size={14} />
                <div className="text-roll">
                  <span>Download Full Resume</span>
                  <span>Download Full Resume</span>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
