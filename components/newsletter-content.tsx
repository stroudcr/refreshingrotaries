'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BeehiivPost } from '@/lib/beehiiv'

interface NewsletterContentProps {
  newsletter: BeehiivPost
}

export function NewsletterContent({ newsletter }: NewsletterContentProps) {
  const [sanitizedHtml, setSanitizedHtml] = useState<string>('')

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return

    // Dynamically import DOMPurify only in browser
    import('isomorphic-dompurify').then((DOMPurify) => {
      const content = newsletter.content?.free?.web

      if (!content) {
        setSanitizedHtml('<p>Content not available</p>')
        return
      }

      const clean = DOMPurify.default.sanitize(content, {
        ALLOWED_TAGS: [
          'p', 'br', 'strong', 'em', 'u', 'b', 'i',
          'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
          'a', 'ul', 'ol', 'li',
          'img', 'blockquote', 'code', 'pre',
          'div', 'span', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
        ],
        ALLOWED_ATTR: ['href', 'src', 'alt', 'class', 'id', 'title', 'target', 'rel'],
        ALLOW_DATA_ATTR: false,
      })
      setSanitizedHtml(clean)
    })
  }, [newsletter.content?.free?.web])

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link
          href="/newsletter"
          className="inline-flex items-center text-orange-accent hover:text-orange-accent-dark mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Newsletter Archive
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-military mb-4">
            {newsletter.title}
          </h1>

          {newsletter.subtitle && (
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              {newsletter.subtitle}
            </p>
          )}

          <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-4">
            <span>Rapidfire Rachel</span>
            <span>•</span>
            <span>
              {new Date(newsletter.publish_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>

        {/* Newsletter Content */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />

        {/* Social Sharing Section */}
        <div className="mt-12 p-8 bg-military-green dark:bg-gray-800 rounded-lg">
          <h3 className="text-2xl font-military text-cream mb-4">
            SHARE YOUR THOUGHTS
          </h3>
          <p className="text-cream/80 mb-6">
            Got questions or want to share your experience? Hit me up on social media!
          </p>
          <div className="flex space-x-6">
            <a
              href="https://instagram.com/rachelbee333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream hover:text-orange-accent transition-colors flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://tiktok.com/@rapidfirerachel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream hover:text-orange-accent transition-colors flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span>TikTok</span>
            </a>
            <a
              href="https://youtube.com/@rapidfirerachel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream hover:text-orange-accent transition-colors flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </motion.div>
    </article>
  )
}
