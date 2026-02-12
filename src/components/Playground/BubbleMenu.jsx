import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const items = [
  { label: 'Figma', id: 'figma', color: '#FF453A', initial: 'F' },      // Red-Orange
  { label: 'Animations', id: 'animations', color: '#BF5AF2', initial: 'A' }, // Electric Purple
  { label: '3D Arts', id: '3d', color: '#0A84FF', initial: '3D' },            // Vivid Azure
  { label: 'Posters', id: 'posters', color: '#FF375F', initial: 'P' },   // Hot Pink/Magenta
  { label: 'Spotify', id: 'spotify', color: '#30D158', initial: 'S' },   // Neon Green
  { label: 'Characters', id: 'characters', color: '#FF5C0A', initial: 'C' }, // Marigold Yellow
  { label: 'Extras', id: 'extras', color: '#64D2FF', initial: 'E' },     // Icy Cyan
];

const MenuItem = ({ item, isActive, onClick, onHover, onLeave }) => {
  return (
    <motion.button
      layout
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={false}
      animate={{
        backgroundColor: isActive ? item.color : 'rgba(255,255,255,0.01)',
        borderColor: isActive ? item.color : 'rgba(128,128,128,0.5)',
        color: isActive ? 'white' : 'var(--color-muted-background)',
        minWidth: isActive ? '100px' : '48px',
      }}
      whileTap={{ scale: 0.92 }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 30,
      }}
      className={`
        relative h-8 flex items-center justify-center rounded-full 
        border cursor-pointer px-1
      `}
    >
      {/* Content Layer */}
      <div className="flex items-center justify-center relative z-10 px-4">
        <motion.span
          layout="position"
          className="shrink-0 font-bold text-base"
        >
          {item.initial}
        </motion.span>

        <AnimatePresence mode="popLayout">
          {isActive && (
            <motion.span
              key="label"
              initial={{ opacity: 0, x: -5, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -2, filter: "blur(2px)" }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 30
              }}
              // Removed 'ml-1' so it sits flush against the initial
              className="font-bold whitespace-nowrap overflow-hidden"
            >
              {item.label.substring(item.initial.length)}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Active Glow (Optional interior tint) */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 rounded-full z-[-1]"
          style={{
            boxShadow: `inset 0 0 15px ${item.color}`,
          }}
        />
      )}
    </motion.button>
  );
};

const BubbleMenu = ({ activeSection }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const scrollContainerRef = React.useRef(null);

  // Auto-scroll active item into view
  React.useEffect(() => {
    if (activeSection && scrollContainerRef.current) {
      const activeButton = scrollContainerRef.current.querySelector(`[data-id="${activeSection}"]`);
      if (activeButton) {
        const container = scrollContainerRef.current;
        const buttonRect = activeButton.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Only scroll if the active button is not clearly visible
        const isVisible = (
          buttonRect.left >= containerRect.left &&
          buttonRect.right <= containerRect.right
        );

        if (!isVisible) {
          activeButton.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        }
      }
    }
  }, [activeSection]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 130;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      className="flex flex-nowrap items-center justify-start md:justify-center gap-3 overflow-x-auto no-scrollbar py-2 w-full scroll-smooth"
    >
      {items.map((item) => (
        <div key={item.id} data-id={item.id}>
          <MenuItem
            item={item}
            isActive={activeSection === item.id || hoveredId === item.id}
            onHover={() => setHoveredId(item.id)}
            onLeave={() => setHoveredId(null)}
            onClick={() => scrollToSection(item.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default BubbleMenu;