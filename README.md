# Clustream

The clustream.tech site. Next.js (App Router), React, TypeScript, Tailwind CSS.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | Purpose                    |
| ------------------- | -------------------------- |
| `npm run build`     | Production build           |
| `npm run start`     | Serve the production build |
| `npm run lint`      | ESLint                     |
| `npm run typecheck` | Route types and TypeScript |
| `npm run format`    | Prettier                   |

## Structure

- `src/app` – routes, layout, global styles and design tokens
- `src/components/home` – landing page sections
- `src/components/layout` – header, mobile menu, footer, logo
- `src/components/ui` – shared building blocks
- `src/components/illustrations` – inline SVG artwork
- `src/config/site.ts` – site details and navigation links
- `clustream-assets` – design brief and source assets
