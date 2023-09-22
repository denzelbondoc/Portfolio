/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
      'monts':['Montserrat']

    },
      
      colors:{
      'nude':'#E2E0D5',
      'storm': '#222C3C',
      'earlgrey': '#A6A6A6',
      'honey': '#D8B26E',
      'owange': '#C78A44',
      'mocha': '#514C4A',
      'softgrey':'DAD5D2'
    },
  }
  },
  plugins: [],
}

