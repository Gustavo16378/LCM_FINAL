import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { founders } from '../data/founders'

export default function Founders() {
  const { ref, isVisible } = useIntersectionObserver()
  const [focusedId, setFocusedId] = useState<string | null>(null)

  function handleCardClick(id: string) {
    setFocusedId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="bg-lcm-dark py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className="mb-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-lcm-orange" />
            <span className="text-lcm-orange text-xs font-bold tracking-[0.3em] uppercase">Fundadores</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter uppercase text-white leading-none">
            TRÊS MENTES.<br />UM LEGADO.
          </h2>
        </div>

        {/* Founders grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {founders.map((founder, i) => {
            const isMobileFocused = focusedId === founder.id
            const otherFocused = focusedId !== null && focusedId !== founder.id

            return (
              <div
                key={founder.id}
                className="group relative overflow-hidden cursor-pointer"
                onClick={() => handleCardClick(founder.id)}
                style={{
                  opacity: isVisible ? (otherFocused ? 0.45 : 1) : 0,
                  transform: isVisible
                    ? otherFocused ? 'scale(0.97)' : 'scale(1)'
                    : 'translateY(40px)',
                  transition: `opacity 0.4s ease-out ${i * 0.15 + 0.2}s, transform 0.4s ease-out ${i * 0.15 + 0.2}s`,
                }}
              >
                {/* Photo */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className={`w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-105 ${
                      isMobileFocused
                        ? 'grayscale-0'
                        : 'grayscale group-hover:grayscale-0'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lcm-dark via-transparent to-transparent" />
                  {/* Orange line */}
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-lcm-orange transition-all duration-500 ${
                      isMobileFocused ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                  {/* Mobile focus label */}
                  {isMobileFocused && (
                    <div className="absolute top-3 left-3 md:hidden">
                      <span className="px-2 py-1 bg-lcm-orange text-white text-xs font-black tracking-widest uppercase">
                        Em foco
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div
                  className={`p-6 border-b transition-colors duration-300 ${
                    isMobileFocused
                      ? 'bg-lcm-navy border-lcm-orange'
                      : 'bg-lcm-navy/40 border-white/10'
                  }`}
                >
                  <span className="text-lcm-orange text-xs font-bold tracking-widest uppercase">
                    {founder.role}
                  </span>
                  <h3 className="text-white font-black text-xl uppercase tracking-tighter mt-1 mb-3">
                    {founder.name}
                  </h3>
                  <p className="text-lcm-gray text-sm leading-relaxed">{founder.bio}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile hint */}
        <p className="md:hidden text-center text-lcm-gray text-xs tracking-wider mt-6">
          Toque em um fundador para focar
        </p>
      </div>
    </section>
  )
}
