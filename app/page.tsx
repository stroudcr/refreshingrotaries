import { HeroSection } from '@/components/hero-section'
import { ContentHighlights } from '@/components/content-highlights'
import { SocialFeed } from '@/components/social-feed'
import { NewsletterSignup } from '@/components/newsletter-signup'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ContentHighlights />
      <SocialFeed />
      <NewsletterSignup />
    </>
  )
}