export type RouteId =
  | "command-brief"
  | "what-is-kopis"
  | "legal-path"
  | "market-competitors"
  | "build-pilot"
  | "growth-system"
  | "next-moves"
  | "investor-kit";

export type RouteDefinition = {
  id: RouteId;
  number: string;
  path: string;
  label: string;
  summary: string;
  accent: "blue" | "iris" | "violet" | "pink" | "coral" | "amber";
};

export type FactCard = {
  label: string;
  value: string;
  detail: string;
};

export type WorkItem = {
  title: string;
  body: string;
  meta?: string;
};

export type MatrixRow = {
  first: string;
  second: string;
  third: string;
  fourth?: string;
};

export type TimelineItem = {
  date: string;
  title: string;
  body: string;
};

export type ResourceItem = {
  title: string;
  kind: string;
  detail: string;
};

export const routes: RouteDefinition[] = [
  {
    id: "command-brief",
    number: "01",
    path: "/command-brief",
    label: "Command Brief",
    summary: "Snapshot of focus, legal gate, pilot target, and next 7 days.",
    accent: "blue",
  },
  {
    id: "what-is-kopis",
    number: "02",
    path: "/what-is-kopis",
    label: "Core Thesis",
    summary: "The problem, solution, differentiation, and magnitude.",
    accent: "blue",
  },
  {
    id: "legal-path",
    number: "03",
    path: "/legal-path",
    label: "Legal Path",
    summary: "Legal architecture, documentation plan, and risk map.",
    accent: "violet",
  },
  {
    id: "market-competitors",
    number: "04",
    path: "/market-competitors",
    label: "Market + Competitors",
    summary: "Market structure, landscape, and competitive edges.",
    accent: "pink",
  },
  {
    id: "build-pilot",
    number: "05",
    path: "/build-pilot",
    label: "Build + Pilot",
    summary: "MVP scope, pilot design, timeline, and success criteria.",
    accent: "coral",
  },
  {
    id: "growth-system",
    number: "06",
    path: "/growth-system",
    label: "Growth System",
    summary: "Distribution engine, lender flywheel, and unit economics.",
    accent: "amber",
  },
  {
    id: "next-moves",
    number: "07",
    path: "/next-moves",
    label: "Next Moves",
    summary: "Immediate priorities, decision log, and owner map.",
    accent: "coral",
  },
  {
    id: "investor-kit",
    number: "08",
    path: "/investor-kit",
    label: "Investor Kit",
    summary: "Deck, brief, audio overview, and brand assets.",
    accent: "violet",
  },
];

export const whatIsKopis: WorkItem[] = [
  {
    title: "Neutral repayment rail",
    body:
      "Kopis lets third-party lenders integrate once, then orchestrate borrower-consented repayment across payroll connectivity providers.",
  },
  {
    title: "Above payroll connectivity",
    body:
      "The product sits above Pinwheel, Argyle, Atomic, and later direct payroll methods. It owns consent, rules, servicing, reconciliation, exceptions, and job-change continuity.",
  },
  {
    title: "Not the lender",
    body:
      "Kopis does not originate loans, set borrower terms, or become the payroll API. It is the operating layer between lenders, payroll connectivity, and borrower repayment events.",
  },
  {
    title: "Continuity wedge",
    body:
      "When a borrower changes jobs, Kopis keeps the repayment path from silently breaking by pausing, notifying, and guiding manual re-linking before avoidable delinquency.",
  },
];

export const productLayers: MatrixRow[] = [
  {
    first: "Lender API",
    second: "Plan creation, consent intake, deduction scheduling, callbacks.",
    third: "One lender integration, many payroll paths.",
  },
  {
    first: "Payroll abstraction",
    second: "Provider-neutral layer over middleware and later direct integrations.",
    third: "Avoids one-off lender builds against every provider.",
  },
  {
    first: "Compliance rules",
    second: "Pilot-state constraints, authorization, revocation, and event trails.",
    third: "Legal review becomes an operating system, not a late memo.",
  },
  {
    first: "Servicing operations",
    second: "Reconciliation, exception handling, lender reporting, and borrower notices.",
    third: "Makes repayment usable by real servicing teams.",
  },
];

export const nonClaims = [
  "Kopis is not a lender.",
  "Kopis is not a payroll API.",
  "Kopis did not invent payroll deduction.",
  "The primary buyer frame is lender infrastructure, not financial wellness.",
  "Mortgage is not the first vertical.",
];

export const legalQuestions: WorkItem[] = [
  {
    title: "Voluntary wage assignment",
    body:
      "Map recognition, revocation, notice, employer participation, and enforceability rules for the first five pilot states before pilot commitments.",
    meta: "Counsel-dependent",
  },
  {
    title: "Money transmitter perimeter",
    body:
      "Document whether Kopis ever controls funds, holds repayment balances, directs settlement, or only coordinates authorized repayment instructions.",
    meta: "Funds-flow memo",
  },
  {
    title: "Servicer role",
    body:
      "Classify reconciliation, borrower communication, exception handling, payment changes, and job-change notices under state installment-loan servicing rules.",
    meta: "State act review",
  },
  {
    title: "Middleware repayment terms",
    body:
      "Review Pinwheel, Argyle, and Atomic terms for third-party lender repayment use cases, borrower authorization scope, and repayment event permissions.",
    meta: "Commercial terms",
  },
  {
    title: "Borrower consent trail",
    body:
      "Prepare explicit authorization, revocation, deduction event history, paystub explainer, and support language that counsel can review by state.",
    meta: "Product + counsel",
  },
];

export const fundsFlowRows: MatrixRow[] = [
  {
    first: "Borrower",
    second: "Authorizes repayment for a specific loan, amount logic, and deduction path.",
    third: "Needs clear revocation and event history.",
  },
  {
    first: "Payroll provider",
    second: "Supplies payroll connectivity and repayment instruction capability where allowed.",
    third: "Terms must permit repayment use cases.",
  },
  {
    first: "Lender",
    second: "Owns the loan, borrower relationship, servicing obligations, and commercial pilot economics.",
    third: "Needs audit trail and reconciliation visibility.",
  },
  {
    first: "Kopis",
    second: "Orchestrates consent, rules, scheduling, exceptions, reconciliation, and continuity.",
    third: "Role must stay consistent with legal analysis.",
  },
];

export const competitorRows: MatrixRow[] = [
  {
    first: "Employer lenders",
    second: "Kashable, BMG / LoansAtWork, TrueConnect, Salary Finance, OneBlinc",
    third: "Loan product, employer channel, and payroll-linked repayment inside their own lending motion.",
    fourth: "Kopis is neutral infrastructure for many third-party lenders.",
  },
  {
    first: "Payroll APIs",
    second: "Pinwheel, Argyle, Atomic",
    third: "Connectivity to payroll, income, employment, direct deposit, and account switching.",
    fourth: "Kopis owns repayment orchestration, consent, compliance, servicing, and continuity above connectivity.",
  },
  {
    first: "Repayment rail comparator",
    second: "Highline",
    third: "Payroll-linked bill payment and repayment-adjacent infrastructure.",
    fourth: "Kopis narrows around lender diligence, installment-loan compliance, and multi-provider orchestration.",
  },
  {
    first: "Consumer proof point",
    second: "Perpay",
    third: "Consumer-facing payroll repayment behavior and trust model.",
    fourth: "Kopis turns the behavior into a B2B lender rail with borrower consent controls.",
  },
];

export const marketSignals: WorkItem[] = [
  {
    title: "Buyer pain",
    body:
      "Installment lenders care about loss reduction, lower servicing burden, auditability, and fewer avoidable delinquencies after employment changes.",
  },
  {
    title: "Build-vs-buy wedge",
    body:
      "A lender can connect to payroll APIs directly, but still has to own consent, state rules, exception workflows, reconciliation, and continuity.",
  },
  {
    title: "Initial vertical",
    body:
      "Personal and medical installment lenders are the clean first wedge. Mortgage adds heavier complexity before the rail is proven.",
  },
];

export const mvpRows: MatrixRow[] = [
  {
    first: "Lender API",
    second: "Plan creation, borrower consent intake, deduction scheduling, and callbacks.",
    third: "Custom waterfall logic and deep LOS integrations.",
  },
  {
    first: "Payroll connectivity",
    second: "One or two middleware providers behind a provider-neutral interface.",
    third: "Direct payroll integrations and employer portal.",
  },
  {
    first: "Compliance rules",
    second: "Five pilot-state rules seeded from counsel review.",
    third: "Final 50-state legal matrix.",
  },
  {
    first: "Borrower consent",
    second: "Explicit scope, revocation path, deduction event history, and paystub explainer.",
    third: "White-labeled borrower dashboard.",
  },
  {
    first: "Servicing operations",
    second: "Reconciliation dashboard, exception queue, and manual job-change re-linking.",
    third: "Automated re-linking across employers.",
  },
];

export const pilotFacts: FactCard[] = [
  {
    label: "Lender profile",
    value: "$50M to $500M originations",
    detail: "Mid-market personal or medical installment lender with visible delinquency pressure.",
  },
  {
    label: "Pilot cohort",
    value: "500 to 1,500 opt-ins",
    detail: "Six-month pilot with a comparable baseline cohort and auditable repayment events.",
  },
  {
    label: "Target lift",
    value: "30%+ 60-day delinquency reduction",
    detail: "Threshold must be validated against lender portfolio economics before external claims.",
  },
  {
    label: "Operating bounds",
    value: "Five counsel-screened states",
    detail: "Candidate states stay indicative until wage assignment, servicing, and funds-flow review is complete.",
  },
];

export const pilotTimeline: TimelineItem[] = [
  {
    date: "May 22",
    title: "Wage assignment framework",
    body: "Create the state-screening memo outline and counsel question set.",
  },
  {
    date: "May 23",
    title: "Funds flow and roles",
    body: "Draw borrower, lender, payroll provider, Kopis, repayment account, and settlement responsibilities.",
  },
  {
    date: "May 26",
    title: "MVP scope lock",
    body: "Freeze the smallest credible product: consent, scheduling, reconciliation, exceptions, manual re-link.",
  },
  {
    date: "May 28",
    title: "Diligence packet v1",
    body: "Package pilot brief, legal queue, competitor wedge, borrower trust draft, and implementation lift.",
  },
];

export const growthItems: WorkItem[] = [
  {
    title: "Primary ICP",
    body:
      "Mid-market installment lenders with annual originations above $100M, measurable loss-rate pressure, and no internal payroll repayment rail.",
  },
  {
    title: "Lead pitch",
    body:
      "Your loss rate on payroll-eligible borrowers drops when repayment moves upstream of the checking account, with consent and servicing controls built in.",
  },
  {
    title: "Distribution sequence",
    body:
      "Founder-led lender outreach first, counsel-reviewed pilot packet second, narrow proof cohort third, investor story after operational proof.",
  },
  {
    title: "Borrower trust layer",
    body:
      "Plain-language authorization, paystub explanation, revocation path, job-change support, and event history make opt-in quality measurable.",
  },
];

export const gtmPhases: TimelineItem[] = [
  {
    date: "Phase 1",
    title: "Target accounts",
    body: "Build 20-account list of personal and medical installment lenders with loss-rate pressure.",
  },
  {
    date: "Phase 2",
    title: "Pilot packet",
    body: "Send the lender brief with cohort, success criteria, data handoff, legal queue, and implementation lift.",
  },
  {
    date: "Phase 3",
    title: "Commercial proof",
    body: "Use pilot telemetry to prove repayment performance, revocation rate, exception rate, and servicing effort.",
  },
];

export const nextSevenDays: TimelineItem[] = [
  {
    date: "Day 1",
    title: "Pick pilot-state screen",
    body: "Choose the initial state list and send wage assignment, revocation, servicing, and funds-flow questions to counsel.",
  },
  {
    date: "Day 2",
    title: "Verify middleware terms",
    body: "Confirm whether Pinwheel or Argyle terms permit third-party lender repayment orchestration.",
  },
  {
    date: "Day 3",
    title: "Prepare pilot one-pager",
    body: "Define ICP, target cohort, implementation steps, success criteria, and commercial conversion path.",
  },
  {
    date: "Day 4",
    title: "Reduce MVP",
    body: "Limit v1 to consent, plan creation, scheduling, reconciliation, exceptions, and manual job-change recovery.",
  },
  {
    date: "Day 5",
    title: "Package diligence packet",
    body: "Assemble source docket, competitor matrix, borrower trust draft, legal queue, and investor narrative.",
  },
];

export const ownerMap: MatrixRow[] = [
  {
    first: "Founder",
    second: "Lender outreach, pilot scope, middleware partner conversations, investor narrative.",
    third: "Owns commercial clarity.",
  },
  {
    first: "Counsel",
    second: "Wage assignment, revocation, funds flow, servicing role, money transmitter analysis.",
    third: "Owns legal boundary setting.",
  },
  {
    first: "Product",
    second: "API scope, consent flow, reconciliation, exception queue, borrower trust center.",
    third: "Owns operating surface.",
  },
  {
    first: "Pilot lender",
    second: "Portfolio baseline, cohort selection, servicing workflow, commercial success threshold.",
    third: "Owns proof quality.",
  },
];

export const investorResources: ResourceItem[] = [
  {
    title: "KOPIS Investor Deck",
    kind: "PDF",
    detail: "Problem, wedge, market, pilot design, execution sequence.",
  },
  {
    title: "Executive Brief",
    kind: "PDF",
    detail: "Founder-facing summary of what Kopis is and why now.",
  },
  {
    title: "Platform Overview One-Pager",
    kind: "PDF",
    detail: "Lender-neutral repayment rail, product layers, and integration story.",
  },
  {
    title: "Diligence Checklist",
    kind: "PDF",
    detail: "Legal queue, pilot-state scope, middleware terms, and proof needs.",
  },
  {
    title: "Financial Model Overview",
    kind: "Sheet",
    detail: "Pilot economics, commercial conversion assumptions, and lender ROI model.",
  },
];

export const brandAssets: ResourceItem[] = [
  {
    title: "KOPIS Logo System",
    kind: "SVG",
    detail: "Dark-surface logo lockup, icon mark, and compact nav mark.",
  },
  {
    title: "War Room Visual System",
    kind: "MD",
    detail: "Graphite base, restrained signal green, and Stripe-inspired accent palette.",
  },
  {
    title: "Borrower Trust Copy",
    kind: "Doc",
    detail: "Authorization, revocation, paystub explanation, and job-change language for counsel review.",
  },
];
