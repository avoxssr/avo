import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/avo/',
  plugins: [react()],
  server: {
    port: 16969,
    host: '192.168.1.100',
    allowedHosts: ['avocraft.store']
  }
})
