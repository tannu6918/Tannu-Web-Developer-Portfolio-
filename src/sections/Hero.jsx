import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiDownload } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Button from '../components/Button';
import FloatingShapes from '../components/FloatingShapes';
import { profile } from '../data/profile';
import { fadeUp, slideLeft, slideRight } from '../animations/variants';
import { useMouseParallax } from '../hooks/useMouseParallax';

export default function Hero() {
  const imageRef = useMouseParallax(15);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden section-padding pt-28"
    >
      <FloatingShapes />

      <div className="container-custom relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate="visible"
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.p
            className="font-outfit text-lg text-accent-neon sm:text-xl"
            variants={fadeUp}
          >
            {profile.greeting}
          </motion.p>

          <motion.h1
            className="mt-2 font-outfit text-5xl font-extrabold leading-tight sm:text-6xl md:text-7xl"
            variants={fadeUp}
          >
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.div
            className="mt-4 flex flex-wrap items-center justify-center gap-2 font-outfit text-2xl font-semibold sm:text-3xl lg:justify-start"
            variants={fadeUp}
          >
            <span className="text-white/80">And I&apos;m a</span>
            <TypeAnimation
              sequence={profile.roles.flatMap((role) => [role, 2000])}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text"
            />
          </motion.div>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg lg:mx-0"
            variants={fadeUp}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            variants={fadeUp}
          >
            <Link to="contact" spy smooth offset={-80}>
              <Button>Hire Me</Button>
            </Link>
            <Button variant="outline" href={profile.resumeUrl} icon={HiDownload}>
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="visible"
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent-purple/40 to-accent-blue/40 blur-2xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              ref={imageRef}
              className="relative"
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="gradient-border relative h-72 w-72 overflow-hidden rounded-full sm:h-80 sm:w-80 md:h-96 md:w-96">
               <img
  src={`${import.meta.env.BASE_URL}tannu-img.png`}
  alt="Tannu"
/>
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 rounded-2xl glass px-4 py-3 font-outfit text-sm font-semibold"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
              >
                <span className="gradient-text">Available for work</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Link
          to="about"
          smooth
          className="cursor-hover flex flex-col items-center gap-2 text-white/40 hover:text-white"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1">
            <motion.div
              className="mx-auto h-2 w-1 rounded-full bg-accent-purple"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
