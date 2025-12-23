import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' 


export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG', '**/*.otf', '**/*.ttf', '**/*.woff', '**/*.woff2'],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})