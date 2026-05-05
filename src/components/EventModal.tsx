import { useEffect, useState } from 'react'
import { MapPin, Calendar, Users, Package, ChevronLeft, ChevronRight, ExternalLink, AlertCircle } from 'lucide-react'
import Modal from './Modal'
import { type Event } from '../data/events'

interface TimeLeft {
  days: number; hours: number; minutes: number; seconds: number
}

function getTimeLeft(date: string): TimeLeft {
  const diff = new Date(date).getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

interface Props {
  event: Event | null
  onClose: () => void
}

export default function EventModal({ event, onClose }: Props) {
  const [imgIdx, setImgIdx] = useState(0)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    if (!event) return
    setImgIdx(0)
    setTimeLeft(getTimeLeft(event.date))
    const id = setInterval(() => setTimeLeft(getTimeLeft(event.date)), 1000)
    return () => clearInterval(id)
  }, [event])

  if (!event) return null

  const formattedDate = new Date(event.date).toLocaleDateString('pt-BR', {
    weekday: 'long', day: '2-digit', month: 'long', year: 'numeric',
  })

  const imgs = event.images.length > 0 ? event.images : [event.image]

  return (
    <Modal open={!!event} onClose={onClose} size="xl">
      {/* Image gallery */}
      <div className="relative h-56 sm:h-72 overflow-hidden bg-lcm-navy">
        <img
          src={imgs[imgIdx]}
          alt={event.name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-lcm-dark/80 to-transparent" />

        {/* Distance badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-lcm-orange text-white text-xs font-black tracking-widest uppercase">
            {event.distance}
          </span>
        </div>

        {/* Status badge */}
        <div className="absolute top-4 right-12">
          {event.status === 'open' ? (
            <span className="flex items-center gap-1.5 px-3 py-1 bg-green-600/90 text-white text-xs font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Inscrições Abertas
            </span>
          ) : (
            <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold tracking-wider uppercase">
              Em Breve
            </span>
          )}
        </div>

        {/* Image nav */}
        {imgs.length > 1 && (
          <>
            <button
              onClick={() => setImgIdx((i) => (i - 1 + imgs.length) % imgs.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 text-white hover:bg-black/80 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setImgIdx((i) => (i + 1) % imgs.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 text-white hover:bg-black/80 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {imgs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`h-1 transition-all ${i === imgIdx ? 'w-6 bg-lcm-orange' : 'w-2 bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <h2 className="text-3xl lg:text-4xl font-black tracking-tighter uppercase text-white mb-6 leading-none">
          {event.name}
        </h2>

        {/* Countdown */}
        {event.status !== 'closed' && (
          <div className="mb-6 p-5 bg-lcm-navy/60 border-l-2 border-lcm-orange">
            <p className="text-lcm-orange text-xs font-bold tracking-widest uppercase mb-3">
              Faltam para a largada
            </p>
            <div className="flex gap-6">
              {[
                { v: timeLeft.days, l: 'Dias' },
                { v: timeLeft.hours, l: 'Horas' },
                { v: timeLeft.minutes, l: 'Min' },
                { v: timeLeft.seconds, l: 'Seg' },
              ].map(({ v, l }) => (
                <div key={l} className="flex flex-col items-center">
                  <span className="text-3xl lg:text-4xl font-black tabular-nums text-white leading-none">
                    {String(v).padStart(2, '0')}
                  </span>
                  <span className="text-lcm-gray text-xs uppercase tracking-wider mt-1">{l}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Info grid */}
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <div className="flex items-start gap-2">
            <Calendar size={15} className="text-lcm-orange mt-0.5 shrink-0" />
            <div>
              <p className="text-lcm-gray text-xs tracking-wider uppercase mb-0.5">Data</p>
              <p className="text-white text-sm font-medium capitalize">{formattedDate}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin size={15} className="text-lcm-orange mt-0.5 shrink-0" />
            <div>
              <p className="text-lcm-gray text-xs tracking-wider uppercase mb-0.5">Local</p>
              <p className="text-white text-sm font-medium">{event.location}</p>
              <p className="text-lcm-gray text-xs mt-0.5">{event.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Users size={15} className="text-lcm-orange mt-0.5 shrink-0" />
            <div>
              <p className="text-lcm-gray text-xs tracking-wider uppercase mb-0.5">Participantes</p>
              <p className="text-white text-sm font-medium">
                {event.expectedParticipants.toLocaleString('pt-BR')} previstos
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-lcm-gray text-sm leading-relaxed mb-8">{event.description}</p>

        {/* Kit delivery */}
        {event.kitDelivery && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Package size={16} className="text-lcm-orange" />
              <h3 className="text-white font-black text-base uppercase tracking-tighter">
                Retirada de Kit
              </h3>
            </div>
            <div className="bg-lcm-navy/40 border border-white/10 p-4 grid sm:grid-cols-3 gap-4">
              <div>
                <p className="text-lcm-orange text-xs font-bold tracking-widest uppercase mb-1">Local</p>
                <p className="text-white text-sm font-medium">{event.kitDelivery.local}</p>
                <p className="text-lcm-gray text-xs mt-0.5">{event.kitDelivery.address}</p>
              </div>
              <div>
                <p className="text-lcm-orange text-xs font-bold tracking-widest uppercase mb-1">Datas</p>
                <p className="text-white text-sm">{event.kitDelivery.date}</p>
              </div>
              <div>
                <p className="text-lcm-orange text-xs font-bold tracking-widest uppercase mb-1">Horário</p>
                <p className="text-white text-sm">{event.kitDelivery.hours}</p>
              </div>
            </div>
          </div>
        )}

        {/* Rules */}
        {event.rules.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle size={16} className="text-lcm-orange" />
              <h3 className="text-white font-black text-base uppercase tracking-tighter">
                Normas da Prova
              </h3>
            </div>
            <ul className="flex flex-col gap-2">
              {event.rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="shrink-0 w-5 h-5 bg-lcm-orange/20 text-lcm-orange flex items-center justify-center text-xs font-black mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-lcm-gray leading-relaxed">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
          {event.status === 'open' ? (
            <a
              href={event.chipBrasilUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-lcm-orange text-white font-black tracking-wider uppercase text-sm hover:bg-orange-600 transition-colors"
            >
              Inscreva-se no Chip Brasil <ExternalLink size={14} />
            </a>
          ) : (
            <span className="flex items-center justify-center px-8 py-4 border border-white/20 text-lcm-gray font-bold tracking-wider uppercase text-sm">
              Inscrições em Breve
            </span>
          )}
          <p className="self-center text-lcm-gray text-xs">
            Inscrições via Chip Brasil — parceiro oficial
          </p>
        </div>
      </div>
    </Modal>
  )
}
