"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const caseStudies = [
  {
    title: "Ola Ride Retention Strategy",
    category: "Growth & Retention",
    image: "/images/case-studies/ola.jpg",
    description:
      "A growth-focused product strategy exploring habit formation, ride retention, and long-term engagement mechanics.",
    link: "/case-studies/ola.pdf",
    type: "PDF"
  },

  {
    title: "YouTube Product Strategy",
    category: "Product Strategy",
    image: "/images/case-studies/youtube.jpg",
    description:
      "Deep analysis of monetization, user segmentation, recommendation systems, and engagement opportunities.",
    link: "/case-studies/youtube.pdf",
    type: "PDF"
  },

  {
    title: "CRED Product Teardown",
    category: "Fintech Product",
    image: "/images/case-studies/cred.jpg",
    description:
      "A teardown focused on gamification, behavioral psychology, rewards systems, and retention mechanics.",
    link: "/case-studies/cred.pdf",
    type: "PDF"
  },

  {
    title: "WhatsApp Status JTBD",
    category: "User Research & JTBD",
    image: "/images/case-studies/whatsapp.jpg",
    description:
      "A Jobs-To-Be-Done analysis exploring user motivation, social behavior, and emotional engagement patterns.",
    link: "https://sneaky-hugger-90e.notion.site/User-Research-Case-Study-on-WhatsApp-Status-2005df8894ae80c7a444c33ba960ed35?source=copy_link",
    type: "Notion"
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Product Portfolio
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Case studies built around
            <br />
            product thinking.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            A collection of product strategy, growth, retention, and user research
            case studies focused on solving customer and business problems through
            structured product thinking.
          </p>

        </motion.div>

        {/* GRID */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">

  <img
    src={study.image}
    alt={study.title}
    className="h-56 w-full object-cover transition duration-500 hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

</div>
              <p className="text-sm text-indigo-400">
                {study.category}
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight">
                {study.title}
              </h2>

              <p className="mt-6 leading-7 text-zinc-400">
                {study.description}
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="rounded-full border border-zinc-700 px-4 py-2 text-xs uppercase tracking-wider text-zinc-400">
                  {study.type}
                </span>

                <Link
                  href={study.link}
                  target="_blank"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-105"
                >
                  View Case Study
                </Link>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </main>
  );
}