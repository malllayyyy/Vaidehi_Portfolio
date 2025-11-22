import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use a relative base so built assets are referenced relatively.
// This prevents hosts serving index.html for asset paths from breaking
// module script MIME types when the site isn't served from root.
export default defineConfig({
  base: './',
  plugins: [react()],
})
