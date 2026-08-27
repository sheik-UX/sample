/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FDFDFD",
        surface: {
          DEFAULT: "#E5E7EB",
          card: "#FFFFFF",
          muted: "#F4F4F5",
        },
        primary: {
          DEFAULT: "#FF5722",
          hover: "#E64A19",
          light: "#FFF1EC",
        },
        secondary: {
          DEFAULT: "#121212",
        },
        accent: {
          DEFAULT: "#FF5722",
          subtle: "#FFE0D6",
        },
        ink: {
          primary: "#111827",
          secondary: "#4B5563",
          muted: "#9CA3AF",
        },
        border: {
          DEFAULT: "#E5E7EB",
          subtle: "#F3F4F6",
        },
        // Backward-compatible tokens mapped to new palette
        paper: {
          DEFAULT: "#FDFDFD",
          surface: "#F4F4F5",
          muted: "#E5E7EB",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-newsreader)', 'Newsreader', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        card: "16px",
        control: "8px",
        pill: "9999px",
      },
      spacing: {
        base: "8px",
        gap: "16px",
        'card-padding': "24px",
        'section-padding': "80px",
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'subtle-pulse': 'subtle-pulse 3s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 7s ease-in-out 1.5s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'subtle-pulse': {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      boxShadow: {
        card: '0 2px 8px -2px rgba(17, 24, 39, 0.04), 0 1px 3px -1px rgba(17, 24, 39, 0.02)',
        'card-elevated': '0 12px 28px -6px rgba(17, 24, 39, 0.06), 0 4px 10px -2px rgba(17, 24, 39, 0.03)',
        'primary-glow': '0 8px 24px -4px rgba(255, 87, 34, 0.25)',
      },
    },
  },
  plugins: [],
};
