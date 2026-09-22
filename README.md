<<<<<<< HEAD
# ProMan — React Portfolio

A personal portfolio web app built with **React 19**, **Create React App (react-scripts / webpack)** and **Tailwind CSS 3**. No Vite.

## Tech Stack

| Layer      | Tool                      |
| ---------- | ------------------------- |
| UI         | React 19                  |
| Build tool | react-scripts 5 (webpack) |
| Styling    | Tailwind CSS 3 + PostCSS  |
| Animations | Custom CSS keyframes + Intersection Observer reveal hook |

## Project Structure

```
proman-app/
├── public/
│   ├── index.html        # HTML template (fonts, meta, root div)
│   ├── favicon.svg
│   ├── icons.svg
│   └── img/              # Static images served as-is
├── src/
│   ├── index.js          # Entry point (CRA convention)
│   ├── index.css         # Tailwind directives + custom styles
│   ├── App.jsx           # Page layout, composes all sections
│   ├── components/       # One file per section (Navbar, Hero, About,
│   │                     #  Skills, Services, Projects, Team,
│   │                     #  Testimonials, Contact, MapSection,
│   │                     #  Footer, BackToTop)
│   ├── hooks/            # useTyped (typewriter effect)
│   └── assets/           # Imported images
├── tailwind.config.js    # Theme colors, fonts
├── postcss.config.js
└── package.json
```

## Getting Started

Requires **Node.js 18+**. If `node`/`npm` aren't on your PATH (common with default Windows installs), they live in `C:\Program Files\nodejs`.

```bash
cd proman-app
npm install     # first time only
npm start       # dev server → http://localhost:3000 (hot reload)
```

## Available Scripts

| Command         | Description                                      |
| --------------- | ------------------------------------------------ |
| `npm start`     | Start dev server with hot reload                 |
| `npm run build` | Production build → `build/` (minified, hashed)   |
| `npm test`      | Run the test runner                              |
| `npm run eject` | ⚠️ One-way: copies webpack config into project   |

### Serving the production build locally

```bash
npx serve -s build
```

## Styling

Tailwind is configured in `tailwind.config.js`:

- **Custom colors** — `primary` (#6244c5), `secondary` (#ffc448), `light`, `dark` — usable as `bg-primary`, `text-primary`, etc.
- **Custom font** — "Open Sans", loaded from Google Fonts in `public/index.html`.
- **Animations** — typewriter caret, fade-in-up reveal, pulsing play button (in `src/index.css`).

Use Tailwind utility classes in JSX; global styles live in `src/index.css`.

## Customization

- **Content (text, links, projects):** edit the components in `src/components/`.
- **Colors / fonts:** `tailwind.config.js`.
- **Page title, meta tags, fonts:** `public/index.html`.
- **Images:** put files in `public/img/` (referenced by URL, e.g. `/img/profile.png`) or `src/assets/` (imported, bundled & hashed).
=======
# my-portfolio
>>>>>>> 875a2a66b4c570d75571f82279e3c2b08ec52f90
