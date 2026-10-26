import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy to a subpath (e.g. GitHub Pages), set base: '/your-repo-name/'
export default defineConfig({
  plugins: [react()],
})
