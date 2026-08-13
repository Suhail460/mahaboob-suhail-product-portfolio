"use client"

import { useEffect, Dispatch, SetStateAction } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa"

interface LightboxImage {
  src: string
  alt: string
  caption?: string
}

interface LightboxProps {
  images: LightboxImage[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate?: Dispatch<SetStateAction<number>>
}

export function Lightbox({ images, currentIndex, isOpen, onClose, onNavigate }: LightboxProps) {
  const currentImage = images[currentIndex] || images[0]

  const handlePrev = () => {
    if (onNavigate && images.length > 0) {
      onNavigate((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }
  }

  const handleNext = () => {
    if (onNavigate && images.length > 0) {
      onNavigate((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
    }
    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose, currentIndex])

  if (!currentImage) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-md"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer z-50"
            aria-label="Close Lightbox"
          >
            <FaTimes size={20} />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrev()
                }}
                className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer z-50"
                aria-label="Previous Image"
              >
                <FaChevronLeft size={18} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
                className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer z-50"
                aria-label="Next Image"
              >
                <FaChevronRight size={18} />
              </button>
            </>
          )}

          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>
            {currentImage.caption && (
              <p className="mt-4 text-sm font-mono-tag text-neutral-300 text-center bg-black/60 px-4 py-2 rounded-full border border-white/10">
                {currentImage.caption} ({currentIndex + 1}/{images.length})
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
