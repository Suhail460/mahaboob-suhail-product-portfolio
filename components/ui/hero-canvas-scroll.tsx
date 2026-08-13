"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { FaFileDownload, FaLinkedin, FaGithub, FaArrowDown, FaRocket, FaArrowRight } from "react-icons/fa"

const FRAME_COUNT = 100

function getFrameUrl(index: number) {
  const paddedIndex = String(index + 1).padStart(4, "0")
  return `/frames/video_frames_24fps/frame_${paddedIndex}.png`
}

export function HeroCanvasScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)
  const [currentFrame, setCurrentFrame] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Preload all 100 frames into memory
  useEffect(() => {
    let loadedCount = 0
    const loadedImages: HTMLImageElement[] = []

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image()
      img.src = getFrameUrl(i)
      img.onload = () => {
        loadedCount++
        setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100))
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true)
        }
      }
      img.onerror = () => {
        loadedCount++
        setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100))
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true)
        }
      }
      loadedImages.push(img)
    }

    imagesRef.current = loadedImages
  }, [])

  // Draw current frame onto canvas with proper scaling & aspect ratio
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
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
    ctx.clearRect(0, 0, displayWidth, displayHeight)

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
  }

  // Handle frame drawing on scroll progress change
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(latest * FRAME_COUNT)))
    setCurrentFrame(frameIndex)
    drawFrame(frameIndex)
  })

  // Initial render when images load
  useEffect(() => {
    if (imagesLoaded) {
      drawFrame(0)
    }
  }, [imagesLoaded])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => drawFrame(currentFrame)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [currentFrame])

  return (
    <div ref={containerRef} className="relative h-[280vh] bg-[#09090b]">
      {/* Sticky Fullscreen Canvas & Text Overlay */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Background 24fps Canvas Frame Player */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: imagesLoaded ? 0.75 : 0 }}
        />

        {/* Loading Screen Indicator before frames finish preloading */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#09090b] text-white z-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-3 w-3 rounded-full bg-[#e58e39] animate-pulse" />
              <p className="font-mono-tag text-xs uppercase tracking-widest text-neutral-400">
                LOADING CINEMATIC FRAMES ({loadProgress}%)
              </p>
            </div>
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#e58e39] transition-all duration-200"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Ambient Dark Gradient Overlays for High Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-[#09090b]/40 pointer-events-none z-10" />
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#09090b]/80 to-transparent pointer-events-none z-10" />

        {/* Hero Content Section Overlay */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-12 pt-28 pb-12 flex flex-col justify-between h-full w-full">
          {/* Top Status & Role Pill */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3"
            >
              <div className="status-pill">
                <span className="h-2 w-2 rounded-full bg-[#81c784] animate-pulse" />
                <span>AVAILABLE FOR PRODUCT MANAGEMENT & OPERATIONS ROLES</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#e58e39]"
            >
              // PRODUCT SUPPORT ANALYST & PRODUCT STRATEGIST
            </motion.p>
          </div>

          {/* Center Main Headline & Narrative (No Profile Photo, No "Founder of Discovery Dojo") */}
          <div className="my-auto space-y-6 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white leading-[1.02] tracking-tighter"
            >
              FROM CUSTOMER ESCALATIONS TO{" "}
              <span className="text-[#e58e39]">PRODUCT STRATEGY.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-neutral-300 max-w-3xl leading-relaxed font-medium"
            >
              8.5+ years bridging customer operations, technical escalations, data analytics, and growth-focused product strategy.
            </motion.p>

            {/* Target Role Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-2.5 pt-2"
            >
              <span className="font-mono-tag text-xs uppercase tracking-wider text-neutral-400 font-bold">
                OPEN TO ROLES:
              </span>
              {["Associate Product Manager", "Product Manager", "Product Owner", "Product Analyst"].map((role) => (
                <span
                  key={role}
                  className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono-tag text-neutral-100 font-medium"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-4"
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

              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://www.linkedin.com/in/mmahaboobsuhail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#b39ddb] hover:text-[#b39ddb] transition-all text-white"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href="https://github.com/Suhail460"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#81c784] hover:text-[#81c784] transition-all text-white"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Telemetry Dock */}
          <div className="flex items-center justify-between text-xs font-mono-tag text-neutral-400 pt-4 border-t border-white/10">
            <div className="flex items-center gap-6">
              <span>8.5+ YRS EXPERIENCE</span>
              <span className="hidden sm:inline-block">98% RESOLUTION RATE</span>
              <span className="hidden md:inline-block">40% FASTER TURNAROUND</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-500">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e58e39] animate-pulse" />
              <span>SCROLL TO ANIMATE CINEMATIC FRAMES</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
