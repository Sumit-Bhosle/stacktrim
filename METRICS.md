# METRICS.md

## North Star Metric

### Qualified Audit Completions per Week

A qualified audit completion is defined as a completed audit where:

- The user enters realistic spend data.
- The report is successfully generated.
- The user either submits their email or spends meaningful time reviewing the results.

This is the best North Star metric because it captures both product value delivery and the creation of potential sales opportunities for Credex.

---

## Why This Metric Matters

StackTrim is not a daily-use product. Most companies will use it only when they are reviewing budgets or evaluating tooling changes.

Because of that, metrics like DAU or session count are less meaningful than the number of completed audits that indicate genuine buying intent.

Each qualified audit completion represents:

1. A user who experienced the core value proposition.
2. A potential lead for Credex.
3. A data point for improving pricing recommendations.

---

## Input Metrics

### 1. Landing Page → Audit Start Rate
Percentage of visitors who click “Run Free Audit.”

**Target:** 20%+

### 2. Audit Completion Rate
Percentage of users who start the form and successfully generate a report.

**Target:** 60%+

### 3. Lead Capture Rate
Percentage of completed audits that result in an email submission.

**Target:** 25%+

---

## Additional Downstream Metrics

- Consultation booking rate
- Credit purchase conversion rate
- Average projected monthly savings per audit
- Share rate of public report URLs

---

## What I’d Instrument First

The first events I would track are:

- `landing_page_view`
- `audit_started`
- `audit_completed`
- `lead_submitted`
- `consultation_clicked`
- `share_link_copied`

These events are sufficient to measure the full conversion funnel.

---

## Pivot Threshold

If StackTrim generates at least 100 completed audits and fewer than 5% result in lead submissions, I would revisit the product’s positioning and report experience.

If lead capture is strong but fewer than 10% of leads book consultations, I would investigate whether the savings recommendations are not compelling enough or whether the call-to-action is weak.

---

## Week 1 Success Benchmarks

A strong first week after launch would look like:

- 1,000 landing page visitors
- 200 audit starts
- 120 completed audits
- 30 lead submissions
- 8 consultation bookings
- 2 closed credit deals

This would validate both product-market resonance and the quality of leads being generated.

---

## Why These Metrics Fit the Business Model

StackTrim is a lead-generation product, not a subscription SaaS product. Its success should be measured by how efficiently it turns interested visitors into qualified sales conversations.

By focusing on qualified audit completions and the downstream funnel, Credex can evaluate both product usefulness and commercial impact.