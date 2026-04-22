'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Award, GraduationCap, Briefcase } from 'lucide-react'

const stats = [
  { icon: Code2, value: '600+', label: 'DSA Problems Solved', color: 'text-rose-pink' },
  { icon: Award, value: 'BSC (Hons.) CS', label: '@ Delhi University', color: 'text-gold-sunlight' },
  { icon: GraduationCap, value: 'MCA', label: '@ USICT, GGSIPU', color: 'text-deep-green' },
  { icon: Briefcase, value: 'Intern', label: '@ Accenture', color: 'text-muted-navy' },
]

function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const numericValue = parseInt(value.replace(/\D/g, ''))
  const suffix = value.replace(/[0-9]/g, '')
  
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {numericValue ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {value}
          </motion.span>
        ) : value}
      </motion.span>
    </motion.span>
  )
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-pink/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-sunlight/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-accent text-2xl text-rose-pink">Get to know me</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-warm-brown dark:text-cream mt-2">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="parchment rounded-2xl p-8 lg:p-10 relative">
              {/* Decorative elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6">
                <svg viewBox="0 0 24 24" fill="none" className="text-rose-pink">
                  <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" fill="currentColor" opacity="0.5" />
                </svg>
              </div>
              
              <p className="text-lg leading-relaxed text-warm-brown/80 dark:text-mocha/80 mb-6">
                I&apos;m <span className="font-semibold text-rose-pink">Sakshi Singh</span>, a developer based in 
                New Delhi who loves turning ideas into scalable products. I enjoy crafting elegant interfaces, 
                solving backend logic, and continuously learning.
              </p>
              
              <p className="text-lg leading-relaxed text-warm-brown/80 dark:text-mocha/80 mb-6">
                My work combines <span className="font-semibold text-deep-green">technical precision </span>  with 
                thoughtful design. Whether it&apos;s building AI-powered applications, optimizing database queries, 
                or creating pixel-perfect UIs, I bring dedication and creativity to every project.
              </p>

              <p className="text-lg leading-relaxed text-warm-brown/80 dark:text-mocha/80">
                When I&apos;m not coding, you&apos;ll find me reading books, exploring new technologies, or enjoying 
                a cup of chai while contemplating my next project.
              </p>

              {/* Quote */}
              <div className="mt-8 pt-6 border-t border-warm-brown/10 dark:border-cream/10">
                <p className="font-accent text-2xl text-rose-pink italic">
                  &ldquo;Progress over perfection.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-2xl p-6 text-center group cursor-default"
              >
                <div className={`inline-flex p-3 rounded-full bg-background mb-4 ${stat.color} group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className={`font-serif text-3xl lg:text-4xl font-bold ${stat.color} mb-1`}>
                  <AnimatedCounter value={stat.value} />
                </div>
                <p className="text-sm text-warm-brown/60 dark:text-cream/60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
