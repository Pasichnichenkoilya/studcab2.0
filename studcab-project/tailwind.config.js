/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-white": "#F3F3F3",
        "soft-black-100": "#343A40",
        "soft-black-200": "#202124",
        "soft-black-hover-100": "#22262A",
        "soft-black-hover-200": "#141416",
      },
    },
  },
  plugins: [],
};
