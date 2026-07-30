'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { brand } from '@/lib/brand'

const Hero = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-start overflow-hidden bg-black pt-20"
    >
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          className="w-full h-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero_building.png"
            alt="Kenmos Engineering structural design"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Dark overlay matching the design reference */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35 z-[1]"></div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center py-12 md:py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-6 md:gap-8"
          >
            {/* Tagline tag */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#D71920]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-white">
                STRUCTURAL EXCELLENCE. LASTING IMPACT.
              </span>
            </div>

            {/* High Impact Heading */}
            <h1 className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl font-black font-heading leading-[1.05] tracking-tight uppercase">
              <span className="block text-white">ENGINEERING</span>
              <span className="block text-[#D71920] my-1">STRONGER</span>
              <span className="block text-white">FOUNDATIONS</span>
            </h1>

            {/* Subheading paragraph */}
            <p className="text-sm sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
              Kenmos Engineering delivers innovative, sustainable, and cost-optimized structural engineering solutions that shape the future.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleScroll('services')}
                className="group inline-flex items-center gap-3 bg-[#D71920] hover:bg-[#be1218] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-4 transition-colors"
              >
                OUR SERVICES
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, x: 5 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleScroll('projects')}
                className="group inline-flex items-center gap-3 text-white text-xs sm:text-sm font-bold uppercase tracking-wider py-4"
              >
                VIEW PROJECTS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D71920]" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator overlay */}
      <div className="hidden md:block absolute bottom-24 left-8 z-10 text-white/50 text-xs font-bold uppercase tracking-widest leading-none">
        Kenmos Structural Engineering
      </div>
    </section>
  )
}

export default Hero
