const defaultTheme = require('tailwindcss/defaultTheme');
const process = require('process');

module.exports = {
  experimental: {},
  future: {},
  darkMode: 'class',
  important: true,
  purge: {
    enabled: process.env.TAILWIND_MODE === 'build',
    content: ['./src/**/*.{html,scss,ts}'],
    options: {
      safelist: {
        deep: [/^theme/, /^dark/, /^mat/],
      },
    },
  },
  theme: {
    colors: {
      ...defaultTheme.colors,
      'crossrail-gray-pale': '#707070',
      'crossrail-teal': '#2cfffe',
      'crossrail-teal-dark': '#16807f',
      'crossrail-teal-light': '#2cfffe',
      'crossrail-negative': '#fd0d1b',
      'crossrail-negative-dark': '#800008',
      'crossrail-negative-light': '#ff000f',
      'crossrail-mid': '#ffea34',
      'crossrail-mid-dark': '#ff9900',
      'crossrail-mid-light': '#ffea34',
      'crossrail-positive': '#29fd48',
      'crossrail-positive-dark': '#0b4c4e',
      'crossrail-positive-light': '#41f22f',
      'crossrail-open': '#205bdb',
      'crossrail-physical': '#153dbf',
      'crossrail-evidence': '#020e8a',
      'crossrail-closed': '#76777b',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    screens: {
      print: { raw: 'print' },
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1440px',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      flex: {
        0: '0 0 auto',
      },
      opacity: {
        12: '0.12',
        38: '0.38',
        87: '0.87',
      },
      rotate: {
        '-270': '270deg',
        15: '15deg',
        30: '30deg',
        60: '60deg',
        270: '270deg',
      },
      scale: {
        '-1': '-1',
      },
      zIndex: {
        '-1': -1,
        49: 49,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        99: 99,
        999: 999,
        9999: 9999,
        99999: 99999,
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        50: '12.5rem',
        90: '22.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
