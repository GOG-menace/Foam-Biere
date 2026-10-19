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
          bg: '#F4EFE6',        // Papier kraft atelier / calcaire niçois
          card: '#FFFFFF',      // Blanc pur net
          subtle: '#ECE5D8',    // Beige kraft doux
          navy: '#15191E',      // Anthracite d'encre d'atelier (structure & titres)
          navyLight: '#262E38', // Ardoise atelier secondaire
          red: '#904545',       // Rouge officiel FOAM
          redDark: '#783535',   // Hover CTA rouge
          redSoft: '#F8EDED',   // Fond doux rouge atelier
          redBorder: '#D9A7A7', // Bordure rouge adoucie
          amber: '#904545',     // Alias rétro-compatible
          amberDark: '#783535',
          amberSoft: '#F8EDED',
          olive: '#264936',     // Vert garrigue & houblon d'atelier
          oliveSoft: '#EDF4F0',
          gold: '#A88636',      // Laiton d'atelier (Maison 1948)
          goldSoft: '#F8F3E6',
          text: '#15191E',      // Texte haute lisibilité d'encre
          muted: '#4B5668',     // Texte secondaire net (WCAG AAA)
          border: '#D8CEBF'     // Lignes kraft / métal atelier
        }
      },
      fontFamily: {
        serif: ['Space Grotesk', 'Syne', 'system-ui', 'sans-serif'], // Titres percutants Craft Brut
        display: ['Space Grotesk', 'Syne', 'sans-serif'],
        craft: ['Syne', 'Space Grotesk', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'shopify': '0 1px 2px rgba(21, 25, 30, 0.06), 0 2px 6px -1px rgba(21, 25, 30, 0.04)',
        'shopify-hover': '0 6px 16px -2px rgba(21, 25, 30, 0.10), 0 2px 6px rgba(21, 25, 30, 0.04)',
        'craft-flat': '2px 2px 0px rgba(21, 25, 30, 0.9)',
        'craft-flat-red': '2px 2px 0px #904545',
        'red-glow': '0 2px 14px rgba(144, 69, 69, 0.25)',
        'amber-glow': '0 2px 14px rgba(144, 69, 69, 0.25)'
      }
    },
  },
  plugins: [],
}
