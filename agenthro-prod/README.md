# AGENTHRO — Production Site

The public AGENTHRO site: a server-rendered Astro app with EmDash content management, deployed on Cloudflare Workers with D1 and R2.

The homepage hero is a real-time Three.js glass-bloom scene, served as a static build from `public/hero` and embedded in the page as an iframe.

## Stack

- **Framework:** Astro + `@astrojs/cloudflare`
- **CMS:** EmDash (`emdash`, `@emdash-cms/cloudflare`)
- **Runtime data:** Cloudflare D1
- **Media storage:** Cloudflare R2
- **3D hero:** Three.js r187, WebGPU renderer with WebGL 2 fallback

## Local development

```bash
npm install
npm run dev
```

- Site: http://localhost:4321
- Admin: http://localhost:4321/_emdash/admin

Other scripts:

```bash
npm run typecheck    # Astro check
npm run build        # production build
npm run preview      # preview the production build
npm run deploy       # build + wrangler deploy
```

Copy `.env.example` to `.env` for local values. Do not commit `.env`.

## Homepage 3D hero

The hero is an animated 3D scene with a translucent glass bust, procedural flowers, floating petals, clouds and light. It replaces the previous hero image; there is no image fallback or fade-in on the hero.

- **Markup:** `src/pages/index.astro`
  - The scene is an `<iframe src="/hero/index.html?embed=1">`.
  - The hero title and CTA buttons remain normal page content above the iframe.
- **Styles:** `src/styles/agenthro/main.css` — search for `.hero-cover-scene`.
- **Static build:** `public/hero/`
  - `index.html`
  - `assets/` — bundled scene JS/CSS
  - `models/head.glb` — optimized head mesh (~0.6 MB, ~44k triangles)
  - `THIRD_PARTY_NOTICES.txt` — required license notices

`?embed=1` hides the scene's own UI and applies the desktop hero framing (subject shifted right and zoomed in). The scene starts rendering before the head mesh finishes loading; the bouquet and head are revealed as soon as the model is ready.

The optimized head is quantized (`KHR_mesh_quantization`) and loads without an external decoder.

### Rebuilding the hero

The scene source is maintained outside this repository at `PROJECT/WEBAPP/glass-bloom`. Build it with the `/hero/` base path, then copy the generated files into `public/hero`:

```bash
cd PROJECT/WEBAPP/glass-bloom
npm install
npm run build -- --base=/hero/

# from this repo
cp path/to/glass-bloom/dist/index.html public/hero/index.html
cp -R path/to/glass-bloom/dist/assets/* public/hero/assets/
cp path/to/glass-bloom/dist/models/head.glb public/hero/models/head.glb
```

Keep `public/hero/THIRD_PARTY_NOTICES.txt` when updating the scene. The head model is the only third-party art asset used by the hero; do not replace it without updating the credit and license record.

For debugging:

- `?webgl=1` forces the WebGL 2 backend.
- `?nopost=1` disables bloom post-processing.

## Credits and licenses — 3D hero

The complete repository-level credit inventory — site software, fonts, AGENTHRO brand marks, team portraits, partner logos, cover art and seed photography — is in the root README: [Credits and licenses](../README.md#credits-and-licenses). Site software notices are at [`public/THIRD_PARTY_NOTICES.txt`](./public/THIRD_PARTY_NOTICES.txt), served at `/THIRD_PARTY_NOTICES.txt`.

### Required notice

**Three.js r187 and its addons** are used under the MIT License. Commercial use, modification and redistribution are permitted; the copyright and permission notice must be included with the distributed software.

The full notice is included at:

- `public/hero/THIRD_PARTY_NOTICES.txt`
- served at `/hero/THIRD_PARTY_NOTICES.txt`

Source: https://github.com/mrdoob/three.js/blob/dev/LICENSE

### Optional credit

**Head base mesh:** “Head (Sculpting) - Realistic” by Dan Ulrich / Blender Studio, released under **CC0 1.0 Universal Public Domain Dedication**.

- Source: https://commons.wikimedia.org/wiki/File:Head_(Sculpting)_-_Realistic_by_Dan_Ulrich_(CC0).stl
- License: https://creativecommons.org/publicdomain/zero/1.0/

CC0 permits copying, modification, distribution and commercial use without asking permission and without attribution. The credit above is included voluntarily.

The delivered model was modified for this site: rotated to Y-up, normalized to 1 unit height, decimated/quantized to roughly 44k triangles, and exported as GLB. CC0 permits these modifications.

A suggested visible credit line, if desired:

> 3D head base: Dan Ulrich / Blender Studio (CC0) · Built with Three.js (MIT)

### Original work

The flowers, leaves, stems, floating petals, clouds, sky, glass material, lighting and scene code were written for this project. They are not third-party assets.

The following experimental assets are **not used** in the final hero:

- Sakura blossom/leaf atlas (CC0)
- Poly Haven grass (CC0)

### Outside this hero

The rest of the site uses fonts and team, partner, event and project imagery with their own credits. See the root [Credits and licenses](../README.md#credits-and-licenses) section for the asset-by-asset record.

### Build tooling

The head mesh was optimized with glTF-Transform and meshoptimizer (MIT). These tools run at build time and are not distributed with the site, so no additional credit is required in the output.
