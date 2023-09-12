/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        img: "url('/src/assets/background.png')",
        logo: "url('/src/assets/logo.png')",
      },
    },
    plugins: [],
  },
};
