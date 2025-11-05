import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";

export default function Project (){
  const projects = [
    {
      title: 'Orders',
      description: 'A unified platform to calm the cluttered and decentralized system of e-commerce platforms. Seamlessly manage orders and return windows from multiple brands in one place.',
      tags: ['Figma', 'Balsamiq', 'Miro', 'Prototyping', 'Gen AI'],
      link: 'https://www.figma.com/proto/0Ym2EXSxhoravrc2XL7vYM/Orders?page-id=350%3A8003&node-id=350-8004&viewport=133%2C292%2C0.3&t=Oj4hKskcTb7VC5kl-1&scaling=contain&content-scaling=fixed',
      year: '2025',
      image: '/images/projects/HeroImageOrders.png',
    },
    {
      title: 'Flow by Spotify',
      description: 'A mobile app that focused on productivity and mental well-being by integrating music and task management. Designed to help users maintain life.',
      tags: ['Figma', 'Design Thinking', 'User-Research', 'Adobe Photoshop'],
      link: 'https://www.figma.com/proto/oVU35kRPdNWYNAR7iFUDvm/Flow?page-id=0%3A1&node-id=46-119&viewport=152%2C77%2C0.34&t=XldlV1rAlDgYm9er-1&scaling=scale-down-width&content-scaling=fixed',
      year: '2025',
      image: '/images/projects/HeroImageFlow.png',
    },
    {
      title: 'Archon',
      description: 'SIH project. A RAG platform that leverages AI to provide accurate and contextually relevant answers from policies and amendments, enhancing productivity and information retrieval.',
      tags: ['SIH','Figma', 'UI Design', 'Prototyping', 'User Research'],
      link: 'https://www.figma.com/proto/GGStlrHc9eBRQHqR5lxvKz/SIH?page-id=2%3A11&node-id=70-118&viewport=1270%2C-514%2C0.2&t=d3bRQRokhmUtkRay-1&scaling=contain&content-scaling=fixed',
      year: '2025',
      image: '/images/projects/HeroImageArchon.png',
    },
    {
      title: 'NyaySaathi',
      description: 'An AI based platform to provide legal help and knowledge to the general public, empowering citizens for better access to justice.',
      tags: ['Figma', 'UI Design', 'Prototyping', 'User Research'],
      link: 'https://www.figma.com/proto/NaFzrjQb1OIvc0roDdvEcQ/NyaySaathi?page-id=0%3A1&node-id=213-50&viewport=-257%2C-263%2C0.22&t=jKeLC5t3A7XsTSa2-1&scaling=min-zoom&content-scaling=fixed',
      year: '2025',
      image: '/images/projects/HeroImageNyaySaathi.png',
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 sm:mb-12 pl-4 sm:pl-14">
            My Creations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};