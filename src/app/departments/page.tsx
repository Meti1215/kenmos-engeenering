'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Compass, ShieldCheck, HardHat, FileText, Users } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { services } from '@/lib/brand'

export default function DepartmentsPage() {
  const iconMap = {
    Building2: Building2,
    ShieldCheck: ShieldCheck,
    Briefcase: Compass,
    Activity: HardHat,
    FileText: FileText,
    Users: Users,
  }

  return (
    <main className="relative min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-[#111112] text-white">
        <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            Our Departments
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#D71920] font-heading uppercase leading-none mt-2">
            Engineering Areas
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed mt-2 font-light">
            Specialized engineering teams delivering analysis, structural detailing, material optimization, and site supervision.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((dept) => {
            const IconComponent = iconMap[dept.icon as keyof typeof iconMap] || Building2
            return (
              <div key={dept.id} className="border border-gray-100 p-8 flex flex-col gap-4 bg-white hover:shadow-lg hover:border-red-500/20 transition-all duration-300">
                <div className="w-12 h-12 bg-red-50 text-[#D71920] flex items-center justify-center">
                  <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-black">{dept.title}</h3>
                <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">{dept.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  )
}
