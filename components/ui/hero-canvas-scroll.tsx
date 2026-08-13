"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { FaFileDownload, FaLinkedin, FaGithub, FaArrowDown, FaRocket, FaArrowRight } from "react-icons/fa"

const FRAME_COUNT = 100
const INITIAL_PRELOAD_COUNT = 15

function getFrameUrl(index: number) {
  const paddedIndex = String(index + 1).padStart(4, "0")
  return `/frames/video_frames_24fps/frame_${paddedIndex}.png`
}

export function HeroCanvasScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const animFrameIdRef = useRef<number | null>(null)

  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Sharp, clear canvas drawing function (no blur, 100% opacity, crisp DPR scale)
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const img = imagesRef.current[frameIndex]
    if (!img || !img.complete || img.naturalWidth === 0) return

    const dpr = window.devicePixelRatio || 1
    const displayWidth = canvas.clientWidth
    const displayHeight = canvas.clientHeight

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr
      canvas.height = displayHeight * dpr
    }

    ctx.save()
    ctx.scale(dpr, dpr)

    // Image smoothing for crystal clear render
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = "high"

    // Calculate aspect fill cover logic
    const imgRatio = img.naturalWidth / img.naturalHeight
    const canvasRatio = displayWidth / displayHeight
    let renderW = displayWidth
    let renderH = displayHeight
    let offsetX = 0
    let offsetY = 0

    if (canvasRatio > imgRatio) {
      renderH = displayWidth / imgRatio
      offsetY = (displayHeight - renderH) / 2
    } else {
      renderW = displayHeight * imgRatio
      offsetX = (displayWidth - renderW) / 2
    }

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH)
    ctx.restore()
  }, [])

  // Two-tier frame preloading (instant 15 frames for immediate render, remaining 85 background)
  useEffect(() => {
    let loadedCount = 0
    const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT)

    // Tier 1: Preload initial 15 frames
    for (let i = 0; i < INITIAL_PRELOAD_COUNT; i++) {
      const img = new Image()
      img.src = getFrameUrl(i)
      img.onload = () => {
        loadedCount++
        setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100))
        if (loadedCount >= INITIAL_PRELOAD_COUNT) {
          setImagesLoaded(true)
        }
      }
      loadedImages[i] = img
    }

    // Tier 2: Stream remaining frames
    setTimeout(() => {
      for (let i = INITIAL_PRELOAD_COUNT; i < FRAME_COUNT; i++) {
        const img = new Image()
        img.src = getFrameUrl(i)
        img.onload = () => {
          loadedCount++
          setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100))
        }
        loadedImages[i] = img
      }
    }, 50)

    imagesRef.current = loadedImages
  }, [])

  // Handle frame drawing on scroll progress change
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(latest * FRAME_COUNT)))
    if (frameIndex !== currentFrameIndex) {
      setCurrentFrameIndex(frameIndex)
      if (animFrameIdRef.current !== null) {
        cancelAnimationFrame(animFrameIdRef.current)
      }
      animFrameIdRef.current = requestAnimationFrame(() => {
        drawFrame(frameIndex)
      })
    }
  })

  // Initial draw once tier-1 images load
  useEffect(() => {
    if (imagesLoaded) {
      drawFrame(0)
    }
  }, [imagesLoaded, drawFrame])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (animFrameIdRef.current !== null) {
        cancelAnimationFrame(animFrameIdRef.current)
      }
      animFrameIdRef.current = requestAnimationFrame(() => {
        drawFrame(currentFrameIndex)
      })
    }
    window.addEventListener("resize", handleResize, { passive: true })
    return () => window.removeEventListener("resize", handleResize)
  }, [currentFrameIndex, drawFrame])

  return (
    <div ref={containerRef} className="relative h-[180vh] bg-[#09090b]">
      {/* Sticky Fullscreen Canvas & Text Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Background 24fps Canvas Frame Player (100% Clear & Sharp) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: imagesLoaded ? 1 : 0 }}
        />

        {/* Floating Bottom Card Container for High-Contrast Text Legibility (No Overlap) */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-12 pt-24 pb-8 flex flex-col justify-between h-full w-full pointer-events-none">
          {/* Top Status Badge */}
          <div className="flex items-center justify-between pointer-events-auto">
            <div className="status-pill backdrop-blur-md bg-[#09090b]/80 border border-white/10">
              <span className="h-2 w-2 rounded-full bg-[#81c784] animate-pulse" />
              <span>AVAILABLE FOR PRODUCT MANAGEMENT & OPERATIONS ROLES</span>
            </div>
            <div className="hidden md:flex items-center gap-3 font-mono-tag text-xs text-neutral-300 bg-[#09090b]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e58e39] animate-pulse" />
              <span>FRAME {currentFrameIndex + 1} / 100</span>
            </div>
          </div>

          {/* Bottom Center Name & Narrative Glass Panel (Pinned & Fixed, High Legibility) */}
          <div className="my-auto md:my-0 md:mt-auto space-y-5 max-w-4xl mx-auto w-full text-center pointer-events-auto bg-[#09090b]/85 backdrop-blur-xl p-6 sm:p-8 rounded-[2.5rem] border border-white/15 shadow-2xl">
            {/* Name Heading */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#e58e39] mb-2">
                PRODUCT SUPPORT ANALYST & PRODUCT STRATEGIST
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight">
                MAHABOOB <span className="text-[#e58e39]">SUHAIL</span>
              </h1>
            </motion.div>

            {/* Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              From Customer Escalations to Product Strategy • 8.5+ Years Operations & Technical Support
            </motion.p>

            {/* Target Role Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-2 pt-1"
            >
              {["Associate Product Manager", "Product Manager", "Product Owner", "Product Analyst"].map((role) => (
                <span
                  key={role}
                  className="px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono-tag text-neutral-100 font-medium"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <a href="#case-studies" className="btn-studio btn-studio-primary group">
                <FaRocket size={13} />
                <span>Explore Case Studies</span>
                <div className="w-7 h-7 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <FaArrowRight size={11} />
                </div>
              </a>

              <a
                href="/resume/suhail_resume.pdf"
                target="_blank"
                download
                className="btn-studio group"
              >
                <FaFileDownload size={13} className="text-[#e58e39]" />
                <span>Download Resume</span>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaArrowDown size={10} className="text-[#e58e39]" />
                </div>
              </a>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href="https://www.linkedin.com/in/mmahaboobsuhail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full bg-white/10 border border-white/15 hover:border-[#b39ddb] hover:text-[#b39ddb] transition-all text-white"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={16} />
                </a>

                <a
                  href="https://github.com/Suhail460"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full bg-white/10 border border-white/15 hover:border-[#81c784] hover:text-[#81c784] transition-all text-white"
                  aria-label="GitHub"
                >
                  <FaGithub size={16} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="flex items-center justify-between text-xs font-mono-tag text-neutral-400 pt-3 border-t border-white/10 pointer-events-auto">
            <div className="flex items-center gap-4 sm:gap-6">
              <span>8.5+ YRS EXP</span>
              <span className="hidden sm:inline-block">98% CSAT</span>
              <span className="hidden md:inline-block">40% FASTER TURNAROUND</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e58e39] animate-pulse" />
              <span>SCROLL TO ANIMATE FRAMES</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
