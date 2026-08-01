'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { aboutContent } from '@/lib/brand'

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Image Collage with Structural Layout */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[480px] aspect-[4/5] bg-gray-50">
              
              {/* Back Red Offset Line Box */}
              <div className="absolute inset-0 border border-[#D71920] -translate-x-6 translate-y-6 z-0"></div>

              {/* Main Structural Image */}
              <div className="absolute inset-0 z-10 overflow-hidden shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about_collage_1.png"
                  alt="Kenmos Structural Engineering design collage"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Front Floating Red Accent Box */}
              <div className="absolute -bottom-4 -left-4 w-20 h-16 bg-[#D71920] z-20 shadow-md"></div>
              
              {/* Floating Wireframe overlay image (top-right overlay) */}
              <div className="absolute -top-6 -right-6 w-36 h-36 border border-gray-200 z-20 bg-white/80 backdrop-blur-sm p-2 shadow-md hidden sm:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about_collage_2.png"
                  alt="Structural engineering schematic wireframe"
                  className="w-full h-full object-cover border border-gray-100"
                />
              </div>

            </div>
          </div>

          {/* Right Column: Copy & Presentation */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#D71920]">
                {aboutContent.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-black leading-tight">
                Building the Future with Precision <br className="hidden md:block" />
                <span className="text-[#D71920]">&amp; Integrity</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-sm md:text-base text-gray-600 leading-relaxed font-light">
              {aboutContent.paragraphs.map((p, i) => (
                <p key={i}>
                  {p}
                </p>
              ))}
            </div>

            <div className="pt-2">
              <motion.a
                whileHover={{ scale: 1.03, x: 5 }}
                whileTap={{ scale: 0.97 }}
                href="/about"
                className="group inline-flex items-center gap-3 border border-[#D71920] text-[#D71920] hover:bg-red-50 text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-4 transition-colors"
              >
                MORE ABOUT US
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
