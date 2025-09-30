import { Metadata } from 'next'
import { BlogPost } from '@/components/blog-post'
import { client, urlFor } from '@/sanity/lib/client'
import { POST_QUERY } from '@/sanity/lib/queries'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params

  try {
    const post = await client.fetch(POST_QUERY, { slug })

    if (!post) {
      return {
        title: 'Post Not Found - Rapidfire Rachel',
        description: 'This blog post could not be found.',
      }
    }

    const ogImage = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined
    const canonicalUrl = `https://rapidfirerachel.com/arsenal/${slug}`

    return {
      title: `${post.title} - Rapidfire Rachel`,
      description: post.excerpt || `Read ${post.title} from Rapidfire Rachel's Arsenal.`,
      authors: post.author ? [{ name: post.author.name }] : undefined,
      openGraph: {
        title: post.title,
        description: post.excerpt || `Read ${post.title} from Rapidfire Rachel's Arsenal.`,
        url: canonicalUrl,
        siteName: 'Rapidfire Rachel',
        locale: 'en_US',
        type: 'article',
        publishedTime: post.publishedAt,
        authors: post.author ? [post.author.name] : undefined,
        images: ogImage ? [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: post.mainImage?.alt || post.title,
          },
        ] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt || `Read ${post.title} from Rapidfire Rachel's Arsenal.`,
        creator: '@rachelbee333',
        images: ogImage ? [ogImage] : undefined,
      },
      alternates: {
        canonical: canonicalUrl,
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Blog Post - Rapidfire Rachel',
      description: 'Read the latest from Rapidfire Rachel\'s Arsenal.',
    }
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <BlogPost slug={slug} />
}