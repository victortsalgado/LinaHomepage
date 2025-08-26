# Overview

This is a full-stack TypeScript web application built with React on the frontend and Express on the backend. The application uses a modern tech stack with Vite for build tooling, shadcn/ui for component library, Drizzle ORM for database operations, and PostgreSQL for data persistence. The codebase follows a monorepo structure with shared types and schemas between frontend and backend.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Modern component-based UI built with TypeScript for type safety
- **Vite Build System**: Fast development server and optimized production builds
- **shadcn/ui Component Library**: Pre-built, accessible UI components based on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework for styling with custom design tokens
- **TanStack Query**: Client-side data fetching, caching, and synchronization
- **Wouter**: Lightweight client-side routing library
- **React Hook Form**: Form state management with validation

## Backend Architecture
- **Express.js Server**: RESTful API server with TypeScript
- **Modular Route Structure**: Clean separation of concerns with dedicated route handlers
- **Storage Interface Pattern**: Abstracted data layer supporting multiple storage implementations
- **Development Middleware**: Request logging, error handling, and development tooling

## Data Layer
- **Drizzle ORM**: Type-safe database operations with schema-first approach
- **PostgreSQL**: Primary database using Neon serverless PostgreSQL
- **Shared Schema**: Common type definitions between frontend and backend in `/shared` directory
- **Zod Validation**: Runtime type validation using drizzle-zod integration

## Development Environment
- **TypeScript Configuration**: Strict type checking with path mapping for clean imports
- **ESBuild**: Fast backend compilation for production builds
- **Hot Module Replacement**: Vite HMR for instant frontend updates during development
- **Unified Package Management**: Single package.json managing both frontend and backend dependencies

## Authentication & Session Management
- **Session Store Ready**: PostgreSQL session storage configuration with connect-pg-simple
- **Memory Storage Fallback**: In-memory user storage for development and testing

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: Database migrations and schema management CLI

## Frontend Libraries
- **@tanstack/react-query**: Server state management and data fetching
- **@radix-ui/***: Headless UI primitives for accessibility
- **wouter**: Lightweight routing for React applications
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Validation resolvers for react-hook-form

## UI and Styling
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant management for components
- **clsx**: Conditional className utility
- **lucide-react**: Icon library

## Development Tools
- **vite**: Build tool and development server
- **tsx**: TypeScript execution environment for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling

## Validation and Utilities
- **zod**: Schema validation library
- **date-fns**: Date manipulation library
- **nanoid**: Unique ID generator