import type { MatrixRow, TimelineItem, WorkItem } from "./warRoomData";

// Tab 2 — Already Exists?
// Honest map of what is already on the market and what it means for Kopis.
export const alreadyExistsRows: MatrixRow[] = [
  {
    first: "Payroll deduction loans",
    second: "Kashable, BMG / LoansAtWork, Salary Finance, TrueConnect, OneBlinc",
    third: "Repaying a loan from a paycheck is not a new idea. Kopis should not claim it invented the behavior.",
  },
  {
    first: "Paycheck-linked repayment rails",
    second: "Highline, Truv, Pinwheel",
    third: "The repayment category is already active. Kopis competes on the work above the rail, not the rail itself.",
  },
  {
    first: "Payroll APIs and connectivity",
    second: "Pinwheel, Argyle, Atomic, Truv",
    third: "These move payroll data and actions. Kopis sits on top of them and should not be pitched as another payroll API.",
  },
  {
    first: "Employer-sponsored lending",
    second: "Kashable, BMG, Salary Finance",
    third: "Proof that payroll-repaid lending works, but these reach borrowers through the employer, not through many third-party lenders.",
  },
  {
    first: "The Kopis opening",
    second: "Neutral lender operating layer",
    third: "No one owns the shared layer for consent, compliance, servicing, reconciliation, exceptions, and job-change continuity across many lenders.",
  },
];

// Tab 3 — Top 5 Competitors (watchlist)
// Players to track without treating them as direct comparators.
export const watchlistPlayers: WorkItem[] = [
  {
    title: "Argyle",
    body: "Consumer-permissioned payroll data and connectivity. A likely input under Kopis, not a competitor to out-build.",
    meta: "Connectivity",
  },
  {
    title: "Atomic",
    body: "Embedded payroll actions for banks and fintechs. Shows the action layer; Kopis narrows it to lender repayment.",
    meta: "Connectivity",
  },
  {
    title: "Salary Finance",
    body: "Employer financial-benefit platform. Strong borrower clarity, but an employer-channel model rather than neutral infrastructure.",
    meta: "Employer channel",
  },
  {
    title: "TrueConnect / BeneMoney",
    body: "Employer-sponsored small-dollar loans repaid through payroll. Another proof point for the market, not the same category.",
    meta: "Employer channel",
  },
  {
    title: "OneBlinc & Perpay",
    body: "Consumer-facing paycheck-linked products. Useful for borrower trust patterns; Kopis turns the behavior into a B2B lender rail.",
    meta: "Consumer proof",
  },
];

// Tab 4 — KOPIS Difference
// Where each existing category stops and where Kopis fits.
export const differenceRows: MatrixRow[] = [
  {
    first: "Employer lenders",
    second: "Make loans through employer-benefit channels.",
    third: "Kopis serves many third-party lenders, not one employer-sponsored loan program.",
  },
  {
    first: "Payroll APIs",
    second: "Provide payroll connectivity, data, and actions.",
    third: "Kopis sits above connectivity and runs the repayment workflow.",
  },
  {
    first: "Paycheck repayment rails",
    second: "Help route a repayment from wages.",
    third: "Kopis adds consent, compliance, servicing, reconciliation, exceptions, and continuity around the rail.",
  },
  {
    first: "Loan servicers",
    second: "Service loans in general.",
    third: "Kopis focuses on payroll-linked repayment events and the exceptions they create.",
  },
  {
    first: "A lender's own build",
    second: "One lender wires up its own payroll integration.",
    third: "That lender then owns a state-by-state rules engine, consent and revocation logic, reconciliation, and job-change recovery forever. Kopis carries that compounding, compliance-heavy work so the lender's team does not have to.",
  },
];

// Tab 4 — the wedge, in one line.
export const differenceWedge: WorkItem[] = [
  {
    title: "One integration, many payroll systems, one shared layer",
    body: "A lender connects to Kopis once. Kopis handles consent, state rules, repayment setup, reconciliation, failures, revocations, and job changes across whatever payroll providers sit underneath.",
    meta: "The wedge",
  },
  {
    title: "The borrower still has to understand it",
    body: "Even though Kopis is lender-facing, the borrower sees the deduction. They need a plain explanation of the amount, the timing, how to stop it, and what happens if they change jobs.",
    meta: "Trust requirement",
  },
];

// Tab 5 — Technology: the eight system layers.
export const systemLayers: WorkItem[] = [
  {
    title: "1. Lender-facing API and orchestration",
    body: "Where a lender creates a repayment plan, sends consent, schedules deductions, and gets callbacks.",
  },
  {
    title: "2. Payroll connectivity abstraction",
    body: "A neutral layer over Pinwheel, Argyle, Atomic, and later direct integrations, so lenders never wire up each provider themselves.",
  },
  {
    title: "3. Compliance rules engine",
    body: "Applies state-by-state rules to deduction schedules, authorization, and revocation before anything runs.",
  },
  {
    title: "4. Borrower authorization and revocation",
    body: "Records what the borrower agreed to and gives a clean path to stop or change it.",
  },
  {
    title: "5. Servicing and reconciliation",
    body: "Tracks repayment events and shows the lender a clear, auditable status.",
  },
  {
    title: "6. Exception handling",
    body: "Manages the messy cases: a failed setup, a short paycheck, a revocation, a missed deduction.",
  },
  {
    title: "7. Job-change continuity",
    body: "Detects when a borrower changes employers, pauses the loan, and helps reconnect the repayment path.",
  },
  {
    title: "8. Borrower trust layer",
    body: "A plain-language dashboard so the borrower can see and understand what they authorized.",
  },
];

// Tab 5 — the repayment flow, step by step.
export const repaymentFlow: TimelineItem[] = [
  {
    date: "1",
    title: "Lender creates a repayment plan",
    body: "The lender sets up the loan and the repayment terms through the Kopis API.",
  },
  {
    date: "2",
    title: "Borrower reviews and authorizes",
    body: "The borrower sees the amount, timing, and paycheck source, then approves payroll-linked repayment.",
  },
  {
    date: "3",
    title: "Kopis records consent and applies rules",
    body: "Kopis stores the authorization and checks it against pilot-state rules before anything is scheduled.",
  },
  {
    date: "4",
    title: "A payroll provider handles setup",
    body: "Kopis coordinates the deduction setup through a payroll connectivity provider where it is allowed.",
  },
  {
    date: "5",
    title: "Repayment events are tracked",
    body: "Each deduction is recorded as it happens, with a full event history.",
  },
  {
    date: "6",
    title: "The lender sees reconciliation and exceptions",
    body: "The lender gets a clear status and a queue of anything that needs attention.",
  },
  {
    date: "7",
    title: "Job-change workflow starts if needed",
    body: "If the borrower changes jobs, Kopis pauses, notifies, and helps re-link the repayment path.",
  },
];

// Tab 5 — technology boundaries (what NOT to claim yet).
export const techBoundaries: string[] = [
  "Kopis does not connect directly to every payroll provider on day one.",
  "Kopis has not solved 50-state compliance.",
  "Kopis does not fully automate job-change recovery in v1.",
  "Kopis does not move funds unless counsel confirms that role.",
  "Kopis has no final legal status as a non-servicer or non-money-transmitter.",
];

// Tab 6 — Next 30 Days workstream table.
export const workstreamRows: MatrixRow[] = [
  {
    first: "Website simplification",
    second: "Daniel",
    third: "Reduce the War Room to six tabs.",
    fourth: "In progress",
  },
  {
    first: "Thesis rewrite",
    second: "Daniel",
    third: "Rewrite all copy in plain English.",
    fourth: "Next",
  },
  {
    first: "Competitor research",
    second: "Daniel / Josh",
    third: "Lock the top five competitors and their source links.",
    fourth: "Next",
  },
  {
    first: "Legal review",
    second: "Counsel",
    third: "Wage assignment, revocation, money transmitter, servicer role.",
    fourth: "Needs counsel",
  },
  {
    first: "Middleware review",
    second: "Counsel / product",
    third: "Review Pinwheel, Argyle, Atomic, and Truv terms.",
    fourth: "Needs counsel",
  },
  {
    first: "Patent / FTO",
    second: "Patent counsel",
    third: "Review Highline, Truv, Pinwheel, Kashable, BMG, and prior art.",
    fourth: "Needs counsel",
  },
  {
    first: "MVP scope",
    second: "Product",
    third: "Define the smallest lender API, consent, and reconciliation flow.",
    fourth: "Draft",
  },
  {
    first: "Pilot plan",
    second: "Josh / Daniel",
    third: "Identify the first lender type and the pilot states.",
    fourth: "Draft",
  },
];

// Tab 3 — Highline head-to-head.
// The closest comparator, side by side. Keep the funds-flow line counsel-safe.
export const highlineHeadToHead: MatrixRow[] = [
  {
    first: "Core role",
    second: "The pay-by-paycheck repayment rail itself.",
    third: "The operating layer above the rail: consent, rules, servicing, reconciliation, and continuity.",
  },
  {
    first: "Lender coverage",
    second: "Its own repayment network.",
    third: "Neutral layer meant to serve many third-party lenders from one integration.",
  },
  {
    first: "Compliance",
    second: "Runs its own rail's flow.",
    third: "State-by-state rules engine, authorization, and revocation as a shared service (counsel-dependent).",
  },
  {
    first: "Job change",
    second: "Tied to its own repayment setup.",
    third: "Detects job changes, pauses, and helps re-link the repayment path (manual in v1).",
  },
  {
    first: "Funds movement",
    second: "Describes capturing funds before direct deposit.",
    third: "Coordinates authorized repayment; Kopis's own funds-flow role stays counsel-dependent.",
  },
];

// Tab 5 — the dependency risk, named explicitly (not buried in a checklist).
export const middlewareRisk: WorkItem[] = [
  {
    title: "The rail leans on payroll middleware",
    body: "Kopis sits on top of payroll connectivity providers (Pinwheel, Argyle, Atomic, Truv). If a provider's terms forbid third-party-lender repayment, reprices access, or vertically integrates into lender repayment itself, the rail underneath Kopis is exposed.",
    meta: "Key dependency",
  },
  {
    title: "How Kopis limits the exposure",
    body: "Confirm third-party-lender repayment is permitted in writing before the pilot, keep more than one provider in scope so no single one is a chokepoint, and plan a path toward direct payroll integrations over time. All middleware-terms review stays counsel-dependent.",
    meta: "Mitigation",
  },
];

// Tab 6 — counsel gates to keep visible.
export const counselGates: string[] = [
  "Voluntary wage assignment",
  "Revocation rules",
  "Money transmitter analysis",
  "Servicer role",
  "Payroll middleware terms",
  "Patent / freedom-to-operate",
  "Pilot-state scope",
];
