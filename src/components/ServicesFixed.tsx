'use client'

import React from 'react'
import { Building2, ShieldCheck, Compass, HardHat, FileText, Users } from 'lucide-react'
import { services } from '@/lib/brand'

const ServicesFixed = () => {
  const iconMap = {
    Building2: Building2,
    ShieldCheck: ShieldCheck,
    Briefcase: Compass,
    Activity: HardHat,
    FileText: FileText,
    Users: Users,
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#D71920]">
            Our Engineering Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-black mt-2">
            Consultancy Services
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Building2
            return (
              <div key={service.id} className="border border-gray-100 p-8 flex flex-col gap-4 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-red-50 text-[#D71920] flex items-center justify-center">
                  <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-black">{service.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default ServicesFixed
