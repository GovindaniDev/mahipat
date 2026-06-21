# Mahipatsinh Foundation — Design System

The design system for the **Mahipatsinh Foundation Admin Panel**, an internal tool an Indian NGO uses to manage donations, donors, members, campaigns, causes, volunteers, CSR enquiries, blogs, notifications, tax-compliance (80G / 10BD / 10BE), and reports.

This system codifies the existing product's visual language — warm **orange** action color on a deep **navy** sidebar, **Inter** type, generously rounded white cards with soft layered shadows — into reusable tokens, components, and screen recreations. It is also the basis for *improving* the panel: a consistent token layer, refined primitives, and documented patterns to build new modules against.

## Sources
- **Codebase:** `admin-app/` (mounted, read-only) — React 18 + Vite + Tailwind CSS 3 + lucide-react + recharts. Key references: `src/index.css` (component classes), `tailwind.config.js` (palette), `src/components/common/` (primitives), `src/components/layout/` (Sidebar, Navbar), `src/pages/dashboard/Dashboard.jsx`, `src/pages/donations/`, `src/pages/auth/Login.jsx`.
- **Logo:** `admin-app/src/public/mahi-logo.png` → copied to `assets/mahi-logo.png`.

There is no Figma file or slide template; none were provided, so none are recreated.

---

## CONTENT FUNDAMENTALS

**Voice.** Plain, operational, administrative. The panel speaks to NGO staff, not donors. Copy names the task and gets out of the way: "Add Offline Donation", "Refresh", "View all →", "Showing 1–10 of 1,284 records".

**Casing.** Page titles and section eyebrows are Title Case ("Donation Overview", "Key Performance Indicators"). Eyebrows are additionally UPPERCASED with wide tracking. Body, hints, and helper text are sentence case. Buttons are Title Case ("Sign In", "Apply Filters").

**Person.** Largely impersonal/imperative — actions ("Add", "Apply", "Clear", "Retry") and labels ("Donor name", "Payment mode"). No marketing "you/we". System feedback is matter-of-fact: "Donation saved", "Failed to send 80G certificate", "Some dashboard data could not be loaded. Showing partial data."

**Domain vocabulary.** 80G certificate, 10BD/10BE, PAN, donor, member, campaign, cause, recurring subscription, fundraiser, CSR enquiry, financial year (FY). Statuses are SCREAMING_SNAKE enums humanized for display (`CERTIFICATE_GENERATED` → "Certificate generated").

**Numbers & money.** Indian formatting throughout: `₹` prefix, `en-IN` grouping (₹12,40,500 — lakh/crore commas). Dates `dd MMM yyyy` (14 Jun 2026). Phones `+91 98250 11223`. Numerals are tabular/monospaced so columns align.

**Emoji.** None in the refined system. (The legacy `common/index.jsx` had a few emoji in export buttons / empty states — intentionally dropped; use lucide icons instead.)

**Vibe.** Trustworthy, efficient, dense-but-calm. A back-office tool that handles money and compliance, so it favors clarity and scannability over flourish.

---

## VISUAL FOUNDATIONS

**Color.** Warm **orange** `#FF5A1F` (orange-500) is the single brand/action color — care, generosity, "give". It appears as a 135° gradient (`#FF5A1F → #FF7040`) on primary buttons and active accents. Deep **navy** (`#0D1B2E → #0A1522` vertical gradient) is the sidebar and ink reference — trust and stability. Everything else is a cool slate-gray neutral ramp (app background `#F8FAFC`). Status uses a fixed semantic set: green (success/paid/active), amber (pending/warn), red (failed/blocked), blue (info/generated), purple (refunded/special), gray (neutral/draft), orange (brand/completed). See `tokens/colors.css`.

**Type.** **Inter** for all UI (300–800). **JetBrains Mono** for money, IDs, phone numbers (tabular alignment). Page titles 24px/700; section eyebrows 11px/600 uppercase with `0.08em` tracking; body 14px/400; table cells 13px; micro-labels 10–11px. Tight letter-spacing on large headings. See `tokens/typography.css`.

**Spacing.** 4px base scale. Cards pad at 20px (`--space-5`); cards and grid cells gap at 16px (`--space-4`); page gutter and section spacing at 24px (`--space-6`). Layout: 256px sidebar (64px collapsed), 64px top bar.

**Radii.** The system is distinctly rounded. Cards/modals/dropdowns 16px (`2xl`), buttons/inputs 12px (`xl`), icon tiles 12px, list rows 8px, pills fully round. Nothing is sharp-cornered.

**Backgrounds.** Flat and calm — no photography, no illustration, no texture or noise. App is solid slate-50; cards are solid white. The only gradients are the orange button fill, the navy sidebar, and the warm orange-50 login backdrop. No hero imagery.

**Shadows.** Soft, layered, low-contrast, neutral (never colored except buttons). Resting cards use a two-layer shadow (`0 1px 3px` + `0 6px 16px` at 4–5% black); hover deepens it. Dropdowns/menus float higher; modals highest. Primary buttons carry a subtle **orange glow** (`0 2px 8px rgba(255,90,31,0.30)`). See `tokens/spacing.css`.

**Borders.** Hairline and quiet — mostly `rgba(0,0,0,0.06)` on cards and `#E5E7EB` on inputs. Dividers `rgba(0,0,0,0.07)`. Borders do the structural work that heavy shadows would otherwise; the look is "outlined card with a whisper of lift".

**Animation & easing.** Restrained. Transitions 120–200ms on `cubic-bezier(0.4,0,0.2,1)`; the sidebar collapse is 300ms. Cards/KPI tiles lift `translateY(-1px)` on hover; stat-card icon tiles scale to 1.08. Modals fade + rise (`translateY(8px) scale(0.98)` → none) with an ease-out curve; toasts slide in 24px from the right. Spinners are the only loop. No bounces, no parallax, no decorative motion.

**Hover states.** Primary button → darker gradient + deeper glow + 1px lift. Secondary → gray-50 fill + darker border. Ghost / icon buttons → gray-100 fill. Table rows → orange-50 tint (signals row is clickable). Nav items → faint white overlay (on navy); active nav item gets an orange-tinted background + orange text + a trailing orange dot.

**Press / active.** Primary button drops the lift (`translateY(0)`). Generally subtle; no shrink-scale on press.

**Transparency & blur.** Used sparingly and purposefully: the modal scrim is navy-tinted at 55% with a 4px backdrop blur. On the navy sidebar, hover/active states are white at 4–18% alpha. Status badge fills are light tints of their hue.

**Cards.** White, 16px radius, 1px `rgba(0,0,0,0.06)` border, soft two-layer shadow, 20px padding. The universal container — KPIs, charts, tables, forms all sit in one. Tables render inside a `padding=false` card so rows go edge-to-edge.

**Layout rules.** Fixed 256px navy sidebar (scrolls internally, collapsible to 64px) + fixed 64px white top bar; content area scrolls. Content is grid-based: KPI/stat rows are 4-up grids, charts 2-up, all 16px gaps. Tables are full-width with a sticky-feeling tinted header row and a footer pagination bar.

---

## ICONOGRAPHY

- **System:** [**lucide-react**](https://lucide.dev) — the product's only icon set (`lucide-react@0.383` in `package.json`). Clean, consistent **2px stroke**, rounded line caps/joins, 24px grid.
- **Sizes in use:** 13–14px in dense controls (chevrons, table actions, buttons), 16–17px in nav and the top bar, 20–22px in stat-card / KPI icon tiles.
- **Color:** inherit `currentColor` by default; brand orange for active/accent states; muted gray (`--text-muted`/`--text-faint`) for idle controls; semantic hues for status icons.
- **Treatment:** frequently set in a rounded tinted tile (e.g. a 44px `12px`-radius square with a 12%-alpha hue background) for stat cards and notification rows.
- **No emoji, no unicode-glyph icons, no PNG/sprite icons** in the refined system. The legacy `common/index.jsx` used a few emoji (📊 📄 📕 📭 🔍 ✓ ✕) — these are replaced by lucide equivalents.
- **In this repo:** since `lucide-react` isn't importable in standalone HTML cards, `ui_kits/admin/Icons.jsx` ships a hand-transcribed subset of the exact lucide paths exposed as `<Icon name=… />`. When building in the real codebase, import from `lucide-react` directly. The `assets/mahi-logo.png` is the only raster brand asset.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — entry point (import-only); consumers link this.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter wrapper.
- `assets/mahi-logo.png` — foundation logo (orange figures + navy wordmark).

**Tokens** (`tokens/`, all `@import`ed by `styles.css`)
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css`

**Components** (`components/<group>/` — `.jsx` + `.d.ts` + `.prompt.md` + a `@dsCard` HTML)
- `actions/` — **Button**
- `forms/` — **Input**, **Select**, **Textarea**
- `data-display/` — **Card**, **Badge**, **StatCard**, **Pagination**
- `feedback/` — **Modal**, **Toast**, **Loader**, **EmptyState**

Mount from the bundle: `const { Button } = window.MahipatsinhFoundationDesignSystem_49bc15`.

**Foundation cards** (`guidelines/`) — specimen cards for the Design System tab: color (orange / navy / neutrals / status), type (scale / eyebrows + mono), spacing (scale / radii / shadows), brand (logo / iconography).

**UI kit** (`ui_kits/admin/`) — click-through recreation: Login → Dashboard → Donations. See `ui_kits/admin/README.md`.

---

## CAVEATS
- **Fonts load from Google Fonts CDN** (Inter + JetBrains Mono), matching the live app — no font binaries are bundled, so the compiler reports 0 `@font-face`. If you need fully-offline/self-hosted fonts, ask and I'll vendor the `.woff2` files and add `@font-face` rules.
- **Charts** in the UI kit are lightweight hand-drawn SVG stand-ins for the product's **recharts** visualizations — close in spirit, not a recharts port.
- The UI kit recreates the **shell + Dashboard + Donations**; remaining modules are stubbed (same patterns).
