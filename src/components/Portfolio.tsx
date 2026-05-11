import { useState } from 'react'
import { Users, Calendar } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { portfolioItems, type PortfolioItem } from '../data/portfolio'
import PortfolioModal from './PortfolioModal'

export default function Portfolio() {
  const { ref, isVisible } = useIntersectionObserver()
  const [selected, setSelected] = useState<PortfolioItem | null>(null)

  return (
    <section id="portfolio" className="bg-lcm-dark py-20 lg:py-28" ref={ref}>
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
            <span className="text-lcm-orange text-xs font-bold tracking-[0.3em] uppercase">Legado</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter uppercase text-white leading-none">
            HISTÓRIA CONSTRUÍDA<br />EM CADA CHEGADA.
          </h2>
        </div>

        {/* Mosaic grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-3 gap-3"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease-out 0.2s',
          }}
        >
          {portfolioItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className={`group relative overflow-hidden cursor-pointer text-left ${
                item.size === 'large'
                  ? 'col-span-2 row-span-2 lg:row-span-2'
                  : item.size === 'medium'
                  ? 'col-span-1 row-span-1'
                  : 'col-span-1'
              } ${i === 0 ? 'aspect-[4/3] lg:aspect-square' : 'aspect-square'}`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] contrast-125"
                loading="lazy"
              />
              {/* Default overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-lcm-dark/80 via-lcm-dark/20 to-transparent" />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-lcm-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Bottom info — always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-black text-sm lg:text-base uppercase tracking-tighter leading-tight">
                  {item.name}
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1 text-lcm-gray text-xs">
                    <Calendar size={10} className="text-lcm-orange" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1 text-lcm-gray text-xs">
                    <Users size={10} className="text-lcm-orange" />
                    {item.participants.toLocaleString('pt-BR')}
                  </span>
                </div>
              </div>

              {/* Hover: "Ver mais" */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-4 py-2 border border-lcm-orange text-lcm-orange text-xs font-bold tracking-widest uppercase">
                  Ver mais
                </span>
              </div>

              {/* Orange top accent */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-lcm-orange group-hover:w-full transition-all duration-500" />
            </button>
          ))}
        </div>
      </div>

      <PortfolioModal item={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
