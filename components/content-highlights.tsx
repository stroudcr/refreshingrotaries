'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const highlights = [
  {
    id: 1,
    title: 'Range Day Essentials',
    category: 'Tutorial',
    image: 'https://images.unsplash.com/photo-1584819757146-f4f51a3798e1?q=80&w=2070',
    link: '/arsenal/range-day-essentials',
    date: '2024-01-15',
  },
  {
    id: 2,
    title: 'Top 5 Gaming Setups',
    category: 'Gaming',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2070',
    link: '/arsenal/gaming-setups',
    date: '2024-01-12',
  },
  {
    id: 3,
    title: 'Concealed Carry Tips',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1595432121346-29bb8bbcfd5f?q=80&w=2070',
    link: '/arsenal/concealed-carry-tips',
    date: '2024-01-10',
  },
]

export function ContentHighlights() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-military text-center mb-4">
            RECENT <span className="text-gradient">CONTENT</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Check out the latest from the arsenal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover"
            >
              <Link href={item.link}>
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {new Date(item.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/arsenal" className="btn-primary inline-block">
            View All Content
          </Link>
        </div>
      </div>
    </section>
  )
}