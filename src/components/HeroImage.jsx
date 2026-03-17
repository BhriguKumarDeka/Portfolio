import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function HeroImage({ src, videoSrc, alt }) {
  const [isActive, setIsActive] = useState(true); // Start with video (Front)
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const videoRef = useRef(null);

  // Autoplay video once on mount
  useEffect(() => {
    if (videoRef.current && !hasAutoPlayed) {
      setHasAutoPlayed(true);
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        setIsActive(false);
      });
    }
  }, [hasAutoPlayed]);

  // Handle video end - switch to image (Back)
  useEffect(() => {
    const handleVideoEnd = () => {
      setIsActive(false);
      setTimeout(() => {
        if (videoRef.current) videoRef.current.currentTime = 0;
      }, 600);
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("ended", handleVideoEnd);
      return () => {
        videoRef.current?.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, []);

  const handleMouseEnter = () => {
    if (videoRef.current && !isActive) {
      setIsActive(true);
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      setIsActive(false);
      videoRef.current.pause();
    }
  };

  const handleTouch = () => {
    if (videoRef.current && !isActive) {
      setIsActive(true);
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div
      className="relative w-full h-full cursor-pointer select-none perspective-[1000px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouch}
    >
      <motion.div
        className="relative w-full h-full transform-3d"
        animate={{ rotateY: isActive ? 0 : 180 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Front Side: Video */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{ transform: "rotateY(0deg)" }}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Back Side: Image */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}