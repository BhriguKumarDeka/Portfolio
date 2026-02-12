import React, { useMemo } from 'react';
import { Typography } from './ui/Typography';

const ScreenDisplay = () => {
  // Memoize data to prevent unnecessary recalculations
  const { columns2, columns3 } = useMemo(() => {
    const uiImages = Array.from({ length: 19 }, (_, i) => `/images/UI/UI${i + 1}.png`);

    // Logic for Desktop (3 Columns)
    const col3_1 = uiImages.filter((_, i) => i % 3 === 0);
    const col3_2 = uiImages.filter((_, i) => i % 3 === 1);
    const col3_3 = uiImages.filter((_, i) => i % 3 === 2);

    // Logic for Mobile (2 Columns)
    const col2_1 = uiImages.filter((_, i) => i % 2 === 0);
    const col2_2 = uiImages.filter((_, i) => i % 2 === 1);

    return {
      columns3: [
        [...col3_1, ...col3_1],
        [...col3_2, ...col3_2],
        [...col3_3, ...col3_3]
      ],
      columns2: [
        [...col2_1, ...col2_1],
        [...col2_2, ...col2_2]
      ]
    };
  }, []);

  const dur3 = ['45s', '50s', '40s']; // Speeds for 3 cols
  const dur2 = ['40s', '48s'];        // Speeds for 2 cols

  // Reusable Marquee Column Component to keep code clean
  const MarqueeColumn = ({ images, duration, delay }) => (
    <div className="flex-1 relative overflow-hidden">
      <div
        className="vertical-marquee"
        style={{
          '--animation-duration': duration,
          animationDelay: delay
        }}
      >
        {images.map((imageSrc, idx) => (
          <div key={idx} className="mb-2 group cursor-pointer">
            <div className="relative rounded-lg overflow-hidden border border-secondary transition-all duration-300 hover:border-primary/50">
              <img
                src={imageSrc}
                alt="UI Design"
                loading="eager"
                className="w-full h-auto object-cover aspect-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="w-full py-6 px-4">
      <div className="flex items-baseline justify-between mb-4 pb-2">
        <Typography variant="h3">Gallery</Typography>
      </div>

      {/* Vertical Marquee Container */}
      <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden mask-gradient-vertical">

        {/* --- MOBILE LAYOUT (2 Columns) --- */}
        {/* Visible on small screens, hidden on md+ */}
        <div className="flex md:hidden gap-2 h-full max-w-3xl mx-auto">
          {columns2.map((colImages, i) => (
            <MarqueeColumn
              key={`mob-${i}`}
              images={colImages}
              duration={dur2[i]}
              delay={`-${i * 3}s`}
            />
          ))}
        </div>

        {/* --- DESKTOP LAYOUT (3 Columns) --- */}
        {/* Hidden on small screens, visible on md+ */}
        <div className="hidden md:flex gap-2 h-full max-w-3xl mx-auto">
          {columns3.map((colImages, i) => (
            <MarqueeColumn
              key={`desk-${i}`}
              images={colImages}
              duration={dur3[i]}
              delay={`-${i * 5}s`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ScreenDisplay;