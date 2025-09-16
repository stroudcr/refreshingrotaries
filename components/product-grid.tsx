'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Rapidfire Tactical Tee',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800',
    category: 'apparel',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Freedom Fighter Hoodie',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800',
    category: 'apparel',
  },
  {
    id: 3,
    name: 'Tactical Patch Set',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800',
    category: 'accessories',
    badge: 'New',
  },
  {
    id: 4,
    name: 'Range Day Cap',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800',
    category: 'accessories',
  },
  {
    id: 5,
    name: 'Tactical Backpack',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800',
    category: 'tactical',
  },
  {
    id: 6,
    name: 'Training Guide PDF',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800',
    category: 'digital',
    badge: 'Digital',
  },
]

export function ProductGrid() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

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
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg card-hover">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-orange-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                      {product.badge}
                    </span>
                  )}
                  
                  {hoveredProduct === product.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center"
                    >
                      <button className="btn-primary">
                        Add to Cart
                      </button>
                    </motion.div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-orange-accent">
                    ${product.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-military-green dark:bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-military text-cream mb-4">
              PRINTFUL INTEGRATION COMING SOON
            </h3>
            <p className="text-cream/80 mb-6">
              We&apos;re setting up our print-on-demand integration to bring you even more 
              awesome products. Stay tuned for the full shop experience!
            </p>
            <button className="btn-primary">
              Notify Me When Live
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}