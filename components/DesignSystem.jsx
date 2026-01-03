import { motion, AnimatePresence } from 'motion/react';
import { X, Palette, Type, Layout, Zap } from 'lucide-react';
import theme from '../src/theme';

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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[500px] bg-slate-900 border-l border-slate-800 z-[70] overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Palette className="w-6 h-6 text-lime-400" />
                  Design System
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              {/* Color Palette */}
              <Section icon={Palette} title="Color Palette">
                <div className="space-y-4">
                  {/* Primary Colors */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-400 mb-2">Primary - Lime</h4>
                    <div className="grid grid-cols-5 gap-2">
                      {Object.entries(theme.colors.primary.lime).map(([key, value]) => (
                        <ColorSwatch key={key} name={key} color={value} />
                      ))}
                    </div>
                  </div>

                  {/* Neutral Colors */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-400 mb-2">Neutral - Slate</h4>
                    <div className="grid grid-cols-5 gap-2">
                      {Object.entries(theme.colors.neutral.slate).slice(3, 10).map(([key, value]) => (
                        <ColorSwatch key={key} name={key} color={value} />
                      ))}
                    </div>
                  </div>

                  {/* Semantic Colors */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-400 mb-2">Backgrounds</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded border border-slate-700" style={{ background: theme.colors.background.primary }} />
                        <div className="text-xs">
                          <p className="text-white">Primary</p>
                          <p className="text-slate-500 font-mono">{theme.colors.background.primary}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded border border-slate-700 backdrop-blur-sm" style={{ background: theme.colors.background.secondary }} />
                        <div className="text-xs">
                          <p className="text-white">Secondary</p>
                          <p className="text-slate-500 font-mono">slate-900/40</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Section>

              {/* Typography */}
              <Section icon={Type} title="Typography">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-400 mb-2">Font Sizes</h4>
                    <div className="space-y-2">
                      {Object.entries(theme.typography.fontSize).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-white" style={{ fontSize: value }}>{key}</span>
                          <span className="text-slate-500 text-xs font-mono">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-400 mb-2">Font Weights</h4>
                    <div className="space-y-2">
                      {Object.entries(theme.typography.fontWeight).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-white" style={{ fontWeight: value }}>{key}</span>
                          <span className="text-slate-500 text-xs font-mono">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Section>

              {/* Spacing */}
              <Section icon={Layout} title="Spacing Scale">
                <div className="space-y-2">
                  {Object.entries(theme.spacing).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-3">
                      <div className="w-16 text-xs text-slate-400 font-mono">{key}</div>
                      <div className="h-8 bg-lime-400 rounded" style={{ width: value }} />
                      <div className="text-xs text-slate-500 font-mono">{value}</div>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Border Radius */}
              <Section icon={Zap} title="Border Radius">
                <div className="grid grid-cols-3 gap-3">
                  {Object.entries(theme.borderRadius).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <div
                        className="w-full h-16 bg-slate-800 border border-lime-400"
                        style={{ borderRadius: value }}
                      />
                      <div className="text-xs text-center">
                        <p className="text-white">{key}</p>
                        <p className="text-slate-500 font-mono">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Shadows */}
              <Section icon={Zap} title="Shadows">
                <div className="space-y-3">
                  {Object.entries(theme.shadows).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-3">
                      <div
                        className="w-20 h-12 bg-slate-800 rounded"
                        style={{ boxShadow: value }}
                      />
                      <div className="text-xs">
                        <p className="text-white">{key}</p>
                        <p className="text-slate-500 font-mono text-[10px]">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Animation Timings */}
              <Section icon={Zap} title="Animation Durations">
                <div className="space-y-2">
                  {Object.entries(theme.animation).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-white">{key}</span>
                      <span className="text-slate-500 text-xs font-mono">{value}</span>
                    </div>
                  ))}
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
      <h3 className="text-sm font-semibold text-lime-400 uppercase tracking-wider mb-4 flex items-center gap-2">
        <Icon className="w-4 h-4" />
        {title}
      </h3>
      {children}
    </div>
  );
}

function ColorSwatch({ name, color }) {
  return (
    <div className="space-y-1">
      <div
        className="w-full h-10 rounded border border-slate-700"
        style={{ backgroundColor: color }}
      />
      <p className="text-[10px] text-slate-400 text-center">{name}</p>
    </div>
  );
}
