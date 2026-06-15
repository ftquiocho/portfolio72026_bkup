/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#F8F8F7',
        'surface': '#FFFFFF',
        'ink': '#141414',
        'ink-muted': '#666666',
        'accent': '#0ABAB5',
        'border-light': '#E5E5E5'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Caveat', 'cursive']
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'smooth': 'cubic-bezier(0.23, 1, 0.32, 1)'
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delay': 'float 10s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'ping': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(100vh) scale(0.5) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-10vh) scale(1) rotate(20deg)', opacity: '0' }
        },
        ping: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' }
        }
      },
      maxWidth: {
        '8xl': '88rem',  // 1408px (7xl is 80rem/1280px)
        '9xl': '96rem'   // 1536px (optional, if you want an even wider breakpoint)
      }
    }
  },
  plugins: [],
}