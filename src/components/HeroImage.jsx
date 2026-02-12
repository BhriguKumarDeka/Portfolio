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
      videoRef.current.play().catch(() => {
        // Handle potential autoplay blocks quietly
        setIsActive(false);
      });
    }
  }, [hasAutoPlayed]);

  // Handle video end - switch to image
  useEffect(() => {
    const handleVideoEnd = () => {
      setIsActive(false);
      // We don't reset currentTime immediately here to avoid a "rewind" flash
      // We let the fade-out happen first
      setTimeout(() => {
         if(videoRef.current) videoRef.current.currentTime = 0;
      }, 300); // Match transition duration
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
      // Reset time after fade allows for smoother exit
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
      className="relative w-full h-full overflow-hidden cursor-pointer select-none bg-muted"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouch}
    >
      {/* FIX: Removed dynamic opacity class. 
         The image now stays visible 100% of the time. 
         The video sits on top of it.
      */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Autoplay/Hover/Tap Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}