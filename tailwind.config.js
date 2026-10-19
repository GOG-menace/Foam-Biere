/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        foam: {
          bg: '#FAF6F0',       // Crème solaire / Sable chaud
          card: '#FFFFFF',     // Blanc pur
          stone: '#F0EAE1',    // Beige pierre
          navy: '#0F2537',     // Bleu Marin Profond du Port de Nice
          navyLight: '#1C3E5E',
          amber: '#D96B27',    // Ambre Houblon / Terracotta
          amberDark: '#B85518',
          amberLight: '#FBE8DC',
          olive: '#2E5A44',    // Vert Olive Méditerranéen
          oliveLight: '#E8F1EC',
          gold: '#D4AF37',     // Or Brassin
          goldLight: '#FDF7E7',
          gray: '#6B7A88',
          border: '#E5DED5'
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(15, 37, 55, 0.06)',
        'elevated': '0 12px 32px -4px rgba(15, 37, 55, 0.12)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'amber-glow': '0 4px 20px rgba(217, 107, 39, 0.35)'
      }
    },
  },
  plugins: [],
}
