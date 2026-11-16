# AGENTHRO · The Agenthropology Initiative — website

Static public site (Story mode) built on the AGENTHRO CI & UI Design System v1.0.

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

No build step. Plain HTML/CSS/JS.

## Structure

```
index.html
src/styles/tokens.css   # design tokens (§14) — use these, not hardcoded colors
src/styles/main.css     # components & layout
src/scripts/main.js     # theme, EN/TH, nav, form validation
public/brand/           # put approved AGENTHRO SVGs here
docs/design-decisions.md
```

## Before launch

- [ ] Add approved logo SVGs to `public/brand/`
- [ ] Confirm project statuses, credits, partners
- [ ] Connect the Join form to a verified backend + publish privacy policy & contact
- [ ] Replace the conceptual hero illustration with approved imagery (optional)
