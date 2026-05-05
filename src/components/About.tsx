import { Eye, Target, Heart } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const values = [
  {
    icon: Target,
    title: 'Missão',
    text: 'Promover eventos esportivos de excelência que transformam vidas, movem comunidades e elevam o esporte no Tocantins.',
  },
  {
    icon: Eye,
    title: 'Visão',
    text: 'Ser a maior referência em gestão de eventos esportivos no Norte do Brasil, conectando atletas, marcas e sociedade.',
  },
  {
    icon: Heart,
    title: 'Valores',
    text: 'Excelência, comprometimento, inovação, respeito ao atleta e paixão pelo esporte em cada detalhe de cada evento.',
  },
]

export default function About() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="sobre" className="bg-lcm-light py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <div
          className="mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-lcm-orange" />
            <span className="text-lcm-orange text-xs font-bold tracking-[0.3em] uppercase">Quem Somos</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase text-lcm-dark leading-none">
            COMEÇOU COM<br />UMA VISÃO.
          </h2>
        </div>

        {/* Story */}
        <div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s',
          }}
        >
          <div>
            <p className="text-lcm-dark text-lg leading-relaxed mb-6">
              Em 2011, três professores de Educação Física com a mesma paixão pelo esporte decidiram que o Tocantins merecia eventos à altura de seu potencial. Nasceu assim a <strong>LCM Gestão Esportiva</strong> — o nome formado pelas iniciais de <strong>Luiz</strong>, <strong>Cézar</strong> e <strong>Matheus</strong>.
            </p>
            <p className="text-lcm-gray text-base leading-relaxed">
              O que começou com um sonho tornou-se referência. Mais de 14 anos depois, somos responsáveis por mais de 200 eventos que movimentaram mais de 15 mil atletas pelo estado. Cada corrida é uma celebração — do esporte, da comunidade e do Tocantins.
            </p>
          </div>
          <div>
            <p className="text-lcm-gray text-base leading-relaxed mb-6">
              LCM não é só uma empresa de eventos. É um movimento. Cada largada é um convite para superar limites. Cada chegada é uma conquista que vai além da linha de chegada.
            </p>
            <p className="text-lcm-gray text-base leading-relaxed">
              Com equipe técnica altamente qualificada, parcerias estratégicas e infraestrutura de nível internacional — via LCM Crono — garantimos experiências que atletas e parceiros jamais esquecem.
            </p>
          </div>
        </div>

        {/* Photo */}
        <div
          className="relative mb-20 overflow-hidden"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease-out 0.3s',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?w=1400&q=80"
            alt="Equipe LCM"
            className="w-full h-64 lg:h-96 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-lcm-dark/50 flex items-end p-8">
            <div>
              <p className="text-white font-black text-2xl lg:text-3xl uppercase tracking-tighter">
                OS TRÊS JUNTOS.
              </p>
              <p className="text-lcm-gray text-sm mt-1">Luiz · Cézar · Matheus — desde 2011</p>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div
          className="grid md:grid-cols-3 gap-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s',
          }}
        >
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white p-8 border-t-2 border-lcm-orange">
              <Icon size={20} className="text-lcm-orange mb-4" strokeWidth={1.5} />
              <h3 className="text-lcm-dark font-black text-lg uppercase tracking-tighter mb-3">
                {title}
              </h3>
              <p className="text-lcm-gray text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
