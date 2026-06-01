# Perplexity Asset And Link Inventory

Source URL: https://www.perplexity.ai/computer/tasks/d7bef7d2-258a-44cb-9419-74d69523ecf1

Captured: 2026-05-20 via authenticated Chrome session using `browser-harness`.

Confidence: High for URLs visible in the authenticated DOM. Medium for expiring signed asset URLs because Perplexity `sites.pplx.app` and CloudFront links are private/temporary and may expire.

## Extraction Method

- Opened the Perplexity task URL in Daniel's authenticated Chrome profile through `browser-harness`.
- Extracted visible text with `document.body.innerText`.
- Extracted anchors, image/media nodes, iframe attributes, and linked artifact/app DOM with browser-side JavaScript.
- Opened the linked Perplexity artifact in the same authenticated browser session.
- Extracted the embedded app iframe `srcdoc`, then opened the inner `sites.pplx.app` iframe URL to inventory app links, media, deck links, and strategy brief links.
- Tested direct unauthenticated fetches with `curl`; Perplexity artifact fetch returned Cloudflare challenge/403, unsigned CloudFront MP4 returned 403, and Cloudinary direct MP4 returned 401.

## Task Thread Links

| Type | Label / Context | URL |
| --- | --- | --- |
| Source task | Thesis Page Kopis Intro Video | https://www.perplexity.ai/computer/tasks/d7bef7d2-258a-44cb-9419-74d69523ecf1 |
| Inspiration video | YouTube inspiration link 1 | https://www.youtube.com/watch?v=kl39KHS07Xc |
| Inspiration video | YouTube inspiration link 2 | https://www.youtube.com/watch?v=fTTGALaRZoc |
| Perplexity artifact | Kopis War Room Dashboard | https://www.perplexity.ai/computer/a/kopis-war-room-j_GJRsPxRT2C9Wc35YPfZQ |

## Generated Media References Visible In Thread

| Asset | Evidence |
| --- | --- |
| `kopis-thesis-explainer.mp4` | Final generated video, described as 2:29, 1280x720, H.264 + AAC, 81MB; visible as a Perplexity video attachment. |
| `kopis-war-room-intro.mp3` | Referenced as the audio source copied into the deployment. |
| `kopis-explainer-script.txt` | Referenced when narration script was written. |
| `kopis-deploy/index.html` | Referenced as the deployed dashboard entry file. |
| `kopis-dashboard-final-2.html` | Referenced as the original dashboard HTML inspected by Perplexity. |

## Thread DOM Media / Preview URLs

These were visible in the authenticated Perplexity task DOM. They are preview or telemetry assets, not necessarily durable source files.

| Type | Label | URL |
| --- | --- | --- |
| Image preview | Kopis War Room app preview | `https://d2z0o16i8xm8ak.cloudfront.net/web/direct-files/sites/728828b6-a3f0-4f2f-a7b1-5a5fb1f24a6a/kopis-deploy/8ff18946-c3f1-453d-82f5-6737e583df65/_preview.jpg?...` |
| Image preview | `kopis-thesis-explainer.mp4` preview | `https://d2z0o16i8xm8ak.cloudfront.net/728828b6-a3f0-4f2f-a7b1-5a5fb1f24a6a/dc02724a-ca73-40af-a2e1-3960e161a4ed/kopis-thesis-explainer.mp4_preview.jpeg?...` |
| Image preview | Cloudinary video preview variant | `https://pplx-res.cloudinary.com/image/upload/s--pXh_9h8K--/c_limit,w_640,h_640/v1/code-interpreter/728828b6-a3f0-4f2f-a7b1-5a5fb1f24a6a/dc02724a-ca73-40af-a2e1-3960e161a4ed/kopis-thesis-explainer.mp4_preview.jpeg` |
| Image endpoint | Perplexity image endpoint | https://edge.perplexity.ai/image |
| Iframe | Perplexity telemetry/counter | https://count.perplexity.ai/bs#c537f9b1-ef4c-4a00-8137-fbb671f0198b |

## Embedded App / Iframe URLs

| Type | Label | URL |
| --- | --- | --- |
| Perplexity artifact page | Kopis War Room | https://www.perplexity.ai/computer/a/kopis-war-room-j_GJRsPxRT2C9Wc35YPfZQ |
| Inner app iframe | `sites.pplx.app` deployed dashboard iframe | `https://sites.pplx.app/sites/proxy/.../web/direct-files/computer/728828b6-a3f0-4f2f-a7b1-5a5fb1f24a6a/kopis-deploy/index.html` |
| Perplexity telemetry iframe | Counter | https://count.perplexity.ai/bs#c537f9b1-ef4c-4a00-8137-fbb671f0198b |

Full inner app iframe URL captured from authenticated artifact `srcdoc`:

```text
https://sites.pplx.app/sites/proxy/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVmaXgiOiJ3ZWIvZGlyZWN0LWZpbGVzL2NvbXB1dGVyLzcyODgyOGI2LWEzZjAtNGYyZi1hN2IxLTVhNWZiMWYyNGE2YS9rb3Bpcy1kZXBsb3kvIiwic2lkIjoiNzI4ODI4YjYtYTNmMC00ZjJmLWE3YjEtNWE1ZmIxZjI0YTZhIiwiZXhwIjoxNzc5NDE2ODQyfQ.wGg7tt2njbA_ecL9v9Ue_qA55Ihn9TRjhZ6QcwuWCdA/web/direct-files/computer/728828b6-a3f0-4f2f-a7b1-5a5fb1f24a6a/kopis-deploy/index.html
```

## App Links Captured From Embedded Dashboard

| Type | Label | URL |
| --- | --- | --- |
| Competitor/source | Kashable | https://kashable.com/ |
| Competitor/source | BMG / LoansAtWork | https://bmgmoney.com/loansatwork/ |
| Competitor/source | TrueConnect | https://www.trueconnectloan.com/ |
| Competitor/source | Salary Finance | https://www.salaryfinance.com/us/ |
| Competitor/source | OneBlinc | https://www.oneblinc.com/ |
| Payroll API/source | Pinwheel | https://www.pinwheelapi.com/ |
| Payroll API/source | Argyle | https://www.argyle.com/ |
| Payroll API/source | Atomic | https://atomic.financial/ |
| Comparator/source | Highline | https://www.highline.co/ |
| Consumer proof point/source | Perpay | https://perpay.com/ |

## Deck And Strategy Brief Links

These were not directly visible in the task-thread text, but were extracted from the linked Perplexity artifact's embedded app DOM.

| Type | Label | URL |
| --- | --- | --- |
| Deck HTML | Open deck in new tab | `https://sites.pplx.app/sites/proxy/.../kopis-deploy/kopis-investor-deck.slides.html` |
| Deck file | Download PPTX | `https://sites.pplx.app/sites/proxy/.../kopis-deploy/kopis-investor-deck.pptx` |
| Strategy brief | Open strategy brief in new tab | `https://sites.pplx.app/sites/proxy/.../kopis-deploy/kopis-strategy-brief.md` |
| Deck iframe | Kopis investor deck iframe | `https://sites.pplx.app/sites/proxy/.../kopis-deploy/kopis-investor-deck.slides.html` |
| Strategy iframe | Kopis strategy brief iframe | `https://sites.pplx.app/sites/proxy/.../kopis-deploy/kopis-strategy-brief.md` |

## Embedded Dashboard Media

| Type | File | URL |
| --- | --- | --- |
| Audio | `kopis-war-room-intro.mp3` | `https://sites.pplx.app/sites/proxy/.../kopis-deploy/kopis-war-room-intro.mp3` |
| Video | `kopis-thesis-explainer.mp4` | `https://sites.pplx.app/sites/proxy/.../kopis-deploy/kopis-thesis-explainer.mp4` |
| Video source | `kopis-thesis-explainer.mp4` | Same as video URL above. |
| Video poster | Inline SVG poster | `data:image/svg+xml;utf8,<svg ...>What Kopis actually does...</svg>` |

Full media URLs captured from embedded app DOM:

```text
https://sites.pplx.app/sites/proxy/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVmaXgiOiJ3ZWIvZGlyZWN0LWZpbGVzL2NvbXB1dGVyLzcyODgyOGI2LWEzZjAtNGYyZi1hN2IxLTVhNWZiMWYyNGE2YS9rb3Bpcy1kZXBsb3kvIiwic2lkIjoiNzI4ODI4YjYtYTNmMC00ZjJmLWE3YjEtNWE1ZmIxZjI0YTZhIiwiZXhwIjoxNzc5NDE2ODQyfQ.wGg7tt2njbA_ecL9v9Ue_qA55Ihn9TRjhZ6QcwuWCdA/web/direct-files/computer/728828b6-a3f0-4f2f-a7b1-5a5fb1f24a6a/kopis-deploy/kopis-war-room-intro.mp3

https://sites.pplx.app/sites/proxy/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVmaXgiOiJ3ZWIvZGlyZWN0LWZpbGVzL2NvbXB1dGVyLzcyODgyOGI2LWEzZjAtNGYyZi1hN2IxLTVhNWZiMWYyNGE2YS9rb3Bpcy1kZXBsb3kvIiwic2lkIjoiNzI4ODI4YjYtYTNmMC00ZjJmLWE3YjEtNWE1ZmIxZjI0YTZhIiwiZXhwIjoxNzc5NDE2ODQyfQ.wGg7tt2njbA_ecL9v9Ue_qA55Ihn9TRjhZ6QcwuWCdA/web/direct-files/computer/728828b6-a3f0-4f2f-a7b1-5a5fb1f24a6a/kopis-deploy/kopis-thesis-explainer.mp4
```

## Fetch Blockers / Caveats

- Direct unauthenticated fetch of `https://www.perplexity.ai/computer/a/kopis-war-room-j_GJRsPxRT2C9Wc35YPfZQ` returned HTTP 403 with Cloudflare challenge.
- Direct unsigned CloudFront MP4 URL returned HTTP 403.
- Direct Cloudinary video URL returned HTTP 401: `Resources of type upload are restricted in this account`.
- The `sites.pplx.app` proxy URLs include signed/expiring tokens. Treat them as capture evidence and short-lived references, not permanent source URLs.
