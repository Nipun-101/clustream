# Clustream

Mobile-first Next.js app (App Router, React, TypeScript, Tailwind CSS).

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

- `src/app` – routes, layout, global styles
- `src/components/shell` – header, sidebar, bottom tab bar
- `src/config/site.ts` – app name and navigation items
