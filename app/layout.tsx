import type { Metadata } from 'next';
import Script from 'next/script';
import { Oswald, Inter } from 'next/font/google';
import { SITE, CONTACT } from '@/lib/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

// ---------------------------------------------------------------------------
// Fonts
// ---------------------------------------------------------------------------
const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: {
    template: '%s | Único Futbol Club',
    default: 'Único Futbol Club | Youth Soccer in Santa Barbara',
  },
  description: SITE.description,
  keywords: [
    'youth soccer',
    'Santa Barbara soccer',
    'competitive soccer club',
    'Único Futbol Club',
    'kids soccer',
    'Cal South',
    'Coast Soccer League',
  ],
  authors: [{ name: 'Único Futbol Club' }],
  openGraph: {
    title: 'Único Futbol Club | Youth Soccer in Santa Barbara',
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.nameAccented,
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Structured Data
// ---------------------------------------------------------------------------
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsOrganization',
  name: SITE.nameAccented,
  description: SITE.description,
  url: SITE.url,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santa Barbara',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  sport: 'Soccer',
  sameAs: [CONTACT.instagram.url],
  logo: `${SITE.url}/images/unico-logo.webp`,
};

// ---------------------------------------------------------------------------
// Root Layout
// ---------------------------------------------------------------------------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />

        {/* GHL Chat Widget — must use next/script so it loads properly */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69b2f2b60ec300a774ad843f"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
