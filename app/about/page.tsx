import { Metadata } from 'next'
import Image from 'next/image'
import { AboutHero } from '@/components/about-hero'
import { AboutMission } from '@/components/about-mission'

export const metadata: Metadata = {
  title: 'About - Rapidfire Rachel',
  description: 'Learn about Rapidfire Rachel - Freedom-loving American Woman Encouraging Others to Take an Active Role in Their Personal Protection',
  alternates: {
    canonical: 'https://rapidfirerachel.com/about',
  },
  openGraph: {
    title: 'About - Rapidfire Rachel',
    description: 'Learn about Rapidfire Rachel - Freedom-loving American Woman Encouraging Others to Take an Active Role in Their Personal Protection',
    url: 'https://rapidfirerachel.com/about',
    siteName: 'Rapidfire Rachel',
    locale: 'en_US',
    type: 'profile',
    images: [{
      url: 'https://rapidfirerachel.com/images/gallery/meet-rachel.jpg',
      width: 1200,
      height: 630,
      alt: 'About Rapidfire Rachel',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About - Rapidfire Rachel',
    description: 'Learn about Rapidfire Rachel - Freedom-loving American Woman Encouraging Others to Take an Active Role in Their Personal Protection',
    creator: '@rachelbee333',
    images: ['https://rapidfirerachel.com/images/gallery/meet-rachel.jpg'],
  },
}

export default function AboutPage() {
  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Rapidfire Rachel',
      url: 'https://rapidfirerachel.com',
      sameAs: [
        'https://instagram.com/rachelbee333',
        'https://facebook.com/rapidfirerachel',
        'https://x.com/rapidfirerachel',
        'https://tiktok.com/@rapidfirerachel',
        'https://youtube.com/@rapidfirerachel',
      ],
      jobTitle: 'Personal Protection Educator',
      description: 'Freedom-loving American Woman Encouraging Others to Take an Active Role in Their Personal Protection',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://rapidfirerachel.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://rapidfirerachel.com/about',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutHero />
      <AboutMission />
    </>
  )
}