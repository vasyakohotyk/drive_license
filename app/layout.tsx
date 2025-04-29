import type { Metadata } from 'next'
import './globals.css'

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ServicePro — Водительские права',
  description: 'Оформление водительских прав в России быстро и надёжно.',
  generator: 'Next.js',
  keywords: ['водительские права', 'оформление прав', 'ServicePro'],
  creator: 'ServicePro',
  metadataBase: new URL('https://drive-license-six.vercel.app'),
  openGraph: {
    title: 'ServicePro — Водительские права',
    description: 'Легальное оформление прав в РФ ',
    url: 'https://drive-license-six.vercel.app',
    siteName: 'ServicePro',
    images: [
      {
      
        width: 800,
        height: 600,
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
