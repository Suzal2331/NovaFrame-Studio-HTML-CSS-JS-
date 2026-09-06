# ✨ NovaFrame Studio

A polished, animated landing page for a fictional creative studio — built with plain HTML, CSS, and JavaScript (no frameworks). Designed to look like a premium agency site: glassmorphism cards, a looping 3D Blender hero animation, scroll-reveal effects, and a fully responsive layout.

## 🔗 Pages

- **Home** (`index.html`) — hero section with 3D hero video, stats, and a services preview grid
- **Services** (`about.html`) — detailed service breakdown
- **Contact** (`contact.html`) — contact form (front-end demo only, see note below)

## Features

- **3D hero animation** — looping Blender-rendered MP4 as the hero visual
- **Glassmorphism UI** — frosted-glass cards throughout (`glass card` styling)
- **Scroll-reveal animations** — sections fade/slide in via `IntersectionObserver` (`data-reveal` attribute)
- **Responsive mobile nav** — animated hamburger menu that closes on link click or outside click
- **Auto-updating footer year** — no manual yearly edits needed
- **Contact form demo** — shows a success message on submit (see Known Limitations)

## Tech Stack

Plain **HTML5**, **CSS3** (custom properties, glassmorphism, gradients), and **vanilla JavaScript** (`IntersectionObserver`, DOM events) — no build tools or frameworks required.

## Project Structure

```
creative-studio/
├── index.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    ├── logo.svg
    ├── icons/          # brand, motion, web, uiux, sound, video icons
    └── animations/
        └── hero.mp4    # looping Blender hero animation
```

## Setup

No build step needed — it's static HTML/CSS/JS.

```
git clone https://github.com/Suzal2331/NovaFrame-Studio-HTML-CSS-JS-.git
cd NovaFrame-Studio-HTML-CSS-JS-/creative-studio
```

Then just open `index.html` in a browser, or serve it locally for the best experience (relative paths + video autoplay behave more reliably over http):

```
npx serve .
```

or with Python:

```
python -m http.server 8000
```

## Known Limitations

- The **contact form doesn't actually send anything** — it's a front-end-only demo that shows a fake success message (see `js/main.js`). Hook it up to a real backend (e.g. Formspree, EmailJS, or your own API) before using it in production.
- The hero video (`hero.mp4`) is a fairly large asset — consider compressing it or lazy-loading it if page load speed matters.



