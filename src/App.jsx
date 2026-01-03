// import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Hero from '../components/Hero.jsx'
import Skills from '../components/Skills.jsx'
import Project from '../components/Project.jsx'
import Experience from '../components/Experience.jsx';
import FloatingNav from '../components/FloatingNav.jsx';
import Contact from '../components/Contact.jsx';

export default function Portfolio() {
  return (
    <div className="bg-black min-h-screen">
      <FloatingNav />
      <Hero />
      <hr className='bg-gray-700 max-w-4xl mx-auto h-[1.5px]' />
      <div id="projects">
        <Project />
      </div>
      <hr className='bg-gray-700 max-w-4xl mx-auto h-[1.5px]' />
      <div id="experience">
        <Experience />
      </div>
      <hr className='bg-gray-700 max-w-4xl mx-auto h-[1.5px]' />
      <div id="skills">
        <Skills />
      </div>

      <Contact />

      <footer className="py-8 border-t border-slate-900 text-center text-slate-500 text-sm">
        <p>© 2025 All rights reserved.</p>
      </footer>
    </div>
  );
}