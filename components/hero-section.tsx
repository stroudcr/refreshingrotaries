'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1595432012492-3fb24de86340?q=80&w=2070"
          alt="Tactical background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-military text-cream mb-6">
            RAPIDFIRE RACHEL
          </h1>
          
          <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-3xl mx-auto">
            Freedom-loving American Woman Encouraging Others to Take an Active Role in Their Personal Protection
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="https://rapidfirerachel.printful.me/" className="btn-primary inline-block" target="_blank" rel="noopener noreferrer">
                Shop Merch
              </a>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/arsenal" className="btn-secondary inline-block">
                Check the Arsenal
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-accent">225K+</p>
              <p className="text-cream/80">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-accent">1M+</p>
              <p className="text-cream/80">Views</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-accent">100+</p>
              <p className="text-cream/80">Videos</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg className="w-6 h-6 text-cream/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}