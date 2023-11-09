/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '608px',
      laptop: '768px',
      desktop: '928px'
    },
    extend: {
      maxWidth: {
        '38rem': '38rem'
      },
      colors: {
        'custom-white': '#ffffff',
        'custom-black': '#121212',
        'custom-gray': '#9d9d9d',
        'custom-blue': '#268bd2',
        'custom-light': '#eeeeee', // --strong-color
        'custom-dark-gray': '#202020', //--sidebar-bg-color
        'custom-medium-gray': '#909090', //     --sidebar-p-color
        'custom-light-gray': '#9a9a9a', // --date-color
        'custom-light-white': '#DBE2E9', // --title-color-dark-theme
        'custom-light-black': '#515151'
      },
      fontFamily: {
        fira: ['fira sans', 'sans-serif'],
        abril: ['abril fatface', 'serif']
      }
    }
  },
  plugins: []
}
