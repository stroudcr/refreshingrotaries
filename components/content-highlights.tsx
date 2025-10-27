'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/client'

const RECENT_POSTS_QUERY = `
  *[_type == "arsenalPost"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset->,
      alt
    },
    publishedAt,
    "categories": categories[]->title
  }
`

export function ContentHighlights() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRecentPosts() {
      try {
        const data = await client.fetch(RECENT_POSTS_QUERY)
        setPosts(data || [])
      } catch (error) {
        console.error('Error fetching recent posts:', error)
        setPosts([])
      } finally {
        setLoading(false)
      }
    }

    fetchRecentPosts()
  }, [])

  if (loading) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mx-auto mb-12"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 dark:bg-gray-800 h-48 rounded-t-lg mb-4"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

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
          {posts.map((post, index) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover"
            >
              <Link href={`/arsenal/${post.slug.current}`}>
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <div className="relative w-full aspect-video">
                    {post.mainImage && post.mainImage.asset ? (
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-contain bg-gray-100 dark:bg-gray-900"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-gray-400">No Image</span>
                      </div>
                    )}
                    {post.categories && post.categories.length > 0 && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-military-green text-cream px-3 py-1 rounded-full text-sm font-bold">
                          {post.categories[0]}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
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