# 🎄 Merry Christmas, Ajesh! [![Deploy to GitHub Pages](https://github.com/vajahath/merry-christmas-ajesh/actions/workflows/deploy.yml/badge.svg)](https://github.com/vajahath/merry-christmas-ajesh/actions/workflows/deploy.yml)

A visually stunning, mobile-friendly Christmas greeting web application built with a modern parallax scrolling feel and festive animations.

## 🛠️ Tech Stack

-   **Runtime:** [Node.js](https://nodejs.org/)
-   **Bundler:** [Vite](https://vite.dev/)
-   **Language:** TypeScript
-   **Styling:** Vanilla CSS (embedded in `index.html`)

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/vajahath/merry-christmas-ajesh.git
    cd merry-christmas-ajesh
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run locally**:
    ```bash
    npm run dev
    ```

## 📜 Available Scripts

| Script | Command | Purpose |
|---|---|---|
| `dev` | `vite` | Start live-reloading development server |
| `build` | `vite build` | Generate production build in `dist/` |
| `preview` | `vite preview` | Serve the production build locally |
| `typecheck` | `tsc --noEmit` | TypeScript type-checking |

## 📦 Deployment

This project is configured for **GitHub Pages** deployment via GitHub Actions.
Check `.github/workflows/deploy.yml` for the CI/CD pipeline configuration.

## 📁 Project Structure

```text
├── .github/workflows/   # CI/CD deployment logic
├── media/               # Festive images and memories
├── index.html           # Main structure and styles
├── index.ts             # TypeScript logic and animations
├── vite.config.ts       # Vite configuration
└── package.json         # Scripts and dependencies
```
