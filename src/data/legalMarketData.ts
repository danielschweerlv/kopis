import type { WorkItem, TimelineItem } from "./warRoomData";

export type MarketPlayer = {
  name: string;
  category: string;
  doesWell: string;
  whereTheyStop: string;
  kopisRead: string;
};

export const topMarketPlayers: MarketPlayer[] = [
  {
    name: "Pinwheel",
    category: "Payroll connectivity API",
    doesWell:
      "Makes payroll data, income and employment verification, direct-deposit switching, and paycheck-linked actions legible to lenders and financial apps.",
    whereTheyStop:
      "It is connectivity infrastructure. The lender still has to own repayment rules, borrower notices, exception servicing, reconciliation, and state-by-state repayment constraints.",
    kopisRead:
      "Useful behind Kopis as a connectivity layer, but not a substitute for the lender-neutral repayment operating layer.",
  },
  {
    name: "Argyle",
    category: "Consumer-permissioned payroll data",
    doesWell:
      "Broad payroll account connectivity, income and employment data, paystubs, reports, and verification workflows that can plug into lending operations.",
    whereTheyStop:
      "It moves authorized payroll data well, but it does not become the compliance, servicing, revocation, and continuity brain for a third-party lender repayment program.",
    kopisRead:
      "Kopis should use this class of connectivity while owning the repayment-specific workflow above it.",
  },
  {
    name: "Atomic",
    category: "Embedded payroll actions",
    doesWell:
      "Strong action layer around payroll accounts, direct-deposit updates, verification, and embedded payroll workflows for banks and fintechs.",
    whereTheyStop:
      "The product surface is not a lender-neutral loan repayment rail with borrower-authorized installment scheduling, exception handling, and job-change recovery.",
    kopisRead:
      "Atomic shows how payroll actions can be embedded; Kopis narrows that lesson to lender repayment orchestration.",
  },
  {
    name: "Kashable",
    category: "Employer-sponsored employee lending",
    doesWell:
      "Clear employee-loan product, employer channel trust, benefit-style framing, and simple borrower-facing offer language.",
    whereTheyStop:
      "It is a lending program, not neutral infrastructure that lets many third-party lenders orchestrate repayment across payroll systems.",
    kopisRead:
      "Borrow the clarity and trust framing; do not copy the lender-owned category position.",
  },
  {
    name: "Salary Finance",
    category: "Employer financial benefit platform",
    doesWell:
      "Makes salary-linked employee finance understandable through the employer-benefits channel and keeps borrower language concrete.",
    whereTheyStop:
      "Its strength is the employer benefit model; it does not solve a general, lender-agnostic repayment rail for multiple lenders and payroll providers.",
    kopisRead:
      "Borrow the plain-English benefits framing while keeping Kopis positioned as infrastructure for lenders.",
  },
];

export const patentAngles: WorkItem[] = [
  {
    title: "Employment-change detection and automated re-linking across payroll systems and employers.",
    body: "Novel territory in Kopis's actual product differentiator — continuity when borrowers change jobs.",
    meta: "Counsel-review candidate",
  },
  {
    title: "Compliance rules engine conditioning deduction schedules on jurisdiction, employer, payroll provider, and loan type.",
    body: "Multi-variable rules engine for deduction scheduling is narrow and specific to Kopis's orchestration role.",
    meta: "Counsel-review candidate",
  },
  {
    title: "Lender-agnostic orchestration abstracting multiple payroll connectivity methods behind one repayment interface.",
    body: "Provider-neutral abstraction layer is novel — competitors own connectivity or lending, not neutral orchestration.",
    meta: "Counsel-review candidate",
  },
  {
    title: "Payment allocation, exception handling, and fallback sequencing when payroll deductions fail or become unavailable.",
    body: "Structured fallback and exception logic specific to payroll repayment scenarios.",
    meta: "Counsel-review candidate",
  },
  {
    title: "Borrower authorization workflows tied to specific deduction events and servicing changes, with revocation state machines.",
    body: "Event-specific consent and revocation state machines are a distinct process innovation.",
    meta: "Counsel-review candidate",
  },
];

export const legalWorkstreams: WorkItem[] = [
  {
    title: "Patent / prior art / FTO",
    body: "Freedom-to-operate analysis vs. Kashable, BMG, Pinwheel, Argyle, Atomic, Highline, Salary Finance patents. Narrow claim drafting. Provisional sequencing.",
    meta: "Needs counsel",
  },
  {
    title: "Lending + servicing licensing",
    body: "Kopis is not a lender but its rails touch loan servicing. Determine whether Kopis is a servicer, a payment processor, a money transmitter, or none — by state and product type.",
    meta: "Needs counsel",
  },
  {
    title: "Payroll provider agreements",
    body: "Direct integration vs. middleware (Pinwheel/Argyle/Atomic) changes the contract stack. Terms must permit third-party repayment use cases and borrower-authorized data flows.",
    meta: "Needs counsel",
  },
  {
    title: "Borrower authorization",
    body: "Consent must be informed, specific, revocable, and documented. Must cover data access, deduction, employer visibility, and downstream servicing events.",
    meta: "Needs counsel",
  },
  {
    title: "Employer agreements",
    body: "When employer involvement is required, you need an enforceable paper trail. Where optional, design it out.",
    meta: "Needs counsel",
  },
  {
    title: "Privacy + data handling",
    body: "Wage, employer, and paystub data are sensitive. GLBA, state privacy laws, and consumer reporting rules apply depending on data use.",
    meta: "Needs counsel",
  },
  {
    title: "Wage deduction analysis",
    body: "Voluntary wage assignments governed by state-by-state statutes. Build the matrix once, version it, treat as core IP.",
    meta: "Needs counsel",
  },
  {
    title: "Consumer protection exposure",
    body: "UDAAP, TILA, FDCPA adjacencies depend on whether Kopis touches origination, servicing, or collection. Clarify role precisely.",
    meta: "Needs counsel",
  },
];

export const legalSequencing: TimelineItem[] = [
  {
    date: "Step 1",
    title: "Provisional patent on narrow orchestration + continuity claims",
    body: "File narrow and defensible from day one. Do not attempt broad payroll deduction claims.",
  },
  {
    date: "Step 2",
    title: "FTO memo on the eight closest comparators",
    body: "Freedom-to-operate analysis against Kashable, BMG, Pinwheel, Argyle, Atomic, Highline, Salary Finance, and Perpay.",
  },
  {
    date: "Step 3",
    title: "State-by-state wage deduction matrix, v1 (5 pilot states)",
    body: "Map recognition, revocation, notice, employer participation, and enforceability rules for the first five pilot states.",
  },
  {
    date: "Step 4",
    title: "Licensing analysis in pilot states",
    body: "Determine servicer, payment processor, and money transmitter exposure in each pilot state.",
  },
  {
    date: "Step 5",
    title: "Borrower authorization form + revocation flow drafted",
    body: "Explicit scope, revocation path, deduction event history, and paystub explainer ready for counsel review.",
  },
  {
    date: "Step 6",
    title: "Payroll provider ToS review for pilot middleware",
    body: "Review Pinwheel, Argyle, and Atomic terms for third-party lender repayment use cases and borrower authorization scope.",
  },
  {
    date: "Step 7",
    title: "Pilot lender agreement template",
    body: "Enforceable commercial template covering pilot economics, data handoff, success criteria, and commercial conversion path.",
  },
  {
    date: "Step 8",
    title: "Privacy policy and data-handling schedule",
    body: "GLBA-aligned privacy policy and data-handling schedule covering wage, employer, and paystub data flows.",
  },
];
