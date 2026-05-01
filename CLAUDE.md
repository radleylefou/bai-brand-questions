# FC Brand Discovery OS — Project Spec

## What This Is

An internal tool for **Ferraz Creative** to create, manage, and send branded discovery questionnaires to clients. Built on top of the existing `backtest.ai` brand questionnaire (currently a static HTML file on Vercel).

The app has two surfaces:
- **Admin** — FC team creates questionnaires, manages clients, reviews responses, runs AI synthesis, exports docs
- **Client** — Password-protected unique URL where clients fill out their questionnaire

---

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS + CSS variables (preserve the existing dark aesthetic from the HTML file)
- **Database**: Supabase (Postgres) — for clients, questionnaires, questions, responses
- **Auth**: Supabase Auth — email/password for FC admin login
- **Client access**: Per-questionnaire password (stored hashed in Supabase), no account required
- **AI**: Anthropic Claude API (`claude-sonnet-4-20250514`) — for brand strategy synthesis from responses
- **Deployment**: Vercel (existing project)

---

## Design Language

Inherit the existing questionnaire aesthetic:
- Dark background: `#0d0e10`
- Surface layers: `#141518`, `#1c1e23`
- Accent: `#d4f76e` (yellow-green)
- Muted text: `#6b6e77`
- Fonts: DM Sans (body) + DM Mono (labels, meta, code)
- Subtle borders: `rgba(255,255,255,0.08)`

The admin UI should feel like the same product — not a generic dashboard bolted on. Same dark theme, same typographic system.

---

## Database Schema

```sql
-- Clients
create table clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  email text,
  project_type text, -- 'brand', 'rebrand', 'ux', 'web', 'other'
  notes text,
  created_at timestamptz default now(),
  archived boolean default false
);

-- Templates (reusable question sets)
create table templates (
  id uuid primary key default gen_random_uuid(),
  name text not null, -- e.g. "Brand Discovery", "UX Discovery", "Rebrand"
  description text,
  created_at timestamptz default now()
);

-- Questionnaires (assigned to a client, optionally from a template)
create table questionnaires (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references clients(id) on delete cascade,
  template_id uuid references templates(id) on delete set null,
  title text not null,
  slug text unique not null, -- used in the URL: /q/[slug]
  password_hash text not null, -- bcrypt hash of client password
  status text default 'draft', -- 'draft', 'sent', 'in_progress', 'submitted'
  created_at timestamptz default now(),
  submitted_at timestamptz
);

-- Sections within a questionnaire
create table sections (
  id uuid primary key default gen_random_uuid(),
  questionnaire_id uuid references questionnaires(id) on delete cascade,
  title text not null,
  description text,
  label text, -- e.g. "Foundation", "Positioning"
  color text, -- accent color for this section
  order_index integer not null
);

-- Questions within a section
create table questions (
  id uuid primary key default gen_random_uuid(),
  section_id uuid references sections(id) on delete cascade,
  questionnaire_id uuid references questionnaires(id) on delete cascade,
  label text not null,
  hint text,
  type text not null, -- 'textarea', 'radio', 'checkbox', 'chips_single', 'chips_multi', 'scale', 'slider_group'
  options jsonb, -- for radio/checkbox/chips: [{ value, label, sub? }]
  config jsonb, -- for sliders: [{ label, left, right }], for scale: { left, right }
  required boolean default false,
  order_index integer not null
);

-- Responses (one row per question per questionnaire submission)
create table responses (
  id uuid primary key default gen_random_uuid(),
  questionnaire_id uuid references questionnaires(id) on delete cascade,
  question_id uuid references questions(id) on delete cascade,
  value jsonb, -- stores any answer type: string, array, number, object
  saved_at timestamptz default now()
);
```

---

## App Routes

### Admin (auth-gated)

| Route | Description |
|---|---|
| `/admin/login` | FC team login (Supabase Auth) |
| `/admin` | Dashboard — recent activity, quick stats |
| `/admin/clients` | Client list — create, search, archive |
| `/admin/clients/[id]` | Client detail — questionnaires, status, notes |
| `/admin/questionnaires/new` | Create questionnaire — pick client, pick template or start blank |
| `/admin/questionnaires/[id]` | Questionnaire builder — edit sections/questions, set password, copy link |
| `/admin/questionnaires/[id]/responses` | Response viewer — all answers in a clean read mode |
| `/admin/questionnaires/[id]/synthesis` | Claude AI synthesis — generate brand brief from answers |
| `/admin/templates` | Template library — Brand Discovery, UX Discovery, Rebrand, custom |
| `/admin/templates/[id]` | Template editor |

### Client-facing

| Route | Description |
|---|---|
| `/q/[slug]` | Password gate — enter password to access questionnaire |
| `/q/[slug]/fill` | The questionnaire itself (port of existing HTML) |
| `/q/[slug]/submitted` | Thank you / confirmation screen |

---

## Feature Specs

### Questionnaire Builder (`/admin/questionnaires/[id]`)

- Sections listed in order with drag-to-reorder (use `@dnd-kit/core`)
- Each section: editable title, description, label, color picker (from a preset palette)
- Questions within each section: drag-to-reorder
- Add question button → picks question type → inline editor appears
- Question types supported:
  - `textarea` — long-form text answer
  - `radio` — single select with option items (label + optional sub-label)
  - `checkbox` — multi-select option items
  - `chips_single` — word-cloud style, pick one
  - `chips_multi` — word-cloud style, pick up to N
  - `scale` — 1–5 buttons with left/right labels
  - `slider_group` — multiple labeled sliders (for voice dimensions)
- Each question has: label, hint (monospace helper text), required toggle
- "Preview" mode — see the questionnaire as the client will

### Client Password Gate (`/q/[slug]`)

- Minimal centered UI — questionnaire title, client name, password field
- On correct password: set a session cookie, redirect to `/q/[slug]/fill`
- On incorrect: shake animation, error state
- No brute-force protection needed for V1 (internal tool)

### Client Questionnaire (`/q/[slug]/fill`)

- Identical visual design to the existing `backtest.ai` HTML questionnaire
- Progress bar (questions answered / total)
- Auto-save responses to Supabase on every answer change (debounced 800ms)
- On submit: mark questionnaire as `submitted`, show confirmation screen
- Client can return and continue if they haven't submitted yet (session cookie)

### Response Viewer (`/admin/questionnaires/[id]/responses`)

- Read-only view of all submitted answers
- Same section/question structure as the fill UI
- Each answer rendered in its native format (text block, selected chips, scale value, etc.)
- "Not answered" shown in muted style for skipped questions
- Copy all responses as plain text button

### Claude Synthesis (`/admin/questionnaires/[id]/synthesis`)

- Button: "Generate Brand Strategy Brief"
- Calls Claude API with all Q&A pairs as context
- System prompt instructs Claude to output a structured brand brief:
  - Brand Purpose
  - Positioning Statement
  - Target Audience
  - Brand Personality
  - Voice & Tone
  - Visual Direction
  - Key Messages
  - Open Questions / Risks
- Output rendered as formatted markdown in the UI
- "Regenerate" and "Copy" actions
- "Export as .md" download

### Export

- **PDF**: Print-optimized CSS on the response viewer page — `window.print()` with `@media print` styles (same approach as the existing HTML)
- **Structured doc**: Export responses as a clean markdown file — questions as headers, answers as body copy
- Both exports available from the response viewer

---

## Seeded Templates

On first run, seed these three templates into the `templates` table:

**Brand Discovery** — the existing Backtest.ai questionnaire structure (6 sections, 20 questions)

**UX Discovery** — sections: Project Overview, Users & Goals, Current State, Flows & Screens, Constraints, Open Questions

**Rebrand** — sections: What Changed, Current Brand Audit, New Direction, Stakeholders & Constraints, Timeline & Deliverables

---

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ANTHROPIC_API_KEY=
ADMIN_EMAIL=george@ferrazcreative.com
```

---

## Build Order

1. **Scaffold** — `npx create-next-app@latest` in the existing repo, install deps, set up Tailwind + CSS variables matching the existing design
2. **Supabase** — create project, run schema SQL, set up auth, connect env vars
3. **Admin auth** — login page, middleware to protect `/admin/*`
4. **Client management** — `/admin/clients` CRUD
5. **Questionnaire builder** — section + question editor, all question types
6. **Template seeding** — seed the three base templates
7. **Client-facing questionnaire** — port existing HTML to Next.js components, password gate, auto-save
8. **Response viewer** — read-mode for submitted answers
9. **Claude synthesis** — API route + synthesis UI
10. **Export** — PDF print styles + markdown export

---

## V1 Constraints (keep it simple)

- No real-time collaboration — one editor at a time is fine
- No email sending from the app — FC team copies the link manually and sends it
- No client accounts — password per questionnaire only
- No version history on questionnaires
- Single FC workspace — no multi-tenancy needed
