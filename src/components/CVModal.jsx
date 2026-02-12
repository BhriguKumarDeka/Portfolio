import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Cancel01Icon, Download01Icon, File01Icon } from 'hugeicons-react';
import { Button } from './ui/Button';
import { Typography } from './ui/Typography';

export default function CVModal({ isOpen, onClose, cvUrl }) {
  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Use Portal to render outside parent stacking contexts
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
              className="w-full max-w-5xl h-[80vh] sm:h-[85vh] flex flex-col bg-background rounded-2xl border border-border/50 shadow-2xl relative overflow-hidden"
            >

              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 sm:px-6 border-b border-border/50 bg-secondary/5 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <File01Icon size={20} className="text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <Typography variant="h3" className="text-sm font-semibold">Resume</Typography>
                    <Typography variant="small" className="text-xs text-muted-foreground">Bhrigu Kumar Deka</Typography>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="primary"
                    size="sm"
                    icon={Download01Icon}
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = cvUrl;
                      link.download = 'Bhrigu_Kumar_Deka_CV.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="hidden sm:flex"
                  >
                    Download
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="w-8 h-8 rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors"
                  >
                    <Cancel01Icon size={18} />
                  </Button>
                </div>
              </div>

              {/* Main PDF Viewer */}
              <div className="flex-1 w-full bg-muted/20 relative overflow-hidden">
                <iframe
                  src={`${cvUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full border-none"
                  title="CV PDF Viewer"
                />
              </div>

              {/* Mobile Footer (Download Button) */}
              <div className="sm:hidden p-4 border-t border-border/50 bg-background flex justify-center shrink-0">
                <Button
                  variant="primary"
                  className="w-full"
                  icon={Download01Icon}
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = cvUrl;
                    link.download = 'Bhrigu_Kumar_Deka_CV.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Download Resume
                </Button>
              </div>

            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
