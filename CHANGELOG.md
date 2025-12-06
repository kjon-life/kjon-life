# Changelog

## [Unreleased]
- Documented the SCSS ontology, brand-token map, module graph, and guardrail rules so every agent/assistant knows how to extend the palette without touching raw hexes.
- Migrated the SCSS stack to `@use` modules, added responsive/gradient/shadow/border/transition mixins, and exposed the `@layer utilities` block for repeatable spacing/utility helpers.
- Added `scripts/validate-brand-colors.js` plus `pnpm run validate:brand`/`pnpm test` to enforce the brand-color contract and keep Sass refs in sync with the map.
- Replaced every deprecated global color/map helper with `sass:color`/`sass:map` equivalents and refreshed the README so release prep includes the new validation step.
- Started building and deploying quality gates for 3x productivity and 10x quality

## [v0.0.4] - 2024-09-02
### Added
- Front-end refactor across branch `d4`, reworking layout sections, hero experience, and color adjustments to support the living palette and dark mode approach that still underpins today’s main branch.

### Fixed
- Stabilized `Release 0.0.4` assets via Parcel/Express pipeline and documented the release timeline.

### Notes
- Repository continues to ship the express server + Parcel preprocessors described in the README, making manual `flyctl` deployments and Docker builds follow the same pipeline.

