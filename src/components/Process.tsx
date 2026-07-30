'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { processSteps } from '@/lib/brand'

const Process = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="process" className="py-20 md:py-32 bg-[#F9FAFB] border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#D71920]">
            Our Work Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-black mt-2 leading-tight">
            How We Deliver Structural Excellence
          </h2>
        </div>

        {/* Timeline Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative"
        >
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gray-200 z-0"></div>

          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              variants={stepVariants}
              className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left group"
            >
              {/* Step Circle Counter */}
              <div className="w-24 h-24 rounded-none bg-white border border-gray-100 shadow-sm flex items-center justify-center relative mb-6 group-hover:border-[#D71920] group-hover:shadow-md transition-all duration-300">
                <span className="text-3xl font-black font-heading text-gray-300 group-hover:text-[#D71920] transition-colors">
                  {step.step}
                </span>
                
                {/* Micro-dot Indicator */}
                <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-2 border-gray-300 rounded-full group-hover:border-[#D71920] group-hover:bg-[#D71920] transition-colors duration-300"></div>
              </div>

              {/* Title & Description */}
              <div className="max-w-[280px]">
                <h3 className="text-lg font-bold text-black mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Process
