# BackstagePass — 9-Day Fitness Challenge UI

A pixel-perfect, responsive React page recreating a "9-Day Fitness Challenge" dashboard from a Figma design. Built with Vite, TypeScript, and CSS Modules. No external UI libraries — every component is hand-crafted for full visual control.

**Live:** Deployed on Vercel  
**Stack:** Vite + React 18 + TypeScript + CSS Modules

---

## Development Plan

### 1. Component Structure & Organization

The project follows a feature-based component architecture. Each component is self-contained with its own `.tsx` and `.module.css` file, making styles scoped and easy to maintain.

```
src/
  App.tsx                           — Root component, composes the full page
  main.tsx                          — Entry point, mounts App with global styles
  styles/
    globals.css                     — CSS reset, custom properties (theme tokens)
  context/
    ThemeContext.tsx                 — React context for light/dark mode state
  data/
    mockData.ts                     — Static mock data for all UI content
  types/
    index.ts                        — Shared TypeScript interfaces
  components/
    Layout/
      PageLayout.tsx/.module.css    — CSS Grid shell (header, sub-header, sidebar, main)
    Header/
      Header.tsx/.module.css        — Top bar: logo, streak badge, bell, theme toggle, avatar
    SubHeader/
      SubHeader.tsx/.module.css     — Navigation: back button, day counter, challenge title
    Sidebar/
      Sidebar.tsx/.module.css       — Day list with active/locked states, blurred background
    Feed/
      FeedPostCard.tsx/.module.css          — Reusable post card (author, text, media, reactions)
      SubscriberPostCard.tsx/.module.css    — "Your Submission" wrapper with confetti header
      ConfettiHeader.tsx/.module.css        — SVG confetti decoration + CSS animation
      ReactionBar.tsx/.module.css           — Emoji reactions, add-reaction, comment count
      CommunitySection.tsx/.module.css      — "See what others shared" section header
      PinnedPost.tsx/.module.css            — Pinned challenge post with numbered steps
```

**Key principles:**
- Each component handles one responsibility
- Shared types live in `types/index.ts`, mock data in `data/mockData.ts`
- No prop drilling beyond one level — flat composition in `App.tsx`
- CSS Modules ensure zero class name collisions across components

### 2. Approach to Building UI Elements

**Bottom-up construction** — atomic pieces first, then composed into the full page:

1. **Global foundation** — CSS reset, Inter font, full set of design tokens as CSS custom properties (colors, spacing, typography, radii, shadows)
2. **Layout shell** — `PageLayout` uses CSS Grid with named areas (`header | subheader | sidebar | main`) to establish the page structure
3. **Atomic components** — `ReactionBar`, `ConfettiHeader` built independently
4. **Composite components** — `FeedPostCard` composes author header + content + media + ReactionBar. `SubscriberPostCard` wraps ConfettiHeader + FeedPostCard
5. **Page composition** — `App.tsx` wires everything together with state for day selection

**Static/mock data only** — all content comes from `mockData.ts`. No API calls, no backend. Components receive data via props with typed interfaces.

**SVG icons** — all icons (logo, bell, lock, checkmark, play, pin, chevron, info, three-dots, moon/sun) are inline SVGs for crisp rendering at any size without external dependencies.

### 3. Responsiveness Strategy

Three breakpoints with a desktop-first approach:

| Breakpoint | Layout |
|---|---|
| >= 1024px | Full sidebar (260px) + centered main content (max 700px) |
| 768px — 1023px | Compact sidebar (64px, day numbers only) + wider content |
| < 768px | No sidebar column — horizontal scrollable day strip above content |

**Implementation details:**
- `PageLayout` switches from 2-column CSS Grid to single-column on mobile
- Sidebar transforms from vertical list to horizontal scrollable pills on mobile
- Header hides logo text below 480px, tightens action gaps on mobile
- SubHeader hides challenge title on mobile to prevent overflow
- Card media goes edge-to-edge on mobile (negative margins cancel padding)
- All spacing uses `rem` for scalability; images use `max-width: 100%`
- Touch targets are at least 36px on mobile

### 4. Light & Dark Mode Support

**CSS custom properties** power the entire theming system:

- All colors are defined as CSS variables on `:root` (light) and `[data-theme="dark"]` (dark)
- `ThemeContext` (React context) manages the current theme and persists to `localStorage`
- On mount, it checks `localStorage` first, then falls back to `prefers-color-scheme` media query
- Toggling writes `data-theme` attribute on `<html>`, which instantly swaps all token values
- A moon/sun icon button in the header toggles the mode

**Token categories:**
- Backgrounds: `--bg-primary`, `--bg-card`, `--bg-sidebar`, `--bg-header`, `--bg-hover`, `--bg-input`
- Text: `--text-primary`, `--text-secondary`, `--text-tertiary`
- Accent: `--accent-green`, `--accent-green-text`, `--accent-green-light`
- Borders: `--border-color`, `--border-light`, `--border-card`
- Shadows: `--shadow-card`, `--shadow-sidebar-active`, `--shadow-header`

Dark mode adjusts all tokens for proper contrast — darker backgrounds, lighter text, stronger shadows, slightly desaturated accents.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output goes to `dist/` — ready for Vercel deployment.
