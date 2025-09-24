'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function AboutHero() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-military-green to-military-green-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-military text-cream mb-6 lg:hidden text-center"
        >
          MEET RACHEL
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-5xl font-military text-cream mb-6 hidden lg:block">
              MEET RACHEL
            </h1>
            <p className="text-lg text-cream/90 mb-6">
              Rachel Bee, known online as Rapidfire Rachel, is a lifelong firearms enthusiast, devoted Second Amendment advocate, and content creator dedicated to equipping others through faith, family, and freedom. Recognized by her community as a &quot;Freedom Loving American Woman,&quot; Rachel partners with leading brands in the outdoors and firearms industry to connect her audience with trusted products, training, and resources.
            </p>
            <p className="text-lg text-cream/90 mb-6">
              Her journey began at an early age, spending weekends at the range with her father. By just three years old, she was already learning the fundamentals of shooting - laying the foundation for what would become a lifelong passion that she still shares with her dad to this day.
            </p>
            <p className="text-lg text-cream/90 mb-6">
              Beyond the range, Rachel&apos;s life is rooted in faith, family, and tradition. Married to her high school sweetheart and now a proud mom, she treasures life&apos;s simple joys - family road trips, time outdoors, and everyday moments of gratitude that keep her grounded. She also believes deeply in passing down firearms safety and education to the next generation, instilling respect, responsibility, and preparedness from an early age.
            </p>
            <p className="text-lg text-cream/90 mb-6">
              Across platforms like YouTube, Instagram, Facebook, and X, Rachel documents her life in the shooting community, offering concealed carry insights, gear reviews, and behind-the-scenes coverage of major industry events. One of her greatest passions is bridging the many niches within the firearms industry.
            </p>
            <p className="text-lg text-cream/90">
              She thrives on bridging the many niches within the firearms industry. Whether it&apos;s concealed carry, competition shooting, machine guns, historical weapons, hunting, or tactical training, she aims to introduce people to new disciplines and connect voices from across the community. For Rachel, Rapidfire Rachel is more than a brand - it&apos;s a mission: to inspire strength, resilience, and joy while equipping others to stand firm in their values with confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative h-[400px] md:h-[600px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery/meet-rachel.jpg"
                alt="Rachel"
                fill
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}