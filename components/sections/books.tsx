'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { BookOpen } from 'lucide-react'

const books = [
  {
    title: 'A Thousand Splendid Suns',
    author: 'Khaled Hosseini',
    quote: 'Behind every trial and sorrow that He makes us shoulder, God has a reason.',
    color: 'bg-rose-pink',
  },
  {
    title: 'The Forty Rules of Love',
    author: 'Elif Shafak',
    quote: 'East, West, South or North makes little difference. No matter what your destination, just be sure to make every journey, a journey within. If you travel within, you’ll travel the whole wide world and beyond.',
    color: 'bg-deep-green',
  },
  {
    title: '101 Essays That Will Change The Way You Think',
    author: 'Brianna Wiest',
    quote: 'don’t confuse a bad feeling for a bad life.',
    color: 'bg-gold-sunlight',
  },
  {
    title: 'The palace of illusions',
    author: 'Chitra Banerjee Divakaruni',
    quote: 'A problem becomes a problem only if you believe it to be so. And often others see you as you see yourself.',
    color: 'bg-muted-navy',
  },
]

function Book3D({ book, index, isHovered, onHover }: { 
  book: typeof books[0]; 
  index: number; 
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="relative cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{ 
          rotateY: isHovered ? -20 : 0,
          x: isHovered ? 10 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Book spine */}
        <div 
          className={`absolute left-0 top-0 bottom-0 w-8 ${book.color} rounded-l-sm`}
          style={{ 
            transform: 'rotateY(-90deg) translateX(-16px)',
            transformOrigin: 'right center'
          }}
        >
          <span 
            className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            {book.title}
          </span>
        </div>

        {/* Book cover */}
        <div className={`${book.color} rounded-r-lg rounded-l-sm p-6 h-64 flex flex-col justify-between shadow-xl relative overflow-hidden`}>
          {/* Texture overlay */}
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/20 to-transparent" />
          
          {/* Content */}
          <div className="relative z-10">
            <BookOpen className="w-8 h-8 text-white/80 mb-3" />
            <h4 className="font-serif text-lg font-bold text-white leading-tight">
              {book.title}
            </h4>
            <p className="text-white/70 text-sm mt-1">by {book.author}</p>
          </div>

          {/* Decorative lines */}
          <div className="relative z-10 space-y-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-px bg-white/20" style={{ width: `${60 + i * 15}%` }} />
            ))}
          </div>
        </div>

        {/* Book pages edge */}
        <div 
          className="absolute right-0 top-2 bottom-2 w-2 bg-cream rounded-r-sm"
          style={{ 
            transform: 'rotateY(90deg) translateX(4px)',
            transformOrigin: 'left center'
          }}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-px bg-warm-brown/10" style={{ marginTop: `${8 + i * 10}%` }} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Books() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredBook, setHoveredBook] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Wooden shelf background */}
      <div className="absolute bottom-32 left-0 right-0 h-8 bg-gradient-to-b from-warm-brown to-warm-brown/80 shadow-lg" />
      <div className="absolute bottom-28 left-8 right-8 h-2 bg-warm-brown/30 blur-sm" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-accent text-2xl text-rose-pink">What shapes my thinking</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-warm-brown dark:text-cream mt-2">
            Books I Love
          </h2>
        </motion.div>

        {/* Books shelf */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {books.map((book, index) => (
            <Book3D 
              key={book.title} 
              book={book} 
              index={index}
              isHovered={hoveredBook === index}
              onHover={(hovered) => setHoveredBook(hovered ? index : null)}
            />
          ))}
        </div>

        {/* Quote display */}
        <AnimatePresence mode="wait">
          {hoveredBook !== null && (
            <motion.div
              key={hoveredBook}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center max-w-2xl mx-auto"
            >
              <p className="font-accent text-xl lg:text-2xl text-rose-pink italic">
                &ldquo;{books[hoveredBook].quote}&rdquo;
              </p>
              <p className="mt-3 text-cream/50 dark:text-cream/50 text-sm">
                — {books[hoveredBook].author}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {hoveredBook === null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <p className="font-accent text-2xl text-rose-pink italic">
              &ldquo;Always keep Believing&rdquo;
            </p>
            <p className="mt-3 text-cream/50 dark:text-cream/50 text-sm">
              — My personal motto
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
