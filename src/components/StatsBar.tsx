'use client'

import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { Building2, Ruler, HardHat, Award } from 'lucide-react'

const StatsBar = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      icon: Building2,
      value: 15,
      suffix: '+',
      title: 'YEARS OF EXPERIENCE',
    },
    {
      icon: Ruler,
      value: 800,
      suffix: '+',
      title: 'PROJECTS COMPLETED',
    },
    {
      icon: HardHat,
      value: 20,
      suffix: '+',
      title: 'EXPERT ENGINEERS',
    },
    {
      icon: Award,
      value: 1,
      suffix: 'B+',
      title: 'BIRR PROJECT VALUE HANDLED',
    },
  ]

  return (
    <div ref={ref} className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white border border-gray-100 shadow-xl py-8 md:py-10 px-6 md:px-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <div 
              key={stat.title} 
              className={`flex flex-col items-center text-center p-2 md:p-4 ${
                i >= 2 ? 'pt-6 md:pt-4' : ''
              }`}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-red-50 text-[#D71920] mb-3">
                <stat.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-black leading-none flex items-center justify-center">
                {inView ? (
                  <CountUp start={0} end={stat.value} duration={2.5} />
                ) : (
                  <span>0</span>
                )}
                <span className="text-[#D71920]">{stat.suffix}</span>
              </div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500 mt-2">
                {stat.title}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default StatsBar
