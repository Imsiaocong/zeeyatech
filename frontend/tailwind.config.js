/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(222 47% 4%)',
        foreground: 'hsl(210 40% 96%)',
        card: {
          DEFAULT: 'hsl(222 47% 4%)',
          foreground: 'hsl(210 40% 96%)',
        },
        muted: {
          DEFAULT: 'hsl(217 33% 12%)',
          foreground: 'hsl(215 20% 55%)',
        },
        border: 'hsl(217 33% 17%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease both',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
