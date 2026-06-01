import type { WorkItem, TimelineItem } from "./warRoomData";

export type MarketPlayer = {
  name: string;
  category: string;
  doesWell: string;
  whereTheyStop: string;
  kopisRead: string;
  source?: { label: string; href: string };
};

export const topMarketPlayers: MarketPlayer[] = [
  {
    name: "Highline",
    category: "Pay-by-paycheck repayment network",
    doesWell:
      "The closest direct comparator. Highline markets Pay by Paycheck for lenders and describes capturing funds before direct deposit by splitting the payment when payroll runs.",
    whereTheyStop:
      "It is the repayment rail itself. The broader lender workflow — consent records, compliance, servicing, reconciliation, and job-change recovery — still has to live somewhere.",
    kopisRead:
      "Treat as the closest repayment-rail comparator. Kopis competes on the operating layer above the rail, not the rail itself — and Kopis's own funds-flow role stays counsel-dependent.",
    source: { label: "highline.co", href: "https://highline.co/" },
  },
  {
    name: "Truv",
    category: "Paycheck-linked lending and payroll data",
    doesWell:
      "Runs a Paycheck Linked Lending product that directs loan payments from paychecks and supports lender use cases on top of payroll data.",
    whereTheyStop:
      "It is payroll and paycheck-linked infrastructure. It does not become the neutral, multi-lender brain for consent, compliance, and continuity.",
    kopisRead:
      "A payroll-linked infrastructure competitor or potential rail. Kopis should own the lender operating layer above it.",
    source: { label: "docs.truv.com", href: "https://docs.truv.com/docs/paycheck-linked-loans" },
  },
  {
    name: "Pinwheel",
    category: "Payroll connectivity and pay-by-paycheck infrastructure",
    doesWell:
      "Markets Pay by Paycheck for lenders, with payments flowing automatically from each paycheck on top of strong payroll connectivity.",
    whereTheyStop:
      "It is connectivity and payment infrastructure. The lender still owns repayment rules, borrower notices, exception servicing, and reconciliation.",
    kopisRead:
      "Useful behind Kopis as a connectivity and payment layer. Kopis abstracts over this kind of provider.",
    source: { label: "pinwheelapi.com", href: "https://www.pinwheelapi.com/pay-by-paycheck" },
  },
  {
    name: "Kashable",
    category: "Employer-sponsored employee lending",
    doesWell:
      "A clear employee-loan program integrated with employer HRIS and payroll, repaid through payroll, with simple borrower-facing language.",
    whereTheyStop:
      "It is a lending program reached through the employer, not neutral infrastructure for many third-party lenders.",
    kopisRead:
      "Proof that payroll-repaid lending works. Borrow the clarity; Kopis stays neutral third-party infrastructure.",
    source: { label: "kashable.com", href: "https://kashable.com/loans.html" },
  },
  {
    name: "BMG / LoansAtWork",
    category: "Employee loans via payroll deduction",
    doesWell:
      "Offers employee loans repaid from a paycheck, payroll deduction, or bank account through the employer channel.",
    whereTheyStop:
      "Another employer-channel lending program — a market proof point, not the same category as Kopis.",
    kopisRead:
      "Treat as evidence the market exists, not as a direct comparator to Kopis's operating layer.",
    source: { label: "bmgmoney.com", href: "https://www.bmgmoney.com/loansatwork/" },
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
    body: "Structured fallback and exception logic specific to payroll linked repayment scenarios.",
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
