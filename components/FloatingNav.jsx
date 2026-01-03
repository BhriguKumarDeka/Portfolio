import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Palette
} from 'lucide-react';
import DesignSystem from './DesignSystem';

export default function FloatingNav() {
  const containerRef = useRef(null);
  const [showDesignSystem, setShowDesignSystem] = useState(false);

  const socialLinks = [
    { id: 'github', icon: Github, label: 'GitHub', href: 'https://github.com/BhriguKumarDeka' },
    { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/bhrigukumardeka/' },
    { id: 'mail', icon: Mail, label: 'Email', href: 'mailto:vrigukumar710@gmail.com' },
    { id: 'resume', icon: FileText, label: 'Resume', href: 'https://drive.google.com/file/d/1tortAgQQDzzpAskSDFhUt3wYgSdlyq6P/view?usp=sharing' },
  ];

  useGSAP(() => {
    gsap.fromTo(containerRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', delay: 0.2 }
    );
  }, { scope: containerRef });

  return (
    <>
      <div className="fixed bottom-4 sm:bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 sm:px-6">
        <div
          ref={containerRef}
          className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-5 py-3 sm:py-3 mx-auto 
                     bg-slate-900/40 border border-slate-800 
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

      <DesignSystem isOpen={showDesignSystem} onClose={() => setShowDesignSystem(false)} />
    </>
  );
}

function NavItem({ link }) {
  const ref = useRef(null);
  const textRef = useRef(null);
  const iconRef = useRef(null);
  const Icon = link.icon;

  const { contextSafe } = useGSAP({ scope: ref });

  const handleMouseMove = contextSafe((e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();

    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    gsap.to(ref.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.15,
      ease: "power1.out"
    });

    gsap.to(textRef.current, {
      x: x * 0.1,
      y: y * 0.1,
      opacity: 1,
      yPercent: -120,
      scale: 1,
      duration: 0.15
    });

    gsap.to(iconRef.current, { scale: 1.15, duration: 0.15 });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
    gsap.to(textRef.current, { opacity: 0, yPercent: 0, scale: 0.5, duration: 0.15 });
    gsap.to(iconRef.current, { scale: 1, duration: 0.15 });
  });

  return (
    <div className="relative group">
      <div
        ref={textRef}
        className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none opacity-0 
                   text-[9px] font-medium uppercase tracking-wider text-white 
                   bg-slate-900/90 px-2 py-1 rounded border border-slate-700 backdrop-blur-md whitespace-nowrap"
      >
        {link.label}
      </div>

      <a
        href={link.href}
        target={link.id === 'resume' ? '_blank' : undefined}
        rel={link.id === 'resume' ? 'noopener noreferrer' : undefined}
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex items-center justify-center w-11 h-11 sm:w-10 sm:h-10 rounded-full 
                   bg-slate-800/50 border border-slate-700/50 text-slate-300 
                   hover:bg-slate-800 hover:border-lime-500/50 hover:text-lime-400
                   active:scale-95
                   transition-all duration-150"
        aria-label={link.label}
      >
        <div ref={iconRef} className="relative z-10\">
          <Icon size={20} className="sm:w-[18px] sm:h-[18px]" strokeWidth={1.5} />
        </div>
      </a>
    </div>
  );
}