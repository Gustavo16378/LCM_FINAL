import { MessageCircle } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { sponsors } from '../data/sponsors'
import { events } from '../data/events'

export default function Sponsors() {
  const { ref, isVisible } = useIntersectionObserver()
  const annual = sponsors.filter((s) => s.type === 'annual')
  const perEvent = sponsors.filter((s) => s.type === 'event')

  return (
    <section id="patrocinadores" className="bg-lcm-light py-20 lg:py-28" ref={ref}>
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
            <span className="text-lcm-orange text-xs font-bold tracking-[0.3em] uppercase">Parceiros</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter uppercase text-lcm-dark leading-none">
            QUEM ACREDITA<br />NO ESPORTE.
          </h2>
        </div>

        {/* Annual sponsors */}
        <div
          className="mb-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.2s',
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-lcm-orange text-white text-xs font-black tracking-widest uppercase">
              Parceiro Oficial
            </span>
            <span className="text-lcm-gray text-xs tracking-wider">Presente em todas as corridas do ano</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {annual.map((s) => (
              <a
                key={s.id}
                href={s.website ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-6 bg-lcm-dark border-2 border-lcm-orange hover:bg-lcm-navy transition-colors duration-200"
              >
                <img
                  src={s.logo}
                  alt={s.name}
                  className="max-h-10 object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Per-event sponsors */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.3s',
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 border border-lcm-gray text-lcm-gray text-xs font-bold tracking-widest uppercase">
              Patrocinadores por Evento
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {perEvent.map((s) => {
              const ev = events.find((e) => e.id === s.eventId)
              return (
                <div key={s.id} className="bg-white border border-lcm-light p-4 flex flex-col gap-3">
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="h-8 object-contain"
                    loading="lazy"
                  />
                  {ev && (
                    <span className="text-lcm-gray text-xs tracking-wider">{ev.name}</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-lcm-orange/30 bg-white"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.4s',
          }}
        >
          <div>
            <h3 className="text-lcm-dark font-black text-xl uppercase tracking-tighter">
              Seja um Patrocinador
            </h3>
            <p className="text-lcm-gray text-sm mt-1">
              Associe sua marca a eventos que movem o Tocantins.
            </p>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=5563999999999&text=Olá!%20Tenho%20interesse%20em%20patrocinar%20eventos%20da%20LCM."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-lcm-orange text-white font-bold text-sm tracking-wider uppercase hover:bg-orange-600 transition-colors shrink-0"
          >
            <MessageCircle size={16} /> Fale Conosco
          </a>
        </div>
      </div>
    </section>
  )
}
