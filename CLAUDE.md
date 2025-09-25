# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Rapidfire Rachel website - A Next.js 15 application for a freedom advocate and personal protection educator. The site features an e-commerce shop, blog (Arsenal), about section, and contact page.

## Key Technologies

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity Studio (integrated at `/studio`)
- **Theme**: Dark mode only (forced via next-themes)
- **Animations**: Framer Motion
- **Analytics**: Vercel Analytics

## Development Commands

```bash
npm run dev        # Start development server (localhost:3000)
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # TypeScript type checking
```

## Architecture & Key Patterns

### App Router Structure
- All pages use the App Router pattern in `/app` directory
- Root layout (`app/layout.tsx`) wraps entire app with theme provider, navigation, and footer
- Dynamic routes: `app/arsenal/[slug]/page.tsx` for blog posts

### Sanity CMS Integration
- **Studio Route**: `/studio` (accessible via `app/studio/[[...index]]/page.tsx`)
- **Client**: Configured in `sanity/lib/client.ts` with image URL builder
- **Schemas**: Located in `sanity/schemas/` (arsenal-post, category, blockContent)
- **Environment Variables Required**:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`

### Component Organization
- All components in `/components` directory
- Page-specific hero components: `arsenal-hero.tsx`, `shop-hero.tsx`, `about-hero.tsx`
- Shared components: `navigation.tsx`, `footer.tsx`, `theme-provider.tsx`
- Blog/Arsenal components use Sanity data: `arsenal-grid.tsx`, `blog-post.tsx`

### Instagram Integration
- API route at `app/api/instagram/route.ts`
- Requires Instagram Graph API credentials:
  - `INSTAGRAM_ACCESS_TOKEN`
  - `INSTAGRAM_ACCOUNT_ID`

### Image Handling
- Next.js Image component with configured remote patterns for:
  - images.unsplash.com
  - res.cloudinary.com
  - cdn.sanity.io

## Important Files & Locations

- **Sanity Config**: `sanity.config.ts` - Main Sanity configuration
- **Tailwind Config**: `tailwind.config.ts` - Custom theme configuration
- **TypeScript Config**: `tsconfig.json` - Strict mode enabled
- **Environment Variables**: `.env.local` (see `.env.local.example` for template)

## Development Notes

- Dark mode is forced throughout the application
- All pages include comprehensive SEO metadata
- Site uses mobile-first responsive design approach
- Vercel Analytics is integrated for production monitoring
- The shop page is currently a placeholder awaiting Printful integration