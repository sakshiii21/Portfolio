# Sakshi Singh — Developer Portfolio

Personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. It brings together project information, selected experience and skills, and a contact form.

**Live site:** [portfolio-sakshisingh.vercel.app](https://portfolio-sakshisingh.vercel.app/)

**Source:** [github.com/sakshiii21/Portfolio](https://github.com/sakshiii21/Portfolio)

## Features

- Responsive portfolio pages built with the Next.js App Router.
- Project, skills, experience, and contact sections.
- Contact form handled by a Next.js route and the Resend API.
- Motion effects using Framer Motion.

## Stack

Next.js · React · TypeScript · Tailwind CSS · Framer Motion · Resend

## Run locally

Requires Node.js and npm.

```bash
git clone https://github.com/sakshiii21/Portfolio.git
cd Portfolio
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To use the contact form, create `.env.local` in the project root and set:

```dotenv
RESEND_API_KEY=your_resend_api_key
```

The contact route uses this key to send messages. Keep the key private and set it in the hosting provider's environment settings for a deployed instance.

## Available scripts

- `npm run dev` — start the development server.
- `npm run build` — create a production build.
- `npm start` — serve the production build.
- `npm run lint` — run ESLint.

## Project layout

- `app/` — App Router pages, layout, and contact API route.
- `components/` — page sections and reusable UI components.
- `hooks/` — React hooks.
- `lib/` — shared utilities.
- `public/` — static assets.

## Notes

The repository contains both `package-lock.json` and `pnpm-lock.yaml`. The commands above use npm and its lockfile; consider choosing one package manager and removing the other lockfile in a separate cleanup.
