import Link from 'next/link'

interface StickyBarProps {
  visible: boolean
}

export default function StickyBar({ visible }: StickyBarProps) {
  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 py-3 px-4 bg-midnight-dark/95 backdrop-blur-md border-b border-red-neon/20 transform transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm">
            <span className="hidden sm:flex items-center gap-1">
              <span className="text-red-neon">🕐</span>
              <span className="font-medium">24/7</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="text-red-neon">🍸</span>
              <span className="font-medium">Happy Hour 7-7</span>
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <span className="text-red-neon">💰</span>
              <span className="font-medium">$2.8M Paid</span>
            </span>
            <Link 
              href="https://maps.google.com/?q=4120+Spring+Mountain+Rd+Las+Vegas+NV" 
              target="_blank" 
              className="flex items-center gap-1 hover:text-red-neon transition-colors"
            >
              <span className="text-red-neon">📍</span>
              <span className="font-medium underline">4120 Spring Mountain</span>
            </Link>
          </div>
          <Link 
            href="tel:7028761550" 
            className="flex items-center gap-1 px-3 py-1.5 bg-red-neon text-white rounded font-bebas text-sm uppercase tracking-wider hover:bg-red-600 transition-all"
          >
            <span>📞</span>
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">Call</span>
          </Link>
        </div>
      </div>
    </div>
  )
}