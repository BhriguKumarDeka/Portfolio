import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Typography } from './ui/Typography';
import { Button } from './ui/Button';
import { playgroundData } from '../data/playgroundData';

const VideoCard = ({ src, className }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className={`rounded-2xl overflow-hidden bg-secondary/5 border border-border/40 relative group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover transition-opacity duration-300"
        src={`${src}#t=1.5`}
      />
    </div>
  );
};

export default function PlaygroundPreview() {
  const animationsPreview = playgroundData.figma[0];
  const threeDPreview = playgroundData.threeD[0];

  return (
    <section className="px-4 py-12 relative overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <Typography variant="h3">Playground</Typography>
      </div>

      {/* 2 Column Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* --- Figma Animation Video --- */}
        <VideoCard
          src={animationsPreview.src}
          className="aspect-video"
        />

        {/* --- 3D Video --- */}
        <VideoCard
          src={threeDPreview?.src}
          className="aspect-video"
        />
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-12">
        <Link to="/playground">
          <Button variant="secondary" size="sm">
            Enter Playground
          </Button>
        </Link>
      </div>
    </section>
  );
}