/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '608px',
      laptop: '768px',
      desktop: '928px',
      extraDesktop: '1600px'
    },
    extend: {
      maxWidth: {
        '38rem': '38rem'
      },
      gridTemplateColumns: {
        extraDesktop: '18rem 48rem 1fr'
      },
      colors: {
        'custom-white': '#ffffff',
        'custom-black': '#121212',
        'custom-gray': '#9d9d9d',
        'custom-blue': '#268bd2',
        'custom-light': '#eeeeee',
        'custom-dark-gray': '#202020',
        'custom-medium-gray': '#909090',
        'custom-light-gray': '#9a9a9a',
        'custom-light-white': '#DBE2E9',
        'custom-light-black': '#515151',
        'custom-dark-blue': '#081b4b'
      },
      fontFamily: {
        fira: ['fira sans', 'sans-serif'],
        abril: ['abril fatface', 'serif']
      }
    }
  },
  plugins: []
}
