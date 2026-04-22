import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        accent: ['var(--font-caveat)', 'cursive'],
      },
      colors: {
        cream: 'var(--cream)',
        'warm-brown': 'var(--warm-brown)',
        'rose-pink': 'var(--rose-pink)',
        'deep-green': 'var(--deep-green)',
        'gold-sunlight': 'var(--gold-sunlight)',
        'muted-navy': 'var(--muted-navy)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        steam: 'steam 3s ease-out infinite',
        sunbeam: 'sunbeam 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        steam: {
          '0%': { opacity: '0', transform: 'translateY(0) scale(1)' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '0', transform: 'translateY(-30px) scale(1.5)' },
        },
        sunbeam: {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0) rotate(-15deg)' },
          '50%': { opacity: '0.5', transform: 'translateY(-10px) rotate(-15deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
