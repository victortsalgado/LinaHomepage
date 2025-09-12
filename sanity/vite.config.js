import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: [
      '9835bf82-bc7e-4a32-88ae-0b2c471e48cd-00-3271k7ew19wun.kirk.replit.dev',
      '.replit.dev',
      'localhost',
      'all'
    ]
  }
})