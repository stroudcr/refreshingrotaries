import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  console.log('urlFor called with:', JSON.stringify(source, null, 2))
  console.log('Sanity project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
  console.log('Sanity dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET)

  if (!source) {
    console.log('No source provided')
    return { url: () => '' }
  }

  if (!source.asset) {
    console.log('No asset in source')
    return { url: () => '' }
  }

  const result = builder.image(source)
  const url = result.url()
  console.log('Generated URL:', url)

  // Validate the URL structure
  if (!url.includes('cdn.sanity.io')) {
    console.error('Invalid Sanity URL generated:', url)
  }

  return result
}