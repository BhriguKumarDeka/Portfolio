import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

// --- CONFIG: The "Acid Technical" Palette ---
const PALETTE = {
  acid: '#ccff00',  // High-vis yellow
  hot: '#ff0099',   // Hot pink
  cyan: '#00ffff',  // Cyber cyan
  void: '#111111',  // Deep black
  paper: '#f5f5f5'  // Off-white
};

// --- COMPONENT 1: Kinetic Circular Text (The "Circle Texts" you wanted) ---
const KineticCircle = ({ text, radius = 50, className, speed = 10 }) => (
  <motion.div 
    className={`absolute flex items-center justify-center pointer-events-none ${className}`}
    animate={{ rotate: 360 }}
    transition={{ duration: speed, ease: "linear", repeat: Infinity }}
  >
    <svg viewBox="0 0 200 200" width={radius * 2} height={radius * 2} className="overflow-visible">
      <defs>
        <path id="circlePath" d="M 100, 100 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" />
      </defs>
      <text fontSize="14" fontFamily="monospace" fontWeight="bold" letterSpacing="4" fill="currentColor">
        <textPath href="#circlePath" startOffset="0%">
          {text} • {text} •
        </textPath>
      </text>
    </svg>
  </motion.div>
);

// --- COMPONENT 2: The "Barcode" (Controlled Technical Element) ---
const Barcode = ({ className }) => (
  <div className={`absolute flex flex-col items-center opacity-70 mix-blend-multiply dark:mix-blend-screen pointer-events-none ${className}`}>
    <div className="flex items-end gap-[2px] h-12">
      {[...Array(20)].map((_, i) => (
        <div 
          key={i} 
          className="bg-current" 
          style={{ 
            width: Math.random() > 0.5 ? '4px' : '1px', 
            height: '100%' 
          }} 
        />
      ))}
    </div>
    <span className="text-[9px] font-mono tracking-[0.2em] mt-1">ASSET_REF_00{Math.floor(Math.random() * 99)}</span>
  </div>
);

// --- COMPONENT 3: Draggable "Acid Sticker" ---
// Uses mix-blend-exclusion to ensure it never truly blocks content (it inverts it instead)
const AcidSticker = ({ children, x, y, rotate = 0, className }) => (
  <motion.div
    drag
    dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
    initial={{ opacity: 0, scale: 0.8, rotate: rotate - 10 }}
    whileInView={{ opacity: 1, scale: 1, rotate: rotate }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.1, rotate: rotate + 5, zIndex: 50 }}
    whileTap={{ scale: 0.95 }}
    className={`absolute cursor-grab active:cursor-grabbing backdrop-blur-sm ${className}`}
    style={{ left: x, top: y }}
  >
    {children}
  </motion.div>
);

// --- COMPONENT 4: SVG Shapes ---
const Starburst = ({ color }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-xl">
    <motion.path
      d="M50 0 L60 35 L95 35 L65 55 L75 90 L50 70 L25 90 L35 55 L5 35 L40 35 Z"
      fill={color}
      stroke="black"
      strokeWidth="2"
      initial={{ rotate: 0 }}
      animate={{ rotate: -360 }}
      transition={{ duration: 20, ease: "linear", repeat: Infinity }}
    />
  </svg>
);

// --- MAIN COMPONENT ---
const ScrapbookDecorations = () => {
  // Parallax hook for scroll-based movement
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 45]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-30">
      
      {/* ---------------- CREATIVE ZONE (Chaos & Stickers) ---------------- */}

      {/* 1. HERO BADGE: Giant Rotating Text Ring */}
      <div className="absolute top-[-50px] right-[-40px] md:right-[-100px] opacity-20 dark:opacity-10 pointer-events-none">
        <KineticCircle text="UNBOUNDED CREATIVITY ///" radius={120} speed={25} className="text-foreground" />
      </div>

      {/* 2. ACID STICKER: The "Pop" Element */}
      {/* Hanging off the right side, user can drag it back in */}
      <AcidSticker x="90%" y="280px" rotate={15} className="w-32 h-32 md:w-40 md:h-40 pointer-events-auto">
        <div className="relative w-full h-full group">
          <Starburst color={PALETTE.acid} />
          <div className="absolute inset-0 flex items-center justify-center font-black text-black text-xl rotate-[-15px] group-hover:scale-110 transition-transform">
            
          </div>
        </div>
      </AcidSticker>

      {/* 3. INTERACTIVE BADGE: "Visual Noise" */}
      <AcidSticker x="-5%" y="650px" rotate={-10} className="w-24 h-24 pointer-events-auto hidden md:block">
         <div className="w-full h-full bg-blue-600 rounded-full border-2 border-black flex items-center justify-center overflow-hidden relative">
            {/* Hypnotic Rings */}
            {[...Array(3)].map((_,i) => (
               <div key={i} className="absolute inset-0 border-4 border-white rounded-full" style={{ margin: i * 8 }} />
            ))}
            <span className="relative z-10 text-white font-bold text-xs bg-black px-1">EYE</span>
         </div>
      </AcidSticker>

      {/* 5. FOOTER DECOR: Spinning seal */}
      <div className="absolute bottom-32 -left-4 md:-left-20 text-primary/80">
        <KineticCircle text="MADE WITH LOVE & CODE" radius={60} speed={15} />
        <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-2 h-2 bg-current rounded-full" />
        </div>
      </div>

    </div>
  );
};

export default ScrapbookDecorations;