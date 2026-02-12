import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://playitagainsams.com'),
  title: "Play It Again Sam's | Las Vegas' Only Gaming Gentlemen's Club | Since 1972",
  description: "Play It Again Sam's has been a Las Vegas fixture since 1972. Gaming, cocktails, live entertainment in a space that feels like old Vegas. Open 24/7.",
  openGraph: {
    title: "Play It Again Sam's | Las Vegas' Only Gaming Gentlemen's Club",
    description: "Your usual place. Since 1972. Gaming, cocktails, and live entertainment 24/7 in the heart of Las Vegas.",
    type: 'website',
    url: 'https://playitagainsams.com',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23E63946'/%3E%3Ctext x='50' y='67' font-size='60' font-family='serif' fill='white' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="bg-midnight text-cream font-dm-sans">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}