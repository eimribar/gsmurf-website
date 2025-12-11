import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

// JSON-LD Structured Data - MobileApplication
const appJsonLd = {
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

// JSON-LD Structured Data - Organization
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'G-Smurf AI',
  legalName: 'Iron Elder Industries',
  url: 'https://gsmurf.com',
  logo: 'https://gsmurf.com/logo-transparent.png',
  description: 'AI-powered workout form analysis platform helping athletes improve their exercise technique.',
  email: 'support@gsmurf.com',
  sameAs: [
    'https://twitter.com/gsmurfai',
  ],
  foundingDate: '2024',
  founders: [
    {
      '@type': 'Person',
      name: 'Iron Elder Industries',
    },
  ],
};

// JSON-LD Structured Data - WebSite
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'G-Smurf AI',
  url: 'https://gsmurf.com',
  description: 'AI-powered workout form analysis - Record any exercise, get instant AI feedback on your technique.',
  publisher: {
    '@type': 'Organization',
    name: 'Iron Elder Industries',
  },
};

// JSON-LD Structured Data - FAQPage
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What sports and exercises does G-Smurf AI support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'G-Smurf AI supports all sports and exercises including CrossFit, powerlifting, running, calisthenics, bodybuilding, Olympic weightlifting, gymnastics, and more. Record any movement and get instant AI feedback.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the AI workout analysis work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simply record your exercise using the app. Our AI analyzes your form in seconds, providing detailed feedback on posture, timing, balance, and technique. You will receive specific recommendations for improvement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is G-Smurf AI free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'G-Smurf AI offers free analysis credits to get started. Additional features and unlimited analyses are available through subscription plans on iOS App Store and Google Play Store.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the AI analysis accurate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'G-Smurf AI uses advanced multimodal AI technology to analyze movement patterns. While it provides valuable feedback, it is designed to supplement, not replace, professional coaching. Always consult with qualified trainers for personalized guidance.',
      },
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M8J72DKW');
          `}
        </Script>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7XYRRHWMRE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7XYRRHWMRE');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M8J72DKW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
