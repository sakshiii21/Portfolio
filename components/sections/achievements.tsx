'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Code2, Award, Users, Heart } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    title: 'Smart India Hackathon',
    description: 'Finalist',
    color: 'bg-gold-sunlight',
  },
  {
    icon: Code2,
    title: 'HashHacks',
    description: 'Participant',
    color: 'bg-rose-pink',
  },
  {
    icon: Award,
    title: '600+ Problems',
    description: 'Codolio',
    color: 'bg-deep-green',
  },
  {
    icon: Award,
    title: '400+ Problems',
    description: 'LeetCode',
    color: 'bg-muted-navy',
  },
  {
    icon: Users,
    title: 'Training & Placement',
    description: 'Coordinator',
    color: 'bg-rose-pink',
  },
  {
    icon: Heart,
    title: 'NSS',
    description: 'Volunteer',
    color: 'bg-gold-sunlight',
  },
]

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-muted/30 dark:bg-muted/10">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-sunlight/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-rose-pink/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-accent text-2xl text-rose-pink">Recognition & Impact</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-warm-brown dark:text-cream mt-2">
            Achievements
          </h2>
        </motion.div>

        {/* Achievements grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 text-center h-full relative overflow-hidden">
                {/* Hover glow */}
                <div className={`absolute inset-0 ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                {/* Badge icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex p-4 rounded-full ${achievement.color} mb-4`}
                >
                  <achievement.icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="font-serif text-lg font-bold text-warm-brown dark:text-cream mb-1">
                  {achievement.title}
                </h3>
                <p className="text-sm text-warm-brown/60 dark:text-cream/60">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
