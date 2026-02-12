import React, { useState, useEffect } from 'react';
import { Typography } from '../ui/Typography';

export default function PercentageLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) {
          clearInterval(interval);
          return 99;
        }
        // Increment by a random amount between 1 and 5
        const increment = Math.floor(Math.random() * 5) + 1;
        return Math.min(prev + increment, 99);
      });
    }, 50); // Update every 50ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-32 flex flex-col items-center justify-center gap-4 opacity-60">
      <div className="relative flex items-center justify-center">
        {/* Spinner ring */}
        <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />

        {/* Percentage text */}
        <Typography
          variant="h4"
          className="font-mono text-lg font-bold tabular-nums tracking-widest"
        >
          {progress}%
        </Typography>
      </div>

      <Typography variant="small" className="text-xs text-muted-foreground font-mono animate-pulse">
        INITIALIZING PLAYGROUND...
      </Typography>
    </div>
  );
}
