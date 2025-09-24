'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function AboutHero() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-military-green to-military-green-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-military text-cream mb-6">
              MEET RACHEL
            </h1>
            <p className="text-xl text-cream/90 mb-6">
              Rachel Bee - better known as Rapidfire Rachel - is a lifelong firearms enthusiast, Second Amendment advocate, and content creator dedicated to equipping others through faith, family, and freedom. Known to her followers as a &quot;Freedom Loving American Woman,&quot; she proudly partners with leading brands in the firearms and tactical gear industry to connect her audience with trusted products, training, and resources.
            </p>
            <p className="text-lg text-cream/80 mb-6">
              Rachel was introduced to firearms at an early age, spending weekends at the range with her dad, helping him pick up brass and clean guns. By the age of three, she was already learning the fundamentals of shooting, setting the stage for what would become a lifelong passion. Today, she continues to share that passion alongside her dad, who remains a fundamental part of what she does.
            </p>
            <p className="text-lg text-cream/80 mb-6">
              Away from the range, Rachel&apos;s life is centered on faith and family. She married her high school sweetheart and is now a proud mom of two. Rachel believes it&apos;s essential to teach children basic firearms safety and education from a young age and is committed to passing down the same early introduction to firearms and respect for safety that shaped her own childhood. She treasures life&apos;s simple joys - family road trips, time outdoors, and everyday moments of gratitude that keep her grounded.
            </p>
            <p className="text-lg text-cream/80 mb-6">
              Through her social media channels - including YouTube, Instagram, Facebook, and X - Rachel documents her journey in the firearms community, offering gear reviews, concealed carry insights, and behind-the-scenes looks at a wide variety of shooting sports and industry events. One of her greatest passions is bridging the many niches within the firearms industry. Whether it&apos;s concealed carry, competition shooting, machine guns, historical weapons, hunting, or tactical training, she thrives on introducing people to new disciplines and connecting voices from across the community.
            </p>
            <p className="text-lg text-cream/80">
              For Rachel, Rapidfire Rachel isn&apos;t just a brand—it&apos;s a mission: to equip others to be strong, prepared, and unwavering in their values while embracing life with joy, resilience, and faith.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery/meet-rachel.jpg"
                alt="Rachel"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}