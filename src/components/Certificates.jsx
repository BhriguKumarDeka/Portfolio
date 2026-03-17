import { motion } from 'motion/react';
import { ArrowUpRight01Icon, Certificate01Icon } from 'hugeicons-react';
import { Typography } from './ui/Typography';

export default function Certificates({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <section className="px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "100px 0px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-baseline justify-between mb-4 pb-2">
          <Typography variant="h3">
            Certificates
          </Typography>
          <Typography variant="small" className="text-muted-foreground">
            Credentials
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px 0px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group flex items-center justify-between
                px-4 py-3.5
                bg-secondary/30 rounded-lg
                ring-1 ring-border/20
                hover:-translate-y-0.5 hover:bg-secondary/50
                transition-all duration-300 ease-out
                cursor-pointer
              "
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300 tracking-tight">
                  {cert.name}
                </span>
                {(cert.provider || cert.year) && (
                  <span className="text-[11px] font-mono text-muted-foreground/50 tracking-wider">
                    {cert.provider}{cert.provider && cert.year && ' · '}{cert.year}
                  </span>
                )}
              </div>
              <Certificate01Icon
                size={14}
                className="text-muted-foreground/40 group-hover:text-foreground/70 transition-colors duration-300 shrink-0 ml-3"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
