/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include TypeScript and JSX files
  ],
  theme: {
    extend: {
      backgroundImage:{
        'factory':"url('./assets/images/factory.png')",
        'driver':"url('./assets/images/driver.jpg')"
      }
    },
  },
  plugins: [],
};
