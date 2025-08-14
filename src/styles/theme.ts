// Sistema de cores padronizado do portfólio - Mais equilibrado
export const colors = {
  // Cores principais - Roxo moderno
  primary: '#8b5cf6', // Roxo vibrante 
  secondary: '#06b6d4', // Cyan moderno
  accent: '#f59e0b', // Âmbar para destaques
  
  // Backgrounds - Tons de cinza escuro modernos
  background: {
    main: '#0f172a', // Slate 900 - principal
    secondary: '#1e293b', // Slate 800 - secundário
    card: '#334155', // Slate 600 - cards
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
  },
  
  // Textos
  text: {
    primary: '#f8fafc', // Slate 50 - texto principal
    secondary: '#cbd5e1', // Slate 300 - texto secundário
    muted: '#94a3b8', // Slate 400 - texto suave
    accent: '#8b5cf6' // Roxo para acentos
  },
  
  // Estados
  success: '#10b981', // Emerald
  warning: '#f59e0b', // Amber
  error: '#ef4444', // Red
  info: '#06b6d4', // Cyan
  
  // Transparências
  overlay: 'rgba(15, 23, 42, 0.9)',
  cardOverlay: 'rgba(51, 65, 85, 0.5)',
  borderLight: 'rgba(203, 213, 225, 0.1)',
  
  // Gradientes atualizados
  gradients: {
    primary: 'linear-gradient(45deg, #8b5cf6, #06b6d4)',
    secondary: 'linear-gradient(45deg, #06b6d4, #f59e0b)',
    accent: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 50%, #f59e0b 100%)',
    card: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
    hover: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)'
  }
};

// Breakpoints responsivos
export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1200px'
};

// Sombras padronizadas
export const shadows = {
  small: '0 2px 4px rgba(0, 0, 0, 0.1)',
  medium: '0 4px 8px rgba(0, 0, 0, 0.2)',
  large: '0 8px 16px rgba(0, 0, 0, 0.3)',
  card: '0 10px 30px rgba(0, 0, 0, 0.2)',
  hover: '0 20px 40px rgba(0, 0, 0, 0.3)',
  glow: '0 0 20px rgba(78, 205, 196, 0.3)'
};

// Bordas radius padronizados
export const radius = {
  small: '8px',
  medium: '12px',
  large: '16px',
  xl: '20px',
  round: '50%'
};

// Espaçamentos padronizados
export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  xxl: '4rem'
};

// Tipografia
export const typography = {
  fontFamily: {
    primary: "'Raleway', sans-serif",
    secondary: "'Roboto', sans-serif",
    mono: "'Fira Code', monospace"
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem'
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  }
};
