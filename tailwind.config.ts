import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C8102E',
        'primary-dark': '#9B0B22',
        secondary: '#003DA5',
        'secondary-dark': '#002070',
        cream: '#F8F5F0',
        dark: '#0B1220',
        'dark-2': '#111827',
        'dark-3': '#1C2B45',
        gold: '#E8B94F',
      },
      fontFamily: {
        arabic: ['Cairo', 'sans-serif'],
        english: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 25px 60px rgba(0,0,0,0.12)',
        'premium-lg': '0 40px 80px rgba(0,0,0,0.18)',
        red: '0 20px 50px rgba(200,16,46,0.25)',
        blue: '0 20px 50px rgba(0,61,165,0.2)',
        glass: '0 8px 32px rgba(0,0,0,0.12)',
        'card-hover': '0 30px 60px rgba(0,0,0,0.15)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0B1220 0%, #0D1F3C 60%, #001447 100%)',
        'red-gradient': 'linear-gradient(135deg, #C8102E 0%, #9B0B22 100%)',
        'blue-gradient': 'linear-gradient(135deg, #003DA5 0%, #001F5E 100%)',
        'gold-gradient': 'linear-gradient(135deg, #E8B94F 0%, #C9922A 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0B1220 0%, #111827 100%)',
        'section-gradient': 'linear-gradient(180deg, #F8F9FB 0%, #ffffff 100%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 12s ease infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.4)' },
          '50%': { boxShadow: '0 0 0 14px rgba(37,211,102,0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
