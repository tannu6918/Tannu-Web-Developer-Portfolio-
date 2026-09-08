import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { fadeUp } from '../animations/variants';

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  };

  return (
    <motion.article
      ref={cardRef}
      variants={fadeUp}
      className="cursor-hover group relative overflow-hidden rounded-2xl gradient-border bg-dark-200/80 transition-transform duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent opacity-80" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          initial={false}
        >
          <a
            href={project.liveUrl}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition hover:bg-accent-purple"
            aria-label="Live preview"
          >
            <FaExternalLinkAlt />
          </a>
          <a
            href={project.githubUrl}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition hover:bg-accent-blue"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </motion.div>
        <span className="absolute left-4 top-4 rounded-full bg-accent-purple/80 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
          {project.filter}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-outfit text-xl font-bold text-white group-hover:gradient-text transition-all">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-white/60">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 blur-xl" />
      </div>
    </motion.article>
  );
}
