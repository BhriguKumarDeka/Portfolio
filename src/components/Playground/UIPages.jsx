import React from 'react';
import SectionWrapper from './SectionWrapper';

const UIPages = React.memo(({ data }) => {
  return (
    <SectionWrapper title={data.title} description={data.description}>
      <div className="relative w-full overflow-hidden">
        {/* Gradient Fade Left */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />

        {/* Gradient Fade Right */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide py-4 px-4 snap-x snap-mandatory scroll-smooth">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="relative shrink-0 w-64 snap-center group cursor-pointer"
            >
              <div className="relative h-[450px] rounded-lg overflow-hidden bg-card border border-border shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-white/80 text-xs">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
});

export default UIPages;
