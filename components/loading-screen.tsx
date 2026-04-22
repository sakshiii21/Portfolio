'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-cream dark:bg-muted-navy flex items-center justify-center"
        >
          <div className="text-center">
            {/* Coffee cup with steam animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-8"
            >
              <svg width="120" height="120" viewBox="0 0 120 120">
                {/* Steam */}
                <motion.path
                  d="M45 30 Q48 15 45 5"
                  stroke="#E8B85C"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.7, 0],
                    y: [0, -10, -20]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M60 25 Q63 10 60 0"
                  stroke="#D96C8D"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.6, 0],
                    y: [0, -8, -16]
                  }}
                  transition={{ duration: 2, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M75 30 Q78 15 75 5"
                  stroke="#E8B85C"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.5, 0],
                    y: [0, -12, -24]
                  }}
                  transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Cup */}
                <motion.rect
                  x="25"
                  y="40"
                  width="60"
                  height="55"
                  rx="8"
                  fill="#F8F1E7"
                  stroke="#6B4F3B"
                  strokeWidth="3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                />
                
                {/* Coffee inside */}
                <motion.rect
                  x="30"
                  y="50"
                  width="50"
                  height="40"
                  rx="5"
                  fill="#6B4F3B"
                  initial={{ scaleY: 0, originY: 1 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
                
                {/* Handle */}
                <motion.path
                  d="M85 55 Q105 55 105 72 Q105 90 85 90"
                  stroke="#6B4F3B"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              </svg>
            </motion.div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-accent text-2xl text-warm-brown dark:text-cream"
            >
              Brewing your experience...
            </motion.p>

            {/* Loading bar */}
            <motion.div
              className="mt-6 w-48 h-1 bg-warm-brown/20 rounded-full overflow-hidden mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-rose-pink to-gold-sunlight rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 1.5, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
