'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: 'Best Concealed Carry Holsters for 2024',
    excerpt: 'After testing dozens of holsters, here are my top picks for comfortable, secure concealed carry.',
    category: 'Reviews',
    image: 'https://images.unsplash.com/photo-1595432121329-a18f60c84eac?q=80&w=1200',
    slug: 'best-concealed-carry-holsters-2024',
    date: '2024-01-20',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'My Journey: From Beginner to Competition Shooter',
    excerpt: 'How I went from never holding a firearm to competing at national level competitions.',
    category: 'Personal',
    image: 'https://images.unsplash.com/photo-1595432135850-43fcf9b5fc0f?q=80&w=1200',
    slug: 'journey-beginner-to-competition',
    date: '2024-01-18',
    readTime: '12 min read',
  },
  {
    id: 3,
    title: 'Ultimate Gaming Setup for Tactical Shooters',
    excerpt: 'Build the perfect gaming setup for dominating in tactical FPS games.',
    category: 'Gaming',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200',
    slug: 'gaming-setup-tactical-shooters',
    date: '2024-01-15',
    readTime: '10 min read',
  },
  {
    id: 4,
    title: 'Range Bag Essentials: What You Really Need',
    excerpt: 'Stop overpacking! Here\'s exactly what you need in your range bag for a successful day.',
    category: 'Recommendations',
    image: 'https://images.unsplash.com/photo-1595432121435-9c6e1f0f349f?q=80&w=1200',
    slug: 'range-bag-essentials',
    date: '2024-01-12',
    readTime: '6 min read',
  },
  {
    id: 5,
    title: 'Women in the 2A Community: Breaking Barriers',
    excerpt: 'Celebrating the growing presence of women in shooting sports and personal protection.',
    category: 'Personal',
    image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=1200',
    slug: 'women-2a-community',
    date: '2024-01-10',
    readTime: '9 min read',
  },
  {
    id: 6,
    title: 'Top 5 Training Drills for Home Defense',
    excerpt: 'Practical drills you can practice to improve your home defense readiness.',
    category: 'Recommendations',
    image: 'https://images.unsplash.com/photo-1584819757146-f4f51a3798e1?q=80&w=1200',
    slug: 'training-drills-home-defense',
    date: '2024-01-08',
    readTime: '7 min read',
  },
]

export function ArsenalGrid() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover"
            >
              <Link href={`/arsenal/${post.slug}`}>
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-military-green text-cream px-3 py-1 rounded-full text-sm font-bold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-500">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            Load More Posts
          </button>
        </div>
      </div>
    </section>
  )
}