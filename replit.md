# Overview

This is a modern full-stack web application for a chess education platform called "Dame Chess Academy". The application provides AI-powered chess learning with features including interactive lessons, puzzles, progress tracking, and enrollment management. The platform targets students, parents, and educational institutions with different pricing tiers and comprehensive chess curriculum.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Styling**: Tailwind CSS with custom CSS variables for theming and brand colors

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for contact forms and enrollment
- **Middleware**: Custom logging middleware for API request tracking
- **Error Handling**: Centralized error handling with proper HTTP status codes

## Data Storage Solutions
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless database connection
- **Schema Management**: Shared schema definitions between client and server
- **Validation**: Zod schemas for runtime type validation and form validation
- **Development Storage**: In-memory storage implementation for development/testing

## Authentication and Authorization
- Currently implements basic user schema structure but no active authentication system
- Prepared for future implementation with user management endpoints
- Session management structure ready with connect-pg-simple for PostgreSQL sessions

## Build and Development Tools
- **Build Tool**: Vite for fast development and optimized production builds
- **Development**: Hot module replacement and development server integration
- **Bundling**: ESBuild for server-side bundling
- **TypeScript**: Strict mode enabled with path mapping for clean imports
- **Code Quality**: ESLint and TypeScript compiler checks

## Project Structure
- **Monorepo Layout**: Shared code between client and server in `/shared` directory
- **Client**: React application in `/client` with organized component structure
- **Server**: Express API in `/server` with modular route handling
- **Database**: Migration files and schema definitions co-located

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-zod**: Integration between Drizzle and Zod for validation

## UI and Design Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework for styling
- **class-variance-authority**: Utility for creating variant-based component APIs
- **lucide-react**: Icon library for consistent iconography

## Development and Build Dependencies
- **vite**: Modern build tool and development server
- **@vitejs/plugin-react**: React support for Vite
- **esbuild**: Fast JavaScript bundler for server builds
- **tsx**: TypeScript execution for development

## Form and Validation Dependencies
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **zod**: TypeScript-first schema validation library

## Additional Utility Dependencies
- **date-fns**: Modern date utility library
- **clsx**: Utility for constructing className strings conditionally
- **nanoid**: Secure URL-friendly unique string ID generator