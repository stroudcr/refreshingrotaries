import { Metadata } from 'next'
import { HeroSection } from '@/components/hero-section'
import { ContentHighlights } from '@/components/content-highlights'
import { AboutGallery } from '@/components/about-gallery'
import { NewsletterSignup } from '@/components/newsletter-signup'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://rapidfirerachel.com',
  },
}

export default function HomePage() {
  const personSchema = {
    '@context': 'https://schema.org',
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
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <HeroSection />
      <ContentHighlights />
      <AboutGallery />
      <NewsletterSignup />
    </>
  )
}