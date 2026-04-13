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
- Fixed build error in `CourseHeroBannerSection.tsx` — missing `</div>` closing tag caused "Unterminated JSX contents" syntax error
- Fixed build error in `CareerCallToActionSection.tsx` — missing `</section>` closing tag caused "Unterminated JSX contents" syntax error

## 2026-04-13
- Moved scroll-to-top arrow button into shared `FloatingChatButtons` component so it appears on ALL pages (including Login/Register)
- Button shows/hides with smooth fade based on scroll position (>300px)
- Removed duplicate scroll-to-top buttons from: HomePage CareerCallToActionSection, WhyChooseUsSection, About CareerCallToActionSection, ContactFooterSection

## 2026-04-13
- Made ApproachHighlightsSection cards display inline (single row) instead of wrapping (`flex-nowrap` + `flex-1 min-w-0`)
- Fixed About page hero to use exact same layered image approach as Courses page (screan-01.png + screan-2.svg overlay)
- Removed duplicate static WhatsApp/chat icons from hero sections on About, Courses, and Contact pages
- Only the shared functional `FloatingChatButtons` component remains on all screens

## 2026-04-13
- Extracted floating WhatsApp + chat buttons into shared `src/components/ui/floating-chat-buttons.tsx`
- Added FloatingChatButtons to all 6 screens: HomePage, Courses, About, Contact, Login, Register
- WhatsApp button opens wa.me/919890451547 (phone: 98904 51547)
- Chat widget with ICS Chat 24x7 support is now globally available

## 2026-04-13
- Made Login, Register, and HomePage fully responsive (mobile/tablet/desktop)
- Replaced fixed px-[264px] margins with fluid responsive padding (px-4 → md:px-8 → lg:px-16 → xl:px-[264px])
- Login/Register: card layout stacks vertically on mobile, photo scales, hamburger menu added
- HomePage: nav collapses, hero text scales, course cards stack, testimonials/articles wrap, footer uses CSS grid
- Footer sections across all pages use grid layout for proper responsive wrapping

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
