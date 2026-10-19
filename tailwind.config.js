/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kraft: {
          bg: '#F7F4EE',       // Kraft très clair, papier naturel
          stone: '#EFE9DF',    // Beige pierre / kraft moyen
          border: '#E1D7C8',   // Bordure fine kraft
          ink: '#18232C',      // Noir encre / bleu marin très profond
          muted: '#62707C',    // Texte secondaire sobre
          terracotta: '#C85E28', // Ambre houblon / terre cuite
          terracottaHover: '#AA4E1E',
          olive: '#385845',    // Vert olive / houblonnier
          cream: '#FFFDF9'     // Blanc cassé doux pour cartes
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
