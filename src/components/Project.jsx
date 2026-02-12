import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import { Typography } from './ui/Typography';
import { Button } from './ui/Button';

export default function Project({ data }) {
  if (!data) return null;

  const displayedProjects = data.slice(0, 4);

  return (
    <section className="px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-baseline justify-between mb-4 pb-2">
          <Typography variant="h3">
            Projects
          </Typography>
          <Typography variant="small" className="text-muted-foreground">
            Selected Works
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/projects">
            <Button
              variant="secondary"
              size="sm"
            >
              View Projects
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
