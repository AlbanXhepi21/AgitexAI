# AgitexAI Website

Professional marketing website for AgitexAI — AI software development & enterprise solutions (Tirana, Albania | US & EU clients).

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — run ESLint

## Contact form (email)

Submissions go to `CONTACT_FORM_TO_EMAIL` (default: **albanxhepi@agitexai.com**). You can use either:

- **Gmail (free, no domain verification)** — Sends to any address. In `.env` set `GMAIL_USER` and `GMAIL_APP_PASSWORD` (create one at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords) with 2-Step Verification enabled). The API uses this first when set.
- **Resend** — Set `RESEND_API_KEY` in `.env`. To send to albanxhepi@agitexai.com you must verify agitexai.com at [resend.com/domains](https://resend.com/domains) and set `RESEND_FROM_EMAIL=AgitexAI <info@agitexai.com>`.

## Deployment

Optimized for [Vercel](https://vercel.com). Connect the repo and set the domain to `agitexai.com`.

## Project structure

- `src/app/` — Next.js App Router (layout, page, globals)
- `src/components/` — common, layout, sections, ui
- `src/data/` — static content (services, testimonials, etc.)
- `src/utils/` — animations and helpers
