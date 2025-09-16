import { Metadata } from 'next'
import { ArsenalHero } from '@/components/arsenal-hero'
import { ArsenalGrid } from '@/components/arsenal-grid'
import { ArsenalCategories } from '@/components/arsenal-categories'

export const metadata: Metadata = {
  title: 'Arsenal - Rapidfire Rachel',
  description: 'The Arsenal - Personal posts, product reviews, and recommendations from Rapidfire Rachel.',
}

export default function ArsenalPage() {
  return (
    <>
      <ArsenalHero />
      <ArsenalCategories />
      <ArsenalGrid />
    </>
  )
}