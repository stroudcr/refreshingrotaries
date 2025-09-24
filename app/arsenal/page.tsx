'use client'

import { useState, useEffect } from 'react'
import { ArsenalHero } from '@/components/arsenal-hero'
import { ArsenalGrid } from '@/components/arsenal-grid'
import { ArsenalCategories } from '@/components/arsenal-categories'
import { client } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'

export default function ArsenalPage() {
  const [posts, setPosts] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [categories, setCategories] = useState([
    { id: 'all', name: 'All Posts', count: 0 },
    { id: 'reviews', name: 'Reviews', count: 0 },
    { id: 'personal', name: 'Personal', count: 0 },
    { id: 'recommendations', name: 'Recommendations', count: 0 },
  ])

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await client.fetch(POSTS_QUERY)
        setPosts(data)

        // Update category counts
        const counts = {
          all: data.length,
          reviews: data.filter((p: any) => p.categories?.includes('Reviews')).length,
          personal: data.filter((p: any) => p.categories?.includes('Personal')).length,
          recommendations: data.filter((p: any) => p.categories?.includes('Recommendations')).length,
        }

        setCategories([
          { id: 'all', name: 'All Posts', count: counts.all },
          { id: 'reviews', name: 'Reviews', count: counts.reviews },
          { id: 'personal', name: 'Personal', count: counts.personal },
          { id: 'recommendations', name: 'Recommendations', count: counts.recommendations },
        ])
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <>
      <ArsenalHero />
      <ArsenalCategories
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ArsenalGrid
        posts={posts}
        activeCategory={activeCategory}
      />
    </>
  )
}