/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#24326b',
        customBlue: '#253371',
        customPurple: '#8a535f',
        customOrange: '#da6f2e',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-delay': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '50%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-delay-2': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '75%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight:{
          'from': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          'to': {
            transform: 'translateX(0)',
            opacity: '1',
          }
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-delay': 'fade-in-delay 1s ease-out forwards',
        'fade-in-delay-2': 'fade-in-delay-2 1.5s ease-out forwards',
        'slideInRight': 'slideInRight 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
} 