'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1595432197907-e10af51de35f?q=80&w=800',
    alt: 'Range training',
  },
  {
    src: 'https://images.unsplash.com/photo-1593259037002-4e37c5116483?q=80&w=800',
    alt: 'Gaming setup',
  },
  {
    src: 'https://images.unsplash.com/photo-1584819757008-ce28c587bd23?q=80&w=800',
    alt: 'Outdoor adventure',
  },
  {
    src: 'https://images.unsplash.com/photo-1606924735584-f340c6017ac9?q=80&w=800',
    alt: 'Tactical gear',
  },
  {
    src: 'https://images.unsplash.com/photo-1595432090416-caf248a67513?q=80&w=800',
    alt: 'Competition',
  },
  {
    src: 'https://images.unsplash.com/photo-1606924735276-fbb5b325e933?q=80&w=800',
    alt: 'Training session',
  },
]

export function AboutGallery() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-military mb-4">
            LIFE IN <span className="text-gradient">PICTURES</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Moments from the range, gaming sessions, and adventures
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}