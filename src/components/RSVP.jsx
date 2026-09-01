import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import FloralDivider from './FloralDivider'
import { wedding } from '../data/weddingData'

export default function RSVP() {
  const message = encodeURIComponent(
    `Dear ${wedding.groom.name} & ${wedding.bride.name}, we joyfully accept your invitation and look forward to celebrating with you!`
  )
  const whatsappUrl = `https://wa.me/${wedding.rsvpWhatsAppNumber}?text=${message}`

  return (
    <section className="relative py-24 sm:py-32 px-5">
      <div className="mx-auto max-w-lg text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-2xl sm:text-3xl text-maroon"
        >
          Your Presence Is Our Blessing
        </motion.h2>

        <div className="my-6">
          <FloralDivider />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-brown/75 leading-relaxed"
        >
          We would be honored to celebrate this beautiful occasion with you.
        </motion.p>

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 inline-flex items-center gap-2 font-serif tracking-wide text-sm sm:text-[15px] border border-maroon text-maroon px-8 py-3 transition-colors duration-300 hover:bg-maroon hover:text-ivory-light"
        >
          <MessageCircle size={16} />
          RSVP on WhatsApp
        </motion.a>
      </div>
    </section>
  )
}
