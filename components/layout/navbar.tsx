"use client"

import { useState } from "react"
import Link from "next/link"
import { useScroll } from "@/hooks/use-scroll"
import { CanvasMenu } from "@/components/layout/canvas-menu"
import { FaFileDownload, FaLinkedin } from "react-icons/fa"

export function Navbar() {
  const { scrollY } = useScroll()
  const [canvasOpen, setCanvasOpen] = useState(false)
  const scrolledPast = scrollY > 50

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 md:px-12 py-4"
        style={{
          background: scrolledPast ? "rgba(12, 12, 14, 0.85)" : "transparent",
          backdropFilter: scrolledPast ? "blur(16px)" : "none",
          borderBottom: scrolledPast ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Branding */}
          <Link href="/" className="group flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF905F] group-hover:scale-125 transition-transform" />
            <span className="font-mono-tag text-sm md:text-base font-bold uppercase tracking-wider text-white">
              // M. MAHABOOB SUHAIL
            </span>
          </Link>

          {/* Right Action Bar */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/mmahaboobsuhail"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#AB9BFF] hover:text-[#AB9BFF] text-xs font-mono-tag uppercase transition-all"
            >
              <FaLinkedin size={14} />
              <span>LinkedIn</span>
            </a>

            <a
              href="/resume/suhail_resume.pdf"
              target="_blank"
              download
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 hover:bg-[#FF905F] hover:text-[#0c0c0e] hover:border-[#FF905F] text-xs font-mono-tag uppercase font-bold transition-all"
            >
              <FaFileDownload size={12} />
              <span>Resume</span>
            </a>

            {/* Ariyana Hamburger Trigger Button */}
            <button
              onClick={() => setCanvasOpen(true)}
              aria-label="Open Navigation Menu"
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:border-[#FF905F] hover:bg-white/15 transition-all text-xs font-mono-tag uppercase font-bold text-white cursor-pointer group"
            >
              <span>Menu</span>
              <div className="flex flex-col gap-1 w-4">
                <span className="h-[2px] w-full bg-[#FF905F] group-hover:translate-x-0.5 transition-transform" />
                <span className="h-[2px] w-3/4 bg-white group-hover:w-full transition-all" />
                <span className="h-[2px] w-full bg-[#FF905F] group-hover:-translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Ariyana Fullscreen Canvas Navigation Overlay */}
      <CanvasMenu isOpen={canvasOpen} onClose={() => setCanvasOpen(false)} />
    </>
  )
}
