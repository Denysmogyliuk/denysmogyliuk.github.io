import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// Deployed at the GitHub Pages root (denysmogyliuk.github.io), so base is '/'.
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), svgr()],
  build: {
    target: 'es2020',
    cssCodeSplit: false,
  },
})
