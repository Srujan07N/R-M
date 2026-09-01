import { motion, AnimatePresence } from 'framer-motion'
import rmLogo from '../assets/RM.png'

export default function Loader({ isOpening, onOpen }) {
  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0.99, transition: { duration: 1.2 } }}
        >
          {/* Left Door */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-maroon-dark z-0"
            exit={{ x: "-100%", transition: { duration: 1.2, ease: "easeInOut" } }}
          />
          {/* Right Door */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-maroon-dark z-0"
            exit={{ x: "100%", transition: { duration: 1.2, ease: "easeInOut" } }}
          />

          {/* Subtle background glow */}
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(126,43,50,0.5)_0%,_transparent_70%)] opacity-80 z-0"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          />

          <motion.div
            className="flex flex-col items-center justify-center cursor-pointer relative z-10"
            onClick={onOpen}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
          >
            {/* Premium Logo SVG Animation */}
            <motion.img 
              src={rmLogo} 
              alt="R & M Logo" 
              className="w-56 h-56 sm:w-72 sm:h-72 drop-shadow-[0_0_20px_rgba(200,169,107,0.5)] object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
            />
            
            <motion.p
              className="mt-10 font-serif italic text-gold-light text-sm sm:text-base tracking-[0.3em] uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
              Tap to Open
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
