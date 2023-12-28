/** @type {import('tailwindcss').Config} */
export default {
  plugins: [require("daisyui")],
  content: [
    './src/*.{html,js,jsx}',
    './src/**/*.{html,js,jsx}',
  ],
  daisyui: {
    themes: ["winter"],
  },
  theme: {
    screens: {
      'sm': '340px',
      'md': '668px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
}

