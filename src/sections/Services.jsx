import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/services';
import { fadeUp, staggerContainer } from '../animations/variants';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-dark-100/30 gsap-reveal">
      <div className="container-custom">
        <SectionHeading subtitle="What I Offer" title="Our Services" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="cursor-hover group relative overflow-hidden rounded-2xl glass p-8 transition-all duration-500 hover:border-accent-purple/40 hover:shadow-glow"
                whileHover={{ y: -8 }}
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent-purple/10 blur-2xl transition group-hover:bg-accent-purple/25" />
                <motion.div
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-purple/30 to-accent-blue/30 text-3xl text-accent-neon"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon />
                </motion.div>
                <h3 className="font-outfit text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">{service.description}</p>
                <motion.span
                  className="mt-6 inline-block font-outfit text-sm font-medium text-accent-neon opacity-0 transition group-hover:opacity-100"
                >
                  Read More →
                </motion.span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
