# KOPIS War Room Handoff

Date: 2026-05-21
Source inspected: Perplexity Computer artifact and task thread in Chrome.

## Source Links

- Perplexity artifact: https://www.perplexity.ai/computer/a/kopis-war-room-j_GJRsPxRT2C9Wc35YPfZQ
- Source task thread discovered from artifact: https://www.perplexity.ai/computer/tasks/d7bef7d2-258a-44cb-9419-74d69523ecf1
- Embedded app iframe was served from a temporary `sites.pplx.app/sites/proxy/.../kopis-deploy/index.html` URL. Treat that URL as expiring/private, not durable.

## What KOPIS Is

Kopis is a payroll linked repayment system. It lets third-party lenders collect installment repayments directly from borrower wages before funds reach the borrower's bank account.

The opportunity is not inventing payroll deduction. The opportunity is a standardized, neutral, multi-lender orchestration layer that any lender can integrate once to reach payroll systems with borrower-consented repayment, state-aware compliance, servicing/reconciliation, and job-change continuity.

Preferred positioning:

- Payroll linked repayment system.
- Payroll linked repayment system for third-party lenders.
- One lender integration, many payroll systems.

Avoid:

- "We invented payroll linked repayment."
- "Plaid for payroll" as the primary frame.
- "Financial wellness" as the buyer-facing pitch.
- Mortgage as the first vertical.

## War Room Contents Extracted

The Perplexity artifact has these main sections:

1. Overview
2. Thesis
3. Strategy + Legal
4. Market + Competitors
5. Product + Pilot
6. GTM + Brand + SEO
7. Diligence + Action Plan
8. Deck + Brief + Brand Assets

There are also generated assets:

- `kopis-thesis-explainer.mp4`, 2:29, H.264/AAC, generated in the Perplexity task.
- Investor deck links inside the artifact.
- Strategy brief link inside the artifact.

## Competitive Map

Employer lenders:

- Kashable
- BMG / LoansAtWork
- TrueConnect
- Salary Finance
- OneBlinc

Payroll APIs / connectivity:

- Pinwheel
- Argyle
- Atomic

Closest repayment rail comparator:

- Highline

Consumer proof point:

- Perpay

## Product Layers

1. Lender-facing API + orchestration
2. Payroll connectivity abstraction over Pinwheel, Argyle, Atomic, and later direct integrations
3. Compliance rules engine
4. Borrower authorization and revocation system
5. Servicing + reconciliation
6. Exception handling
7. Job-switch continuity engine
8. Borrower dashboard / trust layer

## MVP Scope

Build:

- Lender API for plan creation, consent intake, and deduction scheduling.
- Middleware-based payroll connectivity for one or two providers.
- Compliance rules engine seeded with 5 pilot states.
- Borrower authorization flow with explicit scope and revocation.
- Basic servicing and reconciliation dashboards for the lender.
- Job-change detection v1: notify borrower, pause loan, manual re-link.
- Minimal borrower trust center with paystub explainer and FAQ.

Defer:

- Direct payroll integrations.
- Mortgage vertical.
- Multi-lender payment waterfall prioritization.
- Automated re-link across employers.
- Employer-facing portal.
- 50-state compliance matrix.
- White-labeled borrower dashboard.

## Pilot Plan

Best first pilot:

- Mid-market personal or medical installment lender.
- 5 pilot states.
- Pinwheel or Argyle middleware.
- 6-month pilot.
- 500 to 1,500 borrower opt-ins.
- Comparable baseline cohort.

Target success criteria:

- At least 30% reduction in 60+ day delinquency.
- Less than 5% revocation.
- Less than 10% exception rate.
- Pilot lender commits to commercial contract.

Candidate pilot states mentioned as indicative only, requiring counsel verification:

- TX, FL, GA, AZ, NC, OH, TN, MO, CO, IN

## Legal Strategy

Legal is a product workstream, not a late-stage review.

Focus patent strategy on narrow defensible claims:

- Employment-change detection and automated re-linking.
- Compliance rules engine conditioned on jurisdiction, employer, payroll provider, and loan type.
- Lender-agnostic orchestration over multiple payroll connectivity methods.
- Payment allocation, exception handling, and fallback sequencing.
- Borrower authorization workflows tied to deduction events, servicing changes, revocation state machines.

Immediate legal questions:

- Is voluntary wage assignment recognized in pilot states for third-party lenders without employer participation?
- Does Kopis need money transmitter licensing in any state?
- Is Kopis a servicer under any state installment loan act?
- What are borrower authorization and revocation requirements?
- Do payroll API middleware terms allow third-party lender repayment use cases?
- Does existing IP read on continuity or rules-engine claims?

## GTM

Primary buyer: lenders. Borrowers and employers are downstream beneficiaries.

Initial ICP:

- Mid-market installment lenders with $50M to $500M originations.
- Medical payment plan providers.
- Subprime-adjacent personal lenders.

Best initial buyer:

- Mid-market personal or medical installment lender with more than $100M in annual originations, visible loss-rate problem, and no in-house payroll integration effort.

Lead pitch:

- "Your loss rate on payroll-eligible borrowers drops materially when we move repayment upstream of the checking account."
- "One integration, many payroll systems, compliant across your footprint."
- "We own the compliance matrix and borrower consent trail so your servicing team does not have to."
- "If a borrower changes jobs, your loan does not go delinquent; we re-link."

## Design Council Verdict

The content is strategically strong, but the artifact still feels like a Perplexity-generated research dashboard. It should be rebuilt as a real founder command center.

Design direction:

- Institutional control room, not sci-fi terminal.
- Bank infrastructure plus legal operating room plus lender diligence portal.
- Restrained dark or warm graphite base.
- Kopis green as a signal color, not a dominant glow.
- More structured work surfaces: tables, filters, status chips, source links, confidence labels.

Main improvements:

- Add executive landing view with current stage, biggest risk, next 7 days, pilot target, legal status, fundraising readiness.
- Turn text into operating modules: legal matrix, competitor matrix, pilot tracker, MVP scope, fundraising checklist.
- Add source/evidence discipline with `Verified`, `Likely`, `Needs counsel`, and `Assumption` labels.
- Separate audience modes: founder command center, counsel packet, lender pilot brief, investor deck/brief, borrower trust center draft.
- Rebuild outside Perplexity as a local repo/app.

## Local Files Created During Inspection

- `/Users/daniel/Documents/KOPIS/perplexity-kopis-war-room.png`
- `/Users/daniel/Documents/KOPIS/perplexity-kopis-task.png`
- `/Users/daniel/Documents/KOPIS/kopis-app-clicked.png`
- `/Users/daniel/Documents/KOPIS/kopis-app-fullscreen.png`
- `/Users/daniel/Documents/KOPIS/docs/agent/kopis-war-room-handoff.md`

## Next Best Move

Create a real local KOPIS project:

1. Extract/download the Perplexity artifact HTML and generated assets if possible.
2. Scaffold a static app or Next/Vite app in `/Users/daniel/Documents/KOPIS`.
3. Add `AGENTS.md`, `PRODUCT.md`, and `DESIGN.md`.
4. Convert the war-room content into structured JSON/Markdown.
5. Rebuild the command center around operational modules.
6. Verify desktop and mobile with Chrome/browser-harness.
