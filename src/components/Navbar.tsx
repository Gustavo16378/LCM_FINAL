import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrollDirection } from '../hooks/useScrollDirection'
import logoLCM from '../assets/logo/logoLCM.png'

const links = [
  { label: 'Sobre', href: '#about', id: 'about' },
  { label: 'Eventos', href: '#events', id: 'events' },
  { label: 'Portfólio', href: '#portfolio', id: 'portfolio' },
  { label: 'Comunidade', href: '#community', id: 'community' },
  { label: 'LCM Crono', href: '#lcm-crono', id: 'lcm-crono' },
  { label: 'Contato', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
  const navHidden = useScrollDirection()
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close on outside click
  useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    // delay so the open-button click doesn't immediately close
    const id = setTimeout(() => document.addEventListener('mousedown', handleClick), 50)
    return () => {
      clearTimeout(id)
      document.removeEventListener('mousedown', handleClick)
    }
  }, [open])

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  function handleLinkClick() {
    setOpen(false)
  }

  return (
    <>
      {/* Backdrop blur overlay */}
      <div
        className={`fixed inset-0 z-40 bg-lcm-dark/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Navbar bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-lcm-dark/95 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'
        }`}
        style={{ transform: navHidden && !open ? 'translateY(-100%)' : 'translateY(0)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="#hero" className="flex items-center z-50 relative">
            <img src={logoLCM} alt="LCM Gestão Esportiva" className="w-40 lg:w-52 h-auto" />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => {
              const isActive = active === l.id
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative text-sm font-medium tracking-wider uppercase transition-colors duration-200 pb-1 ${
                    isActive ? 'text-white' : 'text-lcm-gray hover:text-white'
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-lcm-orange transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </a>
              )
            })}
            <a
              href="#events"
              className="ml-4 px-5 py-2 bg-lcm-orange text-white text-sm font-bold tracking-wider uppercase hover:bg-orange-600 transition-colors duration-200"
            >
              Inscreva-se
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="lg:hidden text-white p-1 z-50 relative"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer — slides from right, stops at ~75% width */}
      <div
        ref={drawerRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-[78vw] max-w-xs z-50 bg-lcm-dark border-l border-white/10 transform transition-transform duration-300 ease-out flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/10 shrink-0">
          <img src={logoLCM} alt="LCM Gestão Esportiva" className="w-36 h-auto" />
          <button onClick={() => setOpen(false)} className="text-lcm-gray hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-4 pt-4 flex-1 overflow-y-auto">
          {links.map((l) => {
            const isActive = active === l.id
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={handleLinkClick}
                className={`flex items-center justify-between py-4 border-b border-white/10 text-base font-black tracking-tighter uppercase transition-colors ${
                  isActive ? 'text-lcm-orange' : 'text-white hover:text-lcm-orange'
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="w-4 h-0.5 bg-lcm-orange" />
                )}
              </a>
            )
          })}
        </nav>

        {/* CTA button */}
        <div className="px-4 pb-8 pt-4 shrink-0">
          <a
            href="#events"
            onClick={handleLinkClick}
            className="block w-full py-4 bg-lcm-orange text-white text-sm font-black tracking-wider uppercase text-center hover:bg-orange-600 transition-colors"
          >
            Inscreva-se
          </a>
        </div>
      </div>
    </>
  )
}
