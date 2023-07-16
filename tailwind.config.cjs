/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      'full': '9999px',
      'large': '3.75rem',
      'elarge': '4rem',
      'medium': '1.5rem',
      'small': '0.75rem',
    },
    extend: {
      colors: {
        primary:"#d8313b",
        secondary: "#f4c6c8",
        darkerprimary: "#B8232A",
        loginmethod: "#2a7ce0"
    },
  },
}}
