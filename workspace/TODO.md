<instructions>
This file powers chat suggestion chips. Keep it focused and actionable.

# Be proactive
- Suggest ideas and things the user might want to add *soon*. 
- Important things the user might be overlooking (SEO, more features, bug fixes). 
- Look specifically for bugs and edge cases the user might be missing (e.g., what if no user has logged in).

# Rules
- Each task must be wrapped in a "<todo id="todo-id">" and "</todo>" tag pair.
- Inside each <todo> block:
  - First line: title (required)
  - Second line: description (optional)
- The id must be a short stable identifier for the task and must not change when you rewrite the title or description.
- You should proactively review this file after each response, even if the user did not explicitly ask, maintain it if there were meaningful changes (new requirement, task completion, reprioritization, or stale task cleanup).
- Think BIG: suggest ambitious features, UX improvements, technical enhancements, and creative possibilities.
- Balance quick wins with transformative ideas — include both incremental improvements and bold new features.
- Aim for 3-5 high-impact tasks that would genuinely excite the user.
- Tasks should be specific enough to act on, but visionary enough to inspire.
- Remove or rewrite stale tasks when completed, obsolete, or clearly lower-priority than current work.
- Re-rank by impact and user value, not just urgency.
- Draw inspiration from the project's existing features — what would make them 10x better?
- Don't be afraid to suggest features the user hasn't explicitly mentioned.
</instructions>

<!-- Add tasks here only when there are real next steps. -->
<todo id="course-detail-modal">
Add course detail modal/page
Show full course syllabus, instructor info, and enroll CTA when "Details" is clicked
</todo>

<todo id="auth-modal">
Wire up Login & Register buttons
Add a modal or dedicated auth page with form validation and feedback
</todo>

<todo id="search-filter">
Add course search & filter
Let users filter courses by category, duration, or price range
</todo>

<todo id="testimonials">
Add a testimonials / reviews section
Social proof from past students increases conversion on the courses page
</todo>

<todo id="seo-meta">
Add SEO meta tags
Title, description, Open Graph tags — important for discoverability
</todo>
