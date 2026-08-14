"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from "framer-motion"
import { FaArrowDown } from "react-icons/fa"

const FRAME_COUNT = 100
const INITIAL_PRELOAD_COUNT = 25

function getFrameUrl(index: number) {
  const paddedIndex = String(index + 1).padStart(4, "0")
  return `/frames/video_frames_24fps/frame_${paddedIndex}.png`
}

export function HeroCanvasScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const animFrameIdRef = useRef<number | null>(null)
  const targetFrameRef = useRef<number>(0)
  const currentRenderedFrameRef = useRef<number>(0)
  const shouldReduceMotion = useReducedMotion()

  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)

  // Layer 1 Track: Track scroll through outer sequence track (300vh height = 200vh scroll travel)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Kinetic Split Name Transforms: 'MAHABOOB' goes LEFT, 'SUHAIL' goes RIGHT, fading over 2/3 of frames (0 to 0.67 scroll)
  const mahaboobX = useTransform(scrollYProgress, [0, 0.67], ["0%", "-75%"])
  const suhailX = useTransform(scrollYProgress, [0, 0.67], ["0%", "75%"])
  const nameOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Sharp, crystal clear retina canvas drawing function
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const img = imagesRef.current[frameIndex]
    if (!img || !img.complete || img.naturalWidth === 0) return

    const dpr = Math.max(window.devicePixelRatio || 1, 2) // Retina 2x rendering for ultra-sharp frames
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

  // Two-tier async image preloading for smooth frame decoding
  useEffect(() => {
    let loadedCount = 0
    const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT)

    // Tier 1: Preload initial 25 frames for immediate playback
    for (let i = 0; i < INITIAL_PRELOAD_COUNT; i++) {
      const img = new Image()
      img.decoding = "async"
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
    const timer = setTimeout(() => {
      for (let i = INITIAL_PRELOAD_COUNT; i < FRAME_COUNT; i++) {
        const img = new Image()
        img.decoding = "async"
        img.src = getFrameUrl(i)
        img.onload = () => {
          loadedCount++
          setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100))
        }
        loadedImages[i] = img
      }
    }, 40)

    imagesRef.current = loadedImages
    return () => clearTimeout(timer)
  }, [])

  // Smooth lerp frame interpolation loop for 60fps buttery scroll playback
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (shouldReduceMotion) return

    const clampedProgress = Math.min(1, Math.max(0, latest))
    const targetFrame = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(clampedProgress * FRAME_COUNT)))

    targetFrameRef.current = targetFrame

    if (animFrameIdRef.current === null) {
      const renderLoop = () => {
        const diff = targetFrameRef.current - currentRenderedFrameRef.current
        if (Math.abs(diff) < 0.3) {
          currentRenderedFrameRef.current = targetFrameRef.current
          drawFrame(currentRenderedFrameRef.current)
          animFrameIdRef.current = null
        } else {
          currentRenderedFrameRef.current += diff * 0.35
          drawFrame(Math.round(currentRenderedFrameRef.current))
          animFrameIdRef.current = requestAnimationFrame(renderLoop)
        }
      }
      animFrameIdRef.current = requestAnimationFrame(renderLoop)
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
          {/* Top Left Availability Status Badge - KEPT INTACT AND VISIBLE CONTINUOUSLY */}
          <div className="flex items-center justify-between pointer-events-auto">
            <div className="px-4 py-2 rounded-full bg-[#09090b]/90 backdrop-blur-xl border border-white/20 text-white font-mono-tag text-xs font-bold tracking-wider uppercase flex items-center gap-3 shadow-2xl">
              <span className="h-2.5 w-2.5 rounded-full bg-[#81c784] animate-pulse shrink-0" />
              <span className="text-white">Available for product management roles</span>
            </div>
          </div>

          {/* Center Kinetic Splitting Name: "MAHABOOB" moves LEFT, "SUHAIL" moves RIGHT & both fade out over 2/3 of frames */}
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
              PRODUCT SUPPORT ANALYST &amp; PRODUCT STRATEGIST
            </p>
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
