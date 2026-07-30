'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Image as ImageIcon, Camera } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { projects } from '@/lib/brand'

export default function GalleryPage() {
  const images = [
    { src: '/images/hero_building.png', title: 'Curved Facade Steel Design' },
    { src: '/images/about_collage_1.png', title: 'High-Rise Steel Framing' },
    { src: '/images/about_collage_2.png', title: 'Truss Structural Connection' },
    { src: '/images/project_zemen.png', title: 'Zemen Bank HQ Structure' },
    { src: '/images/project_stadium.png', title: 'Sports Stadium Roof Detailing' },
    { src: '/images/project_memorial.png', title: 'Commemorative Monument Concrete Design' },
  ]

  return (
    <main className="relative min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-[#111112] text-white">
        <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <ImageIcon className="w-4 h-4" />
            Project Gallery
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#D71920] font-heading uppercase leading-none mt-2">
            Engineering Gallery
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed mt-2 font-light">
            Blueprints, structural analysis screenshots, and construction site inspection photography.
          </p>
        </div>
      </section>

      {/* Grid of Images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group relative aspect-[4/3] bg-gray-900 border border-gray-100 overflow-hidden shadow-sm hover:shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-[#D71920] text-xs font-bold uppercase">
                  <Camera className="w-4 h-4" />
                  <span>Structural Detailing</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-2 uppercase tracking-tight leading-tight">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
