import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const faqs = [
  {
    q: 'Como me inscrevo em uma corrida da LCM?',
    a: 'As inscrições são realizadas exclusivamente através do Chip Brasil, nosso parceiro oficial. Acesse o link do evento desejado na seção "Próximos Desafios" e você será direcionado para a plataforma de inscrição.',
  },
  {
    q: 'Os ingressos são vendidos no site da LCM?',
    a: 'Não. O site da LCM não comercializa ingressos diretamente. Todas as inscrições são processadas pelo Chip Brasil, garantindo segurança e praticidade na sua compra.',
  },
  {
    q: 'Como a LCM pode organizar meu evento esportivo?',
    a: 'Entre em contato conosco pelo WhatsApp ou pelo formulário na seção de contato. Nossa equipe tem mais de 14 anos de experiência em gestão de eventos esportivos e avaliará o seu projeto com atenção.',
  },
  {
    q: 'O que é a LCM Crono?',
    a: 'A LCM Crono é uma empresa independente (CNPJ separado), especializada em cronometragem de eventos esportivos com tecnologia chip RFID. É parceira oficial do Chip Brasil e oferece precisão de milissegundos e resultados em tempo real.',
  },
  {
    q: 'Como me tornar patrocinador da LCM?',
    a: 'Oferecemos dois modelos: patrocínio anual (presente em todos os eventos do ano, com visibilidade máxima) e patrocínio por corrida (vinculado a um evento específico). Fale conosco para receber nosso kit de patrocínio.',
  },
  {
    q: 'Com que frequência acontecem os eventos da LCM?',
    a: 'Realizamos aproximadamente 15 eventos por ano, distribuídos ao longo de todo o calendário. Desde corridas curtas de 5K até meias maratonas de 21 km, garantindo opções para todos os níveis de atletas.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="faq" className="bg-lcm-light py-20 lg:py-28" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className="mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-lcm-orange" />
            <span className="text-lcm-orange text-xs font-bold tracking-[0.3em] uppercase">Dúvidas</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter uppercase text-lcm-dark leading-none">
            PERGUNTAS<br />FREQUENTES.
          </h2>
        </div>

        {/* Accordion */}
        <div
          className="flex flex-col gap-2"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.2s',
          }}
        >
          {faqs.map((faq, i) => (
            <div key={i} className="border border-lcm-gray/20 bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-lcm-light/50 transition-colors duration-200"
              >
                <span className="text-lcm-dark font-bold text-sm lg:text-base pr-4 leading-snug">
                  {faq.q}
                </span>
                <span className="text-lcm-orange shrink-0">
                  {open === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 text-lcm-gray text-sm leading-relaxed border-t border-lcm-gray/10 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
