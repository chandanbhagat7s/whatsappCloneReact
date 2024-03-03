


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  server: {
    proxy: {
      // "/api": "http://192.168.0.106:8000",
      "/api": "http://",
    }
  },
  plugins: [react()],
})
