/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    theme: {
      fontFamily: {
        root: ['"Roboto"']
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["dark"],
  },
}
