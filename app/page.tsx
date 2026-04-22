'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Books } from '@/components/sections/books'
import { Achievements } from '@/components/sections/achievements'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/footer'
import { LoadingScreen } from '@/components/loading-screen'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Books />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
