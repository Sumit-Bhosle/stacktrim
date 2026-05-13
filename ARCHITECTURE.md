````markdown
# ARCHITECTURE.md

## System Overview

StackTrim is a lead-generation SaaS tool that analyzes a company's AI tooling spend and identifies opportunities to reduce costs. The application is built as a server-rendered Next.js web app with a rule-based audit engine, optional AI-generated summaries, and backend integrations for lead capture and transactional email.

The architecture is intentionally simple and deterministic: business logic is implemented in code, while AI is used only to generate a human-friendly executive summary.

---

## System Diagram


flowchart TD
    A[Landing Page] --> B[Spend Input Form]
    B --> C[Client Validation with Zod]
    C --> D[Audit API Route]
    D --> E[Rule-Based Audit Engine]
    E --> F[Pricing Data Lookup]
    E --> G[Savings Calculation]
    G --> H[Anthropic Summary Service]
    H --> I[Results Page]

    I --> J[Lead Capture Form]
    J --> K[Lead API Route]
    K --> L[(Supabase Database)]
    K --> M[Resend Email Service]

    I --> N[Create Shareable Report]
    N --> O[(Supabase Reports Table)]
    O --> P[Public Report URL]
    P --> Q[Open Graph Metadata]


---

## Data Flow

### 1. User Input

A visitor enters:

* AI tools used
* Current plans
* Monthly spend
* Number of seats
* Team size
* Primary use case

The form state is persisted to `localStorage`, allowing users to refresh without losing progress.

### 2. Validation

Client-side validation is performed using Zod schemas to ensure numeric values and required fields are valid before submission.

### 3. Audit Generation

The validated payload is sent to a Next.js API route, where the audit engine evaluates each tool against current pricing and recommendation rules.

### 4. Savings Calculation

For each tool, the engine computes:

* Recommended action
* Recommended plan or alternative
* Monthly savings
* Annual savings
* Human-readable rationale

### 5. AI Summary

The structured audit output is sent to Anthropic to generate a concise executive summary. If the API call fails, the application falls back to a deterministic template.

### 6. Results Display

The results page presents:

* Total savings hero
* Per-tool recommendations
* AI-generated summary
* Lead capture form

### 7. Lead Capture

After value is delivered, the user can submit contact details. The server:

1. Validates the input
2. Stores the lead in Supabase
3. Sends a confirmation email using Resend

### 8. Shareable Reports

Each audit is stored with a generated public ID. Sensitive data (email and company name) is excluded from the public version.

---

## Technology Stack

### Frontend

* Next.js 16 (App Router)
* React
* TypeScript
* Tailwind CSS
* shadcn/ui

### Validation

* Zod
* React Hook Form

### Backend

* Next.js Route Handlers
* Supabase (Postgres)

### AI

* Anthropic API

### Email

* Resend

### Testing

* Vitest

### CI/CD

* GitHub Actions
* Vercel

---

## Why I Chose This Stack

### Next.js

Provides a unified full-stack framework with server rendering, API routes, metadata generation, and seamless deployment to Vercel.

### TypeScript

Improves confidence in financial calculations and API contracts by catching errors at compile time.

### Supabase

Offers a production-ready Postgres database with a generous free tier and minimal operational overhead.

### Anthropic

Used only for summary generation, where natural language adds value without introducing risk into calculations.

### Resend

Developer-friendly transactional email API with excellent deliverability.

---

## Architectural Decisions

### Deterministic Audit Engine

Pricing recommendations and savings calculations are hardcoded business rules rather than LLM-generated logic.

### Email Gating After Value

The lead form appears only after the audit is shown, maximizing trust and conversion.

### Public Reports Without PII

Shareable URLs exclude identifying information while preserving the core audit insights.

### Graceful AI Failure Handling

The summary feature never blocks the user experience.

---

## Data Model

### Leads Table

* id
* email
* company_name
* role
* team_size
* audit_id
* created_at

### Reports Table

* id
* public_id
* audit_json
* monthly_savings
* annual_savings
* created_at

---

## Security and Abuse Protection

* Environment variables for all secrets
* Honeypot field for bot detection
* Server-side validation
* Public reports strip private information

---

## Scaling to 10,000 Audits per Day

If StackTrim needed to handle 10k audits/day, I would:

1. Cache pricing data in memory or edge KV.
2. Queue AI summary generation and email sends.
3. Add rate limiting at the edge.
4. Index report lookup fields in Postgres.
5. Use CDN caching for public report pages.
6. Store analytics events for funnel analysis.

The current architecture is intentionally simple but can scale significantly with these incremental changes.

---

## Trade-Offs

### Simplicity Over Microservices

A monolithic Next.js architecture reduces operational complexity.

### Rule Engine Over Machine Learning

Deterministic logic is easier to validate and explain.

### Speed Over Extensive Analytics

Instrumentation is intentionally minimal for the MVP.

---

## Summary

StackTrim is designed as a practical production MVP that balances engineering simplicity, deterministic business logic, and a polished user experience. The architecture supports immediate deployment while leaving clear paths for scaling and feature expansion.

