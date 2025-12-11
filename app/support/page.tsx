import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with G-Smurf AI. Contact our support team, browse frequently asked questions, and find resources for troubleshooting.',
  alternates: {
    canonical: 'https://gsmurf.com/support',
  },
};

export default function SupportPage() {
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8">Support</h1>
          <p className="text-zinc-400 mb-12 text-lg">Need help? We&apos;re here to assist you.</p>

          <div className="space-y-12 text-zinc-300 leading-relaxed">
            {/* Contact Section */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
              <p className="mb-6">
                Have a question, feedback, or need assistance? Reach out to our support team and we&apos;ll get back to you as soon as possible.
              </p>
              <a
                href="mailto:support@gsmurf.com"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                support@gsmurf.com
              </a>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-2">What sports does G-Smurf AI support?</h3>
                  <p className="text-zinc-400">
                    G-Smurf AI supports all sports and exercises including CrossFit, powerlifting, Olympic weightlifting, running, calisthenics, gymnastics, martial arts, and more. Simply record any movement and our AI will analyze your form.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-2">How does the AI analysis work?</h3>
                  <p className="text-zinc-400">
                    Record any exercise with your phone camera, and our advanced AI (powered by Google Gemini) analyzes your form in seconds. You&apos;ll receive detailed feedback on technique, posture, and specific areas for improvement, plus personalized drill recommendations.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-2">How much does G-Smurf AI cost?</h3>
                  <p className="text-zinc-400">
                    G-Smurf AI offers a credit-based system. New users receive free credits to try the app. Additional credits can be purchased through in-app purchases. Check the app for current pricing and packages.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Is my video data secure?</h3>
                  <p className="text-zinc-400">
                    Yes. Your videos are encrypted during transmission and processing. We only keep videos temporarily for analysis and delete them automatically unless you choose to save them. Read our <a href="/privacy" className="text-sky-400 hover:text-sky-300">Privacy Policy</a> for more details.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-2">How accurate is the AI feedback?</h3>
                  <p className="text-zinc-400">
                    Our AI is trained on extensive movement data and provides highly accurate form analysis. However, it&apos;s designed to complement, not replace, professional coaching. For best results, use clear lighting and record from an angle that shows your full body during the movement.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-2">I&apos;m having trouble logging in. What should I do?</h3>
                  <p className="text-zinc-400">
                    Try resetting your password using the &quot;Forgot Password&quot; link on the login screen. If you continue to experience issues, contact us at <a href="mailto:support@gsmurf.com" className="text-sky-400 hover:text-sky-300">support@gsmurf.com</a> with your email address and a description of the problem.
                  </p>
                </div>
              </div>
            </section>

            {/* Download Section */}
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Download the App</h2>
              <div className="flex flex-wrap gap-4">
                <a href="https://apps.apple.com/app/g-smurf-ai" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1276560000"
                    alt="Download on the App Store"
                    className="h-12"
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.gsmurf.ai" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="h-12"
                  />
                </a>
              </div>
            </section>

            {/* Resources Section */}
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Resources</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/privacy" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-bold text-white mb-2">Privacy Policy</h3>
                  <p className="text-zinc-400 text-sm">Learn how we handle your data</p>
                </a>
                <a href="/terms" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-bold text-white mb-2">Terms of Service</h3>
                  <p className="text-zinc-400 text-sm">Read our terms and conditions</p>
                </a>
              </div>
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
