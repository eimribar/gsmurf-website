import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020202] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-8">
          <img
            src="/logo-transparent.png"
            alt="G-Smurf AI"
            className="w-24 h-24 mx-auto opacity-50"
          />
        </div>
        <h1 className="text-7xl md:text-9xl font-black text-white mb-4 tracking-tighter">404</h1>
        <p className="text-xl md:text-2xl text-zinc-400 mb-8">
          Page not found
        </p>
        <p className="text-zinc-500 mb-12 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-full transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
