"use client"

import { ReactNode, useEffect } from "react"
import Lenis from "lenis"
import { usePathname } from "next/navigation"

export function LenisProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      autoResize: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    // Recalculate scroll dimensions on window resize and route change
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize()
    })

    resizeObserver.observe(document.body)

    // Reset scroll on route change
    lenis.scrollTo(0, { immediate: true })

    return () => {
      cancelAnimationFrame(rafId)
      resizeObserver.disconnect()
      lenis.destroy()
    }
  }, [pathname])

  return <>{children}</>
}
