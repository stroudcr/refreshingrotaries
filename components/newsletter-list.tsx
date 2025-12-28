'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BeehiivPost } from '@/lib/beehiiv'

interface NewsletterListProps {
  newsletters: BeehiivPost[]
}

// Helper function to strip HTML tags from content
function stripHtml(html: string | undefined | null): string {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim()
}

// Helper function to create excerpt from HTML content
function createExcerpt(html: string | undefined | null, maxLength: number = 200): string {
  const text = stripHtml(html)
  if (!text || text.length === 0) return 'No preview available'
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}

export function NewsletterList({ newsletters = [] }: NewsletterListProps) {
  if (newsletters.length === 0) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            No newsletters found. Check back soon for new editions!
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {newsletters.map((newsletter: BeehiivPost, index: number) => (
            <motion.article
              key={newsletter.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover"
            >
              <Link href={`/newsletter/${newsletter.slug}`}>
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    {/* Thumbnail */}
                    <div className="md:flex-shrink-0 md:w-64">
                      <div className="relative w-full h-48 md:h-full">
                        <Image
                          src={newsletter.thumbnail_url || '/images/placeholder.jpg'}
                          alt={newsletter.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 line-clamp-2">
                          {newsletter.title}
                        </h3>

                        {newsletter.subtitle && (
                          <p className="text-lg text-gray-600 dark:text-gray-400 mb-3 line-clamp-1">
                            {newsletter.subtitle}
                          </p>
                        )}

                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                          {createExcerpt(newsletter.content?.free?.web, 200)}
                        </p>
                      </div>

                      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-500 mt-4">
                        <span>
                          {new Date(newsletter.publish_date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                        <span className="text-orange-accent hover:text-orange-accent-dark font-medium">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
