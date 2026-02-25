import { useState } from 'react';
import { motion } from 'motion/react';
import { Location01Icon, Call02Icon, ViewIcon, CheckmarkBadge01Icon } from 'hugeicons-react';
import { Dithering } from '@paper-design/shaders-react';
import HeroImage from "./HeroImage.jsx";
import { Typography } from './ui/Typography';
import { Button } from './ui/Button';
import CVModal from './CVModal';

export default function Hero({ data }) {
  const [showCV, setShowCV] = useState(false);
  if (!data) return null;

  return (
    <section className="relative w-full">

      <div className="absolute top-40 right-4 z-20 flex items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <Location01Icon size={13} className="text-foreground" />
          <Typography variant="small" className="font-medium tracking-wide text-foreground">India</Typography>
        </div>
      </div>

      {/* Background Layer */}
      <div className="h-36 w-full relative overflow-hidden isolate">
        <div className="absolute inset-0 z-0 opacity-100">
          <Dithering
            width="800"
            height="150"
            colorBack="#f7f7f7"
            colorFront="#09090b"
            shape="wave"
            type="2x2"
            size={2}
            speed={1}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 pb-12 max-w-4xl mx-auto">
        <div className="flex flex-col items-start gap-8 relative z-10">

          {/* Identity Zone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="-mt-14 sm:-mt-16 rounded-2xl shadow-lg shadow-black/5"
          >
            <div className="w-28 h-28 overflow-hidden rounded-2xl bg-muted relative">
              <HeroImage
                src={data.profileImage}
                videoSrc={data.profileVideo}
                alt={data.name}
              />
            </div>
          </motion.div>

          {/* Content Zone */}
          <div className="flex flex-col gap-4 w-full max-w-2xl">
            <div className="flex flex-col gap-2">
              <Typography variant="h1" className="text-foreground tracking-tight flex items-center gap-2">
                {data.name}
                <CheckmarkBadge01Icon size={24} fill="foreground" className="text-background" stroke="background" strokeWidth={1.5} />
              </Typography>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Typography variant="h4" as="span" className="font-medium text-primary/90">
                  {data.roles.join("  /  ")}
                </Typography>
              </div>
            </div>

            <div className="opacity-80 bg-secondary/40 p-2 rounded-md inset-shadow-sm">
              {data.description.map((para, i) => (
                <Typography
                  key={i}
                  variant="body"
                  className="text-muted-foreground"
                >
                  {para}
                </Typography>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Button
                variant="primary"
                size="sm"
                icon={Call02Icon}
                onClick={() => window.open("https://cal.com/bhrigu-kumar-deka-ssmyad/30min", "_blank")}
                className="shadow-sm"
              >
                Book a call
              </Button>

              <Button
                variant="secondary"
                size="sm"
                icon={ViewIcon}
                onClick={() => setShowCV(true)}
              >
                View CV
              </Button>

              <CVModal
                isOpen={showCV}
                onClose={() => setShowCV(false)}
                cvUrl={data.cvLink}
              />

              <div className="h-5 w-px bg-border/60 mx-2 hidden sm:block" />

              <div className="flex items-center gap-2">
                {data.socials.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name || idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group relative p-2 rounded-md 
                        bg-foreground/5 
                        text-muted-foreground/80 
                        hover:bg-foreground/10 hover:text-foreground
                        transition-colors
                        flex items-center justify-center
                      "
                      title={social.name}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={16} strokeWidth={1.5} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}