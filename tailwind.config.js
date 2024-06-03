/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        slider1: "url('/slider/1.png')",
        slider2: "url('/slider/2.png')",
        slider3: "url('/slider/3.png')",
        progress: "url('/elements/progress-background.svg')",
      },
    },
  },
  plugins: [],
};
