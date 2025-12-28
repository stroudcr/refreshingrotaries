interface BeehiivPost {
  id: string
  title: string
  subtitle: string | null
  slug: string
  publish_date: string
  displayed_date: string
  thumbnail_url: string | null
  web_url: string
  free_web_content: string | null
  stats?: {
    opens: number
    clicks: number
  }
}

interface BeehiivPostsResponse {
  data: BeehiivPost[]
  limit: number
  page: number
  total_results: number
  total_pages: number
}

export class BeehiivClient {
  private apiKey: string
  private publicationId: string
  private baseUrl = 'https://api.beehiiv.com/v2'

  constructor() {
    const apiKey = process.env.BEEHIIV_API_KEY
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID

    if (!apiKey || !publicationId) {
      throw new Error(
        'Missing beehiiv credentials. Please ensure BEEHIIV_API_KEY and BEEHIIV_PUBLICATION_ID are set in environment variables.'
      )
    }

    this.apiKey = apiKey
    this.publicationId = publicationId
  }

  /**
   * Fetch a paginated list of published newsletters
   */
  async getPosts(page: number = 1, limit: number = 12): Promise<BeehiivPostsResponse> {
    try {
      const response = await fetch(
        `${this.baseUrl}/publications/${this.publicationId}/posts?` +
        `status=confirmed&expand[]=free_web_content&expand[]=stats&` +
        `limit=${limit}&page=${page}&order_by=publish_date&direction=desc`,
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
          next: { revalidate: 60 }, // ISR with 60-second revalidation
        }
      )

      if (!response.ok) {
        throw new Error(`beehiiv API error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching beehiiv posts:', error)
      throw error
    }
  }

  /**
   * Fetch a single newsletter by slug
   */
  async getPostBySlug(slug: string): Promise<BeehiivPost | null> {
    try {
      // Step 1: Fetch list to find the post ID by slug
      // Note: List endpoint doesn't return full content even with expand parameters
      const listResponse = await fetch(
        `${this.baseUrl}/publications/${this.publicationId}/posts?` +
        `status=confirmed&limit=100`,
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
          next: { revalidate: 60 },
        }
      )

      if (!listResponse.ok) {
        throw new Error(`beehiiv API error: ${listResponse.status} ${listResponse.statusText}`)
      }

      const listData: BeehiivPostsResponse = await listResponse.json()
      const postPreview = listData.data.find((p) => p.slug === slug)

      if (!postPreview) {
        return null
      }

      // Step 2: Fetch the full post by ID to get complete content
      return await this.getPostById(postPreview.id)
    } catch (error) {
      console.error(`Error fetching beehiiv post with slug "${slug}":`, error)
      throw error
    }
  }

  /**
   * Fetch a single newsletter by ID (fallback if slug doesn't work)
   */
  async getPostById(id: string): Promise<BeehiivPost | null> {
    try {
      const response = await fetch(
        `${this.baseUrl}/publications/${this.publicationId}/posts/${id}?` +
        `expand[]=free_web_content&expand[]=stats`,
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
          next: { revalidate: 60 },
        }
      )

      if (!response.ok) {
        if (response.status === 404) {
          return null
        }
        throw new Error(`beehiiv API error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      console.log('🔍 Beehiiv API response for post ID:', id)
      console.log('📄 Full response:', JSON.stringify(data, null, 2))
      console.log('📝 free_web_content length:', data.data?.free_web_content?.length || 0)
      console.log('📝 free_web_content preview:', data.data?.free_web_content?.substring(0, 100))
      return data.data
    } catch (error) {
      console.error(`Error fetching beehiiv post with ID "${id}":`, error)
      throw error
    }
  }
}

// Export a singleton instance
export const beehiivClient = new BeehiivClient()

// Export types
export type { BeehiivPost, BeehiivPostsResponse }
