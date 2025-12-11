import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gsmurf.com'),
  title: {
    default: 'G-Smurf AI | AI-Powered Workout Form Analysis',
    template: '%s | G-Smurf AI',
  },
  description: 'Get instant AI feedback on your exercise form. Record any workout, get detailed technique analysis, and improve faster with personalized coaching. Available on iOS and Android.',
  keywords: [
    'workout form analysis',
    'AI fitness coach',
    'exercise form checker',
    'workout technique analysis',
    'fitness AI',
    'form correction app',
    'personal trainer AI',
    'workout analysis app',
    'exercise feedback',
    'gym form checker',
    'CrossFit form analysis',
    'powerlifting form check',
    'running form analysis',
    'calisthenics form',
  ],
  authors: [{ name: 'Iron Elder Industries' }],
  creator: 'Iron Elder Industries',
  publisher: 'Iron Elder Industries',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gsmurf.com',
    siteName: 'G-Smurf AI',
    title: 'G-Smurf AI | AI-Powered Workout Form Analysis',
    description: 'Get instant AI feedback on your exercise form. Record any workout, get detailed technique analysis, and improve faster with personalized coaching.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'G-Smurf AI - Your AI Workout Coach',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'G-Smurf AI | AI-Powered Workout Form Analysis',
    description: 'Get instant AI feedback on your exercise form. Record any workout, get detailed technique analysis, and improve faster.',
    images: ['/og-image.png'],
    creator: '@gsmurfai',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'G-Smurf AI',
  },
  formatDetection: {
    telephone: false,
  },
  category: 'fitness',
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'G-Smurf AI',
  description: 'AI-powered workout form analysis app. Get instant feedback on your exercise technique.',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '1000',
  },
  author: {
    '@type': 'Organization',
    name: 'Iron Elder Industries',
    url: 'https://gsmurf.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://gsmurf.com" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
