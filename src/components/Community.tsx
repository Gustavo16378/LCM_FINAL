import { useState } from 'react'
import { CheckCircle, XCircle, Share2, RotateCcw, Trophy, MapPin } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { quizQuestions } from '../data/quiz'
import Modal from './Modal'

interface Athlete {
  id: string
  name: string
  sport: string
  location: string
  achievement: string
  bio: string
  thumbnail: string
}

const athletes: Athlete[] = [
  {
    id: '1',
    name: 'Giovani dos Santos',
    sport: 'Corrida de Rua',
    location: 'Palmas, TO',
    achievement: 'Campeão da Meia Maratona do Tocantins 2024',
    bio: 'Correu sua primeira prova LCM em 2019 e nunca mais parou. Em 2024 cruzou a linha de chegada da Meia Maratona do Tocantins em 1h14min — novo recorde do evento. Treina 6 dias por semana e é referência de dedicação na comunidade de corredores de Palmas.',
    thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
  },
  {
    id: '2',
    name: 'Carla Ribeiro',
    sport: 'Corrida de Rua',
    location: 'Palmas, TO',
    achievement: 'Recordista feminina — Corrida LCM 10K',
    bio: 'Professora de educação física que descobriu a corrida de rua aos 32 anos e se tornou atleta de elite. Detentora do recorde feminino da Corrida LCM 10K com 39min52s. Treina com o grupo LCM Running e inspira centenas de mulheres a calçar o tênis e ir para a rua.',
    thumbnail: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80',
  },
  {
    id: '3',
    name: 'Felipe Nunes',
    sport: 'Corrida Noturna',
    location: 'Palmas, TO',
    achievement: 'Elite Runner — Night Run Tocantins 2023/2024',
    bio: 'Bicampeão da Night Run Tocantins, Felipe é conhecido pela consistência e pelo ritmo forte nas provas noturnas. Representa Palmas em eventos regionais e nacionais. Em 2024 completou o desafio de correr 12 provas em 12 meses consecutivos.',
    thumbnail: 'https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?w=600&q=80',
  },
  {
    id: '4',
    name: 'Mariana Torres',
    sport: 'Corrida Trail',
    location: 'Palmas, TO',
    achievement: 'Top 3 Desafio da Superação — 3 edições consecutivas',
    bio: 'Triatleta e corredora de trail, Mariana é a única atleta a subir ao pódio nas três primeiras edições do Desafio da Superação. Combina natação, ciclismo e corrida com uma disciplina de respeito. Quer representar o Tocantins em campeonatos nacionais de triathlon em 2026.',
    thumbnail: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=600&q=80',
  },
]

function AthleteCard({ athlete, onClick }: { athlete: Athlete; onClick: () => void }) {
  return (
    <button onClick={onClick} className="group relative overflow-hidden w-full text-left cursor-pointer">
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <img
          src={athlete.thumbnail}
          alt={athlete.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-lcm-dark via-lcm-dark/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h4 className="text-white font-black text-xs uppercase tracking-tighter leading-tight">
            {athlete.name}
          </h4>
          <p className="text-lcm-gray text-xs mt-0.5 leading-snug">{athlete.achievement}</p>
        </div>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-2 py-1 bg-lcm-orange text-white text-[10px] font-black tracking-widest uppercase">
            Ver mais
          </span>
        </div>
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-lcm-orange group-hover:w-full transition-all duration-500" />
      </div>
    </button>
  )
}

function AthleteModal({ athlete, onClose }: { athlete: Athlete | null; onClose: () => void }) {
  if (!athlete) return null
  return (
    <Modal open={!!athlete} onClose={onClose} size="md">
      <div className="relative h-72 overflow-hidden">
        <img src={athlete.thumbnail} alt={athlete.name} className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-lcm-dark/90 to-transparent" />
        <div className="absolute bottom-4 left-6">
          <span className="text-lcm-orange text-xs font-bold tracking-widest uppercase">{athlete.sport}</span>
        </div>
      </div>
      <div className="p-6 lg:p-8">
        <h2 className="text-3xl font-black tracking-tighter uppercase text-white mb-1">{athlete.name}</h2>
        <div className="flex items-center gap-4 mb-6">
          <span className="flex items-center gap-1 text-lcm-gray text-xs">
            <MapPin size={12} className="text-lcm-orange" /> {athlete.location}
          </span>
        </div>
        <div className="flex items-start gap-3 mb-6 p-4 bg-lcm-navy/50 border-l-2 border-lcm-orange">
          <Trophy size={16} className="text-lcm-orange mt-0.5 shrink-0" />
          <p className="text-white text-sm font-bold">{athlete.achievement}</p>
        </div>
        <p className="text-lcm-gray text-sm leading-relaxed">{athlete.bio}</p>
      </div>
    </Modal>
  )
}

function Quiz() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [done, setDone] = useState(false)

  const q = quizQuestions[current]
  const score = answers.filter(Boolean).length

  function handleAnswer(idx: number) {
    if (selected !== null) return
    setSelected(idx)
    const correct = idx === q.correctIndex
    setTimeout(() => {
      const newAnswers = [...answers, correct]
      setAnswers(newAnswers)
      if (current + 1 < quizQuestions.length) {
        setCurrent(current + 1)
        setSelected(null)
      } else {
        setDone(true)
      }
    }, 1400)
  }

  function handleReset() {
    setCurrent(0)
    setSelected(null)
    setAnswers([])
    setDone(false)
  }

  function handleShare() {
    const text = `Acertei ${score}/${quizQuestions.length} no Quiz LCM Gestão Esportiva! Você consegue superar?`
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  if (done) {
    const pct = score / quizQuestions.length
    const message =
      pct === 1
        ? 'Perfeito! Você nasceu pra correr!'
        : pct >= 0.6
        ? 'Muito bem! Corredor de respeito.'
        : 'Continue treinando — no esporte e no conhecimento!'

    return (
      <div className="flex flex-col items-center text-center py-6">
        <div className="text-6xl font-black text-lcm-orange mb-2">
          {score}
          <span className="text-white/30 text-3xl">/{quizQuestions.length}</span>
        </div>
        <p className="text-white font-black text-lg uppercase tracking-tighter mb-2">{message}</p>
        <div className="w-10 h-px bg-lcm-orange my-4" />
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-3 bg-green-600 text-white font-bold text-xs tracking-wider uppercase hover:bg-green-700 transition-colors"
          >
            <Share2 size={13} /> Compartilhar
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-3 border border-white/20 text-white font-bold text-xs tracking-wider uppercase hover:border-white transition-colors"
          >
            <RotateCcw size={13} /> Jogar de Novo
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <span className="text-lcm-gray text-xs font-bold tracking-widest uppercase">
          {current + 1} / {quizQuestions.length}
        </span>
        <div className="flex gap-1">
          {quizQuestions.map((_, i) => (
            <div
              key={i}
              className={`h-1 w-6 transition-colors ${
                i < answers.length
                  ? answers[i] ? 'bg-green-500' : 'bg-red-500'
                  : i === current ? 'bg-lcm-orange' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      <h4 className="text-white font-black text-base lg:text-lg uppercase tracking-tighter mb-5 leading-tight">
        {q.question}
      </h4>

      <div className="flex flex-col gap-2">
        {q.options.map((opt, i) => {
          let style = 'border border-white/20 text-white hover:border-white/50'
          if (selected !== null) {
            if (i === q.correctIndex)
              style = 'border border-green-500 bg-green-500/20 text-green-400'
            else if (i === selected)
              style = 'border border-red-500 bg-red-500/20 text-red-400'
            else style = 'border border-white/10 text-white/40'
          }

          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className={`flex items-center gap-3 px-3 py-2.5 text-left text-sm font-medium transition-all duration-200 ${style}`}
              disabled={selected !== null}
            >
              {selected !== null && i === q.correctIndex ? (
                <CheckCircle size={15} className="text-green-400 shrink-0" />
              ) : selected !== null && i === selected ? (
                <XCircle size={15} className="text-red-400 shrink-0" />
              ) : (
                <span className="w-5 h-5 shrink-0 border border-current flex items-center justify-center text-xs font-black">
                  {String.fromCharCode(65 + i)}
                </span>
              )}
              {opt}
            </button>
          )
        })}
      </div>

      {selected !== null && (
        <p className="mt-4 text-lcm-gray text-xs leading-relaxed border-l-2 border-lcm-orange pl-3">
          {q.explanation}
        </p>
      )}
    </div>
  )
}

export default function Community() {
  const { ref, isVisible } = useIntersectionObserver()
  const [selectedAthlete, setSelectedAthlete] = useState<Athlete | null>(null)

  return (
    <section id="community" className="bg-lcm-navy py-20 lg:py-28" ref={ref}>
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
            <span className="text-lcm-orange text-xs font-bold tracking-[0.3em] uppercase">Comunidade</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter uppercase text-white leading-none">
            GENTE QUE<br />INSPIRA.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          {/* Athletes grid */}
          <div
            className="w-full lg:flex-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s ease-out 0.2s',
            }}
          >
            <h3 className="text-white font-black text-base uppercase tracking-widest mb-6">
              Atletas em Destaque
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {athletes.map((a, i) => (
                <div
                  key={a.id}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.5s ease-out ${i * 0.1 + 0.3}s, transform 0.5s ease-out ${i * 0.1 + 0.3}s`,
                  }}
                >
                  <AthleteCard athlete={a} onClick={() => setSelectedAthlete(a)} />
                </div>
              ))}
            </div>
          </div>

          {/* Quiz */}
          <div
            className="w-full lg:w-[420px] bg-lcm-dark p-6 lg:p-8 border-t-2 border-lcm-orange shrink-0"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s ease-out 0.3s',
            }}
          >
            <div className="mb-5">
              <span className="text-lcm-orange text-xs font-bold tracking-[0.3em] uppercase">
                Quiz da Semana
              </span>
              <h3 className="text-white font-black text-xl uppercase tracking-tighter mt-2 leading-tight">
                VOCÊ SABE TUDO<br />SOBRE CORRIDA?
              </h3>
            </div>
            <Quiz />
          </div>
        </div>
      </div>
      <AthleteModal athlete={selectedAthlete} onClose={() => setSelectedAthlete(null)} />
    </section>
  )
}
