# Clustream landing page — build brief for Claude Code

Build the landing page for **Clustream** (clustream.tech) in **Next.js (App Router) + Tailwind**. One page, fully responsive, mobile first. A design reference of the page exists in the design canvas; this file carries everything needed to rebuild it.

## Hard rules
- Never mention ExamFlex. The only product shown is **Ez Prep**.
- Do not name cloud vendors (no AWS, DigitalOcean, etc.). Say "cloud", "infrastructure".
- "Kochi, Kerala" appears **only in the footer**.
- Avoid AI/agent buzzwords. "Language-model workflows" is the only phrase of that family allowed. Tone: hands-on, curated, specific.
- No emoji, no neon green, no stock photos. Contact email: **support@clustream.tech**.
- Numbers allowed: "1 lakh+" questions extracted by the pipeline, "thousands of users" in production. Invent no others.

## Stack notes
- `next/font/google`: **Inter Tight** (600, headings), **Inter** (400/500/600, body), **Instrument Serif** (italic only, one accent word per heading), **JetBrains Mono** (500, small caps labels and code).
- Inline the SVG illustrations as React components so they inherit fonts. Use `<Image>` or CSS for the background files.
- Smooth scroll anchors: `#services #pipelines #products #process #contact`.
- Mobile nav: below 760px hide the link row and the header CTA; show a 44px menu button that opens a white dropdown with the links and a "Get in touch" button. Close on link click.
- Respect `prefers-reduced-motion` (the only animation is a slow opacity pulse on one status dot).

## Design tokens
| Token | Value |
|---|---|
| ink (page bg) | `#0A0C10` |
| surface | `#11141A` |
| surface-2 | `#1A1F29` |
| panel | `#0F1218` |
| border | `rgba(255,255,255,0.08)` |
| text | `#F5F6F9` (headings), `#ECEEF2` (body) |
| muted | `#B3BAC9` (paragraphs), `#9CA5B8` (labels), `#8D95A7` (footer) |
| accent (sand) | `#E7B97A`, button text on it `#1A1206`, hover `#F3D9AE` |
| accent-2 (slate blue) | `#8AA4D6` |
| ok (soft green, status dots only) | `#8FC59A` |
| hero sky | gradient `#F3EEE6 0%` → `#F6E1CE 26%` → `#DAD8E4 56%` → `#A9B2CB 100%`; hero text `#0A0C10`, body `#1F2533` |
| radius | cards 24px, small cards 20px, buttons 12–16px, pills 999px |

Tailwind theme extension:

```js
theme: { extend: {
  colors: {
    ink: '#0A0C10', surface: '#11141A', 'surface-2': '#1A1F29', panel: '#0F1218',
    sand: { DEFAULT: '#E7B97A', soft: '#F3D9AE', ink: '#1A1206' },
    slate2: '#8AA4D6', ok: '#8FC59A',
    muted: { DEFAULT: '#B3BAC9', label: '#9CA5B8', faint: '#8D95A7' },
  },
  fontFamily: {
    display: ['var(--font-inter-tight)', 'Inter', 'sans-serif'],
    sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
    serif: ['var(--font-instrument)', 'Georgia', 'serif'],
    mono: ['var(--font-jetbrains)', 'monospace'],
  },
}}
```

Headings: Inter Tight 600, tracking `-0.03em` to `-0.035em`, `text-wrap: balance`. H1 `clamp(40px, 7.2vw, 88px)`, H2 `clamp(32px, 5vw, 56px)`. Accent words use Instrument Serif italic at about 1.1em (sand colour on dark, ink on the light hero). Eyebrows: JetBrains Mono 12px, letter-spacing 0.1em, sand. Containers: `max-width 1240px`, side padding 24px. Section top padding 160px desktop, 96px mobile. Touch targets at least 44px.

## Assets (this folder)
- `logo/clustream-mark.svg` (dark tile), `clustream-mark-on-dark.svg`, `clustream-logo-on-light.svg`, `clustream-logo-on-dark.svg` (wordmark uses Inter Tight; in the app render the wordmark as real text beside the mark)
- `favicon.svg`
- `background/hero-bg.svg` (full sky and hills, 1440x1000, use as hero background with `xMidYMax slice`), `background/hills.svg` (hills only, 1440x280, `preserveAspectRatio="none"`, transparent). Preferred build: CSS gradient on the hero plus `hills.svg` as a full-width block at the bottom of the hero; the console panel below overlaps it by 150px (`-mt-[150px]`, `z-10`).
- `illustrations/pipeline.svg` (Pipelines section), `illustrations/foundation.svg` (How we work section)

## Page structure and copy

**Header** (on the light hero): logo, links Services / Pipelines / Products / Process / Contact, dark pill button "Get in touch" (mailto).

**Hero** (light sky to dark): chip "SOFTWARE STUDIO · BUILT FOR SCALE". H1: "Software that *holds up* when thousands show up." Sub: "Clustream builds the systems behind the screen: document pipelines, backends, web apps and Android apps. Designed with care, tuned for cost and stability, and run in production for real users." Buttons: "Start a conversation" (dark, mailto), "See what we build" (ghost, #services). Small line: "Trusted to carry thousands of users in production."

**Pipeline panel** (dark window overlapping the hills, labelled ILLUSTRATIVE, title `pipeline / documents`): three columns. SOURCE · PDF (page drawing). STAGES: Ingest (PDFs, scans, images), Read (OCR that understands layout), Chunk (Splits that follow the document), Validate (Checked against your schema), Recover (Retry with back-off, pulsing sand dot). OUTPUT · YOUR SCHEMA: a mono JSON block with keys subject, question, options, answer, source_page and "…" placeholder values.

**Proof tiles** (3): "1 lakh+" previous-year questions extracted from documents and published by our own pipeline. "1000s" of users served in production, on systems we designed and operate. "Cost-tuned" every stage is built to spend as little as possible per document, without giving up stability.

**Services** (#services). Eyebrow WHAT WE BUILD. H2 "From the first upload to the *thousandth* user." Lead: "Clustream is a small software studio. We take products from a blank page to production, and stay close after they ship." Six cards (3 columns, 2 on tablet, 1 on mobile), each with icon, title, text, three mono chips:
1. Document processing pipelines: "PDFs and scans turned into clean, structured data in the shape you define, at heavy scale and low cost." OCR / SCHEMA OUTPUT / CHUNKING
2. Web applications: "Fully responsive apps, with separate experiences for admins and for users, each built around the work it needs to do." ADMIN PORTALS / USER APPS / RESPONSIVE
3. Backend systems: "The processing behind the screens: queues, workers and scheduled jobs that retry themselves and keep data moving." APIS / QUEUES / AUTO-RETRY
4. Android apps: "Native Android apps built for real devices and real networks, from the first prototype to release and every update after." PROTOTYPE / RELEASE / UPDATES
5. Scalable infrastructure: "Cloud architecture with sensible monitoring and costs. Sized for today, ready for the day traffic multiplies." DEPLOYMENT / MONITORING / COST
6. Language-model workflows: "Designed step by step, tested against real cases and kept under human review, so they behave the same on day 200 as on day one." WORKFLOWS / EVALUATION / REVIEW

**Pipelines** (#pipelines). Two columns (stack on mobile). Left: eyebrow DOCUMENT PIPELINES, H2 "Turning documents into data you can *trust.*", lead "Most documents were never meant to be read by software. We build the pipelines that read them anyway, at scale, at the lowest cost we can reach, and without anyone watching the queue." then `illustrations/pipeline.svg` in a panel card. Right: five numbered rows: Output that matches your schema / Reads layout, not just text / Chunking that respects the document / Backs off and recovers / Cheap to run, steady under load. (Texts: "Pages go in, structured records come out, shaped exactly the way your application expects them." / "OCR that understands tables, columns and figures, so meaning survives the conversion." / "Splits follow the document's own structure, never arbitrary lengths, so nothing is cut mid-thought." / "When a step fails or a service slows down, jobs wait, retry and resume on their own." / "Every stage is tuned to spend as little as possible per document, without trading away stability.")

**How we work** (#approach, not in nav). Left: eyebrow HOW WE WORK, H2 "A small team that *thinks* before it builds.", lead "The engineers behind Clustream bring deep experience in infrastructure, scalability and language-model workflows. We stay hands-on, so the people who design your system are the people who build it." then `illustrations/foundation.svg` in a panel card. Right: three rows: Infrastructure first ("We start with how the system will run, grow and fail, then design the product on top of that foundation.") / Curated, not automated ("We use modern tools, language models included, but every decision is made by an engineer who can explain why.") / Built to be owned ("Readable code and clear documentation, so your team is never locked out of its own software.").

**Products** (#products). Eyebrow PRODUCTS. H2 "Things we build for *ourselves*, too." Lead "Our own products run on the same foundations we offer to clients." One large card, two columns: left OUR PRODUCT label, "Ez Prep" (large), "An exam preparation platform for competitive exams, designed, built and operated by Clustream from the document pipeline to the app in your pocket.", three check-list lines ("1 lakh+ previous-year questions extracted and published by our own pipeline" / "Separate admin and learner apps, both fully responsive" / "Backend processing behind the screens, with automatic retries"), sand button "Read the case study" (href to be added). Right: abstract admin window plus phone mockup built from skeleton shapes (no real UI text).

**Process** (#process). H2 "Four steps. *No surprises.*" Four cards: Understand ("We learn the problem, the users and the constraints before we touch any code.") / Design ("Architecture, data and interface are planned together, then reviewed with you.") / Build ("Short cycles with working software along the way, so you see progress and not promises.") / Run ("We deploy, monitor and keep improving, and we stay available after launch.").

**Contact** (#contact). Big rounded card with a faint sand radial glow. H2 "Have something that needs to *hold up?*" Text "Tell us what you are building. We reply with questions and ideas, not a sales deck." Sand button with the email address.

**Footer**: logo, links, "© 2026 Clustream. Kochi, Kerala, India." and "clustream.tech".

## Later
Inner pages are designed next (Ez Prep case study first). Keep sections as separate components so they can be reused.
