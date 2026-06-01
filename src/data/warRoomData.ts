export type RouteId =
  | "thesis"
  | "already-exists"
  | "competitors"
  | "difference"
  | "technology"
  | "next-30";

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
    id: "thesis",
    number: "01",
    path: "/thesis",
    label: "Thesis",
    summary: "What Kopis is in plain English: the product, the buyer, the wedge, and what it is not.",
    accent: "blue-green",
  },
  {
    id: "already-exists",
    number: "02",
    path: "/already-exists",
    label: "Already Exists?",
    summary: "The honest answer: parts of this already exist, and where Kopis still has an opening.",
    accent: "blue",
  },
  {
    id: "competitors",
    number: "03",
    path: "/competitors",
    label: "Top 5 Competitors",
    summary: "The five players to know, what they do well, and how Kopis is different.",
    accent: "pink",
  },
  {
    id: "difference",
    number: "04",
    path: "/difference",
    label: "KOPIS Difference",
    summary: "Why Kopis is still worth building even though parts of the market already exist.",
    accent: "iris",
  },
  {
    id: "technology",
    number: "05",
    path: "/technology",
    label: "Technology",
    summary: "What the technology actually does: the layers, the repayment flow, and what to build first.",
    accent: "violet",
  },
  {
    id: "next-30",
    number: "06",
    path: "/next-30",
    label: "Next 30 Days",
    summary: "The operating plan: proof, counsel review, and a cleaner lender story.",
    accent: "coral",
  },
];

export const plainEnglishBriefs: Record<RouteId, WorkItem[]> = {
  thesis: [
    {
      title: "What this means",
      body: "A borrower takes a loan, agrees to repay it straight from their paycheck, and Kopis runs the parts in between: consent, the rules, the setup, and the follow-up.",
    },
    {
      title: "Why it matters",
      body: "It only works if lenders, borrowers, payroll partners, and counsel all read the same simple story. So we keep the story simple.",
    },
    {
      title: "What could go wrong",
      body: "Confusing consent, an unclear paystub line, a weak read on state law, or messy reconciliation can break trust fast.",
    },
    {
      title: "What we need to prove next",
      body: "Pick the first lender, confirm the legal path, check that the payroll middleware allows it, and show one clean repayment from start to finish.",
    },
  ],
  "already-exists": [
    {
      title: "What this means",
      body: "Parts of this are already on the market. Payroll deduction loans, paycheck-linked rails, and payroll APIs all exist today.",
    },
    {
      title: "Why it matters",
      body: "Pretending Kopis invented payroll deduction makes the pitch easy to poke holes in. The honest version is stronger.",
    },
    {
      title: "What could go wrong",
      body: "If we overclaim, a sharp investor or lender finds the existing players in five minutes and the story falls apart.",
    },
    {
      title: "What we need to prove next",
      body: "Show the one thing no one owns yet: the neutral layer that handles consent, compliance, servicing, and continuity for many lenders at once.",
    },
  ],
  competitors: [
    {
      title: "What this means",
      body: "Five players matter most: Highline, Truv, and Pinwheel on the repayment rail, and Kashable and BMG on employer lending.",
    },
    {
      title: "Why it matters",
      body: "A buyer needs a simple map they can hold in their head, not a list of twenty names with no ranking.",
    },
    {
      title: "What could go wrong",
      body: "Treating a payroll API like a head-to-head rival sends the pitch into the wrong fight. Some of these are inputs, not enemies.",
    },
    {
      title: "What we need to prove next",
      body: "Benchmark Highline and the payroll middleware, then show where Kopis is different: consent, compliance, servicing, reconciliation, and continuity.",
    },
  ],
  difference: [
    {
      title: "What this means",
      body: "Kopis is not trying to prove payroll deduction works. It is trying to make payroll-linked repayment usable for many lenders at once.",
    },
    {
      title: "Why it matters",
      body: "No lender wants to wire up every payroll provider, write its own consent logic, and read 50 states of rules. That is the work Kopis takes on.",
    },
    {
      title: "What could go wrong",
      body: "If the difference sounds like jargon, buyers lump Kopis in with payroll APIs or employer lenders and stop listening.",
    },
    {
      title: "What we need to prove next",
      body: "Show one lender integration running across more than one payroll system, with consent and reconciliation handled in one place.",
    },
  ],
  technology: [
    {
      title: "What this means",
      body: "If Kopis is not a lender and not a payroll API, the technology is the operating layer that sits above payroll connectivity and runs the repayment.",
    },
    {
      title: "Why it matters",
      body: "It answers the fair question: if Kopis is not a lender and not a payroll API, what is the actual product? Eight layers and one clear repayment flow.",
    },
    {
      title: "What could go wrong",
      body: "Promising direct payroll integrations, 50-state compliance, or automatic job-change recovery on day one would be a claim we cannot back yet.",
    },
    {
      title: "What we need to prove next",
      body: "Build the smallest credible version: a lender API, consent, five pilot-state rules, reconciliation, and manual job-change re-linking.",
    },
  ],
  "next-30": [
    {
      title: "What this means",
      body: "The next month is about proof, counsel review, and a cleaner story, not new features.",
    },
    {
      title: "Why it matters",
      body: "A narrow, verified pilot beats a big roadmap with open legal and trust questions.",
    },
    {
      title: "What could go wrong",
      body: "Trying to fundraise, build, and sell before the risk map is clean creates rework and weak diligence answers.",
    },
    {
      title: "What we need to prove next",
      body: "Shortlist counsel, name the target lenders, check the middleware terms, draft the borrower language, and write the pilot one-pager.",
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
    third: "Loan product, employer channel, and payroll linked repayment inside their own lending motion.",
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
    third: "Payroll linked bill payment and repayment-adjacent infrastructure.",
    fourth: "Kopis narrows around lender diligence, installment-loan compliance, and multi-provider orchestration.",
  },
  {
    first: "Consumer proof point",
    second: "Perpay",
    third: "Consumer-facing payroll linked repayment behavior and trust model.",
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
    value: "Lower 60-day delinquency",
    detail: "Pilot hypothesis: target a 30%+ reduction, validated against the lender's real portfolio economics before any external claim.",
  },
  {
    label: "Operating bounds",
    value: "5 candidate states",
    detail: "Needs counsel before any state, wage-assignment, servicing, or funds-flow claim is made externally.",
  },
];

export const pilotTimeline: TimelineItem[] = [
  {
    date: "Step 1",
    title: "Wage assignment framework",
    body: "Create the state-screening memo outline and counsel question set.",
  },
  {
    date: "Step 2",
    title: "Funds flow and roles",
    body: "Draw borrower, lender, payroll provider, Kopis, repayment account, and settlement responsibilities.",
  },
  {
    date: "Step 3",
    title: "MVP scope lock",
    body: "Freeze the smallest credible product: consent, scheduling, reconciliation, exceptions, manual re-link.",
  },
  {
    date: "Step 4",
    title: "Diligence packet v1",
    body: "Package pilot brief, legal queue, competitor wedge, borrower trust draft, and implementation lift.",
  },
];

export const growthItems: WorkItem[] = [
  {
    title: "Primary ICP",
    body:
      "Mid-market installment lenders with annual originations of roughly $50M to $500M, measurable loss-rate pressure, and no internal payroll linked repayment system.",
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
