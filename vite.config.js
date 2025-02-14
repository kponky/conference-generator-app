import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Group large libraries into separate chunks
          react: ["react", "react-dom"],
          reactRouter: ["react-router-dom"],
          reactIcons: ["react-icons"],
          // Add other large libraries here
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  }
})
