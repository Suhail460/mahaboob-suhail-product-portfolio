"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { FaFileDownload, FaLinkedin, FaGithub, FaRocket, FaArrowRight } from "react-icons/fa"

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

  // Kinetic Split Text Transforms on Scroll
  // Mahaboob moves left, Suhail moves right, both fade away smoothly as frames progress
  const mahaboobX = useTransform(scrollYProgress, [0, 0.55], ["0%", "-70%"])
  const suhailX = useTransform(scrollYProgress, [0, 0.55], ["0%", "70%"])
  const nameOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Sharp, crystal clear canvas drawing function (100% opacity, high DPR)
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

    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = "high"

    // Aspect fill cover logic
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

  // Two-tier image preloading
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

    // Tier 2: Stream remaining 85 frames
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
    <div ref={containerRef} className="relative h-[160vh] bg-[#09090b]">
      {/* Sticky Fullscreen Canvas & Motion Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Background 24fps Canvas Frame Player (100% Clear & Sharp) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: imagesLoaded ? 1 : 0 }}
        />

        {/* Ambient Dark Bottom Gradient Overlay for High Contrast */}
        <div className="absolute bottom-0 inset-x-0 h-3/4 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent pointer-events-none z-10" />

        {/* Hero Overlay Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-12 pt-24 pb-6 flex flex-col justify-between h-full w-full pointer-events-none">
          {/* Top Left Availability Status Badge (High-Contrast Dark Glass Badge with White Text) */}
          <div className="flex items-center justify-between pointer-events-auto">
            <div className="px-4 py-2 rounded-full bg-[#09090b]/90 backdrop-blur-xl border border-white/20 text-white font-mono-tag text-xs font-bold tracking-wider uppercase flex items-center gap-3 shadow-2xl">
              <span className="h-2.5 w-2.5 rounded-full bg-[#81c784] animate-pulse shrink-0" />
              <span className="text-white">AVAILABLE FOR PRODUCT MANAGEMENT & OPERATIONS ROLES</span>
            </div>
          </div>

          {/* Center Kinetic Splitting Name: "MAHABOOB" moves left, "SUHAIL" moves right & both fade out on scroll */}
          <motion.div
            style={{ opacity: nameOpacity }}
            className="my-auto text-center w-full select-none"
          >
            <div className="flex items-center justify-center gap-4 sm:gap-6 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
              <motion.span
                style={{ x: mahaboobX }}
                className="inline-block text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]"
              >
                MAHABOOB
              </motion.span>
              <motion.span
                style={{ x: suhailX }}
                className="inline-block text-[#e58e39] drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]"
              >
                SUHAIL
              </motion.span>
            </div>
            <p className="font-mono-tag text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-white mt-4 drop-shadow-md bg-[#09090b]/70 backdrop-blur-md px-4 py-1.5 rounded-full inline-block border border-white/10">
              PRODUCT SUPPORT ANALYST & PRODUCT STRATEGIST
            </p>
          </motion.div>

          {/* Bottom Positioned Supporting Text & Action Buttons */}
          <div className="pointer-events-auto space-y-4 p-6 sm:p-8 rounded-[2.5rem] bg-[#09090b]/85 backdrop-blur-xl border border-white/15 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              {/* Left Column: Narrative & Target Role Badges */}
              <div className="space-y-3 max-w-2xl">
                <p className="text-base sm:text-lg text-white leading-relaxed font-semibold">
                  From Customer Escalations to Product Strategy • 8.5+ Years Operations & Technical Support
                </p>

                {/* Target Role Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono-tag text-xs uppercase tracking-wider text-neutral-300 font-bold">
                    TARGET ROLES:
                  </span>
                  {["Associate Product Manager", "Product Manager", "Product Owner", "Product Analyst"].map((role) => (
                    <span
                      key={role}
                      className="px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono-tag text-white font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
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
                </a>

                <div className="flex items-center gap-2 pl-1">
                  <a
                    href="https://www.linkedin.com/in/mmahaboobsuhail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-full bg-white/10 border border-white/20 hover:border-[#b39ddb] hover:text-[#b39ddb] transition-all text-white"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={16} />
                  </a>

                  <a
                    href="https://github.com/Suhail460"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-full bg-white/10 border border-white/20 hover:border-[#81c784] hover:text-[#81c784] transition-all text-white"
                    aria-label="GitHub"
                  >
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="flex items-center justify-between text-xs font-mono-tag text-neutral-300 pt-3 border-t border-white/10">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="font-bold text-white">8.5+ YRS EXP</span>
                <span className="hidden sm:inline-block font-bold text-white">98% CSAT RATE</span>
                <span className="hidden md:inline-block font-bold text-white">40% FASTER TURNAROUND</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300 font-bold">
                <span className="h-2 w-2 rounded-full bg-[#81c784] animate-pulse" />
                <span>ACTIVE PORTFOLIO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
