'use client'

import { motion } from 'framer-motion'

const values = [
  {
    icon: '⛪',
    title: 'Faith',
    description: 'Grounded in Christian values, trusting God\'s guidance in all aspects of life and work.',
  },
  {
    icon: '👫',
    title: 'Family',
    description: 'Prioritizing loved ones and passing down traditions, values, and skills to the next generation.',
  },
  {
    icon: '🗽',
    title: 'Freedom',
    description: 'Championing individual liberty and the constitutional right to self-defense for all Americans.',
  },
  {
    icon: '🎯',
    title: 'Firearms',
    description: 'Promoting responsible ownership, safety education, and proficiency in shooting sports.',
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
      </div>
    </section>
  )
}