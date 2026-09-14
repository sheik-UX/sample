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
        putty: {
          DEFAULT: "#c4c3b6",
        },
        ink: {
          DEFAULT: "#000000",
        },
        bone: {
          DEFAULT: "#e7e5e4",
        },
        chalk: {
          DEFAULT: "#ebebeb",
        },
        vellum: {
          DEFAULT: "#dfdcd5",
        },
        graphite: {
          DEFAULT: "#595855",
        },
        ash: {
          DEFAULT: "#808080",
        },
        paper: {
          DEFAULT: "#ffffff",
        },
        terracotta: {
          DEFAULT: "#d97757",
          hover: "#c66445",
          soft: "#f6eee9",
        },
      },
      fontFamily: {
        davinci: ['var(--font-davinci)', 'Georgia', 'serif'],
        helvetica: ['var(--font-helvetica-now)', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'body-sm': ['15px', { lineHeight: '1.5' }],
        'subheading': ['22px', { lineHeight: '1.33', letterSpacing: '-0.11px' }],
        'heading-sm': ['26px', { lineHeight: '1.33', letterSpacing: '-0.13px' }],
        'heading': ['43px', { lineHeight: '1.1', letterSpacing: '-0.215px' }],
        'heading-lg': ['52px', { lineHeight: '1.0', letterSpacing: '-0.47px' }],
        'section-title': ['94px', { lineHeight: '0.84', letterSpacing: '-0.85px' }],
        'display': ['374px', { lineHeight: '0.84', letterSpacing: '-3.37px' }],
      },
      borderRadius: {
        'cards': '9px',
        'links': '2px',
        'buttons': '28.8px',
      },
      spacing: {
        '4': '4px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '36': '36px',
        '40': '40px',
        '52': '52px',
        '60': '60px',
        '80': '80px',
        '96': '96px',
        '168': '168px',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
