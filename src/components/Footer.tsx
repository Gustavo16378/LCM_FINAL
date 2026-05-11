import { Instagram, Mail } from 'lucide-react'
import logoLCM from '../assets/logo/logoLCM.png'

const links = [
  { label: 'Sobre', href: '#about' },
  { label: 'Eventos', href: '#events' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Comunidade', href: '#community' },
  { label: 'Patrocinadores', href: '#sponsors' },
  { label: 'LCM Crono', href: '#lcm-crono' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-lcm-dark border-t-2 border-lcm-orange">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <img src={logoLCM} alt="LCM Gestão Esportiva" className="w-36 h-auto" />
            <p className="text-lcm-gray text-sm mt-3 leading-relaxed">
              Referência em gestão de eventos esportivos no Tocantins desde 2011.
            </p>
            <p className="text-white/30 text-xs mt-2 tracking-wider">
              CNPJ: 00.000.000/0001-00
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/lcmgestaoesportiva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lcm-gray hover:text-lcm-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:contato@lcmgestaoesportiva.com.br"
                className="text-lcm-gray hover:text-lcm-orange transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <p className="text-white text-xs font-bold tracking-widest uppercase mb-4">Navegação</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-lcm-gray hover:text-white text-sm transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-lcm-gray text-xs tracking-wider">
            LCM Gestão Esportiva © 2025 · Palmas, Tocantins
          </p>
          
        </div>
      </div>
    </footer>
  )
}
