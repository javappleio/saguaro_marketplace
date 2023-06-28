/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'F4F4E9': '#F4F4E9',
        'dark': '#000000',
        'AE8B6F': '#AE8B6F',
        '5D7060': '#5D7060',
        'bgback': '#F1F0EB',
        'F2F2EC': '#F2F2EC',
        'F1F0EB': '#F1F0EB'
      },
      fontFamily: {
        nevada: ["Nevada", 'sans-serif'],
        soleil: ["Soleil", 'sans-serif'],
        minion: ["Minion", 'sans-serif'],
      }
    },
  },
  plugins: [],
})
