import { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Palette
} from 'lucide-react';
import DesignSystem from './DesignSystem';

export default function FloatingNav() {
  const [showDesignSystem, setShowDesignSystem] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    // Get the hero section
    const heroSection = document.querySelector('section');
    if (!heroSection) return;

    // Create intersection observer to detect when hero is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInHero(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroSection);
    return () => observer.unobserve(heroSection);
  }, []);

  const socialLinks = [
    { id: 'github', icon: Github, label: 'GitHub', href: 'https://github.com/BhriguKumarDeka' },
    { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/bhrigukumardeka/' },
    { id: 'mail', icon: Mail, label: 'Email', href: 'mailto:vrigukumar710@gmail.com' },
    { id: 'cal', icon: Phone, label: 'Cal.com', href: 'https://cal.com/bhrigu-kumar-deka-ssmyad/30min' },
  ];

  return (
    <>
      {!isInHero && (
        <div className="fixed bottom-4 sm:bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 sm:px-6">
          <div
            className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-5 py-3 sm:py-3 mx-auto 
                       bg-slate-900/40  
                       backdrop-blur-xl rounded-full 
                       shadow-lg shadow-black/20 pointer-events-auto">
            {socialLinks.map((link) => (
              <NavItem key={link.id} link={link} />
            ))}

            {/* Separator */}
            <div className="w-px h-8 bg-slate-700 mx-1 sm:mx-1.5" />

            {/* Design System Button */}
            <button
              onClick={() => setShowDesignSystem(true)}
              className="relative flex items-center justify-center w-11 h-11 sm:w-10 sm:h-10 rounded-full 
                         bg-slate-800/50 border border-slate-700/50 text-slate-300 
                         hover:bg-slate-800 hover:border-lime-500/50 hover:text-lime-400
                         active:scale-95
                         transition-all duration-150 group"
              title="View Design System"
              aria-label="Open Design System"
            >
              <Palette size={20} className="sm:w-[18px] sm:h-[18px]" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}

      <DesignSystem isOpen={showDesignSystem} onClose={() => setShowDesignSystem(false)} />
    </>
  );
}

function NavItem({ link }) {
  const Icon = link.icon;

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center w-11 h-11 sm:w-10 sm:h-10 rounded-full 
                 bg-slate-800/50 border border-slate-700/50 text-slate-300 
                 hover:bg-slate-800 hover:border-lime-500/50 hover:text-lime-400
                 active:scale-95
                 transition-all duration-150"
      aria-label={link.label}
      title={link.label}
    >
      <Icon size={20} className="sm:w-[18px] sm:h-[18px]" strokeWidth={1.5} />
    </a>
  );
}