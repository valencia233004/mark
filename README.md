# John Mark — Personal Portfolio

A modern, production-ready portfolio website built with **Next.js 16**, **Tailwind CSS v4**, **Framer Motion**, and **shadcn/ui** components.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 (CSS-first configuration)
- **Animation:** Framer Motion
- **UI Components:** shadcn/ui (Button, Card, Input, Textarea)
- **Icons:** Lucide React
- **Fonts:** Space Grotesk (display) + Inter (body) via `next/font`

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Add your images

Drop your real image files into `public/images/` with these exact filenames:

| Filename | Used in | Notes |
|---|---|---|
| `profile-photo.jpg` | Hero section | Circular profile photo (recommended: 640×640px or larger, square) |
| `project-1.jpg` | Work section | Project screenshot (recommended: 800×450px or 16:9) |
| `project-2.jpg` | Work section | Project screenshot |
| `project-3.jpg` | Work section | Project screenshot |
| `certificate-1.jpg` | Certifications | Certificate image (recommended: 800×600px or 4:3) |
| `certificate-2.jpg` | Certifications | Certificate image |
| `certificate-3.jpg` | Certifications | Certificate image |

The site will show neutral gray placeholders until you add the files — no code changes needed.

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option B — GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo — Vercel will auto-detect Next.js settings
4. Click **Deploy**

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Design system (color palette, fonts, base styles)
│   ├── layout.tsx        # Root layout with fonts + meta tags
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── ui/               # shadcn/ui primitives (Button, Card, Input, Textarea)
│   ├── Navbar.tsx         # Sticky nav with mobile menu
│   ├── Hero.tsx           # Hero with profile photo + workflow graphic
│   ├── About.tsx          # Bio + skill tags
│   ├── Services.tsx       # 4 service cards
│   ├── Work.tsx           # 3 project cards (coming soon)
│   ├── Testimonials.tsx   # 2 placeholder testimonials
│   ├── Certifications.tsx # 3 certification cards (in progress)
│   ├── Contact.tsx        # Contact info + form
│   ├── Footer.tsx         # Copyright + back-to-top
│   ├── SectionWrapper.tsx # Framer Motion scroll-reveal wrapper
│   ├── ImageWithFallback.tsx # Next/Image with graceful fallback
│   └── WorkflowGraphic.tsx   # SVG connected-node motif
└── lib/
    └── utils.ts           # cn() class merge utility
```

## Connecting the Contact Form

The contact form currently logs submissions to the console. To connect it to a backend:

1. **Formspree:** Replace the `handleSubmit` in `Contact.tsx` with a fetch to your Formspree endpoint
2. **Resend / SendGrid:** Create a Next.js API route at `src/app/api/contact/route.ts`
3. **Zapier / Make webhook:** POST form data to your webhook URL

## License

© 2026 John Mark Valencia. All rights reserved.
