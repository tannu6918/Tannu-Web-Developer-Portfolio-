import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleOver = (e) => {
      const target = e.target;
      if (
        target.closest('a, button, [role="button"], input, textarea, .cursor-hover')
      ) {
        setHovering(true);
      }
    };

    const handleOut = () => setHovering(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden mix-blend-difference md:block"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: hovering ? 2.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="h-4 w-4 rounded-full bg-white" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9997] hidden rounded-full border border-accent-purple/50 md:block"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          width: hovering ? 48 : 40,
          height: hovering ? 48 : 40,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      />
    </>
  );
}
