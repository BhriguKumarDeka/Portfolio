import React from 'react';
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight01Icon, ArrowRight01Icon } from "hugeicons-react";
import { Typography } from "./ui/Typography";

export const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const detailsLink = project.slug ? `/project/${project.slug}` : `/project/${project.id}`;
  const liveLink = project.link || "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative flex flex-col rounded-2xl bg-card p-2 transition-all duration-500"
    >
      {/* Visual Header */}
      <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-secondary/10">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover duration-200"
          whileHover={{ scale: 1.05 }}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-2 px-2  pt-4 pb-2">

        {/* Description */}
        <Typography
          variant="body"
          className="text-sm leading-relaxed text-foreground/60 font-light tracking-tight h-8"
        >
          {project.description}
        </Typography>

        {/* Tech Stack */}
        <div className="flex items-center gap-1 overflow-hidden">
          {project.techStack?.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="text-[10px] font-mono tracking-wide text-foreground/40 whitespace-nowrap bg-secondary/30 py-1 px-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-12 pt-2">
          {/* Live/Source Button */}
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex h-8 items-center justify-center gap-2 rounded-xl bg-primary text-background transition-all hover:opacity-90 active:scale-[0.98] shadow-sm"
          >
            <span className="text-[11px] font-mono font-semibold uppercase tracking-tighter">
              {liveLink.includes("figma") ? "Prototype" : "Live"}
            </span>
            <ArrowUpRight01Icon size={16} strokeWidth={2} />
          </a>
          {/* View Details Button */}
          <button
            onClick={() => navigate(detailsLink)}
            className="flex-1 flex h-8 items-center justify-center gap-2 rounded-xl bg-secondary text-foreground transition-all hover:bg-secondary/20 active:scale-[0.98]"
          >
            <span className="text-[11px] font-mono font-semibold uppercase tracking-tighter">
              Details
            </span>
            <ArrowRight01Icon size={16} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Hover Light Leak */}
      <div className="absolute inset-0 rounded-[32px] pointer-events-none border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
};