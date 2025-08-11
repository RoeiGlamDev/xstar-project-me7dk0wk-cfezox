import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#FF0000', // Primary red color for the brand
        },
        orange: {
          DEFAULT: '#FFA500', // Primary orange color for the brand
        },
        white: {
          DEFAULT: '#FFFFFF', // Primary white color for the brand
        },
      },
      animation: {
        fade: 'fade 0.5s ease-in-out',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});