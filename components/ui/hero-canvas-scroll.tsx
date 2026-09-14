"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion"
import { FaArrowDown } from "react-icons/fa"

const FRAME_COUNT = 100
const PRIORITY_FRAME_BATCH = 15

function getFrameUrl(index: number) {
  const paddedIndex = String(index + 1).padStart(4, "0")
  return `/frames/webp/frame_${paddedIndex}.webp`
}

export function HeroCanvasScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<(HTMLImageElement | null)[]>([])
  const animFrameIdRef = useRef<number | null>(null)
  const targetFrameRef = useRef<number>(0)
  const currentRenderedFrameRef = useRef<number>(0)
  const lastDrawnFrameRef = useRef<number>(-1)
  const dimensionsRef = useRef<{ w: number; h: number; dpr: number }>({ w: 0, h: 0, dpr: 1 })
  const shouldReduceMotion = useReducedMotion()

  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Monotonic state: Once progress reaches 0.60 (60% point), nameExited triggers and locks
  const [nameExited, setNameExited] = useState(false)

  // Layer 1 Track: Track scroll through outer sequence track (300vh height = 200vh scroll travel)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Find the closest loaded frame to avoid any blank flashes during rapid scroll
  const getNearestLoadedFrame = useCallback((target: number): HTMLImageElement | null => {
    const images = imagesRef.current
    if (images[target]?.complete && images[target]?.naturalWidth) {
      return images[target]!
    }
    // Search outwards from target frame for nearest loaded frame
    for (let offset = 1; offset < FRAME_COUNT; offset++) {
      const prev = target - offset
      if (prev >= 0 && images[prev]?.complete && images[prev]?.naturalWidth) {
        return images[prev]!
      }
      const next = target + offset
      if (next < FRAME_COUNT && images[next]?.complete && images[next]?.naturalWidth) {
        return images[next]!
      }
    }
    return images[0]?.complete ? images[0] : null
  }, [])

  // Sharp, crystal clear retina canvas drawing function
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const img = getNearestLoadedFrame(frameIndex)
    if (!img || !img.complete || img.naturalWidth === 0) return

    const dpr = Math.max(window.devicePixelRatio || 1, 2)
    const displayWidth = window.innerWidth
    const displayHeight = window.innerHeight

    // Only update canvas buffer dimensions when viewport or dpr actually changes
    const dim = dimensionsRef.current
    if (dim.w !== displayWidth || dim.h !== displayHeight || dim.dpr !== dpr) {
      dim.w = displayWidth
      dim.h = displayHeight
      dim.dpr = dpr
      canvas.width = displayWidth * dpr
      canvas.height = displayHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = "high"
    }

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
    lastDrawnFrameRef.current = frameIndex
  }, [getNearestLoadedFrame])

  // Instant Tiered Preloading:
  // 1. Frame 0 loads FIRST (only 25KB WebP, ~15ms). Canvas appears INSTANTLY.
  // 2. Initial batch (0-15) loads immediately for instant scrolling.
  // 3. Remaining frames stream in chunks in the background without blocking main thread.
  useEffect(() => {
    const loadedImages: (HTMLImageElement | null)[] = new Array(FRAME_COUNT).fill(null)
    imagesRef.current = loadedImages

    // Instant Load Frame 0 (First Viewport)
    const firstImg = new Image()
    firstImg.decoding = "async"
    firstImg.src = getFrameUrl(0)
    firstImg.onload = () => {
      loadedImages[0] = firstImg
      setImagesLoaded(true)
      requestAnimationFrame(() => drawFrame(0))
    }

    // Tier 1: Priority batch for early scroll travel
    for (let i = 1; i < PRIORITY_FRAME_BATCH; i++) {
      const img = new Image()
      img.decoding = "async"
      img.src = getFrameUrl(i)
      img.onload = () => {
        loadedImages[i] = img
      }
      loadedImages[i] = img
    }

    // Tier 2: Stream remaining frames in chunks
    let chunkIndex = PRIORITY_FRAME_BATCH
    const CHUNK_SIZE = 15

    const loadNextChunk = () => {
      if (chunkIndex >= FRAME_COUNT) return
      const end = Math.min(chunkIndex + CHUNK_SIZE, FRAME_COUNT)
      for (let i = chunkIndex; i < end; i++) {
        const img = new Image()
        img.decoding = "async"
        img.src = getFrameUrl(i)
        img.onload = () => {
          loadedImages[i] = img
        }
      }
      chunkIndex = end
      if (chunkIndex < FRAME_COUNT) {
        if ("requestIdleCallback" in window) {
          window.requestIdleCallback(loadNextChunk, { timeout: 100 })
        } else {
          setTimeout(loadNextChunk, 20)
        }
      }
    }

    const streamTimer = setTimeout(loadNextChunk, 50)

    return () => clearTimeout(streamTimer)
  }, [drawFrame])

  // Scroll listener: Monotonic exit trigger at 60% progress (EXIT_START = 0.60, EXIT_END = 0.66)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (shouldReduceMotion) return

    // Monotonic trigger: Once progress reaches 0.60 (~60% point of hero sequence), nameExited locks to true
    if (latest >= 0.60 && !nameExited) {
      setNameExited(true)
    } else if (latest <= 0.005 && nameExited) {
      // Reset ONLY when user scrolls all the way back to absolute top of page (0.5%)
      setNameExited(false)
    }

    const clampedProgress = Math.min(1, Math.max(0, latest))
    const targetFrame = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(clampedProgress * FRAME_COUNT)))

    targetFrameRef.current = targetFrame

    if (animFrameIdRef.current === null) {
      const renderLoop = () => {
        const diff = targetFrameRef.current - currentRenderedFrameRef.current
        if (Math.abs(diff) < 0.2) {
          currentRenderedFrameRef.current = targetFrameRef.current
          drawFrame(Math.round(currentRenderedFrameRef.current))
          animFrameIdRef.current = null
        } else {
          currentRenderedFrameRef.current += diff * 0.45 // Snappy 0.45 lerp factor for butter-smooth response
          drawFrame(Math.round(currentRenderedFrameRef.current))
          animFrameIdRef.current = requestAnimationFrame(renderLoop)
        }
      }
      animFrameIdRef.current = requestAnimationFrame(renderLoop)
    }
  })

  // Handle window resize with cached dimension reset
  useEffect(() => {
    const handleResize = () => {
      dimensionsRef.current = { w: 0, h: 0, dpr: 1 } // Invalidate cached dimensions
      drawFrame(Math.round(currentRenderedFrameRef.current))
    }
    window.addEventListener("resize", handleResize, { passive: true })
    return () => window.removeEventListener("resize", handleResize)
  }, [drawFrame])

  return (
    /* LAYER 1: Outer Sequence Scroll Track - Provides 300vh scroll distance for 100-frame sequence */
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full bg-[#09090b]"
      style={{ height: "300vh" }}
    >
      {/* LAYER 2: Sticky Hero Viewport - Pinned 100vh viewport */}
      <div className="sticky top-0 h-screen min-h-[100dvh] w-full overflow-hidden bg-[#09090b]">
        {/* Retina 2x Fullscreen Canvas Player */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none"
          style={{ opacity: imagesLoaded ? 1 : 0 }}
        />

        {/* Hero Content Overlay Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-12 pt-28 pb-10 flex flex-col justify-between h-full w-full pointer-events-none">
          {/* Top Left Availability Status Badge - KEPT 100% INTACT & VISIBLE CONTINUOUSLY */}
          <div className="flex items-center justify-between pointer-events-auto">
            <div className="px-4 py-2 rounded-full bg-[#09090b]/90 backdrop-blur-xl border border-white/20 text-white font-mono-tag text-xs font-bold tracking-wider uppercase flex items-center gap-3 shadow-2xl">
              <span className="h-2.5 w-2.5 rounded-full bg-[#81c784] animate-pulse shrink-0" />
              <span className="text-white">Available for product management roles</span>
            </div>
          </div>

          {/* Center Editorial Typography Layer */}
          <div className="my-auto w-full select-none">
            {/* Name Container: Responsive font scaling & gap prevents 'L' clipping, Luxury Polar White & Sunburst Gold */}
            <div
              className="w-full flex items-center justify-center gap-3 sm:gap-6 lg:gap-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight leading-none py-2"
              style={{
                visibility: nameExited ? "hidden" : "visible",
                pointerEvents: nameExited ? "none" : "auto",
                transition: nameExited ? "visibility 0s linear 0.4s" : "none",
              }}
            >
              {/* MAHABOOB: Polar White, moves LEFT (-150px) & fades out */}
              <motion.span
                initial={{ x: 0, opacity: 1 }}
                animate={nameExited ? { x: -150, opacity: 0 } : { x: 0, opacity: 1 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-white shrink-0"
              >
                MAHABOOB
              </motion.span>

              {/* SUHAIL: Premium Sunburst Platinum Gold, moves RIGHT (+150px) & fades out */}
              <motion.span
                initial={{ x: 0, opacity: 1 }}
                animate={nameExited ? { x: 150, opacity: 0 } : { x: 0, opacity: 1 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-[#fcd34d] shrink-0"
              >
                SUHAIL
              </motion.span>
            </div>

            {/* Supporting Role Tile: UI/UX Pro Max Glass Pill Badge */}
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={nameExited ? { y: -20, opacity: 0 } : { y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-center pointer-events-auto"
              style={{
                visibility: nameExited ? "hidden" : "visible",
                pointerEvents: nameExited ? "none" : "auto",
              }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#09090b]/85 backdrop-blur-xl border border-white/20 text-white shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                <span className="h-2 w-2 rounded-full bg-[#fcd34d] animate-pulse shrink-0" />
                <span className="font-mono-tag text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white">
                  PRODUCT SUPPORT ANALYST <span className="text-[#fcd34d] font-normal">//</span> PRODUCT STRATEGIST
                </span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Minimal Scroll Indicator */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={nameExited ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center text-center gap-1 font-mono-tag text-xs uppercase tracking-widest text-neutral-300 pointer-events-auto"
          >
            <span>SCROLL TO EXPLORE</span>
            <FaArrowDown size={10} className="text-[#fcd34d] animate-bounce mt-1" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
