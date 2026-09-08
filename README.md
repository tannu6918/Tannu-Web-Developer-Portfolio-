# Modern Portfolio — React + Vite + Tailwind

A premium, fully responsive personal portfolio with smooth 2D animations, dark gradient UI, and glassmorphism — inspired by modern developer portfolios.

## Tech Stack

- **React 18** + **Vite 6**
- **Tailwind CSS 3**
- **Framer Motion** — UI animations
- **GSAP + ScrollTrigger** — scroll reveals & parallax
- **Lenis** — smooth scrolling
- **React Type Animation** — typing hero text
- **React Scroll** — sticky nav & section spy
- **Swiper** — testimonial carousel
- **React Icons**
- **EmailJS** — contact form

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) (v18+) which includes npm.

### Install & Run

```bash
cd my-portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
npm run preview
```

Deploy the `dist` folder to Netlify, Vercel, or GitHub Pages.

## EmailJS Setup

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Add a service, template, and public key
3. Copy `.env.example` to `.env` and fill in your keys:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Customize

| File | Purpose |
|------|---------|
| `src/data/profile.js` | Name, bio, email, social links |
| `src/data/projects.js` | Portfolio projects |
| `src/data/skills.js` | Skills & progress bars |
| `src/data/experience.js` | Timeline & stats |
| `src/data/testimonials.js` | Client reviews |
| `public/` | Add resume PDF, favicon, OG image |

## Project Structure

```
src/
├── components/     # Reusable UI (Navbar, Loader, Cursor, etc.)
├── sections/       # Page sections (Hero, About, Projects...)
├── hooks/          # Lenis, GSAP, counters, parallax
├── animations/     # Framer Motion variants
├── data/           # Static content
├── App.jsx
└── main.jsx
```

## Features

- Fullscreen hero with typing animation
- Animated gradient background & floating shapes
- Glassmorphism cards & custom cursor
- Sticky navbar with active section highlight
- Project filter tabs & 3D tilt cards
- Animated skill bars & counters
- Vertical experience timeline
- Auto-sliding testimonials
- EmailJS contact form
- SEO meta tags & mobile-first layout

## License

MIT — customize freely for your personal portfolio.
