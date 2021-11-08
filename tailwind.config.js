const defaultTheme = require('tailwindcss/defaultTheme');
const process = require('process');

module.exports = {
  experimental: {},
  future: {},
  darkMode: 'class',
  important: true,
  purge: {
    enabled: process.env.TAILWIND_MODE === 'build',
    // enabled: true,
    content: ['./src/**/*.{html,scss,ts}'],
    options: {
      safelist: {
        deep: [],
      },
    },
  },
  theme: {
    colors: {
      ...defaultTheme.colors,
      
        transparent: 'transparent',
        current: 'currentColor',
        green: {
            '50': '#f5fcf8', 
            '100': '#eaf9f0', 
            '200': '#cbf0da', 
            '300': '#abe7c3', 
            '400': '#6cd697', 
            '500': '#2dc46a', 
            '600': '#29b05f', 
            '700': '#229350', 
            '800': '#1b7640', 
            '900': '#166034'
        },
        'dairy-cream': {
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FEF7EC',
          '500': '#FBE7C6',
          '600': '#F7D192',
          '700': '#F4BB5D',
          '800': '#F0A529',
          '900': '#D2880F'
        },
    
    },
   
    screens: {
      print: { raw: 'print' },
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1440px',
    }
  
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
};
