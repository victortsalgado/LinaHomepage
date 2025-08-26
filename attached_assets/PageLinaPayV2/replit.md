# Overview

This is a full-stack web application built with React, TypeScript, and Express.js. The project appears to be for a fintech service called "Lina Pay" that offers payment solutions including biometric PIX payments for e-commerce. The application uses a modern tech stack with ShadCN UI components for the frontend and Drizzle ORM for database management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: ShadCN UI library with Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

## Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Build Tool**: ESBuild for server bundling
- **Development**: TSX for TypeScript execution in development

## Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for PostgreSQL via Neon Database (@neondatabase/serverless)
- **Schema**: Centralized schema definition in shared folder with Zod validation
- **Migrations**: Drizzle Kit for database migrations

## Project Structure
- **Monorepo**: Single repository with client, server, and shared code
- **Client**: React frontend in `/client` directory
- **Server**: Express backend in `/server` directory  
- **Shared**: Common types and schemas in `/shared` directory
- **Component System**: Organized UI components in `/client/src/components/ui`

## Development Workflow
- **Type Safety**: Full TypeScript coverage across frontend and backend
- **Code Sharing**: Shared types and validation schemas between client and server
- **Hot Reload**: Vite HMR for frontend development
- **Path Aliases**: Configured for clean imports (@/ for client, @shared for shared code)

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL hosting
- **Connection**: Via @neondatabase/serverless driver
- **ORM**: Drizzle ORM for type-safe database operations

## UI Framework
- **ShadCN UI**: Pre-built accessible React components
- **Radix UI**: Headless UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

## Development Tools
- **Vite**: Frontend build tool and development server
- **TSX**: TypeScript execution for Node.js
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## State Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition

## Replit Integration
- **Cartographer**: Replit-specific development tooling
- **Runtime Error Modal**: Development error handling
- **Development Banner**: Replit branding integration