import { useState } from 'react';
import { motion } from 'framer-motion';
import {
FaEnvelope,
FaMapMarkerAlt,
FaGithub,
FaLinkedin,
FaTwitter,
} from 'react-icons/fa';

import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { profile } from '../data/profile';
import { fadeUp, staggerContainer } from '../animations/variants';

const inputClass =
'w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 font-poppins text-white placeholder-white/40 backdrop-blur-sm transition focus:border-accent-purple focus:outline-none focus:ring-2 focus:ring-accent-purple/30';

export default function Contact() {
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(
      'https://formsubmit.co/ajax/tannu6918@gmail.com',
      {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      }
    );

    const result = await response.json();

    if (response.ok) {
      alert('Message sent successfully!');
      form.reset();
    } else {
      console.error(result);
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error(error);
    alert('Failed to send message. Please try again.');
  } finally {
    setLoading(false);
  }
};

return ( 

<section id="contact" className="section-padding gsap-reveal"> <div className="container-custom"> <SectionHeading
       subtitle="Get In Touch"
       title="Let's Build Something Great"
       description="Open for freelance, full-time, and collaborative opportunities."
     />

    <div className="grid gap-12 lg:grid-cols-2">

      {/* CONTACT INFORMATION */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeUp} className="glass rounded-2xl p-8">

          <h3 className="font-outfit text-2xl font-bold gradient-text">
            Contact Me!
          </h3>

          <p className="mt-4 text-white/60">
            I'm Tannu, a web developer crafting responsive, interactive,
            and user-friendly websites.
          </p>

          <div className="mt-8 space-y-4">

            <a
              href={`mailto:${profile.email}`}
              className="cursor-hover flex items-center gap-4 text-white/70 transition hover:text-accent-neon"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-purple/20">
                <FaEnvelope className="text-accent-neon" />
              </span>

              {profile.email}
            </a>

            <div className="flex items-center gap-4 text-white/70">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/20">
                <FaMapMarkerAlt className="text-accent-blue" />
              </span>

              Available Worldwide — Remote
            </div>

          </div>

          <div className="mt-8 flex gap-4">

            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
              <motion.a
                key={i}
                href={profile.socials[i]?.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-hover flex h-12 w-12 items-center justify-center rounded-full glass text-white/70 hover:text-white"
                whileHover={{ scale: 1.15, y: -4 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}

          </div>

        </motion.div>
      </motion.div>


      {/* CONTACT FORM */}
      <motion.form
        onSubmit={handleSubmit}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="glass rounded-2xl p-8"
      >

        {/* IMPORTANT FOR FORMSUBMIT */}
        <input
          type="hidden"
          name="_subject"
          value="New Portfolio Contact Message"
        />

        <input
          type="hidden"
          name="_captcha"
          value="false"
        />

        <div className="grid gap-5 sm:grid-cols-2">

          <motion.div variants={fadeUp}>
            <label
              htmlFor="name"
              className="mb-2 block text-sm text-white/60"
            >
              Your Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              className={inputClass}
              placeholder="John Doe"
            />
          </motion.div>


          <motion.div variants={fadeUp}>
            <label
              htmlFor="email"
              className="mb-2 block text-sm text-white/60"
            >
              Your Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              className={inputClass}
              placeholder="john@example.com"
            />
          </motion.div>

        </div>


        <motion.div variants={fadeUp} className="mt-5">

          <label
            htmlFor="subject"
            className="mb-2 block text-sm text-white/60"
          >
            Subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            required
            className={inputClass}
            placeholder="Project Inquiry"
          />

        </motion.div>


        <motion.div variants={fadeUp} className="mt-5">

          <label
            htmlFor="message"
            className="mb-2 block text-sm text-white/60"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`${inputClass} resize-none`}
            placeholder="Tell me about your project..."
          />

        </motion.div>


        <motion.div variants={fadeUp} className="mt-6">

          <Button
            type="submit"
            className="w-full sm:w-auto"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>

        </motion.div>

      </motion.form>

    </div>
  </div>
</section>

)}
