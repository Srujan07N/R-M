import { motion } from 'framer-motion'

const Corner = ({ className, delay = 0 }) => (
  <svg
    viewBox="0 0 140 140"
    className={className}
    fill="none"
  >
    <motion.path
      d="M6 60 C 6 26, 26 6, 60 6 M6 6 L 6 40 M6 6 L 40 6"
      stroke="var(--color-gold)"
      strokeWidth="1.4"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.6, delay, ease: 'easeInOut' }}
    />
    <motion.path
      d="M20 60 C 20 36, 36 20, 60 20"
      stroke="var(--color-maroon)"
      strokeWidth="1"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.7 }}
      transition={{ duration: 1.6, delay: delay + 0.2, ease: 'easeInOut' }}
    />
    <motion.circle
      cx="18" cy="18" r="3.2"
      fill="var(--color-gold)"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: delay + 1.4 }}
    />
  </svg>
)

/**
 * A quiet ornamental frame drawn once around the viewport on load.
 * Hidden on small screens where it would crowd the content.
 */
export default function OrnamentalBorder() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 hidden md:block">
      <div className="absolute inset-3 border border-gold/40" />
      <div className="absolute inset-[18px] border border-maroon/15" />
      <Corner className="absolute top-3 left-3 w-16 h-16" delay={0.2} />
      <Corner className="absolute top-3 right-3 w-16 h-16 -scale-x-100" delay={0.35} />
      <Corner className="absolute bottom-3 left-3 w-16 h-16 -scale-y-100" delay={0.5} />
      <Corner className="absolute bottom-3 right-3 w-16 h-16 -scale-x-100 -scale-y-100" delay={0.65} />
    </div>
  )
}
