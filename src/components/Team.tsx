'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HardHat, Compass, Briefcase, Mail } from 'lucide-react'
import { teamMembers } from '@/lib/brand'

const Team = () => {
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
    <section id="careers" className="py-20 md:py-32 bg-[#F9FAFB] border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#D71920]">
            Our Experts
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-black mt-2 leading-tight">
            Meet the Structural Engineering Team
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto mt-4 leading-relaxed font-light">
            Dedicated professionals applying advanced analysis, code compliance, and structural optimization to shape secure foundations.
          </p>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              className="group bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#D71920]/20 flex flex-col h-full"
            >
              {/* Member Photo Container */}
              <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Visual Hardhat icon overlay */}
                <div className="absolute top-4 right-4 bg-[#D71920] text-white p-2.5 shadow-md">
                  <HardHat className="w-4 h-4" />
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black group-hover:text-[#D71920] transition-colors leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#D71920] mt-1.5">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500 mt-4 leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>

                {/* Footer contact placeholder */}
                <div className="pt-4 border-t border-gray-100 flex items-center gap-3 text-gray-400">
                  <Mail className="w-4 h-4 hover:text-[#D71920] cursor-pointer transition-colors" />
                  <span className="text-xs">Addis Ababa Office</span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Team
