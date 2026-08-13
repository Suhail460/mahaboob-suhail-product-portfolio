"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaLinkedin, FaEnvelope, FaGithub, FaFileDownload, FaCopy, FaCheck } from "react-icons/fa"

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const email = "msuhail460@gmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-28 md:py-40 relative border-t border-white/10 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#e58e39]/15 border border-[#e58e39]/30 text-[#e58e39] text-xs font-mono-tag font-bold uppercase">
            <span className="h-2 w-2 rounded-full bg-[#e58e39] animate-pulse" />
            <span>LET&apos;S CONNECT & COLLABORATE</span>
          </div>

          <h2 className="heading-hero text-white">
            LET&apos;S BUILD <span className="text-[#e58e39]">EXCEPTIONAL</span> PRODUCTS TOGETHER.
          </h2>

          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Open to Associate Product Manager, Product Manager, Product Owner & Product Analyst opportunities.
          </p>

          {/* Double-Bezel Interactive Email Card with Copy Feature */}
          <div className="pt-8 flex justify-center">
            <div className="rounded-[2.5rem] bg-white/5 border border-white/10 p-2 shadow-2xl hover:border-[#e58e39]/40 transition-all max-w-2xl w-full">
              <div className="rounded-[calc(2.5rem-0.5rem)] bg-[#121215] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/5 text-left">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-[#e58e39] text-[#09090b] shrink-0">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <p className="font-mono-tag text-xs text-neutral-400 uppercase font-bold">DIRECT EMAIL ADDRESS</p>
                    <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                      {email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn-studio group cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <FaCheck size={14} className="text-[#81c784]" />
                      <span className="text-[#81c784]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy size={13} className="text-[#e58e39]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Social Action Pills */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a
              href="https://www.linkedin.com/in/mmahaboobsuhail"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-studio"
            >
              <FaLinkedin size={16} className="text-[#b39ddb]" />
              <span>Connect on LinkedIn</span>
            </a>

            <a
              href="https://github.com/Suhail460"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-studio"
            >
              <FaGithub size={16} className="text-[#81c784]" />
              <span>View GitHub Profile</span>
            </a>

            <a
              href="/resume/suhail_resume.pdf"
              target="_blank"
              download
              className="btn-studio btn-studio-primary"
            >
              <FaFileDownload size={14} />
              <span>Download Full Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
