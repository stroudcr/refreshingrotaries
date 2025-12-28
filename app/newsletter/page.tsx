import { Metadata } from 'next'
import { NewsletterSignup } from '@/components/newsletter-signup'
import { NewsletterList } from '@/components/newsletter-list'
import { NewsletterPagination } from '@/components/newsletter-pagination'
import { beehiivClient } from '@/lib/beehiiv'

export const metadata: Metadata = {
  title: 'Newsletter - Rapidfire Rachel',
  description: 'Read past editions of the Rapidfire Rachel newsletter covering liberty, personal protection, and more. Subscribe to stay informed.',
  alternates: {
    canonical: 'https://rapidfirerachel.com/newsletter',
  },
  openGraph: {
    title: 'Newsletter - Rapidfire Rachel',
    description: 'Read past editions and subscribe to the Rapidfire Rachel newsletter',
    url: 'https://rapidfirerachel.com/newsletter',
    siteName: 'Rapidfire Rachel',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: 'https://rapidfirerachel.com/images/gallery/meet-rachel.jpg',
      width: 1200,
      height: 630,
      alt: 'Newsletter - Rapidfire Rachel',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newsletter - Rapidfire Rachel',
    description: 'Read past editions and subscribe to the Rapidfire Rachel newsletter',
    creator: '@rachelbee333',
    images: ['https://rapidfirerachel.com/images/gallery/meet-rachel.jpg'],
  },
}

export const revalidate = 60 // Revalidate every 60 seconds

interface NewsletterPageProps {
  searchParams: Promise<{ page?: string }>
}

export default async function NewsletterPage({ searchParams }: NewsletterPageProps) {
  const params = await searchParams
  const currentPage = Number(params.page) || 1

  let newsletters: any[] = []
  let totalPages = 1

  try {
    const response = await beehiivClient.getPosts(currentPage, 12)
    newsletters = response.data
    totalPages = response.total_pages
  } catch (error) {
    console.error('Error fetching newsletters:', error)
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
        name: 'Newsletter',
        item: 'https://rapidfirerachel.com/newsletter',
      },
    ],
  }

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Newsletter Archive',
    description: 'Past editions of the Rapidfire Rachel newsletter',
    url: 'https://rapidfirerachel.com/newsletter',
    publisher: {
      '@type': 'Organization',
      name: 'Rapidfire Rachel',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rapidfirerachel.com/images/gallery/Mainlogo.svg',
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <NewsletterSignup headingLevel="h1" />
      <NewsletterList newsletters={newsletters} />
      <NewsletterPagination currentPage={currentPage} totalPages={totalPages} />
    </>
  )
}
