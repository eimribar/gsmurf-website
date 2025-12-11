export default function PrivacyPolicy() {
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8">Privacy Policy</h1>
          <p className="text-zinc-400 mb-12">Last updated: December 8, 2024</p>

          <div className="space-y-8 text-zinc-300 leading-relaxed">
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                G-SMURF AI ("we," "our," or "us") collects information you provide directly to us, such as when you create an account, upload videos for analysis, or contact us for support.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Account information (email address, username)</li>
                <li>Videos and images you upload for analysis</li>
                <li>Usage data and analytics</li>
                <li>Device information and identifiers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our AI-powered movement analysis services</li>
                <li>Process and analyze your workout videos to provide feedback</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Develop new features and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">3. Video Data Processing</h2>
              <p className="mb-4">
                When you upload a video for analysis:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Videos are temporarily stored for processing</li>
                <li>AI analysis is performed using Google's Gemini API</li>
                <li>Videos are automatically deleted after analysis unless you choose to save them</li>
                <li>We do not share your videos with third parties except for processing purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">4. Data Storage and Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored using industry-standard encryption and security practices through our service providers including Supabase and Google Cloud.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">5. Third-Party Services</h2>
              <p className="mb-4">
                We use the following third-party services:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Google Gemini API for AI analysis</li>
                <li>Supabase for data storage and authentication</li>
                <li>Vercel for hosting and analytics</li>
              </ul>
              <p className="mt-4">
                These services have their own privacy policies and data handling practices.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Export your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">7. Children's Privacy</h2>
              <p>
                Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">8. Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
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