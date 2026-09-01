import { wedding } from '../data/weddingData'

export default function Footer() {
  return (
    <footer className="relative py-14 px-5 border-t border-gold/40 text-center bg-ivory-light">
      <svg width="40" height="24" viewBox="0 0 40 24" className="mx-auto mb-4" fill="none">
        <path
          d="M20 2c3 5 12 6 12 12s-8 8-12 8-12-2-12-8 9-7 12-12Z"
          stroke="var(--color-gold)" strokeWidth="1" fill="none"
        />
        <circle cx="20" cy="12" r="2" fill="var(--color-gold-dark)" />
      </svg>

      <p className="font-serif italic text-brown/70 text-sm">With Love &amp; Blessings</p>
      <p className="mt-2 font-script text-3xl text-maroon">
        {wedding.groom.name} &amp; {wedding.bride.name}
      </p>
      <p className="mt-2 font-display text-xs tracking-[0.25em] text-gold-dark">27 &bull; 09 &bull; 2026</p>

      <p className="mt-6 font-serif text-[13px] text-brown/50">
        For queries: {wedding.contacts.map((c) => c.number).join('  \u00b7  ')}
      </p>

      <p className="mt-8 font-serif text-[11px] tracking-wide text-brown/50">
        Designed &amp; Developed with ❤️ by Srujan N
      </p>
    </footer>
  )
}
