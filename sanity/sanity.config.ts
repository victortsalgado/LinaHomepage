import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Lina Blog',
  projectId: 'dw34kfrg',
  dataset: 'production',
  
  vite: {
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
  },
  
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})