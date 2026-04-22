'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Shastralok',
    description: 'AI scripture platform with interactive maps, quizzes, and RAG-powered search for exploring ancient texts.',
    longDescription: 'A comprehensive platform that brings ancient scriptures to life through AI-powered search, interactive geographical maps showing historical locations, engaging quizzes, and intelligent RAG pipelines for contextual understanding.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Leaflet', 'RAG'],
    image: '/projects/shastralok.png',
    github: 'https://github.com/sakshiii21/ShastraLok',
    live: 'https://shastra-lok.vercel.app/',
    color: 'from-rose-pink to-gold-sunlight',
  },
  {
    title: 'Cosmalearn',
    description: 'Modern learning platform with server-side rendering for optimal performance and SEO.',
    longDescription: 'An educational platform built with Next.js featuring SSR for fast page loads, interactive course modules, progress tracking, and a beautiful responsive design that works across all devices.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    image: '/projects/cosmalearn.png',
    github: 'https://github.com/sakshiii21/cosmalearn',
    live: 'https://cosmalearn.vercel.app/',
    color: 'from-deep-green to-muted-navy',
  },
  {
    title: 'MinuteMind',
    description: 'AI-powered meeting summarizer that extracts key points and action items automatically.',
    longDescription: 'Transform lengthy meeting recordings into concise summaries using advanced NLP. Features include automatic action item extraction, key point highlighting, and exportable reports for team collaboration.',
    stack: ['React.js', 'NLP', 'Express.js', 'Node.js','Transformer Models'],
    image: '/projects/minutemind.png',
    github: 'https://github.com/sakshiii21/MinuteMind',
    live: 'https://minute-mind-liard.vercel.app/',
    color: 'from-gold-sunlight to-rose-pink',
  },
]

function ProjectCard({ project, index, onSelect }: { project: typeof projects[0]; index: number; onSelect: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      onClick={onSelect}
      className="group cursor-pointer"
    >
      <div className="glass rounded-2xl overflow-hidden h-full">
        {/* Image */}
        <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-3xl font-bold text-cream/90">{project.title}</span>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <motion.span
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-white text-warm-brown rounded-full text-sm font-medium"
            >
              View Details
            </motion.span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-serif text-xl font-bold text-warm-brown dark:text-cream mb-2">
            {project.title}
          </h3>
          <p className="text-warm-brown/60 dark:text-cream/60 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-muted text-warm-brown/70 dark:text-cream/70"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="px-3 py-1 text-xs rounded-full bg-muted text-warm-brown/50 dark:text-cream/50">
                +{project.stack.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-card rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header image */}
        <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-4xl font-bold text-white">{project.title}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-warm-brown/80 dark:text-cream/80 leading-relaxed mb-6">
            {project.longDescription}
          </p>

          {/* Tech stack */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-warm-brown/50 dark:text-cream/50 uppercase tracking-wider mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm rounded-full bg-muted text-warm-brown dark:text-cream font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-warm-brown text-cream rounded-full font-medium hover:bg-warm-brown/90 transition-colors"
            >
              <Github className="w-5 h-5" />
              View Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-rose-pink text-cream rounded-full font-medium hover:bg-rose-pink/90 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden bg-muted/30 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-accent text-2xl text-rose-pink">What I&apos;ve built</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-warm-brown dark:text-cream mt-2">
            Featured Projects
          </h2>
          <p className="mt-4 text-warm-brown/60 dark:text-cream/60 max-w-2xl mx-auto">
            A selection of projects that showcase my skills in full-stack development and AI integration
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
