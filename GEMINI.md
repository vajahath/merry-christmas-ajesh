# Merry Christmas Ajesh - Project Overview

A simple, visually engaging parallax scrolling web application created as a Christmas greeting. 

## Tech Stack
- **Runtime:** [Node.js](https://nodejs.org/)
- **Bundler:** [Vite](https://vite.dev/)
- **Language:** TypeScript
- **Styling:** Vanilla CSS (embedded in `index.html`)

## Project Structure
- `index.html`: Main entry point containing the structure, styles, and content. Also serves as Vite's entry point.
- `index.ts`: TypeScript logic for the parallax scrolling effect.
- `media/`: Contains images used in the parallax layers (WebP and JPG formats).
- `package.json`: Configuration for npm scripts and metadata.
- `tsconfig.json`: TypeScript configuration.
- `dist/`: Output directory for the production build.

## Scripts

| Script | Command | Purpose |
|---|---|---|
| `dev` | `vite` | Live-reloading development server |
| `build` | `vite build` | Production build (output to `dist/`) |
| `preview` | `vite preview` | Serve the production build locally |
| `typecheck` | `tsc --noEmit` | TypeScript type-checking without emitting output |

## Building and Running

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Type Checking
```bash
npm run typecheck
```
