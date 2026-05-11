import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { founders } from '../data/founders'

export default function Founders() {
  const { ref, isVisible } = useIntersectionObserver()

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
          {founders.map((founder, i) => (
            <div
              key={founder.id}
              className="group relative overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.5s ease-out ${i * 0.15 + 0.2}s, transform 0.5s ease-out ${i * 0.15 + 0.2}s`,
              }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lcm-dark via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-lcm-orange group-hover:w-full transition-all duration-500" />
              </div>

              {/* Info */}
              <div className="p-6 bg-lcm-navy/40 border-b border-white/10 group-hover:bg-lcm-navy transition-colors duration-300">
                <span className="text-lcm-orange text-xs font-bold tracking-widest uppercase">
                  {founder.role}
                </span>
                <h3 className="text-white font-black text-xl uppercase tracking-tighter mt-1 mb-3">
                  {founder.name}
                </h3>
                <p className="text-lcm-gray text-sm leading-relaxed">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
