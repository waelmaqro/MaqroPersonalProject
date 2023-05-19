/** @type {import('tailwindcss').Config} */
module.exports = ({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D5001C",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xxs: "270px",
        xxshalf: "380px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1020px",
        lg: "1200px",
        xlg: "1300px",
        xxl: "1700px", 
      },
    },
  },
  plugins: [require("flowbite/plugin")],
})
