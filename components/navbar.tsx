'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from './theme-provider'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active link based on scroll position
      const sections = navLinks.map(link => link.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveLink(`#${section}`)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-auto"
      >
        <div
          className={`
            relative px-4 sm:px-8 py-3 sm:py-4
            rounded-full
            transition-all duration-500 ease-out
            ${isScrolled
              ? 'bg-white/20 dark:bg-[#1a1512]/60 shadow-[0_8px_32px_rgba(74,52,40,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/30 dark:border-white/10'
              : 'bg-white/15 dark:bg-[#1a1512]/40 shadow-[0_4px_24px_rgba(74,52,40,0.08)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)] border border-white/20 dark:border-white/5'
            }
            backdrop-blur-xl
          `}
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

          <div className="relative flex items-center justify-between gap-4 sm:gap-8">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center shrink-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#4A3428] dark:text-cream">
                Sae
              </span>
              <span className="text-[#E96BA8] text-2xl sm:text-3xl leading-none ml-0.5">.</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium tracking-wide
                    transition-colors duration-300
                    ${activeLink === link.href
                      ? 'text-[#E96BA8]'
                      : 'text-[#4A3428]/80 dark:text-cream/80 hover:text-[#4A3428] dark:hover:text-cream'
                    }
                  `}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  {link.label}
                  {/* Animated underline */}
                  <motion.span
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#E96BA8] rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeLink === link.href ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle Button */}
            {mounted && (
              <motion.button
                onClick={toggleTheme}
                className="
                  relative p-2.5 rounded-full
                  bg-white/20 dark:bg-black/20
                  backdrop-blur-md
                  border border-white/30 dark:border-white/10
                  shadow-[0_2px_12px_rgba(74,52,40,0.1)]
                  hover:shadow-[0_4px_20px_rgba(233,107,168,0.25)]
                  transition-all duration-300
                  group
                "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, rotate: 15 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === 'light' ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className="w-5 h-5 text-[#4A3428] group-hover:text-[#E96BA8] transition-colors" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="w-5 h-5 text-cream group-hover:text-[#E96BA8] transition-colors" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )}

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#4A3428] dark:text-cream hover:text-[#E96BA8] transition-colors"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-20 left-4 right-4 z-50 lg:hidden"
            >
              <div className="
                bg-white/90 dark:bg-[#1a1512]/90 backdrop-blur-xl
                rounded-3xl
                shadow-[0_16px_48px_rgba(74,52,40,0.15)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.4)]
                border border-white/40 dark:border-white/10
                p-6
                overflow-hidden
              ">
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#E96BA8]/5 to-transparent pointer-events-none" />

                <div className="relative flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`
                        px-4 py-3 rounded-xl
                        text-base font-medium
                        transition-all duration-200
                        ${activeLink === link.href
                          ? 'text-[#E96BA8] bg-[#E96BA8]/10'
                          : 'text-[#4A3428] dark:text-cream hover:bg-[#4A3428]/5 dark:hover:bg-white/5'
                        }
                      `}
                    >
                      {link.label}
                    </motion.a>
                  ))}

                  {/* Mobile Hire Me button
                  <motion.a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="
                      mt-4 px-6 py-3.5
                      bg-[#E96BA8] text-white text-center
                      rounded-xl text-base font-semibold
                      shadow-[0_4px_20px_rgba(233,107,168,0.3)]
                    "
                  >
                    Hire Me
                  </motion.a> */}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
