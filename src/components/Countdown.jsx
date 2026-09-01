import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wedding } from '../data/weddingData'

function getTimeLeft() {
  const diff = new Date(wedding.weddingDate).getTime() - Date.now()
  if (diff <= 0) return null
  return {
    Days: Math.floor(diff / 86400000),
    Hours: Math.floor((diff / 3600000) % 24),
    Minutes: Math.floor((diff / 60000) % 60),
    Seconds: Math.floor((diff / 1000) % 60),
  }
}

function Unit({ label, value }) {
  return (
    <div className="relative flex flex-col items-center justify-center w-[72px] h-[80px] sm:w-24 sm:h-28 p-[2px] overflow-hidden rounded-sm">
      <div 
        className="absolute inset-[-100%] animate-[spin_6s_linear_infinite] opacity-80"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, var(--color-maroon) 90deg, transparent 180deg, var(--color-gold) 270deg, transparent 360deg)'
        }}
      />
      <div className="relative w-full h-full flex flex-col items-center justify-center border border-gold/40 bg-ivory-light rounded-sm">
        <span className="absolute inset-1 border border-gold/20 pointer-events-none" />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35 }}
            className="font-display text-2xl sm:text-3xl text-maroon"
          >
            {String(value).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
        <span className="mt-1 font-serif text-[10px] sm:text-xs tracking-[0.15em] uppercase text-brown/60">
          {label}
        </span>
      </div>
    </div>
  )
}

export default function Countdown() {
  const [left, setLeft] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative py-20 sm:py-28 px-5 bg-beige/40">
      <div className="mx-auto max-w-lg text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-xs tracking-[0.32em] text-maroon/70 mb-8"
        >
          Counting Down To Forever
        </motion.p>

        {left ? (
          <div className="grid grid-cols-4 gap-2.5 sm:gap-4 justify-center place-items-center">
            <Unit label="Days" value={left.Days} />
            <Unit label="Hours" value={left.Hours} />
            <Unit label="Minutes" value={left.Minutes} />
            <Unit label="Seconds" value={left.Seconds} />
          </div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-script text-4xl text-maroon"
          >
            Today we begin forever.
          </motion.p>
        )}
      </div>
    </section>
  )
}
