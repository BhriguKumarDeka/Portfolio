import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import {
   Github01Icon,
   CpuIcon,
   CheckListIcon,
   DashboardSquare01Icon,
   PlayIcon,
   CodeCircleIcon
} from 'hugeicons-react';
import { Typography } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';

const SectionLabel = ({ icon: Icon, label }) => (
   <div className="flex items-center gap-2 mb-4">
      <Icon size={16} className="text-muted-foreground" />
      <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">{label}</span>
   </div>
);

const ProjectDetail = () => {
   const { slug } = useParams();
   const navigate = useNavigate();
   const [project, setProject] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      window.scrollTo(0, 0);
      const foundProject = portfolioData.projects.find(p => p.slug === slug || p.id === slug);
      if (foundProject) {
         setProject(foundProject);
      }
      setLoading(false);
   }, [slug]);

   if (loading) return null;

   if (!project) {
      return (
         <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
            <Typography variant="h2" className="mb-4">Project not found</Typography>
            <Button onClick={() => navigate('/projects')}>Back to Projects</Button>
         </div>
      );
   }

   const isDimlightOrWishgrid = project.slug === 'dimlight' || project.slug === 'wishgrid';
   const isUIDesign = project.category === 'UI Projects' || project.category === 'Case Studies';
   const hasVideo = project.videoUrl && isDimlightOrWishgrid;
   const hasFigma = project.figmaUrl && isUIDesign;
   const liveLink = project.link || "#";
   const isGithub = liveLink.includes("github");

   const getEmbedUrl = (url) => {
      if (!url) return '';
      if (url.includes('youtu.be/')) return `https://www.youtube.com/embed/${url.split('youtu.be/')[1].split('?')[0]}`;
      if (url.includes('youtube.com/watch?v=')) return `https://www.youtube.com/embed/${url.split('v=')[1].split('&')[0]}`;
      return url;
   };

   return (
      <main className="pt-4 pb-32">

         {/* Title */}
         <section className="px-4 mb-8">
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
            >
               <Typography variant="h3">
                  {project.title}
               </Typography>
            </motion.div>
         </section>

         {/* Media Card */}
         <section className="px-4 mb-12">
            <motion.div
               initial={{ opacity: 0, scale: 0.98, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
               className="rounded-xl border border-border bg-background shadow-lg overflow-hidden"
            >
               <div className={`relative w-full bg-secondary/5 ${hasFigma ? 'aspect-4/3' : 'aspect-video'}`}>
                  {hasVideo ? (
                     <iframe
                        className="w-full h-full"
                        src={getEmbedUrl(project.videoUrl)}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                     />
                  ) : hasFigma ? (
                     <iframe
                        className="w-full h-full"
                        src={project.figmaUrl}
                        allowFullScreen
                     />
                  ) : (
                     <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                     />
                  )}
                  <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none" />
               </div>

               {/* Actions Bar */}
               <div className="border-t border-border bg-secondary/10 p-4 flex items-center justify-center gap-3">
                  {isGithub && (
                     <Button
                        variant="outline"
                        size="sm"
                        className="border-border/60"
                        onClick={() => window.open(liveLink, "_blank")}
                     >
                        <CodeCircleIcon size={16} className="mr-2" />
                        Source
                     </Button>
                  )}
                  <Button
                     variant="primary"
                     size="sm"
                     className="shadow-lg shadow-primary/20"
                     onClick={() => window.open(liveLink, "_blank")}
                  >
                     {isGithub ? (
                        <>
                           <Github01Icon size={16} className="mr-2" />
                           Repository
                        </>
                     ) : (
                        <>
                           <PlayIcon size={16} className="inline mr-2" strokeWidth={2} />
                           Live
                        </>
                     )}
                  </Button>
               </div>
            </motion.div>
         </section>

         {/* Details */}
         <section className="px-4 flex flex-col gap-12">

            {/* Overview */}
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
               <SectionLabel icon={DashboardSquare01Icon} label="Overview" />
               <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.fullDescription || project.description}
               </p>
            </motion.div>

            {/* Tech Stack */}
            {project.techStack?.length > 0 && (
               <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 }}
               >
                  <SectionLabel icon={CpuIcon} label="Tech Stack" />
                  <div className="flex flex-wrap gap-2">
                     {project.techStack.map((tech, i) => (
                        <span
                           key={i}
                           className="px-3 py-1.5 text-xs font-medium rounded-full border border-border/60 bg-secondary/20 text-foreground/80 tracking-wide"
                        >
                           {tech}
                        </span>
                     ))}
                  </div>
               </motion.div>
            )}

            {/* Features */}
            {project.features && (
               <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
               >
                  <SectionLabel icon={CheckListIcon} label="Features" />
                  <div className="flex flex-col gap-3">
                     {project.features.map((feature, i) => {
                        const colonIdx = feature.indexOf(':');
                        const title = colonIdx !== -1 ? feature.slice(0, colonIdx).trim() : feature;
                        const desc = colonIdx !== -1 ? feature.slice(colonIdx + 1).trim() : '';

                        return (
                           <div
                              key={i}
                              className="flex gap-4 p-2 px-4 rounded-lg border border-border/50 bg-secondary/50 hover:bg-secondary/20 transition-colors"
                           >
                              <span className="shrink-0 w-4 h-4 flex bg-primary/20 items-center justify-center rounded-full border border-border/60 text-xs font-mono text-white mt-2">
                                 {String(i + 1).padStart(2, '0')}
                              </span>
                              <div className="flex flex-col gap-0.5">
                                 <span className="text-sm font-semibold text-foreground">{title}</span>
                                 {desc && (
                                    <span className="text-xs text-muted-foreground leading-relaxed">{desc}</span>
                                 )}
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </motion.div>
            )}

         </section>
      </main>
   );
};

export default ProjectDetail;