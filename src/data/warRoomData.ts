export type RouteId =
  | "command-brief"
  | "what-is-kopis"
  | "legal-path"
  | "market-competitors"
  | "build-pilot"
  | "growth-system"
  | "borrower-trust"
  | "next-moves"
  | "investor-kit";

export type RouteDefinition = {
  id: RouteId;
  number: string;
  path: string;
  label: string;
  summary: string;
  accent: "blue" | "blue-green" | "iris" | "violet" | "pink" | "coral" | "amber";
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
    summary: "Plain-English starting point: what Kopis is, what is unproven, and what to do next.",
    accent: "blue-green",
  },
  {
    id: "what-is-kopis",
    number: "02",
    path: "/what-is-kopis",
    label: "What Kopis Is",
    summary: "The simplest explanation of the product, buyer, wedge, and non-claims.",
    accent: "blue",
  },
  {
    id: "legal-path",
    number: "03",
    path: "/legal-path",
    label: "Legal Review Plan",
    summary: "Counsel questions, role boundaries, documents, and state-by-state proof needs.",
    accent: "violet",
  },
  {
    id: "borrower-trust",
    number: "04",
    path: "/borrower-trust",
    label: "Borrower Trust + Consent",
    summary: "Consent, paystub clarity, revocation, data access, and job-change explanations.",
    accent: "iris",
  },
  {
    id: "market-competitors",
    number: "05",
    path: "/market-competitors",
    label: "Market Map + Competitors",
    summary: "Who already exists, what they prove, and where Kopis can still win.",
    accent: "pink",
  },
  {
    id: "build-pilot",
    number: "06",
    path: "/build-pilot",
    label: "MVP + Pilot Plan",
    summary: "The smallest credible product and the proof the first lender pilot must generate.",
    accent: "coral",
  },
  {
    id: "growth-system",
    number: "07",
    path: "/growth-system",
    label: "Lender GTM Plan",
    summary: "How to sell to lenders without confusing borrowers, employers, or investors.",
    accent: "amber",
  },
  {
    id: "next-moves",
    number: "08",
    path: "/next-moves",
    label: "Operating Plan",
    summary: "The work order: counsel, middleware, pilot scope, lender proof, and receipt.",
    accent: "coral",
  },
  {
    id: "investor-kit",
    number: "09",
    path: "/investor-kit",
    label: "Investor Packet",
    summary: "Investor, lender, and counsel packets without pretending unresolved items are solved.",
    accent: "violet",
  },
];

export const plainEnglishBriefs: Record<RouteId, WorkItem[]> = {
  "command-brief": [
    {
      title: "What this means",
      body: "Kopis is a control room for one idea: lenders can lower repayment risk when borrowers clearly authorize repayment from payroll instead of waiting for money to hit a checking account.",
    },
    {
      title: "Why it matters",
      body: "The business only works if lenders, borrowers, payroll partners, and counsel all understand the same simple story.",
    },
    {
      title: "What could go wrong",
      body: "Confusing consent, unclear paystub language, weak state-law analysis, or messy reconciliation can break trust fast.",
    },
    {
      title: "What we need to prove next",
      body: "Pick the first lender cohort, confirm the legal path, verify middleware permission, and show one clean repayment flow end to end.",
    },
  ],
  "what-is-kopis": [
    {
      title: "What this means",
      body: "Kopis is not the lender and not the payroll login tool. It is the layer that tells lenders how to set up, explain, track, and recover payroll-linked repayments.",
    },
    {
      title: "Why it matters",
      body: "Lenders can connect to payroll tools directly, but they still need consent, rules, servicing, reconciliation, and job-change recovery.",
    },
    {
      title: "What could go wrong",
      body: "If Kopis sounds like a payroll API or a consumer cash-advance app, buyers will compare it to the wrong category.",
    },
    {
      title: "What we need to prove next",
      body: "Show a lender-neutral workflow where one lender can create a repayment plan and keep the borrower informed at every step.",
    },
  ],
  "legal-path": [
    {
      title: "What this means",
      body: "The legal work is part of the product. It decides where Kopis can operate, what it can say, and what the borrower must be shown.",
    },
    {
      title: "Why it matters",
      body: "Payroll-linked repayment touches wages, loan servicing, data access, revocation, and state rules. None of those can be waved away.",
    },
    {
      title: "What could go wrong",
      body: "A state-by-state assumption, a weak authorization form, or an unclear funds-flow role can turn a good product idea into a legal blocker.",
    },
    {
      title: "What we need to prove next",
      body: "Counsel must review wage assignment, revocation, money transmission, servicing role, middleware terms, and pilot-state scope.",
    },
  ],
  "market-competitors": [
    {
      title: "What this means",
      body: "The market is not empty. Employer lenders, payroll APIs, EWA apps, and repayment rails already prove parts of the behavior.",
    },
    {
      title: "Why it matters",
      body: "Kopis wins only if it owns the neutral orchestration layer lenders do not want to build themselves.",
    },
    {
      title: "What could go wrong",
      body: "Overclaiming novelty makes the pitch brittle. The stronger pitch is simple: others prove the mechanic; Kopis standardizes the lender rail.",
    },
    {
      title: "What we need to prove next",
      body: "Benchmark Highline and payroll middleware, then show where Kopis is different: consent, compliance, servicing, reconciliation, and continuity.",
    },
  ],
  "build-pilot": [
    {
      title: "What this means",
      body: "The pilot is not a demo. It is a controlled test to learn whether payroll-linked repayment improves a lender's real portfolio economics.",
    },
    {
      title: "Why it matters",
      body: "Investors and lenders need proof from a comparable borrower cohort, not a polished story about future scale.",
    },
    {
      title: "What could go wrong",
      body: "Low opt-in, middleware gaps, paystub confusion, state restrictions, and reconciliation errors can all sink the pilot.",
    },
    {
      title: "What we need to prove next",
      body: "Define the cohort, baseline, states, payroll middleware, consent flow, success threshold, and failure thresholds before building more.",
    },
  ],
  "growth-system": [
    {
      title: "What this means",
      body: "The first sale is to lenders. Borrowers and employers matter, but they are not the main buyer in the first motion.",
    },
    {
      title: "Why it matters",
      body: "A lender buys lower loss risk, cleaner servicing, and less repayment friction. That is a clearer story than broad financial wellness.",
    },
    {
      title: "What could go wrong",
      body: "A consumer-first message can make Kopis look like a cash-advance app instead of lender infrastructure.",
    },
    {
      title: "What we need to prove next",
      body: "Write the pilot packet in lender language: portfolio baseline, implementation lift, borrower consent, servicing workflow, and ROI math.",
    },
  ],
  "borrower-trust": [
    {
      title: "What this means",
      body: "Borrower trust is the part of the rail the borrower actually feels: the consent screen, the paystub line item, the support path, and the ability to stop or change it.",
    },
    {
      title: "Why it matters",
      body: "Recent enforcement actions in adjacent cash-advance markets keep circling the same problem: people were confused about fees, timing, tips, cancellation, or what they had agreed to.",
    },
    {
      title: "What could go wrong",
      body: "If a borrower sees a mysterious deduction, cannot revoke cleanly, or does not understand payroll access, the trust layer fails even if the lender math works.",
    },
    {
      title: "What we need to prove next",
      body: "Draft counsel-reviewed borrower language for consent, paystub labels, revocation, short-paycheck scenarios, job changes, data access, and support.",
    },
  ],
  "next-moves": [
    {
      title: "What this means",
      body: "The next work is about removing unknowns. Do not add features until legal, middleware, consent, and pilot proof are clearer.",
    },
    {
      title: "Why it matters",
      body: "A narrow, verified pilot beats a big roadmap with unresolved legal and trust questions.",
    },
    {
      title: "What could go wrong",
      body: "Trying to fundraise, build, and sell before the risk map is clean will create rework and weak diligence answers.",
    },
    {
      title: "What we need to prove next",
      body: "Counsel shortlist, lender target list, middleware ToS review, borrower trust draft, state matrix v0, and pilot one-pager.",
    },
  ],
  "investor-kit": [
    {
      title: "What this means",
      body: "The investor packet should make the thesis easy to inspect: problem, category map, wedge, legal queue, pilot plan, and proof still missing.",
    },
    {
      title: "Why it matters",
      body: "Investors do not need every detail first. They need to see that the hard questions are named and sequenced.",
    },
    {
      title: "What could go wrong",
      body: "A deck that hides counsel work, borrower trust, or middleware dependency will fall apart in diligence.",
    },
    {
      title: "What we need to prove next",
      body: "Package the counsel memo outline, lender pilot brief, borrower trust draft, and one-page research receipt into the same diligence story.",
    },
  ],
};

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
    meta: "Needs counsel",
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
    value: "5 candidate states",
    detail: "Needs counsel before any state, wage-assignment, servicing, or funds-flow claim is made externally.",
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

export const borrowerTrustPrinciples: WorkItem[] = [
  {
    title: "Show the number before consent",
    body: "A borrower should see the amount, timing, paycheck source, lender, and support path before authorizing anything.",
    meta: "Verified pattern",
  },
  {
    title: "Explain the paystub line item",
    body: "Every line item Kopis creates should have a matching explainer page: what it is, who it pays, why it appears, and how to ask for help.",
    meta: "Next proof needed",
  },
  {
    title: "Make revocation visible",
    body: "The borrower should not have to hunt through support articles to stop or change an authorization. Counsel must define the state-specific mechanics.",
    meta: "Needs counsel",
  },
  {
    title: "Separate lender language from borrower language",
    body: "Lenders can read about orchestration and reconciliation. Borrowers need plain answers about money, dates, data, employer visibility, and support.",
    meta: "Assumption",
  },
];

export const consentFlow: TimelineItem[] = [
  {
    date: "1",
    title: "Name the loan and lender",
    body: "Start with the human answer: which loan this repays, who owns it, and why Kopis is involved.",
  },
  {
    date: "2",
    title: "Show the next paycheck impact",
    body: "Display the repayment amount, expected pay date, paystub label, and what happens if the paycheck is smaller than expected.",
  },
  {
    date: "3",
    title: "Explain payroll access",
    body: "Say what payroll data is used, what is not used, who can see it, and whether credentials are stored by Kopis or a middleware provider.",
  },
  {
    date: "4",
    title: "Confirm revocation path",
    body: "Give the borrower the cancellation/change path before they authorize. State-law timing remains counsel-dependent.",
  },
  {
    date: "5",
    title: "Create the audit trail",
    body: "Record the version of the disclosure, the authorization event, the repayment schedule, and every later change.",
  },
];

export const borrowerTrustRows: MatrixRow[] = [
  {
    first: "Borrower asks: What is this?",
    second: "Plain answer: Kopis helps your lender collect the payment you authorized from your paycheck.",
    third: "Proof needed: lender name, loan reference, consent version, support channel.",
  },
  {
    first: "Borrower asks: Can my employer see it?",
    second: "Plain answer: the deduction mechanics and employer visibility depend on the payroll path and state rules.",
    third: "Proof needed: counsel-approved employer-visibility language per payroll method.",
  },
  {
    first: "Borrower asks: Can I turn it off?",
    second: "Plain answer: yes, there must be a revocation path, but the timing and effect need counsel-approved rules.",
    third: "Proof needed: state-by-state revocation process and effective-date copy.",
  },
  {
    first: "Borrower asks: What if I change jobs?",
    second: "Plain answer: Kopis pauses, notifies, and helps reconnect the repayment path instead of letting the loan silently drift.",
    third: "Proof needed: pilot-tested job-change workflow and support script.",
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
