'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/client'

interface ArsenalPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  mainImage: any
  publishedAt: string
  categories: string[]
  author: string
}

interface ArsenalGridProps {
  posts: ArsenalPost[]
  activeCategory: string
}


export function ArsenalGrid({ posts = [], activeCategory = 'all' }: ArsenalGridProps) {
  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(post =>
        post.categories?.some(cat =>
          cat.toLowerCase() === activeCategory.toLowerCase()
        )
      )

  const displayPosts = filteredPosts
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post: ArsenalPost, index: number) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover"
            >
              <Link href={`/arsenal/${post.slug.current}`}>
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={post.mainImage && post.mainImage.asset ? urlFor(post.mainImage).url() : '/images/placeholder.jpg'}
                      alt={post.mainImage?.alt || post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-military-green text-cream px-3 py-1 rounded-full text-sm font-bold">
                        {post.categories[0]}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-500">
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      <span>5 min read</span>
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