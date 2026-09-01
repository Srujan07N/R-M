import { motion } from 'framer-motion'
import FloralDivider from './FloralDivider'
import { wedding } from '../data/weddingData'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function Invitation() {
  return (
    <section id="invitation" className="relative py-24 sm:py-32 px-5 paper-texture">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="relative mx-auto max-w-xl border border-maroon/70 p-2"
      >
        <div className="border border-gold p-8 sm:p-14 bg-ivory-light/60 text-center">
          <motion.p variants={item} className="font-display text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] pl-[0.2em] sm:pl-[0.3em] text-maroon/70 mb-8 whitespace-nowrap -mx-8 sm:mx-0">
            ॥ {wedding.invocation} ॥
          </motion.p>

          <motion.p variants={item} className="font-serif text-brown/80 leading-relaxed">
            With the choicest blessings of our elders, we
          </motion.p>
          <motion.p variants={item} className="font-serif text-brown/80 leading-relaxed mb-8">
            joyfully invite you to the wedding of
          </motion.p>

          <motion.div variants={item} className="mb-2">
            <p className="font-script text-4xl sm:text-5xl text-maroon">
              {wedding.groom.honorific} {wedding.groom.name}
            </p>
            <p className="mt-2 font-serif text-[13px] sm:text-sm text-brown/70 leading-snug">
              {wedding.groom.parentage}
              <br />
              {wedding.groom.family}
            </p>
          </motion.div>

          <motion.div variants={item} className="my-6">
            <FloralDivider />
          </motion.div>

          <motion.div variants={item}>
            <p className="font-script text-4xl sm:text-5xl text-maroon">
              {wedding.bride.honorific} {wedding.bride.name}
            </p>
            <p className="mt-2 font-serif text-[13px] sm:text-sm text-brown/70 leading-snug">
              {wedding.bride.parentage}
              <br />
              {wedding.bride.family}
            </p>
          </motion.div>

          <motion.div variants={item} className="my-9">
            <FloralDivider variant="simple" />
          </motion.div>

          <motion.p variants={item} className="font-display text-base sm:text-lg tracking-wide text-brown">
            {wedding.weddingDay}, {wedding.weddingDateDisplay}
          </motion.p>
          <motion.p variants={item} className="mt-1 font-serif text-brown/70 text-sm">
            {wedding.muhurtam.time} &middot; {wedding.muhurtam.lagna}
          </motion.p>
          <motion.p variants={item} className="mt-4 font-serif text-brown/80 text-[15px] sm:text-base">
            {wedding.venue.name}
            <br />
            {wedding.venue.area}
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
