import { motion } from 'framer-motion'

/**
 * A slim gold divider with a small central floral flourish.
 * `variant="simple"` renders just the line, for tighter spots.
 */
export default function FloralDivider({ variant = 'full', className = '' }) {
  return (
    <motion.div
      className={`flex items-center justify-center gap-3 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-gold" />
      {variant === 'full' && (
        <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
          <path
            d="M14 2 C 16 6, 22 6, 24 10 C 22 14, 16 14, 14 18 C 12 14, 6 14, 4 10 C 6 6, 12 6, 14 2 Z"
            stroke="var(--color-maroon)"
            strokeWidth="1"
            fill="var(--color-gold-light)"
            fillOpacity="0.5"
          />
          <circle cx="14" cy="10" r="1.6" fill="var(--color-maroon)" />
        </svg>
      )}
      {variant === 'simple' && <span className="w-1.5 h-1.5 rotate-45 bg-gold" />}
      <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-gold" />
    </motion.div>
  )
}
