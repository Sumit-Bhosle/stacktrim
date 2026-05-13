# TESTS.md

This project uses Vitest to validate the audit engine and related utility functions. The goal of the test suite is to ensure that recommendations and savings calculations remain deterministic and financially defensible as pricing rules evolve.

## Test Files

### `tests/audit-engine.test.ts`
Covers the core audit engine logic.

Tests include:
- Recommending a downgrade when a user is on a more expensive plan than necessary.
- Recommending no change when the current plan is already appropriate.
- Calculating monthly savings correctly.
- Calculating annual savings correctly.
- Generating per-tool recommendation rationales.

### `tests/credex-threshold.test.ts`
Verifies that the Credex consultation CTA appears only when total monthly savings exceed the configured threshold (>$500/month).

### `tests/fallback-summary.test.ts`
Ensures the deterministic summary generator produces a valid summary when the Anthropic API is unavailable.

### `tests/public-report.test.ts`
Confirms that shareable public reports exclude sensitive fields such as email address and company name.

### `tests/prompt-builder.test.ts`
Checks that the AI prompt builder includes the relevant audit details and produces a stable prompt format.

## Running Tests

Run the full test suite:

```bash
npm run test
````

Run linting:

```bash
npm run lint
```

Run a production build:

```bash
npm run build
```

## CI Pipeline

GitHub Actions automatically runs the following commands on every push to `main`:

1. `npm ci`
2. `npm run lint`
3. `npm run test`
4. `npm run build`

The workflow configuration is located at:


.github/workflows/ci.yml


## Why These Tests Matter

The audit engine makes financial recommendations, so deterministic correctness is critical. These tests ensure that:

* Savings calculations remain accurate.
* Recommendation rules behave predictably.
* Public reports do not expose sensitive data.
* The AI summary feature degrades gracefully.

```
```
