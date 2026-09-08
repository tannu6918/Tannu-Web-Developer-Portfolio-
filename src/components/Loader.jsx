import { motion } from 'framer-motion';

export default function Loader({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative flex h-24 w-24 items-center justify-center"
        onAnimationComplete={onComplete}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent-purple border-r-accent-blue"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-transparent border-b-accent-neon border-l-accent-glow"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
        <motion.span
          className="font-outfit text-2xl font-bold gradient-text"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          S
        </motion.span>
      </motion.div>
      <motion.p
        className="mt-6 font-outfit text-sm tracking-[0.3em] text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        LOADING
      </motion.p>
      <motion.div
        className="mt-4 h-1 w-48 overflow-hidden rounded-full bg-dark-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-purple to-accent-blue"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
}
