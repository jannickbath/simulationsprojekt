import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  optimizeDeps: {
    exclude: []
  },
  server: {
    port: 5174,
    host: "0.0.0.0"
  }
})
