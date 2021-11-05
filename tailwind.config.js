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
        }
    
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
    extend: {},
  },
  plugins: [],
};
