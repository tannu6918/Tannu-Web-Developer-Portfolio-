import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { profile } from '../data/profile';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  instagram: FaInstagram,
};

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/10 bg-dark-100/50 py-12">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-outfit text-lg font-semibold gradient-text">{profile.name}</p>
            <p className="mt-1 text-sm text-white/50">Web Developer — Crafting digital experiences</p>
          </div>

          <div className="flex gap-4">
            {profile.socials.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-hover flex h-11 w-11 items-center justify-center rounded-full glass text-white/70 transition-colors hover:text-accent-neon"
                  whileHover={{ scale: 1.1, y: -3 }}
                  aria-label={social.name}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>

          <motion.button
            type="button"
            onClick={scrollTop}
            className="cursor-hover flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-glow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </motion.button>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {profile.name} — Web Developer. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link to="about" smooth className="cursor-hover hover:text-white">
              About
            </Link>
            <Link to="projects" smooth className="cursor-hover hover:text-white">
              Projects
            </Link>
            <Link to="contact" smooth className="cursor-hover hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
