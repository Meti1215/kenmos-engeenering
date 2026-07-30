'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ArrowUp, HardHat } from 'lucide-react'
import { brand } from '@/lib/brand'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Industries', href: '#industries' },
  ]

  const secondaryLinks = [
    { name: 'Our Process', href: '#process' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact Us', href: '#contact' },
  ]

  const footerServices = [
    'Structural Design & Analysis',
    'Steel Structure Connection Detailing',
    'Construction Supervision',
    'Project Management',
    'Structural Assessment & Retrofitting',
    'Tender & BOQ Documentation',
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Custom Structural SVG Logo
  const Logo = () => (
    <div className="flex items-center gap-3">
      <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="10" width="16" height="80" fill="#D71920" />
        <path d="M78 15H55L31 46V62L62 25H78V15Z" fill="#D71920" />
        <path d="M31 52V68L68 90H88L48 52H31Z" fill="#D71920" />
        <line x1="31" y1="52" x2="48" y2="52" stroke="#FFFFFF" strokeWidth="4" />
      </svg>
      <div className="flex flex-col text-left">
        <span className="text-lg font-black tracking-tight leading-none text-white">
          KEN<span className="text-[#D71920]">MOS</span>
        </span>
        <span className="text-[8px] font-bold tracking-[0.3em] text-gray-400 uppercase leading-none mt-1">
          Engineering
        </span>
      </div>
    </div>
  )

  return (
    <footer className="bg-[#111112] text-white border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Kenmos Structural Engineering delivers innovative, safe, and cost-optimized structural designs and supervision in Ethiopia since 2009.
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex items-center gap-3 text-gray-500">
              <span className="text-xs uppercase tracking-wider font-bold">Structural Excellence</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D71920] border-l-2 border-[#D71920] pl-3">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Secondary Navigation & Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D71920] border-l-2 border-[#D71920] pl-3">
              Our Process & Info
            </h4>
            <ul className="flex flex-col gap-2.5">
              {secondaryLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D71920] border-l-2 border-[#D71920] pl-3">
              Office Details
            </h4>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                <span className="font-light">{brand.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D71920] shrink-0" />
                <span className="font-light">{brand.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D71920] shrink-0" />
                <span className="font-light">{brand.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#D71920] shrink-0" />
                <span className="font-light">{brand.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Callout Section */}
        <div className="border-t border-gray-900 pt-8 mt-8 pb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 bg-white/5 flex items-center justify-center text-[#D71920]">
              <HardHat className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">Need structural value engineering?</h5>
              <p className="text-xs text-gray-400 font-light">Get in touch with us to optimize your steel or concrete design.</p>
            </div>
          </div>
          <button
            onClick={() => handleNavigation('#contact')}
            className="bg-[#D71920] hover:bg-[#be1218] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 transition-colors shrink-0"
          >
            GET A QUOTE
          </button>
        </div>

        {/* Bottom Bar: copyright and back to top */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer
