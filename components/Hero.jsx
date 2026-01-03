import { SocialButton } from "./SocialButton";
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, Mail, Twitter, Download } from 'lucide-react';
import HeroImage from "../components/HeroImage.jsx";


export default function Hero() {
  return (
    <section className="min-h-[85vh] bg-black text-white flex items-center justify-center px-6 pt-20 relative">
      <div className="max-w-2xl relative">
        {/* Floating gradient orb */}
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-start gap-6 mb-8"
        >

          <motion.div
            className="w-24 h-24 rounded-full shrink-0 border-2 border-slate-800 relative flex items-center justify-center bg-slate-900 cursor-pointer shadow-lg shadow-slate-900/50"
            whileHover={{ scale: 1.05, borderColor: "rgb(71, 85, 105)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <HeroImage
              src="/images/profile/profileHi.png"
              videoSrc="/videos/profile-hover.mp4"
              alt="Profile"
            />
            <motion.p
              className="absolute -top-6 -left-6 md:-top-8 md:-left-12 sm:text-xl md:text-2xl text-gray-300 -rotate-15 font-hand"
              animate={{ rotate: [-15, -12, -15] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Give a High Five
            </motion.p>
          </motion.div>

          <div>
            <motion.h1
              className="text-3xl font-bold mb-2 tracking-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              BHRIGU <span className="text-sm md:text-2xl font-light text-gray-400">( vreé-goo )</span><br />
              KUMAR DEKA
            </motion.h1>

            <motion.p
              className="relative inline-block bg-linear-to-r from-slate-500 via-lime-400 to-slate-500 bg-size-[200%_100%] text-transparent bg-clip-text animate-shimmer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              UI UX Designer & Frontend Developer
            </motion.p>

          </div>
        </motion.div>

        <motion.div
          className="space-y-4 text-slate-300 leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm font-light">
            I'm Bhrigu, aka Dexter, a Designer and Developer dedicated to crafting engaging digital experiences. Visual aesthetics are always interesting to me. The bridge between creativity and functionality is something I care about and dream to master.
          </p>
          <p className="text-sm font-light">
            Started as an Digital Artist, ventured into Graphic Design, and finally found my passion in UI/UX Design and Frontend Development. I love bringing ideas to life through thoughtful design and clean code.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-all bg-gradient-to-r from-slate-900/50 to-slate-800/50 border border-slate-800/50 backdrop-blur-sm"
            whileHover={{ scale: 1.02, borderColor: "rgb(100, 116, 139)" }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="w-2 h-2 bg-lime-500 rounded-full animate-pulse shadow-lg shadow-lime-500/50" />
            Itching Creativity
          </motion.button>
          <a href="https://drive.google.com/file/d/1tortAgQQDzzpAskSDFhUt3wYgSdlyq6P/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="px-4 py-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-lg flex items-center gap-2 text-sm transition-all cursor-pointer backdrop-blur-sm shadow-lg shadow-slate-900/30"
              whileHover={{ scale: 1.02, y: -2, borderColor: "rgb(100, 116, 139)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" />
              View CV
            </motion.button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <p className="text-slate-500 mb-4 text-sm font-medium">
            Socials
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:vrigukumar710@email.com"><SocialButton icon={<Mail className="w-4 h-4" />} label="Email" /></a>
            <a href="https://github.com/BhriguKumarDeka"><SocialButton icon={<Github className="w-4 h-4" />} label="GitHub" /></a>
            <a href="https://www.linkedin.com/in/bhrigukumardeka/"><SocialButton icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
