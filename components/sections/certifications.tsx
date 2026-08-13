"use client"

import { motion } from "framer-motion"
import { certifications } from "@/lib/data"
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa"

export function CertificationsSection() {
  return (
    <section className="py-24 md:py-32 relative border-t border-white/10 studio-grid-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-3 w-3 rounded-full bg-[#f4a261]" />
              <p className="font-mono-tag text-xs md:text-sm font-bold uppercase tracking-widest text-[#f4a261]">
                CREDENTIALS & UP-SKILLING
              </p>
            </div>
            <h2 className="heading-section text-white max-w-2xl">
              CERTIFICATIONS & CONTINUOUS LEARNING
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm md:text-base leading-relaxed">
            Formally certified in Product Management, Agile Scrum Master, AI for PMs, and Healthcare Compliance.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group p-6 rounded-2xl bg-[#121215] border border-white/10 hover:border-[#f4a261]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono-tag font-bold uppercase text-[#f4a261]">
                    {cert.org}
                  </span>
                  <FaExternalLinkAlt size={12} className="text-neutral-500 group-hover:text-[#f4a261] transition-colors" />
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#f4a261] transition-colors leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-tag text-neutral-400">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <FaCertificate className="text-[#f4a261]" size={12} /> Verified
                </span>
                <span>{cert.year}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
