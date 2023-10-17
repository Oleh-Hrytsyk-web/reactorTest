/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0A335C',
        'secondary': 'rgba(23, 66, 88, 0.80)',
        'red' : '#FF3B30'
      },
      spacing: {
        '3': '0.9375rem',
        '4': '1.25rem;',
        '7.5': '1.875rem',
      },
      margin: {
        '3.7': '0.938rem',
        '4': '1.875rem',
      },
      maxWidth: {
        'container-small': '34.375rem',
        'container-xsmall': '20rem',
      },
      borderRadius: {
        'sm': '0.625rem',
      },
      backgroundColor: {
        'bg-secondary': 'rgb(238, 244, 246)',
      },
      lineHeight: {
        '5.5': '1.375rem',
      },
      fontSize: { 
        'lg-small': '1.063rem',
        '6.5xl': '4rem',
      }
    },
  },
  plugins: [],
}

