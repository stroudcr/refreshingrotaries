import { NextResponse } from 'next/server'
import { printfulClient } from '@/lib/printful'

export async function GET() {
  try {
    if (!process.env.PRINTFUL_API_KEY) {
      return NextResponse.json(
        { error: 'Printful API key not configured' },
        { status: 500 }
      )
    }

    const products = await printfulClient.getProducts()

    // Fetch detailed information for each product including variants
    const detailedProducts = await Promise.all(
      products.map(async (product) => {
        const productDetails = await printfulClient.getProduct(product.id)
        return productDetails
      })
    )

    return NextResponse.json({ products: detailedProducts })
  } catch (error) {
    console.error('Error fetching Printful products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}