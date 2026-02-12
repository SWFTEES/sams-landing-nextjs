import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gradient-to-b from-midnight to-midnight-dark border-t border-red-neon/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <Image
            src="/logo.svg"
            alt="Play It Again Sam's"
            width={200}
            height={60}
            className="mx-auto opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
        
        <div className="flex justify-center items-center gap-4 mb-10">
          <Link
            href="https://instagram.com/samscabaret"
            target="_blank"
            className="social-icon social-icon-primary"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
          
          <Link
            href="https://www.facebook.com/playitagainsamslv"
            target="_blank"
            className="social-icon"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </Link>
          
          <Link
            href="https://x.com/SamsCabaret"
            target="_blank"
            className="social-icon"
            aria-label="X (Twitter)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left text-sm text-cream/60">
          <div>
            <p className="font-medium text-cream/80 mb-2">Address</p>
            <p>4120 Spring Mountain Rd<br />Las Vegas, NV 89102</p>
          </div>
          <div>
            <p className="font-medium text-cream/80 mb-2">Contact</p>
            <p>Phone: <Link href="tel:7028761550" className="hover:text-red-neon transition-colors">(702) 876-1550</Link></p>
            <p>Instagram: <Link href="https://instagram.com/samscabaret" target="_blank" className="hover:text-red-neon transition-colors">@samscabaret</Link></p>
            <p>Facebook: <Link href="https://www.facebook.com/playitagainsamslv" target="_blank" className="hover:text-red-neon transition-colors">@playitagainsamslv</Link></p>
            <p>X: <Link href="https://x.com/SamsCabaret" target="_blank" className="hover:text-red-neon transition-colors">@SamsCabaret</Link></p>
          </div>
          <div>
            <p className="font-medium text-cream/80 mb-2">Hours</p>
            <p>Open 24/7<br />Since 1972</p>
          </div>
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-red-neon/10 text-xs text-cream/40">
          <p>© 2026 Play It Again Sam&apos;s. All rights reserved.</p>
          <Link
            href="https://playitagainsams.com"
            target="_blank"
            className="inline-block mt-3 text-cream/40 hover:text-red-neon transition-colors"
          >
            Visit our full website → playitagainsams.com
          </Link>
        </div>
      </div>
    </footer>
  )
}