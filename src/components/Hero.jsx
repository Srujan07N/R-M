import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import FloatingPetals from './FloatingPetals'
import ScratchToReveal from './ScratchToReveal'
import { wedding } from '../data/weddingData'

import bgVideo from '../assets/WhatsApp Video 2026-09-01 at 8.19.49 PM.mp4'
import StarfieldBackground from './StarfieldBackground'

const line = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden paper-texture px-6 text-center"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-125"
        src={bgVideo}
      />
      <StarfieldBackground absolute={true} />
      {/* Optional dark overlay if text readability is an issue, but let's keep it simple first */}
      <div className="absolute inset-0 bg-ivory-light/40 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center">
        <FloatingPetals />

        {/* Spacer to keep layout centered exactly as before after removing SVG */}
        <div className="h-[64px] mb-5" aria-hidden="true" />

        <motion.p {...line(0.6)} className="font-display text-[10px] sm:text-xs md:text-sm lg:text-base tracking-[0.2em] sm:tracking-[0.28em] pl-[0.2em] sm:pl-[0.28em] text-maroon whitespace-nowrap -mx-4 sm:mx-0">
          ॥ {wedding.invocation} ॥
        </motion.p>

        <motion.p {...line(1.1)} className="mt-4 font-serif italic text-brown/70 text-base sm:text-lg">
          Together with their families
        </motion.p>

        <motion.div {...line(1.6)} className="mt-6 sm:mt-8">
          <h1 className="font-script text-6xl sm:text-8xl leading-none text-maroon">
            {wedding.groom.name}
          </h1>
          <span className="block font-display text-xl sm:text-2xl text-gold-dark my-2 sm:my-3">&amp;</span>
          <h1 className="font-script text-6xl sm:text-8xl leading-none text-maroon">
            {wedding.bride.name}
          </h1>
        </motion.div>

        <motion.div {...line(2.2)} className="mt-8 sm:mt-10 flex items-center gap-4">
          <span className="h-px w-8 bg-gold" />
          <ScratchToReveal width={240} height={40}>
            <p className="font-display text-sm sm:text-base tracking-[0.2em] text-brown">
              {wedding.weddingDateDisplay}
            </p>
          </ScratchToReveal>
          <span className="h-px w-8 bg-gold" />
        </motion.div>

        <motion.div {...line(2.5)} className="mt-5 border border-gold/50 p-4 sm:p-5 rounded-sm bg-ivory-light/40 backdrop-blur-sm flex flex-col items-center">
          <span className="font-display text-[10px] sm:text-xs tracking-[0.2em] uppercase text-maroon mb-1">
            Wedding Venue
          </span>
          <p className="font-serif text-brown text-sm sm:text-base max-w-xs text-center">
            {wedding.venue.name}, {wedding.venue.area}
          </p>
        </motion.div>

        <motion.a
          href="#invitation"
          onClick={(e) => {
            e.preventDefault()
            const element = document.querySelector('#invitation')
            if (element) {
              try {
                element.scrollIntoView({ behavior: 'smooth' })
              } catch (err) {
                element.scrollIntoView()
              }
            }
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-4 sm:mt-6 flex flex-col items-center gap-1 text-maroon/70 hover:text-maroon transition-colors"
        >
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown size={50} />
          </motion.span>
        </motion.a>


      </div>
    </section>
  )
}
