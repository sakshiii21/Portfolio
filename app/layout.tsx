import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sakshi Singh | Software Engineer & Full Stack Developer',
  description: 'Building impactful digital experiences with code, creativity, and curiosity. Passionate about React, Next.js, AI tools, and solving real-world problems.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Sakshi Singh' }],
  creator: 'Sakshi Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Sakshi Singh | Software Engineer & Full Stack Developer',
    description: 'Building impactful digital experiences with code, creativity, and curiosity.',
    siteName: 'Sakshi Singh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sakshi Singh | Software Engineer & Full Stack Developer',
    description: 'Building impactful digital experiences with code, creativity, and curiosity.',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F1E7' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1512' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${caveat.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background">
        <ThemeProvider>
          {children}
          <div className="grain-overlay" />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
