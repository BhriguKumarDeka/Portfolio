import { useState, useRef, useEffect } from "react";

export default function HeroImage({ src, videoSrc, alt }) {
  const [isActive, setIsActive] = useState(true); // Start with video
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const videoRef = useRef(null);

  // Autoplay video once on mount
  useEffect(() => {
    if (videoRef.current && !hasAutoPlayed) {
      setHasAutoPlayed(true);
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [hasAutoPlayed]);

  // Handle video end - switch to image
  useEffect(() => {
    const handleVideoEnd = () => {
      setIsActive(false);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
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
      videoRef.current.currentTime = 0;
    }
  };

  // For mobile/touch devices
  const handleTouch = () => {
    if (videoRef.current && !isActive) {
      setIsActive(true);
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div
      className="relative w-24 h-24 rounded-full overflow-hidden cursor-pointer select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouch}
    >
      {/* Default Image */}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100"
          }`}
      />

      {/* Autoplay/Hover/Tap Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"
          }`}
      />
    </div>
  );
}

