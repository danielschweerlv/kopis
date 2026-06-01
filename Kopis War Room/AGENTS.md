# Kopis War Room — AGENTS.md

## Workspace Identity

- **Project**: Kopis War Room founder dashboard
- **Path**: `/Users/daniel/Desktop/Kopis War Room/`
- **Format**: Single-file HTML — all CSS/JS inline, no build step, no external deps beyond fonts

## Files

| File | Role |
|---|---|
| `index.html` | The entire dashboard — ~1400 lines, ~82KB |
| `kopis-war-room-intro-3.mp3` | Audio intro (note: `-3` suffix — do NOT use `intro.mp3`) |
| `kopis-thesis-explainer.mp4` | Video explainer in Thesis tab |
| `kopis-logo-site-dark-transparent.png` | Night nav logo (ghostly white — needs `brightness(1.4)` filter) |
| `kopis-logo-site-ink-transparent.png` | Day nav logo (navy + lavender "I" — source of brand accent color) |
| `kopis-logo-site-dark-panel.png` | NOT USED — has old green "I", skip |
| `KOPIS.pdf` | Source of truth for revenue figures and business facts |

## Architecture — index.html

### Design System
- **Night accent**: `#9b8cff` (lavender/purple derived from logo "I")
- **Day accent**: `#6e60d4`
- **Background**: navy `#040c1a` night / `#f4f6fb` day
- **No green anywhere** — `#00c805` was the old accent, fully retired
- **Fonts**: Satoshi (fontshare) + JetBrains Mono (Google Fonts)
- **Theme toggle**: `data-theme="night"/"day"` attribute on `<html>`

### Key CSS Tokens
```css
:root { --bg:#040c1a; --accent:#9b8cff; --accent-soft:rgba(155,140,255,.1); }
[data-theme="day"] { --bg:#f4f6fb; --accent:#6e60d4; }
```

### Tab Structure (8 tabs)
```
home → homeGrid (card grid)
overview    → #tab-overview
thesis      → #tab-thesis
strategy    → #tab-strategy
market      → #tab-market
product     → #tab-product
go-to-market → #tab-go-to-market
review      → #tab-review
assets      → #tab-assets
```

### Key JS Functions
- `showTab(tab)` — hides/shows tabs, collapses hero from 320px → 180px, syncs nav
- Canvas waveform IIFE reads `data-theme` to switch dot colors between night/day

### Hero Canvas
- ID: `heroCanvas`, class `hero-canvas`
- 26px dot spacing, traveling sine wave, `requestAnimationFrame` loop
- Adapts color to current theme via `isDay()` check

## Content Decisions (locked)

- "orchestration layer gap" framing — not "no one has built this"
- "payroll linked repayment system" — not "Plaid for payroll"
- Mortgage = Phase 3, not Phase 1
- Patent claims: continuity engine + rules engine only (narrow)
- Revenue: 1–2% transaction fees, SaaS $10K–$1M/yr, enterprise $10M+
- "$7.5B at scale" = explicitly labeled as projection

## Verification Gates

Before calling edits done:
1. `grep -n "green\|#00c8\|limegreen" index.html` → must return 0 matches
2. `grep "kopis-war-room-intro" index.html` → must show `-3.mp3` not `intro.mp3`
3. All 8 `tab-content` IDs present: overview, thesis, strategy, market, product, go-to-market, review, assets
4. `showTab` function present
5. `heroCanvas` present
