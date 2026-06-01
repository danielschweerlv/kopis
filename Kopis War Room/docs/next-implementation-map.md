# Next Implementation Map

Last updated: 2026-05-24

## What Was Done (this session)

- Logos applied: `kopis-logo-night.png` (dark bg, white KOPIS, green I) + `kopis-logo-day.png` (cream bg, navy KOPIS, lavender I) — copied from session cache into War Room folder
- Night Spline background: `liquidgradientabstractbackground-gEjylYLumN1b1CUcuIb8DyUA`
- Day background: UnicornStudio project `qTiAlX0sxkuBOAiL7qHL` (loaded via CDN script at `</body>`)
- TOD simplified: 6 modes → 2 (Day ☀️ / Night 🌙 only); pre-dawn/sunrise/dusk/sunset CSS removed
- Media player component added then reverted; colorful bar waveform restored
- Nav: glassmorphism — `rgba(10,14,28,.78)`, `blur(28px) saturate(180%)`, transparent background
- 8 bottom cards: same glass treatment as nav — identical blur/opacity/border values
- Logo: 44px height, transparent nav-brand panel, `onclick="showTab('home')"` (home button)
- Card-grid border-top updated to `rgba(255,255,255,.07)` (glass-consistent)

## Current State

- Single file: `/Users/daniel/Desktop/Kopis War Room/index.html`
- 2 themes: night (default `data-tod="night"`) and daytime
- Spline + UnicornStudio backgrounds load from CDN — require internet connection
- Logo swap: `.logo-night` shown by default, `.logo-day` shown for `[data-tod="daytime"]`
- Nav and cards: glassmorphic at 78% opacity

## Not Yet Done

| Item | Notes |
|---|---|
| `kopis-thesis-explainer.mp4` | Not in War Room folder — copy it in to enable video in Assets tab |
| `kopis-investor-deck.slides.html` | Not in War Room folder — copy it in to enable deck preview in Assets tab |
| Brand Assets tab | Placeholder content — real exports not finalized |
| Browser visual QA (day theme) | Day Spline/UnicornStudio not screenshot-verified (requires live browser + internet) |

## Next Gates

1. Copy `kopis-thesis-explainer.mp4` and `kopis-investor-deck.slides.html` into the War Room folder
2. Open in browser, confirm day/night toggle, logo home button, Spline backgrounds load
3. Brand Assets tab: fill with real logo exports once branding is finalized
4. Website build: SEO architecture in GTM tab — next big deliverable
5. Pilot lender outreach: 7-day action items in Action Plan / Next Moves tab
