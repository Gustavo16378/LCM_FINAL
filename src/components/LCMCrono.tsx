import { Timer, Globe, Award, ExternalLink } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const features = [
  { icon: Timer, text: 'Cronometragem por chip RFID com precisão de milissegundos' },
  { icon: Globe, text: 'Parceiro oficial do Chip Brasil — tecnologia homologada internacionalmente' },
  { icon: Award, text: 'Resultados em tempo real e relatórios completos pós-evento' },
]

export default function LCMCrono() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="crono" className="relative py-20 lg:py-28 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-lcm-navy" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-lcm-orange/40 rotate-45 translate-x-32 -translate-y-16" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border border-lcm-orange/20 rotate-12 -translate-x-16 translate-y-8" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-lcm-orange" />
              <span className="text-lcm-orange text-xs font-bold tracking-[0.3em] uppercase">
                Empresa Parceira
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black tracking-tighter uppercase text-white leading-none mb-2">
              LCM<br />
              <span className="text-lcm-orange">CRONO.</span>
            </h2>
            <p className="text-lcm-gray text-xs tracking-widest uppercase mb-1">
              CNPJ: 00.000.000/0001-00 · Empresa independente
            </p>
            <p className="text-lcm-gray text-xs tracking-widest uppercase mb-6">
              Especializada em cronometragem de eventos esportivos
            </p>

            <p className="text-white text-lg leading-relaxed mb-4">
              Sua corrida merece{' '}
              <strong className="text-lcm-orange">cronometragem de nível internacional.</strong>
            </p>
            <p className="text-lcm-gray text-base leading-relaxed mb-8">
              A LCM Crono é empresa independente especializada em cronometragem de provas esportivas,
              com tecnologia chip RFID homologada. Parceira do Chip Brasil, oferece resultados
              precisos, em tempo real e com plataforma digital completa — para organizadores que não
              aceitam menos que o melhor.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {features.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={16} className="text-lcm-orange shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-lcm-gray text-sm">{text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://lcmcrono.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-lcm-orange text-white font-black tracking-wider uppercase text-sm hover:bg-orange-600 transition-colors duration-200"
              >
                <ExternalLink size={16} /> Visitar Site da LCM Crono
              </a>
            </div>

            <p className="mt-4 text-lcm-gray text-xs">
              Direcionado a organizadores de eventos esportivos
            </p>
          </div>

          {/* Right — visual */}
          <div
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s',
            }}
          >
            <div className="relative aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 border-4 border-lcm-orange/20 rounded-full flex items-center justify-center">
                  <div className="w-36 h-36 border-4 border-lcm-orange/40 rounded-full flex items-center justify-center">
                    <Timer size={56} className="text-lcm-orange" strokeWidth={1} />
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-0 bg-lcm-dark p-4 border-l-2 border-lcm-orange">
                <p className="text-lcm-orange font-black text-2xl">0.001s</p>
                <p className="text-lcm-gray text-xs tracking-wider">Precisão</p>
              </div>
              <div className="absolute bottom-4 left-0 bg-lcm-dark p-4 border-l-2 border-lcm-orange">
                <p className="text-lcm-orange font-black text-2xl">200+</p>
                <p className="text-lcm-gray text-xs tracking-wider">Eventos cronometrados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
