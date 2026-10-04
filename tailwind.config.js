// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
      },
      animation: {
        'float-slow': 'float 5s ease-in-out infinite',
        'float-delayed': 'floatReverse 6s ease-in-out infinite 1s',
      },
    },
  },
};