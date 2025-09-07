# LINA Homepage Project

## Overview

A modern React-based web application for LINA, a fintech company specializing in PIX payments and Open Finance solutions. The project features a sophisticated homepage showcasing LINA's products including Data Link, Lina Pay, and LinaJSR with a focus on Brazilian financial technology solutions. Built with a modern tech stack emphasizing performance, responsive design, and pixel-perfect implementation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18+ with TypeScript for type safety and better development experience
- **Build Tool**: Vite for fast development builds and hot module replacement
- **Styling**: Tailwind CSS with CSS variables for theming, complemented by Radix UI components for accessibility
- **Component Library**: shadcn/ui components built on top of Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state and React hooks for local state

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Development Setup**: Custom Vite middleware integration for seamless development experience
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **API Structure**: RESTful endpoints with `/api` prefix routing

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Driver**: Neon Database serverless driver for cloud-native PostgreSQL
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Schema Validation**: Zod integration with Drizzle for runtime type validation

### Component Structure
- **Layout Components**: Header with responsive navigation, Footer with company information
- **Page Sections**: Modular homepage sections (Hero, Data Link, Lina Pay, Regulated Entities, Clients, Blog)
- **UI Components**: Comprehensive design system with consistent spacing, typography, and color schemes
- **Responsive Design**: Mobile-first approach with breakpoint-specific optimizations

### Styling and Theming
- **CSS Framework**: Tailwind CSS with custom configuration for LINA brand colors
- **Theme System**: CSS custom properties for consistent color scheme across components
- **Typography**: Poppins font family for modern, clean appearance
- **Design Tokens**: Centralized color palette with primary cyan (#00EFCF) and dark navy theme

### Development and Build Process
- **Development Server**: Vite dev server with Express middleware for full-stack development
- **Build Pipeline**: Separate frontend (Vite) and backend (esbuild) build processes
- **TypeScript Configuration**: Strict type checking with path mapping for clean imports
- **Asset Management**: Optimized image loading with proper alt text for accessibility

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18+, React DOM, React Router (Wouter)
- **Build Tools**: Vite with TypeScript support and React plugin
- **Development Tools**: tsx for TypeScript execution, esbuild for server bundling

### UI and Styling
- **Component Library**: Radix UI primitives for accessible, unstyled components
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Lucide React for consistent iconography
- **Utilities**: clsx and tailwind-merge for conditional styling

### Backend and Database
- **Server Framework**: Express.js with TypeScript support
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Driver**: Neon Database serverless driver
- **Session Management**: express-session with PostgreSQL store

### State Management and API
- **Server State**: TanStack React Query for API state management
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for schema validation and type inference

### Development and Quality
- **TypeScript**: Strict type checking across frontend and backend
- **Error Handling**: Custom error overlays for development
- **Code Quality**: Consistent import paths and modular architecture

## Recent Changes

- Updated gradient colors to exact brand specifications (#00857F to #2EC9BC) across all text gradients
- Standardized all buttons site-wide to use rounded-full corners following Data Link section model
- Applied consistent margin pattern (py-48 md:py-64 lg:py-80, px-12 lg:px-16) to box-structured sections
- Updated ValuePropositionSection, DifferentiatorsSection, FeaturesSection, and other key sections with standardized spacing
- Completed comprehensive UI consistency implementation across Home, DataLink, LinaPay, JSR, and QuemSomos pages
- **January 7, 2025**: Implemented universal section margin standardization based on Data Link/Lina Pay home sections pattern. All sections now use py-48 md:py-64 lg:py-80 for consistent vertical spacing between sections across the entire website.
- **January 7, 2025**: Updated all dark backgrounds to pure black (#000000). Changed --lina-dark CSS variable from hsl(183, 82%, 9%) to #000000 and replaced all bg-gray-900 and bg-gray-800 background classes with bg-black for stronger visual contrast.