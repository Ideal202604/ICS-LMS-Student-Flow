<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
## 2026-04-13
- Added floating WhatsApp & message buttons to HomePage (src/screens/HomePage/HomePage.tsx)
- Buttons match Courses page style, fixed bottom-right with hover scale effect

## 2026-04-07
- Added full SEO setup: index.html meta/OG/Twitter/JSON-LD, favicon.png, site.webmanifest
- Created public/sitemap.xml, public/robots.txt (Google/Bing/Perplexity), public/llms.txt
- Generated platform icon used as favicon, apple-touch-icon, og:image
- Removed duplicate meta/link tags and cleaned up index.html

## 2026-04-06
- Made Courses page fully responsive (mobile/tablet/desktop) and interactive
- Added hamburger mobile menu with slide-down animation and overlay (Courses.tsx)
- Added active nav highlighting, smooth scroll to sections, responsive hero text sizing
- CourseGridSection + CareerCTASection: responsive grid (1→2→3 cols), card hover effects, enroll/details feedback toasts
- GlobalFooterSection: responsive grid footer, interactive CTA buttons with state feedback, hover effects on links
</changelog>
