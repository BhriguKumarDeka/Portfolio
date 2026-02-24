import { motion } from 'motion/react';

const SignatureLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-background"
    >
      <div className="w-[min(72vw,340px)]">
        <svg
          viewBox="0 0 761 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          {/* Main signature stroke — left to right, single continuous flow */}
          <motion.path
            d="M1.00024 358.881C178 28.8477 263 -73.6194 219.5 54.3806C184.7 156.781 153.334 183.348 147.5 192.848C169.5 160.515 237.936 110.073 251 134C269 166.968 197.5 257.5 107.5 259.5C107.5 259.5 155.5 262 205.177 221.5C254.853 181 306.177 70.9771 306.177 70.9771L256 228C264.5 204 309.692 141.929 304.5 172C292.5 241.5 326.5 190.5 337.5 157C343.645 138.286 340.951 181 333.5 201C346.5 171.5 361 141.5 373 151C376.615 153.862 378.5 153.5 391.5 151C401.32 149.112 366 202.848 393.5 188C421 173.153 422.5 133.5 447 144C460.015 149.578 422.877 126.264 419 166C417 186.5 440 158.5 455 146C447.834 185.334 414.6 298.9 399 316.5C379.5 338.5 362.5 286 406 236.5C449.5 187 494.244 115.311 485 138C474 165 479.5 170 489 166C505.647 158.991 520.976 112.073 515.5 132.5C502.5 181 557 138 759.5 132.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { type: 'tween', duration: 3, ease: [0.25, 0.1, 0.25, 1] },
              opacity: { duration: 0.3 },
            }}
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="text-foreground"
          />

          {/* Small flourish detail — appears right after the main stroke */}
          <motion.path
            d="M397.337 141C389.837 144 397.837 146.5 394.337 141"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { type: 'tween', duration: 0.4, ease: 'easeOut', delay: 2.8 },
              opacity: { duration: 0.2, delay: 2.8 },
            }}
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="text-foreground"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default SignatureLoader;
