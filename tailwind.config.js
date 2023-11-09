/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Oleo Script"],
        header: ["Holtwood One SC"],
      },
    },
  },
  plugins: [import("flowbite/plugin")],
};
