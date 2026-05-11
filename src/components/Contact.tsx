import { useState } from 'react'
import { MessageCircle, Calendar, Building2, Send } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const subjects = [
  'Quero me inscrever em uma corrida',
  'Quero organizar um evento',
  'Quero patrocinar',
  'Quero contratar a LCM Crono',
  'Outro',
]

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver()
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const text = `*Nova mensagem — LCM Gestão Esportiva*\n\n*Nome:* ${form.name}\n*Email:* ${form.email}\n*Telefone:* ${form.phone}\n*Assunto:* ${form.subject}\n*Mensagem:* ${form.message}`
    window.open(
      `https://api.whatsapp.com/send?phone=5563999999999&text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    )
    setSent(true)
  }

  return (
    <section id="contact" className="bg-lcm-dark py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-lcm-orange" />
            <span className="text-lcm-orange text-xs font-bold tracking-[0.3em] uppercase">Contato</span>
            <div className="h-px w-8 bg-lcm-orange" />
          </div>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase text-white leading-none">
            VAMOS CORRER<br />JUNTOS?
          </h2>
        </div>

        {/* 3 CTAs */}
        <div
          className="grid md:grid-cols-3 gap-4 mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.2s',
          }}
        >
          <a
            href="https://api.whatsapp.com/send?phone=5563999999999&text=Olá!%20Sou%20atleta%20e%20quero%20saber%20mais%20sobre%20os%20eventos%20da%20LCM."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center p-8 border border-white/10 hover:border-lcm-orange hover:bg-lcm-orange/5 transition-all duration-300"
          >
            <MessageCircle size={32} className="text-lcm-orange mb-4" strokeWidth={1.5} />
            <h3 className="text-white font-black text-lg uppercase tracking-tighter mb-2">Sou Atleta</h3>
            <p className="text-lcm-gray text-sm">Dúvidas sobre inscrições, percursos e eventos.</p>
            <span className="mt-4 text-lcm-orange text-xs font-bold tracking-widest uppercase group-hover:underline">
              WhatsApp →
            </span>
          </a>

          <a
            href="#contact-form"
            className="group flex flex-col items-center text-center p-8 border border-lcm-orange bg-lcm-orange/10 hover:bg-lcm-orange/20 transition-all duration-300"
          >
            <Calendar size={32} className="text-lcm-orange mb-4" strokeWidth={1.5} />
            <h3 className="text-white font-black text-lg uppercase tracking-tighter mb-2">Quero Organizar um Evento</h3>
            <p className="text-lcm-gray text-sm">Conheça nossa proposta de gestão completa.</p>
            <span className="mt-4 text-lcm-orange text-xs font-bold tracking-widest uppercase group-hover:underline">
              Formulário →
            </span>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5563999999999&text=Olá!%20Tenho%20interesse%20em%20patrocinar%20eventos%20da%20LCM."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center p-8 border border-white/10 hover:border-lcm-orange hover:bg-lcm-orange/5 transition-all duration-300"
          >
            <Building2 size={32} className="text-lcm-orange mb-4" strokeWidth={1.5} />
            <h3 className="text-white font-black text-lg uppercase tracking-tighter mb-2">Quero Patrocinar</h3>
            <p className="text-lcm-gray text-sm">Associe sua marca ao maior evento esportivo do TO.</p>
            <span className="mt-4 text-lcm-orange text-xs font-bold tracking-widest uppercase group-hover:underline">
              WhatsApp / Email →
            </span>
          </a>
        </div>

        {/* Form */}
        <div
          id="contact-form"
          className="max-w-2xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.3s',
          }}
        >
          {sent ? (
            <div className="text-center py-12 border border-lcm-orange/30 bg-lcm-orange/5">
              <p className="text-white font-black text-2xl uppercase tracking-tighter mb-2">Mensagem Enviada!</p>
              <p className="text-lcm-gray text-sm">Nossa equipe retornará em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder="Nome completo"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-white/5 border border-white/10 text-white placeholder-lcm-gray text-sm px-4 py-3 focus:outline-none focus:border-lcm-orange transition-colors"
                />
                <input
                  required
                  type="email"
                  placeholder="E-mail"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-white/5 border border-white/10 text-white placeholder-lcm-gray text-sm px-4 py-3 focus:outline-none focus:border-lcm-orange transition-colors"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Telefone / WhatsApp"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-white/5 border border-white/10 text-white placeholder-lcm-gray text-sm px-4 py-3 focus:outline-none focus:border-lcm-orange transition-colors"
                />
                <select
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="bg-lcm-dark border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-lcm-orange transition-colors"
                >
                  <option value="">Assunto</option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <textarea
                required
                placeholder="Sua mensagem"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-white/5 border border-white/10 text-white placeholder-lcm-gray text-sm px-4 py-3 focus:outline-none focus:border-lcm-orange transition-colors resize-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 py-4 bg-lcm-orange text-white font-black tracking-wider uppercase text-sm hover:bg-orange-600 transition-colors"
              >
                <Send size={16} /> Enviar Mensagem
              </button>
            </form>
          )}
        </div>

        {/* Social */}
        <div
          className="mt-12 flex flex-col items-center gap-3 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.4s',
          }}
        >
          <div className="w-8 h-px bg-lcm-orange" />
          <a
            href="https://www.instagram.com/lcmgestaoesportiva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lcm-gray hover:text-white text-sm tracking-wider transition-colors"
          >
            @lcmgestaoesportiva
          </a>
          <a
            href="mailto:contato@lcmgestaoesportiva.com.br"
            className="text-lcm-gray hover:text-lcm-orange text-sm tracking-wider transition-colors"
          >
            contato@lcmgestaoesportiva.com.br
          </a>
        </div>
      </div>
    </section>
  )
}
