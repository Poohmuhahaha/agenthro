# AGENTHRO

## Brand Identity & Cross-Project UI Design System

> **Implementation standard · v1.0 · 16 November 2026**  
> For UI/UX designers, frontend developers, creative technologists, researchers, and AI coding/design assistants.  
> **Use this document as the starting design contract for every AGENTHRO digital project.**

---

## 0\. Source of truth and scope

**Brand identity (established):** AGENTHRO is the public name of **The Agenthropology Initiative**. Its established visual direction is vivid sky blue, off-white, ink black, gentle botanical accents, analog editorial texture, and a geometric **A** symbol with a human head-and-torso negative space. Its official language includes:

- **Tagline:** *We invent others to understand ourselves.*  
- **Vision:** *Understanding humans through the agents we create, imagine, and live with.*  
- **3A foundation:** **Agents × Anthropology → Agency**.  
- **4A research themes:** **Attribution, Attachment, Authority, Adaptation**. These are parallel areas of inquiry, **not** a sequential or validated diagnostic scale.

**Implementation conventions (specified in this document):** component sizes, spacing, breakpoints, typography fallback stacks, accessible UI colors, design tokens, and interaction patterns are practical cross-project defaults. They can be refined centrally as the design system matures. Do not represent an implementation recommendation as a preexisting formal AGENTHRO policy.

**Applies to:** websites, research portals, applications, admin consoles, data dashboards, research recruitment, experiment interfaces, mobile interfaces, BCI and interactive installations, presentation microsites, and digital materials.

**Precedence in conflicts:** (1) safety, accessibility, consent and legal requirements; (2) approved master logo/artwork; (3) locked brand principles and palette; (4) semantic tokens and component specifications here; (5) product-specific adjustments documented in a design decision record.

**Ownership/affiliation caution:** AGENTHRO is an initiative. **UTCC, CreativeLabTH Group Co., Ltd., and TropicalTech Co., Ltd. are distinct organizations.** Do not imply university endorsement, sponsor status, employment rights, or ownership unless documented for that specific project. Research authorship and IP must follow actual contribution and agreements.

---

## 1\. Design philosophy

### Design intention

**Scientific clarity × human curiosity × gentle speculative imagination.**

A strong AGENTHRO interface should feel like a credible research instrument connected to a living world: precise without feeling clinical; imaginative without becoming unreadable.

1. **Human before machine.** Show people, agency, decisions, and relationships rather than generic “AI magic.”  
2. **Research before decoration.** Make hypotheses, methods, measurements, limitations, and evidence easy to find.  
3. **Sky before neon.** Lead with AGENTHRO sky blue and light airiness, not synthetic cyberpunk purple or dark-glowing effects.  
4. **Editorial before template.** Use clear typography, deliberate space, modular scientific annotations, and restrained imagery.  
5. **Useful before theatrical.** An application form or research dashboard must be effortless to operate even when the campaign imagery is surreal.  
6. **Designed for uncertainty.** Communicate estimates, signal quality, study limitations, error states, and consent explicitly.  
7. **One family, many experiments.** Subprojects may differ in content and visual intensity, but retain shared typography, colors, navigation, logo behavior, and UX components.

### Personality sliders

| Attribute | Target |
| :---- | :---- |
| Scientific rigor | High |
| Approachability | High |
| Visual imagination | Medium–high on covers; low in work UIs |
| Ornamentation | Low in forms/dashboards; moderate in storytelling |
| Animation | Purposeful and calm; expressive only when the project requires it |
| Commercial tone | Confident, exploratory, never overselling |

**Do not confuse futuristic with inaccessible.** Technical depth belongs in content and interactions, not clutter.

---

## 2\. Naming, language, and architecture

### Official names

| Use | Text |
| :---- | :---- |
| Public brand | **AGENTHRO** |
| Full name | **The Agenthropology Initiative** |
| Primary tagline | **We invent others to understand ourselves.** |
| Research foundation | **Agents × Anthropology → Agency** |
| 4A framework | Attribution · Attachment · Authority · Adaptation |

Spell **AGENTHRO** consistently in all caps in brand-critical placements. Use **Agenthropology** for the proposed research concept and **AGENTHRO** for the initiative/brand. Do not imply “Agenthropology” has already been established as an independent academic discipline.

### Cross-project naming

Use a consistent hierarchy:

```
AGENTHRO                        [parent brand]
AGENTHRO / Research Portal      [product or service]
AGENTHRO / Experimental Interfaces
AGENTHRO / Agent Evaluation Kit
AGENTHRO / <Project Name>
```

The parent **AGENTHRO** is visible on every project's entry page, about page, and persistent application shell (subject to usable display area). Product titles can take the lead on internal screens. Do **not** invent a new AGENTHRO logo for every subproject.

### Copy tone

- Use **direct, curious, precise** language.  
- Prefer “Explore how people interact with AI agents” over “Revolutionizing the unprecedented future of artificial intelligence.”  
- Identify whether a statement is a **research question, hypothesis, observation, finding, or aspiration**.  
- Avoid unsupported claims like “reads emotion,” “detects thoughts,” “bias-free,” “100% safe,” “scientifically proven,” or “certified,” unless independently established.  
- Use meaningful action labels: **Start a project**, **Explore the research**, **Review consent**, **Run evaluation**, **Download report**.  
- Use English for technical canon. Provide well-edited Thai copy for Thai-facing products. Never force uppercase styling on Thai text.  
- Respect user's actual reading level; Grade 7 applicants should not need advanced academic vocabulary to understand onboarding.

---

## 3\. Logo system

### Core mark

The AGENTHRO mark is a **bold, geometric uppercase A** with a **circular human head** and **arched upper-body negative space**. The central human silhouette is integral, not an optional decoration.

**Approved conceptual variations** from the established visual direction:

1. **Full editorial logo:** A with sky/cloud/flower/botanical imagery, AGENTHRO wordmark, full initiative subtitle.  
2. **Flat logo:** Blue, black, or white solid A with the same human negative space; for dense UI, favicons, and icons.  
3. **Horizontal lockup:** Symbol left; wordmark \+ subtitle on right.  
4. **Vertical lockup:** Symbol above wordmark; subtitle beneath.  
5. **Symbol-only:** Small spaces such as app icons, nav collapse, social avatar, or tiny overlays.

**Always use a reviewed vector master.** An image-generation mockup, text glyph `A`, Unicode character, or CSS approximation is **not** a production logo master. If official vector artwork is missing, place a labeled placeholder and request the approved SVG rather than inventing geometry.

### Logo application rules

- Keep clear space on all four sides; default to **at least the head-circle diameter (1x)** where possible.  
- Suggested digital minimums pending master-artwork verification: symbol-only **24 px**; horizontal lockup **120 px wide**; wordmark \+ full subtitle only where subtitle is comfortably readable.  
- For smaller widths, use symbol-only or wordmark-only rather than shrinking the subtitle into illegibility.  
- Use flat **ink** on light surfaces; flat **white** on sufficiently dark surfaces; editorial botanical fill only for large hero/campaign use.  
- The logo should not be rotated, stretched, outlined, recolored with arbitrary gradients, clipped into a different shape, or given drop shadows that deform its contours.  
- Do not use the botanical logo over a busy image that makes the silhouette illegible.  
- No sponsor, faculty, or university logo may be fused into AGENTHRO's mark.

**Recommended asset contract:** teams should supply approved `agenthro-symbol.svg`, `agenthro-horizontal.svg`, `agenthro-vertical.svg`, and `agenthro-monochrome.svg` in their own project's assets directory. These are *expected filenames*, not claims that those files are already provided.

---

## 4\. Color system

### 4.1 Core brand palette · keep these values consistent

| Token | HEX | Purpose |
| :---- | :---- | :---- |
| **Sky Blue** | `#3182F6` | Primary identity, hero background, expressive graphics, selected states |
| **Light Sky Blue** | `#A8C5FF` | Soft shapes, diagrams, low-emphasis decoration |
| **Cloud White** | `#F7F9FF` | Background and editorial paper surfaces |
| **Ink Black** | `#101319` | Primary text, serious research UI, monochrome mark |
| **Signal Coral** | `#FF684A` | Emphasis and warmth, never the only indicator of risk |
| **Botanical Mint** | `#92C9A7` | Organic/research accents |
| **Soft Peach** | `#FFCCAE` | Warm secondary accent |

**Ratios:** roughly 70% white/cloud space, 20% sky/ink brand hierarchy, 10% coral/mint/peach botanical notes on typical interfaces. This is a starting visual heuristic, not a quota. More sky is fine in promotional heroes, less in dense research tables.

### 4.2 Accessible semantic UI colors · implementation defaults

Do not use the brand palette literally for every UI role. **Sky Blue `#3182F6` with small white text is about 3.7:1 contrast**, below WCAG AA's normal-text target of 4.5:1. Preserve the brand blue visually, but choose darker accessible action/label variants.

| Role | Light-mode value | Notes |
| :---- | :---- | :---- |
| Page background | `#F7F9FF` | Cloud |
| Primary surface | `#FFFFFF` | Reading cards, forms, tables |
| Primary text | `#101319` | Ink |
| Secondary text | `#475569` | Legible muted text |
| Primary action background | `#195EC8` | Accessible blue for white CTA label |
| Primary action text | `#FFFFFF` | Contrast with action bg ≈6.0:1 |
| Link text | `#195EC8` | Don't use raw Sky Blue for small body links |
| Focus indicator | `#3182F6` | 2–3 px ring with adequate separation |
| Selected soft background | `#E7F0FF` | Pale blue |
| Divider | `#DCE3ED` | Structural, not core information |
| Error text | `#AD2F1B` | Accessible dark red/coral relative |
| Error background | `#FFF1ED` | Always add text/icon |
| Success text | `#176344` | A semantic green role; not botanical mint text |
| Success background | `#EAF8F0` | Include icon/label |
| Warning text | `#80510C` | Dark amber role |
| Warning background | `#FFF7E7` | Include icon/label |

### 4.3 Dark mode · optional, supported

| Role | Dark-mode value |
| :---- | :---- |
| Background | `#101319` |
| Surface | `#171E29` |
| Elevated surface | `#202B39` |
| Primary text | `#F7F9FF` |
| Secondary text | `#C8D3E4` |
| Link / highlighted text | `#A8C5FF` |
| Primary action background | `#3182F6` |
| Primary action text | `#101319` |
| Divider | `#354357` |
| Focus indicator | `#A8C5FF` |

When backgrounds are atmospheric imagery, add a solid text panel or scrim. Never depend on the photograph being “dark enough.”

### 4.4 Usage rules

**DO:** use large sky-blue surfaces, ink typography, soft cloud backgrounds, and tiny coral/mint moments of human warmth.  
**DON'T:** invent purple/cyan cyberpunk gradients, use coral for every button, make all cards blue, put small white text on `#3182F6`, or encode data only through hue.

---

## 5\. Typography

### 5.1 Typeface roles

The established reference art uses a **strong modern neo-grotesk** for the AGENTHRO wordmark and **tracked monospaced uppercase** for scientific captions. Production UI recommendations:

| Role | Preferred | Safe fallback |
| :---- | :---- | :---- |
| Display / headers | **Neue Haas Grotesk** if properly licensed, or **Inter** | Arial, sans-serif |
| Interface/body | **Inter** | Arial, Noto Sans Thai, sans-serif |
| Data/labels/meta | **Roboto Mono** | ui-monospace, monospace |
| Thai interface | **Noto Sans Thai** | system Thai-capable sans-serif |

Font files are not part of this specification. Confirm licensing before bundling commercial fonts. A multilingual stack is essential; do not make Thai depend on a Latin-only display face.

### 5.2 Type scale (desktop defaults)

| Style | Size / line height | Weight | Use |
| :---- | :---- | :---- | :---- |
| Display | 64–88 / 0.98–1.05 | 700–800 | Marketing hero only |
| H1 | 44–56 / 1.08 | 700 | Primary page title |
| H2 | 32–40 / 1.15 | 700 | Major sections |
| H3 | 24–28 / 1.25 | 650–700 | Cards / subsections |
| H4 | 20–22 / 1.35 | 650 | Subheadings |
| Body L | 18 / 1.6 | 400 | Editorial descriptions |
| Body | 16 / 1.55 | 400 | Standard text |
| Body S | 14 / 1.5 | 400 | Secondary UI only |
| Label | 13 / 1.4 | 600 | Fields and buttons |
| Meta | 11–12 / 1.45 | 500 | Monospaced metadata, never essential instructions |

**Mobile:** Display 42–56, H1 32–40, H2 27–32. Keep body text at 16 px and readable controls at or above 14 px.

### 5.3 Typography behavior

- Headlines: sentence case for most products; **ALL CAPS** only for wordmark, short research cover titles, and tiny eyebrow labels.  
- **Wordmark:** exact vector preferred; do not substitute a text approximation when brand fidelity matters.  
- Mono type: uppercase, tracking `0.10em–0.18em`, sparingly; never long paragraphs.  
- Body measure: target **60–75 characters** per line on desktop, 30–45 on mobile.  
- Avoid more than two or three font styles per screen.  
- Numbers in research data use tabular numerals; include units, definitions and uncertainty.

---

## 6\. Layout & spacing

### Grid

- Use a **4 px base unit** and an **8 px preferred spacing rhythm**.  
- Marketing desktop content: max-width **1200–1280 px**, 12-column grid, **24 px** gutters.  
- Research/product workspace: flexible responsive grid with fixed readable content regions; don't center dense tables into a narrow editorial column.  
- Article/research reading content: max-width **760–840 px**.  
- Default page horizontal padding: mobile **20–24 px**, tablet **32 px**, desktop **48–64 px**.  
- Section spacing: **64–96 px** on long pages; **32–48 px** on mobile.

### Breakpoints (recommended)

```
Mobile       320–599 px   one column; bottom/compact nav as needed
Tablet       600–899 px   2–6 modular columns
Desktop      900–1279 px  full app shell; 12-column marketing grid
Wide        1280+ px      bounded editorial width; flexible data workspace
```

### Geometry and surfaces

| Token | Value | Use |
| :---- | :---- | :---- |
| `radius-sm` | 6 px | Chips, input borders |
| `radius-md` | 12 px | Cards, buttons, panels |
| `radius-lg` | 20 px | Hero feature cards, modal containers |
| `radius-pill` | 999 px | Pills and segmented controls |
| Border | 1 px | Quiet structure |
| Shadow | Subtle | Only for elevation, not decorative gloss |

**Signature AGENTHRO geometry:** one restrained scientific circle, orbital line, crosshair, or registration mark can accompany a major hero or diagram. This is editorial annotation, **not** a requirement for every card.

### Density modes

- **Story mode:** generous whitespace, photography, oversized headlines, botanical imagery.  
- **Work mode:** higher information density, strong filtering, data labels, neutral surfaces, minimal decorative backgrounds.  
- **Immersive mode:** audience-facing projections can be expressive; operator controls must remain high contrast and stable.

---

## 7\. Imagery, illustration & scientific graphics

### Approved aesthetic

- Blue skies, soft clouds, wildflower meadows, botanical textures, faint analog grain.  
- Human and machine in relation to each other: hands, gestures, shared spaces, interaction and agency.  
- Authentic research scenes, workbenches, sensors, prototyping, experimental interfaces.  
- Crisp technical diagrams and fine scientific geometry over editorial photography.  
- Coral flowers, mint leaves, soft peach atmospheres as accents.

### Avoid

- Generic glowing AI brains, holographic neon faces, random circuit boards, faceless corporate stock photos.  
- Fake instruments, invented measurements, scientifically misleading visual evidence.  
- Human or robot imagery that implies a result never observed.  
- Dense grain/noise or imagery behind forms and small text.  
- Unlicensed logos, photographs, fonts, datasets, or research figures.

### Photography / generated imagery rules

- AI-generated art can illustrate **concepts**, never silently substitute for **actual study evidence**.  
- Mark speculative renders or conceptual demonstrations clearly when confusion is possible.  
- User photographs and research participant media require appropriate permission.  
- Keep photos out of interactive form backgrounds; give content clean readable space.  
- Text overlays need a real panel/scrim and checked contrast.  
- Prefer **16:9** for web hero media, **3:4** for vertical editorial portraits, and **1:1** for square social modules; crop responsive media intentionally.

### Diagram conventions

Use **arrows for flow**, **circles for entities/attention**, **thin grid lines for scientific structure**. Label every arrow or relationship when scientific interpretation depends on it. Show legend, scale and units when relevant.

---

## 8\. Core UI component library

**General:** use consistent semantic tokens; components must work with keyboard, touch, screen readers, and both light/dark schemes where supported.

| Component | Standard | Behavior |
| :---- | :---- | :---- |
| **Navigation** | AGENTHRO symbol \+ product title; compact project switcher if necessary | Sticky only if helpful; predictable route hierarchy |
| **Primary button** | Accessible blue `#195EC8`, white text, 12 px radius | Verb-led labels; loading and disabled states |
| **Secondary button** | White/cloud, 1 px border, ink label | Clear focus and hover |
| **Tertiary button** | Text or subtle hover surface | Never look like plain static text |
| **Text input** | Min-height 44–48 px; label above; helper below | Error text directly connected to field |
| **Textarea** | 4–6 line default, growable | Character guidance where useful |
| **Select** | Clear selected value and keyboard operation | Searchable for long lists |
| **Checkbox/radio** | Large clickable label and hit area | Useful for pathways, consent, preferences |
| **Card** | White surface, subtle divider, 12–20 px radius | Information hierarchy, not decorative nesting |
| **Badge** | Neutral unless a status is truly important | Use text, not color alone |
| **Table** | Sticky column/headers only where appropriate | Sort labels, units, responsive overflow/export |
| **Tabs** | 2–5 well-differentiated sections | Persistent active state and keyboard support |
| **Modal** | One focused task | Trap focus; Escape closes when safe |
| **Toast** | Noncritical updates only | No disappearing sole source of important information |
| **Empty state** | Explain why \+ next step | No false data or invented demo results |
| **Chart** | Accessible categories, units, legend, table fallback | Distinguish observed vs inferred data |
| **Progress** | Explicit percent or stage | Never suggest scientific completion from arbitrary animation |

### Button hierarchy

Only **one** primary action per functional area. Most pages should have a single visually dominant action. For research recruitment, the CTA might be **Apply to join**; in an evaluation app, **Start session**. Avoid multiple equally prominent blue buttons.

### Cards

Suggested content order: **eyebrow → title → short explanation → essential metadata → single next action**. Avoid unnecessary nested cards, gradients, and huge drop shadows.

### Forms & research recruitment

- Let people save or review a complex application, if technical capacity allows.  
- Distinguish **required** versus **optional** questions clearly.  
- Use conditional fields to avoid asking people without a research project for a polished proposal.  
- Display support needs, project readiness, method, privacy requirements and availability clearly to reviewers.  
- Separate **application consent** from **research participation consent**.  
- For minors, show age-appropriate information and parent/guardian steps where required.  
- Do not precheck consent boxes.

---

## 9\. Cross-project page recipes

### A. Public website / landing page

```
[AGENTHRO symbol]  Research | Projects | People | Join | About

RESEARCH NOTE / 001                           [subtle orbital annotation]
WHAT MAKES SOMETHING AN AGENT?
A short, human-centered research statement.
[Explore projects] [Our approach]

[One carefully chosen editorial image]

01 / Our questions       02 / Research projects       03 / People
[Framework: 3A + 4A]   [Evidence, prototypes]       [Team and credits]

[Contact / eligibility / privacy / institutional acknowledgments]
```

**Style:** bright, airy, large headings and a single editorial visual. Keep navigation simple and show real projects before decorative claims.

### B. Research project page

```
AGENTHRO / <PROJECT NAME>
Status · Date · Authors · Partners (if officially confirmed)
Research Question
Why It Matters
Methods & Ethics
Prototype / Demo
Findings (if available)
Limitations
Repository · Report · Citation · Contact
```

Each page makes **authorship, contribution and results status** obvious. “Coming soon” is preferable to fabricated results.

### C. Research / HCI evaluation dashboard

```
App shell:     AGENTHRO | Project | Study | Participants | Reports
Toolbar:       Study name · Date filter · Export · Data status
Overview:      Key measures with units and provenance
Main:          Graph / timeline / interaction log
Detail:        Session list + filters
Bottom:        Methodology, limitations, missing data warnings
```

**Style:** restrained white/cloud surfaces, crisp blue selection states, precise monospace readings, no big atmospheric photo behind data.

### D. Interactive / BCI / installation interface

Separate the **participant-facing immersive canvas** from the **researcher/operator dashboard**:

- **Participant screen:** large visual, simple immediate feedback, explicit pause/stop mechanism, no dense metrics.  
- **Operator screen:** equipment connection, signal quality, calibration, live inputs, mapping rules, logging status, consent/session indicator, emergency stop.  
- Distinguish **measured EEG/sensor features** from **algorithm-generated interpretation**.  
- Show artifacts, dropout, or poor signal quality; don't treat noise as meaningful states.  
- Do **not** label EEG features “stress,” “emotion,” “intention,” or “thoughts” without validated evidence.  
- Never tie photic stimulation to rapid flashing without checking photosensitive safety and participant accessibility.  
- If an AI agent is performing or recommending actions, show **human override**, consent and a visible activity trail.

---

## 10\. Motion, microinteraction & audio

### Motion principles

- Motion should reveal **causality** (what changed and why), not distract.  
- Standard UI transitions: **120–220 ms** ease-out for hover, panels, toggles; **250–450 ms** for purposeful page transitions.  
- On scroll, use subtle opacity/translation only; no required information hidden until animation completes.  
- Honor `prefers-reduced-motion: reduce`. Never put essential content behind looping effects.  
- Animated orbital geometry should be sparse and slow, never a constant spinning loading screen unless actually loading.

### Live media experiences

- Provide pause, mute, stop and volume controls where relevant.  
- Announce input source status and calibration.  
- Keep operator controls responsive regardless of visual framerate.  
- Audio and visual effects must not suggest medically meaningful outcomes without evidence.

---

## 11\. Accessibility and ethical UX

**Target: WCAG 2.2 AA where practical.**

Mandatory design checks:

- Body text generally ≥ **4.5:1** contrast; large text/UI indicators generally ≥ **3:1**, as applicable.  
- Never use color alone to communicate class, status, alert, waveform quality or chart category.  
- Visible focus states, meaningful labels, logical tab order, keyboard operation.  
- Comfortable touch targets; aim at **44 × 44 CSS px** for primary controls where space allows.  
- Native headings and semantics, field errors connected to the controls, alt text for meaningful images.  
- Text zoom to 200% without losing function; support narrow mobile widths.  
- Provide captions/transcripts for video/audio demonstrations.  
- Charts have textual explanation and downloadable accessible tables where needed.  
- Participants are told what data is recorded, why, who sees it, how long it is kept, and how to ask questions or withdraw where applicable.  
- No dark patterns around research consent, sponsorship, data sharing, application submission, or access to physiological data.  
- Treat EEG and related physiological data as sensitive research context; follow actual approval, privacy obligations and institutional policy.  
- Youth recruitment, parental permissions and participant-facing studies need separate safeguards.

**Brand-specific contrast reminder:** `#3182F6` is excellent as a visual identity color. Use `#195EC8` for white-on-blue functional buttons and small blue-on-white body links. Use `#101319` for normal-sized text on a raw sky-blue background.

---

## 12\. Research data, charts & status language

### Data first

- Always show **variable name, unit, time range, sample size (where meaningful), and source**.  
- Show missing data as **missing**, not zero.  
- Distinguish raw measurements, estimated values, human ratings and algorithmic predictions.  
- Use provenance/notes for datasets and exact test setup.  
- Do not use colored scientific charts without proper legend and accessible alternative.

### Suggested 4A visual language

Use 4A as consistent **research taxonomy labels**, not score-based psychological diagnoses:

| Theme | Content cue | Suggested accent use |
| :---- | :---- | :---- |
| Attribution | How minds and capabilities are perceived | Sky blue |
| Attachment | How relationships and trust may form | Botanical mint |
| Authority | How decisions and control are delegated | Signal coral |
| Adaptation | How people and systems change together | Soft peach |

**Important:** accent colors are for visual organization, not a declaration of validated measurement dimensions. Add readable labels and icons when category distinction matters.

### Status labels (examples)

`Concept` · `In development` · `Pilot testing` · `Data collection` · `Under review` · `Published` · `Archived`.

Only display verified states. A blog post about a paper is not the same as a peer-reviewed publication.

---

## 13\. Co-branding, sponsorship & attribution

- AGENTHRO is primary on AGENTHRO-owned product entry points.  
- The **actual** host institution, sponsor, partner or research group is shown in a separate section such as **Supported by**, **Research partners**, **Hosted by**, or **Developed with** only when accurate.  
- Partner marks should be visually consistent in size, but **never merged** with AGENTHRO's mark.  
- Differentiate **sponsor** from **co-author** and **research-affiliation** roles.  
- Sponsorship does not automatically confer project ownership, authorship, methodological control, or access to participants' personal information.  
- Do not infer that every AGENTHRO project has the same sponsors or collaborators.  
- For projects not formally hosted or endorsed by UTCC, do not add institutional marks or misleading affiliation language.  
- Put people and their real contributions in project credits and scientific materials.

**Footer baseline:** `AGENTHRO · The Agenthropology Initiative` with appropriate policies and project-specific credits. Add current contact details only after they are verified; avoid invented email addresses/domains.

---

## 14\. CSS design tokens (copy into a project theme)

This is a **reference implementation**, not a dependency or a claim that assets exist. Designers may adapt framework syntax while preserving token intent.

```css
:root {
  /* Brand: fixed */
  --ag-sky: #3182F6;
  --ag-sky-light: #A8C5FF;
  --ag-cloud: #F7F9FF;
  --ag-ink: #101319;
  --ag-coral: #FF684A;
  --ag-mint: #92C9A7;
  --ag-peach: #FFCCAE;

  /* Light UI semantics */
  --ag-bg: #F7F9FF;
  --ag-surface: #FFFFFF;
  --ag-surface-muted: #E7F0FF;
  --ag-text: #101319;
  --ag-text-muted: #475569;
  --ag-border: #DCE3ED;
  --ag-action: #195EC8;
  --ag-action-text: #FFFFFF;
  --ag-link: #195EC8;
  --ag-focus: #3182F6;
  --ag-error: #AD2F1B;
  --ag-error-bg: #FFF1ED;
  --ag-success: #176344;
  --ag-success-bg: #EAF8F0;
  --ag-warning: #80510C;
  --ag-warning-bg: #FFF7E7;

  /* Type */
  --ag-font-ui: Inter, "Noto Sans Thai", Arial, sans-serif;
  --ag-font-display: "Neue Haas Grotesk", Inter, "Noto Sans Thai", Arial, sans-serif;
  --ag-font-mono: "Roboto Mono", ui-monospace, SFMono-Regular, monospace;

  /* Spacing */
  --ag-space-1: 4px;
  --ag-space-2: 8px;
  --ag-space-3: 12px;
  --ag-space-4: 16px;
  --ag-space-5: 20px;
  --ag-space-6: 24px;
  --ag-space-8: 32px;
  --ag-space-12: 48px;
  --ag-space-16: 64px;
  --ag-space-24: 96px;

  /* Shape */
  --ag-radius-sm: 6px;
  --ag-radius-md: 12px;
  --ag-radius-lg: 20px;
  --ag-radius-pill: 999px;
  --ag-container: 1200px;
  --ag-reading-width: 800px;

  /* Motion */
  --ag-motion-quick: 160ms;
  --ag-motion-standard: 220ms;
  --ag-motion-expressive: 380ms;
}

[data-theme="dark"] {
  --ag-bg: #101319;
  --ag-surface: #171E29;
  --ag-surface-muted: #202B39;
  --ag-text: #F7F9FF;
  --ag-text-muted: #C8D3E4;
  --ag-border: #354357;
  --ag-action: #3182F6;
  --ag-action-text: #101319;
  --ag-link: #A8C5FF;
  --ag-focus: #A8C5FF;
}

body {
  background: var(--ag-bg);
  color: var(--ag-text);
  font-family: var(--ag-font-ui);
  font-size: 16px;
  line-height: 1.55;
}

.ag-button--primary {
  background: var(--ag-action);
  color: var(--ag-action-text);
  border: 0;
  border-radius: var(--ag-radius-md);
  min-height: 44px;
  padding: 10px 18px;
  font: 600 14px/1.4 var(--ag-font-ui);
  cursor: pointer;
}

.ag-card {
  background: var(--ag-surface);
  color: var(--ag-text);
  border: 1px solid var(--ag-border);
  border-radius: var(--ag-radius-md);
  padding: var(--ag-space-6);
}

:where(a, button, input, select, textarea, [tabindex]):focus-visible {
  outline: 3px solid var(--ag-focus);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Developer note:** components and token values above are illustrative. Validate accessible contrast again after placing actual text on gradients/images or changing colors. Fonts must be loaded legally; don't silently download proprietary typefaces.

---

## 15\. UI writing examples

| Situation | Use | Avoid |
| :---- | :---- | :---- |
| Primary CTA | “Explore research” | “Explore the future of transformative intelligence” |
| Project claim | “Pilot study in progress” | “Scientifically proven” before review |
| Recruitment | “No research project yet? You can still apply.” | “Only outstanding scholars belong here” |
| EEG connection | “Signal quality: low. Adjust the headset.” | “Your brain is not focused” |
| AI system error | “Agent stopped. Human review required.” | “AI failure: Unknown” |
| Status | “Report draft · 12 Nov 2026” | “Published” unless actually published |
| Consent | “You can review the data collected before continuing.” | “By clicking, you agree to everything” |

---

## 16\. Design review / release checklist

### Brand fidelity

- [ ] Correct AGENTHRO name, approved mark, and readable logo size.  
- [ ] Official sky/ink/cloud palette; coral/mint/peach restrained.  
- [ ] Wordmark/official tagline rendered accurately where used.  
- [ ] Clear relationship between AGENTHRO and project/subproduct.  
- [ ] Partner marks and affiliations verified for this project.  
- [ ] No generic AI clichés, distorted A symbol, or invented brand marks.

### UI quality

- [ ] One clear primary action per screen or region.  
- [ ] Navigation and page titles are predictable.  
- [ ] Mobile at 320 px remains usable without horizontal page scrolling.  
- [ ] Forms have labels, errors, helper copy, and meaningful empty states.  
- [ ] Dense dashboards use work-mode hierarchy rather than marketing effects.  
- [ ] Dark-mode colors and interaction states checked if dark mode is included.  
- [ ] Images have intentional responsive crops and no hidden critical content.

### Accessibility and research integrity

- [ ] Text contrast, UI indicator contrast and keyboard focus are checked.  
- [ ] Reduced-motion preference respected.  
- [ ] Charts are labeled with units, sources and text alternatives.  
- [ ] Screen readers can understand functional control labels and error messages.  
- [ ] Every result distinguishes evidence from speculation.  
- [ ] Research consent, privacy and minor safeguards are handled separately from ordinary site terms.  
- [ ] Biosignal labels don't claim unsupported mind/emotion detection.  
- [ ] Authors, source code, datasets and rights are credited correctly.

### Engineering handoff

- [ ] All theme styles use semantic tokens, not scattered hardcoded colors.  
- [ ] Component states documented: default, hover, focus, loading, disabled, empty, error, success.  
- [ ] Logo/artwork assets are approved, licensed and optimized.  
- [ ] A design-decision note records any justified project-specific departures.

---

## 17\. AI designer / coding-agent handoff prompt

Copy this into a UI-generation tool alongside the project brief:

> **Design and implement this project using `AGENTHRO_CI_UI_DESIGN_SYSTEM.md` as the visual and UX source of truth.** AGENTHRO (The Agenthropology Initiative) uses sky blue `#3182F6`, cloud white `#F7F9FF`, ink `#101319`, and restrained coral `#FF684A`, mint `#92C9A7`, and peach `#FFCCAE`. Style: credible research editorial with human-centered scientific precision and gentle botanical atmosphere. Use approved AGENTHRO SVG assets; never invent a replacement logo. Use clear contemporary grotesk typography, restrained mono metadata, semantic accessible UI colors, responsive spacing, real component states, and WCAG-oriented contrast. Prioritize function and research evidence over decoration. For application forms, dashboards, and operator tools, keep content on clean surfaces and exclude distracting effects. For storytelling covers, allow sky/cloud/botanical visuals. Distinguish hypotheses from findings, respect consent and participant privacy, and never make unsupported BCI or AI capability claims. Show actual authorship/partner credits only when confirmed. Build reusable components and tokens. Document any intentional exceptions.

### Project-specific handoff questions

Every new project brief should answer these **five** items, rather than reinventing the CI:

1. **Project title / audience / primary action:** what is the interface for?  
2. **Product mode:** Story, Work, or Immersive?  
3. **Actual content and evidence:** what claims, charts, photos and files are verified?  
4. **Technical constraints:** framework, device sizes, sensor inputs, hosting, accessibility needs?  
5. **Institutional / sponsor rights:** which names, marks, datasets and assets are actually cleared?

---

## 18\. Version control and governance

This Markdown document should be versioned with each project repository. A shared canonical copy should be maintained centrally. **No product should silently fork the brand palette, logo, naming, or semantic meanings.**

Suggested repo structure:

```
project-root/
├── docs/
│   ├── AGENTHRO_CI_UI_DESIGN_SYSTEM.md
│   └── design-decisions.md
├── public/
│   └── brand/
│       └── [approved AGENTHRO SVG assets added by the team]
├── src/
│   ├── styles/
│   │   └── tokens.css
│   └── components/
│       └── ...
└── README.md
```

&nbsp;

| Version | Date | Change |
| :---- | :---- | :---- |
| 1.0 | 2026-11-16 | Codifies established AGENTHRO identity and proposes practical cross-product UI standards |

**Future approval items:** master vector logo measurements; exact commercial font licensing; formal sponsorship and institutional co-branding templates; tested design token library in Figma/code; internationalization details; research data retention policy. Until approved, the recommendations above are safe defaults, not asserted institutional policies.

---

**AGENTHRO**  
**THE AGENTHROPOLOGY INITIATIVE**  
*We invent others to understand ourselves.*  
**Agents × Anthropology → Agency**