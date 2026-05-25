# KOPIS Command Center Humanization Receipt

Date: 2026-05-24

Outcome: local implementation and production deploy. This is not a legal conclusion or a production data change.

Update: a later 2026-05-24 pass made the investor tab PDF-only, removed the old investor export panels, restored the Day/Night dynamic background slots, replaced the home hero mock audio visual with a real audio file, and trimmed repeated secondary panels from the main War Room tabs. Plain-English orientation remains on the operating tabs; the investor tab intentionally contains only `KOPIS.pdf`.

## What Changed

### 1. Plain-English orientation on every tab

Changed: `src/data/warRoomData.ts`, `src/App.tsx`

Added a shared "Plain-English read" block to every command center route. Each one answers the same four questions:

- What this means
- Why it matters
- What could go wrong
- What we need to prove next

Reason: the previous command center had useful strategy content, but it required the reader to already understand the category. The new structure gives each tab a simple first read before the deeper panels.

Validation: the app now renders the plain-English block on all 9 routes in desktop, tablet, and mobile Playwright checks.

### 2. Added Borrower Trust + Consent

Changed: `src/data/warRoomData.ts`, `src/App.tsx`, `src/styles.css`

Added a new route at `/borrower-trust` with:

- Trust rules before authorization
- Consent flow
- Questions borrowers will actually ask
- Failure modes to avoid
- Counsel review package checklist

Reason: the highest-risk failures in adjacent wage-advance and payroll-linked repayment markets cluster around unclear fees, consent, revocation, borrower expectations, and repayment mechanics. Kopis cannot only explain the lender workflow. The borrower has to understand the money movement before authorization.

Validation:

- FTC FloatMe action: called out deceptive free-money promises, hard cancellation, discrimination, and unsupported algorithm claims.
- FTC Dave action: called out undisclosed fees, surprise tips, misleading advance claims, and hard cancellation.
- DC AG EarnIn lawsuit: alleges instant/no-fee/no-interest claims while users paid fees and repayment was taken on payday.
- NY AG MoneyLion/DailyPay lawsuits: alleges short-term expensive payday-style loans, fees/tips, wage deductions, and deceptive advertising.

### 3. Replaced vague status language with concrete states

Changed: `src/data/warRoomData.ts`, `src/data/legalMarketData.ts`, `src/data/gtmDiligenceData.ts`, `src/App.tsx`

Examples:

- `Counsel gates open` became `Needs counsel`.
- Patent language moved from `Defensible` to `Counsel-review candidate`.
- Broad patent strategy moved from `Solid` to `Retire`.
- Pilot-state language changed from implied readiness to candidate-state review.
- Export counsel title changed to `KOPIS Counsel Review Packet`.

Reason: the command center should not imply legal certainty where the real state is still review, assumption, or proof-needed.

Validation:

- CFPB advisory opinion page shows interpretive guidance in this area has changed over time, including EWA-related advisory opinions and withdrawals.
- California DFPI requires income-based advance providers to register before offering or providing those products to California residents, which supports state-by-state caution.
- Maryland's 2026 EWA update explicitly targets hidden fee/tip and false-advertising problems.

### 4. Cleaned up category framing

Changed: `src/data/gtmDiligenceData.ts`, `src/data/legalMarketData.ts`, `src/App.tsx`

Removed commodity shorthand and risky borrower language:

- No `Plaid for payroll` framing remains in `src`.
- No `earned wage access`, `cash out`, `advance your wages`, `instant free money`, or `garnishment` framing remains in `src`.
- Borrower-facing language now says what the product does in plain terms: consent, repayment path, payroll access, revocation, event history, and support.

Reason: Kopis is lender-facing repayment infrastructure. The app should not make it sound like a consumer cash-advance app or a generic payroll API.

Validation:

- Pinwheel, Truv, and Argyle show paycheck-linked repayment and payroll allocation are real infrastructure patterns.
- The enforcement sources show the danger of confusing consumers with cash-advance language, hidden costs, or overstated claims.

### 5. Added failure modes without adding noisy tabs

Changed: `src/data/warRoomData.ts`, `src/App.tsx`

Added a failure-modes matrix to the market/borrower/export surfaces. The failure modes are:

- Hidden or confusing fees
- Claims that sound too certain
- Hard-to-cancel flows
- Fallbacks the borrower did not approve
- Broken payroll sessions
- Ledger mismatch
- Wrong category framing
- State-law uncertainty

Reason: this gives the operator a simple "do not build this mistake into the product" checklist without creating another navigation tab.

Validation: mapped to patterns from FTC FloatMe, FTC Dave, DC EarnIn, NY MoneyLion/DailyPay, Maryland EWA update, and California DFPI income-based advance guidance.

### 6. Made the 9-tab layout fit cleanly

Changed: `src/styles.css`, `src/App.tsx`

Changed the command route grid to a 3-column desktop layout, 2-column compact layout, and 1-column mobile layout. Shortened top navigation labels while preserving full `aria-label` names.

Reason: adding the ninth route would have made the previous 8-card layout visually uneven. The new 3x3 layout makes the command brief easier to scan.

Validation: Playwright route checks passed at 1440px, 1280px, 768px, 390px, and 360px with no horizontal overflow.

### 7. Fixed a mobile touch-target issue found during QA

Changed: `src/styles.css`

Increased compact Day/Night theme buttons from 1.84rem high to 2.18rem high.

Reason: mobile QA found the theme buttons were only 29px tall, below the touch-target floor used in the check.

Validation: reran mobile Playwright QA at 390px and 360px; both passed with no small touch-target failures.

### 8. Export packets now include the new risk framing

Changed: `src/App.tsx`

Updated export routes so counsel, lender, and investor packets include the borrower trust and failure-mode material where relevant.

Reason: the export packets are what someone would share. They need to carry the same caution labels and borrower trust work, not only the main app.

Validation: Playwright checked `/export/counsel`, `/export/lender`, and `/export/investor` for expected titles, visible content, no horizontal overflow, and no console errors.

## Sources Used

Regulatory and official:

- [CFPB Advisory Opinion Program](https://www.consumerfinance.gov/compliance/advisory-opinion-program/)
- [California DFPI Income-Based Advances](https://dfpi.ca.gov/regulated-industries/covered-persons/income-based-advances/)
- [Maryland 2026 EWA and Access to Banking update](https://www.dllr.state.md.us/whatsnews/govmooresignsearnedwageaccessandaccesstobankingbills.shtml)

Infrastructure examples:

- [Pinwheel paycheck-linked lending](https://www.pinwheelapi.com/solutions/paycheck-linked-lending)
- [Truv paycheck-linked lending](https://docs.truv.com/docs/paycheck-linked-loans)
- [Truv implementation guide](https://docs.truv.com/docs/implementation-paycheck-linked-loans)
- [Argyle Loan App](https://docs.argyle.com/overview/loan-app)

Failure warnings:

- [FTC FloatMe action](https://www.ftc.gov/news-events/news/press-releases/2024/01/ftc-acts-stop-floatmes-deceptive-free-money-promises-discriminatory-cash-advance-practices-baseless)
- [FTC Dave action](https://www.ftc.gov/news-events/news/press-releases/2024/11/ftc-takes-action-against-online-cash-advance-app-dave-deceiving-consumers-charging-undisclosed-fees)
- [DC AG EarnIn lawsuit](https://oag.dc.gov/release/attorney-general-schwalb-sues-pay-advance-company)
- [NY AG MoneyLion/DailyPay lawsuits](https://ag.ny.gov/press-release/2025/attorney-general-james-sues-payday-lending-companies-exploiting-workers-illegal)

Reddit was not used as factual authority.

## Verification

Build:

```bash
npm run build
```

Result: passed.

Content guardrail scan:

```bash
rg -n "Counsel gates|Download placeholder|Audio placeholder|Placeholder packet|Steal these patterns|exploit map|\"Status\"|guaranteed repayment|earned wage access|cash out|advance your wages|instant free money|Plaid for payroll|garnishment" src -S
```

Result: no matches.

Browser QA:

```bash
VP_NAME=desktop1440 VP_WIDTH=1440 VP_HEIGHT=1100 node --input-type=module
VP_NAME=desktop1280 VP_WIDTH=1280 VP_HEIGHT=1000 node --input-type=module
VP_NAME=tablet768 VP_WIDTH=768 VP_HEIGHT=1050 node --input-type=module
VP_NAME=mobile390 VP_WIDTH=390 VP_HEIGHT=1000 node --input-type=module
VP_NAME=mobile360 VP_WIDTH=360 VP_HEIGHT=1000 node --input-type=module
```

Each run checked all 9 app routes for:

- expected route text
- `Plain-English read`
- exactly one active nav link
- no horizontal overflow
- sufficient rendered content
- no console errors after blocked external-resource noise was filtered
- mobile touch targets above the QA threshold
- 1-column command route grid on mobile

Results:

- desktop1440: 9 checked, 0 failures, 0 console errors
- desktop1280: 9 checked, 0 failures, 0 console errors
- tablet768: 9 checked, 0 failures, 0 console errors
- mobile390: 9 checked, 0 failures, 0 console errors
- mobile360: 9 checked, 0 failures, 0 console errors

Final rerun after the last content-label edits:

- desktop1440: 9 checked, 0 failures, 0 console errors
- mobile390: 9 checked, 0 failures, 0 console errors

Export QA:

```bash
node --input-type=module
```

Checked:

- `/export/counsel`
- `/export/lender`
- `/export/investor`

Result: 3 checked, 0 failures, 0 console errors.

Screenshots captured:

- `/Users/daniel/Documents/KOPIS/tmp/qa/humanize_desktop_command_brief.png`
- `/Users/daniel/Documents/KOPIS/tmp/qa/humanize_desktop_borrower_trust.png`
- `/Users/daniel/Documents/KOPIS/tmp/qa/humanize_desktop_next_moves.png`
- `/Users/daniel/Documents/KOPIS/tmp/qa/humanize_mobile_command_brief.png`
- `/Users/daniel/Documents/KOPIS/tmp/qa/humanize_mobile_borrower_trust.png`
- `/Users/daniel/Documents/KOPIS/tmp/qa/humanize_mobile_next_moves.png`
- `/Users/daniel/Documents/KOPIS/tmp/qa/humanize_export_counsel.png`
- `/Users/daniel/Documents/KOPIS/tmp/qa/humanize_export_lender.png`
- `/Users/daniel/Documents/KOPIS/tmp/qa/humanize_export_investor.png`

## Limits

- No Supabase work was done.
- No deployment was done.
- No production data was touched.
- No legal conclusion was made.
- Counsel-dependent items remain labeled `Needs counsel`.
- Existing dirty state was preserved, including the pre-existing deleted `docs/source/perplexity-assets.md` and pre-existing untracked image assets. New QA screenshots were written under `tmp/qa/`.
