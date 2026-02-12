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

## Contact form (Web3Forms)

The form uses [Web3Forms](https://web3forms.com) (free, no domain verification). Submissions are sent to the email you verify when getting your access key.

1. Go to [web3forms.com](https://web3forms.com) and enter **albanxhepi@agitexai.com** (or the email where you want to receive submissions).
2. Verify that email via the link they send.
3. Copy your **Access Key** and add to `.env`:  
   `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key-here`
4. Restart the dev server.

## Deployment

Optimized for [Vercel](https://vercel.com). Connect the repo and set the domain to `agitexai.com`.

## Project structure

- `src/app/` — Next.js App Router (layout, page, globals)
- `src/components/` — common, layout, sections, ui
- `src/data/` — static content (services, testimonials, etc.)
- `src/utils/` — animations and helpers
