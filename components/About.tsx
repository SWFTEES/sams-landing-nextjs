export default function About() {
  return (
    <section id="about" className="py-20 px-6 scroll-fade opacity-0 translate-y-8 transition-all duration-800">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-pinyon text-4xl md:text-6xl mb-8 text-cream">
          The Last Real Room in Vegas
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-cream/90">
          Play It Again Sam&apos;s has been a Las Vegas fixture since 1972 — first as a legendary jazz club, 
          now as the city&apos;s only gaming gentlemen&apos;s club. Cocktails, live entertainment, and slots 
          in a space that feels like a rediscovered piece of old Vegas. Skip the Strip. You found your place.
        </p>
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-[1px] bg-red-neon/50"></div>
        </div>
      </div>
    </section>
  )
}