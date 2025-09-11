import { storage } from './storage'
import { hashPassword } from './auth'

export async function seedInitialData() {
  console.log('🌱 Seeding initial data...')
  
  try {
    // Check if admin user already exists
    const existingAdmin = await storage.getAdminUserByEmail('admin@lina.com')
    
    if (!existingAdmin) {
      // Create default admin user
      console.log('Creating default admin user...')
      const hashedPassword = await hashPassword('admin123')
      
      await storage.createAdminUser({
        email: 'admin@lina.com',
        password: hashedPassword,
        name: 'Administrador Lina',
        role: 'admin'
      })
      
      console.log('✅ Admin user created: admin@lina.com / admin123')
    }
    
    // Check if demo page exists
    const existingPage = await storage.getEditablePage('homepage')
    
    if (!existingPage) {
      // Create demo homepage
      console.log('Creating demo homepage...')
      
      const adminUser = await storage.getAdminUserByEmail('admin@lina.com')
      
      await storage.createEditablePage({
        slug: 'homepage',
        title: 'Homepage - Lina',
        components: [
          {
            id: 'banner-1',
            type: 'banner',
            props: {
              title: 'Bem-vindo à Lina',
              subtitle: 'A melhor solução em fintech para pagamentos PIX e Open Finance',
              backgroundColor: '#00857F',
              textColor: '#ffffff',
              backgroundImage: ''
            },
            order: 0
          },
          {
            id: 'text-1',
            type: 'text',
            props: {
              content: 'A Lina é pioneira em soluções financeiras inovadoras, oferecendo produtos como Data Link, Lina Pay e LinaJSR para transformar a experiência financeira dos brasileiros.',
              fontSize: 'lg',
              textAlign: 'center',
              color: '#374151'
            },
            order: 1
          },
          {
            id: 'button-1',
            type: 'button',
            props: {
              text: 'Conheça Nossos Produtos',
              href: '/produtos',
              variant: 'primary',
              size: 'lg'
            },
            order: 2
          }
        ],
        isPublished: false,
        lastEditedBy: adminUser?.id
      })
      
      console.log('✅ Demo homepage created')
    }
    
    // Create basic component templates
    const existingTemplates = await storage.getAllComponentTemplates()
    
    if (existingTemplates.length === 0) {
      console.log('Creating component templates...')
      
      const templates = [
        {
          name: 'Banner Hero',
          type: 'banner',
          category: 'hero',
          defaultProps: {
            title: 'Título do Banner',
            subtitle: 'Subtítulo opcional',
            backgroundColor: '#3b82f6',
            textColor: '#ffffff'
          }
        },
        {
          name: 'Texto Descritivo',
          type: 'text',
          category: 'content',
          defaultProps: {
            content: 'Seu texto aqui...',
            fontSize: 'md',
            textAlign: 'left',
            color: '#000000'
          }
        },
        {
          name: 'Botão Call-to-Action',
          type: 'button',
          category: 'interaction',
          defaultProps: {
            text: 'Clique aqui',
            href: '#',
            variant: 'primary',
            size: 'md'
          }
        },
        {
          name: 'Imagem com Legenda',
          type: 'image',
          category: 'media',
          defaultProps: {
            src: '',
            alt: 'Imagem',
            width: '100%',
            caption: ''
          }
        }
      ]
      
      for (const template of templates) {
        await storage.createComponentTemplate(template)
      }
      
      console.log('✅ Component templates created')
    }
    
    console.log('🎉 Initial data seeding completed!')
    
  } catch (error) {
    console.error('❌ Error seeding data:', error)
    throw error
  }
}