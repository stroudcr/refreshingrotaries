'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const categories = [
  { id: 'all', name: 'All Products', icon: '🛍️' },
  { id: 'apparel', name: 'Apparel', icon: '👕' },
  { id: 'accessories', name: 'Accessories', icon: '🎒' },
  { id: 'tactical', name: 'Tactical Gear', icon: '🎯' },
  { id: 'digital', name: 'Digital Products', icon: '💾' },
]

export function ShopCategories() {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-orange-accent text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}