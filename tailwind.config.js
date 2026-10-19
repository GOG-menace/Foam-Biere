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
          bg: '#F2F2EF',        // Béton ultra clair / Papier atelier contemporain
          concrete: '#E7E7E3',  // Gris béton technique
          card: '#FFFFFF',      // Blanc pur pour fort contraste
          black: '#0A0A0A',     // Noir encre franc brut
          navy: '#0A0A0A',      // Alias vers noir encre
          navyLight: '#1A1A1A',
          orange: '#FF4800',    // Orange houblonné vif (Mikkeller / Brewdog punchy)
          orangeHover: '#E03E00',
          orangeSoft: '#FFF0EA',
          neon: '#E2FF00',      // Jaune néon / acide pour stickers & tampons
          neonHover: '#CEEB00',
          cobalt: '#0047FF',    // Bleu cobalt électrique
          red: '#FF4800',       // Accent vif électrique remplaçant le bordeaux
          redDark: '#E03E00',
          redSoft: '#FFF0EA',
          redBorder: '#0A0A0A',
          amber: '#FF4800',     // Alias rétro-compatible
          amberDark: '#E03E00',
          amberSoft: '#FFF0EA',
          muted: '#5A5A57',     // Texte secondaire
          subtle: '#ECECE8',
          border: '#0A0A0A',    // Bordures noires franches (1 ou 2 px)
          borderLight: '#D4D4CE',
        }
      },
      fontFamily: {
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
        serif: ['Syne', 'Space Grotesk', 'sans-serif'],
        impact: ['Archivo Black', 'Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px #0A0A0A',
        'brutal': '3px 3px 0px #0A0A0A',
        'brutal-lg': '5px 5px 0px #0A0A0A',
        'brutal-orange': '3px 3px 0px #FF4800',
        'brutal-neon': '3px 3px 0px #0A0A0A',
        'shopify': '3px 3px 0px #0A0A0A',
        'shopify-hover': '5px 5px 0px #0A0A0A',
        'craft-flat': '3px 3px 0px #0A0A0A',
        'craft-flat-red': '3px 3px 0px #FF4800',
        'red-glow': '4px 4px 0px #0A0A0A',
        'amber-glow': '4px 4px 0px #0A0A0A'
      }
    },
  },
  plugins: [],
}
