import { useState } from 'react'
import { MapPin, Calendar, Users, ChevronRight } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { events, type Event } from '../data/events'
import EventModal from './EventModal'

type Filter = 'all' | 'open' | 'soon'

function EventCard({ event, onClick }: { event: Event; onClick: () => void }) {
  const date = new Date(event.date).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric',
  })

  return (
    <button
      onClick={onClick}
      className="group w-full text-left flex flex-col lg:flex-row overflow-hidden bg-white/5 border border-white/10 hover:border-lcm-orange/60 transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative lg:w-72 h-48 lg:h-auto overflow-hidden shrink-0">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-lcm-dark/30 group-hover:bg-lcm-dark/10 transition-colors" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-lcm-orange text-white text-xs font-bold tracking-widest uppercase">
            {event.distance}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-6 lg:p-8 flex-1">
        <div>
          <h3 className="text-white font-black text-2xl uppercase tracking-tighter mb-4">
            {event.name}
          </h3>
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex items-center gap-2 text-lcm-gray text-sm">
              <Calendar size={14} className="text-lcm-orange shrink-0" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2 text-lcm-gray text-sm">
              <MapPin size={14} className="text-lcm-orange shrink-0" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2 text-lcm-gray text-sm">
              <Users size={14} className="text-lcm-orange shrink-0" />
              <span>{event.expectedParticipants.toLocaleString('pt-BR')} participantes previstos</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {event.status === 'open' ? (
              <span className="px-4 py-2 bg-lcm-orange text-white text-xs font-bold tracking-wider uppercase">
                Inscrições Abertas
              </span>
            ) : (
              <span className="px-4 py-2 border border-white/20 text-lcm-gray text-xs font-bold tracking-wider uppercase">
                Em Breve
              </span>
            )}
            {event.status === 'open' && (
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            )}
          </div>
          <span className="flex items-center gap-1 text-lcm-orange text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            Ver detalhes <ChevronRight size={14} />
          </span>
        </div>
      </div>
    </button>
  )
}

export default function Events() {
  const [filter, setFilter] = useState<Filter>('all')
  const [selected, setSelected] = useState<Event | null>(null)
  const { ref, isVisible } = useIntersectionObserver()

  const filtered = filter === 'all' ? events : events.filter((e) => e.status === filter)

  return (
    <section id="eventos" className="bg-lcm-dark py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-lcm-orange" />
              <span className="text-lcm-orange text-xs font-bold tracking-[0.3em] uppercase">Agenda</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black tracking-tighter uppercase text-white leading-none">
              PRÓXIMOS<br />DESAFIOS
            </h2>
          </div>

          {/* Filter */}
          <div className="flex gap-2 mt-8 lg:mt-0">
            {(['all', 'open', 'soon'] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                  filter === f
                    ? 'bg-lcm-orange text-white'
                    : 'border border-white/20 text-lcm-gray hover:border-white hover:text-white'
                }`}
              >
                {f === 'all' ? 'Todos' : f === 'open' ? 'Abertas' : 'Em Breve'}
              </button>
            ))}
          </div>
        </div>

        {/* Events list */}
        <div className="flex flex-col gap-4">
          {filtered.map((event, i) => (
            <div
              key={event.id}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ease-out ${i * 0.1 + 0.2}s, transform 0.6s ease-out ${i * 0.1 + 0.2}s`,
              }}
            >
              <EventCard event={event} onClick={() => setSelected(event)} />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-lcm-gray text-xs tracking-wider">
          Inscrições via{' '}
          <a
            href="https://www.chipbrasil.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lcm-orange hover:underline"
          >
            Chip Brasil
          </a>{' '}
          — parceiro oficial da LCM Gestão Esportiva
        </p>
      </div>

      <EventModal event={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
