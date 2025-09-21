import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN
    const instagramAccountId = process.env.INSTAGRAM_ACCOUNT_ID

    if (!accessToken || !instagramAccountId) {
      return NextResponse.json(
        { error: 'Instagram API credentials not configured' },
        { status: 500 }
      )
    }

    // For Instagram Graph API (Business/Creator accounts)
    const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp'
    const url = `https://graph.facebook.com/v18.0/${instagramAccountId}/media?fields=${fields}&access_token=${accessToken}&limit=4`

    const response = await fetch(url, {
      next: { revalidate: 3600 }
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Instagram API Error:', errorData)
      throw new Error('Failed to fetch Instagram posts')
    }

    const data = await response.json()

    const posts = data.data?.map((post: any) => ({
      id: post.id,
      image: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
      caption: post.caption || '',
      timestamp: post.timestamp,
      permalink: post.permalink
    })) || []

    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Error fetching Instagram posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Instagram posts' },
      { status: 500 }
    )
  }
}