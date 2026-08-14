"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from "framer-motion"
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
  const shouldReduceMotion = useReducedMotion()

  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0)

  // Layer 1 Track: Track scroll through outer sequence track (300vh height = 200vh scroll travel)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Kinetic Split Name Transforms using full viewport width (vw) so text moves 100% off-screen
  const mahaboobX = useTransform(scrollYProgress, [0, 0.12], ["0vw", "-100vw"])
  const suhailX = useTransform(scrollYProgress, [0, 0.12], ["0vw", "100vw"])
  const nameOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])

  // High-End Role Badge: Fades out rapidly [0 .. 0.08] with smooth downward float [0px .. 20px]
  const roleOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])
  const roleY = useTransform(scrollYProgress, [0, 0.08], [0, 20])

  const statusBadgeOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])

  // Sharp, crystal clear canvas drawing function (True Fullscreen Cover, 0% black bars)
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

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = "high"

    // True Object-Cover fill logic (Zero black bars top, bottom, left or right)
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

  // Two-tier image preloading (20 initial frames for instant load, remaining 80 background stream)
  useEffect(() => {
    let loadedCount = 0
    const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT)

    // Tier 1: Preload initial 20 frames for immediate display
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
    const timer = setTimeout(() => {
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
    return () => clearTimeout(timer)
  }, [])

  // Map scroll progress strictly to frame index: 0 -> frame 0, 1 -> frame 99 (final frame)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (shouldReduceMotion) return

    // Clamp progress between 0 and 1, map to exact frame index [0 .. FRAME_COUNT - 1]
    const clampedProgress = Math.min(1, Math.max(0, latest))
    const frameIndex = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(clampedProgress * FRAME_COUNT)))

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
    /* LAYER 1: Outer Sequence Scroll Track - Provides 300vh scroll distance for 100-frame sequence */
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full bg-[#09090b]"
      style={{ height: "300vh" }}
    >
      {/* LAYER 2: Sticky Hero Viewport - Remains 100% viewport size (100vh / 100dvh) pinned at top:0 */}
      <div className="sticky top-0 h-screen min-h-[100dvh] w-full overflow-hidden bg-[#09090b]">
        {/* Background 24fps Canvas Frame Player (True Fullscreen Cover, 0% Black Bars) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none"
          style={{ opacity: imagesLoaded ? 1 : 0 }}
        />

        {/* Hero Content Overlay Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-12 pt-28 pb-10 flex flex-col justify-between h-full w-full pointer-events-none">
          {/* Top Left Availability Status Badge */}
          <motion.div
            style={{ opacity: statusBadgeOpacity }}
            className="flex items-center justify-between pointer-events-auto"
          >
            <div className="px-4 py-2 rounded-full bg-[#09090b]/90 backdrop-blur-xl border border-white/20 text-white font-mono-tag text-xs font-bold tracking-wider uppercase flex items-center gap-3 shadow-2xl">
              <span className="h-2.5 w-2.5 rounded-full bg-[#81c784] animate-pulse shrink-0" />
              <span className="text-white">Available for product management roles</span>
            </div>
          </motion.div>

          {/* Center Kinetic Splitting Name & High-End Role Badge */}
          <motion.div
            style={{ opacity: nameOpacity }}
            className="my-auto text-center w-full select-none overflow-hidden py-4"
          >
            <div className="flex items-center justify-center gap-4 sm:gap-6 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none py-2">
              <motion.span
                style={{ x: mahaboobX }}
                className="inline-block text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)] whitespace-nowrap"
              >
                MAHABOOB
              </motion.span>
              <motion.span
                style={{ x: suhailX }}
                className="inline-block text-[#e58e39] drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)] whitespace-nowrap"
              >
                SUHAIL
              </motion.span>
            </div>

            {/* Premium UI/UX Pro Max Glass Pill Badge */}
            <motion.div
              style={{ opacity: roleOpacity, y: roleY }}
              className="mt-6 inline-block pointer-events-auto"
            >
              <div className="px-6 py-2.5 rounded-full bg-[#09090b]/85 backdrop-blur-2xl border border-[#e58e39]/40 shadow-[0_10px_35px_rgba(0,0,0,0.85)] flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#e58e39] animate-pulse shrink-0" />
                <span className="font-mono-tag text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white">
                  PRODUCT SUPPORT ANALYST <span className="text-[#e58e39] font-normal">&amp;</span> PRODUCT STRATEGIST
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Minimal Scroll Indicator */}
          <motion.div
            style={{ opacity: scrollIndicatorOpacity }}
            className="flex flex-col items-center justify-center text-center gap-1 font-mono-tag text-xs uppercase tracking-widest text-neutral-300 pointer-events-auto"
          >
            <span>SCROLL TO EXPLORE</span>
            <FaArrowDown size={10} className="text-[#e58e39] animate-bounce mt-1" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
