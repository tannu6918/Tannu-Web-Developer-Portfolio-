import { motion } from 'framer-motion';

const shapes = [
  { size: 300, top: '10%', left: '5%', color: 'rgba(139,92,246,0.15)', delay: 0 },
  { size: 200, top: '60%', left: '80%', color: 'rgba(59,130,246,0.12)', delay: 2 },
  { size: 150, top: '30%', left: '70%', color: 'rgba(167,139,250,0.1)', delay: 4 },
  { size: 100, top: '80%', left: '20%', color: 'rgba(96,165,250,0.15)', delay: 1 },
];

export default function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            background: shape.color,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        />
      ))}
      <motion.div
        className="absolute right-[15%] top-[20%] h-24 w-24 rounded-2xl border border-accent-purple/20 bg-accent-purple/5"
        animate={{ rotate: [0, 90, 180, 270, 360], y: [-10, 10, -10] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[10%] h-16 w-16 rounded-full border border-accent-blue/30"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute left-[40%] top-[15%] h-3 w-3 rounded-full bg-accent-neon shadow-glow"
        animate={{ y: [0, -30, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
}
