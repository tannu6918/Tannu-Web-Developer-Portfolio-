/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0a0f',
          100: '#12121a',
          200: '#1a1a26',
          300: '#252533',
        },
        accent: {
          purple: '#8b5cf6',
          blue: '#3b82f6',
          neon: '#60a5fa',
          glow: '#a78bfa',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient':
          'linear-gradient(135deg, #0a0a0f 0%, #1a1033 50%, #0f1729 100%)',
        'text-gradient':
          'linear-gradient(90deg, #a78bfa 0%, #60a5fa 50%, #c084fc 100%)',
        'border-gradient':
          'linear-gradient(135deg, rgba(139,92,246,0.8), rgba(59,130,246,0.8))',
      },
      boxShadow: {
        glow: '0 0 40px rgba(139, 92, 246, 0.3)',
        'glow-blue': '0 0 40px rgba(59, 130, 246, 0.3)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.37)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        blob: 'blob 12s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
    },
  },
  plugins: [],
}
