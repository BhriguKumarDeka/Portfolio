import { motion } from 'motion/react';
import { cn } from '/src/lib/utils';

const variants = {
  h1: "font-sans text-3xl font-semibold tracking-tight leading-tight text-foreground",
  h2: "font-sans text-2xl md:text-3xl font-semibold tracking-tight leading-snug text-foreground/90",
  h3: "font-sans text-xl font-medium leading-tight text-foreground/90",
  h4: "font-sans text-base font-medium text-foreground/80",
  body: "font-sans text-sm font-light leading-normal tracking-wider text-muted-foreground",
  small: "font-mono text-xs font-light uppercase tracking-wider text-muted-foreground/80",
  display: "font-sans text-4xl md:text-6xl font-bold tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50",
};

export function Typography({
  variant = 'body',
  as,
  className = '',
  children,
  gradient = false,
  animate = false,
  ...props
}) {
  const Component = as || (
    variant.startsWith('h') ? variant :
      variant === 'small' ? 'small' :
        variant === 'display' ? 'h1' :
          'p'
  );

  const MotionComponent = animate ? motion(Component) : Component;

  const baseStyle = variants[variant] || variants.body;
  const gradientStyle = gradient ? "bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/50 to-primary animate-shimmer bg-[length:200%_100%]" : "";

  return (
    <MotionComponent
      className={cn(baseStyle, gradientStyle, className)}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}