import React from 'react';
import { motion } from 'motion/react';
import { Loading02Icon } from 'hugeicons-react';

const variants = {
  // 1. Primary: The "Gem" look. 
  primary: `
    bg-gradient-to-b from-primary/90 to-primary 
    text-primary-foreground 
    border border-primary/20
    shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.15),0px_2px_4px_rgba(0,0,0,0.1)] 
    hover:brightness-110 
  `,

  // 2. Secondary
  secondary: `
    bg-secondary backdrop-blur-sm
    border border-border/50
    text-secondary-foreground
    shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.05)]
    hover:bg-secondary/70 hover:border-border/80
  `,

  // 3. Ghost
  ghost: `
    bg-transparent 
    text-muted-foreground 
    hover:text-foreground hover:bg-muted/50
  `,

  // 4. Destructive
  destructive: `
    bg-gradient-to-b from-red-500 to-red-600 
    text-white 
    border border-red-700
    shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.2)]
    hover:brightness-110
  `
};

const sizes = {
  sm: "h-8 px-3 text-xs gap-1.5 rounded-md",
  md: "h-10 px-5 text-sm gap-2 rounded-lg",
  lg: "h-12 px-7 text-base gap-2.5 rounded-xl",
  icon: "h-10 w-10 p-0 rounded-lg grid place-items-center"
};

// --- Animation Config ---
const buttonMotion = {
  initial: "initial",
  whileHover: "hover",
  whileTap: "tap",
  variants: {
    initial: { y: 0 },
    hover: { y: -1 },
    tap: { scale: 0.96, y: 0 }
  },
  transition: { type: "spring", stiffness: 400, damping: 17 }
};

const iconMotion = {
  initial: { rotate: 0, scale: 1 },
  hover: {
    rotate: -12,
    scale: 1.15,
    transition: { type: "spring", stiffness: 300, damping: 10 }
  },
  tap: { rotate: 0, scale: 0.9 }
};

const shimmerMotion = {
  initial: { x: "-100%" },
  hover: {
    x: "100%",
    transition: {
      repeat: 0,
      repeatDelay: 0.5,
      duration: 1,
      ease: "linear"
    }
  }
};

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon: Icon,
  disabled = false,
  loading = false,
  onClick,
  ...props
}) {
  const variantStyle = variants[variant] || variants.primary;
  const sizeStyle = sizes[size] || sizes.md;
  const shouldAnimateIcon = variant === 'primary' && !loading;

  return (
    <motion.button
      className={`
        cursor-pointer
        relative overflow-hidden group 
        inline-flex items-center justify-center 
        font-medium whitespace-nowrap 
        transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
        disabled:pointer-events-none disabled:opacity-50
        ${variantStyle} ${sizeStyle} ${className}
      `}
      onClick={onClick}
      disabled={disabled || loading}

      // Apply the parent motion settings
      {...buttonMotion}
      {...props}
    >
      {/* Loading State Overlay */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-inherit z-20">
          <Loading02Icon className="w-4 h-4 animate-spin" />
        </div>
      )}

      {/* Content Layer */}
      <span className={`flex items-center justify-center gap-2 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Animated Icon Wrapper */}
        {Icon && (
          <motion.span variants={shouldAnimateIcon ? iconMotion : {}} className="flex items-center justify-center">
            <Icon className="w-[1.2em] h-[1.2em] opacity-80 group-hover:opacity-100 transition-opacity" />
          </motion.span>
        )}

        {children && <span>{children}</span>}
      </span>

      {/* Shimmer Effect (Only for primary) - Fixed using Framer Motion */}
      {variant === 'primary' && !loading && (
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none bg-linear-to-r from-transparent via-white/15 to-transparent skew-x-12"
          variants={shimmerMotion}
        />
      )}
    </motion.button>
  );
}