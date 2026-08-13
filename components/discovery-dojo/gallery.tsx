"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Lightbox } from "@/components/ui/lightbox"
import { galleryImages } from "@/lib/data"
import { FaExpand } from "react-icons/fa"

export function Gallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="py-20 md:py-28 relative border-t border-white/10 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-3 w-3 rounded-full bg-[#B7FF93]" />
              <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#B7FF93]">
                APPLICATION GALLERY
              </p>
            </div>
            <h2 className="heading-section text-white max-w-2xl">
              A LOOK INSIDE DISCOVERY DOJO
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm md:text-base leading-relaxed">
            Click any screenshot to open the interactive full-screen gallery viewer.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => {
                setCurrentIndex(i)
                setIsOpen(true)
              }}
              className="group p-4 rounded-2xl bg-[#141418] border border-white/10 hover:border-[#FF905F] transition-all text-left cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 bg-black/60 shadow-inner">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <span className="p-3 rounded-full bg-[#FF905F] text-[#0c0c0e] font-bold">
                    <FaExpand size={14} />
                  </span>
                </div>
              </div>

              <div className="px-2">
                <p className="text-xs font-mono-tag text-neutral-300 group-hover:text-white transition-colors">
                  {img.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        images={galleryImages}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onNavigate={setCurrentIndex}
      />
    </section>
  )
}
