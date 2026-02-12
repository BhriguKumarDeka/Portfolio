import { motion, AnimatePresence } from 'motion/react';
import { Cancel01Icon, PaintBoardIcon, TextIcon, Layout01Icon, FlashIcon } from 'hugeicons-react';
import { useEffect, useState } from 'react';
import { Typography } from './ui/Typography';

export default function DesignSystem({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 pointer-events-auto"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-screen w-full md:w-1/2 lg:w-1/2 bg-background border-l border-border z-50 overflow-y-auto shadow-2xl"
          >
            <div className="p-4 sm:p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6 pb-4 border-b border-border">
                <Typography variant="h3" as="h2" className="font-bold flex items-center gap-2">
                  <PaintBoardIcon className="w-5 h-5 text-primary" />
                  Design System (CSS Vars)
                </Typography>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  <Cancel01Icon className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Color Palette */}
              <Section icon={PaintBoardIcon} title="Theme Colors">
                <div className="grid grid-cols-2 gap-4">
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
              <Section icon={Layout01Icon} title="Golden Ratio Spacing">
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

              {/* Border Radius */}
              <Section icon={Layout01Icon} title="Radius">
                <div className="p-4 border border-primary/50 flex items-center justify-center text-foreground text-sm" style={{ borderRadius: 'var(--radius)' }}>
                  Variable: --radius
                </div>
              </Section>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Section({ icon: Icon, title, children }) {
  return (
    <div className="mb-8">
      <Typography variant="small" as="h3" className="text-sm font-semibold text-primary mb-4 flex items-center gap-2">
        <Icon className="w-4 h-4" />
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
