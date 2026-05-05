import { useState } from 'react'
import { Play, X } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { testimonials } from '../data/testimonials'

function VideoCard({
  t,
  onClick,
}: {
  t: (typeof testimonials)[number]
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden cursor-pointer w-full text-left"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={t.thumbnail}
          alt={t.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-lcm-dark/50 group-hover:bg-lcm-dark/30 transition-colors duration-300" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-lcm-orange/90 group-hover:bg-lcm-orange flex items-center justify-center transition-colors duration-200 group-hover:scale-110 transition-transform">
            <Play size={18} className="text-white ml-0.5" fill="white" />
          </div>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-lcm-dark/90 to-transparent">
          <p className="text-white font-black text-xs uppercase tracking-tighter leading-tight">{t.name}</p>
          <p className="text-lcm-gray text-xs mt-0.5">{t.city} · {t.event}</p>
        </div>

        <div className="absolute top-0 left-0 w-0 h-0.5 bg-lcm-orange group-hover:w-full transition-all duration-500" />
      </div>
    </button>
  )
}

function VideoModal({ t, onClose }: { t: (typeof testimonials)[number] | null; onClose: () => void }) {
  if (!t) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-lcm-dark/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors flex items-center gap-2 text-xs tracking-wider uppercase"
        >
          <X size={16} /> Fechar
        </button>
        <div className="aspect-video bg-black">
          <iframe
            src={`${t.videoUrl}?autoplay=1&rel=0`}
            title={`Depoimento de ${t.name}`}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <div className="bg-lcm-dark px-4 py-3 border-t border-white/10">
          <p className="text-white font-black text-sm uppercase tracking-tighter">{t.name}</p>
          <p className="text-lcm-gray text-xs">{t.city} · {t.event}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver()
  const [selected, setSelected] = useState<(typeof testimonials)[number] | null>(null)

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
            <span className="text-lcm-orange text-xs font-bold tracking-[0.3em] uppercase">Depoimentos</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter uppercase text-white leading-none">
            VOZ DA<br />COMUNIDADE.
          </h2>
        </div>

        {/* Video grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease-out 0.2s',
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease-out ${i * 0.1 + 0.3}s, transform 0.5s ease-out ${i * 0.1 + 0.3}s`,
              }}
            >
              <VideoCard t={t} onClick={() => setSelected(t)} />
            </div>
          ))}
        </div>
      </div>

      <VideoModal t={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
