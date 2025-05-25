# Marketing - Next.js Application

A modern marketing website built with Next.js 15, featuring a rich text editor, authentication, blog management, and email functionality. This project uses the latest Next.js experimental features and follows best practices for performance and developer experience.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up your environment variables (create `.env.local`)
4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
marketing/
├── .husky/                     # Git hooks for code quality
├── actions/                    # Server actions for backend logic
├── app/                        # Next.js App Router directory
│   ├── (auth)/                # Authentication routes (grouped)
│   │   ├── forgot-password/
│   │   ├── login/
│   │   └── signup/
│   ├── (main)/                # Main application routes
│   │   ├── blogs/
│   │   └── contact/
│   ├── (misc)/                # Miscellaneous routes
│   │   └── unsubscribe/
│   ├── api/                   # API routes
│   │   └── uploadthing/       # File upload endpoints
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout component
│   ├── error.tsx              # Error boundary
│   └── not-found.tsx          # 404 page
├── components/                 # Reusable React components
│   ├── tiptap-extension/      # Custom TipTap editor extensions
│   ├── tiptap-icons/          # Icons for TipTap editor
│   ├── tiptap-node/           # Custom TipTap nodes
│   ├── tiptap-templates/      # Editor templates
│   ├── tiptap-ui/             # TipTap UI components
│   ├── tiptap-ui-primitive/   # Base TipTap UI primitives
│   ├── ui/                    # Shadcn UI components
│   └── uploadthing/           # File upload components
├── emails/                     # React Email templates
├── hoc/                        # Higher-order components
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions and configurations
├── prisma/                     # Database schema and migrations
├── providers/                  # React context providers
├── public/                     # Static assets
├── services/                   # Business logic and external services
├── stores/                     # Zustand state management
└── tests/                      # Test files
```

## ⚙️ Next.js Configuration

The project uses Next.js 15 with several experimental features enabled in `next.config.ts`:

### Key Configuration Features:

- **React Compiler**: Experimental React compiler for better performance
- **PPR (Partial Prerendering)**: Enables partial prerendering for improved loading
- **Dynamic IO**: Experimental feature for dynamic imports optimization
- **Image Optimization**: Configured to allow images from any hostname
- **Console Removal**: Removes console logs in production (except error, info, warn)

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "**" }],
  },
  experimental: {
    reactCompiler: true,
    ppr: true,
    dynamicIO: true,
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "info", "warn"] }
        : false,
  },
};
```

## 🛠️ Tech Stack

### Core Framework

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript

### UI & Styling

- **Tailwind CSS 4** - Utility-first CSS framework
- **Sass** - CSS preprocessor
- **Radix UI** - Headless UI components for accessibility
- **Shadcn/ui** - Beautiful, reusable components built on Radix
- **Lucide React** - Beautiful & consistent icon library
- **next-themes** - Theme switching functionality

### Rich Text Editor

- **TipTap** - Headless editor framework with extensive customization
  - Custom nodes, extensions, and UI components
  - Image upload and management
  - Code blocks, lists, and formatting options

### State Management & Data Fetching

- **Zustand** - Lightweight state management
- **TanStack Query (React Query)** - Server state management and caching
- **React Hook Form** - Performant forms with easy validation

### Database & Backend

- **Prisma** - Type-safe database ORM
- **Server Actions** - Next.js server-side functions
- **UploadThing** - File upload service

### Validation & Forms

- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Form validation integration

### Email

- **React Email** - Build emails using React components
- **@react-email/components** - Pre-built email components

### Development Tools

- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **Husky** - Git hooks for code quality
- **Jest** - Testing framework
- **@testing-library/react** - React component testing

### Utilities

- **clsx** - Conditional className utility
- **tailwind-merge** - Merge Tailwind classes intelligently
- **date-fns** - Modern date utility library
- **class-variance-authority** - Component variant management

## 🎯 Key Features

- **Authentication System** - Complete auth flow with login/signup
- **Blog Management** - Create, edit, and manage blog posts
- **Rich Text Editor** - Powerful TipTap-based editor with custom components
- **File Upload** - Image and file upload functionality
- **Email Templates** - React-based email system
- **Theme Support** - Dark/light mode switching
- **Responsive Design** - Mobile-first responsive layout
- **Type Safety** - Full TypeScript coverage
- **Performance Optimized** - Server components, code splitting, and caching

## 📝 Development Guidelines

### Component Structure

- Create multiple small components instead of large ones
- Prefer Shadcn UI components over building from scratch
- Use React Server Components (RSC) for better performance
- Always use `kebab-case` for files/folders, `PascalCase` for components

### Code Quality

- Write unit tests for new components and actions
- Use server actions for backend interactions
- Prefer `/actions` over `/api` routes (except for webhooks)
- Use `zod` schemas for validation
- Follow the established folder structure

### Performance

- Implement code splitting for optimal loading
- Use `Suspense` with skeleton components for async operations
- Leverage Next.js caching strategies

## 🧪 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run email:dev` - Start email development server

## 🚀 Deployment

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [TipTap Documentation](https://tiptap.dev/) - Rich text editor framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Prisma Documentation](https://www.prisma.io/docs) - Database ORM
- [Shadcn/ui](https://ui.shadcn.com/) - Component library
