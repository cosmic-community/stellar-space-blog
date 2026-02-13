# 🚀 Stellar Space Blog

![Stellar Space Blog](https://imgix.cosmicjs.com/6b022b60-091a-11f1-97d7-990452f5e715-photo-1614728894747-a83421e2b9c9-1771014449375.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A stunning, modern space blog built with Next.js 16 and Cosmic CMS. Features dark/light mode support, responsive mobile navigation, and beautiful cosmic-themed design.

## Features

- 🌓 **Dark/Light Mode** - Automatic theme detection with manual toggle
- 📱 **Mobile Navigation** - Slide-out menu with smooth animations
- 🔍 **Category Filtering** - Browse posts by topic
- 👨‍🚀 **Author Profiles** - Dedicated author pages with bio and posts
- 📖 **Markdown Rendering** - Beautiful article formatting
- ⚡ **Server-Side Rendering** - Fast page loads with Next.js App Router
- 🎨 **Cosmic Design** - Space-themed UI with glassmorphism effects

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=698f88f3b866d7fd0e7b62c3&clone_repository=698f8a3cb866d7fd0e7b64e8)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a complete content model for: A space blog with posts, authors, and categories
> 
> Use the install_content_model action to create ALL object types AND demo content in one step. Include:
> 1. All necessary object types with appropriate metafields
> 2. 2-3 demo objects for each type with realistic content
> 3. Unsplash image URLs for thumbnails and file metafields (use real URLs like https://images.unsplash.com/photo-...)
> 
> Remember to create types that are referenced by others FIRST (e.g., categories and authors before blog posts)."

### Code Generation Prompt

> "Next.js, modern, dark mode support, mobile nav"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [Cosmic](https://www.cosmicjs.com/) - Headless CMS
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your space blog content

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Add your Cosmic credentials to `.env.local`:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

5. Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view your space blog.

## Cosmic SDK Examples

### Fetching Posts with Related Data

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all posts with author and category data
const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Post

```typescript
// Fetch a specific post by slug
const { object: post } = await cosmic.objects
  .findOne({ type: 'posts', slug: 'post-slug' })
  .props(['id', 'title', 'slug', 'metadata', 'content'])
  .depth(1)
```

## Cosmic CMS Integration

This blog integrates with three Cosmic object types:

| Object Type | Description | Metafields |
|-------------|-------------|------------|
| Posts | Blog articles | content, featured_image, author, category |
| Authors | Content creators | name, bio, avatar |
| Categories | Topic organization | name, description |

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables

Set these in your hosting platform:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key (optional for read-only)

---

Built with ❤️ using [Cosmic](https://www.cosmicjs.com) and [Next.js](https://nextjs.org)
<!-- README_END -->