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
    <div ref={ref} className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 md:-mt-24 lg:-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white border border-gray-200 shadow-2xl py-8 md:py-12 lg:py-14 px-6 md:px-10 lg:px-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 lg:gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((stat, i) => (
            <div 
              key={stat.title} 
              className={`flex flex-col items-center text-center p-3 md:p-4 lg:p-5 ${
                i >= 2 ? 'pt-6 md:pt-4 lg:pt-5' : ''
              }`}
            >
              <div className="w-14 h-14 flex items-center justify-center bg-red-50 text-[#D71920] mb-4">
                <stat.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-black leading-none flex items-center justify-center">
                {inView ? (
                  <CountUp start={0} end={stat.value} duration={2.5} />
                ) : (
                  <span>0</span>
                )}
                <span className="text-[#D71920]">{stat.suffix}</span>
              </div>
              <div className="text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-wider text-gray-600 mt-2">
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
