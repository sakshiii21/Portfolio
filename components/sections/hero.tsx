'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code2, Download, ArrowRight } from 'lucide-react'
import { FloatingPetals } from '../floating-petals'
import Image from 'next/image'

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sakshi-singh-170b13232/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/sakshiii21', label: 'GitHub' },
  { icon: Code2, href: 'https://leetcode.com/u/sae21/', label: 'LeetCode' },
  { icon: Mail, href: 'mailto:sakshisingh2124@gmail.com', label: 'Email' },
]

const roles = ['Software Engineer', 'Full Stack Developer', 'Problem Solver']

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isUnderlineActive, setIsUnderlineActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsUnderlineActive(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-bg.png"
          alt="Ghibli-style illustration of Sakshi working at a cafe desk with Delhi landmarks"
          fill
          priority
          className="object-cover object-center md:object-right-top lg:object-center"
          sizes="100vw"
        />
        {/* Gradient overlay for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/70 to-transparent md:from-transparent md:via-transparent md:to-transparent" />
        {/* Dark overlay for mobile */}
        <div className="absolute inset-0 bg-black/20 md:bg-transparent" />
      </div>

      <FloatingPetals />

      {/* Content positioned in the arch area */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text content - positioned for the arch area on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full md:w-[45%] lg:w-[38%] xl:w-[32%] md:ml-[3%] lg:ml-[5%] xl:ml-[6%]"
          >
            <div className="py-8 md:py-0">
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.2rem] font-bold text-warm-brown mb-3 lg:mb-4 drop-shadow-sm"
              >
                <span className={`underline-draw ${isUnderlineActive ? 'active' : ''}`}>
                  Sakshi Singh
                </span>
              </motion.h1>

              {/* Rotating roles */}
              <div className="h-7 lg:h-8 mb-4 lg:mb-5 overflow-hidden">
                <motion.p
                  key={currentRole}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-accent text-lg lg:text-xl xl:text-2xl text-rose-pink drop-shadow-sm"
                >
                  {roles[currentRole]}
                </motion.p>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-warm-brown/90 text-sm lg:text-base leading-relaxed mb-5 lg:mb-6 text-balance drop-shadow-sm"
              >
                Building impactful digital experiences with code, creativity, and curiosity. 
                Passionate about React, Next.js, AI tools, and solving real-world problems.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-3 mb-5 lg:mb-6"
              >
                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 bg-rose-pink text-cream rounded-full text-sm lg:text-base font-medium hover:bg-rose-pink/90 transition-all shadow-lg shadow-rose-pink/20"
                  whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(217, 108, 141, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="/sakshisingh_resume.pdf"
                  download="Sakshi_Singh_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 bg-cream/80 backdrop-blur-sm border-2 border-warm-brown/30 text-warm-brown rounded-full text-sm lg:text-base font-medium hover:border-rose-pink hover:text-rose-pink transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4" />
                  Resume
                </motion.a>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex items-center gap-3"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 lg:p-2.5 rounded-full bg-cream/80 backdrop-blur-sm text-warm-brown hover:bg-rose-pink hover:text-cream transition-all shadow-md"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.label}
                  >
                    <social.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-warm-brown/40 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-2.5 bg-warm-brown/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
