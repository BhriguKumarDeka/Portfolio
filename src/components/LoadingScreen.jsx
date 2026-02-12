import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-background"
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Avatar Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
          }}
          className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-primary/10 shadow-2xl"
        >
          <motion.img
            src={portfolioData.hero.profileImage}
            alt="Loading..."
            className="w-full h-full object-cover"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Loading Indicator */}
        <div className="flex gap-1.5 align-center justify-center h-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 bg-primary/40 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
