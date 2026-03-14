import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Tooltip({ children, content, side = "top", className = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && content && (
          <motion.div
            initial={{ opacity: 0, y: side === "top" ? 10 : -10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: side === "top" ? 10 : -10, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20
            }}
            className={`absolute z-100 whitespace-nowrap px-3 py-1.5 text-xs font-medium text-background bg-foreground rounded-full shadow-xl pointer-events-none 
              ${side === "top" ? "bottom-full mb-2" : "top-full mt-2"}`}
          >
            {content}
            <div className={`absolute left-1/2 -translate-x-1/2 border-[5px] border-transparent 
              ${side === "top" ? "top-full border-t-foreground" : "bottom-full border-b-foreground"}`} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
