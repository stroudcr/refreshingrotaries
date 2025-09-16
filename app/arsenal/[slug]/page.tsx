import { Metadata } from 'next'
import { BlogPost } from '@/components/blog-post'

export const metadata: Metadata = {
  title: 'Blog Post - Rapidfire Rachel',
  description: 'Read the latest from Rapidfire Rachel\'s Arsenal.',
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <BlogPost slug={slug} />
}