# KOPIS War Room Wrap-Up

Updated: 2026-05-22T21:15:00-0700

## 2026-05-22 Session Summary

### What Changed

Two agents expanded the app in parallel from source text in `docs/source/perplexity-war-room-raw.md`.

New files created:
- `src/data/legalMarketData.ts` — patentAngles, legalWorkstreams, legalSequencing, competitorBestPractices, exploitMap
- `src/data/gtmDiligenceData.ts` — brandThesis, seoArchitecture, buyerNeeds, claimsAnalysis, operatingPlan, criticalPath

Pages expanded:
- **Legal Path**: +3 panels (patent strategy, legal workstreams, legal sequencing)
- **Market + Competitors**: +2 panels (best practices steal-sheet, exploit map)
- **Growth System**: +3 panels (buyer personas, brand thesis, SEO architecture)
- **Next Moves**: +3 panels (claims analysis table, critical path, 7/30/90-day operating plan)

### What Was Verified

- `npm run build` passed clean (2.28s, 0 TS errors)
- Playwright full-page screenshots captured for all 4 expanded pages
- Mobile viewport (390px) — no horizontal overflow
- No new console errors (only pre-existing ipapi.co CORS noise from clock fallback)

### What Was Not Verified

- App not visually inspected in a real browser (Chrome blocked at read tier in this session)
- Investor Kit page not expanded (source section 08 is mostly asset upload UI, not prose content)
- Command Brief / What Is Kopis / Build + Pilot pages not changed

### Remaining Tasks

- **Visual polish pass**: run `impeccable` skill against the expanded pages once you have browser access
- **Investor Kit**: consider whether Section 08 asset-upload UI warrants a mock/placeholder or can stay as-is
- **Export views**: counsel packet, lender pilot brief, investor brief — separate filtered print/export views not yet built
- **Vercel deploy**: app not yet deployed publicly

### Known Risks

- ipapi.co CORS in Playwright headless — not a real-browser issue, but clock shows browser fallback zone
- App.tsx is 931 lines — still manageable but worth splitting page components into separate files if it grows further
- Not a git repo — no version history safety net yet; consider `git init` before the next major edit

### Files Next Session Should Read First

1. `docs/agent/kopis-war-room-wrapup.md` (this file)
2. `src/App.tsx`
3. `src/data/warRoomData.ts`, `src/data/legalMarketData.ts`, `src/data/gtmDiligenceData.ts`
4. `DESIGN.md`

---

## 2026-05-20 User Correction For Next Phase

## 2026-05-20 User Correction For Next Phase

Daniel clarified the next pass: do not mimic the Perplexity artifact visually, but do preserve and improve its information architecture.

The target is:

- Same core sidebar/topic model as the Perplexity artifact link Daniel provided:
  `https://sites.pplx.app/sites/proxy/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVmaXgiOiJ3ZWIvZGlyZWN0LWZpbGVzL2NvbXB1dGVyLzcyODgyOGI2LWEzZjAtNGYyZi1hN2IxLTVhNWZiMWYyNGE2YS9rb3Bpcy1kZXBsb3kvIiwic2lkIjoiNzI4ODI4YjYtYTNmMC00ZjJmLWE3YjEtNWE1ZmIxZjI0YTZhIiwiZXhwIjoxNzc5NDE2ODQyfQ.wGg7tt2njbA_ecL9v9Ue_qA55Ihn9TRjhZ6QcwuWCdA/web/direct-files/computer/728828b6-a3f0-4f2f-a7b1-5a5fb1f24a6a/kopis-deploy/index.html`
- One main dashboard page with sidebar navigation into the other dashboard sections.
- Same topics in the sidebar as the source artifact, with the same source text coverage inside each topic.
- Improve the UI and information design rather than cloning the artifact's visual styling.
- Remove the current bento-box interpretation and the invented/compressed filler content inside it.
- Treat the linked Perplexity artifact and local captures under `docs/source/` as the content authority for the next implementation pass.

Practical next implementation rule: rebuild from the source topic text first, then design the surfaces around that content. Do not summarize the source into generic "decision panels" unless the original topic text remains accessible and clearly mapped.

## Current State

The workspace now contains a local Vite/React rebuild of the KOPIS War Room plus authenticated Perplexity source captures under `docs/source/`.

Local source of truth for the current rebuild:

- `docs/agent/kopis-war-room-handoff.md`
- `PRODUCT.md`
- `DESIGN.md`
- `src/data/warRoomData.ts`
- Local screenshots:
  - `perplexity-kopis-war-room.png`
  - `perplexity-kopis-task.png`
  - `kopis-app-clicked.png`
  - `kopis-app-fullscreen.png`
- Source captures:
  - `docs/source/perplexity-war-room-raw.md`
  - `docs/source/perplexity-artifact.html`
  - `docs/source/perplexity-task-thread.md`
  - `docs/source/perplexity-assets.md`

Captured source artifacts:

- Raw Perplexity artifact HTML from `https://www.perplexity.ai/computer/a/kopis-war-room-j_GJRsPxRT2C9Wc35YPfZQ`
- DOM/text extraction from the embedded Perplexity app iframe
- Task-thread visible text from `https://www.perplexity.ai/computer/tasks/d7bef7d2-258a-44cb-9419-74d69523ecf1`
- Asset/link inventory covering generated media references, deck links, strategy brief links, competitor links, and temporary iframe URLs

Remaining source caveat:

- Generated binary assets such as `kopis-thesis-explainer.mp4`, audio, PPTX, and related static files are referenced in `docs/source/perplexity-assets.md`, but direct unauthenticated downloads were blocked or private/expiring. Treat captured URLs as evidence and short-lived references, not permanent local asset files.

## Workspace

- Cwd: `/Users/daniel/Documents/KOPIS`
- Primary work path: `/Users/daniel/Documents/KOPIS`
- Git branch: none
- Dirty state: not a git repo
- Dev server: running during the current continuation on `http://127.0.0.1:5173/`; restart with `npm run dev -- --port 5173` if stopped.
- Local URL when running: `http://127.0.0.1:5173/`

## Files Present

Project files:

- `.gitignore`
- `AGENTS.md`
- `DESIGN.md`
- `PRODUCT.md`
- `README.md`
- `index.html`
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `vite.config.ts`
- `src/App.tsx`
- `src/main.tsx`
- `src/styles.css`
- `src/data/warRoomData.ts`
- `docs/agent/kopis-war-room-handoff.md`
- `docs/agent/kopis-war-room-wrapup.md`

Generated/dependency files:

- `node_modules/`
- `dist/`
- `tsconfig.tsbuildinfo`

## Completed Work

- Preserved the initial Perplexity-derived handoff in `docs/agent/kopis-war-room-handoff.md`.
- Scaffolded a local static app with Vite, React, TypeScript, and lucide-react.
- Added project docs:
  - `AGENTS.md`
  - `PRODUCT.md`
  - `DESIGN.md`
  - `README.md`
- Rebuilt `src/data/warRoomData.ts` around `docs/source/perplexity-war-room-raw.md` as the content authority.
- Replaced the compressed bento/decision-panel interpretation with a source-faithful eight-topic command center:
  - sidebar topics match the Perplexity artifact sections
  - each topic renders the captured tab body text from the raw source file
  - source docket links to local capture files and artifact links
  - operating gates keep legal/compliance claims counsel-labeled
- Added authenticated Perplexity source captures under `docs/source/`.
- Switched the current visual direction back to the `DESIGN.md` dark graphite product surface with Kopis green as signal only.
- Removed the heavy animated SVG path background and `framer-motion` dependency; the KOPIS background mark is now static CSS.
- Corrected provenance-sensitive labels:
  - competitor source-link work is no longer marked `Verified`
  - pilot states are described as candidates for counsel review, not counsel-approved states
- Verified production build and desktop/tablet/mobile layout checks in the current continuation pass.

## Verification Already Run

- `pwd` -> `/Users/daniel/Documents/KOPIS`
- Git check -> not a git repo
- `npm run build` -> passed
- Dev server started with `npm run dev -- --port 5173`
- Playwright screenshot capture:
  - `/tmp/kopis-source-desktop.png`
  - `/tmp/kopis-source-tablet.png`
  - `/tmp/kopis-source-mobile.png`
- Playwright DOM checks:
  - desktop/tablet/mobile: title present, 8 source topic sections, expected source snippets present for all 8 topics, no horizontal overflow, no console errors, nav touch targets at least 44px
- `rg -n "—|–" src package.json index.html vite.config.ts tsconfig.json` -> no non-ASCII dash matches in project source/config checked
- `lsof -nP -iTCP:5173 -sTCP:LISTEN` -> `node` is listening on `127.0.0.1:5173`
- Current continuation check -> port `5173` has a `node` listener
- Global handoff script run:
  - `/Users/daniel/.agents/scripts/agent/handoff.sh`
  - Result: not inside a git worktree; emitted file inventory including dependency noise

## Known Gaps

The authenticated source capture now exists locally, but asset binaries are not fully archived.

Still open:

- Download generated media/static assets into `docs/source/assets/` if permitted by the authenticated browser session.
- Keep `src/data/warRoomData.ts` source-driven from `docs/source/perplexity-war-room-raw.md`; do not reintroduce hand-authored summary data unless it is clearly mapped to source text.
- Keep legal and compliance statements labeled as `Needs counsel` until counsel artifacts exist.
- Do not treat signed `sites.pplx.app`, CloudFront, or Cloudinary URLs as permanent source URLs.

## Design Flow Context

Use the established website/product design flow, but keep it lean:

1. `design-orchestrator`: route the work as product dashboard, investor surface, and counsel diligence surface.
2. `DESIGN.md`: keep it as the visual-system contract.
3. `design-taste-frontend` or taste layer: use only when a visual direction decision is needed.
4. `impeccable`: critique and polish the production UI once source context is complete.
5. Browser verification:
   - Chrome/browser-harness for authenticated Perplexity extraction and source inspection.
   - Codex Browser for localhost visual checks.
   - Playwright for repeatable desktop/mobile regression checks.

Do not restart from a blank landing page. The app should stay a dense command center, not a marketing site.

## Content And Artifact Priorities

Preserve these content categories as first-class app data:

- Product positioning and non-claims
- Legal matrix and counsel questions
- Competitor and category map
- Payroll middleware assumptions
- Pilot criteria, states, and lender profile
- MVP scope and deferred scope
- Fundraising readiness checklist
- Counsel packet
- Lender pilot brief
- Investor brief/deck surface
- Borrower trust center draft
- Source/evidence labels and confidence state

Treat every legal or compliance statement as provisional until counsel verifies it.

## Next Best Action

Reconcile the captured source files against `src/data/warRoomData.ts`, then expand the app only from captured source or clearly labeled assumptions. If authenticated browser access still has download rights, attempt to save permitted binary assets into `docs/source/assets/`.

## Resume Prompt

```text
Resume: KOPIS war room source capture and rebuild

Continue from local changes. Do not restart from scratch. Preserve dirty files.

Cwd: /Users/daniel/Documents/KOPIS
Primary work path: /Users/daniel/Documents/KOPIS
Branch: none, this folder is not currently a git repo.
Dirty state: no git repo. Preserve all existing local files, screenshots, docs, node_modules, dist, and generated app files.

Startup:
1. Read local AGENTS.md first if present.
2. Run pwd.
3. Run git status --short only if inside a repo.
4. Discover only targeted startup files:
   rg --files -g 'AGENTS.md' -g 'CLAUDE.md' -g 'README*' -g 'package.json' -g 'DESIGN.md' -g 'tasks/todo.md' -g 'docs/next-implementation-map.md'
5. Use memory only if prior context matters: search /Users/daniel/.codex/memories/MEMORY.md with focused keywords like "KOPIS war room", then open only the 1-2 cited summaries needed.
6. Before editing, summarize the workspace/repo, startup files found, dirty-file state, and exact next action.

Read first:
- /Users/daniel/Documents/KOPIS/docs/agent/kopis-war-room-wrapup.md
- /Users/daniel/Documents/KOPIS/docs/agent/kopis-war-room-handoff.md
- /Users/daniel/Documents/KOPIS/PRODUCT.md
- /Users/daniel/Documents/KOPIS/DESIGN.md
- /Users/daniel/Documents/KOPIS/src/data/warRoomData.ts
- /Users/daniel/Documents/KOPIS/perplexity-kopis-task.png
- /Users/daniel/Documents/KOPIS/kopis-app-fullscreen.png

Completed:
- Perplexity artifact and task thread were previously inspected through Chrome/browser-harness.
- Source artifact: https://www.perplexity.ai/computer/a/kopis-war-room-j_GJRsPxRT2C9Wc35YPfZQ
- Source task thread: https://www.perplexity.ai/computer/tasks/d7bef7d2-258a-44cb-9419-74d69523ecf1
- Durable handoff exists at docs/agent/kopis-war-room-handoff.md.
- Local screenshots exist at the project root.
- Vite/React/TypeScript app scaffold exists.
- Project docs exist: AGENTS.md, PRODUCT.md, DESIGN.md, README.md.
- War-room content is parsed from docs/source/perplexity-war-room-raw.md in src/data/warRoomData.ts.
- Command-center UI exists in src/App.tsx and src/styles.css.
- npm install and npm run build passed in the previous pass.
- Local dev server is running on http://127.0.0.1:5173/ in the current continuation.

Important correction:
- The full text capture from the Perplexity artifact now exists locally in docs/source/perplexity-war-room-raw.md.
- docs/source/perplexity-artifact.html is populated. Binary media/deck assets are still not fully archived.
- Daniel's latest correction: do not mimic the Perplexity artifact visually, but preserve and improve its sidebar/topic architecture and full text coverage.
- The next implementation must use the same source topics in the sidebar and the same text inside each topic. Remove the current bento-box interpretation and filler content.
- Source artifact Daniel pointed to:
  https://sites.pplx.app/sites/proxy/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVmaXgiOiJ3ZWIvZGlyZWN0LWZpbGVzL2NvbXB1dGVyLzcyODgyOGI2LWEzZjAtNGYyZi1hN2IxLTVhNWZiMWYyNGE2YS9rb3Bpcy1kZXBsb3kvIiwic2lkIjoiNzI4ODI4YjYtYTNmMC00ZjJmLWE3YjEtNWE1ZmIxZjI0YTZhIiwiZXhwIjoxNzc5NDE2ODQyfQ.wGg7tt2njbA_ecL9v9Ue_qA55Ihn9TRjhZ6QcwuWCdA/web/direct-files/computer/728828b6-a3f0-4f2f-a7b1-5a5fb1f24a6a/kopis-deploy/index.html

Pending next steps:
1. Download generated media/static assets into docs/source/assets/ if authenticated access permits.
2. Add richer tables/matrices on top of the source sections only where the original topic text remains visible and clearly mapped.
3. Prepare exportable counsel, lender, and investor packet views from the same source-driven data.
4. Continue design flow polish after source coverage:
   - design-orchestrator for product/dashboard + investor/counsel routing
   - DESIGN.md as the visual contract
   - taste/impeccable for UI critique and refinement
   - Browser/Codex Browser/Playwright for desktop and mobile verification

Verification already run:
- pwd -> /Users/daniel/Documents/KOPIS
- git check -> not a git repo
- npm run build -> passed
- Playwright desktop/tablet/mobile screenshots captured in /tmp:
  - /tmp/kopis-source-desktop.png
  - /tmp/kopis-source-tablet.png
  - /tmp/kopis-source-mobile.png
- Playwright DOM checks -> no horizontal overflow on desktop/tablet/mobile, title present, 8 source topics present, expected text snippets present for all 8 topics, no console errors
- lsof -nP -iTCP:5173 -sTCP:LISTEN -> node is listening on 127.0.0.1:5173 during current continuation
- /Users/daniel/.agents/scripts/agent/handoff.sh -> ran; confirmed not a git worktree, but output includes dependency noise because node_modules exists

Known blockers/risks:
- Perplexity direct curl got Cloudflare 403 in the previous pass; use authenticated Chrome/browser-harness instead.
- The temporary sites.pplx.app iframe URL is private/expiring and should not be treated as durable.
- Legal claims require counsel verification, especially voluntary wage assignment, money transmitter/servicer role, middleware terms, and pilot-state scope.
- This workspace is not a git repo, so there is no git diff/branch safety net yet.

Current stage: source-faithful app rebuild complete; asset binary archival and exportable packet views remain open.

Activate now:
- Chrome/browser-harness or Chrome plugin: authenticated Perplexity extraction and source inspection.
- Codex Browser: localhost visual checks after any UI edits.
- Playwright: repeatable desktop/mobile screenshots and overflow checks.
- design-orchestrator: route KOPIS as product/dashboard plus investor/counsel surfaces.
- impeccable: critique/polish production UI only after source capture is complete.
- Superpowers verification-before-completion: use before claiming the rebuilt dashboard is done.
- Ruflo-lite memory_search/store: use only for compact project context, fail open if unavailable.

Consider later:
- Google Drive, Canva, Figma, or Slides only if deck/source assets need export or design collaboration.
- Supabase only if the command center becomes dynamic.
- Vercel after the local static/Vite build is source-complete and polished.

Avoid for now:
- Broad legal conclusions without counsel.
- Heavy agent swarms before source extraction.
- New MCP installs or daemons.
- Rebuilding backend/product infrastructure before the war-room command center source is complete.
- Treating the current src/data/warRoomData.ts as complete Perplexity context.

Use ToolSearch for unavailable optional capabilities when appropriate. Fail open if a tool is unavailable. Choose the smallest useful stack, not every tool.
```
