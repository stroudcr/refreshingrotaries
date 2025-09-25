'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PrintfulCheckoutButtonProps {
  product: any
  variant?: any
  className?: string
  children: React.ReactNode
}

export function PrintfulCheckoutButton({
  product,
  variant,
  className = '',
  children
}: PrintfulCheckoutButtonProps) {
  const [showOptions, setShowOptions] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState(variant || product.sync_variants?.[0])

  const handleCheckout = () => {
    if (!selectedVariant) {
      setShowOptions(true)
      return
    }

    // Printful Quick Store URL
    const quickStoreUrl = process.env.NEXT_PUBLIC_PRINTFUL_QUICK_STORE_URL
    if (quickStoreUrl) {
      // Quick Stores uses the Printful product ID in the URL
      // Format: https://your-store.printful.me/product/[printful-product-id]
      const productId = product.sync_product?.id || product.id
      window.open(`${quickStoreUrl}/product/${productId}`, '_blank')
      return
    }

    // Fallback: Direct to your contact form for orders
    alert('Please configure your Printful Quick Store URL in environment variables')
  }

  if (product.sync_variants?.length > 1 && showOptions) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="space-y-2"
        >
          <p className="text-sm font-bold mb-2">Select Option:</p>
          <div className="space-y-2">
            {product.sync_variants.map((v: any) => (
              <button
                key={v.id}
                onClick={() => {
                  setSelectedVariant(v)
                  setShowOptions(false)
                  setTimeout(handleCheckout, 100)
                }}
                className="w-full text-left p-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-orange-accent hover:text-white transition-colors"
              >
                <span className="text-sm">
                  {v.name.replace(product.sync_product?.name + ' - ', '')}
                </span>
                <span className="font-bold float-right">${v.retail_price}</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowOptions(false)}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Cancel
          </button>
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <button
      onClick={handleCheckout}
      className={className}
    >
      {children}
    </button>
  )
}

// Cart Widget Component
export function PrintfulCartWidget() {
  const [cartCount, setCartCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-orange-accent text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-900 z-50 shadow-xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Shopping Cart</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                  <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p>Your cart is empty</p>
                  <p className="text-sm mt-2">Add items to get started</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 border-t">
                  <button
                    onClick={() => window.location.href = '/shop'}
                    className="btn-primary w-full"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}