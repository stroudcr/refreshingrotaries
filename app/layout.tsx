import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Rapidfire Rachel - Freedom, Gaming, Personal Protection',
  description: 'Official website of Rapidfire Rachel - Content creator, personal protection advocate, and gaming enthusiast.',
  keywords: 'Rapidfire Rachel, personal protection, gaming, outdoor enthusiast, freedom advocate',
  authors: [{ name: 'Rapidfire Rachel' }],
  openGraph: {
    title: 'Rapidfire Rachel',
    description: 'Freedom-loving content creator, personal protection advocate, gaming enthusiast',
    url: 'https://rapidfirerachel.com',
    siteName: 'Rapidfire Rachel',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rapidfire Rachel',
    description: 'Freedom-loving content creator, personal protection advocate, gaming enthusiast',
    creator: '@rachelbee333',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}