import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    allowedHosts: [
      '251c97deb844.ngrok-free.app',
      '7eda0f848833.ngrok-free.app'  
    ]
  }
})
