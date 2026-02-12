import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Skills from '../components/Skills';
import Header from '../components/Header';
import { portfolioData } from '../data/portfolioData';

const SectionDivider = () => (
  <div className="w-full px-4 relative">
    <div className="absolute left-[calc(-50vw+50%)] w-screen border-t border-dashed border-border" />
  </div>
);

import Contact from '../components/Contact';
import PlaygroundPreview from '../components/PlaygroundPreview';
import ScreenDisplay from '../components/ScreenDisplay';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div id="hero" className="relative">
        <Hero data={portfolioData.hero} />
      </div>

      <SectionDivider />

      <div id="screen-display" className="relative">
        <ScreenDisplay />
      </div>

      <SectionDivider />

      <div id="projects" className="relative">
        <Project data={portfolioData.projects} />
      </div>

      <SectionDivider />

      <div id="experience" className="relative">
        <Experience data={portfolioData.experience} />
      </div>

      <SectionDivider />

      <div id="skills" className="relative">
        <Skills data={portfolioData.skills} />
      </div>

      <SectionDivider />

      <div id="playground" className="relative">
        <PlaygroundPreview />
      </div>

      <SectionDivider />

      <div id="contact" className="relative">
        <Contact />
      </div>
    </>
  );
}

