import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ServicePro - Drivers license',
  description: 'Ваш путь к званию водителя',
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
