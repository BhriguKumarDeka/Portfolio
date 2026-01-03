// import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Skills from '../components/Skills.jsx'
import Project from '../components/Project.jsx'
import Experience from '../components/Experience.jsx';

export default function Portfolio() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <hr className='bg-gray-700 max-w-4xl mx-auto h-[1.5px]'/>
      <Project/>  
      <hr className='bg-gray-700 max-w-4xl mx-auto h-[1.5px]'/>
      <Experience/>
      <hr className='bg-gray-700 max-w-4xl mx-auto h-[1.5px]'/>
      <Skills />
      
      <footer className="py-8 border-t border-slate-900 text-center text-slate-500 text-sm">
        <p>© 2025 All rights reserved.</p>
      </footer>
    </div>
  );
}