import { drizzle } from "drizzle-orm/neon-http";
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

import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

// Multi-layered storage: DB → Object Storage → Local JSON → Memory
const memoryStorage = {
  pages: new Map<string, EditablePage>(),
  adminUsers: new Map<string, AdminUser>(),
  componentTemplates: new Map<string, ComponentTemplate>(),
  mediaAssets: new Map<string, MediaAsset>(),
}

const CMS_DATA_DIR = '/tmp/cms-data'
const CMS_DATA_FILE = join(CMS_DATA_DIR, 'cms.json')

// Ensure data directory exists
if (!existsSync(CMS_DATA_DIR)) {
  mkdirSync(CMS_DATA_DIR, { recursive: true })
}

// Load data from file on startup
function loadFromFile(): any {
  try {
    if (existsSync(CMS_DATA_FILE)) {
      const data = JSON.parse(readFileSync(CMS_DATA_FILE, 'utf8'))
      console.log('Loaded CMS data from file')
      return data
    }
  } catch (error) {
    console.error('Error loading CMS data from file:', error)
  }
  return { pages: {}, adminUsers: {}, componentTemplates: {}, mediaAssets: {} }
}

// Save data to file
function saveToFile(data: any): void {
  try {
    writeFileSync(CMS_DATA_FILE, JSON.stringify(data, null, 2))
    console.log('Saved CMS data to file')
  } catch (error) {
    console.error('Error saving CMS data to file:', error)
  }
}

// Initialize from persistent storage and create seed data
const fileData = loadFromFile()
if (fileData.pages) {
  Object.entries(fileData.pages).forEach(([id, page]) => {
    memoryStorage.pages.set(id, page as EditablePage)
  })
} else {
  // Seed initial pages if none exist
  const homePage: EditablePage = {
    id: '1',
    title: 'Home',
    slug: 'home',
    components: JSON.stringify([
      {
        id: 'banner-1',
        type: 'banner',
        props: {
          title: 'Bem-vindo ao LINA',
          subtitle: 'Soluções financeiras inovadoras',
          backgroundColor: '#00EFCF',
          textColor: '#000000'
        },
        order: 0
      }
    ]),
    isPublished: true,
    lastEditedBy: '1',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  
  const aboutPage: EditablePage = {
    id: '2', 
    title: 'Sobre Nós',
    slug: 'sobre',
    components: JSON.stringify([]),
    isPublished: false,
    lastEditedBy: '1',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  
  memoryStorage.pages.set('1', homePage)
  memoryStorage.pages.set('2', aboutPage)
  console.log('Created seed pages: Home and Sobre')
}

if (fileData.adminUsers) {
  Object.entries(fileData.adminUsers).forEach(([id, user]) => {
    memoryStorage.adminUsers.set(id, user as AdminUser)
  })
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
    try {
      const result = await db.insert(editablePages).values(insertPage).returning();
      if (result[0]) {
        memoryStorage.pages.set(result[0].id, result[0]);
        this.persistToFile();
        console.log('Successfully created page in database:', result[0].id);
        return result[0];
      }
    } catch (error) {
      console.log('Database insert failed, creating in fallback storage');
    }
    
    // Fallback creation with generated ID
    const newId = Date.now().toString();
    const newPage = {
      id: newId,
      ...insertPage,
      createdAt: new Date(),
      updatedAt: new Date()
    } as EditablePage;
    
    memoryStorage.pages.set(newId, newPage);
    this.persistToFile();
    console.log('Created page in fallback storage:', newId);
    
    return newPage;
  }

  async updateEditablePage(id: string, updateData: Partial<InsertEditablePage>): Promise<EditablePage> {
    // Layer 1: Try database first
    try {
      const result = await db.update(editablePages)
        .set({ ...updateData, updatedAt: new Date() })
        .where(eq(editablePages.id, id))
        .returning();
      
      if (result[0]) {
        // Update memory cache with DB result
        memoryStorage.pages.set(id, result[0]);
        this.persistToFile();
        console.log('Successfully updated page in database:', id);
        return result[0];
      }
    } catch (error) {
      console.log('Database update failed, falling back to file storage for page:', id);
    }
    
    // Layer 2: Fallback to memory + file persistence
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
    
    // Update memory and persist to file
    memoryStorage.pages.set(id, updated);
    this.persistToFile();
    console.log('Updated page in fallback storage:', id);
    
    return updated;
  }
  
  private persistToFile(): void {
    const data = {
      pages: Object.fromEntries(memoryStorage.pages.entries()),
      adminUsers: Object.fromEntries(memoryStorage.adminUsers.entries()),
      componentTemplates: Object.fromEntries(memoryStorage.componentTemplates.entries()),
      mediaAssets: Object.fromEntries(memoryStorage.mediaAssets.entries()),
    };
    saveToFile(data);
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
