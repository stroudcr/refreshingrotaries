# Rapidfire Rachel Website

A modern, responsive website for Rapidfire Rachel - Freedom-loving American Woman Encouraging Others to Take an Active Role in Their Personal Protection

## Features

- **Responsive Design**: Mobile-first approach with full responsiveness across all devices
- **Dark Mode**: Automatic theme switching with manual toggle
- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Performance Optimized**: Image optimization, lazy loading, and code splitting
- **SEO Ready**: Full metadata and Open Graph support
- **Animated UI**: Smooth animations with Framer Motion

## Pages

- **Homepage**: Hero section, content highlights, social feed, newsletter signup
- **About**: Personal story, mission statement, journey timeline, photo gallery
- **Shop**: Product grid with categories, Printful integration placeholder
- **Arsenal**: Blog posts, reviews, recommendations with filtering
- **Contact**: Contact form with business inquiry categories

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes for dark mode
- **Deployment**: Ready for Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
rapidfire/
├── app/              # Next.js app router pages
│   ├── about/       # About page
│   ├── arsenal/     # Blog section with dynamic routes
│   ├── contact/     # Contact page
│   ├── shop/        # Shop page
│   └── layout.tsx   # Root layout with navigation
├── components/       # React components
├── public/          # Static assets
└── styles/          # Global styles
```

## Environment Variables

Create a `.env.local` file for environment variables:

```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=
# PRINTFUL_API_KEY=
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push to GitHub
2. Connect to Vercel
3. Deploy with automatic CI/CD

## Future Enhancements

- Printful API integration for real e-commerce
- CMS integration (Sanity/Contentful)
- Email service integration
- Analytics setup
- Social media API integrations

## License

All rights reserved - Rapidfire Rachel