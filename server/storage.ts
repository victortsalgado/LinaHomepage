import { drizzle } from "drizzle-orm/neon-serverless";
import { neon } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { 
  users, adminUsers, editablePages, componentTemplates, mediaAssets,
  type User, type InsertUser, type AdminUser, type InsertAdminUser,
  type EditablePage, type InsertEditablePage, type ComponentTemplate, 
  type InsertComponentTemplate, type MediaAsset, type InsertMediaAsset 
} from "@shared/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Admin user methods
  getAdminUser(id: string): Promise<AdminUser | undefined>;
  getAdminUserByEmail(email: string): Promise<AdminUser | undefined>;
  createAdminUser(user: InsertAdminUser): Promise<AdminUser>;
  
  // Page methods
  getEditablePage(slug: string): Promise<EditablePage | undefined>;
  getEditablePageById(id: string): Promise<EditablePage | undefined>;
  getAllEditablePages(): Promise<EditablePage[]>;
  createEditablePage(page: InsertEditablePage): Promise<EditablePage>;
  updateEditablePage(id: string, page: Partial<InsertEditablePage>): Promise<EditablePage>;
  deleteEditablePage(id: string): Promise<void>;
  
  // Component template methods
  getAllComponentTemplates(): Promise<ComponentTemplate[]>;
  getComponentTemplatesByCategory(category: string): Promise<ComponentTemplate[]>;
  createComponentTemplate(template: InsertComponentTemplate): Promise<ComponentTemplate>;
  
  // Media methods
  getAllMediaAssets(): Promise<MediaAsset[]>;
  createMediaAsset(asset: InsertMediaAsset): Promise<MediaAsset>;
  deleteMediaAsset(id: string): Promise<void>;
}

// In-memory fallback storage
const memoryStorage = {
  pages: new Map<string, EditablePage>(),
  adminUsers: new Map<string, AdminUser>(),
  componentTemplates: new Map<string, ComponentTemplate>(),
  mediaAssets: new Map<string, MediaAsset>(),
}

export class DbStorage implements IStorage {
  // User methods
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  // Admin user methods
  async getAdminUser(id: string): Promise<AdminUser | undefined> {
    const result = await db.select().from(adminUsers).where(eq(adminUsers.id, id)).limit(1);
    return result[0];
  }

  async getAdminUserByEmail(email: string): Promise<AdminUser | undefined> {
    const result = await db.select().from(adminUsers).where(eq(adminUsers.email, email)).limit(1);
    return result[0];
  }

  async createAdminUser(insertUser: InsertAdminUser): Promise<AdminUser> {
    const result = await db.insert(adminUsers).values(insertUser).returning();
    return result[0];
  }

  // Page methods
  async getEditablePage(slug: string): Promise<EditablePage | undefined> {
    const result = await db.select().from(editablePages).where(eq(editablePages.slug, slug)).limit(1);
    return result[0];
  }

  async getEditablePageById(id: string): Promise<EditablePage | undefined> {
    // Check memory first
    if (memoryStorage.pages.has(id)) {
      return memoryStorage.pages.get(id);
    }
    
    try {
      const result = await db.select().from(editablePages).where(eq(editablePages.id, id)).limit(1);
      return result[0];
    } catch (error) {
      console.log('Database query failed for page:', id);
      return undefined;
    }
  }

  async getAllEditablePages(): Promise<EditablePage[]> {
    try {
      const dbPages = await db.select().from(editablePages);
      // Merge with memory pages
      const memoryPagesArray = Array.from(memoryStorage.pages.values());
      
      // Filter out duplicates, giving priority to memory storage
      const allPages = [...dbPages.filter(p => !memoryStorage.pages.has(p.id)), ...memoryPagesArray];
      return allPages;
    } catch (error) {
      console.log('Database query failed, returning memory pages only');
      return Array.from(memoryStorage.pages.values());
    }
  }

  async createEditablePage(insertPage: InsertEditablePage): Promise<EditablePage> {
    const result = await db.insert(editablePages).values(insertPage).returning();
    return result[0];
  }

  async updateEditablePage(id: string, updateData: Partial<InsertEditablePage>): Promise<EditablePage> {
    try {
      const result = await db.update(editablePages)
        .set({ ...updateData, updatedAt: new Date() })
        .where(eq(editablePages.id, id))
        .returning();
      return result[0];
    } catch (error) {
      console.log('Database update failed, using memory storage for page:', id);
      
      // Fallback to memory storage
      const existing = memoryStorage.pages.get(id) || {
        id,
        title: 'Nova Página',
        slug: 'nova-pagina',
        components: '[]',
        isPublished: false,
        lastEditedBy: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      const updated = {
        ...existing,
        ...updateData,
        updatedAt: new Date()
      } as EditablePage;
      
      memoryStorage.pages.set(id, updated);
      return updated;
    }
  }

  async deleteEditablePage(id: string): Promise<void> {
    await db.delete(editablePages).where(eq(editablePages.id, id));
  }

  // Component template methods
  async getAllComponentTemplates(): Promise<ComponentTemplate[]> {
    return await db.select().from(componentTemplates);
  }

  async getComponentTemplatesByCategory(category: string): Promise<ComponentTemplate[]> {
    return await db.select().from(componentTemplates).where(eq(componentTemplates.category, category));
  }

  async createComponentTemplate(insertTemplate: InsertComponentTemplate): Promise<ComponentTemplate> {
    const result = await db.insert(componentTemplates).values(insertTemplate).returning();
    return result[0];
  }

  // Media methods
  async getAllMediaAssets(): Promise<MediaAsset[]> {
    return await db.select().from(mediaAssets);
  }

  async createMediaAsset(insertAsset: InsertMediaAsset): Promise<MediaAsset> {
    const result = await db.insert(mediaAssets).values(insertAsset).returning();
    return result[0];
  }

  async deleteMediaAsset(id: string): Promise<void> {
    await db.delete(mediaAssets).where(eq(mediaAssets.id, id));
  }
}

export const storage = new DbStorage();
