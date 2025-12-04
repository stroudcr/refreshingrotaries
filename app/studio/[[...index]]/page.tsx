'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}

// Note: metadata export doesn't work with 'use client', but robots.ts already blocks /studio/