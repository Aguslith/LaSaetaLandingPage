/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E51937',
          'red-dark': '#C4122C',
          'red-light': '#FEE2E2',
          gold: '#FEC526',
          'gold-dark': '#E5AC12',
          'gold-light': '#FEF3C7',
        },
        dark: {
          bg: '#0B0F19',
          surface: '#111827',
          card: '#161F30',
          border: '#1F293D',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'red-glow': '0 12px 30px -4px rgba(229, 25, 55, 0.45)',
        'red-sm': '0 4px 15px rgba(229, 25, 55, 0.3)',
        'gold-glow': '0 12px 30px -4px rgba(254, 197, 38, 0.45)',
      }
    },
  },
  plugins: [],
}
