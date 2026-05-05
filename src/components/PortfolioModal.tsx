import { useState } from 'react'
import { ChevronLeft, ChevronRight, Users, Calendar, Trophy } from 'lucide-react'
import Modal from './Modal'
import { type PortfolioItem } from '../data/portfolio'

interface Props {
  item: PortfolioItem | null
  onClose: () => void
}

export default function PortfolioModal({ item, onClose }: Props) {
  const [imgIdx, setImgIdx] = useState(0)
  const [tab, setTab] = useState<'fotos' | 'video'>('fotos')

  if (!item) return null

  const imgs = item.images.length > 0 ? item.images : [item.image]

  return (
    <Modal open={!!item} onClose={onClose} size="xl">
      {/* Header */}
      <div className="p-6 pb-0 lg:p-8 lg:pb-0">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px w-6 bg-lcm-orange" />
          <span className="text-lcm-orange text-xs font-bold tracking-[0.3em] uppercase">Portfólio</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-black tracking-tighter uppercase text-white leading-none mb-1">
          {item.name}
        </h2>
        <div className="flex items-center gap-4 mt-2 mb-6">
          <span className="flex items-center gap-1.5 text-lcm-gray text-sm">
            <Calendar size={13} className="text-lcm-orange" /> {item.date}
          </span>
          <span className="flex items-center gap-1.5 text-lcm-gray text-sm">
            <Users size={13} className="text-lcm-orange" />
            {item.participants.toLocaleString('pt-BR')} atletas
          </span>
        </div>
      </div>

      {/* Tab switcher */}
      {item.videoUrl && (
        <div className="px-6 lg:px-8 mb-4 flex gap-2">
          <button
            onClick={() => setTab('fotos')}
            className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all ${
              tab === 'fotos'
                ? 'bg-lcm-orange text-white'
                : 'border border-white/20 text-lcm-gray hover:text-white'
            }`}
          >
            Fotos
          </button>
          <button
            onClick={() => setTab('video')}
            className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all ${
              tab === 'video'
                ? 'bg-lcm-orange text-white'
                : 'border border-white/20 text-lcm-gray hover:text-white'
            }`}
          >
            Vídeo
          </button>
        </div>
      )}

      {/* Media area */}
      {tab === 'fotos' ? (
        <div className="relative h-60 sm:h-80 mx-6 lg:mx-8 overflow-hidden bg-lcm-navy mb-6">
          <img
            key={imgIdx}
            src={imgs[imgIdx]}
            alt={item.name}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-lcm-dark/60 to-transparent" />

          {imgs.length > 1 && (
            <>
              <button
                onClick={() => setImgIdx((i) => (i - 1 + imgs.length) % imgs.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white hover:bg-black/80 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setImgIdx((i) => (i + 1) % imgs.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white hover:bg-black/80 transition-colors"
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
      ) : (
        <div className="mx-6 lg:mx-8 mb-6">
          <div className="relative aspect-video bg-black">
            <iframe
              src={item.videoUrl}
              title={`Vídeo — ${item.name}`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Thumbnail strip */}
      {tab === 'fotos' && imgs.length > 1 && (
        <div className="flex gap-2 px-6 lg:px-8 mb-6 overflow-x-auto pb-1">
          {imgs.map((src, i) => (
            <button
              key={i}
              onClick={() => setImgIdx(i)}
              className={`shrink-0 w-16 h-12 overflow-hidden border-2 transition-all ${
                i === imgIdx ? 'border-lcm-orange' : 'border-transparent opacity-60'
              }`}
            >
              <img src={src} alt={`${item.name} — foto ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Info */}
      <div className="px-6 lg:px-8 pb-8">
        {/* Description */}
        <p className="text-lcm-gray text-sm leading-relaxed mb-6">{item.description}</p>

        {/* Results */}
        <div className="bg-lcm-navy/40 border-l-2 border-lcm-orange p-4">
          <div className="flex items-center gap-2 mb-2">
            <Trophy size={14} className="text-lcm-orange" />
            <p className="text-lcm-orange text-xs font-bold tracking-widest uppercase">Resultados</p>
          </div>
          <p className="text-white text-sm leading-relaxed">{item.results}</p>
        </div>
      </div>
    </Modal>
  )
}
