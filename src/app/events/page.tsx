'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Award, Building2 } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { brand } from '@/lib/brand'

export default function EventsPage() {
  const events = [
    {
      title: 'Structural Steel Detailing Workshop',
      date: 'June 2026',
      description: 'Host and present node connection designs and structural detailing workflows to junior engineers.',
    },
    {
      title: 'Value Engineering Seminar',
      date: 'April 2026',
      description: 'Review structural model optimization methodologies and steel saving ratios with architectural partners.',
    },
    {
      title: 'Site Safety & Supervision Standards',
      date: 'February 2026',
      description: 'Internal workshops reviewing concrete cast schedules and reinforcing bar layout audit lists.',
    },
  ]

  return (
    <main className="relative min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-[#111112] text-white">
        <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            Events & Seminars
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#D71920] font-heading uppercase leading-none mt-2">
            Technical Events
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed mt-2 font-light">
            Reviewing structural engineering workshops, code standards, and design seminars hosted by Kenmos.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {events.map((event) => (
            <div key={event.title} className="border border-gray-100 p-8 flex flex-col gap-3 bg-white hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-xs font-bold text-[#D71920] uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
              </div>
              <h3 className="text-xl font-bold text-black">{event.title}</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
