import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Admin users for CMS access
export const adminUsers = pgTable("admin_users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  name: text("name").notNull(),
  role: text("role").notNull().default("editor"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Editable pages for CMS
export const editablePages = pgTable("editable_pages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  components: jsonb("components").notNull(),
  isPublished: boolean("is_published").default(false).notNull(),
  lastEditedBy: varchar("last_edited_by").references(() => adminUsers.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Component templates for drag-drop
export const componentTemplates = pgTable("component_templates", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  type: text("type").notNull(),
  defaultProps: jsonb("default_props").notNull(),
  category: text("category").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Media assets
export const mediaAssets = pgTable("media_assets", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  filename: text("filename").notNull(),
  originalName: text("original_name").notNull(),
  mimeType: text("mime_type").notNull(),
  size: text("size").notNull(),
  url: text("url").notNull(),
  uploadedBy: varchar("uploaded_by").references(() => adminUsers.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertAdminUserSchema = createInsertSchema(adminUsers).omit({
  id: true,
  createdAt: true,
});

export const insertEditablePageSchema = createInsertSchema(editablePages).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertComponentTemplateSchema = createInsertSchema(componentTemplates).omit({
  id: true,
  createdAt: true,
});

export const insertMediaAssetSchema = createInsertSchema(mediaAssets).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertAdminUser = z.infer<typeof insertAdminUserSchema>;
export type AdminUser = typeof adminUsers.$inferSelect;

export type InsertEditablePage = z.infer<typeof insertEditablePageSchema>;
export type EditablePage = typeof editablePages.$inferSelect;

export type InsertComponentTemplate = z.infer<typeof insertComponentTemplateSchema>;
export type ComponentTemplate = typeof componentTemplates.$inferSelect;

export type InsertMediaAsset = z.infer<typeof insertMediaAssetSchema>;
export type MediaAsset = typeof mediaAssets.$inferSelect;
