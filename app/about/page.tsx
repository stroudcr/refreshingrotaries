import { Metadata } from 'next'
import Image from 'next/image'
import { AboutHero } from '@/components/about-hero'
import { AboutStory } from '@/components/about-story'
import { AboutMission } from '@/components/about-mission'
import { AboutGallery } from '@/components/about-gallery'

export const metadata: Metadata = {
  title: 'About - Rapidfire Rachel',
  description: 'Learn about Rapidfire Rachel - Freedom-loving American Woman Encouraging Others to Take an Active Role in Their Personal Protection',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutGallery />
    </>
  )
}