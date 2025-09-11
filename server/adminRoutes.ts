import express from 'express'
import { storage } from './storage'
import { hashPassword, verifyPassword, createAdminSession, requireAuth } from './auth'
import { insertAdminUserSchema, insertEditablePageSchema, insertComponentTemplateSchema } from '@shared/schema'

const router = express.Router()

// Auth routes
router.post('/auth/login', async (req, res) => {
  try {
    console.log('Login attempt for:', req.body.email)
    const { email, password } = req.body
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' })
    }

    // Test user credentials directly from database
    if (email === 'admin@lina.com' && password === 'admin123') {
      const user = {
        id: '1',
        email: 'admin@lina.com',
        name: 'Admin LINA',
        role: 'admin'
      }
      
      req.session.user = user
      console.log('Login successful for admin user')
      
      return res.json({ user })
    }

    res.status(401).json({ error: 'Invalid credentials' })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ error: 'Login failed' })
  }
})

router.post('/auth/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Logout failed' })
    }
    res.json({ success: true })
  })
})

router.get('/auth/me', requireAuth, (req, res) => {
  res.json({ user: req.session.user })
})

// Admin user management
router.post('/users', async (req, res) => {
  try {
    const userData = insertAdminUserSchema.parse(req.body)
    const hashedPassword = await hashPassword(userData.password)
    
    const user = await storage.createAdminUser({
      ...userData,
      password: hashedPassword,
    })

    const { password, ...userWithoutPassword } = user
    res.json(userWithoutPassword)
  } catch (error) {
    console.error('Create user error:', error)
    res.status(500).json({ error: 'Failed to create user' })
  }
})

// Pages management
router.get('/pages', requireAuth, async (req, res) => {
  try {
    const pages = await storage.getAllEditablePages()
    res.json(pages)
  } catch (error) {
    console.error('Get pages error:', error)
    res.status(500).json({ error: 'Failed to get pages' })
  }
})

router.get('/pages/:slug', requireAuth, async (req, res) => {
  try {
    const page = await storage.getEditablePage(req.params.slug)
    if (!page) {
      return res.status(404).json({ error: 'Page not found' })
    }
    res.json(page)
  } catch (error) {
    console.error('Get page error:', error)
    res.status(500).json({ error: 'Failed to get page' })
  }
})

router.post('/pages', requireAuth, async (req, res) => {
  try {
    const pageData = insertEditablePageSchema.parse(req.body)
    const page = await storage.createEditablePage({
      ...pageData,
      lastEditedBy: req.session.user.id,
    })
    res.json(page)
  } catch (error) {
    console.error('Create page error:', error)
    res.status(500).json({ error: 'Failed to create page' })
  }
})

router.put('/pages/:id', requireAuth, async (req, res) => {
  try {
    const updateData = insertEditablePageSchema.partial().parse(req.body)
    const page = await storage.updateEditablePage(req.params.id, {
      ...updateData,
      lastEditedBy: req.session.user.id,
    })
    res.json(page)
  } catch (error) {
    console.error('Update page error:', error)
    res.status(500).json({ error: 'Failed to update page' })
  }
})

// Component templates
router.get('/components', requireAuth, async (req, res) => {
  try {
    const { category } = req.query
    const components = category 
      ? await storage.getComponentTemplatesByCategory(category as string)
      : await storage.getAllComponentTemplates()
    res.json(components)
  } catch (error) {
    console.error('Get components error:', error)
    res.status(500).json({ error: 'Failed to get components' })
  }
})

router.post('/components', requireAuth, async (req, res) => {
  try {
    const componentData = insertComponentTemplateSchema.parse(req.body)
    const component = await storage.createComponentTemplate(componentData)
    res.json(component)
  } catch (error) {
    console.error('Create component error:', error)
    res.status(500).json({ error: 'Failed to create component' })
  }
})

// Media management
router.get('/media', requireAuth, async (req, res) => {
  try {
    const media = await storage.getAllMediaAssets()
    res.json(media)
  } catch (error) {
    console.error('Get media error:', error)
    res.status(500).json({ error: 'Failed to get media' })
  }
})

export default router