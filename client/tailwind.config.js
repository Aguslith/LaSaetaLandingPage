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
        heading: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['"Pathway Extreme"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'elevated': '0 14px 32px -8px rgba(15, 23, 42, 0.14), 0 4px 12px -2px rgba(15, 23, 42, 0.06)',
        'elevated-lg': '0 24px 48px -12px rgba(15, 23, 42, 0.22), 0 8px 16px -4px rgba(15, 23, 42, 0.08)',
        'btn-primary': '0 8px 20px -4px rgba(196, 18, 44, 0.38)',
      }
    },
  },
  plugins: [],
}
