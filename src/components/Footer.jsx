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

      <div className="mt-8 font-serif text-[11px] tracking-wide text-brown/50 flex flex-wrap justify-center items-center gap-1">
        <span>Designed &amp; Developed with ❤️ by</span>
        <a 
          href="https://www.instagram.com/_logicatech?igsi=MWg0M2w2YXllbXV2MQ==" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-1 hover:text-maroon transition-colors underline decoration-gold/30 underline-offset-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-0.5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          Srujan N
        </a>
      </div>
    </footer>
  )
}
