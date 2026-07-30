'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Folder, MapPin, Eye } from 'lucide-react'
import { projects } from '@/lib/brand'

const ProjectsShowcase = () => {
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Commercial', 'Institutional', 'Hospitality', 'Specialized']

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 md:py-32 bg-[#F9FAFB] border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#D71920]">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-black mt-2 leading-tight">
            Featured Engineering Projects
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 border ${
                filter === cat 
                  ? 'bg-[#D71920] border-[#D71920] text-white shadow-sm' 
                  : 'bg-white border-gray-200 text-gray-600 hover:border-[#D71920] hover:text-[#D71920]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[360px] md:h-[420px] overflow-hidden bg-gray-900 border border-gray-100 shadow-md"
              >
                {/* Project Image */}
                <div className="absolute inset-0 z-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80"
                  />
                </div>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-[1] transition-opacity duration-300 group-hover:opacity-95"></div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-sm text-black text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 shadow-sm">
                  {project.category}
                </div>

                {/* Content Box */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10 text-white flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-[#D71920] text-xs font-bold uppercase tracking-wider">
                    <Folder className="w-3.5 h-3.5" />
                    <span>Kenmos Project Profile</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-black font-heading tracking-tight leading-tight group-hover:text-[#D71920] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-gray-400 text-xs mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D71920]" />
                    <span>Addis Ababa, Ethiopia</span>
                  </div>
                </div>

                {/* Hover overlay icons */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <div className="w-12 h-12 bg-[#D71920] text-white flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

export default ProjectsShowcase
