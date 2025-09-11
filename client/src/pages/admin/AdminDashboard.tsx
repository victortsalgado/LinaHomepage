import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Settings, FileText, Image, Users, LogOut, Edit } from 'lucide-react'
import { apiRequest } from '@/lib/queryClient'
import PageEditor from './PageEditor'

interface AdminUser {
  id: string
  email: string
  name: string
  role: string
}

interface EditablePage {
  id: string
  slug: string
  title: string
  components: any[]
  isPublished: boolean
  createdAt: string
  updatedAt: string
}

interface AdminDashboardProps {
  user: AdminUser
  onLogout: () => void
}

export default function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const [currentView, setCurrentView] = useState<'dashboard' | 'edit-page'>('dashboard')
  const [selectedPage, setSelectedPage] = useState<EditablePage | null>(null)
  const queryClient = useQueryClient()

  // Fetch pages
  const { data: pages = [], isLoading } = useQuery({
    queryKey: ['/api/admin/pages'],
    queryFn: async () => {
      const response = await apiRequest('/api/admin/pages')
      if (response.ok) {
        return await response.json()
      }
      throw new Error('Failed to fetch pages')
    }
  })

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest('/api/admin/auth/logout', {
        method: 'POST'
      })
      if (!response.ok) throw new Error('Logout failed')
    },
    onSuccess: () => {
      queryClient.clear()
      onLogout()
    }
  })

  const handleEditPage = (page: EditablePage) => {
    setSelectedPage(page)
    setCurrentView('edit-page')
  }

  const handleBackToDashboard = () => {
    setCurrentView('dashboard')
    setSelectedPage(null)
    queryClient.invalidateQueries({ queryKey: ['/api/admin/pages'] })
  }

  if (currentView === 'edit-page' && selectedPage) {
    return <PageEditor page={selectedPage} onBack={handleBackToDashboard} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-gray-900">
                Lina CMS Admin
              </h1>
              <Badge variant="secondary">{user.role}</Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Olá, {user.name}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => logoutMutation.mutate()}
                disabled={logoutMutation.isPending}
                data-testid="button-logout"
              >
                <LogOut className="w-4 h-4 mr-2" />
                {logoutMutation.isPending ? 'Saindo...' : 'Sair'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Páginas</p>
                  <p className="text-2xl font-bold text-gray-900">{pages.length}</p>
                </div>
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Publicadas</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {pages.filter(p => p.isPublished).length}
                  </p>
                </div>
                <Settings className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Rascunhos</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {pages.filter(p => !p.isPublished).length}
                  </p>
                </div>
                <Image className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Admin</p>
                  <p className="text-2xl font-bold text-gray-900">1</p>
                </div>
                <Users className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pages List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Páginas Editáveis</span>
              <Button size="sm" data-testid="button-new-page">
                + Nova Página
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Carregando páginas...</p>
              </div>
            ) : pages.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Nenhuma página criada ainda</p>
                <Button className="mt-4" data-testid="button-create-first-page">
                  Criar Primeira Página
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {pages.map((page: EditablePage) => (
                  <div 
                    key={page.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-medium text-gray-900">{page.title}</h3>
                        <Badge 
                          variant={page.isPublished ? "default" : "secondary"}
                          data-testid={`status-${page.slug}`}
                        >
                          {page.isPublished ? 'Publicada' : 'Rascunho'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        /{page.slug} • Atualizada em {new Date(page.updatedAt).toLocaleDateString('pt-BR')}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditPage(page)}
                        data-testid={`button-edit-${page.slug}`}
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Editar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}