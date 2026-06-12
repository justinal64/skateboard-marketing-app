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
- `src/components/` — presentational components: `Nav`, `Hero`, `Features`, `HowItWorks`, `CTA`, `Footer`, `LegalLayout`. All are Server Components except `CTA` (waitlist form state) and `SmoothScrollProvider`. `Products` and `Team` are unused leftovers from an earlier design.
- Path alias `@/*` resolves to `src/*`.

### Server vs. Client Components

All components default to Server Components. Add `"use client"` only when the component needs state, event handlers, lifecycle hooks, or browser APIs. The `CTA` form currently has an inline `onSubmit` handler — if that grows into real state, extract it to a client component.

### Tailwind v4

Tailwind v4 uses a CSS-first config: `src/app/globals.css` imports Tailwind via `@import "tailwindcss"` and defines theme tokens with `@theme inline`. There is no `tailwind.config.js`. Custom colors are defined as CSS variables in `:root` and exposed via `@theme`.

### Styling Conventions

- Apple-inspired structure with a neon palette: dark navy background (`#0d0d25`), white foreground, `#9a9ac4` muted lavender for secondary copy, cyan accent (`#00ffff`) for links/highlights, magenta (`#ff00ff`) for buttons, `#16163a` surface cards, hairline borders (`#2a2a4a`).
- Typography: sentence-case headlines, `font-semibold tracking-tight`. Hero headline uses a magenta→white→cyan gradient via `bg-clip-text text-transparent`. No all-caps display text.
- Neon glow is allowed only as restrained `box-shadow` on primary buttons and the phone mockup — never as text shadow, and never more than ~0.5 alpha.
- All theme colors are exposed as Tailwind utilities via `@theme` in `globals.css` (`bg-surface`, `text-muted`, `text-accent`, `bg-accent-button`, `border-hairline`).
- Animations use the `motion` library (`motion/react`): shared `Reveal` component (`src/components/Reveal.tsx`) for scroll-triggered fade-ups; `Hero` animates its entrance directly. Don't hand-roll keyframe animations.
- Hover/interactive states use Tailwind utility variants (`hover:`, `group-hover:`, `focus:`) — never inline JS mouse handlers.
- Inline `style` props are used only where Tailwind cannot express the value (e.g., complex radial gradients).
