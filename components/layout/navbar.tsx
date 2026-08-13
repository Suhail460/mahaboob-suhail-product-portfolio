"use client"

import { useState } from "react"
import Link from "next/link"
import { CanvasMenu } from "@/components/layout/canvas-menu"
import { FaFileDownload, FaLinkedin, FaFolderOpen, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa"

export function Navbar() {
  const [canvasOpen, setCanvasOpen] = useState(false)

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 md:px-12 py-3.5 bg-[#09090b]/85 backdrop-blur-xl border-b border-white/12 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Branding */}
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e58e39] group-hover:scale-125 transition-transform" />
            <span className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-wider text-white">
              SUHAIL <span className="text-neutral-400 font-normal">// PORTFOLIO</span>
            </span>
          </Link>

          {/* Quick Nav Anchors for Desktop */}
          <nav className="hidden lg:flex items-center gap-8 font-mono-tag text-xs uppercase text-neutral-300 font-semibold">
            <a href="#about" className="hover:text-white transition-colors flex items-center gap-1.5">
              <FaUser size={10} className="text-[#e58e39]" /> About
            </a>
            <a href="#case-studies" className="hover:text-white transition-colors flex items-center gap-1.5">
              <FaFolderOpen size={10} className="text-[#f4a261]" /> Case Studies
            </a>
            <a href="#experience" className="hover:text-white transition-colors flex items-center gap-1.5">
              <FaBriefcase size={10} className="text-[#81c784]" /> Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1.5">
              <FaEnvelope size={10} className="text-[#b39ddb]" /> Contact
            </a>
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/mmahaboobsuhail"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 hover:border-[#b39ddb] hover:text-[#b39ddb] text-xs font-mono-tag text-white uppercase transition-all"
            >
              <FaLinkedin size={13} />
              <span>LinkedIn</span>
            </a>

            <a
              href="/resume/suhail_resume.pdf"
              target="_blank"
              download
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 hover:bg-[#e58e39] hover:text-[#09090b] hover:border-[#e58e39] text-xs font-mono-tag text-white uppercase font-bold transition-all"
            >
              <FaFileDownload size={12} />
              <span>Resume</span>
            </a>

            {/* Hamburger Trigger Button */}
            <button
              onClick={() => setCanvasOpen(true)}
              aria-label="Open Navigation Menu"
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/15 border border-white/25 hover:border-[#e58e39] hover:bg-white/20 transition-all text-xs font-mono-tag uppercase font-bold text-white cursor-pointer group shadow-lg"
            >
              <span>Menu</span>
              <div className="flex flex-col gap-1 w-4">
                <span className="h-[2px] w-full bg-[#e58e39] group-hover:translate-x-0.5 transition-transform" />
                <span className="h-[2px] w-3/4 bg-white group-hover:w-full transition-all" />
                <span className="h-[2px] w-full bg-[#e58e39] group-hover:-translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Canvas Navigation Overlay */}
      <CanvasMenu isOpen={canvasOpen} onClose={() => setCanvasOpen(false)} />
    </>
  )
}
