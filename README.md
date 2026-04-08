# ICS-LMS-Student-Flow

A modern, responsive learning management system (LMS) frontend for discovering and enrolling in online courses. Built with React, TypeScript, and Tailwind CSS, ICS-LMS-Student-Flow showcases 120+ expert-led courses across tech, design, and business with a clean, professional interface.

## Overview

It is a student-facing course discovery platform designed to help learners find, explore, and register for high-quality online courses. The platform features a hero landing page, comprehensive course catalog with filtering and details, SEO-optimized content, and authentication endpoints for user registration and login.

**Key Problem Solved:** Provides a seamless, modern interface for course discovery and enrollment, replacing outdated or clunky LMS implementations with a contemporary web experience.

**Target Users:** Students seeking career development through structured online learning, educators deploying course catalogs, training administrators managing course availability.

## Features

- **Course Discovery Grid** — Browse 120+ courses with ratings, duration, lessons count, pricing, and discount information
- **Responsive Design** — Fully responsive across mobile (hamburger menu), tablet, and desktop viewports
- **Hero Introduction** — Eye-catching landing section with course value proposition and student social proof
- **Career CTA Section** — Conversion-focused call-to-action for career advancement messaging
- **Mobile Navigation** — Hamburger menu with smooth slide-down animation and overlay on smaller screens
- **Authentication Flow** — Registration and login modals with form validation and error handling
- **Contact Form** — Backend endpoint for user inquiries and support requests
- **SEO Optimization** — Comprehensive meta tags, Open Graph support, Twitter cards, JSON-LD structured data, sitemap, and robots.txt
- **Interactive UI** — Button feedback, hover states on cards, toast notifications for user actions

## Tech Stack

- **Frontend Framework:** React 18.2.0 with TypeScript 5.9.3
- **Build Tool:** Vite 7.3.1 with React plugin
- **Styling:** Tailwind CSS 3.4.16, Tailwind Merge, Tailwind Animate
- **UI Components:** Radix UI (separator, slot), shadcn/ui-inspired component architecture
- **Routing:** React Router DOM 6.30.0
- **Icons:** Lucide React 0.453.0
- **Backend:** Express 4.18.2, CORS enabled
- **Utilities:** clsx, class-variance-authority (CVA)
- **Dev Server:** Vite with API proxy to localhost:3000

## Project Structure

```
ICS-LMS-Student-Flow/
├── src/
│   ├── screens/Courses/           # Main course page screen
│   │   ├── Courses.tsx             # Root component with nav, auth state, form handling
│   │   └── sections/               # Modular page sections
│   │       ├── HeroCourseIntroductionSection/
│   │       ├── CourseGridSection/  # Course cards grid display
│   │       ├── CoursesOverviewSection/
│   │       ├── CareerCTASection/
│   │       └── GlobalFooterSection/
│   ├── components/ui/              # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── separator.tsx
│   ├── lib/utils.ts                # Utility functions (class name merging)
│   └── index.tsx                   # React root entry point
├── server/
│   └── index.js                    # Express backend API (auth, contact endpoints)
├── public/                         # Static assets
│   ├── sitemap.xml                 # SEO sitemap
│   ├── robots.txt                  # Search engine crawl directives
│   ├── llms.txt                    # LLM-friendly metadata
│   └── site.webmanifest            # PWA manifest
├── index.html                      # HTML entry point with SEO meta tags
├── vite.config.ts                  # Vite build configuration with API proxy
├── tailwind.config.js              # Tailwind theme and color variables
├── package.json                    # Project dependencies and scripts
└── workspace/                      # Documentation and planning
    ├── CHANGELOG.md                # Development history
    ├── TODO.md                     # Feature roadmap
    ├── DATABASE.md                 # Data layer decisions (placeholder)
    ├── CODER.md                    # Development conventions (placeholder)
    └── SOUL.md                     # Project philosophy
```

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) 16+ and npm 8+ (or yarn/pnpm)

### Setup Steps

1. **Clone or navigate to the project directory:**
   ```bash
   cd ICS-LMS-Student-Flow
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173/`

4. **In a separate terminal, start the backend API:**
   ```bash
   npm run server
   ```
   The backend will run on `http://localhost:3000/`

5. **Build for production:**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` directory.

## Usage

### Development Workflow

- **Frontend Development:** Changes in `src/` are hot-reloaded at `http://localhost:5173/`
- **Backend Development:** Modify `server/index.js` and restart the server
- **Styling:** Edit component classes directly; Tailwind is configured with PostCSS
- **Components:** New UI components belong in `src/components/ui/` and should use class-variance-authority for variants

### Running the Application

Once both servers are running:

1. Navigate to `http://localhost:5173/` in your browser
2. Explore the course grid and responsive navigation
3. Test authentication endpoints via the Login/Register modals (currently in-memory)
4. Submit contact form to test the `/api/contact` endpoint

## API Endpoints

The backend provides the following REST endpoints:

### Authentication

- **POST `/api/register`** — Register a new user
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```
  Returns: `{ message: "...", user: { id, name, email } }`

- **POST `/api/login`** — Authenticate a user
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
  Returns: `{ message: "...", user: { id, name, email } }`

### Contact

- **POST `/api/contact`** — Submit a contact/inquiry form
  ```json
  {
    "name": "string",
    "email": "string",
    "message": "string"
  }
  ```
  Returns: `{ message: "Contact request received. We will reach out soon." }`

### Health

- **GET `/api/status`** — Check backend health
  Returns: `{ status: "ok" }`

## Environment Variables

Currently, no environment variables are required for local development. The backend runs on a hardcoded port 3000 and uses in-memory user storage.

**Future Configuration Options (planned):**
- `BACKEND_PORT` — Backend API port (currently 3000)
- `DATABASE_URL` — Connection string for persistent user data
- `CORS_ORIGIN` — Frontend origin for CORS validation
- `NODE_ENV` — Environment mode (development/production)

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start Vite dev server on port 5173 with hot reload |
| `npm run build` | Build frontend for production (outputs to `dist/`) |
| `npm run server` | Start Express backend API on port 3000 |

## Responsive Design

ICS-LMS-Student-Flow is fully responsive and optimized for:

- **Mobile (< 640px):** Hamburger navigation, single-column course grid, stacked footer
- **Tablet (640px–1024px):** Two-column course grid, optimized spacing, responsive text sizing
- **Desktop (> 1024px):** Full navigation bar, three-column course grid, full-width footer

Navigation and component visibility are managed via Tailwind breakpoints (`sm`, `md`, `lg`).

## Known Limitations

- **User Data:** Authentication stores users in memory; data is lost on server restart. Replace with a database (PostgreSQL, MongoDB, etc.) for production use.
- **Course Data:** Course catalog is hardcoded in `CourseGridSection.tsx`. Connect to a backend course API for dynamic content.
- **State Management:** Authentication state is component-level; consider Redux or Context API for app-wide state.
- **Persistence:** Contact form submissions are acknowledged but not stored anywhere.

## Next Steps / Roadmap

Based on `TODO.md`, planned features include:

- [ ] Course detail modal/page with full syllabus and instructor info
- [ ] Functional authentication with persistent session management
- [ ] Advanced course search and filtering by category, duration, price
- [ ] Testimonials/reviews section for social proof
- [ ] Further SEO optimization and analytics integration

## Contributing

1. **Code Style:** Follow existing patterns in the codebase (component structure, naming conventions)
2. **Components:** New UI elements should use the Radix UI + CVA pattern found in `src/components/ui/`
3. **Styling:** Add Tailwind classes directly to JSX; extract repeated patterns to utility classes
4. **Commits:** Write clear, concise commit messages
5. **Testing:** Manual testing on mobile, tablet, and desktop breakpoints is required before submitting changes

## Deployment

The generated frontend can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.) using the `npm run build` output. For full functionality, deploy the Express backend separately to a Node.js runtime (AWS Lambda, Heroku, Railway, etc.).

**Example Vercel Deployment:**
```bash
npm run build
vercel deploy ./dist
```

