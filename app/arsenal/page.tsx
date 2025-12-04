import { Metadata } from 'next'
import { ArsenalHero } from '@/components/arsenal-hero'
import { ArsenalGrid } from '@/components/arsenal-grid'
import { ArsenalCategories } from '@/components/arsenal-categories'
import { client } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Arsenal - Rapidfire Rachel',
  description: 'Explore the Arsenal - reviews, personal stories, and recommendations from Rapidfire Rachel on firearms, gear, and personal protection.',
  alternates: {
    canonical: 'https://rapidfirerachel.com/arsenal',
  },
  openGraph: {
    title: 'Arsenal - Rapidfire Rachel',
    description: 'Explore the Arsenal - reviews, personal stories, and recommendations from Rapidfire Rachel.',
    url: 'https://rapidfirerachel.com/arsenal',
    siteName: 'Rapidfire Rachel',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: 'https://rapidfirerachel.com/images/gallery/meet-rachel.jpg',
      width: 1200,
      height: 630,
      alt: 'Arsenal - Rapidfire Rachel',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arsenal - Rapidfire Rachel',
    description: 'Explore the Arsenal - reviews, personal stories, and recommendations from Rapidfire Rachel.',
    creator: '@rachelbee333',
    images: ['https://rapidfirerachel.com/images/gallery/meet-rachel.jpg'],
  },
}

export const revalidate = 60 // Revalidate every 60 seconds

export default async function ArsenalPage() {
  let posts: any[] = []

  try {
    posts = await client.fetch(POSTS_QUERY)
  } catch (error) {
    console.error('Error fetching posts:', error)
  }

  // Calculate category counts
  const counts = {
    all: posts.length,
    reviews: posts.filter((p: any) => p.categories?.includes('Reviews')).length,
    personal: posts.filter((p: any) => p.categories?.includes('Personal')).length,
    recommendations: posts.filter((p: any) => p.categories?.includes('Recommendations')).length,
  }

  const categories = [
    { id: 'all', name: 'All Posts', count: counts.all },
    { id: 'reviews', name: 'Reviews', count: counts.reviews },
    { id: 'personal', name: 'Personal', count: counts.personal },
    { id: 'recommendations', name: 'Recommendations', count: counts.recommendations },
  ]

  return (
    <>
      <ArsenalHero />
      <ArsenalCategories categories={categories} />
      <ArsenalGrid posts={posts} />
    </>
  )
}