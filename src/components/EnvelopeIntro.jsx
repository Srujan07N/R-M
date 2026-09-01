import { motion, AnimatePresence } from 'framer-motion'
import { wedding } from '../data/weddingData'

/**
 * Full-screen envelope gate. Renders until `onOpen` is triggered by the
 * visitor, then animates out to reveal the invitation underneath.
 */
export default function EnvelopeIntro({ isOpening, onOpen }) {
  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ivory paper-texture px-6"
          exit={{ opacity: 0, transition: { duration: 0.9, delay: 0.5 } }}
        >
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.span
              className="font-display text-[11px] sm:text-xs tracking-[0.35em] text-maroon/70 uppercase mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              You&rsquo;re Invited
            </motion.span>

            {/* Envelope */}
            <motion.button
              type="button"
              onClick={onOpen}
              aria-label="Open the wedding invitation"
              className="relative w-64 h-44 sm:w-72 sm:h-48 focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-4 focus-visible:ring-offset-ivory rounded-sm"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.9, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg viewBox="0 0 280 190" className="w-full h-full drop-shadow-[0_18px_30px_rgba(101,31,37,0.18)]">
                <rect x="4" y="4" width="272" height="182" rx="4" fill="var(--color-ivory-light)" stroke="var(--color-gold)" strokeWidth="1.5" />
                <rect x="14" y="14" width="252" height="162" fill="none" stroke="var(--color-gold)" strokeWidth="0.75" />
                <path d="M4 8 L140 118 L276 8" fill="none" stroke="var(--color-gold-dark)" strokeWidth="1.5" />
                <path d="M4 186 L108 96" fill="none" stroke="var(--color-gold)" strokeWidth="1" opacity="0.6" />
                <path d="M276 186 L172 96" fill="none" stroke="var(--color-gold)" strokeWidth="1" opacity="0.6" />
                <circle cx="140" cy="96" r="16" fill="var(--color-maroon)" />
                <circle cx="140" cy="96" r="16" fill="none" stroke="var(--color-gold)" strokeWidth="1" />
                <text x="140" y="101" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="13" fill="var(--color-gold-light)">R&amp;M</text>
              </svg>
            </motion.button>

            <motion.p
              className="mt-8 font-serif italic text-brown/70 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              Tap the envelope to open your invitation
            </motion.p>

            <motion.p
              className="mt-2 font-script text-3xl text-maroon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              {wedding.groom.name} &amp; {wedding.bride.name}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
