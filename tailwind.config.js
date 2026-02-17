
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'violet-brand': '#7C3AED',
        'magenta-brand': '#EC4899',
        'orange-brand': '#F97316',
        'base': '#F8F9FF',
        'text-primary': '#1E1B4B',
        'text-muted': '#6B7280',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
