# Design decisions — AGENTHRO public website

Project-specific departures and choices relative to *AGENTHRO CI & UI Design System v1.0* (place the canonical copy at `docs/AGENTHRO_CI_UI_DESIGN_SYSTEM.md`).

| ID | Decision | Rationale |
|----|----------|-----------|
| DD-001 | Logo slots load `public/brand/agenthro-*.svg`; if the file is missing, a dashed **labeled placeholder** is shown. | §3: never invent or approximate the mark. Drop in approved SVGs and they appear automatically. |
| DD-002 | Added dark-mode values for error/success/warning (`#FF9C87`, `#8FD6AE`, `#F2C46D` on dark tinted backgrounds). | §4.3 only defines core dark roles. These keep ≥4.5:1 on `#171E29`. Review centrally. |
| DD-003 | Added `--ag-action-hover` (light `#144FAB`, dark `#5A9BF8`) and `--ag-on-sky`. | Hover state required by §16; not defined in §14. |
| DD-004 | Fonts: Inter, Noto Sans Thai, Roboto Mono loaded from Google Fonts (SIL OFL). Neue Haas Grotesk is **not** loaded. | §5.1 licensing rule. Self-host before launch if privacy policy requires it. |
| DD-005 | Hero uses an inline SVG sky/meadow illustration labeled “Conceptual illustration · not research evidence”. | §7: mark speculative imagery. Replace with approved editorial photography when available. |
| DD-006 | Projects use the sub-product names from §2 with status **Concept** and “Findings: none yet”. People section is an empty state. | §12/§13: only show verified states and confirmed credits. Update once confirmed. |
| DD-007 | Join form is a demo: client-side validation only, no network request. | No verified backend/contact channel exists yet (§13). Application consent is separate from research consent; consent box is never prechecked. |
| DD-008 | EN/TH language toggle; Thai never uppercased or wide-tracked. Tagline and framework terms stay in English as technical canon. | §2 copy tone, §5. |
