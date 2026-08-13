"use client"

import { useState, useEffect } from "react"

export function useScroll() {
  const [scrollData, setScrollData] = useState({
    scrollY: 0,
    scrollDirection: "up" as "up" | "down",
  })

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const direction = currentScrollY > lastScrollY ? "down" : "up"
      setScrollData({
        scrollY: currentScrollY,
        scrollDirection: direction,
      })
      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollData
}
