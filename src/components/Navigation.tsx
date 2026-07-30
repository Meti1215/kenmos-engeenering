'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { brand } from '@/lib/brand'
import { cn } from '@/lib/utils'

const Navigation = () => {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Industries', href: '#industries', id: 'industries' },
    { name: 'Our Process', href: '#process', id: 'process' },
    { name: 'Careers', href: '#careers', id: 'careers' },
    { name: 'Contact Us', href: '#contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const scrollPosition = window.scrollY + 200

      let currentActive = navItems[0].id
      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          const sectionTop = rect.top + window.scrollY
          const sectionBottom = sectionTop + rect.height
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentActive = item.id
            break
          }
          if (scrollPosition >= sectionTop) {
            currentActive = item.id
          }
        }
      }

      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100
      if (nearBottom) {
        currentActive = navItems[navItems.length - 1].id
      }
      const nearTop = window.scrollY < 100
      if (nearTop) {
        currentActive = 'home'
      }

      setActiveSection(currentActive)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (href: string, id: string) => {
    setMobileMenuOpen(false)
    if (pathname !== '/') {
      window.location.href = '/' + href
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(id)
      }
    }
  }

  // Custom Structural SVG Logo for Kenmos
  const Logo = () => (
    <div className="flex items-center gap-3">
      {/* Red K stylized like structural columns and trusses */}
      <svg className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main Vertical Column */}
        <rect x="15" y="10" width="16" height="80" fill="#D71920" />
        {/* Top diagonal strut */}
        <path d="M78 15H55L31 46V62L62 25H78V15Z" fill="#D71920" />
        {/* Bottom diagonal strut */}
        <path d="M31 52V68L68 90H88L48 52H31Z" fill="#D71920" />
        {/* Horizontal tie truss */}
        <line x1="31" y1="52" x2="48" y2="52" stroke="#FFFFFF" strokeWidth="4" />
      </svg>
      <div className="flex flex-col select-none">
        <span className="text-xl md:text-2xl font-black font-heading tracking-tight leading-[0.95] text-black">
          KEN<span className="text-[#D71920]">MOS</span>
        </span>
        <span className="text-[9px] md:text-[10px] font-bold tracking-[0.35em] text-gray-500 uppercase leading-none mt-1">
          Engineering
        </span>
      </div>
    </div>
  )

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white border-b border-gray-100',
        scrolled ? 'shadow-md py-2 md:py-3' : 'py-3 md:py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => handleNavigation('#home', 'home')}>
            <Logo />
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => handleNavigation(item.href, item.id)}
                className={cn(
                  'relative text-xs xl:text-sm font-bold uppercase tracking-wider transition-colors py-2 text-gray-700 hover:text-[#D71920]',
                  activeSection === item.id && 'text-[#D71920] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#D71920]'
                )}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Get a Quote Button (Desktop) */}
          <div className="hidden lg:flex">
            <button
              type="button"
              onClick={() => handleNavigation('#contact', 'contact')}
              className="inline-flex items-center gap-2 bg-[#D71920] hover:bg-[#be1218] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 transition-colors duration-200"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#D71920] p-1 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavigation(item.href, item.id)}
                  className={cn(
                    'block w-full text-left py-2.5 px-4 text-sm font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-50 hover:text-[#D71920] transition-colors',
                    activeSection === item.id && 'text-[#D71920] bg-red-50/50 border-l-4 border-[#D71920]'
                  )}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  type="button"
                  onClick={() => handleNavigation('#contact', 'contact')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#D71920] hover:bg-[#be1218] text-white text-sm font-bold uppercase tracking-wider py-3 transition-colors shadow-sm"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navigation
