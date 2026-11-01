# React Todo App — Platzi Intro Course

A small Todo application built while following the **Platzi "Intro to React" course**. Originally scaffolded with Create React App, migrated to **Vite + React 19** for a faster, modern dev experience.

## Live Demo

**https://hjuanma.github.io/curso-react-intro/**

## Tech Stack

- **React 19** — latest React with concurrent features
- **Vite 5** — lightning-fast build tool and dev server
- **React Icons** — icon library
- **gh-pages** — GitHub Pages deployment
- **ESLint** — linting with React and import plugins

## Getting Started

### Prerequisites

- Node.js 18+ (React 19 requirement)
- npm or pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/Hjuanma/curso-react-intro.git
cd curso-react-intro

# Install dependencies
npm install

# Start dev server (runs on http://localhost:3000/curso-react-intro/)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
src/
├── App/              # Main app component + UI
├── TodoContext/      # React Context + localStorage hook
├── TodoForm/         # Form for creating/editing todos
├── TodoItem/         # Individual todo item
├── TodoList/         # List rendering + filtering
├── TodoInput/        # Input for filtering todos
├── TodoCounter/      # Completed/total counter
├── TodoLoading/      # Loading skeleton
├── TodoError/        # Error boundary UI
├── EmptyTodoList/    # Empty state
├── CreateTodo/       # FAB to open modal
├── Modal/            # Portal-based modal
├── TodoIcon/         # SVG icon wrapper (check/delete)
├── CheckIcon/        # Check mark icon
├── DeleteIcon/       # Delete icon
├── TodoIcon/         # Shared icon component
├── index.jsx         # Entry point
├── index.css         # Global styles
└── App.css           # App-specific styles
```

## Migration: Create React App to Vite + React 19

### Why migrate?

Create React App (CRA) is **deprecated** and unmaintained. Its last stable release (`react-scripts@5`) only supports **React 18**. To use React 19, we needed a modern bundler — **Vite** is the natural successor.

### What changed

| Aspect | Before (CRA) | After (Vite) |
|--------|--------------|--------------|
| Bundler | webpack (via react-scripts) | Vite (Rollup + esbuild) |
| Dev server | ~3-5s startup | ~150ms startup |
| React version | 18.x | **19.x** |
| Config | Hidden (eject to customize) | `vite.config.js` — explicit, simple |
| JSX transform | Automatic (`.js` OK) | Requires `.jsx` extension |
| SVG as component | `@svgr/webpack` (CRA built-in) | `@svgr/rollup` plugin |
| Public folder | `public/` served as-is | `public/` copied to `dist/` |
| HTML template | `public/index.html` with `%PUBLIC_URL%` | Root `index.html` with `/base/` paths |
| Base path (GH Pages) | `homepage` in package.json | `base` in `vite.config.js` |

### Step-by-step migration

1. **Update `package.json`**
   - Remove `react-scripts`
   - Add `vite`, `@vitejs/plugin-react`, `@svgr/rollup`
   - Change scripts: `start → dev`, `build → vite build`, add `preview`
   - Add `"type": "module"` for native ESM

2. **Create `vite.config.js`**
   ```js
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import svgr from '@svgr/rollup';

   export default defineConfig({
     plugins: [react(), svgr()],
     base: '/curso-react-intro/',   // GitHub Pages subpath
     build: { outDir: 'dist' },     // gh-pages expects 'dist'
     server: { port: 3000, open: true },
   });
   ```

3. **Move `index.html` to project root**
   - Replace `%PUBLIC_URL%` with absolute paths (`/curso-react-intro/...`)
   - Point script to `/src/index.jsx`
   - Keep `<div id="root"></div>` and `<div id="modal"></div>`

4. **Rename all JSX files to `.jsx`**
   Vite only transforms JSX in `.jsx`/`.tsx` files by default.
   ```bash
   # Example (run for each file containing JSX)
   mv src/index.js src/index.jsx
   mv src/App/index.js src/App/index.jsx
   # ...etc for all components
   ```

5. **Update imports in `index.html`**
   ```html
   <script type="module" src="/src/index.jsx"></script>
   ```

5. **Configure SVGR for SVG imports**
   - Install `@svgr/rollup`
   - Add to Vite plugins
   - Existing `import { ReactComponent as X } from './icon.svg'` works unchanged

6. **Fix eslint peer dependency conflict**
   `eslint-plugin-import@2.32` requires ESLint ≤9, but we use ESLint 10.
   Downgraded to `eslint-plugin-import@^2.31.0` (or use `--legacy-peer-deps`).

7. **Update `gh-pages` deploy**
   - Build output moved from `build/` → `dist/`
   - Script: `gh-pages -d dist`

8. **Clean up**
   - Remove `public/index.html` (now at root)
   - Remove `react-scripts` from lockfile
   - `npm install` fresh

### Gotchas encountered

- **JSX in `.js` files** — Vite doesn't transform them. Fix: rename to `.jsx`.
- **SVG `ReactComponent` import** — Needs `@svgr/rollup` plugin.
- **Base path for GitHub Pages** — Must match in `vite.config.js` (`base`) and `package.json` (`homepage`).
- **ESLint peer deps** — `eslint-plugin-import@2.32.0` conflicts with ESLint 10. Use `^2.31.0` or `--legacy-peer-deps`.

## Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server (port 3000) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview `dist/` locally |
| `npm run deploy` | Build + push `dist/` to `gh-pages` branch |

## Git Workflow

- `main` — source code
- `gh-pages` — auto-generated by `gh-pages` package (do not edit manually)
- `upstream` remote — original Platzi repo (for syncing course updates)

```bash
# Sync with upstream (Platzi)
git fetch upstream
git merge upstream/main
```

## License

MIT — feel free to use for learning or as a starter.

---

*Built with care while learning React at Platzi. Migrated to Vite + React 19 for the speed.*