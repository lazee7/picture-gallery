/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sl: '500px',
      },
      backgroundColor: {
        main: '#181819',
        secondary: '#FF73FA',
        primary: '#E286F4',
        form: '#26292D',
        input: '#1C1E22',
        btn: '#5C62EC',
      },
      colors: {
        secondary: '#FF73FA',
        primary: '#E286F4',
        btn: '#5C62EC',
      },

      animation: {
        slide: 'slide 0.2s ease-in-out 1',
      },
      keyframes: {
        slide: {
          from: { transform: 'translateY(-30px)' },
          to: { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
