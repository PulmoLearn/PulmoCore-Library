# PulmoLearn RTE — NBRC Outline Data Layer

Production files:
- `nbrc-outline-map.js` — browser-ready global `window.PULMOLEARN_NBRC_OUTLINE`.
- `nbrc-outline-map.json` — portable source for Supabase/mobile tooling.

## Sources
Hierarchy and scored-item weights follow the January 2027 NBRC Detailed Content Outline. Lesson arrays come from the PulmoLearn revised many-to-many crosswalk.

## Stable IDs
Major domains: `I`, `II`, `III`.
Sections: `I.A`, `I.B`, ... `III.I`.
Outline items: `I.A.1`, `I.C.10`, `III.C.3a`, etc.

Each item has `lessonIds`; those IDs reference the canonical RTE lesson registry. A lesson may appear in many outline items but retains one global completion state.

## Current breadth structure
- I. Patient Data — 25 scored items
- II. Management of Devices and Patient Safety Procedures — 25 scored items
- III. Initiation and Modification of Interventions — 50 scored items
- 16 scored sections
- 152 mapped outline task/item records

## Integration order
Load `rte-lesson-registry.js` before `nbrc-outline-map.js`, then use lesson IDs to resolve titles, URLs, topic codes, and completion. Do not duplicate lesson records inside the outline UI.

## Milestones
A section is complete when every unique canonical lesson mapped anywhere in that section is complete. Award a section-completion point event once using an idempotency key such as `nbrc-section:I.A`. Completion is not the same as demonstrated strength; assessment status should remain separate.
