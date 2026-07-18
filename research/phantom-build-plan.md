# Phantom Landing Page — Build Spec

**Principle:** preserve the existing dark/red visual system and the "No focus theft" angle; add the *conversion layer* (benefits, comparison, waitlist, FAQ) between/after existing sections. Everything lands in a branch → PR into `phantom-product-site` → merge → deploy → link from the phantom repo README.

**Status:** SPEC ONLY — not yet implemented. Approval + open-question resolutions required before code.

## A. Pre-launch blockers (not page UI, but required before PR/launch)
| Item | Current state | Action |
|---|---|---|
| `README.md` | AI Studio default ("Run and deploy your AI Studio app") | Rewrite as real Phantom README: what it is, demo, `Run locally`, license, link to live site |
| `metadata.json` | AI Studio default (empty name/description) | Replace or delete |
| `LICENSE` | Claimed Apache-2.0 | Confirm the file exists in repo |
| `index.html` | Only `<title>` + fonts | Add `<meta description>`, OG tags, Twitter card |
| Build | untried in this session | Confirm `npm run build` emits a clean static bundle |

## B. Page sections (in `App.tsx` order)
1. **Meta/SEO** (`index.html`) — description + OG/Twitter so HN/PH/X shares render properly.
2. **Hero** (`Hero.tsx`) — keep "No focus theft. No waiting." Keep GitHub + Run locally CTAs. *Option:* add a low-friction "Join early access" tertiary link that scrolls to the waitlist. Provide 3 H1 candidates to A/B test (benefit-led vs current).
3. **Benefits-as-outcomes** (NEW, after Features' problem section) — 6 outcome cards in "you/your" voice: *Reclaim your machine · Swap any LLM without rewrites · Run air-gapped · Bounded, auditable writes · Invisible by default · Test deterministically offline.* (Research: Digital Applied — lead with outcomes, not features.)
4. **"Why not Operator / Claude?" comparison table** (NEW) — the single most persuasive addition for a technical audience. 3 columns × rows:
   | | ChatGPT Agent | Claude Computer Use | **Phantom** |
   |---|---|---|---|
   | Runs locally on your machine | Cloud sandbox | Mac only (research preview) | **Windows, local** |
   | Invisible / no focus theft | No | No | **Yes (UIA-first)** |
   | Works offline (mock mode) | No | No | **Yes** |
   | Bring your own LLM | OpenAI only | Anthropic only | **6 adapters** |
   | Safety modes (bounded writes) | Limited | Limited | **Safe / Hero** |
   | Open source | No | No | **Apache-2.0** |
   *Caveat to honor:* "works offline" = mock mode runs the full loop without network; real tasks use your chosen local/cloud LLM. Word it honestly.
5. **Early-access waitlist** (NEW — the Gmail funnel) — H2 *"Run Phantom on your machine. First."* + one email field + button *"Get early access"* (not "Submit") + one-line privacy note. (Research: single-field forms convert best; 2–5% cold / 8–20% warm.)
6. **FAQ** (NEW) — objection handling: *Is it safe? / Will it delete my files? / Does it need internet? / Is it production-ready? / Windows-only — macOS/Linux roadmap? / Which models?* Answers sourced from the draft's own Safe/Hero/mock-mode material.
7. **Social proof** (enhance) — until stars exist: credibility badges "Apache-2.0 · Rust + Python · runs fully offline." Add GitHub stars/contributors block once live.
8. **Footer** (enhance) — privacy, license, GitHub, Discord (if any), docs.
9. **Thank-you state** (NEW) — post-submit: confirms signup, sets expectations, links to GitHub/Discord.

## C. Funnel wiring
- **New component `WaitlistForm.tsx`** (or extend Footer/Hero): email input + submit, client-side email validation, `loading / success / error` states.
- **Backend (recommend v1):** **Formspree** (or Getform/Basin) — zero backend, free tier, emails you + CSV. Configure via an env var / `data-form-id`. Migrate to **Cloudflare Worker + Workers KV** later if volume/privacy demands.
- **Privacy note** must not contradict the "nothing leaves your machine" brand — be explicit that the *waitlist email* is stored by the capture provider, separately from the agent's local execution.
- **Optional v2:** referral "skip-the-line" loop (Robinhood-style) — adds backend complexity; defer.

## D. Copy voice
Second person, outcome-first, specific numbers (reuse `0 focus stolen`, `100% user-controlled modes`, `6 provider adapters`, `Local`). H1 candidates to test:
- (current) **No focus theft. No waiting.**
- (benefit) **Your computer. Automated — without taking it over.**
- (angle) **The background agent that runs on *your* Windows machine.**

## E. Launch sequence (after PR merges)
1. Deploy static site — **GitHub Pages** (this repo, `gh-pages` branch or `/docs`), **Vercel**, **Netlify**, or **Cloudflare Pages**. (Repo-deploy target = open question below.)
2. Update `phantom` repo README to link the live site.
3. **Show HN** — title *"Show HN: Phantom — a background-mode computer-use agent for Windows that doesn't steal your focus"*, link repo + site.
4. Product Hunt (secondary), then a dev.to/README write-up + launch directories.

## F. Open questions to resolve (your call)
- **Deploy target:** GitHub Pages vs Vercel/Netlify/Cloudflare? (Affects how the PR deploys.)
- **Waitlist backend:** Formspree (recommended) vs Cloudflare KV vs Google Sheet?
- **Community link:** Is there a Discord/Slack to put in the footer + thank-you page?
- **macOS/Linux roadmap:** needed for an honest FAQ answer.

## G. Definition of done
- [ ] README.md + metadata.json replaced
- [ ] OG/meta tags present; `npm run build` clean
- [ ] Benefits, comparison table, waitlist, FAQ, footer, thank-you added
- [ ] Waitlist form validates + submits to chosen backend + shows success
- [ ] Privacy note present and honest
- [ ] PR opened in `phantom-product-site`, reviewed, merged
- [ ] Deployed + linked from phantom repo README

## Source basis
Deep research report: `research/phantom-landing-page.md` (or see conversation). Key references: OpenAI CUA, WorkOS & AskUI comparisons, Digital Applied 9-block framework, Flowjam/Soyzamudio waitlist benchmarks, Watermelon HN-vs-PH, arXiv reliability paper.
