import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Rapidfire Rachel',
  description: 'Terms of Service for Rapidfire Rachel - The terms and conditions governing your use of our website and services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-950 pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-military text-cream mb-8">Terms of Service</h1>

        <div className="prose prose-invert prose-lg max-w-none text-cream/80">
          <p className="text-sm text-cream/60 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using rapidfirerachel.com (the &ldquo;Site&rdquo;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use this Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily view and use the materials (information or software) on Rapidfire Rachel&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the Site</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">3. Content and Intellectual Property</h2>

            <h3 className="text-xl font-semibold text-cream mb-2">Our Content</h3>
            <p className="mb-4">
              All content on this Site, including but not limited to text, graphics, logos, images, audio clips, video clips, data compilations, and software, is the property of Rapidfire Rachel or its content suppliers and is protected by United States and international copyright laws.
            </p>

            <h3 className="text-xl font-semibold text-cream mb-2">User-Generated Content</h3>
            <p>
              By submitting any content to our Site (including comments, contact form submissions, or any other materials), you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and distribute such content in connection with the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">4. Prohibited Uses</h2>
            <p className="mb-4">You may not use our Site:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
              <li>To collect or track the personal information of others</li>
              <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
              <li>For any obscene or immoral purpose</li>
              <li>To interfere with or circumvent the security features of the Site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">5. Blog Content (Arsenal)</h2>
            <p>
              The information provided in our Arsenal (blog) section is for educational and informational purposes only. The content represents personal opinions and experiences and should not be considered professional advice. Always consult with appropriate professionals for specific guidance related to personal protection, firearms, or any other specialized topics.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">6. Third-Party Services and Links</h2>

            <h3 className="text-xl font-semibold text-cream mb-2">External Links</h3>
            <p className="mb-4">
              Our Site may contain links to third-party websites or services that are not owned or controlled by Rapidfire Rachel. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>

            <h3 className="text-xl font-semibold text-cream mb-2">Printful Store</h3>
            <p className="mb-4">
              Purchases made through our shop are processed by Printful. All transactions, including payment processing, order fulfillment, shipping, and returns, are governed by Printful&apos;s terms of service and policies. We are not responsible for any issues related to orders placed through Printful.
            </p>

            <h3 className="text-xl font-semibold text-cream mb-2">Social Media</h3>
            <p>
              Our social media profiles and any content shared through social media platforms are subject to the terms of service of those respective platforms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">7. Newsletter Subscription</h2>
            <p>
              By subscribing to our newsletter, you agree to receive periodic email communications from us. You may unsubscribe at any time using the unsubscribe link provided in each email. We will not share your email address with third parties for marketing purposes without your consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">8. Disclaimer of Warranties</h2>
            <p>
              The materials on Rapidfire Rachel&apos;s website are provided on an &apos;as is&apos; basis. Rapidfire Rachel makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="mt-4">
              Further, Rapidfire Rachel does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">9. Limitation of Liability</h2>
            <p>
              In no event shall Rapidfire Rachel or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Rapidfire Rachel&apos;s website, even if Rapidfire Rachel or a Rapidfire Rachel authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">10. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Rapidfire Rachel, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to your violation of these Terms of Service or your use of the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">11. Privacy</h2>
            <p>
              Your use of our Site is also governed by our <a href="/privacy" className="text-orange-accent hover:underline">Privacy Policy</a>. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">12. Governing Law</h2>
            <p>
              These Terms of Service and any dispute or claim arising out of or related to them, their subject matter, or their formation (in each case, including non-contractual disputes or claims) shall be governed by and construed in accordance with the internal laws of the United States without giving effect to any choice or conflict of law provision or rule.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">13. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cream mb-4">14. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us through our <a href="/contact" className="text-orange-accent hover:underline">contact page</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}