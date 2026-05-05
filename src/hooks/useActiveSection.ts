import { useEffect, useState } from 'react'

const SECTION_IDS = [
  'hero', 'numeros', 'sobre', 'eventos',
  'portfolio', 'comunidade', 'patrocinadores',
  'crono', 'faq', 'contato',
]

export function useActiveSection() {
  const [active, setActive] = useState('')

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY + 120
      let current = ''
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= scrollY) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return active
}
