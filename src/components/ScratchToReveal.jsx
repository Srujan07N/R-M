import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScratchToReveal({ children, width = 280, height = 50 }) {
  const canvasRef = useRef(null);
  const [isScratching, setIsScratching] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    // Fill with gold color
    ctx.fillStyle = '#C8A96B'; // gold
    ctx.fillRect(0, 0, width, height);
    
    // Add a border pattern or something nice
    ctx.strokeStyle = '#A9843F'; // darker gold
    ctx.lineWidth = 2;
    ctx.strokeRect(2, 2, width - 4, height - 4);
    
    // Add text
    ctx.font = '14px "Cormorant Garamond", serif';
    ctx.fillStyle = '#3D2520'; // brown
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Scratch to Reveal Date', width / 2, height / 2);
  }, [width, height]);

  const scratch = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 16, 0, Math.PI * 2);
    ctx.fill();
  };

  const checkReveal = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, width, height);
    const pixels = imageData.data;
    let transparent = 0;
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparent++;
    }
    // If more than 40% is scratched, reveal the whole thing
    if (transparent / (pixels.length / 4) > 0.4) {
      setIsRevealed(true);
    }
  };

  const handlePointerDown = (e) => {
    if (isRevealed) return;
    setIsScratching(true);
    const rect = canvasRef.current.getBoundingClientRect();
    scratch(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handlePointerMove = (e) => {
    if (!isScratching || isRevealed) return;
    const rect = canvasRef.current.getBoundingClientRect();
    scratch(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handlePointerUp = () => {
    if (!isScratching || isRevealed) return;
    setIsScratching(false);
    checkReveal();
  };

  return (
    <div 
      className="relative inline-block select-none rounded-sm overflow-hidden" 
      style={{ width, height }}
    >
      {/* Content underneath */}
      <div className="absolute inset-0 flex items-center justify-center bg-ivory-light/50">
        {children}
      </div>
      
      {/* Scratch layer */}
      <AnimatePresence>
        {!isRevealed && (
          <motion.canvas
            ref={canvasRef}
            width={width}
            height={height}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-10 touch-none cursor-pointer"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
