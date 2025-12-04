import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Rapidfire Rachel - Freedom, Liberty, Personal Protection',
  description: 'Official website of Rapidfire Rachel - Freedom-loving American Woman Encouraging Others to Take an Active Role in Their Personal Protection',
  keywords: 'Rapidfire Rachel, personal protection, outdoor enthusiast, freedom advocate',
  authors: [{ name: 'Rapidfire Rachel' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Rapidfire Rachel',
    description: 'Freedom-loving American Woman Encouraging Others to Take an Active Role in Their Personal Protection',
    url: 'https://rapidfirerachel.com',
    siteName: 'Rapidfire Rachel',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rapidfire Rachel',
    description: 'Freedom-loving American Woman Encouraging Others to Take an Active Role in Their Personal Protection',
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
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Rapidfire Rachel',
    url: 'https://rapidfirerachel.com',
    logo: 'https://rapidfirerachel.com/images/gallery/Mainlogo.svg',
    sameAs: [
      'https://instagram.com/rachelbee333',
      'https://facebook.com/rapidfirerachel',
      'https://x.com/rapidfirerachel',
      'https://tiktok.com/@rapidfirerachel',
      'https://youtube.com/@rapidfirerachel',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: 'https://rapidfirerachel.com/contact',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rapidfire Rachel',
    url: 'https://rapidfirerachel.com',
    description: 'Freedom-loving American Woman Encouraging Others to Take an Active Role in Their Personal Protection',
    inLanguage: 'en-US',
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
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
        <Analytics />
      </body>
    </html>
  )
}