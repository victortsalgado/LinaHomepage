import bcrypt from 'bcrypt'
import { AdminUser } from '@shared/schema'

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10
  return await bcrypt.hash(password, saltRounds)
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash)
}

export function createAdminSession(user: AdminUser): { user: Omit<AdminUser, 'password'> } {
  const { password, ...userWithoutPassword } = user
  return { user: userWithoutPassword }
}

export function requireAuth(req: any, res: any, next: any) {
  if (!req.session?.user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  next()
}