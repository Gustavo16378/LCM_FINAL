import { useEffect } from 'react'
import { X } from 'lucide-react'

interface Props {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  size?: 'md' | 'lg' | 'xl'
}

export default function Modal({ open, onClose, children, size = 'lg' }: Props) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!open) return null

  const maxW =
    size === 'xl' ? 'max-w-5xl' :
    size === 'lg' ? 'max-w-3xl' :
    'max-w-xl'

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />
      {/* Panel */}
      <div
        className={`relative z-10 w-full ${maxW} max-h-[92vh] sm:max-h-[88vh] overflow-y-auto bg-lcm-dark border-t border-white/10 sm:border sm:border-white/10`}
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#F5560A #0A0E1A' }}
      >
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 z-20 p-2 text-lcm-gray hover:text-white transition-colors bg-lcm-dark/80"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>
        <div className="clear-both">
          {children}
        </div>
      </div>
    </div>
  )
}
