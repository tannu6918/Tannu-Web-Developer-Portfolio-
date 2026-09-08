import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

export default function SectionHeading({ subtitle, title, description, align = 'center' }) {
  const alignClass =
    align === 'center' ? 'text-center mx-auto' : align === 'left' ? 'text-left' : 'text-right';

  return (
    <motion.div
      className={`mb-14 max-w-2xl ${alignClass}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {subtitle && (
        <span className="mb-3 inline-block font-outfit text-sm font-medium uppercase tracking-widest text-accent-neon">
          {subtitle}
        </span>
      )}
      <h2 className="font-outfit text-3xl font-bold sm:text-4xl md:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">{description}</p>
      )}
      <div
        className={`mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
}
