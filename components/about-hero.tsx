'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function AboutHero() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-military-green to-military-green-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-military text-cream mb-6">
              MEET RACHEL
            </h1>
            <p className="text-xl text-cream/90 mb-6">
              Hey there! I&apos;m Rachel, but you might know me as Rapidfire Rachel. 
              I&apos;m a content creator passionate about personal protection, outdoor adventures, 
              and gaming.
            </p>
            <p className="text-lg text-cream/80">
              With a background in competitive shooting and a love for all things tactical, 
              I&apos;m here to share my knowledge, experiences, and passion with a community 
              that values freedom, self-reliance, and having a good time while doing it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=2070"
                alt="Rachel"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}