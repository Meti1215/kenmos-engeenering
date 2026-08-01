'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, HardHat, ShieldCheck, Mail, Phone, Calendar } from 'lucide-react'
import { brand } from '@/lib/brand'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [showWelcomePopup, setShowWelcomePopup] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Show welcome popup after 3 seconds
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowWelcomePopup(true)
      }
    }, 3000)

    // Initial bot message
    setMessages([
      {
        id: 'initial',
        text: `Hello! I'm the ${brand.shortName} assistant. I can answer questions about our structural design services, steel structures, value engineering, physical location, and quote request process. How can I help you today?`,
        sender: 'bot',
        timestamp: new Date()
      }
    ])

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  const handleOpenChat = () => {
    setShowWelcomePopup(false)
    setIsOpen(true)
  }

  const companyInfo = {
    hours: `We are available ${brand.hours}.`,
    services: 'Kenmos Engineering specializes in Structural Design (reinforced concrete & steel frames), Construction Supervision, Project Management, Structural Assessment & Retrofitting, and Tender & BOQ Preparation.',
    founder: 'Our Founder and General Manager, Kenmos Tesfaye, has over 20 years of experience in structural design and steel structures in Ethiopia, leading over 800 successful projects.',
    steel: 'We are steel structure specialists, with a proven track record designing connection nodes, steel warehouses, university stadiums, and factory trusses.',
    value: 'Cost and Value Optimization is our core design philosophy. Through detailed analysis and material sizing, we help developers reduce structural material costs by 10% to 15% without compromising safety.',
    location: `${brand.name} office is located at Enat Building, 7th Floor, Piazza, Addis Ababa, Ethiopia.`,
    contact: `Phone: ${brand.phone} | Email: ${brand.email} | Address: ${brand.location}`,
    requestInfo: 'To request a structural review or project quote, please complete the contact/quote form in the Contact Us section or call us directly at ' + brand.phone + '.'
  }

  const calculateScore = (input: string, keywords: string[]): number => {
    let score = 0
    const lowerInput = input.toLowerCase()
    
    keywords.forEach(keyword => {
      if (lowerInput.includes(keyword)) score += 2
    })
    return score
  }

  type Intent = {
    keywords: string[]
    response: string
    replies: string[]
  }

  const intents: Record<string, Intent> = {
    hours: {
      keywords: ['hour', 'time', 'open', 'close', 'when', 'schedule', 'available', 'weekend', 'saturday', 'monday', 'friday'],
      response: companyInfo.hours,
      replies: ["Our Services", "Request a Quote", "Location & Contact"]
    },
    services: {
      keywords: ['service', 'services', 'what do you do', 'what do you offer', 'structural design', 'supervision', 'detailing'],
      response: companyInfo.services,
      replies: ["Value Engineering", "Steel Structures", "Founder & Experience"]
    },
    steel: {
      keywords: ['steel', 'truss', 'warehouse', 'roof', 'detailing', 'joints', 'fabrication'],
      response: companyInfo.steel,
      replies: ["Our Services", "Value Engineering", "Request a Quote"]
    },
    value: {
      keywords: ['value', 'optimization', 'cost', 'save', 'material', 'saving', 'concrete'],
      response: companyInfo.value,
      replies: ["Our Services", "Request a Quote", "Location & Contact"]
    },
    founder: {
      keywords: ['founder', 'kenmos', 'tesfaye', 'manager', 'lead engineer', 'experience', 'history'],
      response: companyInfo.founder,
      replies: ["Our Services", "Value Engineering", "Location & Contact"]
    },
    location: {
      keywords: ['location', 'address', 'where', 'piazza', 'enat building', 'office', 'map', 'place'],
      response: companyInfo.location,
      replies: ["Operating Hours", "Request a Quote", "Our Services"]
    },
    contact: {
      keywords: ['contact', 'phone', 'call', 'email', 'number', 'reach', 'mail'],
      response: companyInfo.contact,
      replies: ["Operating Hours", "Request a Quote", "Our Services"]
    },
    requestInfo: {
      keywords: ['quote', 'request', 'price', 'pricing', 'cost estimation', 'inquiry', 'blueprint'],
      response: companyInfo.requestInfo,
      replies: ["Location & Contact", "Operating Hours", "Our Services"]
    }
  }

  const getResponse = (userMessage: string): { text: string; quickReplies?: string[] } => {
    const message = userMessage.toLowerCase()

    if (message.match(/^(hi|hello|hey|greetings)/)) {
       return {
        text: `Hello! Welcome to ${brand.shortName}. How can I assist you today?`,
        quickReplies: ["Our Services", "Value Engineering", "Steel Structures", "Location & Contact"]
      }
    }

    if (message.includes('thank')) {
      return {
        text: "You are welcome! Let us know if you need any other structural advice.",
        quickReplies: ["Our Services", "Request a Quote", "Location & Contact"]
      }
    }

    let bestIntent: Intent | null = null
    let maxScore = 0

    Object.values(intents).forEach(intent => {
      const score = calculateScore(message, intent.keywords)
      if (score > maxScore) {
        maxScore = score
        bestIntent = intent
      }
    })

    if (bestIntent && maxScore > 0) {
      return {
        text: (bestIntent as Intent).response,
        quickReplies: (bestIntent as Intent).replies
      }
    }

    return {
      text: "I didn't quite catch that. Would you like to check our structural services, ask about value engineering, or request contact details?",
      quickReplies: ["Our Services", "Value Engineering", "Location & Contact", "Request a Quote"]
    }
  }

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputMessage
    if (!text.trim()) return

    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMsg])
    setInputMessage('')

    setTimeout(() => {
      const botReply = getResponse(text)
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: botReply.text,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMsg])
    }, 800)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Welcome Popup Bubble */}
      <AnimatePresence>
        {showWelcomePopup && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mb-3 bg-white border border-gray-100 shadow-xl p-4 max-w-[20rem] cursor-pointer rounded-none"
            onClick={handleOpenChat}
          >
            <div className="flex justify-between items-start mb-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#D71920]">Kenmos Engineering</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  setShowWelcomePopup(false)
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[13px] leading-relaxed text-gray-700 font-light">
              Hi! Need structural cost optimization advice? Ask me here.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Trigger Button (+~15% size: 56px → 64px) */}
      <motion.button
        onClick={handleOpenChat}
        initial={{ scale: 0.6, y: 20, opacity: 0 }}
        animate={{
          scale: 1,
          y: [0, -4, 0, -2, 0],
          opacity: 1,
          boxShadow: [
            '0 25px 50px -12px rgba(215,25,32,0.15), 0 0 0 0 rgba(215,25,32,0)',
            '0 25px 50px -12px rgba(215,25,32,0.25), 0 0 0 0 rgba(215,25,32,0)',
            '0 25px 50px -12px rgba(215,25,32,0.4), 0 0 32px 6px rgba(215,25,32,0.35)',
            '0 25px 50px -12px rgba(215,25,32,0.25), 0 0 0 0 rgba(215,25,32,0)',
            '0 25px 50px -12px rgba(215,25,32,0.15), 0 0 0 0 rgba(215,25,32,0)',
          ],
        }}
        transition={{
          initial: { duration: 0 },
          scale: {
            type: 'spring',
            stiffness: 260,
            damping: 16,
            mass: 0.8,
          },
          y: {
            duration: 4.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },
          opacity: {
            delay: 0.05,
            duration: 0.45,
            ease: 'easeOut',
          },
          boxShadow: {
            duration: 5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 30px 60px -15px rgba(215,25,32,0.5), 0 0 48px 10px rgba(215,25,32,0.45)',
          transition: {
            scale: { duration: 0.22, ease: 'easeInOut' },
            boxShadow: { duration: 0.22, ease: 'easeInOut' },
          },
        }}
        whileTap={{ scale: 0.93 }}
        className="w-16 h-16 bg-[#D71920] text-white flex items-center justify-center shadow-2xl rounded-none relative focus:outline-none will-change-transform"
      >
        {/* Animated glow ring behind the button */}
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-none pointer-events-none"
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(215,25,32,0)',
              '0 0 0 0 rgba(215,25,32,0)',
              '0 0 0 6px rgba(215,25,32,0.18)',
              '0 0 0 10px rgba(215,25,32,0)',
              '0 0 0 0 rgba(215,25,32,0)',
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
        <motion.span
          aria-hidden
          className="absolute -inset-1 pointer-events-none"
          animate={{ opacity: [0, 0.08, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background: 'radial-gradient(circle at center, rgba(215,25,32,0.35) 0%, rgba(215,25,32,0) 70%)',
            filter: 'blur(6px)',
          }}
        />
        <MessageSquare className="w-7 h-7 relative z-10" />
      </motion.button>

      {/* Chat Window Panel (+~18% size; mobile capped so it does not overflow) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-[72px] right-0 w-[calc(100vw-3rem)] sm:w-[340px] md:w-[420px] max-h-[80vh] sm:h-[560px] bg-white border border-gray-100 shadow-2xl flex flex-col z-50 rounded-none overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#111112] text-white p-4 md:p-5 flex justify-between items-center border-b border-gray-900">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="text-[15px] font-bold leading-tight">Kenmos Assistant</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-none mt-1">Structural Consultant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-[22px] h-[22px]" />
              </button>
            </div>

            {/* Message History area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4 md:space-y-5 bg-gray-50/50">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[82%] p-3 md:p-3.5 text-[13px] md:text-[14px] leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-[#D71920] text-white rounded-none' 
                        : 'bg-white border border-gray-100 text-gray-800 rounded-none shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form Area */}
            <div className="p-3 md:p-4 border-t border-gray-100 flex items-center gap-2 md:gap-3 bg-white">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex-1 px-3 md:px-4 py-2.5 md:py-3 text-[13px] md:text-[14px] border border-gray-200 focus:outline-none focus:border-[#D71920]"
                placeholder="Ask about value engineering, steel, hours..."
              />
              <button
                onClick={() => handleSend()}
                className="p-2.5 md:p-3 bg-[#D71920] text-white hover:bg-[#be1218] transition-colors"
              >
                <Send className="w-4 h-4 md:w-[18px] md:h-[18px]" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Chatbot
