import { useState, useEffect } from 'react'
import { apiRequest } from '@/lib/queryClient'

interface AdminUser {
  id: string
  email: string
  name: string
  role: string
}

export function useAdmin() {
  const [user, setUser] = useState<AdminUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      const response = await apiRequest('GET', '/api/admin/auth/me')
      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
      }
    } catch (error) {
      // User not authenticated
      console.log('Auth check failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const login = (userData: AdminUser) => {
    setUser(userData)
  }

  const logout = async () => {
    try {
      await apiRequest('POST', '/api/admin/auth/logout')
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setUser(null)
    }
  }

  return {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user
  }
}