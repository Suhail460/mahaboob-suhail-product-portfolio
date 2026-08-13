"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { FaArrowDown } from "react-icons/fa"

const FRAME_COUNT = 100
const INITIAL_PRELOAD_COUNT = 20

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
  // "MAHABOOB" slides left, "SUHAIL" slides right, both fade out smoothly
  const mahaboobX = useTransform(scrollYProgress, [0, 0.5], ["0%", "-75%"])
  const suhailX = useTransform(scrollYProgress, [0, 0.5], ["0%", "75%"])
  const nameOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  // Sharp, crystal clear canvas drawing function (Uses window viewport dimensions + setTransform reset)
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const img = imagesRef.current[frameIndex]
    if (!img || !img.complete || img.naturalWidth === 0) return

    const dpr = window.devicePixelRatio || 1
    const displayWidth = window.innerWidth
    const displayHeight = window.innerHeight

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr
      canvas.height = displayHeight * dpr
    }

    // Reset matrix transform completely before applying scale
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = "high"

    // True Object-Cover fill cover logic (Zero black bars top, bottom, left or right)
    const imgAspect = img.naturalWidth / img.naturalHeight
    const canvasAspect = displayWidth / displayHeight

    let renderW: number
    let renderH: number

    if (canvasAspect > imgAspect) {
      renderW = displayWidth
      renderH = displayWidth / imgAspect
    } else {
      renderH = displayHeight
      renderW = displayHeight * imgAspect
    }

    const offsetX = (displayWidth - renderW) / 2
    const offsetY = (displayHeight - renderH) / 2

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH)
  }, [])

  // Two-tier image preloading (20 initial frames for instant load, remaining 80 background)
  useEffect(() => {
    let loadedCount = 0
    const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT)

    // Tier 1: Preload initial 20 frames
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

    // Tier 2: Stream remaining 80 frames
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

  // Handle frame drawing on scroll progress change (Maps scroll progress smoothly across 100 frames)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map scroll 0 -> 0.85 to frames 0 -> 99 (frame 100 stays pinned for final 15% scroll)
    const progressFactor = Math.min(1, latest / 0.85)
    const frameIndex = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(progressFactor * FRAME_COUNT)))
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
    <div ref={containerRef} className="relative h-[250vh] bg-[#09090b]">
      {/* Sticky Fullscreen Canvas & Motion Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Background 24fps Canvas Frame Player (True Fullscreen Cover, 0% Black Bars) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: imagesLoaded ? 1 : 0 }}
        />

        {/* Hero Overlay Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-12 pt-24 pb-10 flex flex-col justify-between h-full w-full pointer-events-none">
          {/* Top Left Availability Status Badge (High-Contrast Dark Glass Badge with White Text) */}
          <div className="flex items-center justify-between pointer-events-auto">
            <div className="px-4 py-2 rounded-full bg-[#09090b]/90 backdrop-blur-xl border border-white/20 text-white font-mono-tag text-xs font-bold tracking-wider uppercase flex items-center gap-3 shadow-2xl">
              <span className="h-2.5 w-2.5 rounded-full bg-[#81c784] animate-pulse shrink-0" />
              <span className="text-white">Available for product management roles</span>
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
                className="inline-block text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)]"
              >
                MAHABOOB
              </motion.span>
              <motion.span
                style={{ x: suhailX }}
                className="inline-block text-[#e58e39] drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)]"
              >
                SUHAIL
              </motion.span>
            </div>
            <p className="font-mono-tag text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-white mt-4 drop-shadow-lg bg-[#09090b]/80 backdrop-blur-md px-5 py-2 rounded-full inline-block border border-white/15">
              PRODUCT SUPPORT ANALYST & PRODUCT STRATEGIST
            </p>
          </motion.div>

          {/* Bottom Minimal Scroll Indicator */}
          <motion.div
            style={{ opacity: scrollIndicatorOpacity }}
            className="flex flex-col items-center justify-center text-center gap-1 font-mono-tag text-xs uppercase tracking-widest text-neutral-300 pointer-events-auto"
          >
            <span>SCROLL TO PLAY</span>
            <FaArrowDown size={10} className="text-[#e58e39] animate-bounce mt-1" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
