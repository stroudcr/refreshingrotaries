import { Metadata } from 'next'
import Image from 'next/image'
import { PrintfulCheckoutButton } from '@/components/printful-checkout'
import { printfulClient } from '@/lib/printful'

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await printfulClient.getProduct(parseInt(params.id))

  return {
    title: product?.sync_product?.name || 'Product - Rapidfire Rachel',
    description: `Shop ${product?.sync_product?.name || 'this product'} from Rapidfire Rachel's exclusive collection.`,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await printfulClient.getProduct(parseInt(params.id))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <a href="/shop" className="btn-primary">Back to Shop</a>
        </div>
      </div>
    )
  }

  const firstVariant = product.sync_variants?.[0]
  const price = firstVariant?.retail_price || '0.00'
  const imageUrl = firstVariant?.files?.find((f: any) => f.type === 'preview')?.preview_url
    || product.sync_product?.thumbnail_url
    || '/images/placeholder.jpg'

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
            <Image
              src={imageUrl}
              alt={product.sync_product?.name || 'Product'}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-military mb-4">
              {product.sync_product?.name}
            </h1>

            <p className="text-3xl font-bold text-orange-accent mb-6">
              ${price}
            </p>

            {/* Variants */}
            {product.sync_variants && product.sync_variants.length > 1 && (
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Available Options:</h3>
                <div className="space-y-2">
                  {product.sync_variants.map((variant: any) => (
                    <div key={variant.id} className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                      <span className="text-sm">{variant.name.replace(product.sync_product?.name + ' - ', '')}</span>
                      <span className="font-bold">${variant.retail_price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Buy Button */}
            <PrintfulCheckoutButton
              product={product}
              className="btn-primary w-full lg:w-auto"
            >
              Buy Now
            </PrintfulCheckoutButton>

            {/* Product Description */}
            <div className="mt-8 prose dark:prose-invert">
              <h3>Product Details</h3>
              <p>High-quality merchandise from Rapidfire Rachel's exclusive collection.</p>
              <ul>
                <li>Premium materials</li>
                <li>Made to order</li>
                <li>Ships worldwide</li>
                <li>{product.sync_variants?.length || 0} style options available</li>
              </ul>
            </div>

            {/* Back to Shop */}
            <div className="mt-8">
              <a href="/shop" className="text-orange-accent hover:underline">
                ← Back to Shop
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}