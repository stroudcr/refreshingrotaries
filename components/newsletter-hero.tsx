'use client'

import { motion } from 'framer-motion'

export function NewsletterHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 to-military-green-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-military text-cream mb-4">
            THE NEWSLETTER
          </h1>
          <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
            Read past editions and stay informed on liberty, protection, and more
          </p>

          <div className="flex justify-center space-x-4 text-cream/80">
            <span>📰 Archive</span>
            <span>•</span>
            <span>🗽 Liberty</span>
            <span>•</span>
            <span>🛡️ Protection</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
