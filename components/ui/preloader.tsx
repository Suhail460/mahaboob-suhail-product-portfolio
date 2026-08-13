"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0c0c0e] text-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="h-3 w-3 rounded-full bg-[#FF905F] animate-pulse" />
            <h1 className="font-mono-tag text-2xl md:text-4xl font-bold tracking-widest uppercase">
              // M. MAHABOOB SUHAIL
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-mono-tag text-xs tracking-widest text-neutral-400 mt-4 uppercase"
          >
            Product Support Analyst & Product Strategy Portfolio
          </motion.p>

          <div className="w-48 h-[2px] bg-neutral-800 mt-8 relative overflow-hidden rounded-full">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full bg-[#FF905F] w-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
