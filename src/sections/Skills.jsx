import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { skillCategories } from '../data/skills';
import { fadeUp, staggerContainer } from '../animations/variants';

function SkillBar({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div variants={fadeUp} className="group cursor-hover">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="text-xl transition-transform group-hover:scale-125" style={{ color: skill.color }} />
          <span className="font-outfit font-medium">{skill.name}</span>
        </div>
        <span className="text-sm text-accent-neon">{skill.level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-dark-300">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-purple to-accent-blue"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const current = skillCategories.find((c) => c.id === activeCategory);

  return (
    <section id="skills" className="section-padding bg-dark-100/30 gsap-reveal">
      <div className="container-custom">
        <SectionHeading subtitle="My Skills" title="Tech Stack" />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {skillCategories.map((cat) => (
            <motion.button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`cursor-hover rounded-full px-6 py-2.5 font-outfit text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-glow'
                  : 'glass text-white/60 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {cat.title}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto grid max-w-3xl gap-6"
        >
          {current?.skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </motion.div>

        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {skillCategories.flatMap((cat) =>
            cat.skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={`${cat.id}-${skill.name}`}
                  className="cursor-hover flex h-16 w-16 items-center justify-center rounded-2xl glass transition hover:shadow-glow"
                  whileHover={{ y: -8, scale: 1.1 }}
                >
                  <Icon className="text-3xl" style={{ color: skill.color }} />
                </motion.div>
              );
            })
          )}
        </motion.div>
      </div>
    </section>
  );
}
