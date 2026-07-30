'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/lib/brand'

const Testimonials = () => {
  const items = [...testimonials]
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [items.length])

  const goTo = (index: number) => setActive((index + items.length) % items.length)

  const current = items[active]

  return (
    <section id="testimonials" className="relative py-20 md:py-32 overflow-hidden bg-[#F9FAFB] border-t border-b border-gray-100">
      {/* Decorative structural overlay lines */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#D71920] font-semibold mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-black">
            What Our Clients Think
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-4 leading-relaxed font-light">
            Real feedback from project directors, architects, and developers who work with Kenmos Engineering.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-3xl bg-white border border-gray-100 rounded-none p-8 md:p-14 text-center shadow-lg"
            >
              <Quote className="w-10 h-10 text-[#D71920] mx-auto mb-6" />

              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 text-red-500 fill-red-500" />
                ))}
              </div>

              <p className="text-base md:text-xl text-gray-800 italic leading-relaxed mb-8 font-light">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-none bg-[#D71920] flex items-center justify-center text-white font-bold text-lg mb-3">
                  {current.name.charAt(0)}
                </div>
                <div className="text-sm md:text-base font-bold text-gray-900">{current.name}</div>
                <div className="text-xs text-[#D71920] uppercase font-bold mt-1 tracking-wider">{current.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8 md:mt-12">
            <button
              onClick={() => goTo(active - 1)}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-none border border-gray-200 text-gray-700 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {items.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => goTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-1.5 transition-all duration-300 ${
                    index === active ? 'w-8 bg-[#D71920]' : 'w-3 bg-gray-300 hover:bg-[#D71920]/45'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(active + 1)}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-none border border-gray-200 text-gray-700 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
