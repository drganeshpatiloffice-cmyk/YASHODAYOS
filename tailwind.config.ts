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
        primary: '#00d9ff',
        secondary: '#ff006e',
        accent: '#8338ec',
        dark: {
          900: '#0a0e27',
          800: '#151a3a',
          700: '#1e2449',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00d9ff 0%, #0066ff 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #ff006e 0%, #ffbe0b 100%)',
        'gradient-accent': 'linear-gradient(135deg, #8338ec 0%, #ff006e 100%)',
      },
      boxShadow: {
        'primary': '0 0 30px rgba(0, 217, 255, 0.3)',
        'secondary': '0 0 30px rgba(255, 0, 110, 0.3)',
        'accent': '0 0 30px rgba(131, 56, 236, 0.3)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(0, 217, 255, 0.7)',
          },
          '50%': {
            boxShadow: '0 0 0 10px rgba(0, 217, 255, 0)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
