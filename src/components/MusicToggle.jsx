import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Music, VolumeX } from 'lucide-react'
import { wedding } from '../data/weddingData'

/**
 * Floating play/pause control for optional background music.
 * Never autoplays; fails silently if the audio file is missing.
 */
export default function MusicToggle() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [available, setAvailable] = useState(true)

  useEffect(() => {
    setAvailable(true)
    const audio = new Audio(wedding.music.src)
    audio.loop = true
    audio.volume = 0.5
    
    const onError = () => setAvailable(false)
    audio.addEventListener('error', onError)
    audioRef.current = audio
    
    let interactionHandled = false
    
    const handleInteraction = () => {
      if (interactionHandled) return
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => {
            setPlaying(true)
            interactionHandled = true
            removeListeners()
          })
          .catch(() => {})
      }
    }

    const removeListeners = () => {
      window.removeEventListener('click', handleInteraction)
      window.removeEventListener('touchstart', handleInteraction)
      window.removeEventListener('scroll', handleInteraction)
    }

    // Try immediately (works if browser allows autoplay for this site)
    audio.play().then(() => {
      setPlaying(true)
      interactionHandled = true
    }).catch(() => {
      // If blocked, wait for first user interaction
      window.addEventListener('click', handleInteraction, { once: true })
      window.addEventListener('touchstart', handleInteraction, { once: true })
      window.addEventListener('scroll', handleInteraction, { once: true })
    })

    return () => {
      audio.removeEventListener('error', onError)
      audio.pause()
      audio.removeAttribute('src')
      removeListeners()
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio || !available) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setAvailable(false))
    }
  }

  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label={playing ? 'Pause music' : 'Play music'}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, rotate: playing ? 360 : 0 }}
      transition={{ rotate: { duration: 6, repeat: playing ? Infinity : 0, ease: 'linear' }, default: { duration: 0.5 } }}
      className="fixed bottom-5 right-5 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-maroon text-ivory-light shadow-lg flex items-center justify-center border border-gold/60 hover:bg-maroon-light transition-colors"
    >
      {playing ? <Music size={18} /> : <VolumeX size={18} />}
    </motion.button>
  )
}
