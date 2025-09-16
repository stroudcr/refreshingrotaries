'use client'

import { motion } from 'framer-motion'

const milestones = [
  {
    year: '2018',
    title: 'Started Competitive Shooting',
    description: 'Discovered my passion for marksmanship and began competing in local matches.',
  },
  {
    year: '2020',
    title: 'Launched Social Media Presence',
    description: 'Started sharing my journey and knowledge with the online community.',
  },
  {
    year: '2022',
    title: 'Became Certified Instructor',
    description: 'Obtained certifications to teach personal protection and firearm safety.',
  },
  {
    year: '2024',
    title: 'Launched Rapidfire Rachel Brand',
    description: 'Expanded into merchandise and built a community of freedom-loving individuals.',
  },
]

export function AboutStory() {
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
            MY <span className="text-gradient">JOURNEY</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From competitive shooter to content creator, here&apos;s how I got where I am today
          </p>
        </motion.div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="flex-1">
                <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ${
                  index % 2 === 0 ? 'text-right' : 'text-left'
                }`}>
                  <span className="text-orange-accent font-bold text-2xl">{milestone.year}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                </div>
              </div>
              
              <div className="w-4 h-4 bg-orange-accent rounded-full ring-4 ring-orange-accent/30" />
              
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}