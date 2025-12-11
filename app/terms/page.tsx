import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read G-Smurf AI Terms of Service including usage policies, medical disclaimers, subscription terms, and liability limitations.',
  alternates: {
    canonical: 'https://gsmurf.com/terms',
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo-transparent.png" alt="G-SMURF AI" className="h-8 w-auto" />
            <img src="/logo-text.png" alt="G-SMURF AI" className="h-6 w-auto" />
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8">Terms of Service</h1>
          <p className="text-zinc-400 mb-12">Last updated: December 8, 2024</p>

          <div className="space-y-8 text-zinc-300 leading-relaxed">
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using G-SMURF AI ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">2. Description of Service</h2>
              <p className="mb-4">
                G-SMURF AI provides AI-powered movement analysis for athletic performance improvement. The Service includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Video upload and analysis capabilities</li>
                <li>Biomechanical feedback and recommendations</li>
                <li>Performance tracking and progress monitoring</li>
                <li>Personalized training suggestions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">3. User Accounts</h2>
              <p className="mb-4">To use certain features of the Service, you must create an account. You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Be responsible for all activities under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">4. Acceptable Use</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Upload inappropriate, offensive, or illegal content</li>
                <li>Use the Service for any unlawful purpose</li>
                <li>Attempt to reverse engineer or hack the Service</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Impersonate others or provide false information</li>
                <li>Share your account with unauthorized users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">5. Content Ownership</h2>
              <p className="mb-4">
                <strong>Your Content:</strong> You retain ownership of videos and content you upload. By uploading content, you grant us a license to use, process, and analyze it for providing the Service.
              </p>
              <p>
                <strong>Our Content:</strong> The Service, including its design, features, and content (excluding user content), is owned by Iron Elder Industries and protected by intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">6. Medical Disclaimer</h2>
              <p className="mb-4 font-semibold text-yellow-400">
                IMPORTANT: G-SMURF AI is not a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Always consult with qualified healthcare providers before starting any exercise program</li>
                <li>The Service provides educational information only</li>
                <li>We are not responsible for injuries resulting from following our recommendations</li>
                <li>Stop exercising immediately if you experience pain or discomfort</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IRON ELDER INDUSTRIES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">8. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Iron Elder Industries, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of the Service or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">9. Subscription and Payments</h2>
              <p className="mb-4">
                If you purchase a subscription:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Billing is handled through Apple App Store or Google Play Store</li>
                <li>Subscriptions auto-renew unless cancelled</li>
                <li>Refunds are subject to the app store's refund policy</li>
                <li>Prices may change with reasonable notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">10. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the Service will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. If we make material changes, we will notify you through the Service or via email. Your continued use of the Service after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">13. Contact Information</h2>
              <p>
                For questions about these Terms, please contact us at:
              </p>
              <p className="mt-4">
                Email: support@gsmurf.ai<br />
                Address: Iron Elder Industries<br />
                United States
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <a href="/" className="text-sky-400 hover:text-sky-300 font-medium">← Back to Home</a>
          </div>
        </div>
      </main>
    </div>
  );
}