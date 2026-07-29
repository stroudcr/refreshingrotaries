'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import styles from './hero-section.module.css'

const stats = [
  { value: '225K+', label: 'Followers' },
  { value: '1M+', label: 'Views' },
  { value: '100+', label: 'Videos' },
]

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  const entrance = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
      }

  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.texture} aria-hidden="true">
        <Image
          src="/images/hero/topographic-texture.webp"
          alt=""
          fill
          sizes="100vw"
          className={styles.textureImage}
          priority
        />
      </div>

      <div className={styles.ghostLetter} aria-hidden="true">
        R
      </div>

      <motion.div
        className={styles.portraitPanel}
        initial={prefersReducedMotion ? false : { opacity: 0, x: 36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/gallery/meet-rachel.jpg"
          alt="Rapidfire Rachel outdoors beside a stone wall"
          fill
          sizes="(min-width: 768px) 54vw, 100vw"
          className={styles.portrait}
          priority
        />
      </motion.div>

      <div className={styles.splitEdge} aria-hidden="true" />

      <motion.div className={styles.content} {...entrance}>
        <h1 id="home-hero-title" className={styles.title}>
          <span>Rapidfire</span>
          <span>Rachel</span>
        </h1>

        <p className={styles.mission}>
          Freedom-loving American Woman Encouraging Others to Take an Active
          Role in Their Personal Protection
        </p>

        <div className={styles.actions}>
          <motion.a
            href="https://rapidfirerachel.printful.me/"
            className={styles.primaryAction}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={prefersReducedMotion ? undefined : { y: -3 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
          >
            Shop Merch
          </motion.a>

          <motion.div
            whileHover={prefersReducedMotion ? undefined : { y: -3 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
          >
            <Link href="/arsenal" className={styles.secondaryAction}>
              Check the Arsenal
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.dl
        className={styles.stats}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.65 }}
        aria-label="Rapidfire Rachel audience statistics"
      >
        {stats.map((stat) => (
          <div className={styles.stat} key={stat.label}>
            <dt className={styles.statLabel}>{stat.label}</dt>
            <dd className={styles.statValue}>{stat.value}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  )
}
