import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Sitio de usuario de GitHub Pages: se sirve desde la raíz (https://nicoCT04.github.io)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
