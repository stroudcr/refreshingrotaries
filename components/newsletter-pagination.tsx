'use client'

import Link from 'next/link'

interface NewsletterPaginationProps {
  currentPage: number
  totalPages: number
  basePath?: string
}

export function NewsletterPagination({
  currentPage,
  totalPages,
  basePath = '/newsletter',
}: NewsletterPaginationProps) {
  if (totalPages <= 1) return null

  const getPageUrl = (page: number) => {
    if (page === 1) return basePath
    return `${basePath}?page=${page}`
  }

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const showEllipsisStart = currentPage > 3
    const showEllipsisEnd = currentPage < totalPages - 2

    // Always show first page
    pages.push(1)

    // Show ellipsis or page 2
    if (showEllipsisStart) {
      pages.push('...')
    } else if (totalPages > 1) {
      pages.push(2)
    }

    // Show pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i !== 1 && i !== totalPages && !pages.includes(i)) {
        pages.push(i)
      }
    }

    // Show ellipsis or second-to-last page
    if (showEllipsisEnd) {
      pages.push('...')
    } else if (totalPages > 2 && !pages.includes(totalPages - 1)) {
      pages.push(totalPages - 1)
    }

    // Always show last page (if more than 1 page total)
    if (totalPages > 1 && !pages.includes(totalPages)) {
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2">
          {/* Previous Button */}
          {currentPage > 1 ? (
            <Link
              href={getPageUrl(currentPage - 1)}
              className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-accent hover:text-white transition-colors duration-200 font-medium"
            >
              ← Previous
            </Link>
          ) : (
            <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed font-medium">
              ← Previous
            </span>
          )}

          {/* Page Numbers */}
          <div className="hidden sm:flex items-center space-x-2">
            {pageNumbers.map((page, index) =>
              page === '...' ? (
                <span
                  key={`ellipsis-${index}`}
                  className="px-3 py-2 text-gray-500 dark:text-gray-400"
                >
                  ...
                </span>
              ) : (
                <Link
                  key={page}
                  href={getPageUrl(page as number)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    currentPage === page
                      ? 'bg-orange-accent text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-accent/10 hover:text-orange-accent'
                  }`}
                >
                  {page}
                </Link>
              )
            )}
          </div>

          {/* Mobile: Just show current page */}
          <div className="sm:hidden px-4 py-2 bg-white dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 font-medium">
            Page {currentPage} of {totalPages}
          </div>

          {/* Next Button */}
          {currentPage < totalPages ? (
            <Link
              href={getPageUrl(currentPage + 1)}
              className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-accent hover:text-white transition-colors duration-200 font-medium"
            >
              Next →
            </Link>
          ) : (
            <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed font-medium">
              Next →
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
