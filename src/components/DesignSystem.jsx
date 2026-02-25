import { motion, AnimatePresence } from 'motion/react';
import { Cancel01Icon, PaintBoardIcon, TextIcon, Layout01Icon, PaintBucketIcon, AspectRatioIcon, CircleIcon} from 'hugeicons-react';
import { useEffect, useState } from 'react';
import { Typography } from './ui/Typography';

export default function DesignSystem({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-start justify-center pt-[10vh] px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-xl bg-card/70 backdrop-blur-2xl border border-border/50 rounded-xl shadow-2xl overflow-hidden flex flex-col ring-1 ring-black/5"
            style={{ maxHeight: '80vh' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 shrink-0">
              <Typography variant="h3" className="font-semi flex items-center gap-2 m-0 text-base">
                <PaintBoardIcon className="text-primary" size={20}/>
                Design System
              </Typography>
              <button
                onClick={onClose}
                className="p-1 hover:bg-muted/50 rounded-md text-muted-foreground transition-colors cursor-pointer"
              >
                <Cancel01Icon size={16} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-4 command-scrollbar">

              {/* Color Palette */}
              <Section icon={PaintBucketIcon} title="Colors">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <ColorVariable name="--color-background" label="Background" />
                  <ColorVariable name="--color-foreground" label="Foreground" />
                  <ColorVariable name="--color-card" label="Card" />
                  <ColorVariable name="--color-primary" label="Primary" />
                  <ColorVariable name="--color-secondary" label="Secondary" />
                  <ColorVariable name="--color-muted" label="Muted" />
                  <ColorVariable name="--color-accent" label="Accent" />
                  <ColorVariable name="--color-border" label="Border" />
                </div>
              </Section>

              {/* Typography */}
              <Section icon={TextIcon} title="Typography">
                <div className="space-y-4">
                  <TypeVariable className="text-(length:--text-xs)" name="--text-xs" />
                  <TypeVariable className="text-(length:--text-sm)" name="--text-sm" />
                  <TypeVariable className="text-(length:--text-base)" name="--text-base" />
                  <TypeVariable className="text-(length:--text-lg)" name="--text-lg" />
                  <TypeVariable className="text-(length:--text-xl)" name="--text-xl" />
                  <TypeVariable className="text-(length:--text-2xl)" name="--text-2xl" />
                </div>
              </Section>

              {/* Spacing */}
              <Section icon={AspectRatioIcon} title="Golden Ratio Spacing">
                <div className="space-y-2">
                  <SpacingVariable name="--spacing-1" />
                  <SpacingVariable name="--spacing-2" />
                  <SpacingVariable name="--spacing-3" />
                  <SpacingVariable name="--spacing-4" />
                  <SpacingVariable name="--spacing-5" />
                  <SpacingVariable name="--spacing-6" />
                  <SpacingVariable name="--spacing-7" />
                </div>
              </Section>

            </div>
          </motion.div>

          <style>{`
            .command-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .command-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }
            .command-scrollbar::-webkit-scrollbar-thumb {
              background: var(--color-border);
              border-radius: 10px;
            }
            .command-scrollbar::-webkit-scrollbar-thumb:hover {
              background: var(--color-muted-foreground);
            }
          `}</style>
        </div>
      )}
    </AnimatePresence>
  );
}

function Section({ icon: Icon, title, children }) {
  return (
    <div className="mb-8">
      <Typography variant="small" as="h3" className="text-sm font-semibold text-primary mb-4 flex items-center gap-2">
        <Icon size={16} />
        {title}
      </Typography>
      {children}
    </div>
  );
}

// Helper to display a color variable
function ColorVariable({ name, label }) {
  return (
    <div className="space-y-1">
      <div
        className="h-12 w-full rounded border border-border shadow-sm"
        style={{ backgroundColor: `var(${name})` }}
      />
      <div className="flex flex-col">
        <Typography variant="body" className="text-xs font-medium text-foreground">{label}</Typography>
        <Typography variant="body" className="text-[10px] text-muted-foreground font-mono">{name}</Typography>
      </div>
    </div>
  )
}

function SpacingVariable({ name }) {
  return (
    <div className="flex items-center gap-4">
      <Typography variant="body" className="w-24 text-xs font-mono text-muted-foreground">{name}</Typography>
      <div className="h-4 bg-primary/80 rounded" style={{ width: `var(${name})` }} />
    </div>
  )
}

function TypeVariable({ name, className }) {
  return (
    <div className="flex items-baseline justify-between border-b border-border pb-2">
      <span className={`text-foreground ${className}`}>Ag</span>
      <Typography variant="body" className="text-xs font-mono text-muted-foreground">{name}</Typography>
    </div>
  )
}
