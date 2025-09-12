import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Lina Blog',

  projectId: 'dw34kfrg', // Project ID from Sanity dashboard
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  server: {
    host: '0.0.0.0',
    port: 3000
  },

  schema: {
    types: schemaTypes,
  },
})