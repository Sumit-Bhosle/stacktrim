# DEVLOG.md

## Day 1 — 2026-05-07
**Hours worked:** 0

**What I did:**  
Read the assignment carefully and broke it down into technical and business deliverables. Defined the product concept and selected the name “StackTrim.” Outlined the MVP features and decided to use Next.js, TypeScript, Supabase, Anthropic, and Resend.

**What I learned:**  
This assignment evaluates product thinking and execution discipline as much as coding ability.

**Blockers / what I'm stuck on:**  
The biggest challenge was understanding the full scope and deciding what to prioritize first.

**Plan for tomorrow:**  
Set up the project and build the spend input form.

---

## Day 2 — 2026-05-08
**Hours worked:** 3

**What I did:**  
Initialized the Next.js project with TypeScript and Tailwind CSS. Built the dynamic spend input form using React Hook Form and Zod. Added support for multiple AI tools, plans, monthly spend, and seats. Implemented localStorage persistence.

**What I learned:**  
Using Zod as the single source of truth for validation and TypeScript types reduced complexity significantly.

**Blockers / what I'm stuck on:**  
Managing dynamic field arrays while keeping validation clean.

**Plan for tomorrow:**  
Continue implementing the audit logic.

---

## Day 3 — 2026-05-09
**Hours worked:** 0

**What I did:**  
Did not work on the project.

**What I learned:**  
N/A.

**Blockers / what I'm stuck on:**  
None.

**Plan for tomorrow:**  
Resume work on the audit engine and pricing logic.

---

## Day 4 — 2026-05-10
**Hours worked:** 2

**What I did:**  
Worked on early versions of the audit engine and reviewed vendor pricing pages to define recommendation rules.

**What I learned:**  
The recommendations needed to be financially defensible rather than simply suggesting cheaper tools.

**Blockers / what I'm stuck on:**  
Translating pricing research into simple, explainable business rules.

**Plan for tomorrow:**  
Build the results page and complete the audit engine.

---

## Day 5 — 2026-05-11
**Hours worked:** 7

**What I did:**  
Implemented pricing and recommendation rules, completed the spend form persistence, and improved the audit results page UI. Added total monthly and annual savings calculations.

**What I learned:**  
Deterministic logic is more trustworthy than AI for calculations involving money.

**Blockers / what I'm stuck on:**  
Making the recommendations realistic and not overly aggressive.

**Plan for tomorrow:**  
Integrate AI summaries and backend functionality.

---

## Day 6 — 2026-05-12
**Hours worked:** 4

**What I did:**  
Integrated Anthropic for personalized summaries, implemented Supabase lead capture, Resend transactional emails, shareable public report URLs, automated tests, and GitHub Actions CI. Deployed the application to Vercel and fixed environment variable issues.

**What I learned:**  
Many production issues were caused by configuration details rather than application logic.

**Blockers / what I'm stuck on:**  
Resolving CI failures and debugging deployment issues.

**Plan for tomorrow:**  
Complete documentation and perform final QA.

---

## Day 7 — 2026-05-13
**Hours worked:** 6

**What I did:**  
Completed all required documentation files, ran end-to-end QA on the deployed application, verified GitHub Actions CI was passing, and prepared the final submission links.

**What I learned:**  
Shipping a polished product includes documentation, business thinking, and operational readiness, not just writing code.

**Blockers / what I'm stuck on:**  
None.

**Plan for tomorrow:**  
Submit the final GitHub repository and deployed URL.