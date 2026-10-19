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
          bg: '#FAF6F0',           // Crème lin texturé / papier kraft chaud Riviera
          card: '#FFFFFF',         // Blanc pur pour lisibilité
          subtle: '#F3ECE2',       // Sable doux & calcaire niçois
          ivory: '#FDFCFA',
          terracotta: '#C3532B',   // Ocre terracotta chaud des façades niçoises
          terracottaDark: '#A63F1B',
          terracottaSoft: '#FBF1EC',
          navy: '#112338',         // Bleu marine profond (Quai des Deux Emmanuels)
          navyLight: '#1E3A59',
          navySoft: '#EEF3F8',
          pine: '#1D3C2F',         // Vert pin sombre (Place du Pin)
          pineSoft: '#EDF4F0',
          gold: '#DCA037',         // Doré soleil couchant & laiton 1948
          goldSoft: '#FDF7EC',
          text: '#162534',         // Texte marine profond haute lisibilité
          muted: '#627181',        // Texte secondaire doux
          border: '#E6DED2',       // Ligne douce lin & craie
          borderWarm: '#DBCFBE',
          // Aliases rétro-compatibles
          red: '#C3532B',
          redDark: '#A63F1B',
          redSoft: '#FBF1EC',
          orange: '#C3532B',
          amber: '#DCA037',
          black: '#112338',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],           // Serif expressive et chaleureuse
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'], // Sans-serif lisible et neutre
        mono: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'riviera': '0 4px 20px -2px rgba(17, 35, 56, 0.06), 0 2px 6px -1px rgba(17, 35, 56, 0.04)',
        'riviera-hover': '0 14px 34px -4px rgba(17, 35, 56, 0.12), 0 4px 12px rgba(17, 35, 56, 0.05)',
        'riviera-card': '0 2px 10px rgba(17, 35, 56, 0.04)',
        'terracotta-glow': '0 8px 24px -4px rgba(195, 83, 43, 0.35)',
        'gold-glow': '0 8px 24px -4px rgba(220, 160, 55, 0.35)',
        'shopify': '0 4px 20px -2px rgba(17, 35, 56, 0.06)',
        'shopify-hover': '0 14px 34px -4px rgba(17, 35, 56, 0.12)',
        'brutal': '0 4px 20px -2px rgba(17, 35, 56, 0.06)',
        'brutal-sm': '0 2px 8px rgba(17, 35, 56, 0.04)',
        'brutal-lg': '0 14px 34px -4px rgba(17, 35, 56, 0.12)',
      }
    },
  },
  plugins: [],
}
