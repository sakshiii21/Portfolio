'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend',
    color: 'bg-rose-pink',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Backend',
    color: 'bg-deep-green',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL'],
  },
  {
    title: 'CS Fundamentals',
    color: 'bg-gold-sunlight',
    skills: ['DSA', 'OOP', 'OS', 'DBMS', 'CN'],
  },
  {
    title: 'AI / ML',
    color: 'bg-muted-navy',
    skills: ['NLP', 'Transformers', 'RAG Pipelines', 'Vector Search'],
  },
]

function BookCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30, rotateY: -15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ 
        x: 20, 
        rotateY: 5,
        transition: { duration: 0.3 } 
      }}
      className="group cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <div className="relative">
        {/* Book spine shadow */}
        <div className="absolute inset-y-0 -left-2 w-4 bg-warm-brown/20 dark:bg-black/30 rounded-l-sm transform skewY-3" />
        
        {/* Book cover */}
        <div className={`${category.color} rounded-r-lg rounded-l-sm p-6 lg:p-8 relative overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow`}>
          {/* Book texture */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 right-0 h-px bg-white" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-black/20" />
            {[...Array(5)].map((_, i) => (
              <div key={i} className="absolute left-0 right-0 h-px bg-white/10" style={{ top: `${20 + i * 15}%` }} />
            ))}
          </div>

          {/* Content */}
          <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-6 relative z-10">
            {category.title}
          </h3>
          
          <div className="space-y-3 relative z-10">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + skillIndex * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-white/60" />
                <span className="text-white/90 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>

          {/* Decorative bookmark */}
          <div className="absolute top-0 right-6 w-4 h-16 bg-gold-sunlight/80 rounded-b-sm shadow-md transform -translate-y-2 group-hover:translate-y-0 transition-transform" />
        </div>
      </div>
    </motion.div>
  )
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden bg-muted/30 dark:bg-muted/10">
      {/* Wooden shelf background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #6B4F3B 0px, #6B4F3B 2px, transparent 2px, transparent 30px)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-accent text-2xl text-rose-pink">What I work with</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-warm-brown dark:text-cream mt-2">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-warm-brown/60 dark:text-cream/60 max-w-2xl mx-auto">
            A curated collection of technologies I&apos;ve mastered through projects and continuous learning
          </p>
        </motion.div>

        {/* Bookshelf */}
        <div className="relative">
          {/* Shelf */}
          <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-b from-warm-brown to-warm-brown/80 rounded-b-lg shadow-lg" />
          <div className="absolute -bottom-6 left-4 right-4 h-2 bg-warm-brown/40 rounded-b-lg blur-sm" />

          {/* Books grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8">
            {skillCategories.map((category, index) => (
              <BookCard key={category.title} category={category} index={index} />
            ))}
          </div>
        </div>

        {/* Additional skills as floating tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-warm-brown/50 dark:text-cream/50 mb-4">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'C++', 'Python', 'Firebase', 'Wix', 'Tailwind CSS', 'REST APIs', 'Figma'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full bg-background border border-border text-sm text-warm-brown/70 dark:text-cream/70 hover:border-rose-pink hover:text-rose-pink transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
