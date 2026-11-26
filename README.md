# AGENTHRO · The Agenthropology Initiative

Production website for AGENTHRO. The active app lives in [`agenthro-prod/`](./agenthro-prod) and is built with Astro + EmDash, deployed on Cloudflare Workers with D1 and R2.

The homepage hero is a real-time Three.js glass-bloom scene, served as a static build from `agenthro-prod/public/hero` and embedded in the page as an iframe.

## Repository layout

```
agenthro-prod/    active Astro + EmDash production app
index.html        legacy static site (story mode)
src/              legacy static-site styles and scripts
```

The legacy static site is preserved at the repository root/tag `legacy-static`. The production app is `agenthro-prod/`.

## Run locally

```bash
cd agenthro-prod
npm install
npm run dev
```

- Site: http://localhost:4321
- Admin: http://localhost:4321/_emdash/admin

Other scripts (run inside `agenthro-prod/`):

```bash
npm run typecheck    # Astro check
npm run build        # production build
npm run preview      # preview the production build
npm run deploy       # build + wrangler deploy
```

Copy `agenthro-prod/.env.example` to `agenthro-prod/.env` for local values. Do not commit `.env`.

## Homepage 3D hero

The hero is an animated 3D scene with a translucent glass bust, procedural flowers, floating petals, clouds and light. It replaces the previous hero image; there is no image fallback or fade-in.

- **Markup:** `agenthro-prod/src/pages/index.astro`
  - The scene is an `<iframe src="/hero/index.html?embed=1">`.
  - The hero title and CTA buttons remain normal page content above the iframe.
- **Styles:** `agenthro-prod/src/styles/agenthro/main.css` — search for `.hero-cover-scene`.
- **Static build:** `agenthro-prod/public/hero/`
  - `index.html`
  - `assets/` — bundled scene JS/CSS
  - `models/head.glb` — optimized head mesh (~0.6 MB, ~44k triangles)
  - `THIRD_PARTY_NOTICES.txt` — required license notices

`?embed=1` hides the scene's own UI and applies the desktop hero framing (subject shifted right and zoomed in). The scene starts rendering before the head mesh finishes loading; the bouquet and head are revealed as soon as the model is ready. The head is quantized (`KHR_mesh_quantization`) and loads without an external decoder.

### Rebuilding the hero

The scene source is maintained outside this repository at `PROJECT/WEBAPP/glass-bloom`. Build it with the `/hero/` base path, then copy the generated files into `agenthro-prod/public/hero`:

```bash
cd PROJECT/WEBAPP/glass-bloom
npm install
npm run build -- --base=/hero/

# from the repository root
cp path/to/glass-bloom/dist/index.html agenthro-prod/public/hero/index.html
cp -R path/to/glass-bloom/dist/assets/* agenthro-prod/public/hero/assets/
cp path/to/glass-bloom/dist/models/head.glb agenthro-prod/public/hero/models/head.glb
```

Keep `public/hero/THIRD_PARTY_NOTICES.txt` when updating the scene. The head model is the only third-party art asset used by the hero; do not replace it without updating the credit and license record.

For debugging, the scene supports:

- `?webgl=1` — force the WebGL 2 backend
- `?nopost=1` — disable bloom post-processing

## Credits and licenses

This is the repository credit record for the production site: 3D assets, site software, fonts, brand and event artwork, partner marks, portraits, and demo content.

Required legal notices are distributed with the site:

- [`agenthro-prod/public/THIRD_PARTY_NOTICES.txt`](./agenthro-prod/public/THIRD_PARTY_NOTICES.txt) — site software, fonts and asset-credit references; served at `/THIRD_PARTY_NOTICES.txt`
- [`agenthro-prod/public/hero/THIRD_PARTY_NOTICES.txt`](./agenthro-prod/public/hero/THIRD_PARTY_NOTICES.txt) — Three.js MIT notice + CC0 head credit; served at `/hero/THIRD_PARTY_NOTICES.txt`

Do not remove either notice file when deploying or rebuilding.

### 3D hero

| Item | Author / source | License | Notes |
|---|---|---|---|
| Three.js r187 and addons | three.js authors | MIT | Runtime WebGPU/WebGL renderer, TSL nodes, `GLTFLoader`, `OrbitControls`, geometry utilities and bloom. Full notice in `public/hero/THIRD_PARTY_NOTICES.txt`. |
| Head base mesh | “Head (Sculpting) - Realistic” by Dan Ulrich / Blender Studio | CC0 1.0 | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Head_(Sculpting)_-_Realistic_by_Dan_Ulrich_(CC0).stl). Modified: Y-up, normalized to 1 unit height, decimated to ~44k triangles, quantized, exported as GLB. Attribution is not required; credited voluntarily. |
| Flowers, leaves, stems, petals, clouds, sky, glass material, lighting and scene code | AGENTHRO | Project original | Generated procedurally for this site; no third-party textures or models. |
| glTF-Transform | Don McCurdy | MIT | Build-time mesh weld / simplify / quantize. Not distributed. |
| meshoptimizer | Arseny Kapoulkine | MIT | Build-time simplification backend. Not distributed. |

The experimental Sakura blossom atlas and Poly Haven grass assets from earlier explorations are **not used** in the final hero.

### Website software

| Package | Resolved version | License |
|---|---|---|
| Astro | 7.4.13 | MIT |
| `@astrojs/cloudflare` | 14.4.9 | MIT |
| `@astrojs/react` | 7.1.9 | MIT |
| EmDash | 1.6.0 | MIT |
| `@emdash-cms/cloudflare` | 1.6.0 | MIT |
| React | 19.2.4 | MIT |
| React DOM | 19.2.4 | MIT |
| Three.js | 0.187.0 (r187) | MIT |

Build/deploy-only tools, not distributed with the site:

| Package | Resolved version | License |
|---|---|---|
| `@astrojs/check` | 0.9.12 | MIT |
| `@cloudflare/workers-types` | 5.20261125.1 | MIT OR Apache-2.0 |
| Lightning CSS | 1.33.0 | MPL-2.0 |
| Wrangler | 4.168.0 | MIT OR Apache-2.0 |
| Vite | via Astro | MIT |
| glTF-Transform | build-time | MIT |
| meshoptimizer | build-time | MIT |

The full resolved dependency tree and license identifiers are recorded in `agenthro-prod/package-lock.json`. The production bundle may include portions of the packages above and their transitive dependencies under permissive licenses (MIT, ISC, BSD-2-Clause, BSD-3-Clause, Apache-2.0, MPL-2.0 and 0BSD).

Hosting/runtime: Cloudflare Workers, D1 and R2 (platform services; no third-party attribution required). Site copy and research content are © AGENTHRO unless quoted from a linked source.

### Fonts

The site loads these fonts from Google Fonts; they are not self-hosted or redistributed by this repository:

| Font | Author / source | License |
|---|---|---|
| Inter | Rasmus Andersson | SIL Open Font License 1.1 |
| Noto Sans Thai | Google / Noto Project | SIL Open Font License 1.1 |
| Roboto Mono | Google | SIL Open Font License 1.1 |

- Inter: https://github.com/rsms/inter/blob/master/LICENSE.txt
- Noto Sans Thai: https://github.com/notofonts/noto-fonts/blob/main/LICENSE
- Roboto Mono: https://github.com/googlefonts/RobotoMono/blob/main/LICENSE.txt

If any font is self-hosted in the future, include its full OFL text and copyright notice in the public notices file.

### AGENTHRO brand assets

`public/brand/agenthro-nav-logo.webp`, `public/brand/agenthro-symbol.webp`, `public/brand/partners/agenthro-full.webp`

© AGENTHRO. All rights reserved. The AGENTHRO name, marks and wordmark are not licensed for reuse by the MIT code license.

### Team portraits

| File | Person | Rights |
|---|---|---|
| `public/assets/director-pfp.webp` | TAECHASITH KANGKHUNTOD | Supplied by/© the pictured team member; used on this site with permission. |
| `public/assets/manisara-pfp.webp` | MANISARA BARAMEECHAI | Supplied by/© the pictured team member; used on this site with permission. |
| `public/assets/woraphat-pfp.webp` | WORAPHAT KORKAEW | Supplied by/© the pictured team member; used on this site with permission. |
| `public/assets/pharadee-pfp.webp` | PHARADEE WASUREE | Supplied by/© the pictured team member; used on this site with permission. |
| `public/assets/poowadol-pfp.webp` | POOWADOL THONTRA | Supplied by/© the pictured team member; used on this site with permission. |

Portraits are not licensed for reuse outside this site.

### Partner and sponsor logos

`public/brand/partners/` contains the marks of:

- AGENTHRO — The Agenthropology Initiative
- UTCC School of Engineering
- CreativeLabTH Group
- Tropical Tech
- CommonWonder.Lab
- Peace Tech Inspiration (META PEACE)
- Coeus Technology
- CIA CreativeLab
- Humanoid ASEAN+
- Humanoid Thailand

Each logo is a trademark and/or copyright of its respective organisation. Logos are displayed only to identify partners, sponsors and affiliations; no endorsement beyond the stated relationship is implied. They are not licensed under the MIT code license.

### Event and project cover artwork

All SVGs in `public/assets/covers/` are original abstract cover graphics created for AGENTHRO. They do not contain third-party stock imagery. The named events and projects — including CS50x Thailand 2026, Earth Day 2026, 2367 Hack, HRI Hackathon Thailand 2026, MIT DeCAI, Hackathon Workshop, science-communication and live/talk sessions, and the OAT, PEITHO, Dance Battle, Superman Suit, QAT Atlas, Robo Sonic, Rokar and Agent Resource projects — remain the trademarks/property of their respective owners.

`public/assets/cad7c.svg` is the original orbital-spiral vector artwork used in the About section. © AGENTHRO.

### Additional project imagery

| File | Use | Rights status |
|---|---|---|
| `public/assets/hero-bg.jpg` | Seed section image and poster-card background; not used by the 3D hero | Project-provided artwork; no external stock source or license metadata is recorded in the repository. Confirm provenance before external reuse. |
| `public/assets/2d447.png` | Unreferenced legacy grass render; not used by any page | Unused experimental asset; no source metadata recorded. Remove from `public/` if it is not needed. |

### Seed/demo blog photography

The sample posts in `agenthro-prod/seed/seed.json` use seven photos hosted by Unsplash under the [Unsplash License](https://unsplash.com/license). Attribution is not required; the links below are provided voluntarily. These are demo/seed images and may be replaced by EmDash-managed media in production.

| Seed post | Photo |
|---|---|
| Building for the Long Term | https://images.unsplash.com/photo-1461749280684-dccba630e2f6 |
| The Case for Static | https://images.unsplash.com/photo-1499750310107-5fef28a66643 |
| Learning in Public | https://images.unsplash.com/photo-1432821596592-e2c18b78144f |
| Small Tools, Big Impact | https://images.unsplash.com/photo-1575026615908-666710ae5e47 |
| Designing with Constraints | https://images.unsplash.com/photo-1513542789411-b6a5d4f31634 |
| A Weekend with a Side Project | https://images.unsplash.com/photo-1542831371-29b0f74f9713 |
| Notes on Simplicity | https://images.unsplash.com/photo-1559051668-e1fa58f25786 |

The photographer names are not recorded in the seed data. If these images are kept in a production deployment, retain this record and consider adding photographer credits.

### External links

The Events section links to Facebook hashtag searches and a YouTube live page. Those links do not embed or reproduce third-party content; the platform names and marks belong to Meta and YouTube/Google respectively.

### Licensing summary

- **MIT** (Three.js, Astro, EmDash, React) and **MIT OR Apache-2.0** (Wrangler, `@cloudflare/workers-types`): commercial use permitted; preserve the copyright and permission notices. The required notices are in the public notice files.
- **CC0 1.0** (head base mesh): commercial use permitted; no attribution required. Credit is provided voluntarily.
- **SIL OFL 1.1** (fonts): commercial use permitted under the OFL; fonts are served by Google Fonts, not redistributed here.
- **Unsplash License** (seed photos): free commercial and non-commercial use; no attribution required. Do not sell unmodified copies or use the photos to build a competing image service.
- **AGENTHRO brand marks, team portraits, partner logos and cover art**: all rights reserved / respective owners. The MIT code license does not grant rights to these assets.

If you are a rights holder and believe an asset is missing or miscredited, contact **agenthro@gmail.com** with the subject “Asset credit correction” and the file path or page URL.

## Code license

The source code in this repository is released under the MIT License; see [`LICENSE`](./LICENSE). Brand assets, portraits, partner logos, cover artwork and third-party content are excluded from that license and remain under the terms described above.
