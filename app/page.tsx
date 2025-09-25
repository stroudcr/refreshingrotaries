import { HeroSection } from '@/components/hero-section'
import { ContentHighlights } from '@/components/content-highlights'
import { AboutGallery } from '@/components/about-gallery'
import { NewsletterSignup } from '@/components/newsletter-signup'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ContentHighlights />
      <AboutGallery />
      <NewsletterSignup />
    </>
  )
}