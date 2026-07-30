'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { industries } from '@/lib/brand'

const Industries = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="industries" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#D71920]">
            Sectors We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-black mt-2 leading-tight">
            Engineering Expertise Across Diverse Industries
          </h2>
        </div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.id}
              variants={cardVariants}
              className="group relative h-[360px] md:h-[400px] overflow-hidden flex flex-col justify-end p-6 md:p-8 cursor-pointer shadow-md"
            >
              {/* Background Image with Hover Zoom */}
              <div className="absolute inset-0 z-0 bg-gray-950">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-75"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-[1] transition-opacity duration-300 group-hover:opacity-95"></div>

              {/* Content Box */}
              <div className="relative z-10 text-white flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-black font-heading tracking-tight group-hover:text-[#D71920] transition-colors leading-tight">
                  {ind.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light line-clamp-3">
                  {ind.description}
                </p>
              </div>

              {/* Red Line Accent on card bottom */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#D71920] transition-all duration-300 group-hover:w-full z-20"></div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Industries
