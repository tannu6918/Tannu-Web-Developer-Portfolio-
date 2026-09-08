import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { experience } from '../data/experience';
import { fadeUp } from '../animations/variants';

export default function Experience() {
  return (
    <section id="experience" className="section-padding gsap-reveal">
      <div className="container-custom">
        <SectionHeading subtitle="Career" title="Experience Timeline" />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-accent-purple via-accent-blue to-transparent md:left-1/2 md:-translate-x-px" />

          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              className={`relative mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div className="hidden w-1/2 md:block" />
              <div
                className={`w-full pl-12 md:w-1/2 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}
              >
                <motion.div
                  variants={fadeUp}
                  className="glass cursor-hover rounded-2xl p-6 transition hover:shadow-glow"
                >
                  <span className="font-outfit text-sm font-semibold text-accent-neon">
                    {item.year}
                  </span>
                  <h3 className="mt-2 font-outfit text-xl font-bold text-white">{item.role}</h3>
                  <p className="text-accent-purple/90">{item.company}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{item.description}</p>
                </motion.div>
              </div>
              <div className="absolute left-4 top-6 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
                <motion.div
                  className="h-4 w-4 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue shadow-glow"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
