'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Petal {
  id: number
  x: number
  delay: number
  duration: number
  size: number
  rotation: number
}

export function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const newPetals = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      size: 8 + Math.random() * 12,
      rotation: Math.random() * 360,
    }))
    setPetals(newPetals)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: '-5%',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, 50, -30, 80, 0],
            rotate: [petal.rotation, petal.rotation + 720],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 20 20"
            fill="none"
            className="opacity-60"
          >
            <path
              d="M10 0C10 0 15 5 15 10C15 15 10 20 10 20C10 20 5 15 5 10C5 5 10 0 10 0Z"
              fill="#D96C8D"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
