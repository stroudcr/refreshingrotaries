import { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
import { ContactInfo } from '@/components/contact-info'

export const metadata: Metadata = {
  title: 'Contact - Rapidfire Rachel',
  description: 'Get in touch with Rapidfire Rachel for business inquiries, collaborations, and speaking engagements.',
  alternates: {
    canonical: 'https://rapidfirerachel.com/contact',
  },
  openGraph: {
    title: 'Contact - Rapidfire Rachel',
    description: 'Get in touch with Rapidfire Rachel for business inquiries, collaborations, and speaking engagements.',
    url: 'https://rapidfirerachel.com/contact',
    siteName: 'Rapidfire Rachel',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact - Rapidfire Rachel',
    description: 'Get in touch with Rapidfire Rachel for business inquiries, collaborations, and speaking engagements.',
    creator: '@rachelbee333',
  },
}

export default function ContactPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Rapidfire Rachel',
    url: 'https://rapidfirerachel.com/contact',
    description: 'Get in touch with Rapidfire Rachel for business inquiries, collaborations, and speaking engagements.',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://rapidfirerachel.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact',
        item: 'https://rapidfirerachel.com/contact',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-military mb-4">
              LET&apos;S <span className="text-gradient">CONNECT</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a question, business inquiry, or want to collaborate? I&apos;d love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  )
}