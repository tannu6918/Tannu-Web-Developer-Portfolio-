import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Services', to: 'services' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSetActive = (to) => setActiveSection(to);

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-glass' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 2.2 }}
    >
      <nav className="container-custom flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="hero"
          spy
          smooth
          duration={500}
          className="cursor-hover font-outfit text-xl font-bold"
        >
          <span className="gradient-text">Portfolio</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy
                smooth
                offset={-80}
                duration={500}
                onSetActive={handleSetActive}
                className={`cursor-hover relative rounded-full px-4 py-2 font-outfit text-sm font-medium transition-colors ${
                  activeSection === link.to
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.to && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 -z-10 rounded-full bg-accent-purple/20 ring-1 ring-accent-purple/40"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="contact"
          spy
          smooth
          offset={-80}
          className="cursor-hover hidden rounded-full bg-gradient-to-r from-accent-purple to-accent-blue px-5 py-2.5 font-outfit text-sm font-semibold text-white shadow-glow lg:inline-flex"
        >
          Hire Me
        </Link>

        <button
          type="button"
          className="cursor-hover rounded-lg p-2 text-2xl text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="glass absolute left-4 right-4 top-full mt-2 rounded-2xl p-4 lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy
                    smooth
                    offset={-80}
                    duration={500}
                    onClick={() => setMobileOpen(false)}
                    onSetActive={handleSetActive}
                    className={`block cursor-hover rounded-xl px-4 py-3 font-outfit text-sm ${
                      activeSection === link.to
                        ? 'bg-accent-purple/20 text-white'
                        : 'text-white/70'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
