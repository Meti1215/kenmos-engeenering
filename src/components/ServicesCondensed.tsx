'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building2, ShieldCheck, Briefcase, Activity, FileText, Users, ArrowRight } from 'lucide-react'
import { services } from '@/lib/brand'

const iconMap = {
  Building2: Building2,
  ShieldCheck: ShieldCheck,
  Briefcase: Briefcase,
  Activity: Activity,
  FileText: FileText,
  Users: Users,
}

const Services = () => {
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
    <section id="services" className="py-20 md:py-32 bg-[#F9FAFB] border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#D71920]">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-black mt-2 leading-tight">
            Comprehensive Structural Engineering Solutions
          </h2>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-5"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Building2
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group bg-white p-5 md:p-6 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-red-500/20 hover:-translate-y-2 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-50 text-[#D71920] group-hover:bg-[#D71920] group-hover:text-white transition-colors duration-300 mb-5">
                    <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-base md:text-lg font-bold text-black mb-3 group-hover:text-[#D71920] transition-colors leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/services"
            className="group inline-flex items-center gap-3 bg-[#D71920] hover:bg-[#be1218] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 transition-colors"
          >
            VIEW ALL SERVICES
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

      </div>
    </section>
  )
}

export default Services
