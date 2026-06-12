# Graphics spec — research.html

Four illustrations, one per research project section on `pages/research.html`. Use this spec as a prompt brief for an image-generation agent (e.g. Fable). Export as SVG if possible (for crisp scaling and small file size); PNG with transparent background is an acceptable fallback at 2x resolution.

## Shared style guide

- **Visual language:** flat, organic, geometric — soft rounded shapes, no photorealism, no gradients beyond simple flat color washes. Think "abstract editorial illustration," similar to the hero graphic on the homepage (`index.html`), which uses overlapping rounded rectangles, soft blobs, circles, and connecting line/threads.
- **Corner radius:** rounded rectangles should use a consistent ~10px-equivalent radius relative to their size (echoes the ECCE logo's rounded-rectangle letterforms). Avoid sharp corners; avoid full circles for "card" shapes — prefer rounded squares/rectangles.
- **Palette (use only these colors):**
  - Purple: `#4E2A84` (primary/dark), `#7B4FA6` (mid), `#EAE0F5` (pale)
  - Teal: `#2E7D6B` (primary), `#A8CEBC` (light), `#E0EFE8` (pale)
  - Amber: `#C07C1A` (primary), `#EDD9A3` (light), `#FBF3E0` (pale)
  - Neutral ink: `#1A1820` (dark, for line work/figures), `#58545E` (soft gray)
  - Backgrounds: `#FAFAF7` (warm white) or `#F0EDE4` (warm beige) — illustrations should work on either, so keep a transparent or matching background
- **Figures/people:** if depicting people, keep them abstract/iconographic (simple rounded shapes for heads/bodies, no faces or minimal dot/line faces) — consistent with the small avatar icons used elsewhere on the site (simple circle + rounded-trapezoid body).
- **Composition:** landscape orientation, roughly 4:3 or 16:10 aspect ratio, designed to sit beside or above a block of body text in a two-column layout (illustration ~40–45% width on desktop, stacks full-width on mobile).
- **Mood:** warm, optimistic, academic but not corporate — collaborative, reflective, human.

---

## 1. Identity — "Engineering & Science Identity in Graduate Mentorship"

**File:** `images/research-identity.svg`

**Concept:** A mentor figure and a student figure, each represented as simple abstract forms, with overlapping "identity" motifs above their heads — e.g. small rounded-rectangle badges or interlocking shapes in purple and teal, suggesting that each person holds multiple overlapping professional identities (engineer, scientist, mentor). A thin connecting line or thread links the two figures, similar to the "connecting threads" motif in the homepage hero.

**Key elements:** two abstract human figures (one slightly larger/senior, one smaller/junior), 2–3 overlapping rounded shapes above each head in purple/teal/amber tones, one connecting thread between the figures.

---

## 2. Wellbeing — "Doctoral Wellbeing & Identity at the Qualifying Exam"

**File:** `images/research-wellbeing.svg`

**Concept:** A single abstract figure at a desk or seated, facing a tall stack or wall of rounded-rectangle "blocks" (representing the qualifying exam as a milestone/obstacle). Around the figure, scatter small soft circular/blob shapes in teal and amber representing wellbeing dimensions (could be abstract, no need to label). One blob/circle near the figure's head glows slightly larger, suggesting reflection or growth.

**Key elements:** one seated/standing abstract figure, a stack of 3–4 rounded rectangles of varying purple/teal/amber tones forming a "milestone" shape, 4–6 small scattered circles/blobs in teal/amber around the figure.

---

## 3. Assessment — "Testing Aids in Engineering Assessment"

**File:** `images/research-assessment.svg`

**Concept:** A single sheet of paper (rounded-rectangle, white/pale background, echoing the document icon already used in the homepage's Assessment card) shown large and central, covered in abstract "handwritten" marks — short rounded line segments and small shapes in purple, teal, and amber, arranged in clusters/columns to suggest condensed notes on a reference sheet. A magnifying-glass-like rounded shape or a single highlighted cluster suggests close analysis.

**Key elements:** one large rounded-rectangle "sheet" (white fill, thin `#E2DDD6` border), 15–20 short rounded line-segment marks in mixed purple/teal/amber across the sheet in loose handwriting-like clusters, one cluster visually emphasized (slightly larger or circled) to suggest analysis.

---

## 4. Mentorship — "Office Hours: Barriers, Motivations & Inclusive Practice"

**File:** `images/research-mentorship.svg`

**Concept:** An open doorway or open rounded "bracket" shape (echoing the open-C bracket motif in the homepage hero cluster) with a desk/table inside. One abstract figure (instructor) is seated at the desk; outside the doorway, 2–3 small abstract figures approach at varying distances — one close to the door, one mid-distance, one further away — suggesting different students at different stages of deciding whether to attend office hours.

**Key elements:** one open rounded-bracket "doorway" shape in purple, a simple desk/table rectangle inside, one seated figure behind the desk, 2–3 small standing figures outside at varying distances from the doorway, a few short dashed/dotted "path" lines connecting the approaching figures to the doorway (echoing the dashed connector style in the homepage hero).

---

## Usage notes

- Each SVG will be placed at the top of its `.research-detail` block on `pages/research.html`, above or beside the heading/status pill.
- Target export size: viewBox around `480 x 360` (or similar 4:3), scalable.
- Keep file sizes small — flat shapes only, no embedded raster images, no filters/blurs.
