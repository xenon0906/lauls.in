# AI Agent Instructions for Lauls.in

## Project Overview
This is a Next.js website for Lauls Private Limited, a steel distribution and logistics company.

## Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **CMS**: Static content in TypeScript files
- **Images**: Cloudinary for optimization

## Development Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Type checking
npm run type-check
```

## Project Structure
```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── about/        # About page components
│   ├── contact/      # Contact page components
│   ├── csr/          # CSR page components
│   ├── distribution/ # Distribution page components
│   ├── electric-truck/ # EV truck components
│   ├── home/         # Homepage components
│   ├── logistics/    # Logistics page components
│   ├── products/     # Products page components
│   └── seo/          # SEO schema components
├── data/             # Static data (blogs, etc.)
├── lib/              # Utility functions and analytics
└── utils/            # Helper utilities
```

## Key Files
- `src/components/seo/Schema.tsx` - All structured data (JSON-LD)
- `src/app/robots.ts` - Robots.txt configuration
- `src/app/layout.tsx` - Root layout with metadata
- `next.config.ts` - Next.js configuration

## SEO Implementation
- Schema.org structured data in `Schema.tsx`
- FAQ schema for featured snippets
- Breadcrumb navigation for GEO
- Open Graph and Twitter cards

## Content Guidelines
- Write concise, factual content
- Use natural language for AI readability
- Include specific numbers and data points
- Avoid marketing fluff in technical content

## Common Tasks
1. **Add new page**: Create component in `src/components/`, add route in `src/app/`
2. **Update schema**: Edit `src/components/seo/Schema.tsx`
3. **Add product**: Update `src/data/products.ts` and create page component
4. **Modify SEO**: Update metadata in page components or `Schema.tsx`

## Testing
- Test on mobile devices
- Verify structured data with Google Rich Results Test
- Check Core Web Vitals in Lighthouse
- Validate AEO score with `npx agentic-seo`

## Documentation Links
- [Next.js Documentation](https://nextjs.org/docs) - Official Next.js docs
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Schema.org](https://schema.org/docs) - Structured data vocabulary
- [Google Search Central](https://developers.google.com/search) - SEO best practices