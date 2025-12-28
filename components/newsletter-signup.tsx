'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface NewsletterSignupProps {
  headingLevel?: 'h1' | 'h2'
}

export function NewsletterSignup({ headingLevel = 'h2' }: NewsletterSignupProps = {}) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const HeadingTag = headingLevel

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setEmail('')
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        console.error('Subscription error:', data.error)
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Network error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section className="py-20 bg-military-green dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <HeadingTag className="text-4xl font-military text-cream mb-4">
            JOIN THE NEWSLETTER
          </HeadingTag>
          <p className="text-cream/80 mb-8">
            Get exclusive content, early access to merch drops, and tactical tips delivered to your inbox
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-cream/30 text-cream placeholder-cream/50 focus:outline-none focus:border-orange-accent"
              />
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Joining...' : 'Join Now'}
              </button>
            </div>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-orange-accent font-bold"
              >
                Welcome to the squad! Check your email for confirmation.
              </motion.p>
            )}

            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-red-500 font-bold"
              >
                Something went wrong. Please try again later.
              </motion.p>
            )}
          </form>

          <p className="mt-6 text-cream/60 text-sm">
            We respect your privacy and hate spam as much as you. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}