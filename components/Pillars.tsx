export default function Pillars() {
  const pillars = [
    {
      icon: '🍸',
      title: 'Drinks',
      description: 'Happy Hour daily 7AM–7PM. Cold drinks that won\'t leave you dry.',
    },
    {
      icon: '🎰',
      title: 'Gaming',
      description: 'The only gentlemen\'s club in Vegas where you can play slots between cocktails. $2.8M paid out in 2025.',
    },
    {
      icon: '💃',
      title: 'Entertainment',
      description: 'Live dancers, rotating DJs, and an atmosphere you can\'t fake.',
    },
  ]

  return (
    <section id="pillars" className="py-20 px-6 scroll-fade opacity-0 translate-y-8 transition-all duration-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="pillar-card text-center p-8 rounded-lg border border-red-neon/20 bg-midnight-dark/50"
            >
              <div className="text-4xl mb-4 text-red-neon">{pillar.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-cream">{pillar.title}</h3>
              <p className="text-cream/70">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}