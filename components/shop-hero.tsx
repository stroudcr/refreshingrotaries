'use client'

import { motion } from 'framer-motion'

export function ShopHero() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-orange-accent to-orange-accent-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-military text-white mb-4">
            GEAR UP WITH RAPIDFIRE
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Exclusive merchandise designed for freedom-loving patriots and tactical enthusiasts
          </p>
          
          <div className="flex justify-center space-x-8 text-white">
            <div>
              <p className="text-3xl font-bold">🚚</p>
              <p className="text-sm">Free Shipping $75+</p>
            </div>
            <div>
              <p className="text-3xl font-bold">✨</p>
              <p className="text-sm">Premium Quality</p>
            </div>
            <div>
              <p className="text-3xl font-bold">🇺🇸</p>
              <p className="text-sm">Made in USA</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}