import Link from 'next/link'

export default function VIP() {
  return (
    <section id="vip" className="py-20 px-6 bg-gradient-to-b from-midnight to-red-900/10 scroll-fade opacity-0 translate-y-8 transition-all duration-800">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cream">Book Your Night</h2>
        <p className="text-lg md:text-xl mb-10 text-cream/80">
          Bachelor parties, VIP rooms, private events. Call or DM us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="tel:7028761550"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-neon text-white rounded-lg font-bebas uppercase tracking-wider hover:bg-red-600 transition-all hover:shadow-[0_0_20px_rgba(230,57,70,0.5)]"
          >
            <span>📞</span>
            <span>Call Now</span>
          </Link>
          <Link
            href="https://instagram.com/samscabaret"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-red-neon text-red-neon rounded-lg font-bebas uppercase tracking-wider hover:bg-red-neon hover:text-white transition-all"
          >
            <span>💬</span>
            <span>DM on Instagram</span>
          </Link>
        </div>
      </div>
    </section>
  )
}