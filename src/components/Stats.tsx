import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

interface Stat {
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: 14, suffix: '+', label: 'Anos de Atuação' },
  { value: 200, suffix: '+', label: 'Eventos Realizados' },
  { value: 15000, suffix: '+', label: 'Participantes' },
  { value: 4, suffix: '', label: 'Eventos por Mês' },
]

function CountUp({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!isVisible || started.current) return
    started.current = true
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <span>
      {count >= 1000 ? (count / 1000).toFixed(count >= 10000 ? 0 : 0) + 'K' : count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="stats" className="bg-lcm-dark py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center py-10 lg:py-0 ${
                i < stats.length - 1 ? 'border-r border-white/10' : ''
              } ${i >= 2 ? 'border-t border-white/10 lg:border-t-0' : ''}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease-out ${i * 0.15}s, transform 0.6s ease-out ${i * 0.15}s`,
              }}
            >
              <span className="text-5xl lg:text-7xl font-black text-lcm-orange tracking-tighter">
                <CountUp target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </span>
              <div className="mt-3 w-8 h-px bg-lcm-orange" />
              <p className="mt-3 text-xs font-bold tracking-widest uppercase text-lcm-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
