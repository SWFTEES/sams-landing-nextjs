import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0D0D0D',
        'midnight-dark': '#050505',
        'red-neon': '#E63946',
        cream: '#F4E8C7',
      },
      fontFamily: {
        'pinyon': ['Pinyon Script', 'cursive'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite alternate',
        'pulse-button': 'pulse-button 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          'from': {
            filter: 'brightness(1.1) contrast(1.1) drop-shadow(0 0 20px rgba(230, 57, 70, 0.5)) drop-shadow(0 0 40px rgba(230, 57, 70, 0.3))',
          },
          'to': {
            filter: 'brightness(1.2) contrast(1.1) drop-shadow(0 0 30px rgba(230, 57, 70, 0.7)) drop-shadow(0 0 50px rgba(230, 57, 70, 0.4))',
          },
        },
        'pulse-button': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(230, 57, 70, 0.4)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(230, 57, 70, 0.6), 0 0 40px rgba(230, 57, 70, 0.3)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config