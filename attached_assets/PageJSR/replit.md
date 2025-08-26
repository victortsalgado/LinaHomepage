# Overview

This is a full-stack web application built with React (frontend) and Express.js (backend) using TypeScript. The project appears to be in early development stages with a basic structure for user management and a landing page. It uses modern web development tools including Vite for build tooling, Tailwind CSS for styling, and shadcn/ui for UI components. The application is configured to use PostgreSQL as the database with Drizzle ORM for database operations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation resolvers

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for fast bundling
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Storage**: connect-pg-simple for PostgreSQL session storage

## Data Storage
- **Database**: PostgreSQL (configured for Neon Database serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle migrations with schema defined in shared directory
- **Current Schema**: Basic user table with id, username, and password fields
- **Fallback Storage**: In-memory storage implementation for development/testing

## Authentication & Authorization
- **Session Management**: Express sessions with PostgreSQL storage
- **User Model**: Basic username/password authentication structure
- **Validation**: Zod schemas for data validation on both client and server

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database provider
- **Connection**: @neondatabase/serverless driver for database connectivity

## UI & Component Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel/slider functionality
- **Vaul**: Drawer component library
- **cmdk**: Command palette/search functionality

## Development Tools
- **Vite Plugins**: Runtime error overlay and cartographer for Replit integration
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **Drizzle Kit**: Database migration and introspection tools

## Utility Libraries
- **class-variance-authority**: Type-safe CSS class composition
- **clsx & tailwind-merge**: Conditional CSS class utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **input-otp**: OTP input component functionality

## Build & Runtime
- **ESBuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution for development
- **React Day Picker**: Date picker component
- **React Resizable Panels**: Resizable layout panels