'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface PrintfulVariant {
  id: number
  name: string
  retail_price: string
  currency: string
  product: {
    image: string
  }
}

interface PrintfulProduct {
  id: number
  name: string
  thumbnail_url: string
  variants: PrintfulVariant[]
  sync_product: {
    id: number
    external_id: string
    name: string
    variants: number
    synced: number
    thumbnail_url: string
  }
  sync_variants: Array<{
    id: number
    sync_product_id: number
    name: string
    retail_price: string
    currency: string
    files: Array<{
      type: string
      url: string
      preview_url: string
    }>
    product: {
      image: string
    }
  }>
}

export function ProductGrid() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [products, setProducts] = useState<PrintfulProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/printful/products')
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        const data = await response.json()
        setProducts(data.products || [])
      } catch (err) {
        console.error('Error fetching products:', err)
        setError('Unable to load products at this time')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-military text-center mb-12">
            FEATURED <span className="text-gradient">PRODUCTS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-64"></div>
                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-military mb-12">
              FEATURED <span className="text-gradient">PRODUCTS</span>
            </h2>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
              <p className="text-gray-600 dark:text-gray-400">
                Please check back later or contact us for assistance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  if (products.length === 0) {
    return (
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-military text-center mb-12">
              FEATURED <span className="text-gradient">PRODUCTS</span>
            </h2>
            <div className="bg-military-green dark:bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-military text-cream mb-4">
                SHOP COMING SOON
              </h3>
              <p className="text-cream/80 mb-6">
                We&apos;re setting up our shop with amazing products.
                Check back soon or sign up to be notified when we launch!
              </p>
              <button className="btn-primary">
                Notify Me When Live
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-military text-center mb-12">
            FEATURED <span className="text-gradient">PRODUCTS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const firstVariant = product.sync_variants?.[0]
            const price = firstVariant?.retail_price || '0.00'
            const imageUrl = firstVariant?.files?.find(f => f.type === 'preview')?.preview_url
              || product.sync_product?.thumbnail_url
              || firstVariant?.product?.image
              || '/images/placeholder.jpg'

            return (
              <motion.div
                key={product.sync_product?.id || product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product.sync_product?.id || product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg card-hover">
                  <div className="relative h-64">
                    <Image
                      src={imageUrl}
                      alt={product.sync_product?.name || 'Product'}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {hoveredProduct === (product.sync_product?.id || product.id) && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center"
                      >
                        <button
                          className="btn-primary"
                          onClick={() => {
                            // Add Printful checkout integration here
                            console.log('Add to cart:', product.sync_product?.id)
                          }}
                        >
                          View Product
                        </button>
                      </motion.div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">
                      {product.sync_product?.name || 'Unnamed Product'}
                    </h3>
                    <p className="text-2xl font-bold text-orange-accent">
                      ${price}
                    </p>
                    {product.sync_variants && product.sync_variants.length > 1 && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {product.sync_variants.length} variants available
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}