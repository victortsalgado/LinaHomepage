import { AdminUser } from '@shared/schema'

declare module 'express-session' {
  interface SessionData {
    user?: Omit<AdminUser, 'password'>
  }
}