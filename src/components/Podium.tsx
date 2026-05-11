import { useState } from 'react'
import { Trophy, Calendar, MapPin } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { lastEvent, type PodiumAthlete } from '../data/podium'

const MEDAL_CONFIG = {
  1: { label: '1º', color: 'text-yellow-400', border: 'border-yellow-400', bg: 'bg-yellow-400/10', bar: 'h-32' },
  2: { label: '2º', color: 'text-slate-300', border: 'border-slate-300', bg: 'bg-slate-300/10', bar: 'h-24' },
  3: { label: '3º', color: 'text-amber-600', border: 'border-amber-600', bg: 'bg-amber-600/10', bar: 'h-16' },
} as const

function AthleteCard({ athlete, delay }: { athlete: PodiumAthlete; delay: number }) {
  const cfg = MEDAL_CONFIG[athlete.position]
  const isFirst = athlete.position === 1

  return (
    <div
      className={`flex flex-col items-center gap-3 ${isFirst ? 'order-2' : athlete.position === 2 ? 'order-1' : 'order-3'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Photo */}
      <div className={`relative ${isFirst ? 'w-28 h-28' : 'w-20 h-20'}`}>
        <img
          src={athlete.photo}
          alt={athlete.name}
          className={`w-full h-full rounded-full object-cover border-2 ${cfg.border} grayscale-[20%]`}
        />
        <div
          className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full ${cfg.bg} border ${cfg.border} flex items-center justify-center`}
        >
          <span className={`text-xs font-black ${cfg.color}`}>{cfg.label}</span>
        </div>
      </div>

      {/* Info */}
      <div className="text-center mt-2">
        <p className={`font-black uppercase tracking-tighter text-sm leading-tight ${isFirst ? 'text-white' : 'text-white/80'}`}>
          {athlete.name}
        </p>
        <p className={`font-black text-lg mt-1 ${cfg.color}`}>{athlete.time}</p>
      </div>

      {/* Podium bar */}
      <div className={`w-full ${cfg.bar} ${cfg.bg} border-t-2 ${cfg.border} flex items-center justify-center`}>
        <Trophy size={isFirst ? 20 : 14} className={cfg.color} />
      </div>
    </div>
  )
}

export default function Podium() {
  const { ref, isVisible } = useIntersectionObserver()
  const [activeCategory, setActiveCategory] = useState(0)

  const category = lastEvent.categories[activeCategory]
  const eventDate = new Date(lastEvent.date).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric',
  })

  return (
    <section id="podium" className="bg-lcm-dark py-20 lg:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className="mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-lcm-orange" />
            <span className="text-lcm-orange text-xs font-bold tracking-[0.3em] uppercase">Última Corrida</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter uppercase text-white leading-none mb-6">
            PÓDIO.
          </h2>

          {/* Event info */}
          <div className="flex flex-wrap gap-6">
            <p className="text-white font-black text-xl uppercase tracking-tighter">
              {lastEvent.name}
              <span className="text-lcm-orange"> · {lastEvent.distance}</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-2">
            <span className="flex items-center gap-2 text-lcm-gray text-sm">
              <Calendar size={13} className="text-lcm-orange" />{eventDate}
            </span>
            <span className="flex items-center gap-2 text-lcm-gray text-sm">
              <MapPin size={13} className="text-lcm-orange" />{lastEvent.location}
            </span>
          </div>
        </div>

        {/* Category tabs */}
        <div
          className="flex gap-2 mb-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.15s',
          }}
        >
          {lastEvent.categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                activeCategory === i
                  ? 'bg-lcm-orange text-white'
                  : 'border border-white/20 text-lcm-gray hover:border-white hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Podium */}
        <div
          className="flex items-end justify-center gap-4 lg:gap-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.7s ease-out 0.3s, transform 0.7s ease-out 0.3s',
          }}
        >
          {category.athletes.map((athlete) => (
            <AthleteCard
              key={athlete.name}
              athlete={athlete}
              delay={athlete.position === 1 ? 0 : athlete.position === 2 ? 100 : 200}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-lcm-gray text-xs tracking-wider">
          Cronometragem oficial por{' '}
          <a href="#lcm-crono" className="text-lcm-orange hover:underline">LCM Crono</a>
          {' '}via tecnologia Chip Brasil
        </p>
      </div>
    </section>
  )
}
