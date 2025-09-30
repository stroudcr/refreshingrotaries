'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Category {
  id: string
  name: string
  count: number
}

interface ArsenalCategoriesProps {
  categories?: Category[]
  activeCategory?: string
  setActiveCategory?: (category: string) => void
}

const defaultCategories = [
  { id: 'all', name: 'All Posts', count: 0 },
  { id: 'reviews', name: 'Reviews', count: 0 },
  { id: 'personal', name: 'Personal', count: 0 },
  { id: 'recommendations', name: 'Recommendations', count: 0 },
]

export function ArsenalCategories({
  categories = defaultCategories,
  activeCategory: propActiveCategory,
  setActiveCategory: propSetActiveCategory
}: ArsenalCategoriesProps) {
  const [localActiveCategory, setLocalActiveCategory] = useState('all')

  const activeCategory = propActiveCategory ?? localActiveCategory
  const setActiveCategory = propSetActiveCategory ?? setLocalActiveCategory

  return (
    <section className="py-8 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4">
          {(categories.length > 0 ? categories : defaultCategories).map((category) => (
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