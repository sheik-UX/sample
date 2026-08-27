import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Newsreader } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-newsreader',
  style: ['normal', 'italic'],
});

export const viewport: Viewport = {
  themeColor: '#FDFDFD',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'PaperFlow — Flow Platform & Smart Workflows',
  description:
    'Streamline operations with smart workflows. Optimize your daily tasks and harness data for clear outcomes with the Paperflow Design platform.',
  openGraph: {
    title: 'PaperFlow — Flow Platform & Smart Workflows',
    description:
      'Streamline operations with smart workflows. Optimize your daily tasks and harness data for clear outcomes.',
    url: 'https://paperflow.design',
    siteName: 'PaperFlow Design',
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
      className={`${inter.variable} ${jetbrainsMono.variable} ${newsreader.variable} font-sans`}
    >
      <body className="bg-[#FDFDFD] text-[#111827] antialiased selection:bg-[#FF5722] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
