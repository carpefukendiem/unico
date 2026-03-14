import type { Metadata } from 'next';
import { Oswald, Inter } from 'next/font/google';
import { SITE, CONTACT } from '@/lib/constants';
import LayoutClient from '@/components/LayoutClient';
import GHLWidgetDeferred from '@/components/GHLWidgetDeferred';
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
        {/* DNS-prefetch for 3rd-party origins (chat widget loads afterInteractive;
            full preconnect opens TCP connections too early and competes with
            critical CSS/JS/image loading on slow connections) */}
        <link rel="dns-prefetch" href="https://widgets.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://services.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://assets.cdn.filesafe.space" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LayoutClient>{children}</LayoutClient>

        {/* GHL Chat Widget — deferred until interaction or 5s to keep reCAPTCHA off critical path */}
        <GHLWidgetDeferred />
      </body>
    </html>
  );
}
