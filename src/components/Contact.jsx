import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar01Icon, Coffee01Icon, Mail01Icon } from 'hugeicons-react';
import { Dithering } from '@paper-design/shaders-react';
import { Typography } from './ui/Typography';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [time, setTime] = useState('');

  // Clock for the "Device Screen"
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("vrigukumar710@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="flex justify-center p-4">

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          relative w-full 
          bg-accent
          rounded-lg ring-1 ring-border/80
          p-2 shadow-2xl shadow-black/10
          inset-shadow-sm inset-shadow-accent
        "
      >

        {/* Screen Module */}
        <div className="relative w-full rounded-lg overflow-hidden bg-primary mb-4 ring-1 ring-border shadow-inner isolate">
          <div className="absolute inset-0">
            <Dithering
              width="100%"
              height="100%"
              colorBack="#000000ff"
              colorFront="#636363ff"
              shape="ripple"
              type="2x2"
              size={2}
              speed={2}
            />
          </div>

          <div className="relative z-20 h-full w-full p-5 flex flex-col justify-between text-white font-mono">
            <div className="flex justify-between items-start text-sm tracking-widest uppercase">
              <span className="text-md font-light tracking-tighter">{time}</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-700 animate-pulse" />
                <span className="text-md font-light tracking-tighter">Hire Me</span>
              </div>
            </div>

            <div className="space-y-2">
              <Typography variant="h3" className="font-mono text-xl tracking-tighter text-white">
                Let's Talk
              </Typography>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[0.15rem] bg-black/80 p-[0.15rem] rounded-md">

          <TactileButton
            onClick={() => window.location.href = 'mailto:vrigukumar710@gmail.com'}
            className="col-span-1 h-32"
            label="Send Mail"
          >
            {/* <Mail size={30} className='text-muted-foreground'/> */}
          </TactileButton>

          <TactileButton
            onClick={() => { }}
            className="col-span-1 h-32"
            label="Cappucino"
          >
            {/* <Coffee size={30} className='text-muted-foreground'/> */}
          </TactileButton>

          <div className="col-span-1 flex flex-col gap-[0.15rem]">
            {/* Secondary Actions */}
            <TactileButton
              onClick={handleCopy}
              className="flex-1"
              label={copied ? "COPIED" : "COPY MAIL"}
            >
            </TactileButton>


            <TactileButton
              onClick={() => window.open('https://cal.com/bhrigu-kumar-deka-ssmyad/30min', '_blank')}
              className="flex-1"
              label="MEETING"
            >
              {/* <Calendar size={18} className='text-muted-foreground'/> */}
            </TactileButton>
          </div>

        </div>

        {/* Branding */}
        <div className="mt-4 flex items-center justify-between px-2 opacity-40">
          <div className="flex gap-1">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-1 h-3 rounded-full bg-muted-foreground/20 border-[0.05rem] border-muted-foreground/20" />
            ))}
          </div>
          <span className="text-[0.8rem] font-light uppercase">BKD</span>
        </div>

      </motion.div>
    </section>
  );
}

function TactileButton({ children, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="
                group relative
                overflow-hidden
                p-4 rounded-sm
                bg-secondary
                inset-shadow-sm
                inset-shadow-accent
                shadow-lg
                active:scale-[0.98]
                transition-all duration-100 ease-out
                flex flex-col items-center justify-center"
    >
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      <div className="absolute opacity-20 bottom-2 left-3 flex flex-col items-start leading-none">
        {label && <span className="text-xs font-light tracking-wider font-mono">{label}</span>}
      </div>

    </button>
  );
}