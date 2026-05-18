/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        terminal: {
          base: '#050505',
          panel: '#0c0c0c',
          line: '#1c1c1c',
          muted: '#8b7355',
          text: '#f5d6b0',
          accent: '#ff8c1a',
          accentSoft: '#c96c13',
          accentDim: '#6c3a0a',
        },
      },
      boxShadow: {
        terminal: '0 0 0 1px rgba(255,140,26,0.18), 0 24px 60px rgba(0,0,0,0.55)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        sweep: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        sweep: 'sweep 8s linear infinite',
        reveal: 'reveal 0.6s ease-out both',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', '"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
};
