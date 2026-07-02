/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brick: { DEFAULT: '#A6342A', dark: '#7E2820', tint: '#F5E7E4' },
        navy: { DEFAULT: '#16293F', light: '#21395A' },
        steel: '#5A6675',
        ink: '#14181D',
        concrete: { DEFAULT: '#F4F4F2', dark: '#E9E9E5' },
        line: '#DCDDD8',
        amber: { brand: '#E0A400' },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(20,24,29,.05), 0 12px 34px -18px rgba(20,24,29,.35)',
        lift: '0 30px 70px -30px rgba(20,24,29,.5)',
      },
      keyframes: {
        kenburns: { from: { transform: 'scale(1.08)' }, to: { transform: 'scale(1)' } },
        pageIn: { from: { opacity: '0' }, to: { opacity: '1' } },
      },
      animation: {
        kenburns: 'kenburns 12s ease forwards',
        pageIn: 'pageIn .5s ease',
      },
    },
  },
  plugins: [],
};