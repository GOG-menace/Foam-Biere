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
          bg: '#FAF8F5',        // Crème solaire chaude Riviera
          card: '#FFFFFF',      // Blanc pur
          subtle: '#F4EFEA',    // Lin & beige pierre du Port
          navy: '#0F2438',      // Bleu Marin Profond du Port de Nice
          navyLight: '#183B5C', // Bleu nuit secondaire
          red: '#904545',       // Rouge Terracotta officiel FOAM
          redDark: '#7A3535',   // Hover CTA rouge
          redSoft: '#F8EFEF',   // Fond doux rouge
          redBorder: '#D8BABA', // Bordure rouge adoucie
          amber: '#904545',     // Alias rétro-compatible
          amberDark: '#7A3535',
          amberSoft: '#F8EFEF',
          olive: '#2D4B39',     // Vert Garrigue / Pin parasol (Click & Collect & local)
          oliveSoft: '#EEF4F0',
          gold: '#BFA15F',      // Or Brasseur raffiné (Maison 1948)
          goldSoft: '#FBF6EA',
          text: '#16202A',      // Texte foncé haute lisibilité
          muted: '#526071',     // Texte secondaire équilibré (contraste WCAG AAA)
          border: '#E5DDD0'     // Bordure lin soignée
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'shopify': '0 1px 3px rgba(15, 36, 56, 0.05), 0 6px 16px -2px rgba(15, 36, 56, 0.06)',
        'shopify-hover': '0 12px 28px -4px rgba(15, 36, 56, 0.12), 0 4px 10px rgba(15, 36, 56, 0.05)',
        'red-glow': '0 4px 20px rgba(144, 69, 69, 0.28)',
        'amber-glow': '0 4px 20px rgba(144, 69, 69, 0.28)'
      }
    },
  },
  plugins: [],
}
