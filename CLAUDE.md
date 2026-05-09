# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Next.js Version

This project uses **Next.js 16**, which has breaking changes from earlier versions. APIs, conventions, and file structure may differ from training data. Before writing any code, check `node_modules/next/dist/docs/` for the correct APIs. Heed deprecation notices.

## Commands

```bash
npm run dev       # start dev server at http://localhost:3000
npm run build     # production build
npm run start     # serve the production build
npm run lint      # ESLint
npx tsc --noEmit  # type-check without emitting
```

There is no test suite configured yet.

## Architecture

**Next.js 16 App Router** with **React 19** and **Tailwind CSS v4**.

- `src/app/` — file-system routes. `layout.tsx` is the root shell; `page.tsx` composes the landing page from components.
- `src/components/` — presentational components: `Nav`, `Hero`, `Products`, `Team`, `CTA`, `Footer`. All are currently Server Components.
- Path alias `@/*` resolves to `src/*`.

### Server vs. Client Components

All components default to Server Components. Add `"use client"` only when the component needs state, event handlers, lifecycle hooks, or browser APIs. The `CTA` form currently has an inline `onSubmit` handler — if that grows into real state, extract it to a client component.

### Tailwind v4

Tailwind v4 uses a CSS-first config: `src/app/globals.css` imports Tailwind via `@import "tailwindcss"` and defines theme tokens with `@theme inline`. There is no `tailwind.config.js`. Custom colors are defined as CSS variables in `:root` and exposed via `@theme`.

### Styling Conventions

- Dark-first design: base background `#0a0a0a`, primary accent `orange-500` (`#f97316`).
- Hover/interactive states use Tailwind utility variants (`hover:`, `group-hover:`).
- Inline `style` props are used only where Tailwind cannot express the value (e.g., complex radial gradients).
