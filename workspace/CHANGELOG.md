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
## 2026-04-16 (button inline fix v2)
- Replaced Button component with plain `<button>` elements in CourseGridSection action row
- Applied `flex-1 min-w-0` directly on each button (direct flex children) — guarantees true side-by-side layout
- Removed intermediate wrapper divs; Button component's `inline-flex` base was preventing correct flex-1 distribution
- File: src/screens/Courses/sections/CourseGridSection/CourseGridSection.tsx

## 2026-04-16 (remove second course grid)
- Removed the duplicate CourseGridSection from Courses.tsx main section
- File: src/screens/Courses/Courses.tsx

## 2026-04-15 (carousel arrow gap)
- Increased gap between arrows and card track in TestimonialCarouselSection from gap-6 to gap-12
- File: src/screens/About/sections/TestimonialCarouselSection.tsx

## 2026-04-15 (syllabus alignment)
- Aligned "Syllabus" text in CoursePlay header to match px-6 left padding of "Course Analytics" row
- Moved padding from `mr-6` on separator to `px-6` on the span itself for consistent left alignment
- File: src/screens/CoursePlay/CoursePlay.tsx

## 2026-04-15 (apostrophe fix)
- Fixed "What You&#39;ll Learn" → "What You'll Learn" in CourseDetailLayoutSection and CourseOverviewDetailSection
- Files: src/screens/CourseDetails/sections/CourseDetailLayoutSection.tsx, src/screens/CoursePlay/sections/CourseOverviewDetailSection.tsx

## 2026-04-15 (course image consistency)
- Unified all course thumbnail images to use mnmyaijxgewU4q CDN across every page
- "Research Writing & AI" → rectangle-9796-4.png, "Digital Marketing Using AI" → rectangle-9796-5.png
- Updated: CourseGridSection, FeaturedCoursesSection, ExploreCoursesSectionHP (all 6 cards)
- courseData.ts already had correct images — now all card grids match it

## 2026-04-15 (course images wired)
- CoursePlay left panel now shows course-specific image (from courseData) based on URL :courseSlug param
- CourseHeroBannerSection (CoursePlay) accepts title prop → shows "Introduction to [course title]"
- CourseDetailLayoutSection accepts courseImage/courseTitle/courseSlug props → shows real thumbnail in sidebar card
- EnrollmentCheckoutModal passes { courseTitle, courseImage, courseSlug, coursePrice } via navigate state to /checkout
- OrderSummarySection reads location.state → shows correct course image, title, price; navigates to /course-play/:slug
- Files: CoursePlay.tsx, CourseHeroBannerSection.tsx (x2), CourseDetailLayoutSection.tsx, enrollment-checkout-modal.tsx, OrderSummarySection.tsx, CoursesDetails.tsx

## 2026-04-15 (syllabus timeline)
- Added vertical blue connector line between lesson icons in CourseSyllabusSidebarSection
- Icons now render inside blue rounded squares (bg-[#1a56db] w-10 h-10 rounded-xl) with white icon via invert filter
- Blue `w-[2px] bg-[#1a56db]` line connects each icon to the next; hidden on last item
- File: src/screens/CoursePlay/sections/CourseSyllabusSidebarSection.tsx

## 2026-04-15 (back button fix)
- Fixed back arrow (layer-2.png) in CoursePlay navbar — was non-functional, now uses `useNavigate` + `navigate(-1)`
- Clicking back now returns to the previous page in history (e.g. /checkout → /course-play → back → /checkout)
- Added `cursor-pointer hover:opacity-70` for visual affordance
- File: src/screens/CoursePlay/CoursePlay.tsx

## 2026-04-15 (global margin alignment)
- Standardized horizontal padding to `px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px]` across all pages
- Fixed CoursesDetails.tsx: navbar was `px-4 md:px-6`, hero content was `px-4 sm:px-8 md:px-12 lg:px-16`
- Fixed ContactHeroBannerSection.tsx: was `px-5 sm:px-8 md:px-14 lg:px-16 xl:px-[200px] 2xl:px-[264px]`
- Fixed CourseDetailLayoutSection.tsx: main content `max-w-[1400px] px-4`, footer `px-[108px]` → both standardized
- Files: CoursesDetails.tsx, ContactHeroBannerSection.tsx, CourseDetailLayoutSection.tsx

## 2026-04-15 (course grid card redesign)
- Rebuilt CourseGridSection cards to match FeaturedCoursesSection (HomePage) design exactly
- Updated all icons to use mnx2ynhlJmDJf4 CDN assets (rating, badges, discount, details, start)
- Cards now use `min-h-[559px]`, `h-auto` thumbnail, full description text, animate-slide-in-up + hover lift
- File: src/screens/Courses/sections/CourseGridSection/CourseGridSection.tsx

## 2026-04-14 (about carousel arrows)
- Replaced ChevronLeft/ChevronRight button arrows in About TestimonialCarouselSection with HomePage-style image arrows (layer-3.png left, layer-2.png right)
- Removed lucide-react ChevronLeft/ChevronRight imports — no longer needed
- File: src/screens/About/sections/TestimonialCarouselSection.tsx

## 2026-04-14 (testimonial arrows)
- Fixed testimonial section arrows: removed asymmetric px-[220px] padding, now uses standard section padding xl:px-[200px] 2xl:px-[264px]
- Both arrows (layer-3 left, layer-2 right) are now flush and equidistant from the two student feedback cards
- File: src/screens/HomePage/HomePage.tsx

## 2026-04-14 (explore courses card fix)
- Rebuilt ExploreCoursesSectionHP cards to exactly match CourseGridSection (Courses page) layout
- Badges row: `flex items-center justify-between w-full gap-2` with `flex-1` on each pill
- Buttons row: `flex items-center gap-2 w-full` with `flex-1` on each button — equal halves edge-to-edge
- File: src/screens/HomePage/sections/ExploreCoursesSectionHP.tsx

## 2026-04-14 (card alignment)
- Fixed badge row (Lessons/Online/3 Months) & button row (Details/Start Learning) alignment in course cards
- Both rows now use `flex justify-between` + `flex-1` so left and right edges are perfectly equal on all screen sizes
- Applied to both FeaturedCoursesSection (HomePage) and CourseGridSection (Courses page)
- Files: src/screens/HomePage/sections/FeaturedCoursesSection.tsx, src/screens/Courses/sections/CourseGridSection/CourseGridSection.tsx

## 2026-04-14 (latest)
- Fixed GlobalFooterSection: added useNavigate, EnrollmentCheckoutModal, social links open in new tab
- Quick Links now navigate correctly (Home→/, All Courses→/courses, Contact Us→/contact)
- Enroll Now opens EnrollmentCheckoutModal; Contact Us navigates to /contact
- Social icons (Instagram, LinkedIn, YouTube) now have real href targets with target="_blank"
- File: src/screens/Courses/sections/GlobalFooterSection/GlobalFooterSection.tsx

## 2026-04-14 (prev)
- Performance: removed render-blocking Google Fonts @import from tailwind.css and index.html <style> tag
- Added preconnect/dns-prefetch for fonts.googleapis.com, fonts.gstatic.com, c.animaapp.com CDN
- Fonts now load non-blocking via media="print" onload swap pattern + <noscript> fallback
- Added <link rel="preload"> for hero images (screan-01.png, screan-2.svg, uploaded hero)
- Added fetchPriority="high" loading="eager" decoding="async" to all hero images on every page
- Files: index.html, tailwind.css, HomePage.tsx, Courses.tsx, About.tsx, Contact.tsx

## 2026-04-14
- Wired Login → `/login` and Register → `/register` onClick on Courses page navbar (desktop + mobile menu)
- Other pages (About, Contact, HomePage) already had these handlers — Courses was the only one missing them
- File: src/screens/Courses/Courses.tsx

## 2026-04-14
- Removed CTA banner ("Start Your Career Journey Today") from Login page footer only
- Cleaned up unused useState + Button imports from AuthShowcaseSection after banner removal
- Other pages (Home, Courses, About, Contact) unaffected — their CTA banners remain intact
- File: src/screens/Login/sections/AuthShowcaseSection.tsx

## 2026-04-14
- Removed arrow icon images from "Enroll Now" and "Contact Us" buttons in Login page footer CTA banner only
- File: src/screens/Login/sections/AuthShowcaseSection.tsx

## 2026-04-14
- Standardized Login page footer (AuthShowcaseSection) to exactly match GlobalFooterSection used on all other pages
- Added CTA banner ("Start Your Career Journey Today"), 5-col links grid, social icons, and copyright bar
- Moved footer out of `<main>` into proper bottom slot; removed old bare copyright-only `<footer>` tag
- Files: src/screens/Login/sections/AuthShowcaseSection.tsx, src/screens/Login/Login.tsx

## 2026-04-14
- Fixed Courses section background: replaced broken uploaded asset URL with working rectangle-9796.png
- Applied left-to-right blue gradient overlay (0.90→0.60→0.25) with cover/center, minHeight 500px, pt/pb 80px
- Cards now properly float over the background; section padding-top reduced in CourseGridSection for tighter spacing
- Files: Courses.tsx, CourseGridSection.tsx

## 2026-04-14
- Replaced HomePage hero background image with uploaded student-with-laptop photo
- Kept blue transparent overlay (screan-2.svg) and all text/content unchanged
- File: src/screens/HomePage/HomePage.tsx

## 2026-04-13 (latest)
- Removed duplicate "Start Your Career Journey Today" + footer section from HomePage (the `WhyChooseUsSection` between Why Choose Us cards and Student Feedbacks)
- HomePage now flows: Hero → Courses → Why Choose Us → Testimonials → Articles → Career CTA + Footer (single instance)
- File: src/screens/HomePage/HomePage.tsx

## 2026-04-13
- Added `grid-desktop-3` and `flex-desktop-3` CSS utility classes to force 3-column card layouts at lg (1024px+) breakpoint
- Applied to: CourseGridSection, CareerCTASection (Courses page), FeaturedCoursesSection, LatestArticlesSection (HomePage)
- Removed max-width constraints on cards that prevented equal distribution; cards now flex equally in row
- Ensures phone "desktop mode" (which sets viewport to ~980-1024px) renders proper 3-column grids
- Files: tailwind.css, CourseGridSection.tsx, CareerCTASection.tsx, FeaturedCoursesSection.tsx, LatestArticlesSection.tsx

## 2026-04-13
- Updated HomePage hero to use same dark blue overlay images (screan-01.png + screan-2.svg) as Courses/About/Contact pages
- Replaced lighter CSS gradient with the exact same layered image overlay for consistent contrast across all pages
- Made hero section responsive: min-h-[260px] sm:380px md:500px lg:655px matching other pages

## 2026-04-13
- Standardized navbar and section margins across ALL pages to match HomePage pattern: `px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px]`
- Courses: navbar now has h-[81px], shadow-sm, animate-fade-in-down; hero content uses standard margins; CourseGrid + CareerCTA + footer all use unified padding
- About: navbar + all content sections (overview, story, approach, testimonials) upgraded from xl:px-[120px] to xl:px-[200px] 2xl:px-[264px]
- Contact: navbar + form section + hero banner + footer all use unified margins
- Login/Register: added shadow-sm to navbars for visual consistency
- Files: Courses.tsx, About.tsx, Contact.tsx, Login.tsx, Register.tsx, CourseGridSection, CareerCTASection, GlobalFooterSection, ContactHeroBannerSection, ContactFooterSection

## 2026-04-13
- Comprehensive responsive & animation pass across ALL pages (Login, Register, Home, About, Contact, Courses)
- Phone margins tightened: `px-4` → `px-3 sm:px-6` across all headers, sections, footers
- Media frame heights adjusted for phones: Login/Register image 180px→260px→320px→full, Courses hero 260px→380px→500px→655px, Contact hero 200px→300px→444px
- Section headings scale: 26px→34px→44px; button text/padding scales with `sm:` breakpoints
- New CSS animations: bounce-in, fade-in-down, btn-animate (hover lift+glow), card-animate (hover lift), section-animate (fade-up)
- Applied: cards get card-animate, buttons get btn-animate, hero headings slide-in, course cards slide-in-up, testimonials animate per card
- Files: tailwind.css, Login.tsx, Register.tsx, HomePage.tsx, HeroBannerSection, FeaturedCoursesSection, StudentTestimonialsSection, LatestArticlesSection, CareerCallToActionSection, WhyChooseUsSection, About.tsx, Contact.tsx, Courses.tsx

## 2026-04-13
- Fixed all page navbars: labels now always visible on md+ (removed `hidden lg:inline` → just inline), matching Courses page
- About page: added full mobile hamburger menu with slide-down + overlay (was missing entirely)
- Added CSS animations: slide-in-left/right/up, scale-in, float-gentle, pulse-glow + delay utilities in tailwind.css
- Applied animations to About sections (overview, story, approach, testimonials) and Login/Register card frames
- Fixed hero/image heights for phone screens (240→200px, 320→280px) for better media frame fit
- Files: About.tsx, Contact.tsx, HomePage.tsx, Login.tsx, Register.tsx, tailwind.css

## 2026-04-13
- Fixed responsive layout across About, Login, Register pages for phone/tablet/desktop
- About: image stacks on mobile, headings scale (text-3xl→4xl→44px), approach cards use 2×2 grid on mobile, testimonials horizontally scroll, footer uses CSS grid
- Login/Register: image panel uses object-center with proportional heights (240px/320px/full), decorative shapes scale down on mobile
- Reduced xl padding from 264px to 120px on About sections for better content width
- Files: About.tsx, AboutOverviewSection, AboutStorySection, MissionVisionSection, ApproachHeading/Highlights, TestimonialHeading/Carousel, CareerCallToAction, Register.tsx, Login.tsx

## 2026-04-13
- Removed `/lms-student-flow` route and deleted `src/screens/LmsStudentFlow/LmsStudentFlow.tsx`
- Cleaned up unused import from `src/index.tsx`

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
