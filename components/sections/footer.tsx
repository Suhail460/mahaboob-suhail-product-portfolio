"use client"

import { FaGithub, FaLinkedin, FaFileDownload, FaArrowUp } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { useState, useEffect } from "react"

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#FF905F] text-[#0c0c0e] shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <FaArrowUp size={16} />
    </button>
  )
}

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <BackToTop />
      <footer className="border-t border-white/10 bg-[#08080a] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-6 space-y-4">
              <span className="font-mono-tag text-xs font-bold text-[#FF905F] uppercase tracking-widest">
                // M. MAHABOOB SUHAIL
              </span>
              <h3 className="text-2xl font-extrabold uppercase">
                Product Support Analyst & Product Strategist
              </h3>
              <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
                Transforming high-volume customer escalations into data-driven product features, growth initiatives, and continuous learning platforms.
              </p>
            </div>

            <div className="md:col-span-3 space-y-3">
              <p className="font-mono-tag text-xs font-bold text-neutral-500 uppercase tracking-widest">
                Quick Links
              </p>
              <div className="flex flex-col gap-2 font-mono-tag text-sm text-neutral-300">
                <a href="#hero" className="hover:text-[#FF905F] transition-colors">01. Home</a>
                <a href="#about" className="hover:text-[#FF905F] transition-colors">02. About</a>
                <a href="#case-studies" className="hover:text-[#FF905F] transition-colors">03. Case Studies</a>
                <a href="#experience" className="hover:text-[#FF905F] transition-colors">04. Experience</a>
                <a href="#framework" className="hover:text-[#FF905F] transition-colors">05. PM Framework</a>
                <a href="#skills" className="hover:text-[#FF905F] transition-colors">06. Skills & Certs</a>
              </div>
            </div>

            <div className="md:col-span-3 space-y-4">
              <p className="font-mono-tag text-xs font-bold text-neutral-500 uppercase tracking-widest">
                Connect & Resume
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://github.com/Suhail460"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#B7FF93] hover:text-[#B7FF93] transition-all"
                  aria-label="GitHub"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/mmahaboobsuhail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#AB9BFF] hover:text-[#AB9BFF] transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href="mailto:msuhail460@gmail.com"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF905F] hover:text-[#FF905F] transition-all"
                  aria-label="Email"
                >
                  <HiOutlineMail size={18} />
                </a>
                <a
                  href="/resume/suhail_resume.pdf"
                  target="_blank"
                  download
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-mono-tag font-bold text-[#0c0c0e] bg-[#FF905F] hover:bg-[#FF905F]/90 transition-all uppercase"
                >
                  <FaFileDownload size={12} />
                  Resume
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-tag text-neutral-500 gap-4">
            <p>&copy; {currentYear} M. Mahaboob Suhail. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7FF93]" />
              <span>Ariyana Studio Inspired Portfolio</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
