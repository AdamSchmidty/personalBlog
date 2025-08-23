# My Markdown Blog

A modern, fast, and feature-rich blog built with Next.js 14, Contentlayer 2, and Tailwind CSS. This project demonstrates how to build a static blog with excellent performance, search functionality, and a great developer experience.

## ✨ Features

- **Next.js 14** with App Router for optimal performance
- **Contentlayer 2** for type-safe content management
- **MDX Support** for enhanced markdown with React components
- **Tailwind CSS** for beautiful, responsive design
- **Search Functionality** powered by Fuse.js
- **Static Generation** for fast loading and SEO
- **TypeScript** for type safety
- **Responsive Design** that works on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd my-markdown-blog
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Adding Blog Posts

1. Create a new `.mdx` file in the `content/posts/` directory
2. Add frontmatter with required fields:

```mdx
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A brief description of your post"
slug: "your-post-slug"
tags: ["tag1", "tag2"]
featured: false
---

# Your Post Content

Write your content in Markdown/MDX format...
```

3. The post will automatically appear in your blog after building.

## 🏗️ Building for Production

```bash
npm run build
```

This will:

- Build the Next.js application
- Generate static pages
- Create the search index for Fuse.js

## 📁 Project Structure

```
my-markdown-blog/
├── content/
│   └── posts/          # Your blog posts (.mdx files)
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── blog/       # Blog listing and individual posts
│   │   ├── about/      # About page
│   │   ├── contact/    # Contact page
│   │   └── layout.tsx  # Root layout with navigation
│   ├── components/     # React components
│   └── types/          # TypeScript type definitions
├── scripts/            # Build scripts
├── public/             # Static assets
├── contentlayer.config.ts  # Contentlayer configuration
└── next.config.js      # Next.js configuration
```

## 🔧 Configuration

### Contentlayer

The `contentlayer.config.ts` file defines the structure of your blog posts. You can modify the fields and add new document types as needed.

### Next.js

The `next.config.js` file is configured for:

- Contentlayer integration
- Static export (`output: 'export'`)
- MDX support
- Image optimization for static export

### Tailwind CSS

Tailwind is configured with a clean, modern design system. You can customize colors, fonts, and other design tokens in `tailwind.config.js`.

## 🔍 Search Functionality

The blog includes a search feature powered by Fuse.js:

- **Fuzzy Search**: Find posts even with typos
- **Multiple Fields**: Searches through titles, excerpts, and tags
- **Real-time Results**: Instant search as you type
- **Build-time Index**: Search index is generated during build for optimal performance

## 📧 Contact Form

The contact form is set up with two options:

1. **Formspree** (Recommended for quick setup):

   - Sign up at [formspree.io](https://formspree.io)
   - Replace `YOUR_FORM_ID` in the contact page code
   - Uncomment the Formspree fetch call

2. **Custom API Route**:
   - Create `src/app/api/contact/route.ts`
   - Implement your own email sending logic
   - Uncomment the custom API route fetch call

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Static Export

The project is configured for static export. You can deploy to any static hosting service:

- Netlify
- GitHub Pages
- AWS S3
- Any CDN

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Features

- **New Pages**: Add routes in `src/app/`
- **Components**: Create reusable components in `src/components/`
- **Types**: Define TypeScript interfaces in `src/types/`
- **Styling**: Use Tailwind CSS classes or extend the config

## 📚 Dependencies

### Core Dependencies

- **Next.js 14**: React framework with App Router
- **Contentlayer 2**: Content SDK for type-safe content
- **React 18**: UI library
- **TypeScript**: Type safety

### UI & Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Fuse.js**: Lightweight fuzzy-search library

### Development

- **ESLint**: Code linting
- **PostCSS**: CSS processing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Contentlayer](https://www.contentlayer.dev/) team for content management
- [Tailwind CSS](https://tailwindcss.com/) team for the utility-first CSS framework
- [Fuse.js](https://fusejs.io/) for the fuzzy search functionality

## 📞 Support

If you have questions or need help:

1. Check the [documentation](https://nextjs.org/docs)
2. Search [existing issues](https://github.com/your-repo/issues)
3. Create a new issue with details about your problem

---

Happy blogging! 🎉
