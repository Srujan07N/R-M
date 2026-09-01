import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import rmLogo from '../assets/RM.png'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Invitation', href: '#invitation' },
  { label: 'Couple', href: '#couple' },
  { label: 'Events', href: '#events' },
  { label: 'Venue', href: '#venue' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => (e) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-500 ${
        scrolled ? 'bg-ivory-light/90 backdrop-blur-sm shadow-[0_1px_0_rgba(200,169,107,0.4)]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-5xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a
          href="#home"
          onClick={handleClick('#home')}
          className="flex items-center"
        >
          <img src={rmLogo} alt="R & M" className="h-8 sm:h-10 w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-9 font-serif text-[15px] tracking-wide text-brown">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={handleClick(l.href)}
                className="relative py-1 hover:text-maroon transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden text-maroon"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-ivory-light/95 backdrop-blur-sm border-t border-gold/30"
          >
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-gold/15 last:border-none">
                <a
                  href={l.href}
                  onClick={handleClick(l.href)}
                  className="block px-6 py-4 font-serif text-brown"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
