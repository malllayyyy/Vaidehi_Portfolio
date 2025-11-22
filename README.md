# Vaidehi Chaudhari — Portfolio (Vite + React + Tailwind)

This workspace is scaffolded with Vite, React and Tailwind. The original JSX component provided was converted into `src/App.jsx` and wired to a Vite entry.

Quick start (Windows PowerShell):

```powershell
cd "c:\Vaidehi dii"
npm install
npm run dev
```

Notes:
- The project uses `lucide-react` for icons and Tailwind for styling.
- After `npm install`, open the dev URL printed by Vite (usually `http://localhost:5173`).
- To build for production: `npm run build` and preview with `npm run preview`.

TypeScript & Deployment
- The project has TypeScript support now (`tsconfig.json`) and entry files in `src/main.tsx` and `src/App.tsx`.
- CI deployment: a GitHub Actions workflow is included at `.github/workflows/deploy.yml` that builds the site and publishes `dist/` to GitHub Pages. Ensure this repo is pushed to GitHub and that `GITHUB_TOKEN` is available (automatically provided for Actions).

If you'd like Vercel/Netlify instead, I can add a `vercel.json` or `netlify.toml` and sample deploy config.

Vercel deployment
- A `vercel.json` file was added to this project to make Vercel builds deterministic. To deploy:

1. Push this repository to GitHub.
2. Go to https://vercel.com and import your GitHub repository (Vercel will detect Vite automatically).
3. Use the default build command: `npm run build` and the output directory: `dist`.
4. Alternatively, install the Vercel CLI and deploy from your machine:

```powershell
npm i -g vercel
cd "c:\Vaidehi dii"
vercel login
vercel --prod
```

Notes:
- The `vercel.json` provides a static-build configuration and a fallback route so client-side routing works.
- If you'd like, I can connect automatic previews for branches, add custom domains, or configure environment variables.

If you want, I can:
- Add TypeScript support
- Configure image optimization or CDN
- Deploy to Netlify/Vercel/GitHub Pages
