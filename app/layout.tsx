import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Instrument_Sans, Instrument_Serif } from 'next/font/google'
import { AmbientBackground } from '@/components/site/ambient-background'
import SmoothScroll from '@/components/SmoothScroll'
import './globals.css'

const sans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans-display',
})

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif-display',
})

const mono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono-text',
})

export const metadata: Metadata = {
  title: 'Daryl Abiyyu — Web Designer',
  description:
    'Daryl Abiyyu is a web designer from Wonosobo, Indonesia, turning client inspirations into living digital realities. Open for projects and opportunities.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#070707',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="antialiased">
        <AmbientBackground />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

