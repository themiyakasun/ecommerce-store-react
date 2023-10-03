/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundColor: {
        bgAsh: '#E0E0E0',
      },

      backgroundImage: {
        primaryBg: 'linear-gradient(180deg, #FFF 0%, #FAFAFA 100%);',
      },
    },
  },
  plugins: [],
};
