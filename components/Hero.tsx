import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero" className="hero-section relative flex flex-col items-center justify-center px-6 min-h-[90vh]">
      <div className="vignette" />
      <div className="hero-bg" />
      <div className="relative z-10 w-full max-w-4xl mx-auto animate-fadeIn">
        <div className="text-center mb-8 md:mb-10">
          <Image 
            src="/logo.svg" 
            alt="Play It Again Sam's" 
            width={400} 
            height={120} 
            className="mx-auto mb-4 w-full max-w-[400px] h-auto neon-glow-svg animate-pulse-glow"
            priority
          />
          <p className="font-bebas text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1 text-cream/90">
            Your usual place. Since 1972.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-cream/80">
            Las Vegas&apos; Only Gaming Gentlemen&apos;s Club
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:flex md:justify-center gap-3 md:gap-6 mb-8 text-sm md:text-base">
          <div className="flex items-center justify-center gap-2 p-2 bg-midnight-dark/40 rounded-lg backdrop-blur-sm">
            <span className="text-red-neon">🕐</span>
            <span className="font-medium whitespace-nowrap">Open 24/7</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2 bg-midnight-dark/40 rounded-lg backdrop-blur-sm">
            <span className="text-red-neon">🍸</span>
            <span className="font-medium whitespace-nowrap">Happy Hour 7-7</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2 bg-midnight-dark/40 rounded-lg backdrop-blur-sm">
            <span className="text-red-neon">💰</span>
            <span className="font-medium whitespace-nowrap">$2.8M Paid 2025</span>
          </div>
          <Link 
            href="https://maps.google.com/?q=4120+Spring+Mountain+Rd+Las+Vegas+NV" 
            target="_blank" 
            className="flex items-center justify-center gap-2 p-2 bg-midnight-dark/40 rounded-lg backdrop-blur-sm hover:bg-red-neon/20 transition-all"
          >
            <span className="text-red-neon">📍</span>
            <span className="font-medium underline whitespace-nowrap">4120 Spring Mountain</span>
          </Link>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
          <Link 
            href="#events" 
            className="flex items-center justify-center gap-2 px-6 py-4 bg-red-neon text-white rounded-lg font-bebas text-lg uppercase tracking-wider transition-all hover:bg-red-600 hover:shadow-[0_0_30px_rgba(230,57,70,0.6)] animate-pulse-button"
          >
            <span>🎰</span>
            <span>See What&apos;s On Tonight</span>
          </Link>
          <Link 
            href="tel:7028761550" 
            className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-red-neon text-red-neon rounded-lg font-bebas text-lg uppercase tracking-wider transition-all hover:bg-red-neon hover:text-white"
          >
            <span>📞</span>
            <span>Call Us</span>
          </Link>
          <Link 
            href="https://maps.google.com/?q=4120+Spring+Mountain+Rd+Las+Vegas+NV" 
            target="_blank" 
            className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-red-neon text-red-neon rounded-lg font-bebas text-lg uppercase tracking-wider transition-all hover:bg-red-neon hover:text-white"
          >
            <span>📍</span>
            <span>Get Directions</span>
          </Link>
        </div>
        
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-40">
          <svg className="w-5 h-5 text-red-neon animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}