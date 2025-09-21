'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const categories = [
  { id: 'all', name: 'All Posts', count: 42 },
  { id: 'reviews', name: 'Reviews', count: 15 },
  { id: 'personal', name: 'Personal', count: 12 },
  { id: 'recommendations', name: 'Recommendations', count: 8 },
]

export function ArsenalCategories() {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <section className="py-8 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-orange-accent text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-70">({category.count})</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}