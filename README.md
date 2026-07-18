<div align="center">

# Phantom — Product Site

The marketing / landing page for **Phantom**, an open-source, Windows-first background computer-use agent.

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![Phantom agent repo](https://img.shields.io/badge/agent-RavaniRoshan%2Fphantom-FF4B35)](https://github.com/RavaniRoshan/phantom)

</div>

## What this is

This repository is the **landing page** for Phantom — not the agent itself. Phantom is a Rust + Python computer-use agent that works in the background: a headless browser, local files + PowerShell, and an invisible Windows desktop, driven by a provider-neutral loop (Claude, OpenAI, Gemini, Ollama, NVIDIA NIM, or mock) with Safe / Hero safety modes. The actual agent lives at [`RavaniRoshan/phantom`](https://github.com/RavaniRoshan/phantom).

This site is a static **React + Vite + TypeScript** app styled with Tailwind. It includes:

- A hero, problem/loop/architecture sections, and a capability breakdown.
- A benefits/outcomes section and a competitor comparison table.
- An early-access **waitlist** (single email field) wired to [Formspree](https://formspree.io).
- An FAQ and a final call-to-action.

## Run locally

**Prerequisites:** [Node.js](https://nodejs.org) 20+ (or [Bun](https://bun.sh)).

```bash
npm install
npm run dev          # http://localhost:3000
```

To build and preview the production bundle:

```bash
npm run build
npm run preview
```

### Waitlist configuration

The early-access form posts to Formspree. Copy `.env.example` to `.env.local` and set:

```bash
VITE_FORMSPREE_ID=your_formspree_form_id
```

Without it, the form shows a clear configuration hint instead of silently failing.

## Deploy

Static build output goes to `dist/`. Deploy anywhere static (GitHub Pages, Vercel, Netlify, Cloudflare Pages). The `base` path is `/` by default — set it for project-page hosting (e.g. GitHub Pages under `/phantom-product-site/`).

## License

Apache-2.0. See [LICENSE](LICENSE). The Phantom agent it describes is also Apache-2.0.
