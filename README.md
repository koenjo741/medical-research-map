# Medical Research Resources Map

A curated, interactive dashboard of medical research databases, AI tools, literature management systems, and academic writing resources.

## Live Demo

Deploy with any static hosting provider (Netlify, Vercel, GitHub Pages, etc.).

## Features

- **Multi-column layout** – 7 categorised columns for quick visual scanning
- **Colour-coded cards** – Left border indicates access type (free, university, hospital, VPN)
- **Tooltips** – Hover any card for a description
- **Live search** – Instant filtering across all cards
- **Responsive** – Adapts from 7 columns down to single-column on mobile
- **Zero dependencies** – Pure HTML, CSS, and JavaScript

## Project Structure

```
index.html    – Semantic HTML shell
style.css     – Complete design system (CSS custom properties)
data.js       – Single data source (all cards, categories, legend)
script.js     – Rendering, tooltip, and search logic
```

## Usage

1. Clone the repository
2. Open `index.html` in a browser – no build step required
3. To add/edit resources, modify `data.js`

## Deployment (Netlify)

1. Push to GitHub
2. Connect the repo on [Netlify](https://app.netlify.com/)
3. Set publish directory to `/` (root)
4. Deploy – done!

## Licence

MIT
