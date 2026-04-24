'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MapPin, Linkedin, Github, Code2 } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'sakshisingh2124@gmail.com', href: 'mailto:sakshisingh2124@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'New Delhi, India', href: null },
]

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sakshi-singh-170b13232/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/sakshiii21', label: 'GitHub' },
  { icon: Code2, href: 'https://leetcode.com/u/sae21/', label: 'LeetCode' },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState({
  show: false,
  type: 'success' as 'success' | 'error',
  message: '',
})

 const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await fetch(
      '/',
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }).toString(),
      }
    )

    if (!response.ok) {
      throw new Error('Submit failed')
    }

    setToast({
      show: true,
      type: 'success',
      message: 'Message sent successfully! I will get back to you soon.',
    })

    setFormState({
      name: '',
      email: '',
      message: '',
    })
  } catch (error) {
    setToast({
      show: true,
      type: 'error',
      message:
        'Something went wrong. Please try again.',
    })
  } finally {
    setIsSubmitting(false)

    setTimeout(() => {
      setToast(prev => ({
        ...prev,
        show: false,
      }))
    }, 4000)
  }
}

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {toast.show && (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-2xl shadow-xl backdrop-blur-xl border max-w-sm ${
      toast.type === 'success'
        ? 'bg-[#F8F1E7]/95 border-[#D96C8D]/30 text-[#6B4F3B]'
        : 'bg-red-50/95 border-red-200 text-red-700'
    }`}
  >
    <p className="font-semibold">
      {toast.type === 'success'
        ? 'Success '
        : 'Error '}
    </p>
    <p className="text-sm opacity-80">
      {toast.message}
    </p>
  </motion.div>
)}
      {/* Evening/sunset gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-pink/5 to-muted-navy/10" />
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-brown/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-accent text-2xl text-rose-pink">Get in touch</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-warm-brown dark:text-cream mt-2">
            Contact Me
          </h2>
          <p className="mt-4 text-warm-brown/60 dark:text-cream/60 max-w-xl mx-auto text-lg">
            Let&apos;s build something impactful together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
          
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="parchment rounded-2xl p-8 space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />

                <p className="hidden">
                  <label>
                    Don’t fill this out:
                    <input name="bot-field" />
                  </label>
                </p>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-warm-brown dark:text-cream mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-rose-pink focus:ring-2 focus:ring-rose-pink/20 outline-none transition-all text-warm-brown dark:text-cream placeholder:text-warm-brown/40 dark:placeholder:text-cream/40"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-warm-brown dark:text-cream mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-rose-pink focus:ring-2 focus:ring-rose-pink/20 outline-none transition-all text-warm-brown dark:text-cream placeholder:text-warm-brown/40 dark:placeholder:text-cream/40"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-warm-brown dark:text-cream mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-rose-pink focus:ring-2 focus:ring-rose-pink/20 outline-none transition-all resize-none text-warm-brown dark:text-cream placeholder:text-warm-brown/40 dark:placeholder:text-cream/40"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-rose-pink text-cream rounded-xl font-medium hover:bg-rose-pink/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-rose-pink/20"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-cream border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info and illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Desk lamp illustration */}
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              <svg viewBox="0 0 300 200" className="w-full h-48">
                {/* Desk */}
                <rect x="0" y="160" width="300" height="40" fill="#6B4F3B" rx="4" />
                
                {/* Coffee cup */}
                <g transform="translate(200, 120)">
                  {/* Steam */}
                  <motion.path
                    d="M25 -10 Q27 -20 25 -30"
                    stroke="#E8B85C"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.5"
                    animate={{ y: [0, -5, 0], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <rect x="10" y="0" width="30" height="35" rx="3" fill="#F8F1E7" />
                  <rect x="14" y="5" width="22" height="25" rx="2" fill="#6B4F3B" />
                  <path d="M40 8 Q50 10 50 20 Q50 30 40 32" stroke="#F8F1E7" strokeWidth="4" fill="none" />
                </g>

                {/* Desk lamp */}
                <g transform="translate(50, 60)">
                  {/* Base */}
                  <ellipse cx="40" cy="95" rx="35" ry="8" fill="#243447" />
                  {/* Pole */}
                  <rect x="37" y="40" width="6" height="55" fill="#243447" />
                  {/* Arm */}
                  <path d="M40 40 L80 10" stroke="#243447" strokeWidth="5" strokeLinecap="round" />
                  {/* Shade */}
                  <path d="M60 0 L100 20 L90 25 L55 8 Z" fill="#D96C8D" />
                  {/* Light glow */}
                  <motion.ellipse
                    cx="85"
                    cy="50"
                    rx="30"
                    ry="40"
                    fill="#E8B85C"
                    opacity="0.15"
                    animate={{ opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </g>

                {/* Notebook */}
                <g transform="translate(100, 130)">
                  <rect x="0" y="0" width="60" height="40" rx="2" fill="#F8F1E7" />
                  <rect x="0" y="0" width="8" height="40" fill="#D96C8D" opacity="0.3" />
                  {[8, 14, 20, 26].map((y, i) => (
                    <line key={i} x1="12" y1={y} x2="55" y2={y} stroke="#D4C9B8" strokeWidth="1" />
                  ))}
                </g>
              </svg>

              <p className="text-center text-warm-brown/60 dark:text-cream/60 mt-4 font-accent text-lg">
                Always happy to connect over coffee ☕
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="glass rounded-xl p-4 flex items-center gap-4"
                >
                  <div className="p-3 rounded-full bg-rose-pink/10 text-rose-pink">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-warm-brown/50 dark:text-cream/50">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-warm-brown dark:text-cream font-medium hover:text-rose-pink transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-warm-brown dark:text-cream font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 rounded-full glass text-warm-brown hover:text-rose-pink dark:text-cream dark:hover:text-rose-pink transition-colors"
                  title={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
