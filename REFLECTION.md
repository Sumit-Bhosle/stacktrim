# REFLECTION.md

## 1. The hardest bug I hit this week, and how I debugged it

The hardest bug I encountered was a state persistence issue between the spend form and the audit results page. After users submitted the form, they were redirected to `/audit`, but the page displayed a “No data found” message instead of the generated report.

My first hypothesis was that the audit engine itself was failing, so I added logging around the calculation function and confirmed that valid audit results were being generated. That told me the issue was happening after the calculations were complete. I then checked whether the audit payload was being written to localStorage and verified that the expected JSON data was present in the browser.

This narrowed the issue to the audit page itself. The root cause was that the page attempted to read the stored data before the client-side state was available. I moved the retrieval logic into a `useEffect`, added defensive parsing and validation, and showed a loading state while the data was being loaded.

After these changes, the results page rendered reliably both after form submission and after refreshing the page. This bug taught me the value of isolating each stage of the data flow and validating assumptions with logging instead of guessing.

---

## 2. A decision I reversed mid-week, and what made me reverse it

One decision I reversed was how to handle the audit results page. My initial approach was to generate the audit and keep all of the results in client-side state, passing the data directly between pages. This worked in simple cases, but it broke when users refreshed the page or opened the audit URL directly.

After running into the “No data found” issue, I realized that relying only on in-memory state was too fragile. I changed the implementation so the audit payload was saved to localStorage before navigation, and the audit page became responsible for loading and validating the stored data on mount.

Later, when I added shareable reports, I extended the design further by storing sanitized audit data in Supabase and generating public URLs. This made the architecture more robust and aligned better with the product requirements.

This reversal improved both the user experience and the system design. It reinforced the importance of designing flows that survive refreshes, direct links, and production edge cases.

---

## 3. What I would build in week 2 if I had it

If I had another week, the first feature I would build is benchmark mode. In addition to showing potential savings, the report would compare the user’s AI spend per developer against companies of a similar size. This would make the audit more persuasive by adding context rather than just presenting raw numbers.

The second feature would be PDF export. Many users would want to share the audit internally with co-founders, finance teams, or engineering managers. A polished PDF report would make the product more useful and more likely to drive action.

I would also add analytics to track the funnel from landing page visits to audit completions, lead submissions, and consultation bookings. That data would help identify the biggest drop-off points and guide future improvements.

Finally, I would improve the pricing dataset by moving it to a dedicated database table with an admin interface so prices could be updated without code changes.

---

## 4. How I used AI tools

I used ChatGPT heavily throughout the project for architecture planning, debugging, refining prompts, and writing documentation. It was especially useful for helping me think through the project in structured phases, which made a large assignment feel more manageable.

I did not use AI for the audit calculations themselves. Because the product makes financial recommendations, I wanted the savings logic to be deterministic and fully testable. All pricing rules and recommendation logic were implemented directly in code.

One specific time AI was wrong involved the Anthropic integration. An early suggestion assumed the API response would always have a consistent structure. In practice, some responses did not match that assumption, which caused the summary generator to fail. I reviewed the API response format, added defensive parsing, and implemented a fallback summary generator.

This project reinforced my view that AI is most valuable as an accelerator for planning and debugging, but critical logic still needs human verification.

---

## 5. Self-rating

### Discipline — 8/10
I completed all required MVP features, kept a detailed devlog, and iterated consistently across multiple days while balancing coding, deployment, and documentation.

### Code Quality — 8/10
The codebase is modular, strongly typed, and supported by automated tests and CI. Given more time, I would add more test coverage and refactor some components further.

### Design Sense — 7/10
The UI is clean, responsive, and focused on readability, though there is still room for more visual polish and stronger branding.

### Problem Solving — 9/10
I worked through issues involving state persistence, API integrations, CI failures, and deployment problems without compromising the MVP scope.

### Entrepreneurial Thinking — 8/10
I approached the project as a real lead-generation product and thought carefully about user value, conversion flow, and unit economics.