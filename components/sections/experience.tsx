'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, Calendar } from 'lucide-react'

const experiences = [
  {
    company: 'Accenture',
    role: 'SDE Intern',
    description: 'Worked on network fundamentals, covering routing, switching, and security concepts across training modules. Configured firewalls and routers, performing 5+ lab exercises on access control and network security setups.',
    period: 'Dec 2025 - Present',
    color: 'bg-rose-pink',
  },
  {
    company: 'Institute of Admissions Professionals',
    role: 'Web Development Intern',
    description: 'Developed a React.js portfolio website, implementing reusable components, routing, and state management. Built a Learnyst CMS platform, managing 100+ courses with structured content delivery and navigation flow. Designed 2 business websites using Wix, optimizing responsive layouts, media integration, and cross-device support.',
    period: 'July 2025 - Aug 2025',
    color: 'bg-deep-green',
  },
  {
    company: 'HSCI',
    role: 'Full Stack Intern',
    description: 'Developed a full-stack call logging app using React.js, implementing validation and structured workflows. Integrated Node.js and Express.js with MySQL, enabling REST API-based CRUD operations.',
    period: 'Jan 2022 - Dec 2023',
    color: 'bg-gold-sunlight',
  },
  {
    company: 'Ramanujan College',
    role: 'Research Intern',
    description: ' Collected data from 15+ sources, building a dataset of 10,000+ entries for structured fake news detection tasks. Processed data using Python, Pandas, and NumPy, improving dataset quality for analysis and machine learning workflows',
    period: 'July 2022 - Oct 2022',
    color: 'bg-muted-navy',
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-rose-pink/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold-sunlight/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-accent text-2xl text-rose-pink">My journey</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-warm-brown dark:text-cream mt-2">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose-pink via-gold-sunlight to-deep-green" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${exp.color} border-4 border-background shadow-lg z-10`}
                />

                {/* Content card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="glass rounded-2xl p-6 relative group"
                  >
                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 ${exp.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                    
                    {/* Arrow pointer */}
                    <div className={`hidden md:block absolute top-6 ${
                      index % 2 === 0 ? '-right-2' : '-left-2'
                    } w-4 h-4 bg-card rotate-45 border-t border-r border-border ${
                      index % 2 === 0 ? '' : 'border-t-0 border-r-0 border-b border-l'
                    }`} />

                    <div className="flex items-start gap-4 relative z-10">
                      <div className={`flex-shrink-0 p-3 rounded-xl ${exp.color} bg-opacity-10`}>
                        <Building2 className={`w-6 h-6 ${exp.color.replace('bg-', 'text-')}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-xl font-bold text-warm-brown dark:text-cream">
                          {exp.role}
                        </h3>
                        <p className="text-rose-pink font-medium mt-1">{exp.company}</p>
                        <p className="text-warm-brown/60 dark:text-cream/60 text-sm mt-2">
                          {exp.description}
                        </p>
                        <div className="flex items-center gap-2 mt-4 text-sm text-warm-brown/50 dark:text-cream/50">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
