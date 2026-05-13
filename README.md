# README.md

Copy the content below into your `README.md`.


# StackTrim

StackTrim is a free AI spend audit tool that helps startup founders and engineering managers identify overspending across tools like Cursor, ChatGPT, Claude, and GitHub Copilot. Users enter their current AI stack and receive an instant audit showing downgrade opportunities, lower-cost alternatives, and estimated monthly and annual savings.

## Live Demo

- Live App: https://stacktrim.vercel.app
- Demo Video: Add your Loom or YouTube link here

## Screenshots

Add at least three screenshots:

1. Landing page
2. Audit results page
3. Shareable public report

Example:

![Landing Page](./public/screenshots/landing-page.png)
![Audit Results](./public/screenshots/audit-results.png)
![Shareable Report](./public/screenshots/share-report.png)

## Who This Is For

StackTrim is designed for:

- Seed to Series A startup founders
- CTOs and engineering managers
- Finance operators managing SaaS spend
- Teams using multiple AI subscriptions and APIs

## Core Features

- Multi-tool AI spend input form
- Rule-based audit engine with defensible recommendations
- Personalized AI-generated executive summary
- Lead capture with Supabase backend
- Transactional confirmation email via Resend
- Shareable public report URLs with Open Graph metadata
- Form persistence across reloads
- Basic abuse protection with honeypot field

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- Supabase
- Anthropic API
- Resend
- Vitest
- GitHub Actions
- Vercel

## Quick Start


git clone https://github.com/Sumit-Bhosle/stacktrim.git
cd stacktrim
npm install
npm run dev


Create a `.env.local` file:


NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ANTHROPIC_API_KEY=
RESEND_API_KEY=
RESEND_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=http://localhost:3000


Open `http://localhost:3000`.

## Deployment

The application is deployed on Vercel.

To deploy your own version:

1. Import the repository into Vercel.
2. Add all required environment variables.
3. Deploy.

## Running Tests

npm run test
npm run lint
npm run build


## Decisions

### 1. Rule-Based Audit Logic Instead of AI Calculations

I used deterministic business rules for pricing recommendations and savings calculations to ensure consistent and explainable outputs.

### 2. Anthropic Used Only for Narrative Summaries

The LLM is used only to generate a concise executive summary, with a fallback template if the API call fails.

### 3. Supabase for Backend Simplicity

Supabase provided a fast and reliable Postgres-backed database with minimal setup overhead.

### 4. Email Capture Happens After Value Is Delivered

Users see the audit before entering their email, aligning with the assignment requirement and improving conversion.

### 5. Shareable Public URLs Exclude Sensitive Data

Public reports contain audit recommendations and savings figures, but strip identifying information such as company name and email address.

## Accessibility and Performance

The deployed application was tested using Lighthouse and optimized for responsive design, accessibility, and production performance.

## CI/CD

GitHub Actions automatically runs:

* Lint checks
* Automated tests
* Production build

on every push to `main`.

## Repository Structure

app/
components/
lib/
tests/
public/
.github/workflows/ci.yml

README.md
ARCHITECTURE.md
DEVLOG.md
REFLECTION.md
TESTS.md
PRICING_DATA.md
PROMPTS.md
GTM.md
ECONOMICS.md
USER_INTERVIEWS.md
LANDING_COPY.md
METRICS.md


## Author

Sumit Bhosle

