import { useEffect, useRef } from 'react';

export default function StarfieldBackground({ absolute = false, color = '200, 169, 107', zIndex = 0 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = absolute ? canvas.parentElement.offsetWidth : window.innerWidth;
    let height = absolute ? canvas.parentElement.offsetHeight : window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const numStars = 400;
    const stars = [];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
      });
    }

    const moveStars = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        star.z -= 1.5;

        if (star.z <= 0) {
          star.x = Math.random() * width - cx;
          star.y = Math.random() * height - cy;
          star.z = width;
        }

        const k = 128.0 / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const size = Math.max(0, (1 - star.z / width) * 2.5);
          const opacity = Math.max(0, 1 - (star.z / width));
          
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${opacity})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(moveStars);
    };

    moveStars();

    const handleResize = () => {
      width = absolute ? canvas.parentElement.offsetWidth : window.innerWidth;
      height = absolute ? canvas.parentElement.offsetHeight : window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [absolute, color]);

  return (
    <div className={`${absolute ? 'absolute' : 'fixed'} inset-0 pointer-events-none overflow-hidden`} style={{ zIndex }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
    </div>
  );
}
