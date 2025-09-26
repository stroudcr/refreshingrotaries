import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Rapidfire Rachel',
  description: 'Privacy Policy for Rapidfire Rachel - How we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-950 pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-military text-cream mb-8">Privacy Policy</h1>

        <div className="prose prose-invert prose-lg max-w-none text-cream/80">
          <p className="text-sm text-cream/60 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">Introduction</h2>
            <p>
              Rapidfire Rachel ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website rapidfirerachel.com (the "Site").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-cream mb-2">Information You Provide to Us</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Contact information when you use our contact form (name, email, message)</li>
              <li>Email address when you subscribe to our newsletter</li>
              <li>Any other information you voluntarily provide to us</li>
            </ul>

            <h3 className="text-xl font-semibold text-cream mb-2">Information Automatically Collected</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>IP address</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>

            <h3 className="text-xl font-semibold text-cream mb-2">Analytics</h3>
            <p>
              We use Vercel Analytics to help us understand how our visitors use the Site. These tools collect information sent by your browser, including the pages you visit, your use of third-party applications, and other information that assists us in improving the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Respond to your inquiries via the contact form</li>
              <li>Send you newsletters and updates (with your consent)</li>
              <li>Improve and optimize our website</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Protect against fraudulent or illegal activity</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">Third-Party Services</h2>

            <h3 className="text-xl font-semibold text-cream mb-2">Sanity CMS</h3>
            <p className="mb-4">
              We use Sanity as our content management system. Content data is stored and managed through Sanity's services. Please refer to Sanity's privacy policy for more information.
            </p>

            <h3 className="text-xl font-semibold text-cream mb-2">Instagram</h3>
            <p className="mb-4">
              We display Instagram content on our Site through the Instagram Graph API. When you interact with Instagram content, you are subject to Instagram's privacy policy.
            </p>

            <h3 className="text-xl font-semibold text-cream mb-2">Printful</h3>
            <p className="mb-4">
              When you make purchases through our shop, you are redirected to our Printful Quick Store. Printful handles all payment processing and order fulfillment. Your purchase information is subject to Printful's privacy policy.
            </p>

            <h3 className="text-xl font-semibold text-cream mb-2">Social Media</h3>
            <p>
              Our Site contains links to our social media profiles (Instagram, Facebook, X, TikTok, YouTube). When you click these links, you will be directed to third-party platforms governed by their respective privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">Cookies</h2>
            <p>
              We use essential cookies to maintain your session and preferences. We also use analytics cookies to understand how visitors interact with our Site. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">Children's Privacy</h2>
            <p>
              Our Site is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are under 13, please do not provide any information on this Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">Newsletter</h2>
            <p>
              If you subscribe to our newsletter, we will use your email address to send you updates, news, and promotional content. You can unsubscribe at any time by clicking the unsubscribe link in any email or by contacting us directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us through our <a href="/contact" className="text-orange-accent hover:underline">contact page</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}