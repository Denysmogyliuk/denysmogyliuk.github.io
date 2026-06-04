import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed at the GitHub Pages root (denysmogyliuk.github.io), so base is '/'.
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: false,
  },
})
