interface PrintfulProduct {
  id: number
  external_id: string
  name: string
  variants: number
  synced: number
  thumbnail_url: string
  is_ignored: boolean
}

interface PrintfulVariant {
  id: number
  sync_product_id: number
  name: string
  sku: string
  retail_price: string
  currency: string
  files: Array<{
    type: string
    url: string
    preview_url: string
  }>
}

class PrintfulClient {
  private apiKey: string
  private baseUrl = 'https://api.printful.com'

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    if (!response.ok) {
      throw new Error(`Printful API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    return data
  }

  async getProducts() {
    try {
      const response = await this.request('/store/products')
      return response.result as PrintfulProduct[]
    } catch (error) {
      console.error('Error fetching products:', error)
      return []
    }
  }

  async getProduct(id: number) {
    try {
      const response = await this.request(`/store/products/${id}`)
      return response.result
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error)
      return null
    }
  }

  async getVariant(id: number) {
    try {
      const response = await this.request(`/store/variants/${id}`)
      return response.result as PrintfulVariant
    } catch (error) {
      console.error(`Error fetching variant ${id}:`, error)
      return null
    }
  }
}

export const printfulClient = new PrintfulClient(process.env.PRINTFUL_API_KEY || '')

export type { PrintfulProduct, PrintfulVariant }