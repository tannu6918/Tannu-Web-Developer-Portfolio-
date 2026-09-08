import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects, projectFilters } from '../data/projects';
import { staggerContainer } from '../animations/variants';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (filter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.filter === filter);
  }, [filter]);

  return (
    <section id="projects" className="section-padding gsap-reveal">
      <div className="container-custom">
        <SectionHeading
          subtitle="Portfolio"
          title="Our Projects"
          description="Selected work across education, e-commerce, and UI libraries."
        />

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {projectFilters.map((item) => (
            <motion.button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`cursor-hover rounded-full px-5 py-2 font-outfit text-sm font-medium transition ${
                filter === item
                  ? 'bg-accent-purple/30 text-white ring-1 ring-accent-purple'
                  : 'text-white/50 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <motion.div
            key={filter}
            layout
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        ) : (
          <p className="text-center text-white/50">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}