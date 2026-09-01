import { motion } from 'framer-motion'
import rmLogo from '../assets/RM.png'
import FloralDivider from './FloralDivider'
import { wedding } from '../data/weddingData'

export default function Couple() {
  return (
    <section id="couple" className="relative py-24 sm:py-32 px-5">
      <div className="mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-xs tracking-[0.32em] text-maroon/70"
        >
          The Couple
        </motion.p>

        {/* Ornamental monogram placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mx-auto my-10 relative w-44 h-44 sm:w-56 sm:h-56 cursor-pointer group"
        >
          <img src={rmLogo} alt="R & M" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(200,169,107,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(200,169,107,0.8)]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-script text-5xl sm:text-6xl text-maroon leading-tight"
        >
          {wedding.groom.name}
          <span className="block font-display text-lg text-gold-dark my-1">&amp;</span>
          {wedding.bride.name}
        </motion.h2>

        <div className="my-8">
          <FloralDivider />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif text-brown/75 leading-relaxed max-w-md mx-auto"
        >
          Two families, joined by tradition and blessing, come together to
          celebrate a union rooted in love, respect and togetherness.
        </motion.p>
      </div>
    </section>
  )
}
