/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Oleo Script"],
        header: ["Holtwood One SC"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
