/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        momentum: ['Momentum', 'sans-serif'],
        ibmPlex: ['IBM Plex Mono', 'monospace'],
      }
    }
  },
  plugins: []
};