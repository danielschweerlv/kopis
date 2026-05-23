import type { WorkItem, TimelineItem } from "./warRoomData";

export const patentAngles: WorkItem[] = [
  {
    title: "Employment-change detection and automated re-linking across payroll systems and employers.",
    body: "Novel territory in Kopis's actual product differentiator — continuity when borrowers change jobs.",
    meta: "Defensible",
  },
  {
    title: "Compliance rules engine conditioning deduction schedules on jurisdiction, employer, payroll provider, and loan type.",
    body: "Multi-variable rules engine for deduction scheduling is narrow and specific to Kopis's orchestration role.",
    meta: "Defensible",
  },
  {
    title: "Lender-agnostic orchestration abstracting multiple payroll connectivity methods behind one repayment interface.",
    body: "Provider-neutral abstraction layer is novel — competitors own connectivity or lending, not neutral orchestration.",
    meta: "Defensible",
  },
  {
    title: "Payment allocation, exception handling, and fallback sequencing when payroll deductions fail or become unavailable.",
    body: "Structured fallback and exception logic specific to payroll repayment scenarios.",
    meta: "Defensible",
  },
  {
    title: "Borrower authorization workflows tied to specific deduction events and servicing changes, with revocation state machines.",
    body: "Event-specific consent and revocation state machines are a distinct process innovation.",
    meta: "Defensible",
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

export const competitorBestPractices: WorkItem[] = [
  // Trust building
  {
    title: "Borrowed institutional trust: employer logos, benefits framing, credit union partnerships.",
    body: "Attaching to known institutions lowers borrower anxiety before the product is proven.",
    meta: "Trust building",
  },
  {
    title: "Concrete repayment mechanics shown early: not vague 'financial wellness' language.",
    body: "Specificity about how repayment works reduces friction and builds confidence.",
    meta: "Trust building",
  },
  {
    title: "Explicit APR + eligibility ranges visible on hero pages.",
    body: "Transparency about pricing before consent prevents trust-breaking surprises downstream.",
    meta: "Trust building",
  },
  {
    title: "Plain-English 'how this works' strips near the fold.",
    body: "Short, jargon-free mechanics explanations convert better than feature lists.",
    meta: "Trust building",
  },
  {
    title: "No surprise: consent and linkage explained before being asked for.",
    body: "Preparing borrowers for what's coming reduces abandonment at the consent step.",
    meta: "Trust building",
  },
  // Intake + onboarding UX
  {
    title: "Employer lookup as the first step when channel is employer-based — familiar affordance.",
    body: "Starting with a known entity (the employer) frames the flow as safe and recognized.",
    meta: "Intake + onboarding UX",
  },
  {
    title: "Payroll linking presented as a known flow, not a technical hurdle.",
    body: "Framing payroll connection as routine reduces the perceived risk of the action.",
    meta: "Intake + onboarding UX",
  },
  {
    title: "Short wizard, not a long form.",
    body: "Progressive disclosure keeps borrowers moving through intake without feeling overwhelmed.",
    meta: "Intake + onboarding UX",
  },
  {
    title: "CTAs labeled by user intent, e.g. 'Check eligibility,' not 'Start application.'",
    body: "Intent-matched copy reduces perceived commitment at early funnel steps.",
    meta: "Intake + onboarding UX",
  },
  {
    title: "Confirmation states that show exactly what will happen next.",
    body: "Post-action clarity removes anxiety and reduces support volume.",
    meta: "Intake + onboarding UX",
  },
  // Category framing
  {
    title: "Pinwheel sells ROI to lenders, not inspiration to the public.",
    body: "B2B framing focuses on measurable outcomes, not aspirational language.",
    meta: "Category framing",
  },
  {
    title: "Kashable sells peace-of-mind to employees, not complex underwriting.",
    body: "Benefit-first framing lowers the emotional barrier to application.",
    meta: "Category framing",
  },
  {
    title: "Salary Finance sells 'affordable loans through your employer' — concrete and unambiguous.",
    body: "Specificity in category framing beats generic financial-wellness positioning.",
    meta: "Category framing",
  },
  {
    title: "Perpay reframes credit as a 'shop now, pay from your paycheck' habit.",
    body: "Behavioral reframing makes repayment feel natural, not burdensome.",
    meta: "Category framing",
  },
  // Copy patterns
  {
    title: "Reassurance at the point of friction: timing, payment amount, and revocation addressed inline, not on an FAQ page.",
    body: "Contextual reassurance converts better than deferred FAQ pages.",
    meta: "Copy patterns",
  },
  {
    title: "Pricing transparency before consent.",
    body: "Showing cost before asking for commitment builds trust and reduces downstream churn.",
    meta: "Copy patterns",
  },
  {
    title: "'No credit check hurts your score' style safeties on intake.",
    body: "Removing fear-of-harm language at intake increases application starts.",
    meta: "Copy patterns",
  },
  {
    title: "Contextual microcopy instead of tooltips users have to hunt for.",
    body: "Inline explanations reduce cognitive load and keep users in flow.",
    meta: "Copy patterns",
  },
  // Dashboard patterns
  {
    title: "Scenario-based payoff previews ('what your next paycheck will look like').",
    body: "Concrete future-state previews reduce post-enrollment anxiety.",
    meta: "Dashboard patterns",
  },
  {
    title: "Next-deduction cards showing amount, date, pay cycle.",
    body: "Predictability in dashboard design reduces inbound support and builds trust over time.",
    meta: "Dashboard patterns",
  },
  {
    title: "Visual pay-stub mockups that reduce line-item confusion.",
    body: "Showing borrowers what their paystub will look like preempts confusion and employer questions.",
    meta: "Dashboard patterns",
  },
  {
    title: "Cleanly labeled line items the borrower can Google.",
    body: "Googleable labels reduce borrower anxiety and support volume when paystubs arrive.",
    meta: "Dashboard patterns",
  },
];

export const exploitMap: WorkItem[] = [
  // Where trust breaks
  {
    title: "Many employer-lending sites feel either predatory or euphemistic — no middle ground.",
    body: "Opportunity: sober, factual design that is neither predatory nor evasive.",
    meta: "Where trust breaks",
  },
  {
    title: "'Financial wellness' language sounds like spin when the product is still debt.",
    body: "Opportunity: accurate, plain framing that doesn't pretend the product is a gift.",
    meta: "Where trust breaks",
  },
  {
    title: "Borrowers get almost no explanation of how a deduction will appear on their paystub.",
    body: "Opportunity: paystub preview and line-item explainer built into onboarding.",
    meta: "Where trust breaks",
  },
  {
    title: "Revocation flows are buried or undocumented, which reads as a red flag.",
    body: "Opportunity: prominent, easy revocation flow that signals confidence in the product.",
    meta: "Where trust breaks",
  },
  {
    title: "Infrastructure companies speak developer-tool language on pages consumers see.",
    body: "Opportunity: separate consumer-facing and developer-facing surfaces with appropriate register.",
    meta: "Where trust breaks",
  },
  // Where UX is confusing
  {
    title: "Employer eligibility, state restrictions, and fallback repayment rules appear late or not at all.",
    body: "Opportunity: surface eligibility constraints early so borrowers self-qualify before investing time.",
    meta: "Where UX is confusing",
  },
  {
    title: "Consent logic is a single checkbox buried in a form, not an informed decision.",
    body: "Opportunity: multi-step, plain-English consent flow that documents informed agreement.",
    meta: "Where UX is confusing",
  },
  {
    title: "Job change scenarios are treated like exception handling, not a core user story.",
    body: "Opportunity: job-change continuity as a first-class feature, not an afterthought.",
    meta: "Where UX is confusing",
  },
  {
    title: "Pay-stub language is not designed to survive a borrower Google search.",
    body: "Opportunity: standardized, Googleable paystub language that holds up to scrutiny.",
    meta: "Where UX is confusing",
  },
  {
    title: "Data use and payroll access scope are rarely explained in plain English.",
    body: "Opportunity: transparent data-use disclosures that build rather than erode trust.",
    meta: "Where UX is confusing",
  },
  // Borrower worries
  {
    title: "'What happens if I change jobs?'",
    body: "Under-explained across the category. Kopis owns this story — continuity is the product.",
    meta: "Borrower worries",
  },
  {
    title: "'What appears on my paystub and can my employer see it?'",
    body: "Borrowers fear employer visibility. Answer this explicitly before they ask.",
    meta: "Borrower worries",
  },
  {
    title: "'Can I turn this off?'",
    body: "Revocation must be prominent, easy, and documented. Hiding it destroys trust.",
    meta: "Borrower worries",
  },
  {
    title: "'What happens if my paycheck is smaller than the deduction?'",
    body: "Exception handling is invisible to borrowers. Build explicit short-paycheck scenarios into the UX.",
    meta: "Borrower worries",
  },
  {
    title: "'Is this a wage garnishment?'",
    body: "Voluntary assignment vs. garnishment must be distinguished clearly, early, and repeatedly.",
    meta: "Borrower worries",
  },
  {
    title: "'Who has my payroll login?'",
    body: "Data access scope must be explained plainly. Credential handling creates anxiety.",
    meta: "Borrower worries",
  },
  // What lenders need
  {
    title: "Reconciliation tools and exception handling workflows.",
    body: "Lender servicing teams need operational visibility — not just repayment confirmation.",
    meta: "What lenders need",
  },
  {
    title: "State-by-state compliance visibility.",
    body: "Lenders operating across states need jurisdiction-specific rule transparency.",
    meta: "What lenders need",
  },
  {
    title: "Multi-lender neutrality — lenders don't want to fund a competitor's channel.",
    body: "Neutral infrastructure is a prerequisite for lender trust. Kopis must not create channel conflict.",
    meta: "What lenders need",
  },
  {
    title: "Servicing-event orchestration (modifications, skip-a-pays, payoffs).",
    body: "Full servicing lifecycle coverage is the expansion story after the pilot.",
    meta: "What lenders need",
  },
  // Missing category language
  {
    title: "No clean term of art for 'lender-agnostic payroll repayment rail.'",
    body: "Kopis can own the category name. Define it early, repeat it consistently.",
    meta: "Missing category language",
  },
  {
    title: "'Earned wage access' has eaten the mindshare — Kopis needs to differentiate hard from EWA, which is not lending.",
    body: "Explicit 'this is not EWA' framing is required to avoid category confusion.",
    meta: "Missing category language",
  },
  {
    title: "'Payroll deduction' reads punitive to borrowers. Need softer, accurate framing.",
    body: "'Paycheck-linked repayment' is a candidate. Test and standardize.",
    meta: "Missing category language",
  },
  {
    title: "'Paycheck-linked repayment' is open but under-indexed by existing players.",
    body: "Category language white space is a SEO and positioning opportunity.",
    meta: "Missing category language",
  },
];
