import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'
import FloralDivider from './FloralDivider'
import { wedding } from '../data/weddingData'

export default function Venue() {
  return (
    <section id="venue" className="relative py-24 sm:py-32 px-5 bg-beige/40">
      <div className="mx-auto max-w-xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-xs tracking-[0.32em] text-maroon/70"
        >
          Wedding Venue
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 border border-gold bg-ivory-light/70 px-7 py-10 sm:px-10"
        >
          <MapPin className="mx-auto text-maroon mb-4" size={26} />
          <p className="font-display text-lg sm:text-xl text-brown">{wedding.venue.name}</p>
          <p className="mt-1 font-serif text-brown/70">{wedding.venue.area}</p>

          <div className="my-6">
            <FloralDivider variant="simple" />
          </div>

          <a
            href={wedding.venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-serif tracking-wide text-sm sm:text-[15px] bg-maroon text-ivory-light px-7 py-3 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-maroon-light"
          >
            <Navigation size={16} />
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  )
}
