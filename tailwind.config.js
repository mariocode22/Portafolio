// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'float-slow': 'float-slow 20s ease-in-out infinite',
        'float-medium': 'float-medium 15s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 10s ease-in-out infinite',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-30px, -50px) scale(1.1)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(40px, 30px) scale(0.95)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.2' },
        },
      },
    },
  },
}