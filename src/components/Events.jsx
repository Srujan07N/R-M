import { motion } from 'framer-motion'
import { CalendarDays, Clock, MapPin } from 'lucide-react'
import { wedding } from '../data/weddingData'

const EVENTS = [
  // {
  //   title: 'Mehendi',
  //   day: wedding.mehendi.day,
  //   date: wedding.mehendi.dateDisplay,
  //   time: wedding.mehendi.time,
  //   place: wedding.mehendi.place,
  // },
  {
    title: 'Wedding Ceremony',
    day: wedding.weddingDay,
    date: wedding.weddingDateDisplay,
    time: wedding.muhurtam.time,
    place: `${wedding.venue.name}, ${wedding.venue.area}`,
    link: wedding.venue.mapsUrl,
  },
]

function EventCard({ event, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className="relative flex-1 p-[2px] overflow-hidden rounded-sm"
    >
      <div 
        className="absolute inset-[-100%] animate-[spin_6s_linear_infinite] opacity-80"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, var(--color-maroon) 90deg, transparent 180deg, var(--color-gold) 270deg, transparent 360deg)'
        }}
      />
      <div className="relative border border-gold/40 px-7 py-9 sm:px-9 sm:py-10 bg-ivory-light text-center h-full rounded-sm">
        <p className="font-display text-lg sm:text-xl tracking-[0.15em] text-maroon uppercase mb-1">
          {event.title}
        </p>
        <span className="block w-8 h-px bg-gold mx-auto mb-6" />

        <div className="flex justify-center font-serif text-brown/80 text-[15px]">
          <div className="flex flex-col gap-3 items-start">
            <p className="flex items-center gap-3 text-left">
              <CalendarDays size={18} className="text-gold-dark shrink-0" />
              <span className="text-maroon font-semibold">{event.day}, {event.date}</span>
            </p>
            <p className="flex items-center gap-3 text-left">
              <Clock size={18} className="text-gold-dark shrink-0" />
              <span>{event.time}</span>
            </p>
            {event.link ? (
              <a href={event.link} target="_blank" rel="noreferrer" className="flex items-start gap-3 text-left hover:text-maroon transition-colors">
                <MapPin size={18} className="text-gold-dark shrink-0 mt-0.5" />
                <span>{event.place}</span>
              </a>
            ) : (
              <div className="flex items-start gap-3 text-left">
                <MapPin size={18} className="text-gold-dark shrink-0 mt-0.5" />
                <span>{event.place}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Events() {
  return (
    <section id="events" className="relative py-24 sm:py-32 px-5">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center font-display text-xs tracking-[0.32em] text-maroon/70 mb-12"
      >
        Celebrations
      </motion.p>

      <div className="mx-auto max-w-3xl flex flex-col sm:flex-row gap-6 sm:gap-8">
        {EVENTS.map((e, i) => (
          <EventCard key={e.title} event={e} delay={i * 0.15} />
        ))}
      </div>
    </section>
  )
}
