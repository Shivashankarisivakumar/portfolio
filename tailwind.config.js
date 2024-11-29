/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 6px 30px 7px rgba(33, 37, 71, 0.1)',
      },
      colors: {
        bg: '#1f1f38',
        bg_variant: '#2c2c6c',
        primary: '#4db5ff',
        primary_variant: 'rgba(77,181,255,0.4)',
        white: '#ffffff',
        light: 'rgba(255,255,255,0.6)',
      },
  },
  plugins: [],
}
}
