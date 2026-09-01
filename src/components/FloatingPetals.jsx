import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Gentle floating gold particles used behind the hero.
 * Kept sparse and slow so it reads as ambience, not noise.
 */
export default function FloatingPetals({ count = 14 }) {
  const prefersReduced = useReducedMotion()

  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 10 + Math.random() * 10,
        delay: Math.random() * 8,
        drift: (Math.random() - 0.5) * 60,
      })),
    [count]
  )

  if (prefersReduced) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-gold/70"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            bottom: '-5%',
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -420 - p.duration * 4],
            x: [0, p.drift],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
