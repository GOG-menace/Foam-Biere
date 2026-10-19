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
          bg: '#FAF7F2',        // Fond chaud et lumineux
          card: '#FFFFFF',      // Blanc pur pour lisibilité maximale
          subtle: '#F2ECE1',    // Beige pierre chaud
          navy: '#0F2438',      // Bleu Marin Profond Port de Nice (titres & structure)
          navyLight: '#183B5C',
          amber: '#D9631E',     // Ambre houblon éclatant / Terracotta
          amberDark: '#B84A0E', // Hover CTA
          amberSoft: '#FFF1E8', // Fond doux pour badges et callouts
          olive: '#28533E',     // Vert Garrigue / Houblon
          oliveSoft: '#EDF5F0',
          gold: '#C9971E',      // Or Brasseur
          goldSoft: '#FDF8E8',
          text: '#0F172A',      // Texte noir/bleu très foncé pour contraste parfait
          muted: '#3F4E5E',     // Texte secondaire très lisible (contraste 7:1)
          border: '#E2D9CC'     // Bordures nettes
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'shopify': '0 1px 3px rgba(15, 23, 42, 0.08), 0 4px 12px rgba(15, 23, 42, 0.04)',
        'shopify-hover': '0 8px 24px -4px rgba(15, 36, 56, 0.12), 0 2px 6px rgba(15, 36, 56, 0.06)',
        'amber-glow': '0 4px 18px rgba(217, 99, 30, 0.28)'
      }
    },
  },
  plugins: [],
}
