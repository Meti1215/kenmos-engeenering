'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Landmark, Compass, ShieldAlert, Award, FileSpreadsheet, Eye } from 'lucide-react'

const WhyChooseUs = () => {
  const points = [
    {
      title: 'Cost & Value Optimization',
      description: 'Our primary design pillar. We optimize structural steel and concrete grades, reducing material cost while maintaining high safety factors.',
      icon: Landmark,
    },
    {
      title: '20+ Years Leadership',
      description: 'Our founder Kenmos Tesfaye and engineering leads bring over two decades of expert structural analysis and design coordination.',
      icon: Compass,
    },
    {
      title: 'Steel Structure Specialists',
      description: 'We are recognized leaders in Ethiopia for design and connection detailing of complex steel truss warehouses, stadiums, and factories.',
      icon: ShieldAlert,
    },
    {
      title: 'Rigorous Site Supervision',
      description: 'We perform strict inspections of steel fabrication, concrete pours, and reinforcement layouts to guarantee structure safety.',
      icon: Award,
    },
    {
      title: 'Advanced Engineering Analysis',
      description: 'We utilize state-of-the-art structural design and finite element modeling software to test wind, seismic, and static load performance.',
      icon: FileSpreadsheet,
    },
    {
      title: 'Proven Track Record',
      description: 'With over 800 projects designed and supervised since 2009, we have served clients ranging from commercial banks to stadiums.',
      icon: Eye,
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#D71920]">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-black mt-2 leading-tight">
            Structural Integrity Meets Cost Optimization
          </h2>
        </div>

        {/* Points Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {points.map((point) => (
            <motion.div
              key={point.title}
              variants={cardVariants}
              className="group bg-white p-8 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#D71920]/20 flex flex-col gap-4 relative overflow-hidden"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center bg-red-50 text-[#D71920]">
                <point.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-lg font-bold text-black mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  {point.description}
                </p>
              </div>

              {/* Left border highlight on hover */}
              <div className="absolute left-0 top-0 h-full w-0 bg-[#D71920] transition-all duration-300 group-hover:w-1"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default WhyChooseUs
