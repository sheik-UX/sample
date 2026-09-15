import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import './globals.css';

const davinciSerif = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-davinci',
  weight: ['400', '500'],
  style: ['normal', 'italic'],
});

const helveticaNow = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-helvetica-now',
  weight: ['400', '500'],
});

export const viewport: Viewport = {
  themeColor: '#c4c3b6',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Sample — Luxury Wedding & Architectural Event Production',
  description:
    'A Renaissance gallery on putty paper. Bespoke event direction, spatial architecture, and monumental celebration production.',
  openGraph: {
    title: 'Sample — Moments That Stay',
    description:
      'Curated event management, spatial engineering, and monumental celebration production.',
    url: 'https://sample.design',
    siteName: 'Sample',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${davinciSerif.variable} ${helveticaNow.variable} font-sans`}
    >
      <body className="bg-[#c4c3b6] text-[#000000] antialiased selection:bg-[#000000] selection:text-[#ffffff] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
