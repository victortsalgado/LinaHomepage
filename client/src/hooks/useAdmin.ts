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
      const response = await apiRequest('/api/admin/auth/me')
      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
      }
    } catch (error) {
      // User not authenticated
    } finally {
      setIsLoading(false)
    }
  }

  const login = (userData: AdminUser) => {
    setUser(userData)
  }

  const logout = async () => {
    try {
      await apiRequest('/api/admin/auth/logout', { method: 'POST' })
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