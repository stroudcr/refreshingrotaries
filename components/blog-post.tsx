'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { client } from '@/sanity/lib/client'
import { POST_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'

interface BlogPostProps {
  slug: string
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || 'Blog image'}
          width={800}
          height={450}
          className="rounded-lg w-full"
        />
        {value.caption && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
            {value.caption}
          </p>
        )}
      </div>
    ),
  },
}

// Fallback post for when no Sanity data is available
const fallbackPost = {
  title: 'Best Concealed Carry Holsters for 2024',
  body: [
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'After extensive testing and daily carry experience with dozens of holsters, I\'ve compiled my top recommendations for 2024. Whether you\'re new to concealed carry or looking to upgrade your setup, this guide will help you find the perfect holster for your needs.'
        }
      ]
    }
  ],
  author: { name: 'Rapidfire Rachel' },
  publishedAt: '2024-01-20',
  categories: [{ title: 'Reviews' }],
  mainImage: null,
  excerpt: 'After testing dozens of holsters, here are my top picks for comfortable, secure concealed carry.'
}

export function BlogPost({ slug }: BlogPostProps) {
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      try {
        const data = await client.fetch(POST_QUERY, { slug })
        if (data) {
          setPost(data)
        } else {
          // Use fallback post if no data from Sanity
          setPost(fallbackPost)
        }
      } catch (error) {
        console.error('Error fetching post:', error)
        // Use fallback post on error
        setPost(fallbackPost)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  if (loading) {
    return (
      <div className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/4 mb-6"></div>
            <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded mb-4"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mb-8"></div>
            <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!post) return null

  return (
    <>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/arsenal" className="inline-flex items-center text-orange-accent hover:text-orange-accent-dark mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Arsenal
          </Link>

          <div className="mb-8">
            {post.categories && post.categories.length > 0 && (
              <span className="inline-block bg-military-green text-cream px-3 py-1 rounded-full text-sm font-bold mb-4">
                {post.categories[0].title || post.categories[0]}
              </span>
            )}

            <h1 className="text-4xl md:text-5xl font-military mb-4">
              {post.title}
            </h1>

            <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-4">
              {post.author && <span>{post.author.name || post.author}</span>}
              {post.author && <span>•</span>}
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>

          {/* Main Image */}
          {post.mainImage && (
            <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
              />
            </div>
          )}


          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.body && (
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            )}
          </div>

          {/* Gallery */}
          {post.gallery && post.gallery.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {post.gallery.map((image: any, index: number) => (
                  <div key={index}>
                    <Image
                      src={urlFor(image).url()}
                      alt={image.alt || `Gallery image ${index + 1}`}
                      width={448}
                      height={336}
                      className="rounded-lg w-full"
                    />
                    {image.caption && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {image.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 p-8 bg-military-green dark:bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-military text-cream mb-4">
              SHARE YOUR THOUGHTS
            </h3>
            <p className="text-cream/80 mb-6">
              Got questions or want to share your experience? Hit me up on social media!
            </p>
            <div className="flex space-x-6">
              <a href="https://instagram.com/rachelbee333" target="_blank" rel="noopener noreferrer"
                className="text-cream hover:text-orange-accent transition-colors flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a href="https://tiktok.com/@rapidfirerachel" target="_blank" rel="noopener noreferrer"
                className="text-cream hover:text-orange-accent transition-colors flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span>TikTok</span>
              </a>
              <a href="https://youtube.com/@rapidfirerachel" target="_blank" rel="noopener noreferrer"
                className="text-cream hover:text-orange-accent transition-colors flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </motion.div>
      </article>
    </>
  )
}