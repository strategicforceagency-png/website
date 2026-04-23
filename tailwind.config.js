/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          DEFAULT: '#F5D5D5',
          light: '#FDF7F7',
          deep: '#E8C4C4',
        },
        coral: {
          DEFAULT: '#D4848C',
          hover: '#C2757D',
          soft: '#F4E6E8',
          glow: 'rgba(212, 132, 140, 0.4)',
        },
        cloud: {
          DEFAULT: '#FAF7F5',
        },
        ink: {
          DEFAULT: '#1C1C1E',
          soft: '#3A3A3C',
          muted: '#636366',
        },
        trust: {
          DEFAULT: '#B8CCE0',
          glow: 'rgba(184, 204, 224, 0.3)',
        },
        border: 'rgba(28, 28, 30, 0.1)',
      },
      fontFamily: {
        display: ['"DM Sans"', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glass-sm': '0 4px 16px rgba(28, 28, 30, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.4)',
        'glass': '0 8px 32px rgba(28, 28, 30, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
        'glass-card': '0 12px 40px rgba(28, 28, 30, 0.06), inset 0 0 0 1px rgba(255, 255, 255, 0.6)',
        // Premium glow shadows
        'glow-coral': '0 0 40px rgba(212, 132, 140, 0.25), 0 0 80px rgba(212, 132, 140, 0.15)',
        'glow-coral-intense': '0 0 30px rgba(212, 132, 140, 0.35), 0 0 60px rgba(212, 132, 140, 0.2), 0 0 100px rgba(212, 132, 140, 0.1)',
        'glow-blush': '0 0 50px rgba(245, 213, 213, 0.4), 0 0 100px rgba(245, 213, 213, 0.2)',
        'glow-trust': '0 0 40px rgba(184, 204, 224, 0.3), 0 0 80px rgba(184, 204, 224, 0.15)',
        // Premium card shadows with color tint
        'card-premium': '0 20px 50px -12px rgba(212, 132, 140, 0.15), 0 8px 24px -8px rgba(0, 0, 0, 0.06)',
        'card-premium-hover': '0 30px 70px -15px rgba(212, 132, 140, 0.25), 0 12px 32px -10px rgba(0, 0, 0, 0.08)',
        // Inner glow for glass effects
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(255, 255, 255, 0.3)',
        'inner-glow-coral': 'inset 0 0 30px rgba(212, 132, 140, 0.1)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 4s',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
        'border-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.2), rgba(255,255,255,0.6))',
      },
    },
  },
  plugins: [],
}
