import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',          // <-- Must be './', not '/'
  build: {
    outDir: 'dist',    // Default, but make sure this line is here
  },
})
