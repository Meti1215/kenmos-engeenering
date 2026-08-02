'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Building2 } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { projects } from '@/lib/brand'

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-[#111112] text-white">
        <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            Our Works
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#D71920] font-heading uppercase leading-none mt-2">
            Engineering Projects
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed mt-2 font-light">
            A selective showcase of institutional grandstands, mixed-use headquarters, and specialized structures designed and supervised by Kenmos Engineering.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-950">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <span className="inline-flex items-center rounded-none bg-[#D71920]/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-white shadow-lg">
                      {p.category}
                    </span>
                    <h2 className="mt-3 max-w-xl text-2xl font-black font-heading uppercase tracking-tight leading-tight text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.85)]">
                      {p.title}
                    </h2>
                  </div>
                </div>

                {/* Description */}
                <div className="p-8">
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-8 pt-0 flex justify-start">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D71920] hover:text-red-700 transition-colors"
                >
                  Discuss Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}