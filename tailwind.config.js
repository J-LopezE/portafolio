/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        indigo: {
          DEFAULT: '#6C63FF',
          light: '#A78BFA',
          dark: '#5B52E8',
        },
        violet: {
          DEFAULT: '#A78BFA',
          light: '#C4B5FD',
          dark: '#7C6FD4',
        },
        bgDark: {
          DEFAULT: '#0A0A1A',
          2: '#0F0F25',
          3: '#141430',
        },
        bgLight: {
          DEFAULT: '#FAFAFF',
          2: '#F0EEFF',
          3: '#FFFFFF',
        },
      },
      animation: {
        'gradient-shift': 'gradientShift 4s ease infinite',
        'pulse-dot': 'pulseDot 2s infinite',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
        'shimmer': 'shimmer 0.65s ease forwards',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0%' },
          '50%': { backgroundPosition: '100%' },
        },
        pulseDot: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(1.5)' },
        },
        scrollHint: {
          '0%': { opacity: 0, transform: 'scaleY(0)', transformOrigin: 'top' },
          '60%': { opacity: 1, transform: 'scaleY(1)' },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}