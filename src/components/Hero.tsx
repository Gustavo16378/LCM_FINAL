import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { nextEvent } from '../data/events'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(targetDate: string): TimeLeft {
  const diff = new Date(targetDate).getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl lg:text-6xl font-black tabular-nums text-white leading-none">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs font-medium tracking-widest uppercase text-lcm-gray mt-1">{label}</span>
    </div>
  )
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(nextEvent.date))

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(nextEvent.date)), 1000)
    return () => clearInterval(id)
  }, [])

  const eventDate = new Date(nextEvent.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80"
          alt="Corrida"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-lcm-dark/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-lcm-dark/30 via-transparent to-lcm-dark" />
      </div>

      {/* Orange accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-lcm-orange z-10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-lcm-orange" />
          <span className="text-lcm-orange text-xs font-bold tracking-[0.3em] uppercase">
            Próximo Desafio
          </span>
          <div className="h-px w-8 bg-lcm-orange" />
        </div>

        {/* Main headline */}
        <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black tracking-tighter uppercase text-white leading-none mb-4">
          O TOCANTINS<br />
          <span className="text-lcm-orange">CORRE.</span>
        </h1>

        {/* Event name */}
        <div className="mt-8 mb-2">
          <h2 className="text-2xl lg:text-4xl font-black tracking-tighter uppercase text-white">
            {nextEvent.name}
          </h2>
          <p className="text-lcm-gray text-sm lg:text-base mt-2 tracking-wider">
            {eventDate} · {nextEvent.location} · {nextEvent.distance}
          </p>
        </div>

        {/* Countdown */}
        <div className="mt-8 flex items-start gap-6 lg:gap-12">
          <CountdownUnit value={timeLeft.days} label="Dias" />
          <span className="text-4xl lg:text-6xl font-black text-lcm-orange leading-none">:</span>
          <CountdownUnit value={timeLeft.hours} label="Horas" />
          <span className="text-4xl lg:text-6xl font-black text-lcm-orange leading-none">:</span>
          <CountdownUnit value={timeLeft.minutes} label="Min" />
          <span className="text-4xl lg:text-6xl font-black text-lcm-orange leading-none">:</span>
          <CountdownUnit value={timeLeft.seconds} label="Seg" />
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href={nextEvent.chipBrasilUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-lcm-orange text-white font-black tracking-wider uppercase text-sm hover:bg-orange-600 transition-colors duration-200"
          >
            Garanta Sua Vaga
          </a>
          <a
            href="#sobre"
            className="px-8 py-4 border border-white/30 text-white font-black tracking-wider uppercase text-sm hover:border-white hover:bg-white/5 transition-all duration-200"
          >
            Conheça a LCM
          </a>
        </div>

        <p className="mt-4 text-xs text-lcm-gray">
          Inscrições via Chip Brasil — parceiro oficial
        </p>
      </div>

      {/* Scroll indicator */}
      <a
        href="#numeros"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-lcm-gray hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
