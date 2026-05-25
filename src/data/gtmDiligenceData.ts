import type { MatrixRow, TimelineItem, WorkItem } from "./warRoomData";

export const brandThesis: WorkItem[] = [
  {
    title: "Platform brand (B2B)",
    body: "Sober palette, restrained typography, numerical clarity. Documentation-grade content. Lender-facing tone: operations, economics, risk, compliance.",
    meta: "Lender-facing",
  },
  {
    title: "Paystub-facing brand (borrower)",
    body: "Clear, pronounceable, Google-friendly name for the line item. Every paystub label must resolve to a borrower-facing explainer page.",
    meta: "Borrower-facing",
  },
  {
    title: "Borrower trust center required",
    body: "Pay-stub explainer, consent explainer, employer + lender verification, revocation flow, job-change FAQ, wage-short scenario, data handling explainer, contact + human support.",
    meta: "Required",
  },
  {
    title: "UX copy rules",
    body: "Avoid punitive wage-collection words. Do not euphemize debt. Name the mechanic, show the number before consent, and put revocation beside authorization.",
    meta: "Copy rules",
  },
];

export const seoArchitecture: MatrixRow[] = [
  {
    first: "/ (home)",
    second: "Lender buying intent",
    third: "Institutional B2B landing. Lender ROI hero, product layers, logos, docs link.",
  },
  {
    first: "/platform",
    second: "Lender buying intent",
    third: "Orchestration, compliance engine, continuity, servicing UX.",
  },
  {
    first: "/verticals/personal, /medical, /auto",
    second: "Lender vertical",
    third: "Vertical-specific lender pages with loss-rate framing.",
  },
  {
    first: "/compliance",
    second: "Lender + borrower",
    third: "State-by-state voluntary wage deduction guide — genuine reference content.",
  },
  {
    first: "/docs",
    second: "Lender developer",
    third: "API reference, consent schema, reconciliation docs.",
  },
  {
    first: "/trust",
    second: "Borrower confusion",
    third: "Borrower trust center root. All paystub labels resolve here.",
  },
  {
    first: "/trust/[line-item]",
    second: "Borrower confusion",
    third: "Exact-match pages for every paystub label Kopis ships.",
  },
  {
    first: "/compare/[competitor]",
    second: "Lender evaluation",
    third: "Honest comparisons: Pinwheel alternative, Kashable alternative, Highline alternative, EWA alternative.",
  },
];

export const buyerNeeds: MatrixRow[] = [
  {
    first: "Lender CFO",
    second: "Loss rate reduction, collection cost per loan, unit economics per vertical.",
    third: "",
  },
  {
    first: "Lender Head of Servicing",
    second: "Reconciliation clarity, exception handling, integration effort.",
    third: "",
  },
  {
    first: "Lender Compliance",
    second: "State coverage, consent framework, audit trail, revocation mechanics.",
    third: "",
  },
  {
    first: "Lender CTO",
    second: "API quality, SLA, sandbox, time to pilot.",
    third: "",
  },
];

export const claimsAnalysis: MatrixRow[] = [
  {
    first: "No company has built this",
    second: "Redirect",
    third: "Lead with the gap: 'Nobody has productized the lender-neutral orchestration rail.' That's accurate and defensible.",
  },
  {
    first: "Kashable is a 1:1 competitor",
    second: "Sharpen",
    third: "'Kashable proves the mechanic. Kopis productizes the rail.'",
  },
  {
    first: "Pinwheel is what Kopis wants to build",
    second: "Sharpen",
    third: "Position Pinwheel/Argyle/Atomic as inputs Kopis abstracts — not competitors to out-build.",
  },
  {
    first: "Broad patent claims on payroll deduction will hold",
    second: "Retire",
    third: "File narrow. Focus on continuity, rules engine, and orchestration — those are the honest IP frontier.",
  },
  {
    first: "Narrow claims around continuity and rules-engine may be defensible",
    second: "Counsel-review candidate",
    third: "Base the provisional patent strategy here from day one.",
  },
  {
    first: "Payroll-linked repayment materially lowers default rates",
    second: "Qualify",
    third: "Treat third-party evidence as directional. The pilot must generate Kopis-specific proof.",
  },
  {
    first: "Mortgage is the right first vertical",
    second: "Redirect",
    third: "Personal and medical installment first. Mortgage is a compelling long-term vertical — just not the pilot.",
  },
  {
    first: "Employer distribution is the fastest GTM path",
    second: "Sharpen",
    third: "Lender-led is primary; employer channel is a secondary trust amplifier.",
  },
  {
    first: "Highline is a direct competitor",
    second: "Benchmark",
    third: "Benchmark on neutrality, multi-lender support, compliance depth, and continuity.",
  },
  {
    first: "Voluntary wage assignment is broadly legal",
    second: "Redirect",
    third: "Build the state matrix with counsel. It becomes core infrastructure and genuine IP.",
  },
  {
    first: "Consumer branding drives lender adoption",
    second: "Redirect",
    third: "B2B institutional brand for lenders; borrower trust center for the consumer touch.",
  },
  {
    first: "Commodity payroll API framing",
    second: "Retire",
    third: "Own 'lender-agnostic payroll repayment infrastructure.' More accurate, more defensible, and harder to compare-shop.",
  },
];

export const operatingPlan: TimelineItem[] = [
  {
    date: "Next 7 days",
    title: "Next 7 days",
    body: "Shortlist 3 fintech/patent counsel firms and book intros. Send outreach to 10 target pilot lenders. Write the 1-page Kopis brief for counsel. Draft provisional patent skeleton with narrow claims only. Sanity-check positioning with 2 trusted operators.",
  },
  {
    date: "Next 30 days",
    title: "Next 30 days",
    body: "Retain counsel. Begin FTO memo. Sign NDA + discovery call with first pilot lender prospects. Evaluate Pinwheel / Argyle / Atomic middleware. Spec the MVP in writing. Build borrower trust center copy drafts. Publish state-compliance matrix v0 (internal).",
  },
  {
    date: "Next 90 days",
    title: "Next 90 days",
    body: "Design-partner LOI signed. FTO memo complete. Provisional patent filed. Middleware selected and contract in place. MVP build underway. State compliance matrix v1 (5 pilot states) validated. Seed pitch deck refreshed. Investor warm-intro list built.",
  },
];

export const criticalPath: WorkItem[] = [
  {
    title: "Retain counsel",
    body: "Retain patent / fintech counsel with voluntary wage deduction experience.",
    meta: "Critical path",
  },
  {
    title: "Draft provisional patent",
    body: "Draft narrow provisional patent (continuity, rules engine, orchestration).",
    meta: "Critical path",
  },
  {
    title: "FTO memo",
    body: "FTO memo against the 8 closest comparables.",
    meta: "Critical path",
  },
  {
    title: "Pick pilot states",
    body: "Pick 5 pilot states with counsel.",
    meta: "Critical path",
  },
  {
    title: "Select middleware partner",
    body: "Select payroll middleware partner (Pinwheel or Argyle) and verify ToS.",
    meta: "Critical path",
  },
  {
    title: "Sign design-partner LOI",
    body: "Sign design-partner LOI with one pilot lender.",
    meta: "Critical path",
  },
  {
    title: "Build MVP",
    body: "Build MVP (API, consent, rules engine v1, reconciliation v1, trust center v1).",
    meta: "Critical path",
  },
  {
    title: "Launch pilot",
    body: "Launch pilot. Instrument metrics.",
    meta: "Critical path",
  },
  {
    title: "Raise seed",
    body: "Raise seed on pilot data + design-partner logo.",
    meta: "Critical path",
  },
];
