import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NewsletterContent } from '@/components/newsletter-content'
import { beehiivClient } from '@/lib/beehiiv'

interface NewsletterPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: NewsletterPageProps): Promise<Metadata> {
  const { slug } = await params

  try {
    const newsletter = await beehiivClient.getPostBySlug(slug)

    if (!newsletter) {
      return {
        title: 'Newsletter Not Found - Rapidfire Rachel',
        description: 'This newsletter could not be found.',
      }
    }

    const canonicalUrl = `https://rapidfirerachel.com/newsletter/${slug}`

    return {
      title: `${newsletter.title} - Rapidfire Rachel`,
      description: newsletter.subtitle || `Read "${newsletter.title}" from the Rapidfire Rachel newsletter.`,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: newsletter.title,
        description: newsletter.subtitle || `Read "${newsletter.title}" from the Rapidfire Rachel newsletter.`,
        url: canonicalUrl,
        siteName: 'Rapidfire Rachel',
        locale: 'en_US',
        type: 'article',
        publishedTime: new Date(newsletter.publish_date * 1000).toISOString(),
        authors: ['Rapidfire Rachel'],
        images: newsletter.thumbnail_url
          ? [
              {
                url: newsletter.thumbnail_url,
                width: 1200,
                height: 630,
                alt: newsletter.title,
              },
            ]
          : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: newsletter.title,
        description: newsletter.subtitle || `Read "${newsletter.title}" from the Rapidfire Rachel newsletter.`,
        creator: '@rachelbee333',
        images: newsletter.thumbnail_url ? [newsletter.thumbnail_url] : undefined,
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Newsletter - Rapidfire Rachel',
      description: 'Read the latest from the Rapidfire Rachel newsletter.',
    }
  }
}

export default async function NewsletterPostPage({ params }: NewsletterPageProps) {
  const { slug } = await params

  let newsletter = null

  try {
    newsletter = await beehiivClient.getPostBySlug(slug)
  } catch (error) {
    console.error('Error fetching newsletter:', error)
  }

  if (!newsletter) {
    notFound()
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: newsletter.title,
    description: newsletter.subtitle || newsletter.title,
    datePublished: new Date(newsletter.publish_date * 1000).toISOString(),
    author: {
      '@type': 'Person',
      name: 'Rapidfire Rachel',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rapidfire Rachel',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rapidfirerachel.com/images/gallery/Mainlogo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://rapidfirerachel.com/newsletter/${slug}`,
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
        name: 'Newsletter',
        item: 'https://rapidfirerachel.com/newsletter',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: newsletter.title,
        item: `https://rapidfirerachel.com/newsletter/${slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <NewsletterContent newsletter={newsletter} />
    </>
  )
}
