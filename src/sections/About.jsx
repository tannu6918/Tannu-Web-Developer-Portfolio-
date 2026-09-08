import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { stats } from '../data/experience';
import { useCounter } from '../hooks/useCounter';
import { fadeUp, staggerContainer } from '../animations/variants';

function StatCard({ label, value, suffix }) {
  const { count, ref } = useCounter(value, 2000);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="glass cursor-hover rounded-2xl p-6 text-center transition hover:border-accent-purple/30 hover:shadow-glow"
    >
      <p className="font-outfit text-4xl font-bold gradient-text">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-white/60">{label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding gsap-reveal">
      <div className="container-custom">
        <SectionHeading
          subtitle="About Me"
          title="Web Developer!"
          description="Passionate about crafting clean, responsive, and user-friendly web interfaces."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="gsap-parallax"
          >
            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <p className="leading-relaxed text-white/70">
                I&apos;m <strong className="text-white">Tannu</strong>, a passionate{' '}
                <strong className="text-accent-neon"> Web Developer Frontend Developer</strong> skilled in HTML,
                CSS, JavaScript, jQuery, Bootstrap, Tailwind, React, and UI/UX design. I craft
                clean, responsive, and user-friendly web interfaces.
              </p>
              <p className="mt-4 leading-relaxed text-white/70">
                I also have working knowledge of <strong className="text-white">MySQL, Node.js,
                PHP</strong> for basic backend integration. I&apos;m a fast learner with a love for
                new technologies, focused on growing and delivering value through dedication and
                attention to detail.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="gradient-border overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1498050108027-c5249f4df085?w=800&q=80"
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4 shadow-glow">
              <p className="font-outfit text-2xl font-bold gradient-text">6+Month</p>
              <p className="text-sm text-white/60">Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
