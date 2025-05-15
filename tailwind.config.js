/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translate(-50%, 1rem)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%, 0)'
          },
        },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          },
        }
      },
      animation: {
        'slide-up': 'slide-up 0.2s ease-out',
        'slide-in-right': 'slide-in-right 0.2s ease-out'
      }
    },
  },
  plugins: [],
}
