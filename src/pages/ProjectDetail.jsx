import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import {
   Github01Icon,
   Calendar01Icon,
   Folder01Icon,
   CpuIcon,
   CheckListIcon,
   DashboardSquare01Icon,
   PlayIcon,
   CodeCircleIcon
} from 'hugeicons-react';
import { Typography } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';

const SectionDivider = ({ label }) => (
   <div className="w-full relative h-px flex items-center justify-center my-16 opacity-40">
      <div className="absolute w-full border-t border-dashed border-border pointer-events-none" />
      {label && (
         <div className="relative z-10 bg-background px-3 py-1 border border-border rounded-full text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
            {label}
         </div>
      )}
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
            <Typography variant="h2" className="mb-4">ERR_404: PROJECT_MISSING</Typography>
            <Button onClick={() => navigate('/projects')}>RETURN_TO_BASE</Button>
         </div>
      );
   }

   const isDimlightOrWishgrid = project.slug === 'dimlight' || project.slug === 'wishgrid';
   const isUIDesign = project.category === 'UI Projects' || project.category === 'Case Studies';
   const hasVideo = project.videoUrl && isDimlightOrWishgrid;
   const hasFigma = project.figmaUrl && isUIDesign;
   const liveLink = project.link || "#";
   const isGithub = liveLink.includes("github");

   // Helper for Embeds
   const getEmbedUrl = (url) => {
      if (!url) return '';
      if (url.includes('youtu.be/')) return `https://www.youtube.com/embed/${url.split('youtu.be/')[1].split('?')[0]}`;
      if (url.includes('youtube.com/watch?v=')) return `https://www.youtube.com/embed/${url.split('v=')[1].split('&')[0]}`;
      return url;
   };

   return (
      <main className="pt-4 pb-32">

         {/* Header & Meta */}
         <section className="px-4 mb-8">

            <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="flex flex-col gap-4"
            >
               <Typography variant="h1" className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  {project.title}
               </Typography>

            </motion.div>
         </section>


         <section className="px-4 mb-12">
            <motion.div
               initial={{ opacity: 0, scale: 0.98, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
               className="rounded-xl border border-border bg-background shadow-2xl overflow-hidden"
            >
               {/* Media Display */}
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

                  {/* Screen Glare Overlay */}
                  <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none" />
               </div>

               {/* Controls */}
               <div className="border-t border-border bg-secondary/10 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Left: Status */}
                  <div className="hidden sm:flex items-center gap-3">
                     <div className="flex flex-col">
                        <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider">Access Protocol</span>
                        <span className="text-xs font-bold text-foreground">PUBLIC_READ</span>
                     </div>
                  </div>

                  {/* Right: Primary Actions */}
                  <div className="flex w-full sm:w-auto items-center gap-3">
                     {/* Secondary Button */}
                     {isGithub && (
                        <Button
                           variant="outline"
                           size="sm"
                           className="flex-1 sm:flex-none border-border/60"
                           onClick={() => window.open(liveLink, "_blank")}
                        >
                           <CodeCircleIcon size={16} className="mr-2" />
                           Src
                        </Button>
                     )}

                     {/* Primary Launch Button */}
                     <Button
                        variant="primary"
                        size="sm"
                        className="flex-1 sm:flex-none w-30 shadow-lg shadow-primary/20"
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
                              View
                           </>
                        )}
                     </Button>
                  </div>
               </div>
            </motion.div>
         </section>


         {/* Project Details */}
         <section className="px-4 flex flex-col gap-10">

            {/* BLOCK A: Mission Brief (Overview) */}
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="relative group"
            >
               <div className="flex items-center gap-2 mb-3">
                  <DashboardSquare01Icon size={18} className="text-primary" />
                  <Typography variant="h3" className="text-lg font-semibold tracking-tight">Mission Brief</Typography>
               </div>

               <div className="bg-secondary/30 border border-border/50 rounded-lg p-6 md:p-8 inset-shadow-sm relative overflow-hidden">
                  {/* Decorative Corner Marker */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-lg" />

                  <Typography variant="body" className="text-muted-foreground leading-relaxed relative z-10">
                     {project.fullDescription || project.description}
                  </Typography>
               </div>
            </motion.div>


            {/* BLOCK B: System Architecture (Tech Stack) */}
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.1 }}
            >
               <div className="flex items-center gap-2 mb-4">
                  <CpuIcon size={18} className="text-primary" />
                  <Typography variant="h3" className="text-lg font-semibold tracking-tight">System Architecture</Typography>
               </div>

               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {project.techStack?.map((tech, i) => (
                     <div
                        key={i}
                        className="
                       flex items-center gap-2 px-3 py-2.5 rounded-md
                       bg-background border border-border/60
                       hover:border-primary/40 hover:bg-secondary/10 transition-colors
                    "
                     >
                        <div className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full" />
                        <span className="text-xs font-mono font-medium text-foreground/80">{tech}</span>
                     </div>
                  ))}
               </div>
            </motion.div>


            <SectionDivider label="OPERATIONAL LOG" />


            {/* Features */}
            {project.features && (
               <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
               >
                  <div className="flex items-center gap-2 mb-6">
                     <CheckListIcon size={18} className="text-primary" />
                     <Typography variant="h3" className="text-lg font-semibold tracking-tight">Core Capabilities</Typography>
                  </div>

                  <div className="pl-3 relative space-y-8">
                     {/* Continuous Timeline Line */}
                     <div className="absolute left-[5.5px] top-2 bottom-0 w-px bg-gradient-to-b from-border via-border to-transparent" />

                     {project.features.map((feature, i) => {
                        const [title, ...rest] = feature.split(':');
                        const desc = rest.join(':');

                        return (
                           <div key={i} className="relative pl-8 group">
                              {/* Node Indicator */}
                              <div className="absolute left-0 top-1.5 w-[12px] h-[12px] bg-background border border-border rounded-sm rotate-45 group-hover:border-primary group-hover:bg-primary transition-all duration-300 z-10 shadow-sm">
                                 <div className="absolute inset-[3px] bg-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[1px]" />
                              </div>

                              <div className="flex flex-col gap-1">
                                 <Typography variant="body" className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                                    {title}
                                 </Typography>
                                 {desc && (
                                    <Typography variant="small" className="text-muted-foreground/80 leading-relaxed text-xs">
                                       {desc}
                                    </Typography>
                                 )}
                              </div>
                           </div>
                        )
                     })}
                  </div>
               </motion.div>
            )}


            {/* Footer Diagnostics */}
            <div className="mt-8 pt-8 border-t border-dashed border-border/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 opacity-60">
               <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">Render ID</span>
                  <span className="text-[10px] font-mono text-foreground">{Math.random().toString(36).substring(7).toUpperCase()}</span>
               </div>
               <div className="flex flex-col gap-1 sm:text-right">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">System Status</span>
                  <span className="text-[10px] font-mono text-emerald-500">OPERATIONAL // STABLE</span>
               </div>
            </div>

         </section>
      </main>
   );
};

export default ProjectDetail;