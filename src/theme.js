// Centralized Design System & Theme Configuration

export const theme = {
  // Color Palette
  colors: {
    primary: {
      lime: {
        50: '#f7fee7',
        100: '#ecfccb',
        200: '#d9f99d',
        300: '#bef264',
        400: '#a3e635',  // Main accent
        500: '#84cc16',
        600: '#65a30d',
        700: '#4d7c0f',
        800: '#3f6212',
        900: '#365314',
      }
    },
    neutral: {
      slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      }
    },
    background: {
      primary: '#000000',
      secondary: 'rgba(15, 23, 42, 0.4)',  // slate-900/40
      card: 'rgba(15, 23, 42, 0.3)',
    },
    border: {
      primary: '#1e293b',  // slate-800
      secondary: '#334155', // slate-700
      accent: 'rgba(163, 230, 53, 0.5)', // lime-400/50
    },
    text: {
      primary: '#ffffff',
      secondary: '#94a3b8', // slate-400
      tertiary: '#64748b',  // slate-500
    }
  },

  // Spacing Scale (Tailwind-based)
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
  },

  // Typography
  typography: {
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      mono: '"Courier New", Courier, monospace',
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem',// 30px
      '4xl': '2.25rem', // 36px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    }
  },

  // Border Radius
  borderRadius: {
    sm: '0.25rem',   // 4px
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
    '2xl': '1.5rem', // 24px
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    lime: '0 0 20px rgba(163, 230, 53, 0.3)',
  },

  // Animation Durations
  animation: {
    fast: '0.15s',
    normal: '0.3s',
    slow: '0.5s',
  },

  // Container Widths
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '42rem',  // max-w-2xl
    '3xl': '48rem',  // max-w-3xl
  },

  // Transitions
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease',
  },

  // Z-Index Scale
  zIndex: {
    base: 0,
    dropdown: 10,
    sticky: 20,
    modal: 50,
    nav: 50,
    tooltip: 60,
    preloader: 100,
  }
};

export default theme;
