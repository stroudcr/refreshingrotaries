import { Metadata } from 'next'
import { ShopHero } from '@/components/shop-hero'
import { ProductGrid } from '@/components/product-grid'
import { ShopCategories } from '@/components/shop-categories'

export const metadata: Metadata = {
  title: 'Shop - Rapidfire Rachel',
  description: 'Shop exclusive Rapidfire Rachel merchandise - tactical gear, apparel, and accessories.',
}

export default function ShopPage() {
  return (
    <>
      <ShopHero />
      <ShopCategories />
      <ProductGrid />
    </>
  )
}