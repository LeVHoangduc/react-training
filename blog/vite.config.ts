import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      '@': '/src',
      '@pages': '/src/pages',
      '@hooks': '/src/hooks',
      '@constants': '/src/constants',
      '@contexts': '/src/contexts',
      '@components': '/src/components'
    }
  },
  assetsInclude: ['**/*.md']
})
