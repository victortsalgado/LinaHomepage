import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3334,
    allowedHosts: [
      '.replit.dev',
      'localhost'
    ]
  }
})