import type { Metadata } from 'next'
import { Work_Sans as WorkSans, Crimson_Pro as CrimsonPro } from "next/font/google"
import './globals.css'

const workSans = WorkSans({
  subsets: ["latin"],
  variable: "--font-work-sans",
})

const crimsonPro = CrimsonPro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
})

export const metadata: Metadata = {
  title: 'Why isn\'t Everyone using this? | Thoughtfully chosen tools for a more intentional & joyful digital life',
  description: 'A curated collection of thoughtfully chosen tools for a more intentional & joyful digital life. Discover productivity apps, creativity tools, and more.',
  keywords: 'productivity tools, digital tools, creativity apps, organization tools, mac apps, software recommendations',
  authors: [{ name: 'Gary Smith' }],
  creator: 'Gary Smith',
  publisher: 'Gary Smith',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://garysmith.me'),
  openGraph: {
    title: 'Why isn\'t Everyone using this?',
    description: 'Thoughtfully chosen tools for a more intentional & joyful digital life.',
    url: 'https://garysmith.me',
    siteName: 'Why isn\'t Everyone using this?',
    images: [
      {
        url: '/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Why isn\'t Everyone using this? - A collection of thoughtfully chosen tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why isn\'t Everyone using this?',
    description: 'Thoughtfully chosen tools for a more intentional & joyful digital life.',
    images: ['/hero-bg.png'],
    creator: '@garysmith',
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${crimsonPro.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#FFFBEB" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-black antialiased">
        {children}
      </body>
    </html>
  )
}
