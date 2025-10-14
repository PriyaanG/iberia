import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'  // ✅ Use SWC version instead of Babel

export default defineConfig({
  base: '/iberia/', // important for GitHub Pages routing
  plugins: [react()],
})
