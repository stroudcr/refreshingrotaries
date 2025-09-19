'use client'

import { motion } from 'framer-motion'

const values = [
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'Striving for excellence in everything I do, from content creation to marksmanship.',
  },
  {
    icon: '🗽',
    title: 'Freedom',
    description: 'Championing individual liberty and the right to self-defense for all law-abiding citizens.',
  },
  {
    icon: '🤝',
    title: 'Community',
    description: 'Building a supportive community of like-minded individuals who share our values.',
  },
  {
    icon: '📚',
    title: 'Education',
    description: 'Providing quality education on personal protection, safety, and responsible ownership.',
  },
]

export function AboutMission() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-military mb-4">
            MISSION & <span className="text-gradient">VALUES</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Empowering individuals through education, entertainment, and advocacy for personal freedom
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-military-green dark:bg-gray-800 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-military text-cream mb-4">
            JOIN THE MOVEMENT
          </h3>
          <p className="text-cream/80 mb-6 max-w-2xl mx-auto">
            Whether you&apos;re a seasoned shooter, or someone interested in 
            personal protection for the first time, there&apos;s a place for you.
          </p>
          <a
            href="/contact"
            className="btn-primary inline-block"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}