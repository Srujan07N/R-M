import { motion } from 'framer-motion'
import { CalendarDays, Clock, MapPin } from 'lucide-react'
import { wedding } from '../data/weddingData'

const EVENTS = [
  {
    title: 'Mehendi',
    day: wedding.mehendi.day,
    date: wedding.mehendi.dateDisplay,
    time: wedding.mehendi.time,
    place: wedding.mehendi.place,
  },
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
      className="relative flex-1 border border-maroon/60 p-1.5"
    >
      <div className="border border-gold px-7 py-9 sm:px-9 sm:py-10 bg-ivory-light/70 text-center h-full">
        <p className="font-display text-lg sm:text-xl tracking-[0.15em] text-maroon uppercase mb-1">
          {event.title}
        </p>
        <span className="block w-8 h-px bg-gold mx-auto mb-6" />

        <div className="flex flex-col gap-3 items-center font-serif text-brown/80 text-[15px]">
          <p className="flex items-center gap-2">
            <CalendarDays size={16} className="text-gold-dark shrink-0" />
            {event.day}, {event.date}
          </p>
          <p className="flex items-center gap-2">
            <Clock size={16} className="text-gold-dark shrink-0" />
            {event.time}
          </p>
          {event.link ? (
            <a href={event.link} target="_blank" rel="noreferrer" className="flex items-start gap-2 text-left hover:text-maroon transition-colors">
              <MapPin size={16} className="text-gold-dark shrink-0 mt-1" />
              <span>{event.place}</span>
            </a>
          ) : (
            <div className="flex items-start gap-2 text-left">
              <MapPin size={16} className="text-gold-dark shrink-0 mt-1" />
              <span>{event.place}</span>
            </div>
          )}
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
